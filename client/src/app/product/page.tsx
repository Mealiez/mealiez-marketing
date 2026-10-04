"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import BorderGlow from "@/components/ui/border-glow";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv, .rv-l, .rv-r");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

interface ProductModule {
  id: string;
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  whatItDoes: string;
  problemItSolves: string;
  whoItIsFor: string;
  features: string[];
  benefits: string[];
  howItWorks: { step: string; label: string; desc: string }[];
}

const modules: ProductModule[] = [
  {
    id: "attendance",
    slug: "attendance",
    badge: "ATTENDANCE & ACCESS",
    title: "QR Code Attendance & Verification",
    tagline: "1-second touchless check-ins that eliminate proxy dining and count discrepancies.",
    whatItDoes: "A camera-based check-in system that validates diners in real time using unique QR codes displayed on students' phones or printed ID cards.",
    problemItSolves: "Manual register sign-ins take 15–30 seconds per student, create massive lines at dinner rush, and make proxy dining (one student signing for an absent friend) impossible to catch.",
    whoItIsFor: "Hostel mess staff, gatekeepers, campus canteen counters, and industrial cafeteria supervisors.",
    features: [
      "Sub-second camera scanning on any Android phone or tablet",
      "Instant audio and visual verification (Green = Valid, Red = Discrepancy)",
      "Duplicate-scan prevention (locks out immediate re-scans for the same meal)",
      "Offline sync support for basement or low-connectivity dining halls",
      "Live real-time diner headcount counter for kitchen teams",
    ],
    benefits: [
      "100% elimination of unauthorized and proxy meals",
      "Zero queue bottlenecks during peak meal hours",
      "Attendance records linked directly to monthly billing with zero manual data entry",
    ],
    howItWorks: [
      { step: "01", label: "Student Presents QR", desc: "Student opens the Mealiez pass on their phone or shows their printed pass." },
      { step: "02", label: "Staff Scans via Camera", desc: "Staff points any smartphone camera at the code using the Mealiez operator app." },
      { step: "03", label: "Instant Validation", desc: "System verifies active plan status, room number, and meal eligibility instantly." },
      { step: "04", label: "Roster Auto-Updates", desc: "Meal count increments live on the dashboard and logs to the member ledger." },
    ],
  },
  {
    id: "student-management",
    slug: "meal-booking",
    badge: "MEMBER ROSTER",
    title: "Student Roster & Plan Management",
    tagline: "Complete centralized database of all active diners, room allocations, and leave records.",
    whatItDoes: "A dedicated digital registry that maintains up-to-date records for every student or worker dining at your mess, including room numbers, dietary preferences, and subscription validity.",
    problemItSolves: "Mess managers lose track of who is currently enrolled when students join mid-semester, change hostel rooms, or take leaves, resulting in uncollected fees and incorrect meal preparation.",
    whoItIsFor: "Hostel wardens, independent mess proprietors, PG managers, and facility administrators.",
    features: [
      "Digital student profiles with photo, phone number, and room/hostel block tag",
      "Flexible meal plan assignments (full month, 2-meal, 3-meal, custom cycles)",
      "Leave & vacation recording with automated billing hold/deduction",
      "One-click status toggle (Active, Paused, Graduated, Defaulter)",
      "Bulk student onboarding via simple Excel/CSV upload",
    ],
    benefits: [
      "Accurate view of total active diners at any given moment",
      "No lost records or confusing notes across multiple paper notebooks",
      "Clean handover between shift wardens or mess staff",
    ],
    howItWorks: [
      { step: "01", label: "Register Member", desc: "Add member details manually or send a quick self-registration link." },
      { step: "02", label: "Assign Plan", desc: "Select subscription plan type, billing start date, and room assignment." },
      { step: "03", label: "Track Status", desc: "View real-time leave notices and active dining privileges in one roster." },
      { step: "04", label: "Export Records", desc: "Download clean student rosters and attendance sheets anytime." },
    ],
  },
  {
    id: "billing",
    slug: "billing",
    badge: "FINANCE & COLLECTIONS",
    title: "Billing, Dues & UPI Payments",
    tagline: "Automated monthly fee generation, payment tracking, and digital receipting.",
    whatItDoes: "Calculates precise monthly dues for each member based on their chosen plan and verified attendance or approved leaves, then provides automated UPI payment links and receipts.",
    problemItSolves: "Manual monthly billing takes days of cross-checking attendance registers, results in frequent disputes with parents, and leaves operators with large unpaid dues balances.",
    whoItIsFor: "Mess owners, hostel accountants, food service proprietors, and university finance teams.",
    features: [
      "Automated bill generation on the 1st of every month or custom billing dates",
      "Attendance-adjusted deductions for approved leaves and college holidays",
      "UPI QR code and payment gateway integration for zero-friction payments",
      "Automated WhatsApp & SMS dues reminders with payment links",
      "Real-time collection reports showing paid, pending, and overdue accounts",
    ],
    benefits: [
      "Cuts billing administration from days to a few minutes per month",
      "Dramatically accelerates fee collections and reduces working-capital strain",
      "Full transparency with itemized digital statements for students and parents",
    ],
    howItWorks: [
      { step: "01", label: "Auto-Calculate Bills", desc: "Mealiez factors in base plan fees minus authorized leave deductions." },
      { step: "02", label: "Send Statement", desc: "Itemized statement with instant UPI pay link is sent to member/parent." },
      { step: "03", label: "Collect Online/Cash", desc: "Online payments mark automatically; cash payments can be marked in 1 tap." },
      { step: "04", label: "Digital Receipt", desc: "Instant GST-compliant or standard payment receipt generated for records." },
    ],
  },
  {
    id: "menu-feedback",
    slug: "mobile-app",
    badge: "MENU & EXPERIENCE",
    title: "Digital Menu & Daily Feedback",
    tagline: "Publish upcoming meal schedules and collect dish-level student ratings.",
    whatItDoes: "A live digital menu board that lets mess operators publish breakfast, lunch, snacks, and dinner schedules in advance, while allowing diners to rate meals and submit suggestions.",
    problemItSolves: "Students flood WhatsApp groups with 'what is today's menu?', complain about repetitive meals without actionable feedback, and have no channel to report dietary issues.",
    whoItIsFor: "Kitchen supervisors, head cooks, mess committees, and diners.",
    features: [
      "7-day recurring weekly menu templates with quick daily edit capabilities",
      "Dietary and item tagging (Veg, Non-Veg, Jain, Special Feast)",
      "Daily meal ratings (1–5 stars) with optional student comments",
      "Special festival or holiday meal announcements with advance alerts",
      "Public display view optimized for dining hall TV screens or student app",
    ],
    benefits: [
      "Eliminates repetitive daily WhatsApp inquiries about food schedules",
      "Provides actionable quality feedback to improve kitchen performance",
      "Increases student satisfaction and builds dining hall community trust",
    ],
    howItWorks: [
      { step: "01", label: "Set Weekly Menu", desc: "Define standard weekly meal rotation in the operator dashboard." },
      { step: "02", label: "Publish Instantly", desc: "Menu is live immediately on the student mobile view and web link." },
      { step: "03", label: "Collect Ratings", desc: "Students rate meals after eating and submit constructive feedback." },
      { step: "04", label: "Review Trends", desc: "Track which dishes perform best to optimize future menu rotations." },
    ],
  },
  {
    id: "marketplace",
    slug: "analytics",
    badge: "DISCOVERY & GROWTH",
    title: "Mess Marketplace & Public Profile",
    tagline: "Get discovered by thousands of college students seeking reliable food options.",
    whatItDoes: "A dedicated public listing for your mess on Mealiez where students relocating for college can discover your location, view menus, check pricing, and register.",
    problemItSolves: "Independent mess owners have no cost-effective marketing channel, relying on expensive paper pamphlets and word-of-mouth that leaves seats vacant each semester.",
    whoItIsFor: "Commercial mess businesses, independent hostel kitchens, and tiffin services looking to grow enrollment.",
    features: [
      "Dedicated public profile page with mess photos and hygiene highlights",
      "Transparent pricing plan display with meal inclusions",
      "Direct inquiry and seat booking button connecting to your WhatsApp/phone",
      "Location mapping so students can find messes within walking distance",
      "Verified student reviews and ratings that showcase food quality",
    ],
    benefits: [
      "Steady stream of new student inquiries at the start of every academic term",
      "Higher mess occupancy and predictable subscription revenue",
      "Zero cost to list on the basic free plan",
    ],
    howItWorks: [
      { step: "01", label: "Create Profile", desc: "Add your mess name, address, food photos, and monthly plan pricing." },
      { step: "02", label: "Get Listed", desc: "Your mess appears in local college area searches on Mealiez." },
      { step: "03", label: "Receive Inquiries", desc: "Interested students message you directly or request a trial meal." },
      { step: "04", label: "Convert to Members", desc: "Onboard new students into your active Mealiez roster with 1 click." },
    ],
  },
  {
    id: "inventory",
    slug: "inventory",
    badge: "KITCHEN INTELLIGENCE",
    title: "Kitchen Headcount & Waste Analytics",
    tagline: "Demand forecasting and consumption insights that cut daily kitchen waste.",
    whatItDoes: "Translates attendance patterns, advance leave requests, and historical dining trends into precise daily cooking recommendations for kitchen staff.",
    problemItSolves: "Mess kitchens routinely over-cook by 15–25% because cooks have no idea how many students will show up, wasting thousands of rupees in groceries every single week.",
    whoItIsFor: "Head chefs, kitchen inventory managers, and institutional dining directors.",
    features: [
      "Advance meal headcount forecasts based on member opt-outs and leaves",
      "Raw material requirement estimators based on forecasted diner numbers",
      "Daily wastage recording and historical trend tracking",
      "Cost-per-plate calculation and grocery spending analytics",
      "Executive PDF summary reports for hostel management committees",
    ],
    benefits: [
      "Saves 15–22% in raw grocery procurement costs through accurate cooking quantities",
      "Prevents both food waste and frustrating food shortages during late rushes",
      "Gives owners clear visibility into daily cost efficiency per meal served",
    ],
    howItWorks: [
      { step: "01", label: "Collect Demand", desc: "System compiles active members minus verified leaves for upcoming meal." },
      { step: "02", label: "Kitchen Alert", desc: "Cooks check the exact expected headcount 2 hours before meal prep." },
      { step: "03", label: "Cook Exact Batches", desc: "Food is prepared according to verified numbers rather than guesswork." },
      { step: "04", label: "Log Variance", desc: "Log remaining portions to refine demand algorithms over time." },
    ],
  },
];

