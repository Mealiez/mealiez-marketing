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
    <div style={{
      background: "#ffffff",
      border: "1.5px solid rgba(234, 88, 12, 0.2)",
      borderRadius: 24,
      padding: "clamp(20px, 4vw, 28px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
      maxWidth: "100%",
      boxSizing: "border-box",
    }}>
      <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F172A", margin: "0 0 6px" }}>ROI Calculator</h3>
      <p style={{ fontSize: 13.5, color: "#64748B", margin: "0 0 20px" }}>Estimate annual savings from reduced wastage.</p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
        gap: 14,
        marginBottom: 20,
      }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#334155" }}>
          Members
          <input
            type="number"
            value={members}
            onChange={(e) => setMembers(Number(e.target.value) || 0)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 12,
              border: "1px solid #CBD5E1",
              padding: "10px 12px",
              fontSize: 14,
              color: "#0F172A",
              background: "#F8FAFC",
              outline: "none",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#334155" }}>
          Avg meal cost (₹)
          <input
            type="number"
            value={mealCost}
            onChange={(e) => setMealCost(Number(e.target.value) || 0)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 12,
              border: "1px solid #CBD5E1",
              padding: "10px 12px",
              fontSize: 14,
              color: "#0F172A",
              background: "#F8FAFC",
              outline: "none",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#334155" }}>
          Wastage %
          <input
            type="number"
            value={wastage}
            onChange={(e) => setWastage(Number(e.target.value) || 0)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 12,
              border: "1px solid #CBD5E1",
              padding: "10px 12px",
              fontSize: 14,
              color: "#0F172A",
              background: "#F8FAFC",
              outline: "none",
            }}
          />
        </label>
      </div>
      <div style={{
        borderRadius: 16,
        background: "linear-gradient(135deg, rgba(234,88,12,0.08) 0%, rgba(249,115,22,0.05) 100%)",
        border: "1px solid rgba(234,88,12,0.15)",
        padding: "16px 20px",
        fontSize: 15,
        fontWeight: 600,
        color: "#0F172A",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      }}>
        <span>Estimated annual savings:</span>
        <span style={{ fontSize: 24, fontWeight: 900, color: "#EA580C", fontFamily: "'Barlow Condensed',system-ui,sans-serif" }}>
          ₹{isClient ? annualSavings.toLocaleString() : annualSavings}
        </span>
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
    <div style={{
      background: "#ffffff",
      border: "1.5px solid rgba(234, 88, 12, 0.2)",
      borderRadius: 24,
      padding: "clamp(20px, 4vw, 28px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
      maxWidth: "100%",
      boxSizing: "border-box",
    }}>
      <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F172A", margin: "0 0 6px" }}>Cost Leakage Calculator</h3>
      <p style={{ fontSize: 13.5, color: "#64748B", margin: "0 0 20px" }}>Find revenue leakage caused by attendance mismatch.</p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
        gap: 14,
        marginBottom: 20,
      }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#334155" }}>
          Daily meals
          <input
            type="number"
            value={dailyMeals}
            onChange={(e) => setDailyMeals(Number(e.target.value) || 0)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 12,
              border: "1px solid #CBD5E1",
              padding: "10px 12px",
              fontSize: 14,
              color: "#0F172A",
              background: "#F8FAFC",
              outline: "none",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#334155" }}>
          Avg meal price (₹)
          <input
            type="number"
            value={mealPrice}
            onChange={(e) => setMealPrice(Number(e.target.value) || 0)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 12,
              border: "1px solid #CBD5E1",
              padding: "10px 12px",
              fontSize: 14,
              color: "#0F172A",
              background: "#F8FAFC",
              outline: "none",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#334155" }}>
          Mismatch %
          <input
            type="number"
            value={mismatch}
            onChange={(e) => setMismatch(Number(e.target.value) || 0)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 12,
              border: "1px solid #CBD5E1",
              padding: "10px 12px",
              fontSize: 14,
              color: "#0F172A",
              background: "#F8FAFC",
              outline: "none",
            }}
          />
        </label>
      </div>
      <div style={{
        borderRadius: 16,
        background: "linear-gradient(135deg, rgba(234,88,12,0.08) 0%, rgba(249,115,22,0.05) 100%)",
        border: "1px solid rgba(234,88,12,0.15)",
        padding: "16px 20px",
        fontSize: 15,
        fontWeight: 600,
        color: "#0F172A",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      }}>
        <span>Annual leakage estimate:</span>
        <span style={{ fontSize: 24, fontWeight: 900, color: "#EA580C", fontFamily: "'Barlow Condensed',system-ui,sans-serif" }}>
          ₹{isClient ? leakage.toLocaleString() : leakage}
        </span>
      </div>
    </div>
  );
}
