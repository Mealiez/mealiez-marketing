"use client";

import { useMemo, useState } from "react";

export function RoiCalculator() {
  const [members, setMembers] = useState(800);
  const [mealCost, setMealCost] = useState(80);
  const [wastage, setWastage] = useState(12);

  const annualSavings = useMemo(() => {
    const yearlySpend = members * mealCost * 365;
    return Math.round((yearlySpend * wastage) / 100);
  }, [members, mealCost, wastage]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">ROI Calculator</h3>
      <p className="mt-1 text-sm text-slate-600">Estimate annual savings from reduced wastage.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-slate-700">
          Members
          <input
            type="number"
            value={members}
            onChange={(e) => setMembers(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm text-slate-700">
          Avg meal cost (₹)
          <input
            type="number"
            value={mealCost}
            onChange={(e) => setMealCost(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm text-slate-700">
          Wastage %
          <input
            type="number"
            value={wastage}
            onChange={(e) => setWastage(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-blue-900">
        Estimated annual savings: <span className="text-2xl font-bold">₹{annualSavings.toLocaleString()}</span>
      </div>
    </div>
  );
}

export function LeakageCalculator() {
  const [dailyMeals, setDailyMeals] = useState(1200);
  const [mealPrice, setMealPrice] = useState(75);
  const [mismatch, setMismatch] = useState(7);

  const leakage = useMemo(() => {
    const dailyRevenue = dailyMeals * mealPrice;
    return Math.round((dailyRevenue * mismatch * 365) / 100);
  }, [dailyMeals, mealPrice, mismatch]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Cost Leakage Calculator</h3>
      <p className="mt-1 text-sm text-slate-600">Find revenue leakage caused by attendance mismatch.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-slate-700">
          Daily meals
          <input
            type="number"
            value={dailyMeals}
            onChange={(e) => setDailyMeals(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm text-slate-700">
          Avg meal price (₹)
          <input
            type="number"
            value={mealPrice}
            onChange={(e) => setMealPrice(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm text-slate-700">
          Mismatch %
          <input
            type="number"
            value={mismatch}
            onChange={(e) => setMismatch(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <div className="mt-5 rounded-2xl bg-rose-50 p-4 text-rose-900">
        Annual leakage estimate: <span className="text-2xl font-bold">₹{leakage.toLocaleString()}</span>
      </div>
    </div>
  );
}
