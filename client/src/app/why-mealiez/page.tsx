"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { LeakageCalculator } from "@/components/calculators";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const problems = [
  {
    icon: "📋",
    title: "Why Manual Systems Fail",
    color: "#ef4444",
    points: [
      "Paper registers are lost, forged, or illegible",
      "No real-time visibility into meal counts or food waste",
      "Head counts done manually are off by 10–20% regularly",
      "There is no audit trail — disputes have no resolution path",
    ],
  },
  {
    icon: "📊",
    title: "Why Excel Fails",
    color: "#f59e0b",
    points: [
      "Spreadsheets break above 200 members with formula errors",
      "Multiple people editing the same file causes data corruption",
      "No real-time inputs — data is always stale and historical",
      "Cannot auto-generate invoices, reminders, or reconciliation reports",
    ],
  },
  {
    icon: "🏗️",
    title: "Why Traditional ERPs Fail",
    color: "#8b5cf6",
    points: [
      "Built for manufacturing, not food service workflows",
      "6–12 month implementations with ₹10L+ setup costs",
      "Require dedicated IT teams to maintain and configure",
      "No mobile-first experience for mess operators or members",
    ],
  },
];

const attendanceIssues = [
  { stat: "8–15%", label: "Average proxy dining rate in unmonitored messes" },
  { stat: "₹2.4L", label: "Annual revenue lost per 100 members at ₹80/meal" },
  { stat: "0%", label: "Accountability with paper registers" },
];

const billingErrors = [
  "Missing entries when members skip meals without cancelling",
  "Incorrect rates applied after mid-month plan changes",
  "Cash collection delays extending 30–60 days beyond due dates",
  "No automatic reminder system — follow-ups done manually on WhatsApp",
];

const wastageStats = [
  { stat: "18–25%", label: "Average food wastage in undigitised messes" },
  { stat: "₹12L+", label: "Annual waste cost for a 500-member hostel" },
  { stat: "60%", label: "Waste reducible with demand-accurate booking" },
];

const comparison = [
  { feature: "Real-time meal count visibility", paper: false, excel: false, erp: "Partial", mealiez: true },
  { feature: "Attendance-linked automated billing", paper: false, excel: false, erp: false, mealiez: true },
  { feature: "Food wastage reduction tools", paper: false, excel: false, erp: false, mealiez: true },
  { feature: "Member mobile app", paper: false, excel: false, erp: false, mealiez: true },
  { feature: "Automatic invoice generation", paper: false, excel: false, erp: "Partial", mealiez: true },
  { feature: "Setup time", paper: "Immediate", excel: "Days", erp: "6–12 months", mealiez: "5–7 days" },
  { feature: "Cost for 500 members", paper: "₹0", excel: "₹0", erp: "₹10L+", mealiez: "₹9,999/mo" },
  { feature: "Scales to enterprise", paper: false, excel: false, erp: true, mealiez: true },
];

const results = [
  { stat: "28%", label: "Average food wastage reduction", sub: "within 60 days" },
  { stat: "22%", label: "Faster monthly collection cycles", sub: "vs. manual billing" },
  { stat: "15hrs", label: "Saved per week on admin tasks", sub: "per mess operator" },
  { stat: "100%", label: "Billing accuracy", sub: "with auto-reconciliation" },
];

