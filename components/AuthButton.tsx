"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="text-base font-semibold text-slate-500 hover:text-slate-600 transition-all duration-200"
    >
      로그아웃
    </button>
  );
}
