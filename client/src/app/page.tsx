import Link from "next/link";
import { LeakageCalculator, RoiCalculator } from "@/components/calculators";
import { products, solutions } from "@/lib/site-data";

const homeSections = [
  "Trusted By",
  "Problem",
  "Product Overview",
  "Workflow",
  "Core Features",
  "Industry Solutions",
  "Dashboard Showcase",
  "ROI",
  "Customer Results",
  "Testimonials",
  "Founder Story",
  "FAQ",
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-12">
      <section className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 px-8 py-20 text-white shadow-xl md:px-14">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Operating system for modern food operations</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
            Mealiez powers bookings, billing, attendance, and analytics in one elegant platform.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-blue-100">
            Built for hostel messes, institutions, cloud kitchens, and enterprise cafeterias focused on scale, trust, and growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book-demo" className="rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105">
              Book Demo
            </Link>
            <Link href="/pricing" className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["200+ campuses", "1.2M+ meals/month", "99.95% uptime", "18% avg waste reduction"].map((stat) => (
          <div key={stat} className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xl font-bold text-slate-900">{stat}</p>
            <p className="mt-1 text-sm text-slate-600">Trusted by fast-growing food operations teams.</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-bold">Homepage Content Framework</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {homeSections.map((item, i) => (
            <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
              {String(i + 1).padStart(2, "0")} · {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Product Overview</h2>
          <Link href="/product" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
            View all product modules
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-semibold text-slate-900">{product.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{product.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Industry Solutions</h2>
          <Link href="/solutions" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
            See all industries
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">{solution.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{solution.challenge}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <RoiCalculator />
        <LeakageCalculator />
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white px-8 py-12 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-600">Final CTA</p>
        <h2 className="mt-3 text-3xl font-bold">Ready to modernize your mess operations?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Launch with Mealiez and convert operational complexity into measurable growth.
        </p>
        <Link href="/book-demo" className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
          Book Your Guided Demo
        </Link>
      </section>
    </div>
  );
}
