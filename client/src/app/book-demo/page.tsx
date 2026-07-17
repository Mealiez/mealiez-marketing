"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

export default function BookDemoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <h1 className="text-4xl font-bold">Book Demo</h1>
            <p className="mt-3 max-w-2xl text-white/80">
              Multi-step lead funnel with elegant UI, ready for CRM integration and final content.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <form className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">
                Step 1 · Organization Type
                <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:outline-none focus:ring-1 focus:ring-[#FF6B35]">
                  <option>Hostel Mess</option>
                  <option>College Canteen</option>
                  <option>Industrial Canteen</option>
                  <option>Corporate Cafeteria</option>
                  <option>Cloud Kitchen</option>
                  <option>Subscription Mess Business</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Step 2 · Number of Members / Customers
                <input type="number" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Step 3 · Existing Challenges
                <textarea className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" rows={4} />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Step 4 · Contact Details
                <input type="text" placeholder="Name, email, phone" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" />
              </label>
              <Button type="button" className="w-full">
                Request Demo
              </Button>
            </form>
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
