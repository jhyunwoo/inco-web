import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const questions = await prisma.questions.findMany();
  return NextResponse.json(questions);
}
