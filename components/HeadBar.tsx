"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeadBar() {
  const pathname = usePathname();

  const [page, setPage] = useState<string>();

  useEffect(() => {
    if (pathname.includes("ranking")) {
      setPage("Ranking");
    } else if (pathname.includes("profile")) {
      setPage("Profile");
    } else {
      setPage("Quiz");
    }
  }, [pathname]);
  return (
    <div className="fixed top-0 right-0 left-0 p-2 px-4 bg-slate-50">
      <div className="text-xl font-semibold">Inco - {page}</div>
    </div>
  );
}
