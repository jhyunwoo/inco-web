import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";

export const metadata = {
  title: "Inco | Quiz",
  description: "Inco 정보통신 퀴즈",
};

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeadBar />
      <BottomBar />
      {children}
    </div>
  );
}
