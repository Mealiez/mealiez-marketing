"use client";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const stories = [
  { name: "North Valley Hostel", result: "18% reduction in food wastage" },
  { name: "Citywide Canteens", result: "22% faster collections" },
  { name: "Metro Cloud Kitchen", result: "30% better demand planning" },
];

export default function CustomersPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <AnimatedSection>
        <AnimatedItem>
          <Section className="brand-gradient px-8 py-14 text-white">
            <div className="noise-overlay" />
            <h1 className="text-4xl font-bold">Customers</h1>
            <p className="mt-3 max-w-3xl text-white/80">
              Customer stories, case studies, and testimonials with measurable impact.
            </p>
          </Section>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedItem>
          <Section className="p-7">
            <h2 className="text-2xl font-bold text-slate-900">Customer Stories</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {stories.map((story, index) => (
                <AnimatedItem key={story.name} y={16 + index * 8}>
                  <Card className="p-5">
                    <h3 className="font-semibold text-slate-900">{story.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{story.result}</p>
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
            <h2 className="text-2xl font-bold text-slate-900">Case Studies</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {["Client Overview", "Implementation", "Results"].map((item, i) => (
                <AnimatedItem key={item} y={16 + i * 8}>
                  <Card className="p-5">
                    <h3 className="font-semibold text-slate-900">{item}</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Template section ready for full case-study content.
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
            <h2 className="text-2xl font-bold text-slate-900">Testimonials</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {stories.map((story, index) => (
                <AnimatedItem key={story.name} y={16 + index * 8}>
                  <Card className="p-5 text-sm text-slate-700">
                    "{story.name} saw {story.result.toLowerCase()} after switching to Mealiez."
                  </Card>
                </AnimatedItem>
              ))}
            </div>
          </Section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
