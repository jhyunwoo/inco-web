import prisma from "@/lib/prisma";

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
  console.log(userList);

  return (
    <div>
      <div>Ranking</div>
      <div></div>
    </div>
  );
}
