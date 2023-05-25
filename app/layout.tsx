import AuthProvider from "./AuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";
import Recoil from "@/components/Recoil";
import CustomLoading from "@/components/CustomLoading";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inco | 정보통신 퀴즈",
  description: "2023 정보통신 2회고사 범위 퀴즈 게임",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <AuthProvider>
      <Recoil>
        <html lang="kr">
          <body className={inter.className}>
            <CustomLoading />
            {children}
            <Analytics />
          </body>
        </html>
      </Recoil>
    </AuthProvider>
  );
}
