"use client";

import { loading } from "@/lib/recoil";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useRecoilValue } from "recoil";

export default function Loading() {
  const isLoading = useRecoilValue(loading);
  if (isLoading) {
    return (
      <div className="fixed top-0 bottom-0 right-0 left-0 w-full h-screen bg-slate-50/50 flex justify-center items-center">
        <Cog6ToothIcon className="w-12 h-12 text-slate-500 animate-spin" />
      </div>
    );
  } else {
    return <></>;
  }
}
