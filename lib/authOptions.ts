import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import KakaoProvider from "next-auth/providers/kakao";
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    // @ts-ignore
    async session({ session }) {
      if (!session) return;
      if (typeof session?.user?.email !== "string") return;
      const userData = await prisma.user.findUnique({
        where: { email: session?.user?.email },
      });
      if (!userData) return;

      return {
        session: {
          user: userData,
        },
      };
    },
  },
};
