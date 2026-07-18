"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RoiCalculator } from "@/components/calculators";

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

const howItWorks = [
  { step: "1", label: "Enter your members", desc: "How many meals does your operation serve per day?" },
  { step: "2", label: "Set average meal cost", desc: "What is the average cost per meal in your operation?" },
  { step: "3", label: "Estimate wastage %", desc: "What percentage of food is currently being wasted?" },
  { step: "4", label: "See your savings", desc: "Mealiez typically reduces wastage by 60% through demand-accurate booking." },
];

export default function RoiCalculatorPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important}
        .rc { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:720px; margin:0 auto; padding:0 40px; }
        .s-cream{ background:#fef6f0; padding:80px 0; }
        .s-white{ background:#fff; padding:80px 0; }
        .card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:20px;padding:28px;}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
      `}</style>

      <div className="rc">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 56px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 24, fontSize: 13 }}>
              <Link href="/resources" style={{ color: "#FF6B35", textDecoration: "none", fontWeight: 600 }}>Resources</Link>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              <span style={{ color: "#888" }}>ROI Calculator</span>
            </div>
            <div className="rv" style={{ fontSize: 52, marginBottom: 12 }}>🧮</div>
            <h1 className="rv d1" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              ROI Calculator
            </h1>
            <p className="rv d2" style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
              See how much your operation could save annually by reducing food wastage with demand-accurate meal booking on Mealiez.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="s-white">
          <div className="w-sm">
            <div className="rv">
              <RoiCalculator />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 32, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              How the calculation works
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 48px" }}>
              The model assumes Mealiez reduces food wastage by 60% — a conservative figure based on our operator data.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
              {howItWorks.map((h, i) => (
                <div key={i} className={`card rv d${i + 1}`} style={{ textAlign: "center" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#FF6B35", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, margin: "0 auto 16px" }}>{h.step}</div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>{h.label}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{h.desc}</p>
                </div>
              ))}
            </div>
            <p className="rv" style={{ fontSize: 13, color: "#aaa", textAlign: "center", marginTop: 32, maxWidth: 560, margin: "32px auto 0", lineHeight: 1.65 }}>
              Note: Actual savings depend on your current operational practices, cuisine complexity, and member behaviour. The calculator provides an indicative estimate based on industry averages.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Claim your estimated savings
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 36px" }}>
            Book a demo and we'll show you exactly how Mealiez drives those savings in your specific operation.
          </p>
          <div className="rv d2" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-ora">Book a Free Demo</Link>
            <Link href="/resources/cost-leakage-calculator" style={{ color: "rgba(255,255,255,.6)", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, padding: "15px 0" }}>
              Also try: Cost Leakage Calculator →
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
