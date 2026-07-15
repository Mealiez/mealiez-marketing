import Link from "next/link";
import { LeakageCalculator, RoiCalculator } from "@/components/calculators";
import { products, solutions } from "@/lib/site-data";

const workflow = ["Booking", "Attendance", "Billing", "Inventory", "Analytics"];
const testimonials = [
  "Mealiez helped us move from guesswork to predictable planning.",
  "Collections are faster and disputes are down across hostels.",
  "Our cafeteria teams now operate with live visibility every day.",
];
const faqs = [
  "Can Mealiez handle multi-location operations?",
  "Is onboarding available for large institutions?",
  "Can we integrate existing finance systems?",
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-6 pb-12 pt-8">
      <section className="brand-gradient section-shell relative overflow-hidden px-8 py-16 text-white md:px-14">
        <div className="float-soft absolute -right-16 -top-12 h-52 w-52 rounded-full bg-white/15 blur-2xl" />
        <div className="relative max-w-3xl animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-100">01 Hero Section</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
            The operating system for modern mess and food operations.
          </h1>
          <p className="mt-5 text-lg text-blue-100">
            Automate meal booking, attendance, billing, inventory, and analytics in one premium workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book-demo" className="rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105">
              Book Demo
            </Link>
            <Link href="/why-mealiez" className="rounded-full border border-white/80 px-6 py-3 font-semibold text-white transition hover:bg-white/15">
              Why Mealiez
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">02 Trusted By Section</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["200+ campuses", "1.2M+ meals/month", "99.95% uptime", "18% avg wastage reduction"].map((item) => (
            <div key={item} className="surface-card animate-fade-up p-5 text-center font-semibold text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">03 Problem Section</p>
        <h2 className="mt-2 text-3xl font-bold">Manual ops, excel sheets, and disconnected tools leak revenue daily.</h2>
      </section>

      <section className="section-shell p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">04 Product Overview</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.slug} href={`/product/${product.slug}`} className="surface-card group p-5 transition hover:-translate-y-1">
              <h3 className="font-semibold text-slate-900">{product.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{product.summary}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">05 Interactive Product Workflow</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {workflow.map((step, i) => (
            <div key={step} className="surface-card p-4 text-center">
              <p className="text-xs font-semibold text-blue-600">Step {i + 1}</p>
              <p className="mt-1 font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">06 Core Features Grid</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {["Smart Booking", "Live Attendance", "Automated Billing", "Inventory Control", "Executive Analytics", "Mobile Experience"].map((item) => (
            <div key={item} className="surface-card p-5 font-semibold text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">07 Industry Solutions</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="surface-card p-5 transition hover:-translate-y-1">
              <h3 className="font-semibold text-slate-900">{solution.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{solution.challenge}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">08 Dashboard Showcase</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {["Operations Dashboard", "Finance Dashboard", "Growth Dashboard"].map((item) => (
            <div key={item} className="surface-card p-5">
              <p className="font-semibold text-slate-900">{item}</p>
              <div className="mt-3 h-24 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="section-shell p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">09 ROI Calculator</p>
          <RoiCalculator />
        </div>
        <div className="section-shell p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">10 Customer Results</p>
          <div className="grid gap-3">
            {["18% lower wastage", "22% faster collections", "30% better demand planning"].map((item) => (
              <div key={item} className="surface-card p-4 font-semibold text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">11 Testimonials</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item} className="surface-card p-5 text-sm text-slate-700">
              “{item}”
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section-shell p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">12 Founder Story</p>
        <p className="mt-3 max-w-3xl text-slate-700">
          Mealiez was built to replace fragmented operations with one reliable platform that helps food businesses scale confidently.
        </p>
      </section>

      <section className="section-shell p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">13 FAQ</p>
        <div className="mt-5 space-y-3">
          {faqs.map((item) => (
            <details key={item} className="surface-card p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">{item}</summary>
              <p className="mt-2 text-sm text-slate-600">Detailed content will be added later.</p>
            </details>
          ))}
        </div>
      </section>

      <section className="brand-gradient section-shell px-8 py-12 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-100">14 Final CTA</p>
        <h2 className="mt-3 text-3xl font-bold">Ready to modernize your operations?</h2>
        <Link href="/book-demo" className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-blue-700 transition hover:scale-105">
          Book Your Guided Demo
        </Link>
      </section>

      <section className="section-shell p-6 text-sm text-slate-600">
        15 Footer is available site-wide with product, solution, resource, company, legal, and social navigation.
      </section>

      <section className="section-shell p-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Cost Leakage Calculator</p>
        <LeakageCalculator />
      </section>
    </div>
  );
}
