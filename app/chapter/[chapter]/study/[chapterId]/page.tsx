import Layout from "@/components/Layout";

export default function Study({
  params: { chapterId },
}: {
  params: { chapterId: string };
}) {
  let images = [];
  if (chapterId === "clia7tncg0000zn99at3qx3r9") {
    for (let i = 1; i < 45; i++) {
      images.push(`chapter1-${i}`);
    }
  }
  console.log(images);
  return (
    <Layout>
      <div>Study</div>
    </Layout>
  );
}
