import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((entry) => entry.slug === slug);

  if (!solution) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <p className="text-sm uppercase tracking-[0.15em] text-blue-100">Hero</p>
        <h1 className="mt-3 text-4xl font-bold">{solution.title}</h1>
        <p className="mt-3 max-w-3xl text-blue-100">{solution.challenge}</p>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Industry Challenges</h2>
        <p className="mt-3 text-slate-700">{solution.challenge}</p>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Current Process</h2>
        <p className="mt-3 text-slate-700">{solution.currentProcess}</p>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">How Mealiez Solves It</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {solution.mealiezApproach.map((item) => (
            <li key={item} className="surface-card p-4 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Relevant Features</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {["Meal Booking", "Attendance Management", "Billing & Payments"].map((item) => (
            <div key={item} className="surface-card p-4 text-sm font-semibold text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">ROI Impact</h2>
        <div className="surface-card mt-4 border-blue-200 bg-blue-50 p-5 text-blue-900">{solution.roiImpact}</div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Customer Story</h2>
        <div className="surface-card mt-4 p-5 text-sm text-slate-700">Case-study content can be added later while retaining this layout.</div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <details className="surface-card mt-4 p-4">
          <summary className="cursor-pointer font-semibold text-slate-900">Can this solution be deployed in phases?</summary>
          <p className="mt-2 text-sm text-slate-600">Yes, deployment details can be expanded later for each industry profile.</p>
        </details>
      </section>

      <section className="brand-gradient section-shell flex flex-wrap items-center justify-between gap-4 px-7 py-6 text-white">
        <h2 className="text-2xl font-bold">Book Demo CTA</h2>
        <div className="flex gap-3">
          <Link href="/book-demo" className="rounded-full bg-white px-5 py-2 font-semibold text-blue-700">
            Book Demo
          </Link>
          <Link href="/solutions" className="rounded-full border border-white/80 px-5 py-2 font-semibold text-white">
            Back to Solutions
          </Link>
        </div>
      </section>
    </div>
  );
}
