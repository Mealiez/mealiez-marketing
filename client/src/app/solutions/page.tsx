import Link from "next/link";
import { solutions } from "@/lib/site-data";

export default function SolutionsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">Solutions</h1>
      <p className="mt-3 text-slate-600">Industry-specific experiences for campuses, enterprises, and food service businesses.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item) => (
          <Link key={item.slug} href={`/solutions/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
            <h2 className="font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.challenge}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
