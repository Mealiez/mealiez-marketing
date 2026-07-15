const sections = ["Data Security", "Privacy", "Infrastructure", "Backups", "Reliability"];

export default function SecurityPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <h1 className="text-4xl font-bold">Security</h1>
        <p className="mt-3 max-w-3xl text-blue-100">Secure-by-design architecture for reliable and compliant food operations.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {sections.map((item) => (
          <div key={item} className="section-shell p-6">
            <h2 className="text-xl font-semibold text-slate-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Detailed content can be added later while keeping this trust-focused structure.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
