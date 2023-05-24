import prisma from "@/lib/prisma";
import Quiz from "./Quiz";

export default async function ChapterStage1({
  params: { chapter, stageId },
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

    return (
      <div className="flex flex-col">
        <Quiz questions={questions} />
      </div>
    );
  } else {
    return <div className="m-auto text-2xl font-semibold">Invalid Path</div>;
  }
}
