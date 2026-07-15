import Link from "next/link";
import { LeakageCalculator } from "@/components/calculators";

const sections = [
  "Manual System Problems",
  "Excel Problems",
  "Attendance Issues",
  "Billing Errors",
  "Food Wastage",
];

export default function WhyMealiezPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <h1 className="text-4xl font-bold">Why Mealiez</h1>
        <p className="mt-3 max-w-3xl text-blue-100">See why traditional systems fail and why modern operators switch to Mealiez.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {sections.map((item) => (
          <div key={item} className="section-shell p-6">
            <h2 className="text-xl font-semibold text-slate-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Dedicated conversion content can be added while preserving this section architecture.</p>
          </div>
        ))}
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Cost Leakage Calculator</h2>
        <div className="mt-4">
          <LeakageCalculator />
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Mealiez Comparison Table</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="p-3">Capability</th>
                <th className="p-3">Traditional</th>
                <th className="p-3">Mealiez</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Real-time visibility", "Limited", "Full"],
                ["Attendance-linked billing", "Manual", "Automated"],
                ["Wastage control", "Reactive", "Predictive"],
              ].map(([capability, old, modern]) => (
                <tr key={capability} className="border-t border-slate-200">
                  <td className="p-3 font-medium text-slate-900">{capability}</td>
                  <td className="p-3 text-slate-600">{old}</td>
                  <td className="p-3 text-slate-600">{modern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Customer Results</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {["18% lower waste", "22% faster collections", "30% better planning"].map((item) => (
            <div key={item} className="surface-card p-4 font-semibold text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="brand-gradient section-shell flex flex-wrap items-center justify-between gap-4 px-7 py-6 text-white">
        <h2 className="text-2xl font-bold">Ready to switch from manual to modern?</h2>
        <Link href="/book-demo" className="rounded-full bg-white px-6 py-2 font-semibold text-blue-700">
          Book Demo
        </Link>
      </section>
    </div>
  );
}
