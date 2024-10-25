import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/dashboard">
        <button className="flex justify-center items-center px-4 py-2 bg-cyan-500 text-xl font-semibold rounded-xl">
          Try
        </button>
      </Link>
    </div>
  );
}
