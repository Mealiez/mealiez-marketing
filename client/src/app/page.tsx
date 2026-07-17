"use client";

import { useState } from "react";
import Link from "next/link";
import { LeakageCalculator, RoiCalculator } from "@/components/calculators";
import { products, solutions } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const workflow = ["Booking", "Attendance", "Billing", "Inventory", "Analytics"];
const testimonials = [
  "Mealiez helped us move from guesswork to predictable planning.",
  "Collections are faster and disputes are down across hostels.",
  "Our cafeteria teams now operate with live visibility every day.",
];
const faqs = [
  {
    question: "Can Mealiez handle multi-location operations?",
    answer: "Detailed content will be added later.",
  },
  {
    question: "Is onboarding available for large institutions?",
    answer: "Detailed content will be added later.",
  },
  {
    question: "Can we integrate existing finance systems?",
    answer: "Detailed content will be added later.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroGlow1Ref = useRef<HTMLDivElement>(null);
  const heroGlow2Ref = useRef<HTMLDivElement>(null);
  const heroDashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        heroGlow1Ref.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        heroGlow2Ref.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(
        heroDashboardRef.current,
        { opacity: 0, y: 60, rotate: -2 },
        { opacity: 1, y: 0, rotate: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      );
      gsap.to(heroGlow1Ref.current, {
        y: "random(-20, 20, 5)",
        x: "random(-20, 20, 5)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(heroGlow2Ref.current, {
        y: "random(-15, 15, 5)",
        x: "random(-15, 15, 5)",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-6 pb-12 pt-8">
      {/* Hero Section */}
      <section ref={heroRef} className="brand-gradient section-shell relative overflow-hidden px-8 py-20 text-white md:px-14">
        <div ref={heroGlow1Ref} className="float-soft absolute -right-20 -top-16 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div ref={heroGlow2Ref} className="float-soft absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="noise-overlay" />
        <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div ref={heroTextRef} className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">01 Hero Section</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Precision Meal Booking for Enterprise Scale
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Eliminate food waste and operational friction with our predictive, high-fidelity booking engine designed for complex food service operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/book-demo" variant="secondary" size="lg">
                Start Optimizing
              </Button>
              <Button href="/why-mealiez" variant="ghost" size="lg" className="text-white hover:text-white hover:bg-white/10 border border-white/30">
                View Architecture
              </Button>
            </div>
          </div>
          <div ref={heroDashboardRef} className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 blur-2xl rounded-3xl" />
            <div className="relative bg-white/95 rounded-3xl p-6 shadow-2xl border border-white/50">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF875C]/10 rounded-2xl p-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Live Occupancy</p>
                    <p className="text-2xl font-bold text-[#FF6B35] mt-1">87%</p>
                    <div className="mt-3 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF875C] rounded-full" style={{ width: "87%" }} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FF875C]/10 to-[#FFA27F]/10 rounded-2xl p-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Today's Meals</p>
                    <p className="text-2xl font-bold text-[#FF875C] mt-1">1,247</p>
                    <p className="text-xs text-green-600 mt-1">+12.4% from yesterday</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Wastage Trend</p>
                  <div className="flex items-end gap-1 h-24">
                    {[40, 35, 30, 28, 22, 18].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-[#FF6B35] to-[#FF875C] rounded-t-lg" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mt-3 text-center">18% reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Stats */}
      <Section className="p-7">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">02 Trusted By Section</p>
          </AnimatedItem>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Campuses", value: 200, suffix: "+" },
              { label: "Meals/Month", value: 1.2, suffix: "M+" },
              { label: "Uptime", value: 99.95, suffix: "%" },
              { label: "Wastage Reduction", value: 18, suffix: "%" },
            ].map((stat, i) => (
              <AnimatedItem key={i} y={16}>
                <Card className="p-6 text-center">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-3xl font-extrabold text-slate-900 mt-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Problem Section */}
      <Section className="p-8">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">03 Problem Section</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Why Legacy Methods Fail</h2>
          </AnimatedItem>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Unpredictable Waste", desc: "Overproduction erodes margins without real-time attendance sync." },
              { title: "Siloed Data", desc: "Disconnected systems with no single source of truth for operations." },
              { title: "Administrative Drag", desc: "Manual reporting and reconciliation take hours weekly." },
            ].map((item, i) => (
              <AnimatedItem key={i} y={20}>
                <Card className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35]/10 to-[#FF875C]/10 flex items-center justify-center mb-4">
                    <div className="w-5 h-5 text-[#FF6B35] font-bold">!</div>
                  </div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Product Overview */}
      <Section className="p-8">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">04 Product Overview</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Automated from Booking to Plate</h2>
          </AnimatedItem>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <AnimatedItem key={product.slug} y={24}>
                <Card className="p-6">
                  <Link href={`/product/${product.slug}`} className="block">
                    <h3 className="font-bold text-slate-900 text-lg">{product.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{product.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B35] transition">
                      Explore Product
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Workflow */}
      <Section className="p-8">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">05 Interactive Product Workflow</p>
          </AnimatedItem>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {workflow.map((step, i) => (
              <AnimatedItem key={step} y={16} className="relative">
                <Card className="p-5 text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF875C] text-white flex items-center justify-center font-bold text-sm shadow-lg">
                    {i + 1}
                  </div>
                  <p className="font-bold text-slate-900 mt-3">{step}</p>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Features Grid */}
      <Section className="p-8">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">06 Core Features Grid</p>
          </AnimatedItem>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Smart Booking with Predictive Demand",
              "Live Attendance Verification",
              "Automated Billing & Invoicing",
              "Real-time Inventory Control",
              "Executive Analytics Dashboard",
              "Native Mobile Experience",
            ].map((item, i) => (
              <AnimatedItem key={i} y={20}>
                <Card className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35]/10 to-[#FF875C]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-semibold text-slate-800">{item}</p>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Industry Solutions */}
      <Section className="p-8">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">07 Industry Solutions</p>
          </AnimatedItem>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <AnimatedItem key={solution.slug} y={24}>
                <Card className="p-6">
                  <Link href={`/solutions/${solution.slug}`} className="block">
                    <h3 className="font-bold text-slate-900 text-lg">{solution.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{solution.challenge}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-[#FF6B35] font-semibold">
                      View solution
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Dashboard Showcase */}
      <Section className="p-8">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">08 Dashboard Showcase</p>
          </AnimatedItem>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Operations Dashboard", color: "from-[#FF6B35]/10 to-[#FF875C]/10" },
              { title: "Finance Dashboard", color: "from-[#FF875C]/10 to-[#FFA27F]/10" },
              { title: "Growth Dashboard", color: "from-[#FFA27F]/10 to-[#FFC4A8]/10" },
            ].map((item, i) => (
              <AnimatedItem key={i} y={20}>
                <Card className="p-6">
                  <p className="font-bold text-slate-900 text-lg">{item.title}</p>
                  <div className={`mt-4 h-32 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-white shadow-sm flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ROI & Customer Results */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Section className="p-6">
          <AnimatedSection>
            <AnimatedItem>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">09 ROI Calculator</p>
            </AnimatedItem>
            <AnimatedItem>
              <RoiCalculator />
            </AnimatedItem>
          </AnimatedSection>
        </Section>
        <Section className="p-6">
          <AnimatedSection>
            <AnimatedItem>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">10 Customer Results</p>
            </AnimatedItem>
            <div className="grid gap-3">
              {[
                { label: "Lower Wastage", value: 18, suffix: "%" },
                { label: "Faster Collections", value: 22, suffix: "%" },
                { label: "Better Demand Planning", value: 30, suffix: "%" },
              ].map((item, i) => (
                <AnimatedItem key={i} y={16}>
                  <Card className="p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-800">{item.label}</p>
                      <p className="text-2xl font-extrabold text-[#FF6B35]">
                        <AnimatedCounter value={item.value} suffix={item.suffix} />
                      </p>
                    </div>
                    <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF875C] rounded-full" style={{ width: `${item.value}%` }} />
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </Section>
      </div>

      {/* Testimonials */}
      <Section className="p-8">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">11 Testimonials</p>
          </AnimatedItem>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <AnimatedItem key={i} y={20}>
                <Card className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-sm text-slate-700 italic">“{item}”</blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF875C]" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Operations Director</p>
                      <p className="text-xs text-slate-500">Large University Campus</p>
                    </div>
                  </div>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Founder Story */}
      <Section className="p-8">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">12 Founder Story</p>
          </AnimatedItem>
          <AnimatedItem>
            <p className="mt-4 max-w-3xl text-lg text-slate-700 leading-relaxed">
              Mealiez was built to replace fragmented operations with one reliable platform that helps food businesses scale confidently.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section className="p-8">
        <AnimatedSection>
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">13 FAQ</p>
          </AnimatedItem>
          <div className="mt-8 space-y-3">
            {faqs.map((item, i) => (
              <AnimatedItem key={i} y={16}>
                <FaqItem question={item.question} answer={item.answer} />
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Final CTA */}
      <Section className="brand-gradient px-8 py-16 text-center text-white relative overflow-hidden">
        <div className="noise-overlay" />
        <div className="float-soft absolute -right-20 -top-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="float-soft absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <AnimatedSection className="relative">
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/80">14 Final CTA</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Ready to modernize your operations?</h2>
          </AnimatedItem>
          <AnimatedItem>
            <Button href="/book-demo" variant="secondary" size="lg" className="mt-8">
              Book Your Guided Demo
            </Button>
          </AnimatedItem>
        </AnimatedSection>
      </Section>

      {/* Footer Note */}
      <Section className="p-6 text-sm text-slate-600">
        15 Footer is available site-wide with product, solution, resource, company, legal, and social navigation.
      </Section>

      {/* Cost Leakage Calculator */}
      <Section className="p-6">
        <AnimatedSection>
          <AnimatedItem>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">Cost Leakage Calculator</p>
          </AnimatedItem>
          <AnimatedItem>
            <LeakageCalculator />
          </AnimatedItem>
        </AnimatedSection>
      </Section>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="p-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-slate-900">{question}</span>
        <svg
          className={`w-5 h-5 text-[#FF6B35] transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-sm text-slate-600">
          {answer}
        </div>
      )}
    </Card>
  );
}
