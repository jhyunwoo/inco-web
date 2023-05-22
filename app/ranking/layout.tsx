import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";
import Layout from "@/components/Layout";

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
