export default function CompanyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">Company</h1>
      <p className="mt-3 text-slate-600">About Mealiez, founder story, mission, and contact details for enterprise conversations.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["About Mealiez", "Founder Story", "Mission & Vision"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Demo content placeholder for this section.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
