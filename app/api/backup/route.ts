// import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ message: "Access Denied" });
  // await prisma.account.createMany({ data: backupData.account });
  // await prisma.session.createMany({ data: backupData.session });
  // await prisma.user.createMany({ data: backupData.user });
  // await prisma.chapters.createMany({ data: backupData.chapters });
  // await prisma.questions.createMany({ data: backupData.questions });
  // await prisma.results.createMany({ data: backupData.result });
  // return NextResponse.json({ message: "success" });
  // const account = await prisma.account.findMany();
  // const session = await prisma.session.findMany();
  // const user = await prisma.user.findMany();
  // const chapters = await prisma.chapters.findMany();
  // const questions = await prisma.questions.findMany();
  // const result = await prisma.results.findMany();
  // console.log(account);
  // return NextResponse.json({
  //   account: account,
  //   session: session,
  //   user: user,
  //   chapters: chapters,
  //   questions: questions,
  //   result: result,
  // });
}
