"use client";

import Link from "next/link";
import { solutions } from "@/lib/site-data";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

export default function SolutionsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <p className="text-sm uppercase tracking-[0.15em] text-white/80">Solutions</p>
            <h1 className="mt-3 text-4xl font-bold">Industry-Specific Playbooks</h1>
            <p className="mt-3 max-w-3xl text-white/80">
              Tailored workflows for hostels, institutions, canteens, kitchens, and subscription operations.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <AnimatedItem key={item.slug} y={16 + index * 8}>
              <Link href={`/solutions/${item.slug}`} className="block">
                <Card className="p-5">
                  <h2 className="font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{item.challenge}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B35] transition">
                    Explore Solution
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Card>
              </Link>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
