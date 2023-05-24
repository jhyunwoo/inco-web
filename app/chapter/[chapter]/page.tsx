import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";

export const fetchCache = "default-no-store";

export default async function Chapter({
  params: { chapter },
}: {
  params: { chapter: string };
}) {
  const session = await getServerSession(authOptions);

  const chapterInfo = await prisma.chapters.findUnique({
    where: {
      id: chapter,
    },
    include: {
      questions: {
        select: {
          id: true,
        },
      },
    },
  });
  const highestStage1 = await prisma.results.findFirst({
    where: {
      user: {
        email: session?.user?.email,
      },
      stage: 1,
    },
    orderBy: {
      accuracy: "desc",
    },
    select: { accuracy: true },
  });
  const highestStage2 = await prisma.results.findFirst({
    where: {
      user: {
        email: session?.user?.email,
      },
      stage: 2,
    },
    orderBy: {
      accuracy: "desc",
    },
    select: { accuracy: true },
  });
  const highestStage3 = await prisma.results.findFirst({
    where: {
      user: {
        email: session?.user?.email,
      },
      stage: 3,
    },
    orderBy: {
      accuracy: "desc",
    },
    select: { accuracy: true },
  });
  return (
    <div className="w-full min-h-screen p-4 pt-12 pb-20 flex flex-col justify-center items-center space-y-8">
      <div className="bg-white p-4 rounded-xl shadow-lg w-full  flex flex-col  items-start">
        <div className="flex flex-col items-start justify-center w-full">
          <div className="text-3xl font-bold">
            Chapter {chapterInfo?.chapter}
          </div>
          <div className="text-xl font-semibold mt-1">{chapterInfo?.title}</div>
          <div className="text-lg mt-2">
            총 {chapterInfo?.questions.length}문제
          </div>
        </div>
        <div className="flex flex-col  w-full">
          <div className="text-lg font-semibold">최고점</div>
          <div className="w-full">
            <div className="flex bg-slate-100 rounded-t-lg">
              <div className="w-1/2 text-center p-1">난이도</div>
              <div className="w-1/2 text-center p-1">점수</div>
            </div>
            <div className="flex bg-slate-50">
              <div className="w-1/2 text-center p-1">Stage 1 </div>
              <div className="w-1/2 text-center p-1">
                {highestStage1 ? highestStage1.accuracy : "0"}점
              </div>
            </div>
            <div className="flex bg-slate-50">
              <div className="w-1/2 text-center p-1">Stage 2 </div>
              <div className="w-1/2 text-center p-1">
                {highestStage2 ? highestStage2.accuracy : "0"}점
              </div>
            </div>
            <div className="flex bg-slate-50 rounded-b-lg">
              <div className="w-1/2 text-center p-1">Stage 3 </div>
              <div className="w-1/2 text-center p-1">
                {highestStage3 ? highestStage3.accuracy : "0"}점
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  space-y-3 w-full justify-center ">
        <Link
          href={`/chapter/${chapter}/stage/1`}
          className="bg-cyan-400 hover:bg-cyan-500 py-6 text-center transition duration-200 text-white p-4 rounded-xl text-2xl font-semibold"
        >
          Stage 1
        </Link>
        <Link
          href={`/chapter/${chapter}/stage/2`}
          className="bg-sky-400 hover:bg-sky-500 py-6 text-center transition duration-200 text-white p-4 rounded-xl text-2xl font-semibold"
        >
          Stage 2
        </Link>
        <Link
          href={`/chapter/${chapter}/stage/3`}
          className="bg-blue-400 hover:bg-blue-500 py-6 text-center transition duration-200 text-white p-4 rounded-xl text-2xl font-semibold"
        >
          Stage 3
        </Link>
      </div>
    </div>
  );
}
