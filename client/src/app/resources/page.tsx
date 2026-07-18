"use client";

import React, { useEffect } from "react";
import Link from "next/link";

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

const hubs = [
  {
    icon: "✍️",
    title: "Blog",
    desc: "Operational insights, industry trends, and food service management guides from the Mealiez team.",
    href: "/blog",
    cta: "Read the Blog",
    tags: ["Mess Management", "Hostel Ops", "Food Waste", "Billing", "Industry"],
    color: "#FF6B35",
  },
  {
    icon: "📘",
    title: "Guides",
    desc: "Step-by-step playbooks and downloadable resources for running a better food service operation.",
    href: "/guides",
    cta: "Browse Guides",
    tags: ["Onboarding", "Best Practices", "Checklists", "SOPs"],
    color: "#8b5cf6",
  },
  {
    icon: "📈",
    title: "Reports",
    desc: "Original research and industry benchmarks on food wastage, mess management, and operator economics in India.",
    href: "/reports",
    cta: "View Reports",
    tags: ["Benchmarks", "Research", "Data", "2026"],
    color: "#22c55e",
  },
  {
    icon: "🧮",
    title: "ROI Calculator",
    desc: "Calculate how much your operation could save annually by reducing food wastage with Mealiez.",
    href: "/resources/roi-calculator",
    cta: "Calculate ROI",
    tags: ["Interactive", "Savings", "Food Wastage"],
    color: "#3b82f6",
  },
  {
    icon: "💸",
    title: "Cost Leakage Calculator",
    desc: "Find out exactly how much revenue you're losing to attendance mismatch and billing errors every year.",
    href: "/resources/cost-leakage-calculator",
    cta: "Find Your Leakage",
    tags: ["Interactive", "Revenue", "Attendance"],
    color: "#f59e0b",
  },
  {
    icon: "📖",
    title: "Case Studies",
    desc: "Deep-dive breakdowns of how real operators transformed their food operations with Mealiez.",
    href: "/customers",
    cta: "Read Case Studies",
    tags: ["Hostel", "College", "Cloud Kitchen", "Results"],
    color: "#ef4444",
  },
];

export default function ResourcesPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}
        .rp { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .hub-card{background:#fff;border:1.5px solid rgba(0,0,0,.07);border-radius:20px;padding:32px;text-decoration:none;display:block;transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s,border-color .25s;}
        .hub-card:hover{transform:translateY(-5px);box-shadow:0 20px 56px rgba(0,0,0,.08);}
        .tag{display:inline-block;background:#fef6f0;color:#888;font-size:11px;font-weight:600;padding:3px 10px;border-radius:100px;margin:0 4px 4px 0;}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
      `}</style>

      <div className="rp">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
              Resource Centre
            </div>
            <h1 className="rv d1" style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Everything you need to<br />
              <span style={{ color: "#FF6B35" }}>run a better operation</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>
              Guides, calculators, research reports, and case studies — all free, all built for food service operators.
            </p>
          </div>
        </section>

        {/* Hub grid */}
        <section style={{ background: "#fff", padding: "88px 0" }}>
          <div className="w">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
              {hubs.map((h, i) => (
                <Link key={i} href={h.href} className={`hub-card rv d${(i % 3) + 1}`} style={{ borderTop: `3px solid ${h.color}` }}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{h.icon}</div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", marginBottom: 10 }}>{h.title}</h2>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.72, marginBottom: 20 }}>{h.desc}</p>
                  <div style={{ marginBottom: 20 }}>
                    {h.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: h.color, display: "flex", alignItems: "center", gap: 6 }}>
                    {h.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Want a personalised walkthrough?
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 36px" }}>
            Book a demo and we'll show you exactly how Mealiez applies to your specific operation.
          </p>
          <Link href="/book-demo" className="btn-ora rv d2">Book Free Demo</Link>
        </section>

      </div>
    </>
  );
}
