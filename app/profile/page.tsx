import { SignOutButton } from "@/components/AuthButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { getGrade, getGradeName } from "@/lib/getGrade";

export default async function Profile() {
  const session = await getServerSession(authOptions);

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
              {getGradeName(userInfo?.point)} | {userInfo?.point}점
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
