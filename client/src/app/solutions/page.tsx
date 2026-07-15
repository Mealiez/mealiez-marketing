import Link from "next/link";
import { solutions } from "@/lib/site-data";

export default function SolutionsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <p className="text-sm uppercase tracking-[0.15em] text-blue-100">Solutions</p>
        <h1 className="mt-3 text-4xl font-bold">Industry-Specific Playbooks</h1>
        <p className="mt-3 max-w-3xl text-blue-100">Tailored workflows for hostels, institutions, canteens, kitchens, and subscription operations.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item) => (
          <Link key={item.slug} href={`/solutions/${item.slug}`} className="surface-card p-5 transition hover:-translate-y-1">
            <h2 className="font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.challenge}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
