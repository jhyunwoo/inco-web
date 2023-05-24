"use client";

import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Reload() {
  const router = useRouter();
  return (
    <button
      onClick={router.refresh}
      className="p-1 rounded-lg hover:bg-slate-200 transition-all duration-200"
    >
      <ArrowPathIcon className="w-6 h-6 text-slate-600" />
    </button>
  );
}
