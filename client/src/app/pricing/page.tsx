import Link from "next/link";
import { RoiCalculator } from "@/components/calculators";

const plans = [
  {
    name: "Standard Plan",
    price: "₹9,999/mo",
    desc: "For small and medium mess businesses, hostels, and operators.",
    features: ["Meal Booking", "Attendance", "Billing", "Inventory", "Basic Analytics"],
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    desc: "For universities, industrial canteens, and enterprise food operations.",
    features: ["Multi-Location Setup", "Advanced Controls", "Custom Reports", "Priority Support", "Implementation Support"],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <p className="text-sm uppercase tracking-[0.15em] text-blue-100">Hero</p>
        <h1 className="mt-3 text-4xl font-bold">Pricing</h1>
        <p className="mt-3 max-w-3xl text-blue-100">Transparent pricing designed for growing and enterprise-scale operations.</p>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Pricing Toggle</h2>
        <div className="surface-card mt-4 inline-flex rounded-full p-1">
          <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Monthly</button>
          <button className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700">Annual</button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.name} className="section-shell p-7">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="mt-2 text-3xl font-extrabold text-blue-600">{plan.price}</p>
            <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature} className="surface-card p-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Feature Comparison</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="p-3">Feature</th>
                <th className="p-3">Standard</th>
                <th className="p-3">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Meal Booking", "Yes", "Yes"],
                ["Attendance Automation", "Yes", "Yes"],
                ["Custom Integrations", "No", "Yes"],
                ["Dedicated Success Manager", "No", "Yes"],
              ].map(([feature, standard, enterprise]) => (
                <tr key={feature} className="border-t border-slate-200">
                  <td className="p-3 font-medium text-slate-800">{feature}</td>
                  <td className="p-3 text-slate-600">{standard}</td>
                  <td className="p-3 text-slate-600">{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">ROI Calculator</h2>
        <div className="mt-4">
          <RoiCalculator />
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <details className="surface-card mt-4 p-4">
          <summary className="cursor-pointer font-semibold text-slate-900">Can we start with Standard and upgrade later?</summary>
          <p className="mt-2 text-sm text-slate-600">Yes, upgrade paths can be configured with no process disruption.</p>
        </details>
      </section>

      <section className="brand-gradient section-shell flex flex-wrap items-center justify-between gap-4 px-7 py-6 text-white">
        <h2 className="text-2xl font-bold">Contact Sales CTA</h2>
        <Link href="/book-demo" className="rounded-full bg-white px-6 py-2 font-semibold text-blue-700">
          Contact Sales
        </Link>
      </section>
    </div>
  );
}
