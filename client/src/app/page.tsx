"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AuroraBg } from "@/components/ambient/aurora-bg";
import { FloatingParticles } from "@/components/ambient/floating-particles";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import BorderGlow from "@/components/ui/border-glow";
import LightRays from "@/components/ui/light-rays";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv-el, .rv-l, .rv-r, .rv-s");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  return (
    <>
      <style>{`
        .rv-el  { opacity:0; transform:translateY(32px); transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1); }
        .rv-el.in { opacity:1; transform:translateY(0); }
        .rv-l  { opacity:0; transform:translateX(-40px); transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1); }
        .rv-l.in { opacity:1; transform:translateX(0); }
        .rv-r  { opacity:0; transform:translateX(40px); transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1); }
        .rv-r.in { opacity:1; transform:translateX(0); }
        .rv-s  { opacity:0; transform:scale(.94); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .rv-s.in { opacity:1; transform:scale(1); }
        .d1 { transition-delay:.1s } .d2 { transition-delay:.2s } .d3 { transition-delay:.3s } .d4 { transition-delay:.4s } .d5 { transition-delay:.5s }

        .hero-scroll-indicator {
          position:absolute; bottom:24px; left:50%; transform:translateX(-50%);
          display:flex; flex-direction:column; align-items:center; gap:6px;
          opacity:0; animation:fadeIn 1s 1.5s both;
        }
        .hero-scroll-indicator span {
          width:1.5px; height:28px;
          background:linear-gradient(180deg,rgba(234,88,12,0.5),transparent);
          animation:scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse { 0%,100%{opacity:0.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.3)} }

        .stat-value {
          font-family:'Barlow Condensed',system-ui,sans-serif;
          font-weight:800; text-transform:uppercase;
          font-feature-settings:'tnum' on,'lnum' on;
          font-variant-numeric:tabular-nums;
        }

        .editorial-heading {
          font-family:'Barlow Condensed',system-ui,sans-serif;
          text-transform:uppercase;
          letter-spacing:-0.01em;
        }

        .hero-stat-item {
          text-align:center; padding:0 20px;
          position:relative;
        }
        .hero-stat-item:not(:last-child)::after {
          content:''; position:absolute; right:0; top:50%;
          transform:translateY(-50%);
          width:1px; height:36px;
          background:linear-gradient(180deg,transparent,rgba(234,88,12,0.2),transparent);
        }

        @keyframes fadeIn { to{opacity:1} }

        /* Responsive Layout Grid */
        .pg-hero-grid {
          display:grid;
          grid-template-columns:minmax(0,1.1fr) minmax(0,1.1fr);
          gap:clamp(32px,5vw,72px);
          align-items:center;
        }
        .pg-stats-grid {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:clamp(16px,3vw,36px);
        }
        .pg-problem-grid {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:clamp(24px,3vw,40px);
        }
        .pg-overview-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:clamp(18px,2.5vw,28px);
        }
        .pg-why-grid {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:clamp(20px,2.5vw,32px);
        }

        .hero-trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          background: rgba(234,88,12,0.06);
          border: 1px solid rgba(234,88,12,0.18);
          border-radius: 100px;
          padding: 5px 14px 5px 6px;
          font-size: 12px;
          font-weight: 600;
          color: #EA580C;
          letter-spacing: 0.03em;
          margin-bottom: 28px;
          max-width: 100%;
          line-height: 1.4;
        }

        .hero-stats-row {
          display: flex;
          gap: 0;
          margin-top: 40px;
          padding-top: 26px;
          border-top: 1px solid #E5E7EB;
        }

        @media (max-width:960px) {
          .pg-hero-grid { grid-template-columns:1fr; }
          .pg-dashboard-col { display:none; }
          .pg-problem-grid { grid-template-columns:1fr; }
          .pg-overview-grid { grid-template-columns:repeat(2,1fr); }
          .pg-why-grid { grid-template-columns:1fr; }
        }

        @media (max-width:640px) {
          .hero-stats-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px 8px;
            text-align: center;
          }
          .hero-stat-item {
            padding: 0 4px !important;
          }
          .hero-stat-item:not(:last-child)::after {
            display: none !important;
          }
          .pg-stats-grid { grid-template-columns:repeat(2,1fr); }
          .pg-stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #E5E7EB;
            padding: 16px 8px !important;
          }
          .pg-stats-grid > div:nth-last-child(-n+2) {
            border-bottom: none !important;
          }
          .pg-overview-grid { grid-template-columns:1fr; }
        }

        @media (max-width:480px) {
          .pg-hero-grid { gap: 28px; }
          .hero-trust-badge { border-radius: 16px; padding: 6px 12px; font-size: 11.5px; }
          .pg-cta-primary, .pg-cta-ghost { width: 100%; justify-content: center; }
          .pg-card-hover { padding: 22px 16px !important; }
        }

        /* Buttons */
        .pg-cta-primary {
          display:inline-flex; align-items:center; gap:10px;
          background:linear-gradient(135deg,#EA580C,#F97316);
          color:#fff; border:none; border-radius:12px;
          padding:14px 28px; font-size:14.5px; font-weight:700;
          font-family:'Barlow',system-ui,sans-serif;
          text-decoration:none;
          letter-spacing:0.02em;
          box-shadow:0 6px 20px rgba(234,88,12,0.28), inset 0 1px 0 rgba(255,255,255,0.2);
          transition:transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s ease;
          position:relative; overflow:hidden;
          cursor:pointer;
        }
        .pg-cta-primary:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 30px rgba(234,88,12,0.38);
        }
        .pg-cta-primary:active {
          transform:translateY(0);
        }
        .pg-cta-primary-lg {
          padding:16px 36px;
          font-size:15px;
        }

        .pg-cta-ghost {
          display:inline-flex; align-items:center; gap:8px;
          background:#ffffff;
          color:#1F2937; border:1.5px solid #E5E7EB;
          border-radius:12px; padding:14px 26px;
          font-size:14.5px; font-weight:600;
          font-family:'Barlow',system-ui,sans-serif;
          text-decoration:none;
          transition:all .25s cubic-bezier(.22,1,.36,1);
          cursor:pointer;
        }
        .pg-cta-ghost:hover {
          background:#F9FAFB;
          border-color:rgba(234,88,12,0.4);
          color:#EA580C;
          transform:translateY(-2px);
          box-shadow:0 6px 18px rgba(0,0,0,0.05);
        }

        .pg-card-hover {
          transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease;
        }
        .pg-card-hover:hover {
          transform:translateY(-4px);
          box-shadow:0 16px 36px rgba(0,0,0,0.06);
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════════
          1. HERO — Editorial Layout with Real Dashboard Mockup
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%",
        background:"linear-gradient(180deg,#FFFFFF 0%,#F9FAFB 100%)",
        padding:"clamp(64px,8vw,110px) 0 clamp(48px,5vw,76px)",
        position:"relative",
        overflow:"hidden",
      }}>
        <AuroraBg />
        <FloatingParticles count={6} minSize={2} maxSize={4} speed={0.12} />

        {/* Directional brand glow */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          opacity: 0.35, mixBlendMode: "screen",
          pointerEvents: "none",
        }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#EA580C"
            raysSpeed={0.7}
            lightSpread={0.5}
            rayLength={1.7}
            fadeDistance={0.5}
            saturation={0.7}
            followMouse={true}
            mouseInfluence={0.06}
          />
        </div>

        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="pg-hero-grid">
            {/* Left Content */}
            <div>
              {/* Trust Badge */}
              <div className="hero-trust-badge rv-el d1">
                <span style={{
                  background:"#EA580C", color:"#fff",
                  borderRadius:100, padding:"2px 10px",
                  fontSize:10, fontWeight:800, letterSpacing:"0.05em",
                }}>DEDICATED</span>
                Digital Management for Indian Messes & Hostels
              </div>

              {/* Editorial Headline */}
              <h1 className="editorial-heading rv-el d2" style={{
                fontSize:"clamp(42px, 5.2vw, 68px)",
                fontWeight:900,
                lineHeight:1.06,
                color:"#111827",
                marginBottom:20,
              }}>
                Run your mess<br/>
                <span style={{
                  background:"linear-gradient(135deg,#EA580C 0%,#F97316 60%,#FB923C 100%)",
                  WebkitBackgroundClip:"text",
                  backgroundClip:"text",
                  WebkitTextFillColor:"transparent",
                }}>smarter.</span>
                <br/>
                Not on paper registers.
              </h1>

              <p className="rv-el d3" style={{
                fontSize:"clamp(15px,1.2vw,17px)",
                color:"#4B5563",
                lineHeight:1.75,
                maxWidth:500,
                marginBottom:36,
              }}>
                Mealiez is the complete management system built for mess owners and students. Automate member bookings, QR attendance, monthly billing, and menu schedules from a single mobile-friendly platform.
              </p>

              {/* Clear CTAs */}
              <div className="rv-el d4" style={{ display:"flex", gap:14, alignItems:"center", flexWrap:"wrap" }}>
                <Link href="/product" className="pg-cta-primary">
                  <span>View Products</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                </Link>
                <Link href="/book-demo" className="pg-cta-ghost">
                  <span>Book a Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
                </Link>
              </div>

              {/* Verified Trust Metrics */}
              <div className="hero-stats-row rv-el d5">
                <div className="hero-stat-item">
                  <div className="stat-value" style={{ fontSize:24, color:"#EA580C" }}>₹0</div>
                  <div style={{ fontSize:11, color:"#6B7280", fontWeight:600, marginTop:2 }}>HARDWARE COST</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-value" style={{ fontSize:24, color:"#EA580C" }}>100%</div>
                  <div style={{ fontSize:11, color:"#6B7280", fontWeight:600, marginTop:2 }}>QR VERIFIED</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-value" style={{ fontSize:24, color:"#EA580C" }}>10+ hrs</div>
                  <div style={{ fontSize:11, color:"#6B7280", fontWeight:600, marginTop:2 }}>SAVED / MO</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-value" style={{ fontSize:24, color:"#EA580C" }}>UPI</div>
                  <div style={{ fontSize:11, color:"#6B7280", fontWeight:600, marginTop:2 }}>AUTOPAY READY</div>
                </div>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="rv-r d3 pg-dashboard-col">
              <div style={{
                position:"relative",
                background:"#ffffff",
                borderRadius:20,
                border:"1px solid #E5E7EB",
                boxShadow:"0 20px 50px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)",
                overflow:"hidden",
              }}>
                {/* Mockup Header */}
                <div style={{
                  background:"#F9FAFB",
                  padding:"12px 18px",
                  borderBottom:"1px solid #E5E7EB",
                  display:"flex", alignItems:"center", justifyContent:"space-between",
                }}>
                  <div style={{ display:"flex", gap:6 }}>
                    {["#ef4444","#f59e0b","#10b981"].map((c)=>(
                      <div key={c} style={{ width:10,height:10,borderRadius:"50%",background:c }}/>
                    ))}
                  </div>
                  <span style={{ fontSize:11, color:"#6B7280", fontWeight:700, letterSpacing:"0.05em" }}>MEALIEZ OPERATOR PANEL</span>
                  <div style={{ width:36 }}/>
                </div>

                {/* Dashboard Metrics */}
                <div style={{ padding:18, display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12 }}>
                  <div style={{ background:"#FFF7ED", border:"1px solid #FED7AA", borderRadius:12, padding:14 }}>
                    <div style={{ fontSize:11, color:"#9A3412", fontWeight:700 }}>TODAY'S LUNCH HEADCOUNT</div>
                    <div className="stat-value" style={{ fontSize:28, color:"#EA580C", marginTop:4 }}>142 / 160</div>
                    <div style={{ fontSize:11, color:"#7C2D12", marginTop:2 }}>88.7% verified scans</div>
                  </div>

                  <div style={{ background:"#F9FAFB", border:"1px solid #E5E7EB", borderRadius:12, padding:14 }}>
                    <div style={{ fontSize:11, color:"#4B5563", fontWeight:700 }}>MONTHLY DUES COLLECTED</div>
                    <div className="stat-value" style={{ fontSize:28, color:"#111827", marginTop:4 }}>₹1,14,500</div>
                    <div style={{ fontSize:11, color:"#059669", marginTop:2 }}>94% on-time via UPI</div>
                  </div>

                  <div style={{ background:"#F9FAFB", border:"1px solid #E5E7EB", borderRadius:12, padding:14 }}>
                    <div style={{ fontSize:11, color:"#4B5563", fontWeight:700 }}>ATTENDANCE MODE</div>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:8 }}>
                      <div style={{ width:10, height:10, borderRadius:"50%", background:"#10b981" }} />
                      <span style={{ fontSize:13, fontWeight:700, color:"#111827" }}>Live QR Scanner Active</span>
                    </div>
                    <div style={{ fontSize:11, color:"#6B7280", marginTop:4 }}>Instant validation on phone</div>
                  </div>

                  <div style={{ background:"#F9FAFB", border:"1px solid #E5E7EB", borderRadius:12, padding:14 }}>
                    <div style={{ fontSize:11, color:"#4B5563", fontWeight:700 }}>TODAY'S MENU STATUS</div>
                    <div style={{ fontSize:13, fontWeight:700, color:"#111827", marginTop:6 }}>Paneer Bhurji & Dal Tadka</div>
                    <div style={{ fontSize:11, color:"#EA580C", fontWeight:600, marginTop:4 }}>Published to Student App</div>
                  </div>
                </div>

                {/* Scan Stream Footer */}
                <div style={{
                  padding:"12px 18px",
                  borderTop:"1px solid #E5E7EB",
                  background:"#F9FAFB",
                  display:"flex", alignItems:"center", justifyContent:"space-between",
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <div style={{ width:24, height:24, borderRadius:6, background:"#EA580C", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <div style={{ fontSize:12, fontWeight:700, color:"#111827" }}>Rahul V. (Room 204) checked in</div>
                      <div style={{ fontSize:10, color:"#6B7280" }}>Just now • Balance: Up to date</div>
                    </div>
                  </div>
                  <span style={{ fontSize:11, color:"#059669", fontWeight:700, background:"rgba(16,185,129,0.1)", padding:"3px 8px", borderRadius:6 }}>Valid</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator">
          <span style={{ fontSize:10, color:"rgba(234,88,12,0.6)", fontWeight:700, letterSpacing:"0.08em" }}>EXPLORE</span>
          <span/>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. PROBLEM — Both Mess Owners & Students
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%", padding:"clamp(72px,8vw,110px) 0",
        background:"#ffffff",
        position:"relative",
      }}>
        <div className="container">
          <div className="rv-el" style={{ marginBottom:48 }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#EA580C",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(234,88,12,0.06)",
              border:"1px solid rgba(234,88,12,0.16)",
              borderRadius:100, padding:"4px 14px",
              display:"inline-block", marginBottom:14,
            }}>THE CORE PROBLEM</span>
            <h2 className="editorial-heading" style={{
              fontSize:"clamp(30px,3.8vw,48px)",
              fontWeight:900, color:"#111827",
              lineHeight:1.1, maxWidth:720,
            }}>
              Manual mess systems break down<br/>
              <span style={{
                background:"linear-gradient(135deg,#EA580C,#F97316)",
                WebkitBackgroundClip:"text",
                backgroundClip:"text",
                WebkitTextFillColor:"transparent",
              }}>for both owners and students.</span>
            </h2>
            <p style={{ fontSize:16, color:"#4B5563", lineHeight:1.7, maxWidth:620, marginTop:12 }}>
              When operations depend on paper registers, lost physical coupon tokens, and chaotic WhatsApp groups, friction and financial losses are inevitable on both sides.
            </p>
          </div>

          <div className="pg-problem-grid">
            {/* Mess Owner Problems */}
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="#ffffff"
              borderRadius={20}
              glowRadius={25}
              glowIntensity={0.35}
              colors={["#EA580C", "#F97316", "#FB923C"]}
              className="rv-l d1 pg-card-hover"
              style={{
                border:"1px solid #E5E7EB",
                padding:"clamp(28px,3vw,36px)",
                background:"#ffffff",
              }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                <span style={{
                  background:"#FFF7ED", color:"#EA580C",
                  borderRadius:8, padding:"6px 12px",
                  fontSize:12, fontWeight:800, letterSpacing:"0.04em",
                }}>FOR MESS OWNERS</span>
                <span style={{ fontSize:13, color:"#6B7280" }}>Operational & Financial Pain</span>
              </div>
              <h3 style={{ fontSize:20, fontWeight:800, color:"#111827", marginBottom:16 }}>
                The Headache of Running on Registers
              </h3>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:14 }}>
                {[
                  { title:"Manual Attendance & Proxy Dining", desc:"Paper sign-ins allow unregistered students to eat on a friend's count, leaving you with unpaid meals." },
                  { title:"Unpredictable Daily Cooking Headcount", desc:"Cooking without advance meal counts leads to 15–25% food overproduction and wasted ingredient costs daily." },
                  { title:"Messy Month-End Billing Reconciliations", desc:"Cross-referencing handwritten registers with bank statements consumes 10+ hours and causes endless disputes." },
                  { title:"Delayed Payments & Fee Leakages", desc:"Chasing students individually for outstanding dues creates severe monthly working-capital strain." },
                ].map((item, i) => (
                  <li key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                    <div style={{ width:20, height:20, borderRadius:"50%", background:"#FEE2E2", color:"#DC2626", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:11, fontWeight:800, marginTop:2 }}>✕</div>
                    <div>
                      <strong style={{ fontSize:14.5, color:"#1F2937", display:"block", marginBottom:2 }}>{item.title}</strong>
                      <span style={{ fontSize:13, color:"#6B7280", lineHeight:1.6 }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </BorderGlow>

            {/* Student Problems */}
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="#ffffff"
              borderRadius={20}
              glowRadius={25}
              glowIntensity={0.35}
              colors={["#EA580C", "#F97316", "#FB923C"]}
              className="rv-r d2 pg-card-hover"
              style={{
                border:"1px solid #E5E7EB",
                padding:"clamp(28px,3vw,36px)",
                background:"#ffffff",
              }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                <span style={{
                  background:"#F3F4F6", color:"#374151",
                  borderRadius:8, padding:"6px 12px",
                  fontSize:12, fontWeight:800, letterSpacing:"0.04em",
                }}>FOR STUDENTS</span>
                <span style={{ fontSize:13, color:"#6B7280" }}>Transparency & Access Pain</span>
              </div>
              <h3 style={{ fontSize:20, fontWeight:800, color:"#111827", marginBottom:16 }}>
                The Frustration of Paper & Tokens
              </h3>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:14 }}>
                {[
                  { title:"Difficulty Discovering & Evaluating Messes", desc:"New hostelers struggle to find reliable nearby messes, check verified menus, and compare real pricing." },
                  { title:"Zero Transparency in Attendance Records", desc:"Students get charged for days they were away because physical registers get marked incorrectly." },
                  { title:"Lost Tokens & Meal Coupon Cards", desc:"Physical coupon cards or paper meal tokens get misplaced easily, leading to double charges or arguments." },
                  { title:"No Advance Menu or Timing Updates", desc:"No easy way to know what's cooking each day or whether dinner timings have shifted for exams or festivals." },
                ].map((item, i) => (
                  <li key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                    <div style={{ width:20, height:20, borderRadius:"50%", background:"#FEE2E2", color:"#DC2626", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:11, fontWeight:800, marginTop:2 }}>✕</div>
                    <div>
                      <strong style={{ fontSize:14.5, color:"#1F2937", display:"block", marginBottom:2 }}>{item.title}</strong>
                      <span style={{ fontSize:13, color:"#6B7280", lineHeight:1.6 }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. DATA / STATISTICS — Verified Operational Facts
      ════════════════════════════════════════════════════════════ */}
      <div style={{
        width:"100%",
        padding:"clamp(36px,4vw,60px) 0",
        background:"#F9FAFB",
        borderTop:"1px solid #E5E7EB",
        borderBottom:"1px solid #E5E7EB",
      }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:32 }} className="rv-el">
            <span style={{ fontSize:11, fontWeight:700, color:"#EA580C", letterSpacing:"0.08em", textTransform:"uppercase" }}>
              MEASURABLE OPERATIONAL IMPACT
            </span>
            <p style={{ fontSize:14, color:"#6B7280", marginTop:4 }}>
              Observed across hostel messes and student food dining halls digitising their daily management
            </p>
          </div>
          <div className="pg-stats-grid">
            {[
              { value:22, suffix:"%", label:"Food Waste Cut", desc:"Accurate advance headcounts prevent excessive over-preparation" },
              { value:10, suffix:"+ hrs", label:"Saved per Month", desc:"Automated ledgers replace manual register reconciliation" },
              { value:100, suffix:"%", label:"Proxy Check-ins Stopped", desc:"Unique student QR codes ensure one scan per meal served" },
              { label:"₹0", static:true, desc:"Zero proprietary hardware — runs on any existing smartphone browser" },
            ].map((s:any, i) => (
              <div key={i} className="rv-el" style={{
                textAlign:"center", padding:"12px 8px",
                borderRight: i < 3 ? "1px solid #E5E7EB" : "none",
              }}>
                <div className="stat-value" style={{
                  fontSize:"clamp(28px,3.2vw,40px)",
                  color:"#EA580C",
                  lineHeight:1,
                  marginBottom:8,
                }}>
                  {s.static ? s.label : <AnimatedCounter value={s.value} suffix={s.suffix} duration={1.6} />}
                </div>
                <div style={{ fontSize:14, fontWeight:800, color:"#111827", marginBottom:4 }}>
                  {s.label || "Hardware Required"}
                </div>
                <div style={{ fontSize:12, color:"#6B7280", lineHeight:1.5 }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          4. OVERALL SOLUTION — High Level Mealiez Story
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%", padding:"clamp(72px,8vw,110px) 0",
        background:"#ffffff",
        position:"relative",
      }}>
        <div className="container">
          <div className="rv-el" style={{ textAlign:"center", maxWidth:680, margin:"0 auto 52px" }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#EA580C",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(234,88,12,0.06)",
              border:"1px solid rgba(234,88,12,0.16)",
              borderRadius:100, padding:"4px 14px",
              display:"inline-block", marginBottom:14,
            }}>THE MEALIEZ SOLUTION</span>
            <h2 className="editorial-heading" style={{
              fontSize:"clamp(30px,3.8vw,46px)",
              fontWeight:900, color:"#111827",
              lineHeight:1.1,
            }}>
              From discovery to daily dining,<br/>
              <span style={{
                background:"linear-gradient(135deg,#EA580C,#F97316)",
                WebkitBackgroundClip:"text",
                backgroundClip:"text",
                WebkitTextFillColor:"transparent",
              }}>everything connected in one system.</span>
            </h2>
            <p style={{ fontSize:15.5, color:"#4B5563", lineHeight:1.75, marginTop:12 }}>
              Mealiez bridges the gap between mess operators and students. Replace loose registers with real-time digital check-ins, automated billing, and live menu publishing.
            </p>
          </div>

          <div className="pg-overview-grid">
            {[
              {
                icon: "📍",
                title: "Mess Discovery & Marketplace",
                desc: "Students find nearby messes, view photos, verify meal plans, and join directly without physical paperwork.",
              },
              {
                icon: "👥",
                title: "Student Roster & Plans",
                desc: "Manage monthly memberships, active plans, room allocations, and special leave deductions seamlessly.",
              },
              {
                icon: "📱",
                title: "Fast QR Attendance",
                desc: "Students scan at the dining counter via smartphone. Instant audio/visual verification eliminates proxy dining.",
              },
              {
                icon: "💳",
                title: "Automated Billing & UPI",
                desc: "Accurate monthly fee generation based on real meal attendance. Parents & students pay online with instant receipts.",
              },
              {
                icon: "🍲",
                title: "Digital Menu & Schedule",
                desc: "Publish breakfast, lunch, and dinner menus in advance. Keep members informed and gather dish-level ratings.",
              },
              {
                icon: "📊",
                title: "Kitchen & Waste Analytics",
                desc: "Forecast prep quantities based on verified booking trends to cut unnecessary grocery procurement costs.",
              },
            ].map((sol, i) => (
              <BorderGlow
                key={i}
                glowColor="20 80 70"
                backgroundColor="#ffffff"
                borderRadius={16}
                glowRadius={20}
                glowIntensity={0.3}
                colors={["#EA580C", "#F97316", "#FB923C"]}
                className="rv-s pg-card-hover"
                style={{
                  padding:"28px 24px",
                  borderRadius:16,
                  border:"1px solid #E5E7EB",
                  background:"#ffffff",
                }}
              >
                <div style={{ fontSize:28, marginBottom:14 }}>{sol.icon}</div>
                <h3 style={{ fontSize:17, fontWeight:800, color:"#111827", marginBottom:8 }}>
                  {sol.title}
                </h3>
                <p style={{ fontSize:13.5, color:"#6B7280", lineHeight:1.68, margin:0 }}>
                  {sol.desc}
                </p>
              </BorderGlow>
            ))}
          </div>

          {/* End with View Products Link */}
          <div className="rv-el" style={{ textAlign:"center", marginTop:48 }}>
            <Link href="/product" className="pg-cta-primary">
              <span>View Products & Full Capabilities</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. WHY MEALIEZ — Real Differentiators (No Buzzword Fluff)
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%", padding:"clamp(72px,8vw,110px) 0",
        background:"#F9FAFB",
        borderTop:"1px solid #E5E7EB",
        borderBottom:"1px solid #E5E7EB",
        position:"relative",
      }}>
        <div className="container">
          <div className="rv-el" style={{ marginBottom:48 }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#EA580C",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(234,88,12,0.06)",
              border:"1px solid rgba(234,88,12,0.16)",
              borderRadius:100, padding:"4px 14px",
              display:"inline-block", marginBottom:14,
            }}>WHY CHOOSE MEALIEZ</span>
            <h2 className="editorial-heading" style={{
              fontSize:"clamp(30px,3.8vw,46px)",
              fontWeight:900, color:"#111827",
              lineHeight:1.1, maxWidth:650,
            }}>
              Built specifically for Indian mess realities.<br/>
              <span style={{ color:"#6B7280" }}>Not generic restaurant POS software.</span>
            </h2>
          </div>

          <div className="pg-why-grid">
            {[
              {
                title: "Works on Any Existing Phone (Zero Hardware Cost)",
                desc: "Generic enterprise ERPs require expensive biometric fingerprint machines that fail when students have wet or oily hands in the dining hall. Mealiez runs directly on any Android smartphone, tablet, or web browser.",
              },
              {
                title: "Designed for Monthly Hostels & Shift Canteens",
                desc: "Western restaurant software tracks table covers and tips. Mealiez handles Indian mess realities: monthly subscription plans, leave deductions for exam breaks, guest coupons, and mess committee reporting.",
              },
              {
                title: "Zero End-of-Month Ledger Arguments",
                desc: "Because every meal scan is timestamped and recorded in the student's digital passbook, disputes over 'I wasn't in town that weekend' vanish completely. Both student and mess warden see the same transparent log.",
              },
              {
                title: "Affordable & Fair for Local Operators",
                desc: "With a 100% free starter tier (₹0 forever) and full-featured plans starting at just ₹499/month, any independent mess owner can modernize their operation without heavy software subscriptions.",
              },
            ].map((diff, i) => (
              <BorderGlow
                key={i}
                glowColor="20 80 70"
                backgroundColor="#ffffff"
                borderRadius={16}
                glowRadius={20}
                glowIntensity={0.3}
                colors={["#EA580C", "#F97316", "#FB923C"]}
                className="rv-s pg-card-hover"
                style={{
                  padding:"30px",
                  borderRadius:16,
                  border:"1px solid #E5E7EB",
                  background:"#ffffff",
                }}
              >
                <div style={{
                  display:"inline-flex", alignItems:"center", justifyContent:"center",
                  width:32, height:32, borderRadius:8,
                  background:"#FFF7ED", color:"#EA580C",
                  fontWeight:800, fontSize:14, marginBottom:16,
                }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize:18, fontWeight:800, color:"#111827", marginBottom:10 }}>
                  {diff.title}
                </h3>
                <p style={{ fontSize:14, color:"#4B5563", lineHeight:1.7, margin:0 }}>
                  {diff.desc}
                </p>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. SHORT PRODUCT OVERVIEW — Concise Module Snapshot
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%", padding:"clamp(72px,8vw,110px) 0",
        background:"#ffffff",
        position:"relative",
      }}>
        <div className="container">
          <div className="rv-el" style={{ marginBottom:48, textAlign:"center" }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#EA580C",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(234,88,12,0.06)",
              border:"1px solid rgba(234,88,12,0.16)",
              borderRadius:100, padding:"4px 14px",
              display:"inline-block", marginBottom:14,
            }}>PRODUCT OVERVIEW</span>
            <h2 className="editorial-heading" style={{
              fontSize:"clamp(30px,3.8vw,46px)",
              fontWeight:900, color:"#111827",
              lineHeight:1.1,
            }}>
              Modular tools that fit your workflow.
            </h2>
            <p style={{ fontSize:15, color:"#6B7280", marginTop:8 }}>
              Use the modules you need today and expand as your dining operation scales.
            </p>
          </div>

          <div className="pg-overview-grid">
            {[
              {
                slug: "attendance",
                badge: "ATTENDANCE",
                title: "QR Code Attendance",
                summary: "Fast 1-second check-in scans at the counter. Tracks actual meals served and eliminates proxy dining.",
              },
              {
                slug: "meal-booking",
                badge: "BOOKING",
                title: "Meal Booking & Opt-Out",
                summary: "Students mark leaves or guest meals in advance. Kitchen teams view exact headcount before prep begins.",
              },
              {
                slug: "billing",
                badge: "BILLING",
                title: "Billing & UPI Invoicing",
                summary: "Automated monthly statements linked to attendance. Send WhatsApp fee reminders with UPI pay links.",
              },
            ].map((mod, i) => (
              <BorderGlow
                key={i}
                glowColor="20 80 70"
                backgroundColor="#ffffff"
                borderRadius={16}
                glowRadius={20}
                glowIntensity={0.3}
                colors={["#EA580C", "#F97316", "#FB923C"]}
                className="rv-s pg-card-hover"
                style={{
                  padding:"28px 24px",
                  borderRadius:16,
                  border:"1px solid #E5E7EB",
                  background:"#ffffff",
                  display:"flex", flexDirection:"column", justifyContent:"space-between",
                }}
              >
                <div>
                  <span style={{
                    fontSize:10, fontWeight:800, color:"#EA580C",
                    letterSpacing:"0.1em", textTransform:"uppercase",
                    background:"#FFF7ED", border:"1px solid #FED7AA",
                    borderRadius:6, padding:"3px 8px", display:"inline-block", marginBottom:14,
                  }}>{mod.badge}</span>
                  <h3 style={{ fontSize:18, fontWeight:800, color:"#111827", marginBottom:8 }}>
                    {mod.title}
                  </h3>
                  <p style={{ fontSize:13.5, color:"#6B7280", lineHeight:1.65, marginBottom:20 }}>
                    {mod.summary}
                  </p>
                </div>
                <Link href={`/product/${mod.slug}`} style={{
                  fontSize:13.5, fontWeight:700, color:"#EA580C",
                  textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6,
                }}>
                  Learn more about {mod.title} →
                </Link>
              </BorderGlow>
            ))}
          </div>

          {/* End with View Products Link */}
          <div className="rv-el" style={{ textAlign:"center", marginTop:44 }}>
            <Link href="/product" className="pg-cta-primary">
              <span>View All Products →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          7. FINAL CTA — Clear Invitation to Talk & Try
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%",
        background:"linear-gradient(180deg,#F9FAFB 0%,#FFF7ED 100%)",
        padding:"clamp(72px,9vw,110px) 0",
        position:"relative",
        overflow:"hidden",
        borderTop:"1px solid #E5E7EB",
      }}>
        <FloatingParticles count={6} minSize={2} maxSize={4} speed={0.08} />
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <BorderGlow
            glowColor="20 80 70"
            backgroundColor="#ffffff"
            borderRadius={24}
            glowRadius={30}
            glowIntensity={0.4}
            colors={["#EA580C", "#F97316", "#FB923C"]}
            className="rv-s"
            style={{
              maxWidth:760, margin:"0 auto", textAlign:"center",
              padding:"clamp(36px,5vw,72px) clamp(18px,4vw,56px)",
              borderRadius:24,
              background:"#ffffff",
              border:"1px solid #E5E7EB",
              boxShadow:"0 10px 30px rgba(0,0,0,0.04)",
              position:"relative",
            }}
          >
            <h2 className="editorial-heading" style={{
              fontSize:"clamp(30px,3.8vw,44px)",
              fontWeight:900, color:"#111827",
              lineHeight:1.1, marginBottom:16,
            }}>
              Ready to simplify your mess management?
            </h2>
            <p style={{
              fontSize:15.5,
              color:"#4B5563", lineHeight:1.75,
              maxWidth:540, margin:"0 auto 32px",
            }}>
              See how Mealiez stops food wastage, automates monthly billing, and eliminates register chaos. Get started with our free tier or schedule a friendly guided walkthrough.
            </p>
            <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/book-demo" className="pg-cta-primary pg-cta-primary-lg">
                <span>Book a Demo</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </Link>
              <Link href="/pricing" className="pg-cta-ghost">
                View Pricing Plans
              </Link>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}