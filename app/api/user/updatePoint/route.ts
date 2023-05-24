import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";

export async function PUT(request: Request) {
  const requestData = await request.json();
  const pointData: number = requestData.data.score * 10;
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
    return NextResponse.json(updateUser);
  } else {
    return NextResponse.json("need to auth");
  }
}
