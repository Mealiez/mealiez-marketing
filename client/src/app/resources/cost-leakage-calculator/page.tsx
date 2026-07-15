import { LeakageCalculator } from "@/components/calculators";

export default function CostLeakagePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-12 text-white">
        <h1 className="text-4xl font-bold">Cost Leakage Calculator</h1>
        <p className="mt-3 text-blue-100">Measure annual revenue leakage from attendance mismatch.</p>
      </section>
      <section className="section-shell p-6">
        <LeakageCalculator />
      </section>
    </div>
  );
}
