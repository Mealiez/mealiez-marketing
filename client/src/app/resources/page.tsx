import Link from "next/link";

const blogCategories = [
  "Mess Management",
  "Hostel Operations",
  "Food Waste Reduction",
  "Billing & Payments",
  "Attendance Systems",
  "Industry Insights",
  "Product Updates",
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="mt-3 max-w-3xl text-blue-100">Blog, guides, reports, calculators, and case-study resources for operators.</p>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Blog Architecture</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((item) => (
            <article key={item} className="surface-card p-5">
              <h3 className="font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">Category landing layout ready for content upload.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Interactive Tools</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/resources/roi-calculator" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-500">
            ROI Calculator
          </Link>
          <Link href="/resources/cost-leakage-calculator" className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400">
            Cost Leakage Calculator
          </Link>
        </div>
      </section>
    </div>
  );
}
