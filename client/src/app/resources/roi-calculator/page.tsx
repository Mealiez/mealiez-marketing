"use client";

import { RoiCalculator } from "@/components/calculators";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

export default function RoiCalculatorPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-12 text-white">
            <div className="noise-overlay" />
            <h1 className="text-4xl font-bold">ROI Calculator</h1>
            <p className="mt-3 text-white/80">
              Estimate annual savings from better demand planning and reduced wastage.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-6">
            <RoiCalculator />
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
