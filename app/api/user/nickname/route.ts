import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nickname = searchParams.get("nickname");
  const result = await prisma.user.findFirst({ where: { nickname: nickname } });
  if (!result) {
    return NextResponse.json({ available: true });
  } else {
    return NextResponse.json({ available: false });
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  //@ts-ignore
  if (session?.session?.user?.email) {
    const req = await request.json();
    const updateNickname = await prisma.user.update({
      where: {
        //@ts-ignore
        email: session.session.user.email,
      },
      data: {
        nickname: req.data.nickname,
      },
    });
    return NextResponse.json({ updateNickname });
  }
}
