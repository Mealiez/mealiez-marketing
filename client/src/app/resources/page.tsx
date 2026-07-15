import Link from "next/link";

const resources = ["Blog", "Guides", "Reports", "Case Studies", "Industry Insights", "Product Updates"];

export default function ResourcesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">Resources</h1>
      <p className="mt-3 text-slate-600">Educational content and growth tools for food operations leaders.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {resources.map((item) => (
          <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Demo content section for {item.toLowerCase()}.</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/resources/roi-calculator" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-500">
          ROI Calculator
        </Link>
        <Link href="/resources/cost-leakage-calculator" className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400">
          Cost Leakage Calculator
        </Link>
      </div>
    </div>
  );
}
