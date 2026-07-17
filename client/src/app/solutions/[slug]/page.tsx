"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

type Props = { params: Promise<{ slug: string }> };

export default function SolutionDetailPage({ params }: Props) {
  // Since we're using "use client", we can unwrap params with React.use() if needed, but let's handle it
  const { slug } = React.use(params);
  const solution = solutions.find((entry) => entry.slug === slug);

  if (!solution) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <p className="text-sm uppercase tracking-[0.15em] text-white/80">Hero</p>
            <h1 className="mt-3 text-4xl font-bold">{solution.title}</h1>
            <p className="mt-3 max-w-3xl text-white/80">{solution.challenge}</p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Industry Challenges</h2>
            <p className="mt-3 text-slate-600">{solution.challenge}</p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Current Process</h2>
            <p className="mt-3 text-slate-600">{solution.currentProcess}</p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">How Mealiez Solves It</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {solution.mealiezApproach.map((item, i) => (
                <AnimatedItem key={item} y={16 + i * 8}>
                  <Card className="p-4 text-center">
                    <p className="text-sm text-slate-700">{item}</p>
                  </Card>
                </AnimatedItem>
              ))}
            </ul>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Relevant Features</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["Meal Booking", "Attendance Management", "Billing & Payments"].map((item, i) => (
                <AnimatedItem key={item} y={16 + i * 8}>
                  <Card className="p-4 text-center">
                    <p className="text-sm font-semibold text-slate-800">{item}</p>
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
            <h2 className="text-2xl font-bold text-slate-900">ROI Impact</h2>
            <div className="mt-4">
              <Card className="p-5 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF875C]/10 border-[#FF6B35]/20">
                <p className="text-[#FF6B35] font-semibold text-lg">{solution.roiImpact}</p>
              </Card>
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Customer Story</h2>
            <Card className="mt-4 p-5 text-sm text-slate-700">
              Case-study content can be added later while retaining this layout.
            </Card>
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
                  Can this solution be deployed in phases?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Yes, deployment details can be expanded later for each industry profile.
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
            <h2 className="text-2xl font-bold">Book Demo CTA</h2>
            <div className="flex gap-3">
              <Button href="/book-demo" variant="secondary">
                Book Demo
              </Button>
              <Button href="/solutions" variant="ghost" className="border border-white/30 text-white hover:bg-white/10">
                Back to Solutions
              </Button>
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}

// Add this import for React.use
import React from "react";
