import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((entry) => entry.slug === slug);

  if (!solution) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">{solution.title}</h1>
      <p className="mt-3 text-slate-600">{solution.challenge}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Current Process Challenges</h2>
          <p className="mt-2 text-sm text-slate-600">{solution.currentProcess}</p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold">How Mealiez Solves It</h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">{solution.mealiezApproach.map((item) => <li key={item}>• {item}</li>)}</ul>
        </section>
      </div>

      <section className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-900">
        <h2 className="font-semibold">ROI Impact</h2>
        <p className="mt-2 text-sm">{solution.roiImpact}</p>
      </section>

      <div className="mt-10 flex gap-3">
        <Link href="/book-demo" className="rounded-full bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-500">
          Book Demo
        </Link>
        <Link href="/solutions" className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700 hover:border-slate-400">
          Back to Solutions
        </Link>
      </div>
    </div>
  );
}
