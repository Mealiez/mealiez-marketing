const stories = [
  { name: "North Valley Hostel", result: "18% reduction in food wastage" },
  { name: "Citywide Canteens", result: "22% faster collections" },
  { name: "Metro Cloud Kitchen", result: "30% better demand planning" },
];

export default function CustomersPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <h1 className="text-4xl font-bold">Customers</h1>
        <p className="mt-3 max-w-3xl text-blue-100">Customer stories, case studies, and testimonials with measurable impact.</p>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Customer Stories</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <div key={story.name} className="surface-card p-5">
              <h3 className="font-semibold text-slate-900">{story.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{story.result}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Case Studies</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {["Client Overview", "Implementation", "Results"].map((item) => (
            <div key={item} className="surface-card p-5">
              <h3 className="font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">Template section ready for full case-study content.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell p-7">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
        {stories.map((story) => (
          <div key={story.name} className="surface-card p-5 text-sm text-slate-700">
            “{story.name} saw {story.result.toLowerCase()} after switching to Mealiez.”
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}
