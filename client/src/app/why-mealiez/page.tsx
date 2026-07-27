"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import BorderGlow from "@/components/ui/border-glow";

/* ── Scroll reveal ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Animated counter ── */
function useCounter(target: number, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      let start = 0; const step = target / 60;
      const t = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = decimals
          ? start.toFixed(decimals)
          : Math.floor(start).toLocaleString();
        if (start >= target) clearInterval(t);
      }, 16);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, decimals]);
  return ref;
}

/* ── Inline calculator ── */
function LossCalculator() {
  const [meals, setMeals] = useState(2500);
  const [waste, setWaste] = useState(12);
  const costPerMeal = 55; // ₹ average
  const annual = Math.round(meals * (waste / 100) * costPerMeal * 365);
  const fmt = (n: number) => "₹" + Math.round(n / 1000).toLocaleString("en-IN") + ",000";
  const displayLoss = fmt(annual / 1000);
  const lossNum = new Intl.NumberFormat("en-IN").format(annual);

  return (
    <div style={{
      background: "#fff", border: "1px solid rgba(0,0,0,0.07)",
      borderRadius: 20, padding: "40px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
    }}>
      {/* Sliders */}
      <div>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>Daily Meals Served</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>{meals.toLocaleString()}</span>
          </div>
          <input type="range" min={100} max={10000} step={100} value={meals}
            onChange={(e) => setMeals(+e.target.value)}
            style={{ width: "100%", accentColor: "#FF6B35", height: 4, cursor: "pointer" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#bbb", marginTop: 4 }}>
            <span>100</span><span>10,000</span>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>Est. Overproduction Waste</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>{waste}%</span>
          </div>
          <input type="range" min={1} max={40} step={1} value={waste}
            onChange={(e) => setWaste(+e.target.value)}
            style={{ width: "100%", accentColor: "#FF6B35", height: 4, cursor: "pointer" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#bbb", marginTop: 4 }}>
            <span>1%</span><span>40%</span>
          </div>
        </div>
      </div>

      {/* Result */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 800, color: "#888", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
          Estimated Annual Loss
        </p>
        <div style={{
          fontSize: "clamp(36px,5vw,56px)", fontWeight: 900,
          color: "#FF6B35", lineHeight: 1.1, letterSpacing: "-0.02em",
          marginBottom: 12, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
        }}>
          ₹{lossNum}
        </div>
        <p style={{ fontSize: 13, color: "#888", lineHeight: 1.65, maxWidth: 220, margin: "0 auto 20px" }}>
          Money your mess is losing every year that could go directly to improving food quality or cutting member fees.
        </p>
        <Link href="/book-demo" style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "linear-gradient(135deg,#FF6B35,#FF875C)",
          color: "#fff", borderRadius: 10, padding: "11px 24px",
          fontSize: 13.5, fontWeight: 700, textDecoration: "none",
          boxShadow: "0 6px 18px rgba(255,107,53,0.32)",
        }}>
          Stop This Waste with Mealiez →
        </Link>
      </div>
    </div>
  );
}

/* ── Comparison table ── */
const comparisonRows = [
  { cap: "Ordering & Indents",     manual: "Paper & WhatsApp",        mealiez: "Predictive Digitisation" },
  { cap: "Diner Authentication",   manual: "Visual Headcounts",        mealiez: "QR & Biometric Scanning" },
  { cap: "Billing Cycle",          manual: "Days of Reconciliation",   mealiez: "Instant Automated Ledger" },
  { cap: "Visibility",             manual: "Opaque & Reactive",        mealiez: "Real-Time Dashboards" },
];

export default function WhyMealiezPage() {
  useReveal();

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        .wm { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; color: #1a1a1a; }
        .w  { max-width: 1080px; margin: 0 auto; padding: 0 40px; }
        .w-sm { max-width: 760px; margin: 0 auto; padding: 0 40px; }

        .rv   { opacity:0; transform:translateY(28px); transition:opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important}.d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important}.d4{transition-delay:.4s!important}

        /* Section alternation */
        .sec-white { background:#fff; padding:88px 0; }
        .sec-cream  { background:#fef6f0; padding:88px 0; }
        .sec-dark   { background:#1a1a1a; padding:88px 0; }

        /* Problem cards */
        .prob-card {
          background:#fff; border:1px solid rgba(0,0,0,0.07);
          border-radius:16px; padding:28px 24px;
          transition:transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .28s;
        }
        .prob-card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(255,107,53,0.1); border-color:rgba(255,107,53,0.18); }

        /* Leakage cards */
        .leak-card {
          background:#fff; border:1px solid rgba(0,0,0,0.07);
          border-radius:18px; padding:32px 28px;
          transition:transform .28s, box-shadow .28s;
        }
        .leak-card:hover { transform:translateY(-4px); box-shadow:0 14px 44px rgba(255,107,53,0.09); }

        /* Comparison table */
        .cmp-row {
          display:grid; grid-template-columns:1fr 1fr 1fr;
          border-bottom:1px solid rgba(0,0,0,0.06);
          transition:background .18s;
        }
        .cmp-row:last-child { border-bottom:none; }
        .cmp-row:hover { background:rgba(255,107,53,0.03); }
        .cmp-cell { padding:18px 20px; font-size:14.5px; display:flex; align-items:center; gap:10px; }

        /* Stat number */
        .stat-num-big {
          font-size:52px; font-weight:900; color:#FF6B35; line-height:1;
          letter-spacing:-0.03em;
          font-family:'Bricolage Grotesque', system-ui, sans-serif;
        }

        /* Logo marquee */
        .marquee-wrap { overflow:hidden; position:relative; }
        .marquee-track {
          display:flex; gap:64px; white-space:nowrap;
          animation:marquee 18s linear infinite;
        }
        .marquee-track:hover { animation-play-state:paused; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .logo-text {
          font-size:13px; font-weight:800; letter-spacing:0.14em;
          text-transform:uppercase; color:#ccc; flex-shrink:0;
        }

        /* CTA section */
        .cta-section {
          background: linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(255,162,127,0.05) 100%), #fef6f0;
          padding:88px 40px; text-align:center;
        }

        /* Spreadsheet mock */
        .sheet-mock {
          background:#fff; border:1px solid rgba(0,0,0,0.1); border-radius:12px;
          overflow:hidden; font-size:11px;
        }
        .sheet-header { background:#f3f4f6; display:grid; grid-template-columns:repeat(5,1fr); }
        .sheet-cell { padding:7px 10px; border-right:1px solid rgba(0,0,0,0.08); border-bottom:1px solid rgba(0,0,0,0.06); color:#555; }
        .sheet-cell.head { font-weight:700; color:#333; background:#f3f4f6; }
        .sheet-cell.err  { background:rgba(239,68,68,0.1); color:#dc2626; font-weight:700; }
        .sheet-cell.warn { background:rgba(255,107,53,0.08); }

        /* Dashed hero border */
        .hero-dashed {
          border:2px dashed rgba(99,179,237,0.5);
          border-radius:20px; padding:40px; margin:0 40px;
          display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center;
          background:rgba(235,248,255,0.2);
        }

        /* Warning pill */
        .warn-pill {
          display:flex; align-items:flex-start; gap:10px;
          padding:12px 16px; border-radius:10px;
          background:rgba(255,107,53,0.05); border:1px solid rgba(255,107,53,0.12);
          margin-bottom:10px;
        }

        /* Metric highlight */
        .metric-pill {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(255,107,53,0.08); border:1px solid rgba(255,107,53,0.15);
          border-radius:100px; padding:5px 14px;
          font-size:12px; font-weight:700; color:#FF6B35;
          margin-top:16px;
        }

        @media(max-width:768px){
          .hero-dashed { grid-template-columns:1fr; margin:0 20px; }
          .sec-white,.sec-cream,.sec-dark { padding:56px 0; }
          .cta-section { padding:56px 20px; }
          .stat-num-big { font-size:38px; }
        }
      `}</style>

      <div className="wm">

        {/* ════════════════════════════════════════
            HERO — From Manual Chaos to Culinary Precision
        ════════════════════════════════════════ */}
        <section style={{ background: "#fff", paddingTop: 56, paddingBottom: 64 }}>
          <div className="hero-dashed">
            {/* Left */}
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(99,179,237,0.1)", border: "1px solid rgba(99,179,237,0.3)",
                borderRadius: 100, padding: "4px 12px",
                fontSize: 10, fontWeight: 800, color: "#3182ce",
                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 22,
              }}>
                ✦ Enterprise Operations
              </span>

              <h1 style={{
                fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 900,
                color: "#1a1a1a", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 16,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                From Manual Chaos<br />to{" "}
                <span style={{ color: "#FF6B35" }}>Culinary<br />Precision.</span>
              </h1>

              <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.75, maxWidth: 340, marginBottom: 28 }}>
                Stop letting fragile paper trails and disconnected spreadsheets dictate your food operations.
                Mealiez provides the intelligent infrastructure to scale securely.
              </p>

              <Link href="/book-demo" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg,#FF6B35,#FF875C)",
                color: "#fff", borderRadius: 10, padding: "13px 28px",
                fontSize: 14, fontWeight: 700, textDecoration: "none",
                boxShadow: "0 6px 20px rgba(255,107,53,0.36)",
              }}>
                Transform Operations →
              </Link>
            </div>

            {/* Right — dark card visual */}
            <div style={{
              background: "linear-gradient(145deg,#0f172a,#1e293b)",
              borderRadius: 16, overflow: "hidden", minHeight: 260,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", padding: 32,
            }}>
              {/* Paper chaos illustration */}
              <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                {[...Array(10)].map((_, i) => (
                  <div key={i} style={{
                    position: "absolute",
                    width: 52 + (i % 3) * 10, height: 36 + (i % 2) * 8,
                    background: `rgba(255,255,255,${0.06 + (i % 4) * 0.04})`,
                    borderRadius: 4,
                    top: `${8 + (i * 8.5) % 75}%`,
                    left: `${5 + (i * 12) % 60}%`,
                    transform: `rotate(${-30 + (i * 15) % 65}deg)`,
                    border: "1px solid rgba(255,255,255,0.1)",
                  }} />
                ))}
              </div>
              {/* Phone shape */}
              <div style={{
                width: 70, height: 120, background: "linear-gradient(145deg,#FF6B35,#FF875C)",
                borderRadius: 14, boxShadow: "0 12px 40px rgba(255,107,53,0.5)",
                position: "relative", zIndex: 2,
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", gap: 6, padding: 8,
              }}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} style={{
                    height: 4, width: `${60 + (i % 3) * 10}%`,
                    background: "rgba(255,255,255,0.5)", borderRadius: 2,
                  }} />
                ))}
              </div>
              <p style={{ position: "absolute", bottom: 16, fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Mealiez OS
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            THE COST OF OPERATIONAL FRAGILITY
        ════════════════════════════════════════ */}
        <section className="sec-white">
          <div className="w">
            <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{
                fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800,
                color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 16,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                The Cost of Operational Fragility
              </h2>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.72, maxWidth: 520, margin: "0 auto" }}>
                Relying on legacy communication and paper ledgers introduces compounding errors at every step of the service cycle.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {[
                {
                  icon: "📋", color: "rgba(239,68,68,0.1)", stroke: "rgba(239,68,68,0.25)",
                  title: "Paper Trails",
                  body: "Lost indents, illegible & physical damage lead to critical miscommunications between front of house.",
                },
                {
                  icon: "💬", color: "rgba(255,107,53,0.1)", stroke: "rgba(255,107,53,0.25)",
                  title: "Chat Messengers",
                  body: "Important updates buried in WhatsApp threads. No audit trails, no structured data, and impossible to track historically.",
                },
                {
                  icon: "📊", color: "rgba(168,85,247,0.1)", stroke: "rgba(168,85,247,0.2)",
                  title: "Siloed Truths",
                  body: "Procurement, kitchen, and billing operate on different versions of reality, causing daily reconciliation nightmares.",
                },
              ].map((c, i) => (
                <BorderGlow key={i} className={`prob-card rv d${i+1}`} backgroundColor="#ffffff" borderRadius={16}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: c.color, border: `1px solid ${c.stroke}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, marginBottom: 16,
                  }}>
                    {c.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 10, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.72 }}>{c.body}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SPREADSHEET HELL
        ════════════════════════════════════════ */}
        <section className="sec-cream">
          <div className="w">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

              {/* Left — spreadsheet mock */}
              <div className="rv sheet-mock">
                {/* Header row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", background: "#f3f4f6" }}>
                  {["Item", "Unit", "Status", "Delivery", "Vendor"].map((h) => (
                    <div key={h} className="sheet-cell head">{h}</div>
                  ))}
                </div>
                {/* Rows */}
                {[
                  ["Rice", "50kg", <span key="v" className="sheet-cell err" style={{display:"inline"}}>vendor?</span>, "Delayed", "Vendor A"],
                  ["Oil",  "12L",  "✓ OK",   "On time", "—"],
                  ["Dal",  "30kg", <span key="w" className="sheet-cell warn" style={{display:"inline"}}>#REF!</span>, "Received","Vendor B"],
                  ["Veg",  "—",    "Unknown","—",        "Vendor A"],
                  ["Spice","2kg",  "✓ OK",   "On time", "—"],
                ].map((row, ri) => (
                  <div key={ri} style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
                    {row.map((cell, ci) => (
                      <div key={ci} className="sheet-cell" style={{
                        background: ci === 2 && ri === 0 ? "rgba(239,68,68,0.08)" :
                                    ci === 2 && ri === 2 ? "rgba(255,107,53,0.08)" : undefined,
                        color: ci === 2 && ri === 0 ? "#dc2626" :
                               ci === 2 && ri === 2 ? "#FF6B35" : undefined,
                        fontWeight: (ci === 2 && (ri === 0 || ri === 2)) ? 700 : undefined,
                      }}>
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Right — copy */}
              <div className="rv d2">
                <h2 style={{
                  fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900,
                  color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 16,
                  fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                }}>
                  Excel Was Never Built<br /><span style={{ color: "#FF6B35" }}>for a Mess.</span>
                </h2>
                <p style={{ fontSize: 15, color: "#555", lineHeight: 1.78, marginBottom: 28 }}>
                  Excel sheets work fine for small lists. But when you're tracking 200+ students, daily meal counts, vendor purchases, and monthly billing — a single broken formula or a forgotten update wipes out days of data.
                </p>

                {[
                  {
                    label: "No Real-Time Updates",
                    body: "By the time your staff enters today's meal count, it's already yesterday's data.",
                  },
                  {
                    label: 'The "Which Version?" Problem',
                    body: '"Inventory_Final_v3_Actual_NEW.xlsx" is not a system. It\'s a liability.',
                  },
                ].map((w, i) => (
                  <div key={i} className="warn-pill">
                    <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>⚠️</span>
                    <div>
                      <p style={{ fontSize: 13.5, fontWeight: 700, color: "#1a1a1a", marginBottom: 3 }}>{w.label}</p>
                      <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            THE REVENUE LEAKAGE POINTS
        ════════════════════════════════════════ */}
        <section className="sec-white">
          <div className="w">
            <div className="rv" style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{
                fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: "#1a1a1a",
                letterSpacing: "-0.025em",
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                Where Your Mess Revenue is Leaking
              </h2>
              <div style={{ width: 48, height: 3, background: "#FF6B35", borderRadius: 2, margin: "14px auto 0" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[
                {
                  num: "5",
                  title: "Proxy Attendance",
                  body: "Manual headcounts are notoriously inaccurate. Proxy check-ins and unverified dining lead to inflated meal counts, causing kitchen overproduction and diner frustration.",
                  metric: "Up to 15% discrepancy in manual counts",
                },
                {
                  num: "5",
                  title: "Ledger Disputes",
                  body: "Transcribing paper chits to monthly invoices guarantees human error. This results in delayed payment cycles, vendor disputes, and unrecoverable revenue.",
                  metric: "Average 7-day delay in billing reconciliation",
                },
              ].map((c, i) => (
                <BorderGlow key={i} className={`leak-card rv d${i+1}`} style={{ position: "relative", overflow: "hidden" }} backgroundColor="#ffffff" borderRadius={18}>
                  {/* Big background number */}
                  <div style={{
                    position: "absolute", top: -10, right: 16, fontSize: 120,
                    fontWeight: 900, color: "rgba(255,107,53,0.05)", lineHeight: 1,
                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", userSelect: "none",
                  }}>
                    {c.num}
                  </div>
                  <h3 style={{
                    fontSize: 19, fontWeight: 700, color: "#1a1a1a", marginBottom: 14,
                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                  }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 4 }}>
                    {c.body}
                  </p>
                  <span className="metric-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                    </svg>
                    {c.metric}
                  </span>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            THE FOOD WASTAGE CRISIS
        ════════════════════════════════════════ */}
        <section className="sec-cream">
          <div className="w">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

              {/* Left */}
              <div className="rv">
                <h2 style={{
                  fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900,
                  color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 20,
                  fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", lineHeight: 1.18,
                }}>
                  Food Wastage Is a Billing Problem in Disguise
                </h2>
                <p style={{ fontSize: 15, color: "#555", lineHeight: 1.78, marginBottom: 24 }}>
                  When your kitchen doesn't know how many people are eating tomorrow, they cook for more than needed. That extra food becomes waste — and that waste is money directly out of your margin.
                  Mealiez cuts overproduction by up to <strong>30%</strong> because members book in advance and your kitchen always knows the exact count.
                </p>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
                  borderRadius: 100, padding: "7px 16px",
                  fontSize: 13, fontWeight: 700, color: "#16a34a",
                }}>
                  🍃 Sustainable Operations by Design
                </div>
              </div>

              {/* Right — icon */}
              <div className="rv d2" style={{ display: "flex", justifyContent: "center" }}>
                <div style={{
                  width: 180, height: 180, borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,107,53,0.06))",
                  border: "2px solid rgba(255,107,53,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  <div style={{
                    width: 110, height: 110, borderRadius: "50%",
                    background: "rgba(255,107,53,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  {/* Orbit dots */}
                  {[0,72,144,216,288].map((deg, i) => (
                    <div key={i} style={{
                      position: "absolute",
                      width: 10, height: 10, borderRadius: "50%",
                      background: i % 2 === 0 ? "#FF6B35" : "rgba(255,107,53,0.3)",
                      top: `${50 - 46 * Math.cos(deg * Math.PI/180)}%`,
                      left: `${50 + 46 * Math.sin(deg * Math.PI/180)}%`,
                      transform: "translate(-50%,-50%)",
                    }} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CALCULATE YOUR HIDDEN LOSSES
        ════════════════════════════════════════ */}
        <section className="sec-white">
          <div className="w">
            <div className="rv" style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{
                fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800,
                color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 14,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                How Much Is Your Mess Losing Right Now?
              </h2>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.72, maxWidth: 480, margin: "0 auto" }}>
                Enter your daily meal count and estimated overproduction below. See your annual food wastage cost instantly.
              </p>
            </div>
            <div className="rv d1">
              <LossCalculator />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            THE PRECISION PIVOT — Comparison table
        ════════════════════════════════════════ */}
        <section className="sec-cream">
          <div className="w">
            <div className="rv" style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{
                fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800,
                color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 14,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                Mealiez vs. Manual Operations
              </h2>
            </div>

            <div className="rv d1" style={{
              background: "#fff", border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}>
              {/* Table header */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}>
                <div style={{ padding: "16px 20px", fontSize: 11, fontWeight: 800, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Capability
                </div>
                <div style={{ padding: "16px 20px", fontSize: 13, fontWeight: 700, color: "#555", borderLeft: "1px solid rgba(0,0,0,0.06)" }}>
                  Manual Operations
                </div>
                <div style={{
                  padding: "16px 20px", fontSize: 13, fontWeight: 700, color: "#FF6B35",
                  borderLeft: "1px solid rgba(255,107,53,0.15)",
                  background: "rgba(255,107,53,0.04)",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  Mealiez OS
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B35", boxShadow: "0 0 8px rgba(255,107,53,0.5)" }} />
                </div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div key={i} className="cmp-row">
                  <div className="cmp-cell" style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>
                    {row.cap}
                  </div>
                  <div className="cmp-cell" style={{ borderLeft: "1px solid rgba(0,0,0,0.05)", color: "#888" }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, color: "#dc2626", flexShrink: 0, fontWeight: 700,
                    }}>✕</span>
                    <span style={{ fontSize: 13.5 }}>{row.manual}</span>
                  </div>
                  <div className="cmp-cell" style={{ borderLeft: "1px solid rgba(255,107,53,0.1)", background: "rgba(255,107,53,0.02)" }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: "rgba(255,107,53,0.12)", border: "1px solid rgba(255,107,53,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, color: "#FF6B35", flexShrink: 0, fontWeight: 700,
                    }}>✓</span>
                    <span style={{ fontSize: 13.5, color: "#1a1a1a", fontWeight: 600 }}>{row.mealiez}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ENGINEERING OUTCOMES
        ════════════════════════════════════════ */}
        <section className="sec-white">
          <div className="w">
            <div className="rv" style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{
                fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800,
                color: "#1a1a1a", letterSpacing: "-0.025em",
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                What Operators Are Seeing After Switching to Mealiez
              </h2>
            </div>

            {/* Stats */}
            <div className="rv d1" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 56 }}>
              {[
                { value: "30", suffix: "%", label: "Reduction in Food Waste" },
                { value: "100", suffix: "%", label: "Billing Accuracy" },
                { value: "40", suffix: "hrs", label: "Saved per Month on Admin" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div className="stat-num-big">{s.value}{s.suffix}</div>
                  <p style={{ fontSize: 11, fontWeight: 800, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 8 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Logo marquee */}
            <div className="rv d2 marquee-wrap">
              <div className="marquee-track">
                {["Sai Hostel, Pune", "GVK Industrial Canteen", "NIT Campus Mess", "Sri Venkateshwara College", "TCS Campus Cafeteria", "Zolo Student Housing", "Sai Hostel, Pune", "GVK Industrial Canteen", "NIT Campus Mess", "Sri Venkateshwara College", "TCS Campus Cafeteria", "Zolo Student Housing"].map((name, i) => (
                  <span key={i} className="logo-text">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA — Ready for Absolute Precision?
        ════════════════════════════════════════ */}
        <section className="cta-section">
          <div className="rv" style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(28px,4vw,48px)", fontWeight: 900,
              color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 18,
              fontFamily: "'Bricolage Grotesque', system-ui, sans-serif", lineHeight: 1.18,
            }}>
              Ready for{" "}<span style={{ color: "#FF6B35" }}>Absolute<br />Precision?</span>
            </h2>
            <p style={{ fontSize: 15.5, color: "#555", lineHeight: 1.75, marginBottom: 36 }}>
              Stop managing chaos. Start engineering your food operations. Book a technical demonstration of the Mealiez OS today.
            </p>
            <Link href="/book-demo" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg,#FF6B35,#FF875C)",
              color: "#fff", borderRadius: 12, padding: "16px 36px",
              fontSize: 15, fontWeight: 700, textDecoration: "none",
              boxShadow: "0 8px 28px rgba(255,107,53,0.4)",
              letterSpacing: "-0.01em",
            }}>
              Book a Technical Demo
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
