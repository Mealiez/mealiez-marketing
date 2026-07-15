import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">{product.title}</h1>
      <p className="mt-3 text-slate-600">{product.summary}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Pain Points</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">{product.painPoints.map((item) => <li key={item}>• {item}</li>)}</ul>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Key Features</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">{product.features.map((item) => <li key={item}>• {item}</li>)}</ul>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Benefits</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">{product.benefits.map((item) => <li key={item}>• {item}</li>)}</ul>
        </section>
      </div>

      <div className="mt-10 flex gap-3">
        <Link href="/book-demo" className="rounded-full bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-500">
          Book Demo
        </Link>
        <Link href="/product" className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700 hover:border-slate-400">
          Back to Product
        </Link>
      </div>
    </div>
  );
}
