"use client";

import Link from "next/link";
import { LeakageCalculator } from "@/components/calculators";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

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
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <h1 className="text-4xl font-bold">Why Mealiez</h1>
            <p className="mt-3 max-w-3xl text-white/80">
              See why traditional systems fail and why modern operators switch to Mealiez.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((item, index) => (
            <AnimatedItem key={item} y={16 + index * 8}>
              <Section className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">{item}</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Dedicated conversion content can be added while preserving this section architecture.
                </p>
              </Section>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Cost Leakage Calculator</h2>
            <div className="mt-4">
              <LeakageCalculator />
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Mealiez Comparison Table</h2>
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
                      <td className="p-3 text-[#FF6B35] font-semibold">{modern}</td>
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
            <h2 className="text-2xl font-bold text-slate-900">Customer Results</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["18% lower waste", "22% faster collections", "30% better planning"].map((item, i) => (
                <AnimatedItem key={item} y={16 + i * 8}>
                  <Card className="p-4 text-center">
                    <p className="font-semibold text-slate-800">{item}</p>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient flex flex-wrap items-center justify-between gap-4 px-7 py-6 text-white">
            <div className="noise-overlay" />
            <h2 className="text-2xl font-bold">Ready to switch from manual to modern?</h2>
            <Button href="/book-demo" variant="secondary">
              Book Demo
            </Button>
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
