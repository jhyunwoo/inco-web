import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Chapter({
  params: { chapter },
}: {
  params: { chapter: string };
}) {
  const chapterInfo = await prisma.chapters.findFirst({
    where: {
      chapter: Number(chapter),
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="text-2xl font-bold">Chapter {chapterInfo?.chapter}</div>
        <div className="text-lg font-semibold mt-1">{chapterInfo?.title}</div>
      </div>
      <div className="flex flex-col mt-4 space-y-3">
        <Link
          href={`/chapter/${chapter}/stage/1`}
          className="bg-cyan-400 hover:bg-cyan-500 py-8 text-center transition duration-200 text-white p-4 rounded-xl text-2xl font-semibold"
        >
          Stage 1
        </Link>
        <Link
          href={`/chapter/${chapter}/stage/2`}
          className="bg-sky-400 hover:bg-sky-500 py-8 text-center transition duration-200 text-white p-4 rounded-xl text-2xl font-semibold"
        >
          Stage 2
        </Link>
        <Link
          href={`/chapter/${chapter}/stage/3`}
          className="bg-blue-400 hover:bg-blue-500 py-8 text-center transition duration-200 text-white p-4 rounded-xl text-2xl font-semibold"
        >
          Stage 3
        </Link>
      </div>
    </div>
  );
}
