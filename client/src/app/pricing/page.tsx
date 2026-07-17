"use client";

import Link from "next/link";
import { RoiCalculator } from "@/components/calculators";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

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
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <p className="text-sm uppercase tracking-[0.15em] text-white/80">Hero</p>
            <h1 className="mt-3 text-4xl font-bold">Pricing</h1>
            <p className="mt-3 max-w-3xl text-white/80">
              Transparent pricing designed for growing and enterprise-scale operations.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Pricing Toggle</h2>
            <div className="surface-card mt-4 inline-flex rounded-full p-1">
              <button className="rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF875C] px-4 py-2 text-sm font-semibold text-white">
                Monthly
              </button>
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700">
                Annual
              </button>
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2">
          {plans.map((plan, index) => (
            <AnimatedItem key={plan.name} y={16 + index * 8}>
              <Section className="p-7">
                <h2 className="text-2xl font-bold text-slate-900">{plan.name}</h2>
                <p className="mt-2 text-3xl font-extrabold text-[#FF6B35]">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="surface-card p-3">
                      {feature}
                    </li>
                  ))}
                </ul>
              </Section>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Feature Comparison</h2>
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
                      <td className="p-3 font-medium text-slate-900">{feature}</td>
                      <td className="p-3 text-slate-600">{standard}</td>
                      <td className="p-3 text-slate-600">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">ROI Calculator</h2>
            <div className="mt-4">
              <RoiCalculator />
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
            <Card className="mt-4 p-4">
              <details>
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Can we start with Standard and upgrade later?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Yes, upgrade paths can be configured with no process disruption.
                </p>
              </details>
            </Card>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient flex flex-wrap items-center justify-between gap-4 px-7 py-6 text-white">
            <div className="noise-overlay" />
            <h2 className="text-2xl font-bold">Contact Sales CTA</h2>
            <Button href="/book-demo" variant="secondary">
              Contact Sales
            </Button>
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
