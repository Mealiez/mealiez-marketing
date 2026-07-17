"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";
import React from "react";

type Props = { params: Promise<{ slug: string }> };

export default function ProductDetailPage({ params }: Props) {
  const { slug } = React.use(params);
  const product = products.find((entry) => entry.slug === slug);

  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <p className="text-sm uppercase tracking-[0.15em] text-white/80">Hero</p>
            <h1 className="mt-3 text-4xl font-bold">{product.title}</h1>
            <p className="mt-3 max-w-3xl text-white/80">{product.summary}</p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Problem</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {product.painPoints.map((item, i) => (
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
            <h2 className="text-2xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-3 text-slate-600">
              Mealiez orchestrates data capture, approval, and reporting in one flow to reduce friction and improve reliability.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Key Features</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {product.features.map((item, i) => (
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
            <h2 className="text-2xl font-bold text-slate-900">Workflow Diagram</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["Capture", "Automate", "Optimize"].map((item, i) => (
                <AnimatedItem key={item} y={16 + i * 8}>
                  <Card className="p-5 text-center">
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
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Dashboard Screenshots</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["Ops View", "Finance View", "Growth View"].map((item, i) => (
                <AnimatedItem key={item} y={16 + i * 8}>
                  <Card className="p-4">
                    <p className="text-sm font-semibold text-slate-900">{item}</p>
                    <div className="mt-3 h-24 rounded-xl bg-gradient-to-r from-[#FF6B35]/20 to-[#FF875C]/20" />
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
            <h2 className="text-2xl font-bold text-slate-900">Benefits</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {product.benefits.map((item, i) => (
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
            <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
            <Card className="mt-4 p-4">
              <details>
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Can this module integrate with the complete Mealiez suite?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Yes, detailed integration content can be added in the next content pass.
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
            <h2 className="text-2xl font-bold">Ready to see {product.title} in action?</h2>
            <div className="flex gap-3">
              <Button href="/book-demo" variant="secondary">
                Book Demo
              </Button>
              <Button href="/product" variant="ghost" className="border border-white/30 text-white hover:bg-white/10">
                Back to Product
              </Button>
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
