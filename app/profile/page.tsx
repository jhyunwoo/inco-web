import { SignOutButton } from "@/components/AuthButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export default async function Profile() {
  const session = await getServerSession(authOptions);
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

  if (typeof session?.user?.email === "string") {
    const userInfo = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    return (
      <div className="flex flex-col space-y-4">
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
              {getGradeName(userInfo?.point)} | {userInfo?.point}점
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="col-span-1 sm:col-span-2 text-lg font-semibold text-center">
            랭크 기준
          </div>
          <div className="flex items-center space-x-2 justify-between">
            <div className="bg-red-400 p-1 px-2 rounded-md text-white text-center w-1/2">
              Bronze
            </div>
            <div>0점</div>
          </div>
          <div className="flex items-center space-x-2 justify-between">
            <div className="bg-orange-400 p-1 px-2 rounded-md text-white text-center w-1/2">
              Silver
            </div>
            <div>200점</div>
          </div>
          <div className="flex items-center space-x-2 justify-between">
            <div className="bg-yellow-400 p-1 px-2 rounded-md text-white text-center w-1/2">
              Gold
            </div>
            <div>400점</div>
          </div>
          <div className="flex items-center space-x-2 justify-between">
            <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-lime-600 p-1 px-2 rounded-md text-white text-center w-1/2">
              Platinum
            </div>
            <div>600점</div>
          </div>
          <div className="flex items-center space-x-2 justify-between">
            <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-sky-600 p-1 px-2 rounded-md text-white text-center w-1/2">
              Diamond
            </div>
            <div>800점</div>
          </div>
          <div className="flex items-center space-x-2 justify-between">
            <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-violet-600 p-1 px-2 rounded-md text-white text-center w-1/2">
              Master
            </div>
            <div>1000점</div>
          </div>
          <div className="flex items-center space-x-2 justify-between">
            <div className="bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 p-1 px-2 rounded-md text-white text-center w-1/2">
              Challenger
            </div>
            <div>1500점</div>
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
