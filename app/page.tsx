import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";
import Layout from "@/components/Layout";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const chapters = await prisma.chapters.findMany({
    orderBy: { chapter: "asc" },
  });

  return (
    <Layout>
      <HeadBar />
      <BottomBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((data, key) => (
          <Link
            href={`/chapter/${data.id}`}
            key={key}
            className=" bg-white p-4 rounded-lg h-40 shadow-lg hover:shadow-xl transition duration-200 flex flex-col justify-center items-start"
          >
            <div className="text-2xl font-semibold">Chapter {data.chapter}</div>
            <div className="text-lg font-medium mt-2">{data.title}</div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
