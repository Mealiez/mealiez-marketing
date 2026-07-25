"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { LeakageCalculator } from "@/components/calculators";
import BorderGlow from "@/components/ui/border-glow";

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

const leakageSources = [
  { icon: "👥", title: "Proxy Dining", desc: "Unauthorised guests eating at the mess without a valid plan or booking." },
  { icon: "📋", title: "Attendance Mismatch", desc: "Members marked as absent but still consuming meals — or vice versa." },
  { icon: "💳", title: "Billing Gaps", desc: "Plan changes mid-month that aren't captured in the billing cycle." },
  { icon: "📝", title: "Manual Entry Errors", desc: "Human mistakes in registers that result in under-billing of members." },
];

const howItWorks = [
  { step: "1", label: "Enter daily meal count", desc: "Total meals your operation serves per day across all sessions." },
  { step: "2", label: "Set average meal price", desc: "Your standard per-meal charge to members or customers." },
  { step: "3", label: "Estimate mismatch %", desc: "The percentage of meals consumed but not properly tracked or billed." },
  { step: "4", label: "See annual leakage", desc: "The total revenue being lost every year due to this gap." },
];

export default function CostLeakageCalculatorPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important}
        .clc { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:720px; margin:0 auto; padding:0 40px; }
        .s-cream{ background:#fef6f0; padding:80px 0; }
        .s-white{ background:#fff; padding:80px 0; }
        .card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:20px;padding:28px;}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
      `}</style>

      <div className="clc">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 56px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 24, fontSize: 13 }}>
              <Link href="/resources" style={{ color: "#FF6B35", textDecoration: "none", fontWeight: 600 }}>Resources</Link>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              <span style={{ color: "#888" }}>Cost Leakage Calculator</span>
            </div>
            <div className="rv" style={{ fontSize: 52, marginBottom: 12 }}>💸</div>
            <h1 className="rv d1" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Cost Leakage Calculator
            </h1>
            <p className="rv d2" style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>
              Find out exactly how much revenue your operation is losing every year to attendance mismatch, proxy dining, and billing gaps — before you can fix it.
            </p>
          </div>
        </section>

        {/* Leakage sources */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 32, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>Where does revenue leak from?</h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 460, margin: "0 auto 48px" }}>
              Most operators are surprised by how many gaps exist in their current system.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
              {leakageSources.map((s, i) => (
                <BorderGlow key={i} className={`card rv d${i + 1}`} style={{ textAlign: "center", borderTop: "3px solid #FF6B35" }} backgroundColor="#ffffff" borderRadius={20}>
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: "#1a1a1a", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{s.desc}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="s-cream">
          <div className="w-sm">
            <h2 className="rv" style={{ fontSize: 32, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Calculate your annual revenue leakage
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 460, margin: "0 auto 40px" }}>
              Enter your numbers below. Most operations are shocked by the result.
            </p>
            <div className="rv d2">
              <LeakageCalculator />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 32, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-.025em" }}>
              How the calculation works
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
              {howItWorks.map((h, i) => (
                <BorderGlow key={i} className={`card rv d${i + 1}`} style={{ textAlign: "center" }} backgroundColor="#ffffff" borderRadius={20}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#FF6B35", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, margin: "0 auto 16px" }}>{h.step}</div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>{h.label}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{h.desc}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Plug your revenue leaks with Mealiez
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 460, margin: "0 auto 36px" }}>
            Mealiez's attendance and billing automation eliminates the gaps that cause revenue leakage — from day one.
          </p>
          <div className="rv d2" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-ora">Book a Free Demo</Link>
            <Link href="/resources/roi-calculator" style={{ color: "rgba(255,255,255,.6)", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, padding: "15px 0" }}>
              Also try: ROI Calculator →
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
