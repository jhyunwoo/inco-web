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
    const keywords = await prisma.questions.findMany({
      select: { keyword: true },
    });
    let keywordList: string[] = [];
    for (let i = 0; i < keywords?.length; i++) {
      for (let j = 0; j < keywords[i].keyword?.length; j++) {
        keywordList.push(keywords[i].keyword[j]);
      }
    }

    return (
      <div className="flex flex-col">
        <div className="text-2xl font-bold">
          Chapter {chapter} Stage {stageId}
        </div>
        <div>
          <Quiz questions={questions} keywords={keywordList} />
        </div>
      </div>
    );
  } else {
    return <div className="m-auto text-2xl font-semibold">Invalid Path</div>;
  }
}
