"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const blogCategories = [
  "Mess Management",
  "Hostel Operations",
  "Food Waste Reduction",
  "Billing & Payments",
  "Attendance Systems",
  "Industry Insights",
  "Product Updates",
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <h1 className="text-4xl font-bold">Resources</h1>
            <p className="mt-3 max-w-3xl text-white/80">
              Blog, guides, reports, calculators, and case-study resources for operators.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Blog Architecture</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {blogCategories.map((item, index) => (
                <AnimatedItem key={item} y={16 + index * 8}>
                  <Card className="p-5">
                    <h3 className="font-semibold text-slate-900">{item}</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Category landing layout ready for content upload.
                    </p>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Interactive Tools</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/resources/roi-calculator">
                ROI Calculator
              </Button>
              <Button href="/resources/cost-leakage-calculator" variant="secondary">
                Cost Leakage Calculator
              </Button>
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
