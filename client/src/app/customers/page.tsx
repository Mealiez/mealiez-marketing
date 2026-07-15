const stories = [
  { name: "North Valley Hostel", result: "18% reduction in food wastage" },
  { name: "Citywide Canteens", result: "22% faster collections" },
  { name: "Metro Cloud Kitchen", result: "30% better demand planning" },
];

export default function CustomersPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-bold">Customers</h1>
      <p className="mt-3 text-slate-600">Customer stories, case studies, and measurable results.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {stories.map((story) => (
          <div key={story.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">{story.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{story.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
