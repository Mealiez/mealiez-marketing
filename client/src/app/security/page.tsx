"use client";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const sections = ["Data Security", "Privacy", "Infrastructure", "Backups", "Reliability"];

export default function SecurityPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <h1 className="text-4xl font-bold">Security</h1>
            <p className="mt-3 max-w-3xl text-white/80">
              Secure-by-design architecture for reliable and compliant food operations.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((item, index) => (
            <AnimatedItem key={item} y={16 + index * 8}>
              <Section className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">{item}</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Detailed content can be added later while keeping this trust-focused structure.
                </p>
              </Section>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
