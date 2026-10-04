"use client";

import React, { useEffect } from "react";
import Link from "next/link";
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

const journeyMilestones = [
  {
    period: "The Genesis",
    title: "Identifying the Daily Mess Chaos",
    desc: "Observing students and mess operators struggling daily with frayed paper registers, misplaced coupon tokens, and heated month-end billing arguments in college hostel hubs.",
  },
  {
    period: "First Prototype",
    title: "Phone-Based QR Attendance",
    desc: "Built the initial smartphone scanning system to prove that hostel mess check-ins could be verified in under one second with zero expensive biometric hardware.",
  },
  {
    period: "Core Platform",
    title: "Automated Billing & Digital Menus",
    desc: "Expanded into automated dues calculation, attendance-adjusted holiday deductions, and transparent digital menu publishing for students and parents.",
  },
  {
    period: "Today & Beyond",
    title: "Serving Messes & Canteens Across India",
    desc: "Empowering hostel wardens, independent mess owners, and student canteens with reliable, affordable tools that streamline daily food service operations.",
  },
];

const companyValues = [
  {
    icon: "📱",
    title: "Built for Real Field Conditions",
    desc: "Software must work in hot, busy dining halls on regular smartphones. We prioritize speed, reliability, and simple interfaces over unnecessary complexity.",
  },
  {
    icon: "🤝",
    title: "Honest Transparency",
    desc: "Both the mess operator and the student diner see the exact same attendance logs and dues calculation. Zero hidden deductions, zero disputes.",
  },
  {
    icon: "🍲",
    title: "Food Waste Reduction",
    desc: "By giving kitchen cooks reliable daily headcount forecasts, we actively help institutional kitchens reduce preventable food waste and grocery losses.",
  },
  {
    icon: "🇮🇳",
    title: "Accessible for Every Operator",
    desc: "We believe modernization shouldn't require enterprise budgets. That's why we maintain a ₹0 free tier and low-cost plans for independent local messes.",
  },
];

