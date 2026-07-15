import Link from "next/link";

const plans = [
  {
    name: "Standard Plan",
    price: "₹9,999/mo",
    desc: "For small and medium mess businesses, hostels, and operators.",
    features: ["Meal booking", "Attendance", "Billing", "Inventory", "Basic analytics"],
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    desc: "For universities, industrial canteens, and enterprise-scale food operations.",
    features: ["Multi-location setup", "Advanced controls", "Custom reports", "Priority support", "Implementation support"],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="mt-3 text-slate-600">Transparent pricing for every growth stage with enterprise-ready flexibility.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="mt-2 text-3xl font-extrabold text-blue-600">{plan.price}</p>
            <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link href="/book-demo" className="mt-10 inline-block rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
        Contact Sales
      </Link>
    </div>
  );
}
