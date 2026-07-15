const sections = ["Data Security", "Privacy", "Infrastructure", "Backups", "Reliability"];

export default function SecurityPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">Security</h1>
      <p className="mt-3 text-slate-600">Security-first architecture for compliant and reliable operations.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {sections.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Demo content placeholder for {item.toLowerCase()} details.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
