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
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function PricingFAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid #E5E7EB",
      borderRadius: 14,
      marginBottom: 10,
      overflow: "hidden",
      boxShadow: open ? "0 4px 16px rgba(0,0,0,0.04)" : "none",
      transition: "box-shadow .2s ease"
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          padding: "18px 22px", display: "flex", justifyContent: "space-between",
          alignItems: "center", textAlign: "left", fontSize: 15, fontWeight: 700, color: "#111827"
        }}
      >
        <span>{q}</span>
        <svg
          style={{ flexShrink: 0, marginLeft: 12, transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#4B5563", lineHeight: 1.7, borderTop: "1px solid #F3F4F6" }}>
          {a}
        </div>
      )}
    </div>
  );
}

const comparisonData = [
  { feature: "Active Student Limit", free: "Up to 25", starter: "Up to 50", pro: "Up to 100+", enterprise: "Unlimited" },
  { feature: "Marketplace Listing", free: true, starter: true, pro: true, enterprise: true },
  { feature: "Digital Menu & Schedule", free: true, starter: true, pro: true, enterprise: true },
  { feature: "Student Roster Management", free: "Basic", starter: true, pro: true, enterprise: true },
  { feature: "QR Code Camera Attendance", free: false, starter: true, pro: true, enterprise: true },
  { feature: "Automated Dues & Payment Tracking", free: false, starter: true, pro: true, enterprise: true },
  { feature: "WhatsApp & Online Receipts", free: false, starter: true, pro: true, enterprise: true },
  { feature: "Leave & Holiday Deductions", free: false, starter: true, pro: true, enterprise: true },
  { feature: "Multi-Staff Logins & Roles", free: "1 staff", starter: "2 staff", pro: "Unlimited", enterprise: "Custom Roles" },
  { feature: "Kitchen Headcount Forecasting", free: false, starter: false, pro: true, enterprise: true },
  { feature: "Dish Ratings & Student Feedback", free: false, starter: false, pro: true, enterprise: true },
  { feature: "Multi-Block / Multi-Location", free: false, starter: false, pro: false, enterprise: true },
  { feature: "Custom Onboarding & Staff Training", free: false, starter: false, pro: false, enterprise: true },
  { feature: "Custom ERP & Accounting Integration", free: false, starter: false, pro: false, enterprise: true },
  { feature: "Support SLA", free: "Community", starter: "Standard", pro: "Priority WhatsApp", enterprise: "Dedicated Manager" },
];

const faqs = [
  { q: "Is the Free plan really free forever?", a: "Yes. Our Free tier (₹0/forever) lets you set up your mess profile, list on the marketplace, manage up to 25 members, and publish weekly digital menus with zero charges." },
  { q: "Do I need to buy special biometric or card-scanner hardware?", a: "No. Mealiez requires ₹0 hardware investment. All attendance scanning and member verifications run directly on any Android smartphone, tablet, or web browser." },
  { q: "Can I upgrade or downgrade as my student count changes between semesters?", a: "Yes. You can switch plans anytime. When student batches graduate or new admissions arrive, upgrade or downgrade with one click. Your historical data and records are always preserved." },
  { q: "How do monthly dues and payments work?", a: "On Starter and Pro plans, Mealiez tracks attendance and leave deductions, then calculates exact dues. You can send students and parents an itemized statement with an instant UPI payment link." },
  { q: "What if I manage multiple hostel blocks or college canteens?", a: "For multi-block campuses and institutional catering contractors, our Enterprise plan provides multi-hall consolidation, role permissions for wardens/chefs, and dedicated onboarding." },
];

