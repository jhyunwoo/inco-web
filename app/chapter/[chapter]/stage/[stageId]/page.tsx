import prisma from "@/lib/prisma";
import Quiz from "./Quiz";

export default async function ChapterStage1({
  params: { chapter },
}: {
  params: { chapter: string; stageId: string };
}) {
  if (chapter) {
    const questions = await prisma.questions.findMany({
      where: {
        chapters: {
          id: chapter,
        },
      },
    });

    return <Quiz questions={questions} />;
  } else {
    return <div className="m-auto text-2xl font-semibold">Invalid Path</div>;
  }
}