export default function CompanyPage() {
  useReveal();

  return (
    <>
      <style>{`
        .rv { opacity:0; transform:translateY(24px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important} .d3{transition-delay:.3s!important}

        .company-hero {
          background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
          padding: clamp(64px,7vw,96px) 0 clamp(48px,5vw,72px);
          text-align: center;
          border-bottom: 1px solid #E5E7EB;
        }

        .btn-brand {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: linear-gradient(135deg, #EA580C, #F97316);
          color: #ffffff; border: none; border-radius: 12px;
          padding: 14px 28px; font-size: 14.5px; font-weight: 700;
          text-decoration: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(234,88,12,0.28);
          transition: transform .2s, box-shadow .2s;
        }
        .btn-brand:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(234,88,12,0.36);
        }

        .btn-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: #ffffff; color: #1F2937;
          border: 1.5px solid #E5E7EB; border-radius: 12px;
          padding: 14px 26px; font-size: 14.5px; font-weight: 600;
          text-decoration: none;
          transition: all .2s;
        }
        .btn-outline:hover {
          background: #F9FAFB;
          border-color: rgba(234,88,12,0.4);
          color: #EA580C;
        }
      `}</style>

      {/* ── 1. Hero: Who is Mealiez? ── */}
      <section className="company-hero">
        <div className="container">
          <div className="rv" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(234,88,12,0.06)", border: "1px solid rgba(234,88,12,0.18)",
            borderRadius: 100, padding: "5px 16px",
            fontSize: 12, fontWeight: 700, color: "#EA580C",
            letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20
          }}>
            About Mealiez
          </div>
          <h1 className="rv d1" style={{
            fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 900,
            lineHeight: 1.1, color: "#111827", marginBottom: 18,
            fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase",
          }}>
            Who is <span style={{ color: "#EA580C" }}>Mealiez?</span>
          </h1>
          <p className="rv d2" style={{
            fontSize: "clamp(15px,1.2vw,17px)", color: "#4B5563",
            lineHeight: 1.75, maxWidth: 620, margin: "0 auto 32px"
          }}>
            We are building simple, dependable digital tools designed specifically for Indian hostel messes, college canteens, and independent food operators.
          </p>
          <div className="rv d3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-brand">
              <span>Book a Demo</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
            <Link href="/reviews-faqs" className="btn-outline">
              Read Customer Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Who We Are & Why Mealiez Was Started ── */}
      <section style={{ background: "#ffffff", padding: "clamp(64px,7vw,96px) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "start" }}>
            {/* Who We Are */}
            <div className="rv">
              <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                WHO WE ARE
              </span>
              <h2 style={{
                fontSize: "clamp(26px,3vw,36px)", fontWeight: 900, color: "#111827",
                fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginTop: 6, marginBottom: 16
              }}>
                A dedicated team modernizing Indian dining halls
              </h2>
              <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8, marginBottom: 16 }}>
                Mealiez is a food management technology platform crafted to solve the unique operational realities of Indian hostel dining halls, PG kitchens, and college canteens.
              </p>
              <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
                Unlike generic enterprise ERP systems designed for corporate cafeterias or Western point-of-sale systems built for dine-in restaurants, Mealiez is built directly around Indian monthly subscription cycles, coupon systems, and warden workflows.
              </p>
            </div>

            {/* Why Mealiez Was Started */}
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="#ffffff"
              borderRadius={20}
              glowRadius={22}
              glowIntensity={0.3}
              colors={["#EA580C", "#F97316", "#FB923C"]}
              className="rv d1"
              style={{
                padding: "clamp(28px,3vw,36px)",
                borderRadius: 20,
                border: "1px solid #E5E7EB",
                background: "#ffffff",
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                WHY MEALIEZ WAS STARTED
              </span>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111827", marginTop: 6, marginBottom: 14 }}>
                The Frustration of Paper Registers
              </h3>
              <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.75, marginBottom: 14 }}>
                Every semester in college towns across India, the same scene repeats: mess wardens flip through torn paper notebooks trying to verify whether a student had lunch, students dispute charges for days they were home on leave, and kitchen cooks discard buckets of untouched food because they guessed headcounts.
              </p>
              <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.75, margin: 0 }}>
                Mealiez was started to replace this manual friction with a seamless, camera-based QR attendance and automated billing system that runs directly on any phone — giving mess operators dignity, efficiency, and clarity.
              </p>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision ── */}
      <section style={{
        background: "#F9FAFB",
        padding: "clamp(64px,7vw,96px) 0",
        borderTop: "1px solid #E5E7EB",
        borderBottom: "1px solid #E5E7EB"
      }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="#ffffff"
              borderRadius={18}
              glowRadius={20}
              glowIntensity={0.3}
              colors={["#EA580C", "#F97316", "#FB923C"]}
              className="rv"
              style={{
                padding: "36px 30px",
                borderRadius: 18,
                border: "1px solid #E5E7EB",
                background: "#ffffff",
                borderTop: "4px solid #EA580C"
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>🎯</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111827", marginBottom: 12 }}>Our Mission</h3>
              <p style={{ fontSize: 14.5, color: "#4B5563", lineHeight: 1.75, margin: 0 }}>
                To empower Indian hostel mess proprietors, campus canteen operators, and dining supervisors with accessible, mobile-first tools that eliminate manual register work, stop food wastage, and build transparent relationships with student diners.
              </p>
            </BorderGlow>

            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="#ffffff"
              borderRadius={18}
              glowRadius={20}
              glowIntensity={0.3}
              colors={["#EA580C", "#F97316", "#FB923C"]}
              className="rv d1"
              style={{
                padding: "36px 30px",
                borderRadius: 18,
                border: "1px solid #E5E7EB",
                background: "#ffffff",
                borderTop: "4px solid #F97316"
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>🔭</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111827", marginBottom: 12 }}>Our Vision</h3>
              <p style={{ fontSize: 14.5, color: "#4B5563", lineHeight: 1.75, margin: 0 }}>
                To create a future where every student hostel and institutional kitchen in India operates with digital clarity — where no food is cooked in the dark, every transaction is accounted for, and mess management is effortless.
              </p>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* ── 4. Leadership & Team ── */}
      <section style={{ background: "#ffffff", padding: "clamp(64px,7vw,96px) 0" }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }} className="rv">
            <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              LEADERSHIP & ENGINEERING
            </span>
            <h2 style={{
              fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginTop: 6
            }}>
              The People Behind Mealiez
            </h2>
          </div>

          <BorderGlow
            glowColor="20 80 70"
            backgroundColor="#ffffff"
            borderRadius={20}
            glowRadius={24}
            glowIntensity={0.35}
            colors={["#EA580C", "#F97316", "#FB923C"]}
            className="rv d1"
            style={{
              padding: "clamp(32px,4vw,44px)",
              borderRadius: 20,
              border: "1px solid #E5E7EB",
              background: "#ffffff",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 28,
              alignItems: "center"
            }}
          >
            <div style={{
              width: 72, height: 72, borderRadius: "50%",
              background: "linear-gradient(135deg, #EA580C, #F97316)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#ffffff", fontSize: 26, fontWeight: 800, flexShrink: 0
            }}>
              HP
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: "#111827", margin: 0 }}>Harsh Potdar</h3>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#EA580C", background: "#FFF7ED", padding: "2px 8px", borderRadius: 6 }}>Founder & Developer</span>
              </div>
              <p style={{ fontSize: 14.5, color: "#4B5563", lineHeight: 1.7, margin: "10px 0 0" }}>
                Harsh built and designed Mealiez after directly studying the friction in hostel mess operations and student canteens. Leading product architecture and customer support, he works closely with mess operators and wardens on the ground to ensure Mealiez remains intuitive, robust, and lightning-fast.
              </p>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* ── 5. Company Journey ── */}
      <section style={{
        background: "#F9FAFB",
        padding: "clamp(64px,7vw,96px) 0",
        borderTop: "1px solid #E5E7EB",
        borderBottom: "1px solid #E5E7EB"
      }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }} className="rv">
            <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              HOW WE EVOLVED
            </span>
            <h2 style={{
              fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginTop: 6
            }}>
              The Mealiez Journey
            </h2>
          </div>

          <div style={{ position: "relative", paddingLeft: 32 }}>
            <div style={{ position: "absolute", left: 11, top: 8, bottom: 8, width: 2, background: "#E5E7EB" }} />
            {journeyMilestones.map((m, i) => (
              <div key={i} className="rv" style={{ position: "relative", marginBottom: 36 }}>
                <div style={{
                  position: "absolute", left: -32, top: 4,
                  width: 24, height: 24, borderRadius: "50%",
                  background: "#EA580C", border: "4px solid #ffffff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                }} />
                <div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {m.period}
                  </span>
                  <h4 style={{ fontSize: 17, fontWeight: 800, color: "#111827", margin: "4px 0 6px" }}>
                    {m.title}
                  </h4>
                  <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.65, margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Company Values ── */}
      <section style={{ background: "#ffffff", padding: "clamp(64px,7vw,96px) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }} className="rv">
            <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              GUIDING PRINCIPLES
            </span>
            <h2 style={{
              fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginTop: 6
            }}>
              Our Core Values
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {companyValues.map((val, i) => (
              <div key={i} className="rv" style={{
                padding: "28px 22px", borderRadius: 16,
                border: "1px solid #E5E7EB", background: "#F9FAFB"
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{val.icon}</div>
                <h3 style={{ fontSize: 16.5, fontWeight: 800, color: "#111827", marginBottom: 8 }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.65, margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Verified Contact & Office Information ── */}
      <section style={{
        background: "#F9FAFB",
        padding: "clamp(64px,7vw,96px) 0",
        borderTop: "1px solid #E5E7EB",
        borderBottom: "1px solid #E5E7EB"
      }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }} className="rv">
            <span style={{ fontSize: 11, fontWeight: 800, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              GENUINE SUPPORT & CONTACT
            </span>
            <h2 style={{
              fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#111827",
              fontFamily: "'Barlow Condensed',system-ui,sans-serif", textTransform: "uppercase", marginTop: 6
            }}>
              Speak Directly with Us
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", marginTop: 8 }}>
              Have questions about setting up your mess or need help with a custom requirement?
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            <div style={{ padding: "24px 20px", background: "#ffffff", borderRadius: 16, border: "1px solid #E5E7EB", textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>✉️</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>Email Support</div>
              <a href="mailto:Mealiez.customercare@gmail.com" style={{ fontSize: 14.5, fontWeight: 700, color: "#EA580C", textDecoration: "none", marginTop: 4, display: "block" }}>
                Mealiez.customercare@gmail.com
              </a>
            </div>

            <div style={{ padding: "24px 20px", background: "#ffffff", borderRadius: 16, border: "1px solid #E5E7EB", textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>📞</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>Direct Helpline</div>
              <a href="tel:+919270398199" style={{ fontSize: 14.5, fontWeight: 700, color: "#EA580C", textDecoration: "none", marginTop: 4, display: "block" }}>
                +91 9270398199
              </a>
            </div>

            <div style={{ padding: "24px 20px", background: "#ffffff", borderRadius: 16, border: "1px solid #E5E7EB", textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>📍</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>Location</div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: "#111827", marginTop: 4 }}>
                Maharashtra, India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Call to Action: Book a Demo ── */}
      <section style={{ background: "#ffffff", padding: "clamp(64px,7vw,96px) 0", textAlign: "center" }}>
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
              Want to see how Mealiez fits your operation?
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 500, margin: "0 auto 28px", lineHeight: 1.7 }}>
              Schedule a quick 20-minute live demonstration tailored to your mess type, student capacity, and dining schedule.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book-demo" className="btn-brand" style={{ padding: "15px 36px", fontSize: 15 }}>
                <span>Book a Demo →</span>
              </Link>
              <Link href="/pricing" className="btn-outline" style={{ padding: "15px 28px", fontSize: 15 }}>
                <span>View Pricing</span>
              </Link>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}
