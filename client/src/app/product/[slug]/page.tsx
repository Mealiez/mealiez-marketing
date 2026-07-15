import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <p className="text-sm uppercase tracking-[0.15em] text-blue-100">Hero</p>
        <h1 className="mt-3 text-4xl font-extrabold">{product.title}</h1>
        <p className="mt-3 max-w-3xl text-blue-100">{product.summary}</p>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Problem</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {product.painPoints.map((item) => (
            <li key={item} className="surface-card p-4 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <p className="mt-3 text-slate-600">
          Mealiez orchestrates data capture, approval, and reporting in one flow to reduce friction and improve reliability.
        </p>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Key Features</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {product.features.map((item) => (
            <li key={item} className="surface-card p-4 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Workflow Diagram</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {["Capture", "Automate", "Optimize"].map((item) => (
            <div key={item} className="surface-card p-5 text-center font-semibold text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Dashboard Screenshots</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {["Ops View", "Finance View", "Growth View"].map((item) => (
            <div key={item} className="surface-card p-4">
              <p className="text-sm font-semibold text-slate-900">{item}</p>
              <div className="mt-3 h-24 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Benefits</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {product.benefits.map((item) => (
            <li key={item} className="surface-card p-4 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <details className="surface-card mt-4 p-4">
          <summary className="cursor-pointer font-semibold text-slate-900">Can this module integrate with the complete Mealiez suite?</summary>
          <p className="mt-2 text-sm text-slate-600">Yes, detailed integration content can be added in the next content pass.</p>
        </details>
      </section>

      <section className="brand-gradient section-shell flex flex-wrap items-center justify-between gap-4 px-7 py-6 text-white">
        <h2 className="text-2xl font-bold">Ready to see {product.title} in action?</h2>
        <div className="flex gap-3">
          <Link href="/book-demo" className="rounded-full bg-white px-5 py-2 font-semibold text-blue-700">
            Book Demo
          </Link>
          <Link href="/product" className="rounded-full border border-white/80 px-5 py-2 font-semibold text-white">
            Back to Product
          </Link>
        </div>
      </section>
    </div>
  );
}
