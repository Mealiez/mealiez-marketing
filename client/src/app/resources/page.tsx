"use client";

import React, { useEffect } from "react";
import Link from "next/link";

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

export default function ResourcesPage() {
  useReveal();

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .rp {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          color: #1a1a1a;
        }

        .rv   { opacity:0; transform:translateY(28px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}

        .w    { max-width:1060px; margin:0 auto; padding:0 40px; }
        .w-sm { max-width:720px; margin:0 auto; padding:0 40px; }

        /* Sections */
        .sec-white { background:#fff; padding:84px 0; }
        .sec-cream  { background:#fdf6f0; padding:84px 0; }
        .sec-pale   { background:#fef9f6; padding:84px 0; }

        /* Problem cards */
        .prob-card {
          background:#fff; border:1px solid rgba(0,0,0,0.07);
          border-radius:16px; padding:26px 22px;
          transition:transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .28s;
        }
        .prob-card:hover { transform:translateY(-5px); box-shadow:0 16px 44px rgba(255,107,53,0.09); border-color:rgba(255,107,53,0.18); }

        /* Screenshot card */
        .screen-card {
          border-radius:16px; overflow:hidden;
          box-shadow:0 8px 32px rgba(0,0,0,0.12);
          transition:transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s;
        }
        .screen-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(0,0,0,0.16); }

        /* Quote */
        .blockquote {
          font-size:clamp(20px,2.8vw,28px);
          font-weight:800;
          color:#1a1a1a;
          line-height:1.45;
          letter-spacing:-0.02em;
          font-family:'Bricolage Grotesque', system-ui, sans-serif;
          text-align:center;
          max-width:640px;
          margin:0 auto 32px;
        }

        /* Stat display */
        .stat-val {
          font-size:clamp(34px,4.5vw,52px);
          font-weight:900;
          color:#FF6B35;
          line-height:1;
          letter-spacing:-0.03em;
          font-family:'Bricolage Grotesque', system-ui, sans-serif;
        }

        /* Orange bullet list */
        .orange-list { list-style:none; padding:0; margin:0; }
        .orange-list li {
          display:flex; align-items:flex-start; gap:12px;
          padding:14px 0;
          border-bottom:1px solid rgba(0,0,0,0.05);
          font-size:14px; color:#444; line-height:1.6;
        }
        .orange-list li:last-child { border-bottom:none; }
        .orange-list li strong { display:block; font-size:14.5px; font-weight:700; color:#1a1a1a; margin-bottom:3px; }
        .orange-dot {
          width:8px; height:8px; border-radius:50%;
          background:#FF6B35; flex-shrink:0; margin-top:6px;
          box-shadow:0 0 0 3px rgba(255,107,53,0.18);
        }

        /* CTA card */
        .cta-card {
          background:linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,162,127,0.05)), #fef6f0;
          border:1px solid rgba(255,107,53,0.12);
          border-radius:24px;
          padding:60px 40px;
          text-align:center;
        }

        @media(max-width:768px){
          .w,.w-sm { padding-left:20px; padding-right:20px; }
          .sec-white,.sec-cream,.sec-pale { padding:56px 0; }
          .hero-grid { grid-template-columns:1fr !important; }
          .client-grid { grid-template-columns:1fr !important; }
          .friction-grid { grid-template-columns:1fr !important; }
          .deploy-grid { grid-template-columns:1fr !important; }
          .stat-grid { grid-template-columns:1fr 1fr !important; }
          .screen-grid { grid-template-columns:1fr !important; }
          .cta-card { padding:40px 24px; }
        }
      `}</style>

      <div className="rp">

        {/* ════════════════════════════════════════
            HERO — Scaling Precision at Global Catering Inc.
        ════════════════════════════════════════ */}
        <section style={{ background: "#fff", padding: "56px 0 64px" }}>
          <div className="w">

            {/* Badge */}
            <div className="rv" style={{ marginBottom: 24 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.2)",
                borderRadius: 100, padding: "5px 14px",
                fontSize: 10, fontWeight: 800, color: "#FF6B35",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                ✦ Enterprise Case Study
              </span>
            </div>

            <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
              {/* Left */}
              <div>
                <h1 className="rv d1" style={{
                  fontSize: "clamp(30px,4vw,50px)", fontWeight: 900,
                  color: "#1a1a1a", lineHeight: 1.15, letterSpacing: "-0.03em",
                  marginBottom: 20,
                  fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                }}>
                  Scaling Precision at{" "}
                  <span style={{ color: "#FF6B35" }}>Global<br />Catering Inc.</span>
                </h1>
                <p className="rv d2" style={{ fontSize: 14.5, color: "#555", lineHeight: 1.78, maxWidth: 380 }}>
                  How a high-volume corporate food provider eliminated spreadsheet friction, cut waste by 22%, and digitised their entire operational floor with Mealiez Culinary OS.
                </p>
              </div>

              {/* Right — dark tablet visual */}
              <div className="rv d2" style={{ position: "relative" }}>
                <div style={{
                  background: "#0f172a",
                  borderRadius: 18,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
                }}>
                  {/* Top bar */}
                  <div style={{ background: "#1e293b", padding: "10px 16px", display: "flex", gap: 6, alignItems: "center" }}>
                    {["#ef4444","#f59e0b","#22c55e"].map((c) => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                    ))}
                    <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 6, height: 18, marginLeft: 8 }} />
                  </div>

                  {/* Kitchen scene — CSS art */}
                  <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "linear-gradient(145deg,#1e293b,#0f172a)" }}>
                    {/* Warm glow */}
                    <div style={{ position: "absolute", bottom: 0, left: "30%", width: 200, height: 200, borderRadius: "50%", background: "rgba(255,107,53,0.18)", filter: "blur(40px)" }} />
                    {/* Counter surface */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "rgba(30,41,59,0.9)", borderTop: "2px solid rgba(255,107,53,0.3)" }} />
                    {/* Bottles */}
                    {[15,28,40].map((l, i) => (
                      <div key={i} style={{
                        position: "absolute", bottom: "34%", left: `${l}%`,
                        width: 8 + i * 3, height: 40 + i * 8,
                        background: `rgba(255,${120 + i*30},${60 + i*20},0.6)`,
                        borderRadius: "3px 3px 0 0",
                      }} />
                    ))}
                    {/* Chef silhouette */}
                    <div style={{ position: "absolute", bottom: "34%", right: "18%", width: 36, height: 80, background: "rgba(255,255,255,0.06)", borderRadius: "16px 16px 0 0" }} />
                    <div style={{ position: "absolute", bottom: "calc(34% + 80px)", right: "19.5%", width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
                    {/* Mealiez OS overlay */}
                    <div style={{
                      position: "absolute", top: 16, right: 12,
                      background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)",
                      borderRadius: 8, padding: "6px 12px",
                      fontSize: 9, color: "#FF6B35", fontWeight: 800, letterSpacing: "0.08em",
                    }}>
                      MEALIEZ OS
                    </div>
                    {/* Stat overlay */}
                    <div style={{
                      position: "absolute", bottom: "calc(35% + 8px)", left: 12,
                      background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)",
                      borderRadius: 8, padding: "6px 10px",
                    }}>
                      <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>MEALS TODAY</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#FF6B35" }}>15,284</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            THE CLIENT
        ════════════════════════════════════════ */}
        <section className="sec-cream">
          <div className="w">
            <div className="client-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, alignItems: "stretch" }}>

              {/* About card */}
              <div className="rv" style={{
                background: "#fff", border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 16, padding: "28px 24px",
              }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1a1a1a", marginBottom: 12, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>
                  The Client
                </h3>
                <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.72 }}>
                  Global Catering Inc. operates sophisticated corporate dining facilities across 40+ enterprise campuses nationwide.
                </p>
              </div>

              {/* Stat 1 */}
              <div className="rv d1" style={{
                background: "#fff", border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 16, padding: "28px 24px",
                display: "flex", flexDirection: "column", justifyContent: "center",
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>🍽️</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#FF6B35", letterSpacing: "-0.02em", fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>
                  15,000+
                </div>
                <p style={{ fontSize: 10, fontWeight: 800, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6 }}>
                  Daily Meals Served
                </p>
              </div>

              {/* Stat 2 */}
              <div className="rv d2" style={{
                background: "#fff", border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 16, padding: "28px 24px",
                display: "flex", flexDirection: "column", justifyContent: "center",
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>🏢</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#FF6B35", letterSpacing: "-0.02em", fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>
                  40+
                </div>
                <p style={{ fontSize: 10, fontWeight: 800, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6 }}>
                  Enterprise Locations
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            THE OPERATIONAL FRICTION
        ════════════════════════════════════════ */}
        <section className="sec-white">
          <div className="w">
            <div className="rv" style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{
                fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800,
                color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 14,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                The Operational Friction
              </h2>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.72, maxWidth: 500, margin: "0 auto" }}>
                Before Mealiez, scale was becoming a liability. Manual processes were creating cascading inefficiencies across the supply chain.
              </p>
            </div>

            <div className="friction-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {[
                {
                  icon: "⚠️",
                  bg: "rgba(255,107,53,0.08)",
                  border: "rgba(255,107,53,0.2)",
                  title: "Spreadsheet Chaos",
                  body: "Recipe scaling and inventory tracking were managed across disparate, easily corrupted Excel files, leading to frequent purchasing errors.",
                },
                {
                  icon: "📦",
                  bg: "rgba(168,85,247,0.08)",
                  border: "rgba(168,85,247,0.18)",
                  title: "Unpredictable Waste",
                  body: "Without real-time consumption data, production forecasts were essentially guesswork, resulting in high levels of avoidable food waste.",
                },
                {
                  icon: "🔒",
                  bg: "rgba(239,68,68,0.08)",
                  border: "rgba(239,68,68,0.18)",
                  title: "Compliance Lag",
                  body: "Temperature logging and safety compliance were manual paper processes, creating audit anxiety and delayed incident response.",
                },
              ].map((c, i) => (
                <div key={i} className={`prob-card rv d${i+1}`}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: c.bg, border: `1px solid ${c.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, marginBottom: 16,
                  }}>
                    {c.icon}
                  </div>
                  <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "#1a1a1a", marginBottom: 10, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.72 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PRECISION DEPLOYMENT
        ════════════════════════════════════════ */}
        <section className="sec-cream">
          <div className="w">
            <div className="deploy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

              {/* Left — tablet image */}
              <div className="rv screen-card" style={{ aspectRatio: "4/3", background: "linear-gradient(145deg,#1a1a2e,#16213e)", position: "relative", overflow: "hidden" }}>
                {/* Ambient glow */}
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 60%, rgba(255,107,53,0.15), transparent 65%)" }} />
                {/* Hand + tablet */}
                <div style={{
                  position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)",
                  width: 200, height: 140,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  display: "flex", flexDirection: "column", padding: 12, gap: 6,
                }}>
                  {/* Mock tablet UI */}
                  <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                    {["#FF6B35","rgba(255,255,255,0.2)","rgba(255,255,255,0.2)"].map((c,i) => (
                      <div key={i} style={{ height: 5, flex: i === 0 ? 2 : 1, background: c, borderRadius: 3 }} />
                    ))}
                  </div>
                  {[80,60,90,45].map((w, i) => (
                    <div key={i} style={{ height: 8, width: `${w}%`, background: "rgba(255,255,255,0.12)", borderRadius: 4 }} />
                  ))}
                  <div style={{ marginTop: 4, height: 20, background: "rgba(255,107,53,0.3)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ fontSize: 8, color: "#FF6B35", fontWeight: 700, letterSpacing: "0.06em" }}>CONFIRM ORDER</div>
                  </div>
                </div>
                {/* Bottle/condiment backdrop */}
                {[20, 35, 70, 82].map((l, i) => (
                  <div key={i} style={{
                    position: "absolute", bottom: "8%", left: `${l}%`,
                    width: 10 + (i % 2) * 4, height: 50 + (i % 3) * 12,
                    background: `rgba(255,${150 + i*20},100,0.15)`,
                    borderRadius: "4px 4px 2px 2px",
                  }} />
                ))}
              </div>

              {/* Right — copy */}
              <div className="rv d2">
                <h2 style={{
                  fontSize: "clamp(26px,3vw,38px)", fontWeight: 900,
                  color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 14,
                  fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                }}>
                  Precision Deployment
                </h2>
                <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.78, marginBottom: 28 }}>
                  We didn't just install software; we engineered a frictionless transition for their entire culinary floor.
                </p>
                <ul className="orange-list">
                  {[
                    { title: "48-Hour Onboarding", body: "Rapid digitisation of their core 500+ recipes into the Mealiez database." },
                    { title: "Hardware Integration", body: "Seamless connection with existing smart scales and thermal sensors." },
                    { title: "Zero-Training UI", body: "Intuitive kitchen display systems that prep teams adopted on day one." },
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="orange-dot" />
                      <div>
                        <strong>{item.title}</strong>
                        {item.body}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            THE TRANSFORMATION — Stats
        ════════════════════════════════════════ */}
        <section className="sec-white">
          <div className="w">
            <div className="rv" style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{
                fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800,
                color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 14,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                The Transformation
              </h2>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.72 }}>
                Quantifiable engineering excellence applied to culinary operations.
              </p>
            </div>

            <div className="stat-grid rv d1" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
              {[
                { val: "22%",  label: "Food Waste Reduction" },
                { val: "100%", label: "Billing Accuracy" },
                { val: "4.5h", label: "Weekly Admin Saved" },
                { val: "0",    label: "Compliance Lapses" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "#fdf6f0", border: "1px solid rgba(255,107,53,0.1)",
                  borderRadius: 16, padding: "28px 20px", textAlign: "center",
                }}>
                  <div className="stat-val">{s.val}</div>
                  <p style={{ fontSize: 10, fontWeight: 800, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 10 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            THE OPERATING SYSTEM — Screenshots
        ════════════════════════════════════════ */}
        <section className="sec-pale">
          <div className="w">
            <div className="rv" style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{
                fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800,
                color: "#1a1a1a", letterSpacing: "-0.025em",
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                The Operating System
              </h2>
            </div>

            <div className="screen-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

              {/* Dashboard screenshot mock */}
              <div className="rv screen-card">
                <div style={{ background: "#1e293b", padding: "10px 14px", display: "flex", gap: 5 }}>
                  {["#ef4444","#f59e0b","#22c55e"].map((c) => (
                    <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ background: "#f8fafc", padding: 20 }}>
                  {/* Sidebar + content */}
                  <div style={{ display: "flex", gap: 12 }}>
                    <div style={{ width: 80, display: "flex", flexDirection: "column", gap: 6 }}>
                      {["Dashboard","Analytics","Meals","Reports","Settings"].map((item) => (
                        <div key={item} style={{
                          padding: "5px 8px", borderRadius: 6, fontSize: 9, color: item === "Analytics" ? "#FF6B35" : "#888",
                          background: item === "Analytics" ? "rgba(255,107,53,0.08)" : "transparent", fontWeight: item === "Analytics" ? 700 : 400,
                        }}>
                          {item}
                        </div>
                      ))}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: 10, width: "60%", background: "#e5e7eb", borderRadius: 4, marginBottom: 12 }} />
                      {/* Mini chart */}
                      <div style={{ background: "#fff", borderRadius: 8, padding: 10, border: "1px solid #e5e7eb", marginBottom: 10 }}>
                        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 50 }}>
                          {[65,80,55,90,70,95,75,85].map((h, i) => (
                            <div key={i} style={{
                              flex: 1, height: `${h}%`,
                              background: i === 5 ? "#FF6B35" : "rgba(255,107,53,0.2)",
                              borderRadius: "2px 2px 0 0",
                              transition: "height 0.3s",
                            }} />
                          ))}
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                        {[["Meals","15,284"],["Waste","2.1%"]].map(([k,v]) => (
                          <div key={k} style={{ background: "#fff", borderRadius: 8, padding: "8px 10px", border: "1px solid #e5e7eb" }}>
                            <div style={{ fontSize: 8, color: "#aaa", marginBottom: 2 }}>{k}</div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "#FF6B35" }}>{v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile app screenshot mock */}
              <div className="rv d1 screen-card" style={{ background: "#fef6f0" }}>
                <div style={{ padding: "10px 14px", display: "flex", gap: 5, background: "rgba(255,107,53,0.06)", borderBottom: "1px solid rgba(255,107,53,0.1)" }}>
                  {["#ef4444","#f59e0b","#22c55e"].map((c) => (
                    <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
                  {/* Phone mockup */}
                  <div style={{
                    width: 160, background: "#fff", borderRadius: 20,
                    border: "2px solid rgba(0,0,0,0.1)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    padding: 12, overflow: "hidden",
                  }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>Customisations</div>
                    {[
                      { label: "Vegan", icon: "🌱", on: true },
                      { label: "Gluten-Free", icon: "🌾", on: false },
                      { label: "Halal", icon: "☪️", on: true },
                      { label: "Jain", icon: "🙏", on: false },
                    ].map((item) => (
                      <div key={item.label} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "7px 0", borderBottom: "1px solid #f3f4f6",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9 }}>
                          <span>{item.icon}</span>
                          <span style={{ color: "#333", fontWeight: 500 }}>{item.label}</span>
                        </div>
                        <div style={{
                          width: 28, height: 15, borderRadius: 8,
                          background: item.on ? "#FF6B35" : "#e5e7eb",
                          position: "relative",
                        }}>
                          <div style={{
                            width: 11, height: 11, borderRadius: "50%", background: "#fff",
                            position: "absolute", top: 2, transition: "left .2s",
                            left: item.on ? 15 : 2,
                            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                          }} />
                        </div>
                      </div>
                    ))}
                    <div style={{
                      marginTop: 12, background: "#FF6B35", borderRadius: 8,
                      padding: "8px", textAlign: "center",
                      fontSize: 9, fontWeight: 700, color: "#fff",
                    }}>
                      Save Preferences
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIAL
        ════════════════════════════════════════ */}
        <section className="sec-white">
          <div className="w-sm">
            <div className="rv" style={{ textAlign: "center" }}>
              {/* Quote mark */}
              <div style={{
                fontSize: 72, lineHeight: 1, color: "rgba(255,107,53,0.18)",
                fontFamily: "Georgia, serif", marginBottom: 8,
                fontWeight: 900,
              }}>
                "
              </div>
              <blockquote className="blockquote" style={{ fontStyle: "italic" }}>
                "Mealiez turned our operational chaos into a precision engine. It's not just software; it's a fundamental upgrade to how we run our kitchens."
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginTop: 28 }}>
                {/* Avatar */}
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "linear-gradient(135deg,#FF6B35,#FF875C)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, boxShadow: "0 4px 16px rgba(255,107,53,0.3)",
                }}>
                  👩‍💼
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 3 }}>Sarah Jenkins</p>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "#999", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    VP of Culinary Operations, Global Catering Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            BOTTOM RESOURCE LINKS
        ════════════════════════════════════════ */}
        <section className="sec-cream">
          <div className="w">
            <div className="rv" style={{ textAlign: "center", marginBottom: 44 }}>
              <h2 style={{
                fontSize: "clamp(22px,3vw,34px)", fontWeight: 800,
                color: "#1a1a1a", letterSpacing: "-0.025em",
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                More Resources
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {[
                { icon: "✍️", title: "Blog", desc: "Operational insights and industry trends from the Mealiez team.", href: "/blog", cta: "Read Articles" },
                { icon: "📘", title: "Guides", desc: "Step-by-step playbooks for modernising your food operations.", href: "/guides", cta: "Browse Guides" },
                { icon: "📊", title: "Reports", desc: "Data-driven research on food service automation and ROI.", href: "/reports", cta: "View Reports" },
              ].map((r, i) => (
                <div key={i} className={`prob-card rv d${i+1}`} style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{r.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 8, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>{r.title}</h3>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7, flex: 1, marginBottom: 18 }}>{r.desc}</p>
                  <Link href={r.href} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 13, fontWeight: 700, color: "#FF6B35", textDecoration: "none",
                  }}>
                    {r.cta}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA — Ready for your own transformation?
        ════════════════════════════════════════ */}
        <section style={{ padding: "64px 40px" }}>
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <div className="cta-card rv">
              <h2 style={{
                fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900,
                color: "#1a1a1a", letterSpacing: "-0.025em", marginBottom: 16,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                Ready for your own<br />transformation?
              </h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 32px" }}>
                Stop fighting spreadsheets. Start engineering your culinary operations for maximum output and precision.
              </p>
              <Link href="/book-demo" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg,#FF6B35,#FF875C)",
                color: "#fff", borderRadius: 12, padding: "15px 32px",
                fontSize: 15, fontWeight: 700, textDecoration: "none",
                boxShadow: "0 8px 28px rgba(255,107,53,0.38)",
              }}>
                Book a Technical Demo
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
