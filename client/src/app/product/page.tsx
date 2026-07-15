import Link from "next/link";
import { products } from "@/lib/site-data";

export default function ProductPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">Product Overview</h1>
      <p className="mt-3 text-slate-600">Explore Mealiez modules built for end-to-end mess and food operations.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <Link key={item.slug} href={`/product/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
