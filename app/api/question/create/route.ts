import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const createResult = await prisma?.questions.createMany({
    data: [
      {
        question: "what is number?",
        options: ["1", "2", "3"],
        answer: "answer",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
      {
        question: "what is number? 2",
        options: ["1", "2", "3", "4"],
        answer: "answer2",
        type: "select",
        chaptersId: "clia7tncg0000zn99at3qx3r9",
      },
    ],
  });
  return NextResponse.json(createResult);
}
