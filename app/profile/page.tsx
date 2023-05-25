import { SignOutButton } from "@/components/AuthButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  function getGrade(score: any) {
    if (score < 100) {
      return "bg-red-400";
    } else if (score < 200) {
      return "bg-orange-400";
    } else if (score < 400) {
      return "bg-yellow-400";
    } else if (score < 600) {
      return "bg-green-400";
    } else if (score < 800) {
      return "bg-blue-400";
    } else if (score < 1000) {
      return "bg-violet-400";
    } else {
      return "bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400";
    }
  }

  if (typeof session?.user?.email === "string") {
    const userInfo = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    return (
      <div className="flex flex-col">
        <div className="bg-white p-4 rounded-lg shadow-xl">
          <div className="text-2xl font-bold">{session?.user?.name}</div>
          <div className="text-base font-base">{session?.user?.email}</div>
          <div className="flex p-2 justify-between items-center">
            <div className="text-lg">총 점수</div>
            <div
              className={`text-lg font-semibold p-1 px-3 rounded-lg text-white ${getGrade(
                userInfo?.point
              )}`}
            >
              {userInfo?.point}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-16">
          <SignOutButton />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>Invalid User</div>
      </div>
    );
  }
}
