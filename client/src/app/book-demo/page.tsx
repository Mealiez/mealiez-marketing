export default function BookDemoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-6 py-12">
      <section className="brand-gradient section-shell px-8 py-14 text-white">
        <h1 className="text-4xl font-bold">Book Demo</h1>
        <p className="mt-3 max-w-2xl text-blue-100">Multi-step lead funnel with elegant UI, ready for CRM integration and final content.</p>
      </section>

      <form className="section-shell space-y-4 p-7">
        <label className="block text-sm font-medium text-slate-700">
          Step 1 · Organization Type
          <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
            <option>Hostel Mess</option>
            <option>College Canteen</option>
            <option>Industrial Canteen</option>
            <option>Corporate Cafeteria</option>
            <option>Cloud Kitchen</option>
            <option>Subscription Mess Business</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Step 2 · Number of Members / Customers
          <input type="number" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Step 3 · Existing Challenges
          <textarea className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" rows={4} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Step 4 · Contact Details
          <input type="text" placeholder="Name, email, phone" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
        </label>
        <button type="button" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
          Request Demo
        </button>
      </form>
    </div>
  );
}
