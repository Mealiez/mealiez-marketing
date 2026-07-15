import { LeakageCalculator } from "@/components/calculators";

export default function CostLeakagePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <h1 className="text-4xl font-bold">Cost Leakage Calculator</h1>
      <p className="mt-3 text-slate-600">Measure annual revenue leakage from attendance mismatch.</p>
      <div className="mt-8">
        <LeakageCalculator />
      </div>
    </div>
  );
}
