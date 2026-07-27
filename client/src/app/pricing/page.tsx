"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RoiCalculator } from "@/components/calculators";
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

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: 12, marginBottom: 10,
      boxShadow: open ? "0 4px 20px rgba(255,107,53,0.06)" : "none",
      transition: "box-shadow .2s"
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", background: "none", border: "none", cursor: "pointer",
        padding: "18px 22px", display: "flex", justifyContent: "space-between",
        alignItems: "center", textAlign: "left", fontSize: 15, fontWeight: 600, color: "#1a1a1a"
      }}>
        {q}
        <svg style={{ flexShrink: 0, marginLeft: 12, transform: open ? "rotate(180deg)" : "none", transition: "transform .25s" }}
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#555", lineHeight: 1.78 }}>{a}</div>
      )}
    </div>
  );
}

const allFeatures = [
  { label: "Meal Booking", standard: true, enterprise: true },
  { label: "Attendance Management", standard: true, enterprise: true },
  { label: "Billing & Payments", standard: true, enterprise: true },
  { label: "Inventory Management", standard: true, enterprise: true },
  { label: "Analytics & Reports", standard: "Basic", enterprise: "Advanced" },
  { label: "Mobile App (Member + Admin)", standard: true, enterprise: true },
  { label: "Multi-Location Management", standard: false, enterprise: true },
  { label: "Custom Integrations (ERP/HRMS)", standard: false, enterprise: true },
  { label: "Dedicated Success Manager", standard: false, enterprise: true },
  { label: "Custom Onboarding & Training", standard: false, enterprise: true },
  { label: "Priority Support SLA", standard: false, enterprise: true },
  { label: "Custom Reporting & Dashboards", standard: false, enterprise: true },
  { label: "Audit-Ready Compliance Reports", standard: false, enterprise: true },
  { label: "White-Label Options", standard: false, enterprise: true },
];

const faqs = [
  { q: "Can I start on Standard and move to Enterprise later?", a: "Yes. Upgrade paths are seamless with zero data migration or operational disruption. Your team will be migrated by our implementation team." },
  { q: "Is there a setup or onboarding fee?", a: "Standard plan includes guided self-onboarding at no extra cost. Enterprise includes a fully managed implementation program." },
  { q: "What is the minimum contract term?", a: "Standard plan is available month-to-month. Enterprise plans are typically annual with custom terms." },
  { q: "Do you offer a free trial or pilot?", a: "Yes. Enterprise customers can request a 30-day pilot. Book a demo to discuss your requirements." },
  { q: "Does Mealiez work offline?", a: "Core attendance and booking functions have offline capability on the mobile app. Data syncs automatically when connectivity is restored." },
];

