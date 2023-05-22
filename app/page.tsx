import { SignOutButton } from "@/components/AuthButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="w-full min-h-screen bg-slate-50">
      <div>Main Page</div>
      <SignOutButton />
    </main>
  );
}
