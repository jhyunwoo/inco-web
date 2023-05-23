export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-slate-50 p-4 pb-16 pt-12 flex flex-col">
      {children}
    </div>
  );
}
