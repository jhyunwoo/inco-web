import prisma from "@/lib/prisma";
import Reload from "./Reload";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export const fetchCache = "default-no-store";
export const preferredRegion = "icn1";

export default async function Ranking() {
  const userList = await prisma.user.findMany({
    select: {
      name: true,
      nickname: true,
      point: true,
    },
    orderBy: {
      point: "desc",
    },
  });

  let date = new Date();
  date.setTime(date.getTime() + 9 * 60 * 60 * 1000);
  const korDate = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);

  function getGrade(score: any) {
    if (score < 200) {
      return "bg-red-400";
    } else if (score < 400) {
      return "bg-orange-400";
    } else if (score < 600) {
      return "bg-yellow-400";
    } else if (score < 800) {
      return "bg-gradient-to-r from-emerald-600 via-green-500 to-lime-600";
    } else if (score < 1000) {
      return "bg-gradient-to-r from-cyan-600 via-blue-500 to-sky-600";
    } else if (score < 1500) {
      return "bg-gradient-to-r from-purple-600 via-blue-500 to-violet-600";
    } else {
      return "bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400";
    }
  }

  function getGradeName(score: any) {
    if (score < 200) {
      return "Bronze";
    } else if (score < 400) {
      return "Silver";
    } else if (score < 600) {
      return "Gold";
    } else if (score < 800) {
      return "Platinum";
    } else if (score < 1000) {
      return "Diamond";
    } else if (score < 1500) {
      return "Master";
    } else {
      return "Challenger";
    }
  }

  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    const userInfo = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    if (!userInfo?.nickname) {
      redirect("/profile/nickname");
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center p-1">
        <div>{korDate}</div>
        <Reload />
      </div>
      <div className="flex flex-col shadow-lg mt-2 rounded-lg">
        <div className="flex bg-slate-100 py-1 rounded-t-lg">
          <div className="w-3/12 text-center">랭크</div>
          <div className="w-2/12 text-center">순위</div>
          <div className="w-5/12 text-center">이름</div>
          <div className="w-2/12 text-center">점수</div>
        </div>
        {userList.map((data: any, key: number) => (
          <section
            key={key}
            className="flex bg-white py-1 last:rounded-b-lg items-center"
          >
            <div
              className={`w-3/12 text-base text-center text-white rounded-md p-1 m-1 ${getGrade(
                data.point
              )}`}
            >
              {getGradeName(data.point)}
            </div>
            <div className="w-2/12 text-base text-center">{key + 1}</div>
            <div className="w-5/12 text-base text-center">
              {data.nickname ? data.nickname : data.name}
            </div>
            <div className="w-2/12 text-base text-center">{data.point}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
