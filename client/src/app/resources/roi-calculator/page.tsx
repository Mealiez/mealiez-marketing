import { RoiCalculator } from "@/components/calculators";

export default function RoiCalculatorPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <h1 className="text-4xl font-bold">ROI Calculator</h1>
      <p className="mt-3 text-slate-600">Estimate annual savings from better demand planning and reduced wastage.</p>
      <div className="mt-8">
        <RoiCalculator />
      </div>
    </div>
  );
}
