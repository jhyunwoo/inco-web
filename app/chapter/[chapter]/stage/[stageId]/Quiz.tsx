"use client";

import type { questions } from "@prisma/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Quiz({ questions }: { questions: questions[] }) {
  const [selectedQuestions, setSelectedQuestions] = useState<questions[]>();
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [options, setOptions] = useState<string[]>();
  const [score, setScore] = useState<number>(0);
  const { data: session } = useSession();

  const { chapter } = useParams();

  function shuffle(array: any[]) {
    let newArray = array;
    newArray.sort(() => Math.random() - 0.5);
    return newArray;
  }

  function checkAnswer(answer: string) {
    if (selectedQuestions === undefined) return;
    if (answer === selectedQuestions[questionNumber].answer) {
      setScore(score + 1);
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(questionNumber + 1);
    }
  }

  useEffect(() => {
    if (questions.length < 11) {
      setSelectedQuestions(questions);
    } else {
      let randomQuestions: questions[] = [];
      for (let i = 0; i < 10; i++) {
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
  }, [questions]);

  useEffect(() => {
    if (selectedQuestions === undefined) return;
    if (selectedQuestions[questionNumber]) {
      let selectedOptions: string[] = [];
      if (selectedQuestions[questionNumber].options.length > 3) {
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
  }, [questionNumber, selectedQuestions]);

  return (
    <div className="flex flex-col w-full">
      {selectedQuestions &&
        (selectedQuestions[questionNumber] ? (
          <div>
            <div className="bg-white p-4 rounded-xl shadow-lg font-semibold my-4">
              <div className="text-lg">
                {selectedQuestions &&
                  selectedQuestions[questionNumber]?.question}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {options &&
                options.map((data, key) => (
                  <button
                    onClick={() => checkAnswer(data)}
                    key={key}
                    className="bg-sky-50 shadow-lg  hover:bg-sky-100 transition duration-200 p-2 rounded-lg flex text-base text-left font-semibold"
                  >
                    <div>{data}</div>
                  </button>
                ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-white w-full p-4 rounded-lg mt-12 flex flex-col justify-center items-center">
              <div className="text-lg">총 점수</div>
              <div className="text-xl font-semibold">
                {Math.floor((score / selectedQuestions.length) * 100)}점
              </div>
            </div>
            <div className="w-full flex mt-8">
              <Link
                href={`/chapter/${chapter}`}
                className="w-full p-2 px-4 text-center bg-sky-400 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-500 transition duration-200"
              >
                종료
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
