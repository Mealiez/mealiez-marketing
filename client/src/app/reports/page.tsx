"use client";

import React, { useEffect } from "react";
import Link from "next/link";
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

const reports = [
  {
    icon: "📊",
    title: "State of Mess Management in India 2026",
    desc: "Original research covering 500+ mess operators across India. Key data on digitisation rates, food wastage benchmarks, billing practices, and technology adoption.",
    highlights: [
      "Only 12% of Indian messes have any digital attendance system",
      "Average food wastage: 18–25% of total procurement cost",
      "Manual billing dispute rate: 1 in 6 members monthly",
    ],
    tag: "Annual Report",
    tagColor: "#FF6B35",
    pages: "42 pages",
    published: "July 2026",
    featured: true,
  },
  {
    icon: "💸",
    title: "The Hidden Cost of Manual Operations: A Financial Impact Report",
    desc: "A quantitative analysis of the financial cost of running a mess on manual systems — across labour, wastage, billing errors, and collection delays.",
    highlights: [
      "Manual ops cost 23% more per member than digitised equivalents",
      "Average 34-day collection lag on manual billing",
      "₹4.2L average annual leakage for a 500-member operation",
    ],
    tag: "Financial Research",
    tagColor: "#8b5cf6",
    pages: "28 pages",
    published: "April 2026",
    featured: false,
  },
  {
    icon: "📱",
    title: "Mobile Adoption in Hostel Mess Operations: 2025–2026 Benchmark",
    desc: "How hostel operators are adopting mobile-first tools for attendance, booking, and billing — and what drives or blocks digital adoption among students and wardens.",
    highlights: [
      "Mobile-first messes see 41% higher student satisfaction scores",
      "Admin time reduction of 2.5 hours/day with mobile attendance",
      "Top barrier to adoption: perceived complexity of transition",
    ],
    tag: "Industry Benchmark",
    tagColor: "#22c55e",
    pages: "20 pages",
    published: "February 2026",
    featured: false,
  },
];

export default function ReportsPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important}
        .rpts { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .s-cream{ background:#fef6f0; padding:80px 0; }
        .s-white{ background:#fff; padding:80px 0; }
        .card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:20px;padding:32px;transition:transform .25s,box-shadow .25s;}
        .card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.07);}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
        .dl-btn{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:#FF6B35;text-decoration:none;border:1.5px solid rgba(255,107,53,0.2);border-radius:100px;padding:8px 18px;transition:background .15s,border-color .15s;}
        .dl-btn:hover{background:#fff3ee;border-color:#FF6B35;}
        .highlight{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:#444;margin-bottom:10px;line-height:1.65;}
      `}</style>

      <div className="rpts">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 64px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
              Research & Reports
            </div>
            <h1 className="rv d1" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Original research on<br />
              <span style={{ color: "#FF6B35" }}>Indian food service operations</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 16, color: "#555", lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>
              Data-backed industry reports from Mealiez's network of 500+ operators — free to download, no form required.
            </p>
          </div>
        </section>

        {/* Featured report */}
        <section className="s-white">
          <div className="w">
            <div className="rv" style={{
              border: "2px solid rgba(255,107,53,0.25)",
              borderRadius: 24, overflow: "hidden",
              display: "grid", gridTemplateColumns: "1fr auto",
              marginBottom: 40
            }}>
              <div style={{ padding: "40px 48px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", background: "#FF6B35", borderRadius: 100, padding: "4px 12px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Featured · {reports[0].published}
                  </span>
                  <span style={{ fontSize: 12, color: "#aaa" }}>{reports[0].pages}</span>
                </div>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{reports[0].icon}</div>
                <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a1a", marginBottom: 14, lineHeight: 1.3 }}>{reports[0].title}</h2>
                <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.75, marginBottom: 24 }}>{reports[0].desc}</p>
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>Key Findings</div>
                  {reports[0].highlights.map((h, i) => (
                    <div key={i} className="highlight">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                      {h}
                    </div>
                  ))}
                </div>
                <a href="/book-demo" className="dl-btn" style={{ fontSize: 14, padding: "10px 24px" }}>
                  📥 Download Full Report
                </a>
              </div>
              <div style={{ background: "linear-gradient(135deg, #fef6f0, #ffe8d6)", padding: "40px 32px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: 200 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 72 }}>📊</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#FF6B35", marginTop: 8 }}>2026 Edition</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other reports */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 28, fontWeight: 900, marginBottom: 36, letterSpacing: "-.025em" }}>All Reports</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22 }}>
              {reports.slice(1).map((report, i) => (
                <BorderGlow key={i} className={`card rv d${i + 1}`} style={{ borderTop: `3px solid ${report.tagColor}` }} backgroundColor="#ffffff" borderRadius={20}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                    <div style={{ fontSize: 36 }}>{report.icon}</div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", background: report.tagColor, borderRadius: 100, padding: "3px 10px", letterSpacing: "0.04em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>
                        {report.tag}
                      </span>
                      <span style={{ fontSize: 11, color: "#aaa" }}>{report.published} · {report.pages}</span>
                    </BorderGlow>
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.4, marginBottom: 12 }}>{report.title}</h2>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.72, marginBottom: 20 }}>{report.desc}</p>
                  <div style={{ marginBottom: 22 }}>
                    {report.highlights.map((h, hi) => (
                      <div key={hi} className="highlight">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={report.tagColor} strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                        {h}
                      </div>
                    ))}
                  </div>
                  <a href="/book-demo" className="dl-btn">📥 Download Report</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Want to see the data applied to your operation?
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 36px" }}>
            Book a demo and we'll benchmark your operation against our industry data live.
          </p>
          <Link href="/book-demo" className="btn-ora rv d2">Book a Free Demo</Link>
        </section>

      </div>
    </>
  );
}
