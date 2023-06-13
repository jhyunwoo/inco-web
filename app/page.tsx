import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";
import Layout from "@/components/Layout";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const chapters = await prisma.chapters.findMany({
    orderBy: { chapter: "asc" },
  });

  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    const userInfo = await prisma.user.findUnique({
      // @ts-ignore
      where: { email: session.session.user.email },
    });
    if (!userInfo?.nickname) {
      redirect("/profile/nickname");
    }
  }

  //@ts-ignore
  if (!session?.session.user.nickname) {
    redirect("/profile/nickname");
  }

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
