import { RoiCalculator } from "@/components/calculators";

export default function RoiCalculatorPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-12 text-white">
        <h1 className="text-4xl font-bold">ROI Calculator</h1>
        <p className="mt-3 text-blue-100">Estimate annual savings from better demand planning and reduced wastage.</p>
      </section>
      <section className="section-shell p-6">
        <RoiCalculator />
      </section>
    </div>
  );
}