export default function PricingPage() {
  useReveal();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      <style>{`
        .rv { opacity:0; transform:translateY(24px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important} .d3{transition-delay:.3s!important}

        .pricing-hero {
          background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
          padding: clamp(64px,7vw,96px) 0 clamp(48px,5vw,72px);
          text-align: center;
          border-bottom: 1px solid #E5E7EB;
        }

        .plan-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(16px, 2vw, 24px);
          align-items: stretch;
        }

        @media (max-width: 1080px) {
          .plan-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .plan-grid { grid-template-columns: 1fr; }
        }

        .btn-brand {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: linear-gradient(135deg, #EA580C, #F97316);
          color: #ffffff; border: none; border-radius: 10px;
          padding: 13px 20px; font-size: 14px; font-weight: 700;
          text-decoration: none; cursor: pointer;
          box-shadow: 0 4px 14px rgba(234,88,12,0.28);
          transition: transform .2s, box-shadow .2s;
          width: 100%; box-sizing: border-box;
        }
        .btn-brand:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(234,88,12,0.36);
        }

        .btn-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: #ffffff; color: #1F2937;
          border: 1.5px solid #E5E7EB; border-radius: 10px;
          padding: 13px 20px; font-size: 14px; font-weight: 700;
          text-decoration: none; cursor: pointer;
          transition: all .2s;
          width: 100%; box-sizing: border-box;
        }
        .btn-outline:hover {
          background: #F9FAFB;
          border-color: rgba(234,88,12,0.4);
          color: #EA580C;
          transform: translateY(-2px);
        }

        .check-item {
          display: flex; align-items: flex-start; gap: 9px;
          font-size: 13px; color: #374151; padding: 6px 0;
          line-height: 1.45;
        }
      `}</style>

      {/* ── 1. Hero ── */}
      <section className="pricing-hero">
        <div className="container">
          <div className="rv" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(234,88,12,0.06)", border: "1px solid rgba(234,88,12,0.18)",
            borderRadius: 100, padding: "5px 16px",
            fontSize: 12, fontWeight: 700, color: "#EA580C",
            letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20
          }}>
            Transparent Pricing
          </div>
          <h1 className="rv d1" style={{
            fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 900,
            lineHeight: 1.1, color: "#111827", marginBottom: 18,
            fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase",
          }}>
            Simple, honest pricing. <span style={{ color: "#EA580C" }}>No surprise fees.</span>
          </h1>
          <p className="rv d2" style={{
            fontSize: "clamp(15px,1.2vw,17px)", color: "#4B5563",
            lineHeight: 1.75, maxWidth: 580, margin: "0 auto 32px"
          }}>
            Start free, upgrade as your mess membership grows. All plans include full mobile access and zero proprietary hardware requirements.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="rv d3" style={{
            display: "inline-flex", background: "#ffffff",
            border: "1.5px solid #E5E7EB", borderRadius: 100, padding: 4,
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
          }}>
            <button
              onClick={() => setBillingCycle("monthly")}
              style={{
                background: billingCycle === "monthly" ? "#EA580C" : "transparent",
                color: billingCycle === "monthly" ? "#ffffff" : "#4B5563",
                borderRadius: 100, padding: "8px 20px", fontSize: 13, fontWeight: 700,
                border: "none", cursor: "pointer", transition: "all .15s"
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              style={{
                background: billingCycle === "annual" ? "#EA580C" : "transparent",
                color: billingCycle === "annual" ? "#ffffff" : "#4B5563",
                borderRadius: 100, padding: "8px 20px", fontSize: 13, fontWeight: 700,
                border: "none", cursor: "pointer", transition: "all .15s"
              }}
            >
              Annual Billing
              <span style={{
                marginLeft: 6, background: "rgba(16,185,129,0.15)", color: "#059669",
                borderRadius: 100, padding: "2px 8px", fontSize: 11, fontWeight: 800
              }}>
                Save 15%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Verified 4 Plans Grid ── */}
      <section style={{ background: "#ffffff", padding: "clamp(60px,7vw,90px) 0" }}>
        <div className="container">
          <div className="plan-grid">

            {/* Plan 1: Free */}
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="#ffffff"
              borderRadius={20}
              glowRadius={20}
              glowIntensity={0.25}
              colors={["#EA580C", "#F97316", "#FB923C"]}
              style={{
                padding: "32px 24px",
                borderRadius: 20,
                border: "1.5px solid #E5E7EB",
                background: "#ffffff",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#6B7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  FREE TIER
                </span>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#111827", marginTop: 4, marginBottom: 12 }}>
                  Free
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                  <span style={{ fontSize: 38, fontWeight: 900, color: "#111827", fontFamily: "'Barlow Condensed',system-ui,sans-serif" }}>₹0</span>
                  <span style={{ fontSize: 13, color: "#6B7280" }}>/forever</span>
                </div>
                <p style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
                  For small or new mess businesses evaluating digital tools with zero upfront commitment.
                </p>
                <div style={{ padding: "10px 12px", background: "#F9FAFB", borderRadius: 10, border: "1px solid #E5E7EB", marginBottom: 20, fontSize: 12, fontWeight: 700, color: "#111827" }}>
                  Limit: Up to 25 Students
                </div>
                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 16, marginBottom: 24 }}>
                  {[
                    "List on Mealiez Marketplace",
                    "Basic Mess Public Profile",
                    "Student Roster (up to 25)",
                    "Digital Menu Publishing",
                    "Community Helpdesk Support",
                  ].map((feat, i) => (
                    <div key={i} className="check-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                  {[
                    "No QR Code Scanner",
                    "No Automated Dues Reminders",
                  ].map((feat, i) => (
                    <div key={i} className="check-item" style={{ color: "#9CA3AF" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/book-demo" className="btn-outline">
                Get Started Free
              </Link>
            </BorderGlow>

            {/* Plan 2: Starter */}
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="#ffffff"
              borderRadius={20}
              glowRadius={22}
              glowIntensity={0.3}
              colors={["#EA580C", "#F97316", "#FB923C"]}
              style={{
                padding: "32px 24px",
                borderRadius: 20,
                border: "1.5px solid #E5E7EB",
                background: "#ffffff",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  INDEPENDENT MESSES
                </span>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#111827", marginTop: 4, marginBottom: 12 }}>
                  Starter
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                  <span style={{ fontSize: 38, fontWeight: 900, color: "#111827", fontFamily: "'Barlow Condensed',system-ui,sans-serif" }}>
                    {billingCycle === "monthly" ? "₹499" : "₹424"}
                  </span>
                  <span style={{ fontSize: 13, color: "#6B7280" }}>/month</span>
                </div>
                <p style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
                  Everything you need to digitize daily attendance, student check-ins, and dues collection.
                </p>
                <div style={{ padding: "10px 12px", background: "#FFF7ED", borderRadius: 10, border: "1px solid #FED7AA", marginBottom: 20, fontSize: 12, fontWeight: 700, color: "#9A3412" }}>
                  Limit: Up to 50 Students • 2 Staff Logins
                </div>
                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 16, marginBottom: 24 }}>
                  {[
                    "Everything in Free Plan",
                    "QR Code Camera Attendance",
                    "Duplicate-Scan Lock Protection",
                    "Automated Dues & Payment Tracking",
                    "WhatsApp & SMS Payment Reminders",
                    "Leave & Holiday Deductions",
                    "Standard WhatsApp Support",
                  ].map((feat, i) => (
                    <div key={i} className="check-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/book-demo" className="btn-brand">
                Choose Starter
              </Link>
            </BorderGlow>

            {/* Plan 3: Pro (Most Popular) */}
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="#ffffff"
              borderRadius={20}
              glowRadius={28}
              glowIntensity={0.5}
              colors={["#EA580C", "#F97316", "#FB923C"]}
              style={{
                padding: "32px 24px",
                borderRadius: 20,
                border: "2px solid #EA580C",
                background: "#ffffff",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                position: "relative",
                boxShadow: "0 12px 32px rgba(234,88,12,0.12)"
              }}
            >
              <div>
                <div style={{
                  position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #EA580C, #F97316)",
                  color: "#ffffff", borderRadius: 100, padding: "3px 14px",
                  fontSize: 10.5, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
                  boxShadow: "0 4px 12px rgba(234,88,12,0.3)"
                }}>
                  MOST POPULAR
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  GROWING HOSTELS
                </span>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#111827", marginTop: 4, marginBottom: 12 }}>
                  Pro
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                  <span style={{ fontSize: 38, fontWeight: 900, color: "#EA580C", fontFamily: "'Barlow Condensed',system-ui,sans-serif" }}>
                    {billingCycle === "monthly" ? "₹799" : "₹679"}
                  </span>
                  <span style={{ fontSize: 13, color: "#6B7280" }}>/month</span>
                </div>
                <p style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
                  For busy hostel messes and canteens needing full operational visibility and kitchen forecasting.
                </p>
                <div style={{ padding: "10px 12px", background: "#FFF7ED", borderRadius: 10, border: "1px solid #FED7AA", marginBottom: 20, fontSize: 12, fontWeight: 700, color: "#9A3412" }}>
                  Limit: Up to 100+ Students • Unlimited Staff
                </div>
                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 16, marginBottom: 24 }}>
                  {[
                    "Everything in Starter Plan",
                    "Unlimited Staff Logins & Multi-Roles",
                    "Kitchen Headcount Forecasting",
                    "Food Wastage Analytics & Reports",
                    "Dish-Level Ratings & Student Feedback",
                    "Automated Billing PDF Statements",
                    "Priority WhatsApp & Phone SLA",
                  ].map((feat, i) => (
                    <div key={i} className="check-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontWeight: 600 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/book-demo" className="btn-brand">
                Choose Pro
              </Link>
            </BorderGlow>

            {/* Plan 4: Enterprise / Custom */}
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="#ffffff"
              borderRadius={20}
              glowRadius={20}
              glowIntensity={0.25}
              colors={["#EA580C", "#F97316", "#FB923C"]}
              style={{
                padding: "32px 24px",
                borderRadius: 20,
                border: "1.5px solid #E5E7EB",
                background: "#ffffff",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#6B7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  CAMPUSES & CONTRACTORS
                </span>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#111827", marginTop: 4, marginBottom: 12 }}>
                  Custom / Enterprise
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                  <span style={{ fontSize: 32, fontWeight: 900, color: "#111827", fontFamily: "'Barlow Condensed',system-ui,sans-serif" }}>Custom</span>
                  <span style={{ fontSize: 13, color: "#6B7280" }}>/annual quote</span>
                </div>
                <p style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
                  For multi-block university hostels, large industrial cafeterias, and catering contractors.
                </p>
                <div style={{ padding: "10px 12px", background: "#F9FAFB", borderRadius: 10, border: "1px solid #E5E7EB", marginBottom: 20, fontSize: 12, fontWeight: 700, color: "#111827" }}>
                  Limit: Unlimited Members & Multi-Block
                </div>
                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 16, marginBottom: 24 }}>
                  {[
                    "Everything in Pro Plan",
                    "Multi-Location & Multi-Dining Hall View",
                    "Custom ERP / College MIS Integration",
                    "On-Site Staff Training in Hindi/Marathi",
                    "Customized Leave & Fee Deduction Rules",
                    "Dedicated Account Success Manager",
                    "Executive Audit & Compliance Exports",
                  ].map((feat, i) => (
                    <div key={i} className="check-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/book-demo" className="btn-outline">
                Book a Demo →
              </Link>
            </BorderGlow>

          </div>
        </div>
      </section>

      {/* ── 3. Full Comparison Table ── */}
      <section style={{
        background: "#F9FAFB",
        padding: "clamp(60px,7vw,90px) 0",
        borderTop: "1px solid #E5E7EB",
        borderBottom: "1px solid #E5E7EB"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }} className="rv">
            <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              FEATURE BREAKDOWN
            </span>
            <h2 style={{
              fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginTop: 6
            }}>
              Side-by-side plan comparison
            </h2>
          </div>

          <div style={{ background: "#ffffff", borderRadius: 18, border: "1px solid #E5E7EB", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 680 }}>
              <thead>
                <tr style={{ background: "#F9FAFB", borderBottom: "1.5px solid #E5E7EB" }}>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>Feature</th>
                  <th style={{ padding: "16px 14px", textAlign: "center", fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>Free (₹0)</th>
                  <th style={{ padding: "16px 14px", textAlign: "center", fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>Starter (₹499)</th>
                  <th style={{ padding: "16px 14px", textAlign: "center", fontSize: 12, fontWeight: 800, color: "#EA580C", textTransform: "uppercase" }}>Pro (₹799)</th>
                  <th style={{ padding: "16px 14px", textAlign: "center", fontSize: 12, fontWeight: 800, color: "#111827", textTransform: "uppercase" }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #F3F4F6", background: i % 2 === 1 ? "#FAFAFA" : "#ffffff" }}>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "#1F2937" }}>{row.feature}</td>
                    {["free", "starter", "pro", "enterprise"].map((col) => {
                      const val = (row as any)[col];
                      return (
                        <td key={col} style={{ padding: "14px", textAlign: "center" }}>
                          {val === true ? (
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" style={{ margin: "0 auto" }}><polyline points="20 6 9 17 4 12"/></svg>
                          ) : val === false ? (
                            <span style={{ color: "#D1D5DB", fontWeight: 700 }}>—</span>
                          ) : (
                            <span style={{ fontSize: 12.5, fontWeight: col === "pro" ? 700 : 600, color: col === "pro" ? "#EA580C" : "#4B5563" }}>{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. ROI Calculator ── */}
      <section style={{ background: "#ffffff", padding: "clamp(60px,7vw,90px) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 36px" }} className="rv">
            <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              COST-SAVING ESTIMATOR
            </span>
            <h2 style={{
              fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginTop: 6
            }}>
              Mealiez pays for itself in food waste prevented
            </h2>
            <p style={{ fontSize: 14.5, color: "#6B7280", marginTop: 8 }}>
              Calculate how much grocery expense you save every month by cooking for verified diner numbers.
            </p>
          </div>
          <div style={{ maxWidth: 680, margin: "0 auto" }} className="rv d1">
            <RoiCalculator />
          </div>
        </div>
      </section>

      {/* ── 5. Pricing FAQs ── */}
      <section style={{
        background: "#F9FAFB",
        padding: "clamp(60px,7vw,90px) 0",
        borderTop: "1px solid #E5E7EB",
        borderBottom: "1px solid #E5E7EB"
      }}>
        <div className="container" style={{ maxWidth: 740 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }} className="rv">
            <h2 style={{
              fontSize: "clamp(26px,3vw,36px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase"
            }}>
              Frequently Asked Pricing Questions
            </h2>
          </div>
          <div className="rv d1">
            {faqs.map((faq, i) => (
              <PricingFAQ key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Prominent Book a Demo CTA ── */}
      <section style={{
        background: "#ffffff",
        padding: "clamp(64px,7vw,90px) 0",
        textAlign: "center"
      }}>
        <div className="container">
          <BorderGlow
            glowColor="20 80 70"
            backgroundColor="#ffffff"
            borderRadius={24}
            glowRadius={25}
            glowIntensity={0.35}
            colors={["#EA580C", "#F97316", "#FB923C"]}
            style={{
              maxWidth: 720, margin: "0 auto", padding: "48px 32px",
              borderRadius: 24, border: "1px solid #E5E7EB", background: "#ffffff"
            }}
          >
            <h2 style={{
              fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginBottom: 12
            }}>
              Need custom terms or multi-block setup?
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.7 }}>
              Our team works directly with campus administrators and large mess contractors to design custom rollout schedules and staff training.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book-demo" className="btn-brand" style={{ width: "auto", padding: "15px 36px", fontSize: 15 }}>
                <span>Book a Demo →</span>
              </Link>
              <Link href="/reviews-faqs" className="btn-outline" style={{ width: "auto", padding: "15px 28px", fontSize: 15 }}>
                <span>Read Reviews & FAQs</span>
              </Link>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}
