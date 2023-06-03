import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";

export async function PUT(request: Request) {
  const requestData = await request.json();
  const { result, chapter, stage } = requestData.data;
  const session = await getServerSession(authOptions);
  if (session) {
    // @ts-ignore
    if (typeof session?.session?.user?.email !== "string") return;

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
            // @ts-ignore
            email: session.session.user.email,
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
    let point: number = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        let higestResult: any = await prisma.results.findFirst({
          where: {
            user: {
              // @ts-ignore
              email: session.session.user.email,
            },
            chapter: {
              chapter: i + 1,
            },
            stage: j + 1,
          },
          orderBy: {
            accuracy: "desc",
          },
        });
        if (typeof higestResult?.accuracy === "number") {
          point += higestResult.accuracy;
        }
      }
    }

    const userUpdate = await prisma.user.update({
      where: {
        // @ts-ignore
        email: session.session.user.email,
      },
      data: {
        point: point,
      },
    });

    return NextResponse.json(userUpdate);
  } else {
    return NextResponse.json("need to auth");
  }
}
