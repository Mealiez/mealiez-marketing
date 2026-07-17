"use client";

import { useMemo, useState, useEffect } from "react";

export function RoiCalculator() {
  const [members, setMembers] = useState(800);
  const [mealCost, setMealCost] = useState(80);
  const [wastage, setWastage] = useState(12);
  const [isClient, setIsClient] = useState(false);

  const annualSavings = useMemo(() => {
    const yearlySpend = members * mealCost * 365;
    return Math.round((yearlySpend * wastage) / 100);
  }, [members, mealCost, wastage]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="rounded-3xl border border-[#FF6B35]/20 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">ROI Calculator</h3>
      <p className="mt-1 text-sm text-slate-600">Estimate annual savings from reduced wastage.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-slate-700">
          Members
          <input
            type="number"
            value={members}
            onChange={(e) => setMembers(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none"
          />
        </label>
        <label className="text-sm text-slate-700">
          Avg meal cost (₹)
          <input
            type="number"
            value={mealCost}
            onChange={(e) => setMealCost(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none"
          />
        </label>
        <label className="text-sm text-slate-700">
          Wastage %
          <input
            type="number"
            value={wastage}
            onChange={(e) => setWastage(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none"
          />
        </label>
      </div>
      <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#FF6B35]/10 to-[#FF875C]/10 p-4 text-slate-900">
        Estimated annual savings: <span className="text-2xl font-bold text-[#FF6B35]">₹{isClient ? annualSavings.toLocaleString() : annualSavings}</span>
      </div>
    </div>
  );
}

export function LeakageCalculator() {
  const [dailyMeals, setDailyMeals] = useState(1200);
  const [mealPrice, setMealPrice] = useState(75);
  const [mismatch, setMismatch] = useState(7);
  const [isClient, setIsClient] = useState(false);

  const leakage = useMemo(() => {
    const dailyRevenue = dailyMeals * mealPrice;
    return Math.round((dailyRevenue * mismatch * 365) / 100);
  }, [dailyMeals, mealPrice, mismatch]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="rounded-3xl border border-[#FF6B35]/20 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Cost Leakage Calculator</h3>
      <p className="mt-1 text-sm text-slate-600">Find revenue leakage caused by attendance mismatch.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-slate-700">
          Daily meals
          <input
            type="number"
            value={dailyMeals}
            onChange={(e) => setDailyMeals(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none"
          />
        </label>
        <label className="text-sm text-slate-700">
          Avg meal price (₹)
          <input
            type="number"
            value={mealPrice}
            onChange={(e) => setMealPrice(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none"
          />
        </label>
        <label className="text-sm text-slate-700">
          Mismatch %
          <input
            type="number"
            value={mismatch}
            onChange={(e) => setMismatch(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none"
          />
        </label>
      </div>
      <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#FF875C]/10 to-[#FFA27F]/10 p-4 text-slate-900">
        Annual leakage estimate: <span className="text-2xl font-bold text-[#FF6B35]">₹{isClient ? leakage.toLocaleString() : leakage}</span>
      </div>
    </div>
  );
}
