"use client";

import type { questions } from "@prisma/client";

export default function Quiz({ questions }: { questions: questions[] }) {
  console.log(questions);
  return (
    <div>
      <div onClick={() => console.log(questions)}>Quiz</div>
      <div>
        {questions.map((data, key) => (
          <div key={key}>{data.content}</div>
        ))}
      </div>
    </div>
  );
}
