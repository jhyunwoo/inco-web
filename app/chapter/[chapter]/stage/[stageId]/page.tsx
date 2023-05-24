import prisma from "@/lib/prisma";
import Quiz from "./Quiz";

export default async function ChapterStage1({
  params: { chapter, stageId },
}: {
  params: { chapter: string; stageId: string };
}) {
  if (Number(chapter)) {
    const questions = await prisma.questions.findMany({
      where: {
        chapters: {
          chapter: Number(chapter),
        },
      },
    });

    return (
      <div className="flex flex-col">
        <div className="text-2xl font-bold">
          Chapter {chapter} Stage {stageId}
        </div>
        <div>
          <Quiz questions={questions} />
        </div>
      </div>
    );
  } else {
    return <div className="m-auto text-2xl font-semibold">Invalid Path</div>;
  }
}
