import Link from "next/link";

const painAreas = [
  "Why Manual Systems Fail",
  "Why Excel Fails",
  "Why Traditional ERP Fails",
  "Cost of Food Wastage",
  "Mealiez Advantage",
];

export default function WhyMealiezPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">Why Mealiez</h1>
      <p className="mt-3 text-slate-600">A conversion-focused narrative page to show the true cost of outdated workflows.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {painAreas.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Demo content placeholder for this section with future customer proof and comparative insights.</p>
          </div>
        ))}
      </div>
      <Link href="/book-demo" className="mt-10 inline-block rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
        Book Demo
      </Link>
    </div>
  );
}
