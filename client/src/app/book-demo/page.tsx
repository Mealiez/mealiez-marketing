export default function BookDemoPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-14">
      <h1 className="text-4xl font-bold">Book Demo</h1>
      <p className="mt-3 text-slate-600">Multi-step demo booking funnel (starter form with CRM-ready fields).</p>
      <form className="mt-8 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">
          Organization Type
          <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
            <option>Hostel Mess</option>
            <option>College Canteen</option>
            <option>Industrial Canteen</option>
            <option>Corporate Cafeteria</option>
            <option>Cloud Kitchen</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Number of Members / Customers
          <input type="number" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Existing Challenges
          <textarea className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" rows={4} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Contact Details
          <input type="text" placeholder="Name, email, phone" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
        </label>
        <button type="button" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
          Request Demo
        </button>
      </form>
    </div>
  );
}
