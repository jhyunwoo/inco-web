import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Inco | Ranking",
  description: "2023 정보통신 퀴즈 랭킹",
};

export default function RankingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <HeadBar />
      <BottomBar />
      {children}
    </Layout>
  );
}
