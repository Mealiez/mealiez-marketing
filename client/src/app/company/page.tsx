"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

export default function CompanyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <h1 className="text-4xl font-bold">Company</h1>
            <p className="mt-3 max-w-3xl text-white/80">
              About Mealiez, founder story, mission, and enterprise partnership details.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-4 md:grid-cols-3">
          {["About Mealiez", "Founder Story", "Mission & Vision"].map((item, index) => (
            <AnimatedItem key={item} y={16 + index * 8}>
              <Section className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">{item}</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Content placeholder with polished layout ready for final copy.
                </p>
              </Section>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
            <p className="mt-2 text-slate-600">
              Share your organization details and we will schedule the right implementation conversation.
            </p>
            <Button href="/book-demo" className="mt-4">
              Contact Mealiez
            </Button>
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
