"use client";

import { loading } from "@/lib/recoil";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import type { questions } from "@prisma/client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function Quiz({ questions }: { questions: questions[] }) {
  const [selectedQuestions, setSelectedQuestions] = useState<questions[]>();
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [options, setOptions] = useState<string[]>();
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<boolean[]>([]);

  const router = useRouter();

  const setIsLoading = useSetRecoilState(loading);

  const { chapter, stageId } = useParams();

  function shuffle(array: any[]) {
    let newArray = array;
    newArray.sort(() => Math.random() - 0.5);
    return newArray;
  }

  function checkAnswer(answer: string) {
    if (selectedQuestions === undefined) return;
    if (answer === selectedQuestions[questionNumber].answer) {
      setResult([...result, true]);
      setScore(score + 1);
      setQuestionNumber(questionNumber + 1);
    } else {
      setResult([...result, false]);
      setQuestionNumber(questionNumber + 1);
    }
  }

  async function questionEnd() {
    if (selectedQuestions === undefined) return;
    if (selectedQuestions?.length > 0) {
      setIsLoading(true);
      const res = await axios.put("/api/user/updatePoint", {
        data: {
          result: result,
          chapter: chapter,
          stage: stageId,
        },
      });
      router.replace(`/chapter/${chapter}`);
      setIsLoading(false);
      router.refresh();
    } else {
      router.replace(`/chapter/${chapter}`);
    }
  }

  useEffect(() => {
    console.log(questions.length);
    if (questions.length <= Number(stageId) * 10) {
      setSelectedQuestions(questions);
    } else {
      let randomQuestions: questions[] = [];
      for (let i = 0; i < Number(stageId) * 10; i++) {
        let randomValue =
          questions[Math.floor(Math.random() * questions.length)];
        if (randomQuestions.includes(randomValue)) {
          i--;
          continue;
        } else {
          randomQuestions.push(randomValue);
        }
      }
      setSelectedQuestions(randomQuestions);
    }
  }, [questions, stageId]);

  useEffect(() => {
    if (selectedQuestions === undefined) return;
    if (selectedQuestions[questionNumber]) {
      let selectedOptions: string[] = [];
      if (
        selectedQuestions[questionNumber].options.length >
        Number(stageId) + 2
      ) {
        for (let i = 0; i < 3; i++) {
          let randomValue =
            selectedQuestions[questionNumber].options[
              Math.floor(
                Math.random() * selectedQuestions[questionNumber].options.length
              )
            ];
          if (selectedOptions.includes(randomValue)) {
            i--;
            continue;
          } else {
            selectedOptions.push(randomValue);
          }
        }
        selectedOptions.push(selectedQuestions[questionNumber].answer);
        setOptions(shuffle(selectedOptions));
      } else {
        selectedOptions = selectedQuestions[questionNumber].options;
        selectedOptions.push(selectedQuestions[questionNumber].answer);
        setOptions(shuffle(selectedOptions));
      }
    }
  }, [questionNumber, selectedQuestions, stageId]);

  return (
    <div className="flex flex-col w-full p-4 pt-12 pb-16">
      {selectedQuestions &&
        (selectedQuestions[questionNumber] ? (
          <div className="w-full flex justify-center items-center">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg font-semibold my-4 w-full flex flex-col justify-center items-start">
              <div className="flex flex-col justify-center items-start">
                <div>
                  {questionNumber + 1}/{selectedQuestions?.length}
                </div>
                <div className="text-lg">
                  {selectedQuestions &&
                    selectedQuestions[questionNumber]?.question}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 fixed bottom-16 right-4 left-4">
              {options &&
                options.map((data, key) => (
                  <button
                    onClick={() => checkAnswer(data)}
                    key={key}
                    className="bg-white ring-2 ring-sky-400 shadow-md hover:shadow-xl transition duration-200 p-2 rounded-lg flex text-base text-left font-semibold"
                  >
                    <div>{data}</div>
                  </button>
                ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col">
            <div className="w-full p-2 flex flex-col items-center pt-6">
              <div className="text-xl">총 점수</div>
              <div className="text-2xl font-semibold">
                {Math.floor((score / selectedQuestions.length) * 100)}점
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                {selectedQuestions.map((data, key) => (
                  <section
                    key={key}
                    className="flex items-center p-2 rounded-lg shadow-lg"
                  >
                    <div className="p-1">
                      {result[key] ? (
                        <CheckCircleIcon className="w-8 h-8 text-green-500" />
                      ) : (
                        <XCircleIcon className="w-8 h-8 text-red-500" />
                      )}
                    </div>
                    <div>
                      <div className="text-base font-semibold">
                        {key + 1}. {data.question}
                      </div>
                      <div className="font-semibold mt-2 text-orange-600">
                        정답: {data.answer}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <button
              onClick={questionEnd}
              className="text-lg w-full p-3 px-4 text-center bg-sky-400 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-500 transition duration-200 "
            >
              종료
            </button>
          </div>
        ))}
    </div>
  );
}
