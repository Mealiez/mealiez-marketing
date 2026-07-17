"use client";

import { LeakageCalculator } from "@/components/calculators";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

export default function CostLeakagePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-12 text-white">
            <div className="noise-overlay" />
            <h1 className="text-4xl font-bold">Cost Leakage Calculator</h1>
            <p className="mt-3 text-white/80">
              Measure annual revenue leakage from attendance mismatch.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-6">
            <LeakageCalculator />
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
