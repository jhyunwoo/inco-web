import BottomBar from "@/components/BottomBar";
import HeadBar from "@/components/HeadBar";

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
