import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Inco | Profile",
  description: "Inco Profile",
};

export default function ProfileLayout({
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
