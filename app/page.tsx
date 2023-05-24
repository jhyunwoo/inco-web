import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const chapters = await prisma.chapters.findMany({
    orderBy: { chapter: "asc" },
  });

  return (
    <div className="w-full min-h-screen flex flex-col justify-center bg-slate-50">
      <HeadBar />
      <BottomBar />
      <div className="flex overflow-x-scroll pb-10 scrollbar-hide snap-x snap-mandatory">
        <div className="flex h-80 ">
          {chapters.map((data, key) => (
            <Link
              href={`/chapter/${data.id}`}
              key={key}
              className="w-screen p-8 snap-center "
            >
              <div className=" bg-white p-4 rounded-lg shadow-lg w-full h-full flex flex-col justify-center items-start">
                <div className="text-3xl font-semibold">
                  Chapter {data.chapter}
                </div>
                <div className="text-xl font-medium mt-2">{data.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
