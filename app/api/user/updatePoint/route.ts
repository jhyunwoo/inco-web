import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";

export async function PUT(request: Request) {
  const requestData = await request.json();
  const { score, result, chapter, stage } = requestData.data;
  const pointData: number = score * 10;
  const session = await getServerSession(authOptions);
  if (session) {
    if (typeof session?.user?.email !== "string") return;
    const updateUser = await prisma.user.update({
      where: {
        email: session?.user?.email,
      },
      data: {
        point: { increment: pointData },
      },
    });

    let score = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i]) {
        score++;
      }
    }
    let accuracy = Math.floor((score / result.length) * 100);
    const newResult = await prisma.results.create({
      data: {
        user: {
          connect: {
            email: session.user.email,
          },
        },
        chapter: {
          connect: {
            id: chapter,
          },
        },
        stage: Number(stage),
        answerlist: result,
        accuracy: accuracy,
      },
    });
    return NextResponse.json(updateUser);
  } else {
    return NextResponse.json("need to auth");
  }
}