export default function WhyMealiezPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}
        .wm { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:760px; margin:0 auto; padding:0 40px; }
        .s-cream{ background:#fef6f0; padding:80px 0; }
        .s-white{ background:#fff; padding:80px 0; }
        .card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:16px;padding:28px;}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
        .x-item{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:#444;margin-bottom:12px;line-height:1.65;}
        .check-item{display:flex;align-items:center;gap:10px;font-size:14px;color:#444;margin-bottom:10px;}
      `}</style>

      <div className="wm">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="w">
            <h1 className="rv" style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Why leading operators<br />
              <span style={{ color: "#FF6B35" }}>choose Mealiez</span>
            </h1>
            <p className="rv d1" style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 38px" }}>
              See exactly why paper, Excel, and traditional ERP systems all fail at food service operations — and what Mealiez does differently.
            </p>
            <Link href="/book-demo" className="btn-ora rv d2">See It Live — Book a Demo</Link>
          </div>
        </section>

        {/* Problems Grid */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Where Traditional Systems Break Down
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 500, margin: "0 auto 48px" }}>
              Most food service operations are still running on tools never designed for the job.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
              {problems.map((p, i) => (
                <div key={i} className={`card rv d${i + 1}`}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{p.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1a1a1a", marginBottom: 20, paddingBottom: 16, borderBottom: `2px solid ${p.color}20` }}>
                    {p.title}
                  </h3>
                  {p.points.map((pt, j) => (
                    <div key={j} className="x-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      {pt}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attendance Issues */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              The Hidden Cost of Attendance Mismatch
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 500, margin: "0 auto 48px" }}>
              Proxy dining, untracked guests, and manual count errors bleed thousands from your bottom line every month.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
              {attendanceIssues.map((a, i) => (
                <div key={i} className={`card rv d${i + 1}`} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#FF6B35", marginBottom: 8 }}>{a.stat}</div>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.65 }}>{a.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Billing Errors */}
        <section className="s-white">
          <div className="w">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
              <div>
                <div className="rv" style={{ fontSize: 11, fontWeight: 800, color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Billing Accuracy</div>
                <h2 className="rv d1" style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, letterSpacing: "-.025em", marginBottom: 20 }}>
                  Manual billing creates disputes every single month
                </h2>
                <p className="rv d2" style={{ fontSize: 15, color: "#666", lineHeight: 1.72, marginBottom: 28 }}>
                  When billing is done by hand, errors are inevitable. And every error erodes trust with your members.
                </p>
                {billingErrors.map((e, i) => (
                  <div key={i} className={`x-item rv d${i + 1}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    {e}
                  </div>
                ))}
              </div>
              <div className="rv d2">
                <div className="card" style={{ borderColor: "rgba(255,107,53,0.2)", padding: 32 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>With Mealiez</div>
                  {["Invoices auto-generated at cycle end", "Mid-month changes tracked to the rupee", "UPI / online payment with instant confirmation", "Automated dues reminders on configurable schedules", "Full audit trail with timestamped billing history"].map((f, i) => (
                    <div key={i} className="check-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: 14, color: "#333" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food Wastage */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Food Wastage Is a Revenue Problem
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 500, margin: "0 auto 48px" }}>
              Over-cooking without accurate demand data is the single largest controllable cost in mess operations.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginBottom: 40 }}>
              {wastageStats.map((w, i) => (
                <div key={i} className={`card rv d${i + 1}`} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#FF6B35", marginBottom: 8 }}>{w.stat}</div>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.65 }}>{w.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Leakage Calculator */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Calculate Your Cost Leakage
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 40px" }}>
              Enter your operation numbers to see exactly how much revenue you're losing to attendance mismatch right now.
            </p>
            <div className="rv d2" style={{ maxWidth: 680, margin: "0 auto" }}>
              <LeakageCalculator />
            </div>
          </div>
        </section>

        {/* Mealiez Comparison Table */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Mealiez vs. Everything Else
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 48px" }}>
              A direct comparison across every dimension that matters.
            </p>
            <div className="rv" style={{ background: "#fff", borderRadius: 20, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#fef6f0" }}>
                    <th style={{ padding: "16px 24px", textAlign: "left", fontWeight: 700, color: "#333", fontSize: 13 }}>Capability</th>
                    <th style={{ padding: "16px 24px", textAlign: "center", fontWeight: 700, color: "#888", fontSize: 13 }}>Paper</th>
                    <th style={{ padding: "16px 24px", textAlign: "center", fontWeight: 700, color: "#888", fontSize: 13 }}>Excel</th>
                    <th style={{ padding: "16px 24px", textAlign: "center", fontWeight: 700, color: "#8b5cf6", fontSize: 13 }}>Traditional ERP</th>
                    <th style={{ padding: "16px 24px", textAlign: "center", fontWeight: 800, color: "#FF6B35", fontSize: 13 }}>Mealiez ✓</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 1 ? "#fafafa" : "#fff" }}>
                      <td style={{ padding: "14px 24px", fontWeight: 500, color: "#333" }}>{row.feature}</td>
                      {[row.paper, row.excel, row.erp, row.mealiez].map((val, j) => (
                        <td key={j} style={{ padding: "14px 24px", textAlign: "center" }}>
                          {val === true ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={j === 3 ? "#FF6B35" : "#22c55e"} strokeWidth="2.5" strokeLinecap="round" style={{ margin: "0 auto" }}><polyline points="20 6 9 17 4 12"/></svg>
                          ) : val === false ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" style={{ margin: "0 auto" }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                          ) : (
                            <span style={{ fontSize: 12, fontWeight: 600, color: j === 3 ? "#FF6B35" : "#888" }}>{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Customer Results */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Operators Switching to Mealiez See Results Fast
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 48px" }}>
              These aren't projections — they're averages from our active operator base.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
              {results.map((r, i) => (
                <div key={i} className={`card rv d${i + 1}`} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 40, fontWeight: 900, color: "#FF6B35", letterSpacing: "-0.02em", marginBottom: 6 }}>{r.stat}</div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 4 }}>{r.label}</p>
                  <p style={{ fontSize: 12, color: "#888" }}>{r.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Ready to switch from manual to modern?
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 460, margin: "0 auto 36px" }}>
            Join hundreds of operators who've made the move. See Mealiez live in 30 minutes.
          </p>
          <Link href="/book-demo" className="btn-ora rv d2">Book a Free Demo</Link>
        </section>

      </div>
    </>
  );
}