export default function PricingPage() {
  useReveal();
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important}
        .pp { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:720px; margin:0 auto; padding:0 40px; }
        .s-cream{ background:#fef6f0; padding:80px 0; }
        .s-white{ background:#fff; padding:80px 0; }
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
        .plan-card{background:#fff;border:1.5px solid rgba(0,0,0,.08);border-radius:24px;padding:36px;flex:1;position:relative;transition:transform .25s,box-shadow .25s,border-color .25s;}
        .plan-card:hover{transform:translateY(-4px);box-shadow:0 20px 60px rgba(255,107,53,.1);border-color:rgba(255,107,53,.25);}
        .plan-card.enterprise{border-color:rgba(255,107,53,.3);box-shadow:0 12px 40px rgba(255,107,53,.12);}
        .check{display:flex;align-items:center;gap:10px;font-size:14px;color:#444;margin-bottom:12px;}
        .check-x{display:flex;align-items:center;gap:10px;font-size:14px;color:#bbb;margin-bottom:12px;}
        .table-row-even{background:#fafafa;}
        .pill-active{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border-radius:100px;padding:8px 20px;font-size:13px;font-weight:700;border:none;cursor:pointer;}
        .pill-inactive{background:transparent;color:#666;border-radius:100px;padding:8px 20px;font-size:13px;font-weight:600;border:none;cursor:pointer;transition:color .15s;}
        .pill-inactive:hover{color:#FF6B35;}
      `}</style>

      <div className="pp">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
              Pricing
            </div>
            <h1 className="rv d1" style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Honest pricing.<br />
              <span style={{ color: "#FF6B35" }}>No hidden fees.</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 500, margin: "0 auto 36px" }}>
              Pick the plan that fits your mess size today. Upgrade to Enterprise when you're ready to scale across multiple locations.
            </p>

            {/* Billing Toggle */}
            <div className="rv d3" style={{ display: "inline-flex", background: "#fff", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 100, padding: 4 }}>
              <button className={billing === "monthly" ? "pill-active" : "pill-inactive"} onClick={() => setBilling("monthly")}>Monthly</button>
              <button className={billing === "annual" ? "pill-active" : "pill-inactive"} onClick={() => setBilling("annual")}>
                Annual
                <span style={{ marginLeft: 6, background: "rgba(34,197,94,0.12)", color: "#16a34a", borderRadius: 100, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>Save 20%</span>
              </button>
            </div>
          </div>
        </section>

        {/* Plan Cards */}
        <section className="s-white">
          <div className="w">
            <div style={{ display: "flex", gap: 24, alignItems: "stretch" }}>

              {/* Standard */}
              <BorderGlow className="plan-card rv d1" backgroundColor="#ffffff" borderRadius={20}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Standard</div>
                <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a1a", marginBottom: 4 }}>
                  {billing === "monthly" ? "₹9,999" : "₹7,999"}
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#888" }}>/month</span>
                </h2>
                {billing === "annual" && <p style={{ fontSize: 12, color: "#16a34a", fontWeight: 600, marginBottom: 12 }}>₹23,988 saved annually</p>}
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, marginBottom: 28 }}>
                  For small and medium mess businesses, independent hostels, tiffin services, and food operators getting started with digital management.
                </p>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 24, marginBottom: 28 }}>
                  {["Meal Booking", "Attendance Management", "Billing & Payments", "Inventory Management", "Basic Analytics", "Mobile App (Member + Admin)", "Up to 500 members", "Email Support"].map((f) => (
                    <div key={f} className="check">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/book-demo" className="btn-ora" style={{ width: "100%", justifyContent: "center", boxSizing: "border-box" }}>
                  Get Started
                </Link>
              </BorderGlow>

              {/* Enterprise */}
              <BorderGlow className="plan-card enterprise rv d2" backgroundColor="#ffffff" borderRadius={20}>
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#FF6B35,#FF875C)", color: "#fff", borderRadius: 100, padding: "4px 18px", fontSize: 11, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  Most Popular
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Enterprise</div>
                <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a1a", marginBottom: 4 }}>
                  Custom
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#888" }}> pricing</span>
                </h2>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, marginBottom: 28 }}>
                  For universities, multi-location operations, factory canteens, and large food service businesses managing hundreds or thousands of members.
                </p>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 24, marginBottom: 28 }}>
                  {["Everything in Standard", "Unlimited members", "Multi-Location Management", "Advanced Analytics & Reports", "Custom ERP/HRMS Integrations", "Dedicated Success Manager", "Custom Onboarding & Training", "Priority Support SLA", "Audit-Ready Compliance Reports", "White-Label Options"].map((f) => (
                    <div key={f} className="check">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/book-demo" className="btn-ora" style={{ width: "100%", justifyContent: "center", boxSizing: "border-box" }}>
                  Contact Sales
                </Link>
              </BorderGlow>

            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Full Feature Comparison
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 460, margin: "0 auto 48px" }}>
              Every feature side-by-side so you can choose with confidence.
            </p>
            <div className="rv" style={{ background: "#fff", borderRadius: 20, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#fef6f0" }}>
                    <th style={{ padding: "16px 24px", textAlign: "left", fontSize: 12, fontWeight: 800, color: "#888", letterSpacing: "0.06em", textTransform: "uppercase" }}>Feature</th>
                    <th style={{ padding: "16px 24px", textAlign: "center", fontSize: 12, fontWeight: 800, color: "#888", letterSpacing: "0.06em", textTransform: "uppercase" }}>Standard</th>
                    <th style={{ padding: "16px 24px", textAlign: "center", fontSize: 12, fontWeight: 800, color: "#FF6B35", letterSpacing: "0.06em", textTransform: "uppercase" }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feat, i) => (
                    <tr key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 1 ? "#fafafa" : "#fff" }}>
                      <td style={{ padding: "14px 24px", fontWeight: 500, color: "#333" }}>{feat.label}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>
                        {feat.standard === true ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" style={{ margin: "0 auto" }}><polyline points="20 6 9 17 4 12"/></svg>
                        ) : feat.standard === false ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" style={{ margin: "0 auto" }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        ) : (
                          <span style={{ fontSize: 12, fontWeight: 600, color: "#888" }}>{feat.standard}</span>
                        )}
                      </td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>
                        {feat.enterprise === true ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" style={{ margin: "0 auto" }}><polyline points="20 6 9 17 4 12"/></svg>
                        ) : feat.enterprise === false ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" style={{ margin: "0 auto" }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        ) : (
                          <span style={{ fontSize: 12, fontWeight: 700, color: "#FF6B35" }}>{feat.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Mealiez Pays for Itself
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 40px" }}>
              Most mess operators recover their entire subscription cost within the first month — just from the food they stop wasting.
            </p>
            <div className="rv d2" style={{ maxWidth: 680, margin: "0 auto" }}>
              <RoiCalculator />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="s-cream">
          <div className="w-sm">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 44, letterSpacing: "-.025em" }}>
              Pricing FAQs
            </h2>
            <div className="rv">
              {faqs.map((faq, i) => <FAQ key={i} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            See Mealiez in Action
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 460, margin: "0 auto 36px" }}>
            30-minute live walkthrough tailored to your mess type. No credit card required. No sales pressure.
          </p>
          <div className="rv d2" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-ora">Book Free Demo</Link>
            <Link href="/book-demo" style={{ color: "rgba(255,255,255,.6)", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, padding: "15px 0" }}>
              Contact Enterprise Sales →
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
