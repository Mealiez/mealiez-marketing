"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BorderGlow from "@/components/ui/border-glow";

/* ── Scroll-reveal ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Accordion item ── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12,
      overflow: "hidden", marginBottom: 12,
      transition: "box-shadow 0.2s",
      boxShadow: open ? "0 4px 24px rgba(255,107,53,0.08)" : "none"
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", textAlign: "left", padding: "18px 22px",
        background: "#fff", border: "none", cursor: "pointer",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 15, fontWeight: 600, color: "#1a1a1a"
      }}>
        {q}
        <svg style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s", flexShrink: 0, marginLeft: 12 }}
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#555", lineHeight: 1.75, background: "#fff" }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function ProductMealBookingPage() {
  useReveal();

  return (
    <>
      <style>{`
        /* ── Reveal animations ── */
        .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .reveal-left { opacity:0; transform:translateX(-32px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-left.visible { opacity:1; transform:translateX(0); }
        .reveal-right { opacity:0; transform:translateX(32px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-right.visible { opacity:1; transform:translateX(0); }
        .delay-1 { transition-delay:.1s!important; }
        .delay-2 { transition-delay:.2s!important; }
        .delay-3 { transition-delay:.3s!important; }
        .delay-4 { transition-delay:.4s!important; }

        /* ── Page base ── */
        .prod-page { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }

        /* ── Containers ── */
        .wrap { max-width:1100px; margin:0 auto; padding:0 40px; }
        .section-gap { padding:80px 0; }
        .section-gap-sm { padding:60px 0; }

        /* ── Hero ── */
        .hero-prod {
          background: #fef6f0;
          padding: 80px 0 0;
          text-align: center;
        }
        .hero-prod h1 {
          font-size: 52px; font-weight: 900; line-height: 1.12;
          letter-spacing: -0.03em; color: #1a1a1a; margin-bottom: 20px;
        }
        .orange { color: #FF6B35; }
        .hero-prod p { font-size: 15.5px; color: #555; line-height: 1.75; max-width: 520px; margin: 0 auto 36px; }

        /* ── Buttons ── */
        .btn-orange {
          background: #FF6B35; color: #fff; border:none; border-radius:10px;
          padding:14px 30px; font-size:15px; font-weight:700; cursor:pointer;
          text-decoration:none; display:inline-flex; align-items:center; gap:8px;
          box-shadow:0 6px 22px rgba(255,107,53,0.35);
          transition:transform .2s, box-shadow .2s;
        }
        .btn-orange:hover { transform:translateY(-2px); box-shadow:0 10px 32px rgba(255,107,53,0.45); }
        .btn-ghost {
          background:#fff; color:#1a1a1a; border:1.5px solid rgba(0,0,0,0.12);
          border-radius:10px; padding:13px 30px; font-size:15px; font-weight:600;
          cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px;
          transition:border-color .2s, background .2s, transform .2s;
        }
        .btn-ghost:hover { border-color:rgba(255,107,53,0.35); background:#fff3ee; transform:translateY(-2px); }

        /* ── Dashboard screenshot mock ── */
        .dash-mock {
          background:#fff;
          border-radius:16px 16px 0 0;
          border:1px solid rgba(0,0,0,0.07);
          border-bottom:none;
          box-shadow:0 -4px 48px rgba(0,0,0,0.08);
          overflow:hidden;
          margin-top:48px;
        }
        .dash-topbar {
          background:#f5f5f5; padding:10px 14px;
          display:flex; align-items:center; gap:8px;
          border-bottom:1px solid rgba(0,0,0,0.06);
        }

        /* ── Section backgrounds ── */
        .bg-cream { background:#fef6f0; }
        .bg-white { background:#fff; }
        .bg-light { background:#fdf8f5; }

        /* ── Section titles ── */
        .sec-title { font-size:38px; font-weight:900; color:#1a1a1a; text-align:center; letter-spacing:-0.025em; margin-bottom:14px; }
        .sec-sub { font-size:15px; color:#666; text-align:center; line-height:1.72; max-width:540px; margin:0 auto 52px; }

        /* ── Cards ── */
        .card-white {
          background:#fff; border-radius:16px; border:1px solid rgba(0,0,0,0.07);
          padding:26px 22px;
          transition:transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s;
        }
        .card-white:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(255,107,53,0.1); }

        /* ── Icon circle ── */
        .icon-circle {
          width:44px; height:44px; border-radius:50%;
          background:rgba(255,107,53,0.1); border:1px solid rgba(255,107,53,0.2);
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }

        /* ── Badge label ── */
        .badge-label { font-size:10px; font-weight:800; letter-spacing:.1em; color:#FF6B35; text-transform:uppercase; margin-bottom:8px; }

        /* ── Phone mockup ── */
        .phone-wrap {
          background:linear-gradient(160deg,#0f0f0f,#1a1a1a);
          border-radius:24px; padding:18px;
          box-shadow:0 24px 72px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06);
          position:relative;
        }
        .phone-screen {
          background:#fff; border-radius:14px; overflow:hidden;
          min-height:320px; position:relative;
        }
        .phone-caption {
          position:absolute; bottom:0; left:0; right:0;
          background:linear-gradient(to top, rgba(0,0,0,0.85), transparent);
          padding:40px 20px 20px; color:#fff;
        }

        /* ── Data flow ── */
        .flow-arrow { color:#ccc; font-size:22px; flex-shrink:0; }

        /* ── Dark screenshot cards ── */
        .dark-card {
          background:#0f0f0f; border-radius:16px; overflow:hidden;
          border:1px solid rgba(255,255,255,0.07);
          box-shadow:0 16px 56px rgba(0,0,0,0.3);
        }

        /* ── Impact stats ── */
        .impact-card {
          background:#fff; border-radius:14px; border:1px solid rgba(0,0,0,0.07);
          padding:26px 20px; text-align:center;
          transition:transform .25s, box-shadow .25s;
        }
        .impact-card:hover { transform:translateY(-4px); box-shadow:0 12px 40px rgba(255,107,53,0.12); }
        .impact-num { font-size:40px; font-weight:900; color:#FF6B35; letter-spacing:-0.03em; line-height:1.1; }

        /* ── CTA bottom ── */
        .cta-bottom {
          text-align:center; padding:80px 40px;
          background:#fef6f0;
        }
        .cta-bottom h2 { font-size:42px; font-weight:900; color:#1a1a1a; margin-bottom:16px; letter-spacing:-0.025em; }
        .cta-bottom p { font-size:15px; color:#666; max-width:520px; margin:0 auto 36px; line-height:1.72; }

        /* ── Dashed divider ── */
        .dashed-divider { border:none; border-top:2px dashed rgba(255,107,53,0.2); margin:0; }

        /* ── Module specs list ── */
        .spec-row { display:flex; align-items:center; gap:8px; font-size:13.5px; color:#444; margin-bottom:9px; }

        @keyframes floatY { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }
        .float { animation:floatY 6s ease-in-out infinite; }
      `}</style>

      <div className="prod-page">

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section className="hero-prod">
          <div className="wrap">
            <h1>
              Precision <span className="orange">Meal Booking</span> for<br />Enterprise Scale
            </h1>
            <p>
              Eliminate food waste and operational friction with our predictive, high-fidelity booking engine designed for complex food service logistics.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book-demo" className="btn-orange">Start Optimizing</Link>
              <Link href="#architecture" className="btn-ghost">View Architecture</Link>
            </div>

            {/* Dashboard mockup */}
            <div className="dash-mock reveal" style={{ maxWidth: 860, margin: "48px auto 0" }}>
              <div className="dash-topbar">
                {["#ff5f57","#febc2e","#28c840"].map(c => (
                  <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                ))}
                <div style={{ flex: 1, background: "#e8e8e8", borderRadius: 4, height: 20, marginLeft: 8, maxWidth: 220 }} />
              </div>
              {/* Simulated dashboard layout */}
              <div style={{ display: "flex", minHeight: 340 }}>
                {/* Sidebar */}
                <div style={{ width: 140, background: "#fafafa", borderRight: "1px solid rgba(0,0,0,0.06)", padding: "16px 14px", flexShrink: 0 }}>
                  {["Deals Dashboard","Leads Dashboard"].map(t => (
                    <div key={t} style={{ fontSize: 10, color: "#aaa", marginBottom: 8 }}>{t}</div>
                  ))}
                  <div style={{ fontSize: 9, fontWeight: 700, color: "#ccc", letterSpacing: "0.08em", marginTop: 14, marginBottom: 8 }}>LAYOUT</div>
                  {["Horizontal","Detached","Modern","Two Column","Hovered","Boxed","RTL","Dark"].map(t => (
                    <div key={t} style={{ fontSize: 10, color: "#888", marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 1, background: "#ddd" }} />
                      {t}
                    </div>
                  ))}
                  <div style={{ fontSize: 9, fontWeight: 700, color: "#ccc", letterSpacing: "0.08em", marginTop: 12, marginBottom: 8 }}>CONTENT</div>
                  {["Pages","Blogs","Locations","Testimonials","FAQ's"].map(t => (
                    <div key={t} style={{ fontSize: 10, color: "#888", marginBottom: 6 }}>{t}</div>
                  ))}
                </div>
                {/* Main content area */}
                <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                  {/* User card */}
                  <div style={{ padding: "20px 18px", borderRight: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#FF6B35,#FF875C)" }} />
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a" }}>Stephan Peralt</div>
                        <div style={{ fontSize: 10, color: "#aaa" }}>Senior Product Designer</div>
                      </div>
                    </div>
                    {[["Phone Number","+1 324 3453 545"],["Email Address","Stapedo124@example.com"],["Report Office","Douglas Martini"],["Joined on","16 Jan 2024"]].map(([l,v]) => (
                      <div key={l} style={{ marginBottom: 10 }}>
                        <div style={{ fontSize: 9, color: "#bbb", marginBottom: 2 }}>{l}</div>
                        <div style={{ fontSize: 11, color: "#444", fontWeight: 500 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  {/* Leave details */}
                  <div style={{ padding: "20px 18px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a", marginBottom: 14 }}>Leave Details</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      {/* Donut */}
                      <svg width="80" height="80" viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
                        <circle cx="40" cy="40" r="30" fill="none" stroke="#f0f0f0" strokeWidth="14" />
                        <circle cx="40" cy="40" r="30" fill="none" stroke="#FF6B35" strokeWidth="14" strokeDasharray="75 114" strokeLinecap="round" transform="rotate(-90 40 40)" />
                        <circle cx="40" cy="40" r="30" fill="none" stroke="#22c55e" strokeWidth="14" strokeDasharray="40 114" strokeDashoffset="-75" strokeLinecap="round" transform="rotate(-90 40 40)" />
                      </svg>
                      <div>
                        {[["1254","On time","#22c55e"],["32","Late Attendance","#FF6B35"],["658","Work From Home","#3b82f6"],["14","Absent","#ef4444"]].map(([n,l,c])=>(
                          <div key={l} style={{ display:"flex", alignItems:"center", gap:6, marginBottom:5 }}>
                            <div style={{ width:7, height:7, borderRadius:"50%", background:c, flexShrink:0 }} />
                            <span style={{ fontSize:10, color:"#888" }}><b style={{ color:"#1a1a1a" }}>{n}</b> {l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Attendance */}
                  <div style={{ padding: "16px 18px", borderRight: "1px solid rgba(0,0,0,0.06)" }}>
                    <div style={{ fontSize: 10, color: "#aaa", marginBottom: 10 }}>Attendance · 11 Mar 2025</div>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                      <svg width="72" height="72" viewBox="0 0 72 72">
                        <circle cx="36" cy="36" r="28" fill="none" stroke="#f0f0f0" strokeWidth="10" />
                        <circle cx="36" cy="36" r="28" fill="none" stroke="#22c55e" strokeWidth="10" strokeDasharray="100 76" strokeLinecap="round" transform="rotate(-90 36 36)" />
                        <text x="36" y="38" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a1a1a">3:45:32</text>
                        <text x="36" y="48" textAnchor="middle" fontSize="7" fill="#aaa">Total Hours</text>
                      </svg>
                    </div>
                    <div style={{ background: "#f8f8f8", borderRadius: 8, padding: "8px 10px", fontSize: 10, color: "#555", marginBottom: 8 }}>Production · 3:45 hrs</div>
                    <button style={{ width: "100%", background: "#FF6B35", color: "#fff", border: "none", borderRadius: 7, padding: "7px 0", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Punch Out</button>
                  </div>
                  {/* Stats */}
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 10 }}>
                      {[["8.36/8","Total Hrs Today"],["24.426/40","Total Hrs Week"],["126/380","Total Hrs Month"]].map(([n,l])=>(
                        <div key={l} style={{ background:"#f8f8f8", borderRadius:8, padding:"8px 6px", textAlign:"center" }}>
                          <div style={{ fontSize:11, fontWeight:700, color:"#1a1a1a" }}>{n}</div>
                          <div style={{ fontSize:8, color:"#bbb" }}>{l}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "#f8f8f8", borderRadius: 8, padding: "8px 10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        {[["12h 36m","Total Working"],["08h 36m","Productive"],["22m 15s","Break"]].map(([v,l])=>(
                          <div key={l} style={{ textAlign:"center" }}>
                            <div style={{ fontSize:10, fontWeight:700, color:"#1a1a1a" }}>{v}</div>
                            <div style={{ fontSize:8, color:"#bbb" }}>{l}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ display:"flex", gap:3 }}>
                        <div style={{ flex:3, height:4, background:"#22c55e", borderRadius:2 }} />
                        <div style={{ flex:1, height:4, background:"#FF6B35", borderRadius:2 }} />
                        <div style={{ flex:1, height:4, background:"#e5e7eb", borderRadius:2 }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHY LEGACY METHODS FAIL
        ══════════════════════════════════════════════ */}
        <section className="bg-cream section-gap">
          <div className="wrap">
            <h2 className="sec-title reveal">Why Legacy Methods Fail</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 40 }}>
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>, title: "Unpredictable Waste", desc: "Manual headcounts lead to overproduction. Our data shows legacy systems average 15-20% daily food waste due to inaccurate forecasting." },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="3"/><circle cx="16" cy="15" r="3"/><line x1="8" y1="12" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="12"/><path d="M8 9h8"/></svg>, title: "Siloed Data", desc: "Spreadsheets don't communicate with procurement. Changes in attendance don't automatically adjust inventory requisitions in real-time." },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: "Administrative Drag", desc: "Facility managers spend an average of 14 hours a week reconciling meal chits, managing cut-offs, and handling exception requests manually." },
              ].map((item, i) => (
                <BorderGlow key={i} className={`card-white reveal delay-${i+1}`} backgroundColor="#ffffff" borderRadius={14}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div className="icon-circle">{item.icon}</div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.75 }}>{item.desc}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        <hr className="dashed-divider" />

        {/* ══════════════════════════════════════════════
            AUTOMATED FROM BOOKING TO PLATE
        ══════════════════════════════════════════════ */}
        <section className="bg-cream section-gap" id="architecture">
          <div className="wrap">
            <h2 className="sec-title reveal">Automated from Booking to Plate</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 40 }}>
              {/* Left — phone */}
              <div className="reveal-left" style={{ position: "relative" }}>
                <div className="phone-wrap">
                  <div className="phone-screen" style={{ minHeight: 380 }}>
                    {/* Notch */}
                    <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 80, height: 18, background: "#111", borderRadius: 9, zIndex: 2 }} />
                    {/* Screen content */}
                    <div style={{ padding: "48px 20px 20px", background: "#fff", height: "100%" }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#1a1a1a", marginBottom: 16, textAlign: "center" }}>Mealiez</div>
                      {/* Calendar grid */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 16 }}>
                        {["S","M","T","W","T","F","S"].map((d,i) => (
                          <div key={i} style={{ textAlign: "center", fontSize: 9, color: "#bbb", fontWeight: 600 }}>{d}</div>
                        ))}
                        {Array.from({ length: 35 }, (_, i) => {
                          const day = i - 2;
                          const isToday = day === 14;
                          const inMonth = day >= 1 && day <= 31;
                          return (
                            <div key={i} style={{ textAlign: "center", fontSize: 10, padding: "4px 2px", borderRadius: 6,
                              background: isToday ? "#FF6B35" : "transparent",
                              color: isToday ? "#fff" : inMonth ? "#333" : "#ddd",
                              fontWeight: isToday ? 700 : 400 }}>
                              {inMonth ? day : ""}
                            </div>
                          );
                        })}
                      </div>
                      <button style={{ width: "100%", background: "#FF6B35", color: "#fff", border: "none", borderRadius: 10, padding: "12px 0", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                        Book Now
                      </button>
                    </div>
                  </div>
                  {/* Caption overlay */}
                  <div style={{ marginTop: 12 }}>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Frictionless User Experience</div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 1.5 }}>One-tap booking, automated cut-off times, and dietary preference profiles.</div>
                  </div>
                </div>
              </div>

              {/* Right — steps */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Step 1 */}
                <BorderGlow className="card-white reveal-right" backgroundColor="#ffffff" borderRadius={14}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div className="icon-circle">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>1. Predictive Entry</h3>
                      <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7 }}>Users book via mobile or web portal. The system utilizes historical data to forecast no shows and walk-ins.</p>
                    </div>
                  </div>
                </BorderGlow>

                {/* Step 2 */}
                <BorderGlow className="card-white reveal-right delay-1" backgroundColor="#ffffff" borderRadius={14}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div className="icon-circle">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>2. Dynamic Routing</h3>
                      <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7 }}>Aggregated data instantly routes to procurement and kitchen display systems (KDS) for precise prep scaling.</p>
                    </div>
                  </div>
                </BorderGlow>

                {/* Step 3 + Specs */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <BorderGlow className="card-white reveal-right delay-2" backgroundColor="#ffffff" borderRadius={14}>
                    <div className="icon-circle" style={{ marginBottom: 12 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>3. Verified Fulfillment</h3>
                    <p style={{ fontSize: 12.5, color: "#666", lineHeight: 1.7 }}>Secure QR or biometric scanning at point of service ensures accurate billing and attendance reconciliation.</p>
                  </BorderGlow>
                  <BorderGlow className="card-white reveal-right delay-3" backgroundColor="#ffffff" borderRadius={14}>
                    <div className="badge-label">Module Specs</div>
                    {["Granular cut-off time configuration","Guest meal and exception handling","Multi-location & shift support"].map((s, i) => (
                      <div key={i} className="spec-row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {s}
                      </div>
                    ))}
                  </BorderGlow>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            ENGINEERED FOR ENTERPRISE
        ══════════════════════════════════════════════ */}
        <section className="bg-white section-gap">
          <div className="wrap">
            <h2 className="sec-title reveal">Engineered for Enterprise</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 40 }}>
              {[
                { badge: "DATA/SYNC", title: "Real-time KDS", desc: "Instant synchronization between booking portal and kitchen display systems." },
                { badge: "SECURE/AUTH", title: "SSO Integration", desc: "Seamless login via SAML/OAuth with existing enterprise active directories." },
                { badge: "ANALYTICS/ML", title: "Predictive Modeling", desc: "Machine learning algorithms forecast consumption patterns to reduce waste." },
                { badge: "COMPLIANCE/AUDIT", title: "Audit Trails", desc: "Comprehensive logging of all transactions and changes for accountability." },
              ].map((item, i) => (
                <BorderGlow key={i} className={`card-white reveal delay-${i+1}`} backgroundColor="#ffffff" borderRadius={14}>
                  <div className="badge-label">{item.badge}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.desc}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            END-TO-END DATA FLOW
        ══════════════════════════════════════════════ */}
        <section className="bg-cream section-gap-sm">
          <div className="wrap">
            <h2 className="sec-title reveal">End-to-End Data Flow</h2>
            <BorderGlow className="card-white reveal" style={{ marginTop: 40, padding: "40px 48px" }} backgroundColor="#ffffff" borderRadius={14}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32 }}>
                {[
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, label: "User Input", sub: "Mobile/Web App" },
                  { arrow: true },
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, label: "Mealiez Core", sub: "Processing Engine" },
                  { arrow: true },
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, label: "KDS & Inventory", sub: "Kitchen Display" },
                ].map((item: any, i) => (
                  item.arrow ? (
                    <div key={i} style={{ fontSize: 24, color: "#ddd" }}>→</div>
                  ) : (
                    <div key={i} style={{ textAlign: "center" }}>
                      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                        {item.icon}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: "#aaa" }}>{item.sub}</div>
                    </div>
                  )
                ))}
              </div>
            </BorderGlow>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HIGH-FIDELITY CONTROL
        ══════════════════════════════════════════════ */}
        <section className="bg-white section-gap">
          <div className="wrap">
            <h2 className="sec-title reveal">High-Fidelity Control</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 40 }}>
              {/* Analytics dark card */}
              <div className="reveal-left">
                <BorderGlow className="dark-card" style={{ marginBottom: 12 }} borderRadius={14}>
                  <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 6 }}>
                    {["#ff5f57","#febc2e","#28c840"].map(c=><div key={c} style={{ width:10,height:10,borderRadius:"50%",background:c }} />)}
                  </div>
                  <div style={{ padding: 16 }}>
                    {/* Fake chart */}
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 100, marginBottom: 12 }}>
                      {[35,55,42,72,60,88,65,78,50,92,68,82,45,70,58,85].map((h,i) => (
                        <div key={i} style={{ flex: 1, borderRadius: "2px 2px 0 0", background: i % 3 === 0 ? "#FF6B35" : i % 3 === 1 ? "#22c55e" : "#3b82f6", height: `${h}%`, opacity: 0.8 }} />
                      ))}
                    </div>
                    {/* Fake line chart */}
                    <svg viewBox="0 0 300 60" width="100%" style={{ display: "block" }}>
                      <path d="M0,45 C40,40 60,20 100,25 S160,10 200,15 S260,5 300,8" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
                      <path d="M0,50 C40,48 60,35 100,38 S160,28 200,30 S260,22 300,20" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </BorderGlow>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>Executive Analytics</div>
              </div>

              {/* Inventory dark card */}
              <div className="reveal-right">
                <BorderGlow className="dark-card" style={{ marginBottom: 12 }} borderRadius={14}>
                  <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 6 }}>
                    {["#ff5f57","#febc2e","#28c840"].map(c=><div key={c} style={{ width:10,height:10,borderRadius:"50%",background:c }} />)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 155 }}>
                    {/* Circular inventory viz */}
                    <svg viewBox="0 0 200 200" width="180" height="180">
                      <defs>
                        <radialGradient id="invGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#1e40af" />
                          <stop offset="100%" stopColor="#0f172a" />
                        </radialGradient>
                      </defs>
                      <circle cx="100" cy="100" r="90" fill="url(#invGrad)" />
                      {Array.from({length:12}, (_,i) => {
                        const angle = (i / 12) * Math.PI * 2 - Math.PI/2;
                        const r1 = 40 + Math.random()*25;
                        const r2 = 65 + Math.random()*20;
                        const x1 = 100 + Math.cos(angle)*r1;
                        const y1 = 100 + Math.sin(angle)*r1;
                        const x2 = 100 + Math.cos(angle)*r2;
                        const y2 = 100 + Math.sin(angle)*r2;
                        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(96,165,250,0.6)" strokeWidth="2" />;
                      })}
                      <circle cx="100" cy="100" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" />
                      <text x="100" y="105" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">INVENTORY</text>
                    </svg>
                  </div>
                </BorderGlow>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>Real-Time Inventory</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            MEASURABLE IMPACT
        ══════════════════════════════════════════════ */}
        <section className="bg-cream section-gap">
          <div className="wrap">
            <h2 className="sec-title reveal">Measurable Impact</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 40 }}>
              {[
                { num: "-18%", label: "Average Waste Reduction" },
                { num: "99.8%", label: "Fulfillment Accuracy" },
                { num: "+12h", label: "Admin Time Saved / Wk" },
                { num: "ROI", label: "< 3 Months Average" },
              ].map((s, i) => (
                <BorderGlow key={i} className={`impact-card reveal delay-${i+1}`} backgroundColor="#ffffff" borderRadius={14}>
                  <div className="impact-num">{s.num}</div>
                  <div style={{ fontSize: 13, color: "#666", marginTop: 8 }}>{s.label}</div>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════ */}
        <section className="bg-white section-gap">
          <div className="wrap" style={{ maxWidth: 720 }}>
            <h2 className="sec-title reveal">Frequently Asked Questions</h2>
            <div style={{ marginTop: 40 }} className="reveal">
              <FAQItem q="How does the integration with existing ERPs work?" a="Mealiez connects to your ERP via REST API or webhook. We support SAP, Oracle, and most custom ERPs. Setup typically takes 1-2 days with our integration team. All data flows are encrypted and auditable." />
              <FAQItem q="What is the hardware requirement for fulfillment?" a="For QR scanning, any Android or iOS device with a camera works. For biometric access, we support standard RFID readers and fingerprint scanners. We also offer our own hardened terminal hardware for enterprise deployments." />
              <FAQItem q="Is data secure and compliant?" a="Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified and GDPR compliant. Data residency options are available for regulated industries." />
              <FAQItem q="Can we customize cut-off times per meal slot?" a="Absolutely. Cut-off times are configurable per meal, per day, per location, and per user cohort. You can also set guest exceptions and administrative override permissions." />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            CTA BOTTOM
        ══════════════════════════════════════════════ */}
        <section className="cta-bottom reveal">
          <h2>Ready for precision?</h2>
          <p>Join the enterprise kitchens running at peak efficiency with Mealiez Culinary OS.</p>
          <Link href="/book-demo" className="btn-orange" style={{ fontSize: 16, padding: "16px 40px" }}>
            Book a Technical Demo
          </Link>
        </section>

      </div>
    </>
  );
}