export default function ProductPage() {
  useReveal();
  const [activeTab, setActiveTab] = useState<string>("attendance");

  const currentMod = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(24px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important}

        .prod-hero {
          background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
          padding: clamp(64px,7vw,96px) 0 clamp(48px,5vw,72px);
          text-align: center;
          border-bottom: 1px solid #E5E7EB;
        }

        .tab-btn {
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          border: 1.5px solid transparent;
          background: #ffffff;
          color: #4B5563;
          transition: all .2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }
        .tab-btn:hover {
          color: #EA580C;
          border-color: rgba(234,88,12,0.3);
          background: #FFF7ED;
        }
        .tab-btn.active {
          background: #EA580C;
          color: #ffffff;
          border-color: #EA580C;
          box-shadow: 0 4px 14px rgba(234,88,12,0.3);
        }

        .pg-cta-primary {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#EA580C,#F97316);
          color:#fff; border:none; border-radius:12px;
          padding:14px 28px; font-size:14.5px; font-weight:700;
          text-decoration:none;
          box-shadow:0 6px 20px rgba(234,88,12,0.28);
          transition:transform .2s, box-shadow .2s;
        }
        .pg-cta-primary:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 28px rgba(234,88,12,0.38);
        }

        .pg-cta-ghost {
          display:inline-flex; align-items:center; gap:8px;
          background:#ffffff; color:#1F2937;
          border:1.5px solid #E5E7EB; border-radius:12px;
          padding:14px 26px; font-size:14.5px; font-weight:600;
          text-decoration:none;
          transition:all .2s;
        }
        .pg-cta-ghost:hover {
          background:#F9FAFB;
          border-color:rgba(234,88,12,0.4);
          color:#EA580C;
        }

        .grid-2col {
          display: grid;
          grid-template-columns: minmax(0,1.2fr) minmax(0,1fr);
          gap: clamp(28px,4vw,56px);
          align-items: start;
        }
        @media (max-width: 900px) {
          .grid-2col { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── 1. Hero Section ── */}
      <section className="prod-hero">
        <div className="container">
          <div className="rv" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(234,88,12,0.06)", border: "1px solid rgba(234,88,12,0.18)",
            borderRadius: 100, padding: "5px 16px",
            fontSize: 12, fontWeight: 700, color: "#EA580C",
            letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20
          }}>
            Complete Product Suite
          </div>
          <h1 className="rv d1" style={{
            fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 900,
            lineHeight: 1.1, color: "#111827", marginBottom: 18,
            fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase",
          }}>
            What exactly does <span style={{ color: "#EA580C" }}>Mealiez offer?</span>
          </h1>
          <p className="rv d2" style={{
            fontSize: "clamp(15px,1.2vw,17px)", color: "#4B5563",
            lineHeight: 1.75, maxWidth: 640, margin: "0 auto 36px"
          }}>
            Mealiez provides 6 core modular tools built to handle every stage of mess and dining operations — from student check-in and attendance to billing, menu planning, and waste reduction.
          </p>
          <div className="rv d3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/pricing" className="pg-cta-primary">
              <span>View Pricing Plans</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
            <Link href="/book-demo" className="pg-cta-ghost">
              Book a Live Walkthrough
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Interactive Detailed Module Showcase ── */}
      <section style={{ background: "#ffffff", padding: "clamp(60px,7vw,90px) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }} className="rv">
            <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              DEEP DIVE INTO EACH MODULE
            </span>
            <h2 style={{
              fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginTop: 6
            }}>
              Select a module to view complete specifications
            </h2>
          </div>

          {/* Module Selector Tabs */}
          <div style={{
            display: "flex", gap: 10, overflowX: "auto", paddingBottom: 16,
            marginBottom: 40, borderBottom: "1px solid #E5E7EB",
            scrollbarWidth: "none"
          }}>
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                className={`tab-btn ${activeTab === m.id ? "active" : ""}`}
              >
                <span>{m.title}</span>
              </button>
            ))}
          </div>

          {/* Detailed Module View */}
          <BorderGlow
            glowColor="20 80 70"
            backgroundColor="#ffffff"
            borderRadius={24}
            glowRadius={25}
            glowIntensity={0.35}
            colors={["#EA580C", "#F97316", "#FB923C"]}
            style={{
              padding: "clamp(32px,4vw,52px)",
              border: "1px solid #E5E7EB",
              background: "#ffffff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            }}
          >
            <div className="grid-2col">
              {/* Left Column: What it does, Problem, Features, Benefits */}
              <div>
                <span style={{
                  fontSize: 11, fontWeight: 800, color: "#EA580C",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  background: "#FFF7ED", border: "1px solid #FED7AA",
                  borderRadius: 6, padding: "3px 10px", display: "inline-block", marginBottom: 14
                }}>
                  {currentMod.badge}
                </span>
                <h3 style={{
                  fontSize: "clamp(24px,2.8vw,34px)", fontWeight: 900, color: "#111827",
                  lineHeight: 1.15, marginBottom: 8,
                  fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase"
                }}>
                  {currentMod.title}
                </h3>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#EA580C", lineHeight: 1.5, marginBottom: 24 }}>
                  {currentMod.tagline}
                </p>

                {/* What it does */}
                <div style={{ marginBottom: 24, padding: "16px 20px", background: "#F9FAFB", borderRadius: 14, border: "1px solid #E5E7EB" }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#111827", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                    What it does
                  </div>
                  <p style={{ fontSize: 14.5, color: "#4B5563", lineHeight: 1.65, margin: 0 }}>
                    {currentMod.whatItDoes}
                  </p>
                </div>

                {/* Problem it solves */}
                <div style={{ marginBottom: 24, padding: "16px 20px", background: "#FEF2F2", borderRadius: 14, border: "1px solid #FEE2E2" }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                    Problem it solves
                  </div>
                  <p style={{ fontSize: 14.5, color: "#991B1B", lineHeight: 1.65, margin: 0 }}>
                    {currentMod.problemItSolves}
                  </p>
                </div>

                {/* Who it is for */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                    Who it is for
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1F2937" }}>
                    {currentMod.whoItIsFor}
                  </div>
                </div>

                {/* Key Features */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#111827", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                    Main Features
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {currentMod.features.map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#374151" }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#DCFCE7", color: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 800, marginTop: 1 }}>✓</div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: How it Works & Benefits */}
              <div style={{
                background: "#F9FAFB",
                borderRadius: 18,
                padding: "clamp(24px,3vw,36px)",
                border: "1px solid #E5E7EB",
              }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#111827", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 20 }}>
                  How It Works — Step by Step
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
                  {currentMod.howItWorks.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: "#EA580C", color: "#ffffff",
                        fontSize: 12, fontWeight: 800, display: "flex",
                        alignItems: "center", justifyContent: "center", flexShrink: 0
                      }}>
                        {step.step}
                      </div>
                      <div>
                        <div style={{ fontSize: 14.5, fontWeight: 700, color: "#111827", marginBottom: 2 }}>{step.label}</div>
                        <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.55 }}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Benefits */}
                <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: 24, marginBottom: 28 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#059669", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                    Proven Operational Benefits
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {currentMod.benefits.map((ben, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13.5, color: "#1F2937", fontWeight: 500 }}>
                        <span style={{ color: "#059669" }}>→</span>
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link href="/pricing" className="pg-cta-primary" style={{ width: "100%", justifyContent: "center" }}>
                    View Pricing for {currentMod.title}
                  </Link>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* ── 3. SaaS & Enterprise Capabilities ── */}
      <section style={{
        background: "#F9FAFB",
        padding: "clamp(64px,7vw,96px) 0",
        borderTop: "1px solid #E5E7EB",
        borderBottom: "1px solid #E5E7EB"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }} className="rv">
            <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              SAAS & ENTERPRISE DEPLOYMENTS
            </span>
            <h2 style={{
              fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginTop: 6
            }}>
              From single messes to multi-block campuses
            </h2>
            <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.7, marginTop: 10 }}>
              Whether you are an independent operator with 30 students or a university managing 5 hostel blocks with 2,500 daily meals, Mealiez adapts directly to your scale.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              {
                tier: "Standard SaaS (Self-Serve)",
                desc: "Designed for independent messes, small hostel blocks, and private PG kitchens getting started immediately.",
                points: [
                  "100% Free plan available (₹0 forever)",
                  "Paid tiers from ₹499/mo with zero setup fees",
                  "Instant self-onboarding in under 10 minutes",
                  "Standard email and WhatsApp helpdesk support",
                ],
              },
              {
                tier: "Custom Multi-Block Operations",
                desc: "For institutional hostels, college dining halls, and multi-floor canteens requiring coordinated management.",
                points: [
                  "Multi-block and multi-shift manager accounts",
                  "Consolidated billing across multiple halls",
                  "Role-based staff permissions (Head Chef, Gatekeeper, Warden)",
                  "Customized leave & holiday deduction rules",
                ],
              },
              {
                tier: "Enterprise & Institutional Canteens",
                desc: "For universities, industrial factory catering contracts, and large-scale multi-city food operations.",
                points: [
                  "Custom ERP, student MIS, and payroll integration support",
                  "On-site staff training in Hindi, Marathi, or English",
                  "Dedicated account manager with priority SLA",
                  "Tailored monthly audit and compliance exports",
                ],
              },
            ].map((card, i) => (
              <BorderGlow
                key={i}
                glowColor="20 80 70"
                backgroundColor="#ffffff"
                borderRadius={18}
                glowRadius={20}
                glowIntensity={0.3}
                colors={["#EA580C", "#F97316", "#FB923C"]}
                style={{
                  padding: "30px 26px",
                  borderRadius: 18,
                  border: "1px solid #E5E7EB",
                  background: "#ffffff",
                  display: "flex", flexDirection: "column", justifyContent: "space-between"
                }}
              >
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#111827", marginBottom: 10 }}>
                    {card.tier}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
                    {card.desc}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {card.points.map((pt, pti) => (
                      <li key={pti} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#374151" }}>
                        <span style={{ color: "#EA580C", fontWeight: 800 }}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={i === 0 ? "/pricing" : "/book-demo"} className={i === 0 ? "pg-cta-ghost" : "pg-cta-primary"} style={{ justifyContent: "center" }}>
                  {i === 0 ? "View SaaS Pricing" : "Discuss Requirements"}
                </Link>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Products CTA — strictly ending with View Pricing → ── */}
      <section style={{
        background: "#ffffff",
        padding: "clamp(64px,7vw,90px) 0",
        textAlign: "center"
      }}>
        <div className="container">
          <h2 style={{
            fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 900, color: "#111827",
            fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginBottom: 12
          }}>
            Explore transparent pricing for your mess
          </h2>
          <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
            No hidden contracts or surprise onboarding charges. Choose the tier that matches your active student count.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/pricing" className="pg-cta-primary" style={{ padding: "16px 36px", fontSize: 15 }}>
              <span>View Pricing →</span>
            </Link>
            <Link href="/book-demo" className="pg-cta-ghost" style={{ padding: "16px 32px" }}>
              <span>Book a Demo</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
