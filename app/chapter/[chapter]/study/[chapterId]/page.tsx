import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

export default function Study({
  params: { chapterId },
}: {
  params: { chapterId: string };
}) {
  let images = [];
  if (chapterId === "clia7tncg0000zn99at3qx3r9") {
    for (let i = 1; i < 45; i++) {
      if (i < 10) {
        images.push(`chapter1-0${i}`);
      } else {
        images.push(`chapter1-${i}`);
      }
    }
  } else if (chapterId === "clia87lmt0000zn1l76ff8k4a") {
    for (let i = 1; i < 34; i++) {
      if (i < 10) {
        images.push(`chapter2-0${i}`);
      } else {
        images.push(`chapter2-${i}`);
      }
    }
  } else if (chapterId === "clia87lmt0002zn1l7t4o3rjp") {
    for (let i = 1; i < 30; i++) {
      if (i < 10) {
        images.push(`chapter3-0${i}`);
      } else {
        images.push(`chapter3-${i}`);
      }
    }
  } else if (chapterId === "clia87lmt0004zn1l04rp386g") {
    for (let i = 1; i < 51; i++) {
      if (i < 10) {
        images.push(`chapter4-0${i}`);
      } else {
        images.push(`chapter4-${i}`);
      }
    }
  } else if (chapterId === "clia87lmu0006zn1lph7dnsfg") {
    for (let i = 1; i < 64; i++) {
      if (i < 10) {
        images.push(`chapter5-0${i}`);
      } else {
        images.push(`chapter5-${i}`);
      }
    }
  } else if (chapterId === "clitkmyfe0000zno86mowa5y8") {
    for (let i = 1; i < 72; i++) {
      if (i < 10) {
        images.push(`chapter6-0${i}`);
      } else {
        images.push(`chapter6-${i}`);
      }
    }
  }
  return (
    <Layout>
      <div className={"mx-auto flex justify-center flex-col"}>
        <Link
          href={`/chapter/${chapterId}`}
          className="flex items-center p-2 fixed bottom-20 right-4 bg-white/50 rounded-lg shadow-xl backdrop-blur-sm hover:bg-sky-500/60 hover:text-white transition duration-200"
        >
          <ChevronDoubleLeftIcon className={"w-6 h-6"} />
          <div className="font-semibold">문제 풀기</div>
        </Link>
        {images.map((image, key) => (
          <section key={key}>
            <Image
              src={`/images/study/${image}.jpg`}
              alt={"study"}
              width={1000}
              height={1000}
            />
          </section>
        ))}
      </div>
    </Layout>
  );
}
