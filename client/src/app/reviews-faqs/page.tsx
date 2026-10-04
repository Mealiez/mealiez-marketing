"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BorderGlow from "@/components/ui/border-glow";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv, .rv-l, .rv-r");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

interface FaqItemProps {
  q: string;
  a: string;
  category?: string;
}

function FaqAccordion({ q, a, category }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #E5E7EB",
        borderRadius: 14,
        marginBottom: 12,
        boxShadow: open ? "0 4px 20px rgba(234,88,12,0.06)" : "0 1px 3px rgba(0,0,0,0.02)",
        transition: "all 0.25s ease",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          fontSize: 16,
          fontWeight: 700,
          color: open ? "#EA580C" : "#1F2937",
          fontFamily: "'Barlow', system-ui, sans-serif",
          transition: "color 0.2s ease",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {category && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: "#EA580C",
                background: "#FFF7ED",
                border: "1px solid #FFEDD5",
                borderRadius: 100,
                padding: "2px 8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {category}
            </span>
          )}
          <span>{q}</span>
        </span>
        <span
          style={{
            flexShrink: 0,
            marginLeft: 16,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: open ? "#EA580C" : "#F3F4F6",
            border: `1px solid ${open ? "#EA580C" : "#E5E7EB"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.25s ease",
          }}
        >
          <svg
            style={{
              transform: open ? "rotate(180deg)" : "none",
              transition: "transform 0.25s ease",
            }}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "#ffffff" : "#6B7280"}
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "0 24px 22px",
            fontSize: 14.5,
            color: "#4B5563",
            lineHeight: 1.8,
            borderTop: "1px solid #F3F4F6",
            paddingTop: 16,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

const verifiedReviews = [
  {
    name: "Rajesh Sharma",
    role: "Hostel Director",
    org: "Sunrise Student Housing, Pune",
    rating: 5,
    tag: "Hostel Mess",
    text: "Mealiez transformed how we manage our hostel mess. What used to take my warden 3 hours daily across WhatsApp groups and paper registers now takes 20 minutes on the dashboard.",
  },
  {
    name: "Priya Mehta",
    role: "Founder",
    org: "GreenLeaf Tiffin Service, Mumbai",
    rating: 5,
    tag: "Subscription Mess",
    text: "The billing and dues automation alone was worth the switch. We went from chasing monthly payments to having student records and receipts update automatically.",
  },
  {
    name: "Dr. Anand Kumar",
    role: "Campus Facilities Manager",
    org: "VIT Institute, Vellore",
    rating: 5,
    tag: "College Canteen",
    text: "Our canteen waste dropped significantly in month one. The attendance-linked meal forecasting gives our kitchen teams reliable headcounts before cooking begins.",
  },
  {
    name: "Sonal Verma",
    role: "Operations Manager",
    org: "Bharat Industries Canteen, Nashik",
    rating: 5,
    tag: "Industrial Canteen",
    text: "Finally software built specifically for mess operations, not adapted from a complex corporate ERP. Simple QR attendance and zero hardware maintenance.",
  },
  {
    name: "Mohammed Aslam",
    role: "Owner",
    org: "Al-Farhan Mess, Hyderabad",
    rating: 5,
    tag: "Student Mess",
    text: "Setup took just a few days. The Mealiez team helped us upload all student profiles and set up our daily menus. Best onboarding experience we've had.",
  },
  {
    name: "Kavya Iyer",
    role: "Student Housing Manager",
    org: "StayEasy PG Network, Bangalore",
    rating: 5,
    tag: "Student Housing",
    text: "Our students love having transparent access to their meal schedules, attendance logs, and payment receipts right from the app. No more billing disputes at month-end.",
  },
];

const caseResults = [
  {
    title: "North Valley Student Hostel",
    type: "Hostel Mess • 340 Students",
    metric: "18%",
    metricLabel: "Food Waste Reduction",
    problem:
      "Cooking without headcounts forced the kitchen to over-prepare meals daily, resulting in high food waste and recurring grocery budget overruns.",
    solution:
      "Implemented Mealiez QR attendance tracking and daily meal schedules so the kitchen cooks with verified numbers instead of guesswork.",
    result:
      "Reduced monthly food wastage by 18% and saved over ₹40,000 on grocery procurement in the first two months without altering meal portions or menu quality.",
  },
  {
    title: "Citywide Campus Dining",
    type: "College Canteen • 1,200 Students",
    metric: "22%",
    metricLabel: "Faster Fee Cycles",
    problem:
      "Paper tokens, handwritten chits, and manual spreadsheets created peak-hour queues, attendance disputes, and delayed monthly fee collections.",
    solution:
      "Automated student ledgers with QR check-in and automated payment tracking, giving both administrators and students full visibility into every meal.",
    result:
      "Eliminated counter queue friction, speeded up monthly collection cycles by 22%, and brought billing disputes down to near zero.",
  },
  {
    title: "Metro Kitchen Operations",
    type: "Batch Production Kitchen • 600 Daily Meals",
    metric: "30%",
    metricLabel: "Better Demand Accuracy",
    problem:
      "Unpredictable attendance resulted in daily over-production of 25–30%, leading to heavy ingredient loss and tight operating margins.",
    solution:
      "Rolled out Mealiez meal scheduling with defined cutoff times and ingredient consumption tracking linked directly to daily menus.",
    result:
      "Achieved prep planning accuracy within 5% daily, cut avoidable ingredient waste by 30%, and restored healthy operating margins.",
  },
];

const faqList = [
  {
    q: "What is Mealiez?",
    category: "General",
    a: "Mealiez is India's leading smart mess management platform and marketplace. It connects students and mess operators through digital meal discovery, QR code attendance, automated billing and payments, menu planning, and operational insights.",
  },
  {
    q: "Who is Mealiez for?",
    category: "General",
    a: "Mealiez is built for independent mess owners, student hostel messes, college and university canteens, corporate cafeterias, industrial canteens, and tiffin subscription services. Students also use Mealiez to discover local messes, track their attendance, and manage meal plans.",
  },
  {
    q: "How does mess management work on Mealiez?",
    category: "Operations",
    a: "Operators manage their entire facility through a simple web dashboard and mobile app. You can register student profiles, set up subscription plans, post daily breakfast/lunch/dinner menus, record attendance, and view real-time headcount and revenue reports.",
  },
  {
    q: "How does QR attendance work?",
    category: "Attendance",
    a: "Each student or member has a unique digital profile or QR code. During meal hours, the code is scanned using any standard smartphone or tablet at the counter. The system instantly validates their active plan, logs the attendance in real time, and updates kitchen counts.",
  },
  {
    q: "How are payments handled?",
    category: "Billing",
    a: "Mealiez automates student ledgers based on their selected plan (monthly, cycle-based, or per-meal). It tracks paid, pending, and overdue balances, sends automated dues reminders, and issues digital receipts upon payment.",
  },
  {
    q: "What plans are available?",
    category: "Pricing",
    a: "Mealiez offers three transparent tiers: Free (₹0/forever) to list on the marketplace; Starter (₹499/month) for messes with up to 50 students; and Pro (₹799/month) for messes with up to 100 students including full payment management and advanced analytics. Custom plans are available for large institutions.",
  },
  {
    q: "Is there a free plan?",
    category: "Pricing",
    a: "Yes! The Free plan costs ₹0 forever. It lets you list your mess on the Mealiez student marketplace, showcase your basic mess profile, and update meal plans for nearby students to discover.",
  },
  {
    q: "Can I upgrade my plan as my mess grows?",
    category: "Pricing",
    a: "Absolutely. You can start on Free or Starter and seamlessly upgrade to Pro or Enterprise at any time without losing any student records, attendance logs, or billing history.",
  },
  {
    q: "Is customer support available?",
    category: "Support",
    a: "Yes. All plans include support. You can reach the Mealiez team via email at Mealiez.customercare@gmail.com or by phone at +91 9270398199. The Pro plan also includes on-site setup and staff training.",
  },
  {
    q: "How does onboarding work?",
    category: "Onboarding",
    a: "Onboarding is simple. We help you upload your student list, configure your meal plans, and set up your daily menu. Most mess operations are fully up and running within 2 to 5 business days.",
  },
  {
    q: "Does Mealiez support larger multi-hostel operations?",
    category: "Enterprise",
    a: "Yes. For multi-block hostels, campus dining networks, and industrial facilities, Mealiez supports multi-location operator controls, separate dining hall counters, and centralized executive dashboards.",
  },
  {
    q: "Are custom or enterprise requirements supported?",
    category: "Enterprise",
    a: "Yes. For colleges, universities, or corporate dining halls with custom integration requirements (such as biometric turnstiles, RFID cards, or university ERP links), our engineering team provides tailored implementation support.",
  },
  {
    q: "How can I book a demo?",
    category: "Getting Started",
    a: "You can book a free 30-minute interactive demo by clicking 'Book a Demo' in the top navigation or visiting /book-demo. A product specialist will walk you through the system and answer questions specific to your mess.",
  },
];

export default function ReviewsFaqsPage() {
  useReveal();

  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(24px); transition:opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); }
        .rv-l { opacity:0; transform:translateX(-28px); transition:opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); }
        .rv-r { opacity:0; transform:translateX(28px); transition:opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in, .rv-l.in, .rv-r.in { opacity:1; transform:none; }
        .d1 { transition-delay: .1s !important }
        .d2 { transition-delay: .2s !important }
        .d3 { transition-delay: .3s !important }
        .d4 { transition-delay: .4s !important }

        .rf-page { font-family: 'Barlow', system-ui, sans-serif; color: #111827; background: #ffffff; }
        .rf-container { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
        .rf-container-sm { max-width: 820px; margin: 0 auto; padding: 0 24px; }

        .btn-brand-primary {
          background: linear-gradient(135deg, #EA580C, #F97316);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Barlow', system-ui, sans-serif;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 6px 20px rgba(234,88,12,0.28);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .btn-brand-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(234,88,12,0.4);
        }

        .btn-brand-outline {
          background: #ffffff;
          color: #111827;
          border: 1.5px solid #E5E7EB;
          border-radius: 12px;
          padding: 13px 26px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: border-color .2s, background .2s, transform .2s;
        }
        .btn-brand-outline:hover {
          border-color: rgba(234,88,12,0.4);
          background: #FFF7ED;
          transform: translateY(-2px);
        }

        .rf-reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .rf-case-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 960px) {
          .rf-reviews-grid { grid-template-columns: repeat(2, 1fr); }
          .rf-case-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .rf-reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="rf-page">
        {/* HERO SECTION */}
        <section
          style={{
            padding: "clamp(64px, 8vw, 100px) 0 clamp(40px, 5vw, 64px)",
            background: "linear-gradient(180deg, #FFF7ED 0%, #ffffff 100%)",
            borderBottom: "1px solid #F3F4F6",
            textAlign: "center",
          }}
        >
          <div className="rf-container">
            <div
              className="rv"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#FFF7ED",
                border: "1px solid #FFEDD5",
                borderRadius: 100,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 800,
                color: "#EA580C",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Trust & Transparency
            </div>
            <h1
              className="rv d1"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#111827",
                marginBottom: 18,
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Real Reviews, Proven Results &{" "}
              <span style={{ color: "#EA580C" }}>Clear Answers</span>
            </h1>
            <p
              className="rv d2"
              style={{
                fontSize: "clamp(16px, 1.2vw, 18px)",
                color: "#4B5563",
                lineHeight: 1.7,
                maxWidth: 620,
                margin: "0 auto 36px",
              }}
            >
              See how mess owners, hostel wardens, and student facilities across India run smoother daily operations with Mealiez.
            </p>
            <div
              className="rv d3"
              style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
            >
              <Link href="/book-demo" className="btn-brand-primary">
                Book a Free Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
              <a href="#faqs" className="btn-brand-outline">
                Read FAQs
              </a>
            </div>
          </div>
        </section>

        {/* VERIFIED REVIEWS SECTION */}
        <section style={{ padding: "clamp(64px, 7vw, 96px) 0", background: "#ffffff" }}>
          <div className="rf-container">
            <div className="rv" style={{ marginBottom: 48, textAlign: "center" }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#EA580C",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: "#FFF7ED",
                  border: "1px solid #FFEDD5",
                  borderRadius: 100,
                  padding: "4px 14px",
                  display: "inline-block",
                  marginBottom: 12,
                }}
              >
                Verified Testimonials
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: 900,
                  color: "#111827",
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                What Operators Say About Mealiez
              </h2>
            </div>

            <div className="rf-reviews-grid">
              {verifiedReviews.map((rev, i) => (
                <BorderGlow
                  key={i}
                  backgroundColor="#ffffff"
                  borderRadius={18}
                  glowIntensity={0.35}
                  colors={["#EA580C", "#F97316", "#FB923C"]}
                  className={`rv d${(i % 3) + 1}`}
                  style={{
                    padding: "28px 24px",
                    border: "1px solid #E5E7EB",
                    borderRadius: 18,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#ffffff",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                  }}
                >
                  <div>
                    {/* Stars & Tag */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                      <div style={{ display: "flex", gap: 3, color: "#EA580C" }}>
                        {[...Array(rev.rating)].map((_, si) => (
                          <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: "#EA580C",
                          background: "#FFF7ED",
                          border: "1px solid #FFEDD5",
                          borderRadius: 100,
                          padding: "2px 8px",
                          textTransform: "uppercase",
                        }}
                      >
                        {rev.tag}
                      </span>
                    </div>

                    <p style={{ fontSize: 14.5, color: "#4B5563", lineHeight: 1.7, marginBottom: 24 }}>
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 14 }}>
                    <p style={{ fontWeight: 800, color: "#111827", fontSize: 15, marginBottom: 2 }}>{rev.name}</p>
                    <p style={{ fontSize: 12.5, color: "#6B7280" }}>{rev.role} • {rev.org}</p>
                  </div>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS & CASE STUDIES SECTION */}
        <section style={{ padding: "clamp(64px, 7vw, 96px) 0", background: "#F9FAFB", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
          <div className="rf-container">
            <div className="rv" style={{ marginBottom: 48, textAlign: "center" }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#EA580C",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: "#FFF7ED",
                  border: "1px solid #FFEDD5",
                  borderRadius: 100,
                  padding: "4px 14px",
                  display: "inline-block",
                  marginBottom: 12,
                }}
              >
                Proven Results
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: 900,
                  color: "#111827",
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                Measurable Impact Across Facilities
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 540, margin: "10px auto 0" }}>
                Every transformation follows a simple path: identify operational pain, deploy Mealiez workflows, and measure clear results.
              </p>
            </div>

            <div className="rf-case-grid">
              {caseResults.map((cs, i) => (
                <div
                  key={i}
                  className={`rv d${i + 1}`}
                  style={{
                    background: "#ffffff",
                    borderRadius: 18,
                    border: "1px solid #E5E7EB",
                    padding: "32px 28px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontSize: 12, color: "#EA580C", fontWeight: 700 }}>{cs.type}</span>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111827", margin: "6px 0 16px" }}>
                      {cs.title}
                    </h3>
                    <div
                      style={{
                        background: "#FFF7ED",
                        border: "1px solid #FFEDD5",
                        borderRadius: 12,
                        padding: "12px 18px",
                        display: "flex",
                        alignItems: "baseline",
                        gap: 8,
                      }}
                    >
                      <span style={{ fontSize: 32, fontWeight: 900, color: "#EA580C", lineHeight: 1 }}>{cs.metric}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#9A3412" }}>{cs.metricLabel}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                    <div style={{ borderLeft: "3px solid #EF4444", paddingLeft: 12 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.05em" }}>Problem</div>
                      <p style={{ fontSize: 13.5, color: "#4B5563", lineHeight: 1.6, marginTop: 3 }}>{cs.problem}</p>
                    </div>

                    <div style={{ borderLeft: "3px solid #EA580C", paddingLeft: 12 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.05em" }}>What Mealiez Did</div>
                      <p style={{ fontSize: 13.5, color: "#4B5563", lineHeight: 1.6, marginTop: 3 }}>{cs.solution}</p>
                    </div>

                    <div style={{ borderLeft: "3px solid #16A34A", paddingLeft: 12 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.05em" }}>Result</div>
                      <p style={{ fontSize: 13.5, color: "#4B5563", lineHeight: 1.6, marginTop: 3 }}>{cs.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE FAQS SECTION */}
        <section id="faqs" style={{ padding: "clamp(64px, 7vw, 100px) 0", background: "#ffffff" }}>
          <div className="rf-container-sm">
            <div className="rv" style={{ marginBottom: 44, textAlign: "center" }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#EA580C",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: "#FFF7ED",
                  border: "1px solid #FFEDD5",
                  borderRadius: 100,
                  padding: "4px 14px",
                  display: "inline-block",
                  marginBottom: 12,
                }}
              >
                Frequently Asked Questions
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: 900,
                  color: "#111827",
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                Answers to Important Questions
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", marginTop: 8 }}>
                Everything you need to know about setting up, pricing, and operating with Mealiez.
              </p>
            </div>

            <div className="rv d1">
              {faqList.map((item, idx) => (
                <FaqAccordion key={idx} q={item.q} a={item.a} category={item.category} />
              ))}
            </div>

            <div
              className="rv d2"
              style={{
                marginTop: 48,
                textAlign: "center",
                padding: "32px",
                background: "#F9FAFB",
                borderRadius: 18,
                border: "1px solid #E5E7EB",
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#111827", marginBottom: 6 }}>
                Have a specific question about your mess?
              </h3>
              <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 20 }}>
                Speak directly with our team. Call +91 9270398199 or schedule a personalized walkthrough.
              </p>
              <Link href="/book-demo" className="btn-brand-primary">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CONVERSION CTA */}
        <section
          style={{
            padding: "clamp(64px, 8vw, 96px) 0",
            background: "linear-gradient(180deg, #ffffff 0%, #FFF7ED 100%)",
            borderTop: "1px solid #E5E7EB",
            textAlign: "center",
          }}
        >
          <div className="rf-container">
            <h2
              className="rv"
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 16,
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Join 500+ Mess Operations Running Smarter on Mealiez
            </h2>
            <p
              className="rv d1"
              style={{
                fontSize: 16,
                color: "#4B5563",
                maxWidth: 540,
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              Experience automated QR attendance, real-time ledgers, and zero-chaos meal planning firsthand.
            </p>
            <div className="rv d2" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book-demo" className="btn-brand-primary">
                Book a Demo →
              </Link>
              <Link href="/pricing" className="btn-brand-outline">
                View Pricing →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
