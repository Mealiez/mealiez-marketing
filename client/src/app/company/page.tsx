import Link from "next/link";

export default function CompanyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <h1 className="text-4xl font-bold">Company</h1>
        <p className="mt-3 max-w-3xl text-blue-100">About Mealiez, founder story, mission, and enterprise partnership details.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {["About Mealiez", "Founder Story", "Mission & Vision"].map((item) => (
          <div key={item} className="section-shell p-6">
            <h2 className="text-xl font-semibold text-slate-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Content placeholder with polished layout ready for final copy.</p>
          </div>
        ))}
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-600">Share your organization details and we will schedule the right implementation conversation.</p>
        <Link href="/book-demo" className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-500">
          Contact Mealiez
        </Link>
      </section>
    </div>
  );
}
