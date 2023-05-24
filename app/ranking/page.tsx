import prisma from "@/lib/prisma";
import Reload from "./Reload";

export const fetchCache = "default-no-store";

export default async function Ranking() {
  const userList = await prisma.user.findMany({
    select: {
      name: true,
      point: true,
    },
    orderBy: {
      point: "desc",
    },
  });

  const date = new Date();
  const korDate = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);

  return (
    <div>
      <div className="flex justify-between items-center p-1">
        <div>{korDate}</div>
        <Reload />
      </div>
      <div className="flex flex-col shadow-lg mt-2 rounded-lg">
        <div className="flex bg-slate-100 py-1 rounded-t-lg">
          <div className="w-1/3 text-center">순위</div>
          <div className="w-1/3 text-center">이름</div>
          <div className="w-1/3 text-center">점수</div>
        </div>
        {userList.map((data, key) => (
          <section key={key} className="flex bg-white py-1 last:rounded-b-lg">
            <div className="w-1/3  text-base text-center">{key + 1}</div>
            <div className="w-1/3  text-base text-center">{data.name}</div>
            <div className="w-1/3  text-base text-center">{data.point}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
