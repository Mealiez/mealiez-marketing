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

const guides = [
  {
    icon: "🚀",
    title: "The Complete Onboarding Checklist for New Mess Operators",
    desc: "A step-by-step 30-day checklist to get your mess operations fully digitalised and your team fully trained on Mealiez.",
    tag: "Onboarding",
    tagColor: "#FF6B35",
    pages: "12 pages",
    format: "PDF + Checklist",
    featured: true,
  },
  {
    icon: "📋",
    title: "Standard Operating Procedures (SOPs) for Daily Mess Operations",
    desc: "Ready-to-use SOPs for meal booking cutoffs, attendance tracking, daily stock takes, and end-of-day billing reconciliation.",
    tag: "SOPs",
    tagColor: "#8b5cf6",
    pages: "18 pages",
    format: "PDF",
    featured: false,
  },
  {
    icon: "💰",
    title: "Reducing Food Wastage: A Practical Playbook for Mess Operators",
    desc: "Proven tactics to reduce food wastage by 20–30% using demand-accurate meal booking, kitchen prep planning, and weekly menu audits.",
    tag: "Food Waste",
    tagColor: "#22c55e",
    pages: "10 pages",
    format: "PDF",
    featured: false,
  },
  {
    icon: "💳",
    title: "The Billing Automation Guide: From Manual Ledgers to Zero-Touch Invoicing",
    desc: "How to migrate from paper billing to fully automated invoice generation, payment collection, and dues tracking.",
    tag: "Billing",
    tagColor: "#3b82f6",
    pages: "14 pages",
    format: "PDF + Templates",
    featured: false,
  },
  {
    icon: "🏠",
    title: "Hostel Mess Operator's Handbook 2026",
    desc: "The definitive guide for hostel mess operators covering student management, FSSAI compliance, vendor negotiation, and digital transformation.",
    tag: "Hostel Ops",
    tagColor: "#f59e0b",
    pages: "28 pages",
    format: "PDF",
    featured: false,
  },
  {
    icon: "📊",
    title: "How to Build a Weekly Ops Review: Template and Framework",
    desc: "A simple but powerful weekly review framework that keeps your mess operations on track. Includes a downloadable dashboard template.",
    tag: "Operations",
    tagColor: "#ef4444",
    pages: "8 pages",
    format: "PDF + Excel",
    featured: false,
  },
];

export default function GuidesPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important}
        .gp { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .guide-card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:20px;padding:28px;transition:transform .25s,box-shadow .25s;}
        .guide-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.07);}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
        .dl-btn{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:#FF6B35;text-decoration:none;border:1.5px solid rgba(255,107,53,0.2);border-radius:100px;padding:7px 16px;transition:background .15s,border-color .15s;}
        .dl-btn:hover{background:#fff3ee;border-color:#FF6B35;}
      `}</style>

      <div className="gp">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 64px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
              Free Guides
            </div>
            <h1 className="rv d1" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Playbooks for<br />
              <span style={{ color: "#FF6B35" }}>Better Operations</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 16, color: "#555", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
              Practical, downloadable guides written by the Mealiez team from real operator experience — not theory.
            </p>
          </div>
        </section>

        {/* Featured guide */}
        <section style={{ background: "#fff", padding: "64px 0 0" }}>
          <div className="w">
            <div className="rv" style={{
              background: "linear-gradient(135deg, #FF6B35, #FF875C)",
              borderRadius: 24, padding: "40px 48px",
              display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center",
              marginBottom: 48
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Featured Guide</div>
                <h2 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.3 }}>{guides[0].title}</h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.72, marginBottom: 6 }}>{guides[0].desc}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>{guides[0].pages} · {guides[0].format}</p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontSize: 56, marginBottom: 16, textAlign: "center" }}>{guides[0].icon}</div>
                <a href="/book-demo" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#FF6B35", borderRadius: 10, padding: "12px 22px", fontWeight: 700, fontSize: 13.5, textDecoration: "none", whiteSpace: "nowrap" }}>
                  📥 Download Free
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* All guides grid */}
        <section style={{ background: "#fff", padding: "0 0 88px" }}>
          <div className="w">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
              {guides.slice(1).map((guide, i) => (
                <div key={i} className={`guide-card rv d${(i % 3) + 1}`}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                    <div style={{ fontSize: 32 }}>{guide.icon}</div>
                    <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", background: guide.tagColor, borderRadius: 100, padding: "3px 10px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {guide.tag}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 15.5, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.45, marginBottom: 12 }}>{guide.title}</h2>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.72, marginBottom: 20 }}>{guide.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 12, color: "#aaa" }}>{guide.pages} · {guide.format}</span>
                    <a href="/book-demo" className="dl-btn">
                      📥 Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Want a custom playbook for your operation?
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 36px" }}>
            Book a demo and our team will build you a tailored implementation plan for free.
          </p>
          <Link href="/book-demo" className="btn-ora rv d2">Book a Free Demo</Link>
        </section>

      </div>
    </>
  );
}
