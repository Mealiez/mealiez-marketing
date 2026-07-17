"use client";

import React from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════
   MEALIEZ HOME — Glassmorphism Edition
═══════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Mesh background ── */
        .page-root {
          font-family: 'Inter', system-ui, sans-serif;
          background:
            radial-gradient(ellipse 80% 60% at 5% 20%,  rgba(255,107,53,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 95% 10%,  rgba(255,162,127,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 70% 70% at 50% 95%,  rgba(255,135,92,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 60%,  rgba(255,107,53,0.08) 0%, transparent 50%),
            #fef6f0;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Floating orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          animation: orb-float 8s ease-in-out infinite;
        }
        @keyframes orb-float {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-20px) scale(1.05); }
        }

        /* ── Glass card hover ── */
        .glass-card {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.85);
          box-shadow: 0 8px 32px rgba(31,38,135,0.06), inset 0 1px 0 rgba(255,255,255,0.9);
          border-radius: 20px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .glass-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(255,107,53,0.12), inset 0 1px 0 rgba(255,255,255,1);
        }
        .glass-strong {
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          border: 1px solid rgba(255,255,255,0.95);
          box-shadow: 0 12px 40px rgba(31,38,135,0.08), inset 0 1px 0 rgba(255,255,255,1);
          border-radius: 20px;
        }

        /* ── Buttons ── */
        .btn-primary {
          background: linear-gradient(135deg, #FF6B35, #FF875C);
          color: #fff; border: none; border-radius: 10px;
          padding: 13px 28px; font-size: 15px; font-weight: 700;
          cursor: pointer; text-decoration: none; display: inline-block;
          box-shadow: 0 6px 24px rgba(255,107,53,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(255,107,53,0.45);
        }
        .btn-outline {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          color: #222; border: 1.5px solid rgba(0,0,0,0.12);
          border-radius: 10px; padding: 13px 28px;
          font-size: 15px; font-weight: 600;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.9); border-color: rgba(255,107,53,0.3); }

        /* ── Section labels ── */
        .badge-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,107,53,0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,107,53,0.2);
          border-radius: 20px; padding: 5px 14px;
          font-size: 12px; color: #FF6B35; font-weight: 600;
        }
        .badge-tag {
          font-size: 10px; font-weight: 800; letter-spacing: 0.1em;
          color: #FF6B35; background: rgba(255,107,53,0.08);
          border: 1px solid rgba(255,107,53,0.2);
          border-radius: 5px; padding: 3px 8px; display: inline-block;
          margin-bottom: 14px;
        }

        /* ── Orange icon box ── */
        .icon-box {
          background: linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,135,92,0.08));
          border: 1px solid rgba(255,107,53,0.15);
          border-radius: 12px;
          display: inline-flex; align-items: center; justify-content: center;
          padding: 10px;
          backdrop-filter: blur(8px);
        }

        /* ── Check/X icons ── */
        .feat-check { display: flex; align-items: center; gap: 7px; font-size: 13.5px; color: #444; margin-bottom: 8px; }

        /* ── Section spacing ── */
        .sec { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
        .sec-title { font-size: 38px; font-weight: 800; color: #1a1a1a; text-align: center; margin-bottom: 12px; letter-spacing: -0.02em; }
        .sec-sub { font-size: 15px; color: #666; text-align: center; line-height: 1.68; margin-bottom: 48px; }

        /* ── Divider glow ── */
        .glow-divider {
          width: 60px; height: 3px; margin: 0 auto 12px;
          background: linear-gradient(90deg, #FF6B35, #FF875C);
          border-radius: 2px;
        }

        /* ── Stat strip ── */
        .stat-strip { background: rgba(255,235,220,0.6); backdrop-filter: blur(16px); border-top: 1px solid rgba(255,107,53,0.1); border-bottom: 1px solid rgba(255,107,53,0.1); }

        /* Pricing card */
        .pricing-pro {
          background: linear-gradient(145deg, #FF6B35 0%, #FF875C 60%, #FFA27F 100%);
          border-radius: 20px;
          box-shadow: 0 16px 56px rgba(255,107,53,0.4), inset 0 1px 0 rgba(255,255,255,0.25);
          position: relative;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pricing-pro:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 64px rgba(255,107,53,0.5);
        }

        /* resource card icon area */
        .resource-icon-bg {
          background: linear-gradient(135deg, rgba(255,107,53,0.06), rgba(255,162,127,0.04));
          display: flex; align-items: center; justify-content: center;
          height: 148px; border-bottom: 1px solid rgba(255,107,53,0.08);
        }

        /* CTA section */
        .cta-section {
          background:
            radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,107,53,0.08) 0%, transparent 70%),
            rgba(255,240,230,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,107,53,0.12);
          border-radius: 28px;
        }
      `}</style>

      <div className="page-root">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §1 HERO
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "64px 32px 56px" }}>
          {/* Floating orbs */}
          <div className="orb" style={{ width: 360, height: 360, background: "rgba(255,107,53,0.10)", top: -80, right: 0, animationDelay: "0s" }} />
          <div className="orb" style={{ width: 260, height: 260, background: "rgba(255,162,127,0.12)", bottom: -40, left: -60, animationDelay: "3s" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 52, position: "relative" }}>
            {/* Left */}
            <div style={{ flex: "0 0 430px" }}>
              <div className="badge-pill" style={{ marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B35", display: "inline-block", flexShrink: 0 }} />
                Enterprise Grade Mess Operations
              </div>

              <h1 style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.14, color: "#1a1a1a", marginBottom: 20, letterSpacing: "-0.025em" }}>
                Food Operations<br />Made <span style={{ background: "linear-gradient(135deg,#FF6B35,#FF875C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Effortless</span>
              </h1>

              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 36 }}>
                Streamline hostel, cafeteria, and food service operations with intelligent automation, real-time analytics, inventory management, attendance tracking, and powerful reporting. Gain complete visibility, improve efficiency, reduce costs, and deliver exceptional dining experiences through a single integrated platform.
              </p>

              <div style={{ display: "flex", gap: 12 }}>
                <Link href="/book-demo" className="btn-primary">Book Demo</Link>
                <Link href="/why-mealiez" className="btn-outline">Explore Architecture</Link>
              </div>
            </div>

            {/* Right — glassmorphic dashboard */}
            <div style={{ flex: 1, position: "relative" }}>
              <div style={{
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                border: "1px solid rgba(255,255,255,0.95)",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(255,107,53,0.12), 0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)"
              }}>
                {/* Window top bar */}
                <div style={{ background: "rgba(250,248,246,0.9)", padding: "10px 16px", borderBottom: "1px solid rgba(255,107,53,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />)}
                  </div>
                  <span style={{ fontSize: 11, color: "#ccc" }}>Dashboard — Dec 2025</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: 16 }}>
                  {/* Chart 1 */}
                  <div style={{ background: "rgba(255,107,53,0.04)", borderRadius: 12, padding: 12, border: "1px solid rgba(255,107,53,0.08)" }}>
                    <div style={{ fontSize: 10, color: "#bbb", marginBottom: 6 }}>Revenue</div>
                    <div style={{ height: 70, display: "flex", alignItems: "flex-end", gap: 2 }}>
                      {[45,60,52,78,65,88,72,90].map((h,i) => (
                        <div key={i} style={{ flex: 1, background: `linear-gradient(180deg, #FF6B35 0%, rgba(255,107,53,0.4) 100%)`, height: `${h}%`, borderRadius: "3px 3px 0 0", opacity: 0.7 + i*0.04 }} />
                      ))}
                    </div>
                  </div>
                  {/* Chart 2 */}
                  <div style={{ background: "rgba(255,107,53,0.04)", borderRadius: 12, padding: 12, border: "1px solid rgba(255,107,53,0.08)" }}>
                    <div style={{ fontSize: 10, color: "#bbb", marginBottom: 8 }}>Analytics</div>
                    <svg viewBox="0 0 100 50" width="100%" style={{ overflow: "visible" }}>
                      <defs>
                        <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0,40 C20,35 30,15 50,20 S80,10 100,5" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M0,45 C20,40 30,20 50,25 S80,15 100,10" fill="none" stroke="#fdd0bb" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  {/* Stat */}
                  <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: 12, padding: 14, border: "1px solid rgba(255,107,53,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#FF6B35" }}>$100k</div>
                    <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>+$100.93 ▲</div>
                  </div>
                  {/* Donut */}
                  <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: 12, padding: 10, border: "1px solid rgba(255,107,53,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="72" height="72" viewBox="0 0 72 72">
                      <circle cx="36" cy="36" r="28" fill="none" stroke="#f0e8e0" strokeWidth="10"/>
                      <circle cx="36" cy="36" r="28" fill="none" stroke="url(#og)" strokeWidth="10" strokeDasharray="106 70" strokeLinecap="round" transform="rotate(-90 36 36)"/>
                      <defs><linearGradient id="og" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#FF6B35"/><stop offset="1" stopColor="#FF875C"/></linearGradient></defs>
                      <text x="36" y="40" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1a1a1a">60%</text>
                    </svg>
                  </div>
                </div>

                {/* Throughput */}
                <div style={{ padding: "14px 20px", borderTop: "1px solid rgba(255,107,53,0.08)", display: "flex", alignItems: "center", gap: 14, background: "rgba(255,252,249,0.8)" }}>
                  <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#FF6B35,#FF875C)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(255,107,53,0.3)", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, marginBottom: 2 }}>Throughput</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
                      <span style={{ fontSize: 30, fontWeight: 900, color: "#1a1a1a" }}>4.2k</span>
                      <span style={{ fontSize: 13, color: "#999" }}>meals/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §2 TRUSTED BY
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="stat-strip">
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 32px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 28 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#FF6B35" }}>Trusted By</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: "500+ Customers" },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: "1M+ Meals Managed" },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, label: "99.9% Uptime" },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, label: "₹100M+ Savings Generated" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {s.icon}
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §3 WHY LEGACY METHODS FAIL
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="sec" style={{ paddingTop: 80, paddingBottom: 64 }}>
          <div className="glow-divider" />
          <h2 className="sec-title">Why Legacy Methods Fail</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>, title: "Unpredictable Waste", desc: "Manual headcounts lead to overproduction. Our data shows legacy systems average 15-20% daily food waste due to inaccurate forecasting." },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="3"/><circle cx="16" cy="15" r="3"/><line x1="8" y1="12" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="12"/><path d="M8 9h8"/></svg>, title: "Siloed Data", desc: "Spreadsheets don't communicate with procurement. Changes in attendance don't automatically adjust inventory requisitions in real-time." },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: "Administrative Drag", desc: "Facility managers spend an average of 14 hours a week reconciling meal chits, managing cut-offs, and handling exception requests manually." },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: "28px 24px" }}>
                <div className="icon-box" style={{ marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §4 ENGINEERED FOR SCALE
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="sec" style={{ paddingBottom: 72 }}>
          <div className="glow-divider" />
          <h2 className="sec-title">Engineered for Scale</h2>
          <p className="sec-sub">Move beyond basic spreadsheets. Discover a tactile, high-performance toolkit designed<br/>to handle thousands of transactions with zero friction.</p>

          {/* Row 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: 52, marginBottom: 56 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                <div className="icon-box" style={{ marginTop: 3 }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                <h3 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2 }}>Identity &amp; Cohort Logistics</h3>
              </div>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 20 }}>Maintain authoritative records of your entire dining population. Group individuals by dietary requirements, access tiers, or operational cohorts. The system automates lifecycle events from onboarding to offboarding automatically.</p>
              {["Automated credential provisioning via secure API.", "Real-time state synchronization across all terminal nodes."].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#444", marginBottom: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {t}
                </div>
              ))}
            </div>
            <div style={{ flex: "0 0 360px" }}>
              <div className="glass-strong" style={{ padding: "20px 22px" }}>
                {["Normansland Hotday","Colenso Assistercns","Captives quickdowns","Mabooms 1st pClass","Porcine Pitoras","Soras Words"].map((name, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 5 ? "1px solid rgba(255,107,53,0.06)" : "none" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,162,127,0.1))", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#888" }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: "flex", alignItems: "center", gap: 52 }}>
            <div style={{ flex: "0 0 360px" }}>
              <div style={{
                background: "linear-gradient(160deg, #111 0%, #1e1e1e 50%, #0d0d0d 100%)",
                borderRadius: 20, height: 300,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)"
              }}>
                <div style={{ width: 180, height: 240, background: "linear-gradient(180deg,#1a1a1a,#0d0d0d)", borderRadius: 28, border: "1.5px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16, boxShadow: "0 0 60px rgba(255,107,53,0.12)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 3, padding: 16 }}>
                    {Array.from({ length: 49 }, (_, i) => {
                      const filled = [0,1,2,7,14,8,15,6,5,4,3,42,43,44,49-1,48,47,40,41,35,34];
                      return <div key={i} style={{ width: 6, height: 6, background: (filled.includes(i) || (i > 15 && i < 35 && Math.random() > 0.4)) ? "rgba(255,107,53,0.9)" : "rgba(255,255,255,0.05)", borderRadius: 1 }} />;
                    })}
                  </div>
                  <div style={{ width: 40, height: 4, borderRadius: 2, background: "linear-gradient(90deg,#FF6B35,#FF875C)" }} />
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                <div className="icon-box" style={{ marginTop: 3 }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div>
                <h3 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2 }}>High-Velocity Access<br/>Control</h3>
              </div>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 20 }}>Eliminate bottleneck queues during peak service hours. Our proprietary scanning protocol ensures sub-second authentication, maintaining flow while generating immutable attendance logs.</p>
              {["Sub-100ms validation latency at the edge.", "Offline resilience mode ensures continuous operation."].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#444", marginBottom: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §5 FEATURES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="sec" style={{ paddingBottom: 72 }}>
          <div className="glow-divider" />
          <h2 className="sec-title">Features</h2>
          <p className="sec-sub">Advanced telemetry and control mechanisms for comprehensive mess operations.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { badge: "INVENTORY", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: "Smart Inventory", desc: "Real-time stock tracking with predictive depletion alerts. Automate vendor reordering based on historical consumption velocity.", checks: ["automated PO generation","par level alerting"] },
              { badge: "HARDWARE", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>, title: "IoT Attendance", desc: "Seamlessly integrate with biometric and RFID hardware endpoints. Deploy remote node management from a central dashboard.", checks: ["hardware agnostic","remote diagnostics"] },
              { badge: "INTELLIGENCE", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: "Real-time Analytics", desc: "Granular insights into dining patterns, peak loads, and cost per meal. Export standardized reports for institutional compliance.", checks: ["custom metric dashboards","API data pipelines"] },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: "26px 22px" }}>
                <span className="badge-tag">{item.badge}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>{item.icon}<h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a" }}>{item.title}</h3></div>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.68, marginBottom: 16 }}>{item.desc}</p>
                {item.checks.map((c, j) => (
                  <div key={j} className="feat-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>{c}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §6 CONNECT SUPPLY WITH DEMAND
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="sec" style={{ paddingBottom: 80 }}>
          <div className="glow-divider" />
          <h2 className="sec-title">Connect supply with precise demand.</h2>
          <div style={{ display: "flex", gap: 20, marginTop: 52 }}>
            <div style={{ flex: "0 0 490px" }}>
              <div style={{ background: "linear-gradient(135deg, rgba(240,232,224,0.8), rgba(224,216,208,0.8))", backdropFilter: "blur(12px)", borderRadius: 16, height: 268, border: "1px solid rgba(200,192,184,0.5)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <svg width="90%" height="90%" viewBox="0 0 400 240" fill="none">
                  {[[0,80,400,80],[0,160,400,160],[100,0,100,240],[240,0,240,240],[340,0,340,240]].map(([x1,y1,x2,y2],i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
                  ))}
                  {[[80,60],[160,130],[280,50],[320,160],[200,190]].map(([x,y],i) => (
                    <g key={i}><circle cx={x} cy={y} r="12" fill="rgba(180,172,164,0.4)"/><circle cx={x} cy={y} r="5" fill="#aaa"/></g>
                  ))}
                </svg>
              </div>
              <div style={{ marginTop: 22 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>Intelligent Indexing</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>List your facility in the centralized directory. Allow potential patrons to query your location, capacity, and menu specifications using advanced parametric search.</p>
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>, title: "Reputation Engine", desc: "Aggregated trust metrics and verified reviews drive organic acquisition." },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: "Demand Forecasting", desc: "Predictive analytics based on search velocity in your geographic sector." },
              ].map((item, i) => (
                <div key={i} className="glass-card" style={{ padding: "24px 20px", flex: 1 }}>
                  <div style={{ marginBottom: 10 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §7 SOLUTIONS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="sec" style={{ paddingBottom: 72 }}>
          <div className="glow-divider" />
          <h2 className="sec-title">Solutions</h2>
          <p className="sec-sub">Specialized configurations designed to meet the rigorous demands of distinct institutional environments.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, title: "Higher Ed", desc: "Handle massive concurrent loads during class changeovers with student ID integration and meal plan ledger management." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><path d="M12 8v8M8 12h8"/></svg>, title: "Healthcare", desc: "Strict dietary compliance tracking, visitor access provisioning, and 24/7 operational resilience protocols." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: "Corporate Dining", desc: "Frictionless payroll deduction integration, subsidized meal tracking, and premium guest hospitality workflows." },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: "32px 24px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  <div className="icon-box">{item.icon}</div>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §8 PRICING
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="sec" style={{ paddingBottom: 80 }}>
          <div className="glow-divider" />
          <h2 className="sec-title">Simple Pricing</h2>
          <p className="sec-sub" style={{ marginBottom: 44 }}>Choose the plan that&apos;s right for your mess. No hidden fees.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "start" }}>
            {/* Free */}
            <div className="glass-card" style={{ padding: "28px 24px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 14 }}>Free Plan</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 26 }}>
                <span style={{ fontSize: 38, fontWeight: 900, color: "#1a1a1a" }}>₹0</span>
                <span style={{ fontSize: 14, color: "#999" }}>/forever</span>
              </div>
              {[{t:"List on Marketplace",ok:true},{t:"Basic Mess Info Page",ok:true},{t:"Update or Add plans",ok:true},{t:"No Student Management",ok:false},{t:"No Attendance Tracking",ok:false}].map((f,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color: f.ok ? "#444":"#aaa", marginBottom:10 }}>
                  {f.ok ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
                  {f.t}
                </div>
              ))}
              <button style={{ width:"100%", marginTop:22, padding:"12px 0", borderRadius:10, background:"rgba(255,107,53,0.08)", color:"#FF6B35", fontWeight:700, fontSize:15, border:"1px solid rgba(255,107,53,0.2)", cursor:"pointer" }}>Get Started</button>
            </div>
            {/* Starter */}
            <div className="glass-card" style={{ padding: "28px 24px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 14 }}>Starter Plan</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 26 }}>
                <span style={{ fontSize: 38, fontWeight: 900, color: "#1a1a1a" }}>₹499</span>
                <span style={{ fontSize: 14, color: "#999" }}>/month</span>
              </div>
              {["List on Marketplace","Up to 50 Students","QR Attendance System","Menu Management","Student Management"].map((f,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color:"#444", marginBottom:10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>{f}
                </div>
              ))}
              <button style={{ width:"100%", marginTop:22, padding:"12px 0", borderRadius:10, background:"rgba(255,107,53,0.08)", color:"#FF6B35", fontWeight:700, fontSize:15, border:"1px solid rgba(255,107,53,0.2)", cursor:"pointer" }}>Choose Starter</button>
            </div>
            {/* Pro */}
            <div className="pricing-pro" style={{ padding: "28px 24px" }}>
              <div style={{ position:"absolute", top:-15, left:"50%", transform:"translateX(-50%)", background:"#fff", border:"1px solid rgba(255,107,53,0.2)", color:"#FF6B35", fontSize:10, fontWeight:800, letterSpacing:"0.12em", padding:"4px 14px", borderRadius:20, whiteSpace:"nowrap", boxShadow:"0 2px 8px rgba(255,107,53,0.15)" }}>MOST POPULAR</div>
              <h3 style={{ fontSize:18, fontWeight:700, color:"#fff", marginBottom:14 }}>Pro Plan</h3>
              <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:26 }}>
                <span style={{ fontSize:38, fontWeight:900, color:"#fff" }}>₹799</span>
                <span style={{ fontSize:14, color:"rgba(255,255,255,0.75)" }}>/month</span>
              </div>
              <div style={{ fontSize:14, color:"rgba(255,255,255,0.8)", marginBottom:14 }}>Everything in Starter, plus:</div>
              {["Up to 100 Students","Full Payment Management","Advanced Analytics","On-site Setup & Training"].map((f,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color:"#fff", fontWeight:500, marginBottom:10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>{f}
                </div>
              ))}
              <button style={{ width:"100%", marginTop:22, padding:"12px 0", borderRadius:10, background:"rgba(255,255,255,0.95)", color:"#FF6B35", fontWeight:800, fontSize:15, border:"none", cursor:"pointer", boxShadow:"0 4px 16px rgba(0,0,0,0.15)" }}>Choose Pro</button>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §9 CUSTOMERS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="sec" style={{ paddingBottom: 72 }}>
          <div className="glow-divider" />
          <h2 className="sec-title">Customers</h2>
          <p className="sec-sub" style={{ marginBottom: 40 }}>Deploying operational excellence across hundreds of enterprise campuses globally.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { quote: '"Mealiez fundamentally re-architected our dining logistics. The real-time telemetry allowed us to identify inefficiencies instantly. We saw a 40% waste reduction in the first quarter."', name:"Sarah Jenkins", role:"Director of Operations, Apex University", org:"APEX" },
              { quote: '"The frictionless access control eliminated our peak-hour queues entirely. Our employees report a significantly improved dining experience, and our administrative overhead is virtually zero."', name:"Marcus Thorne", role:"Facilities Lead, Nexus Tech", org:"NEXUS" },
            ].map((t, i) => (
              <div key={i} className="glass-card" style={{ padding: "28px 26px" }}>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>{t.quote}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <p style={{ fontWeight: 700, color: "#1a1a1a", marginBottom: 3, fontSize: 14 }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: "#999" }}>{t.role}</p>
                  </div>
                  <span style={{ fontWeight: 800, background: "linear-gradient(135deg,#FF6B35,#FF875C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 15, letterSpacing: "0.06em" }}>{t.org}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §10 RESOURCES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="sec" style={{ paddingBottom: 80 }}>
          <div className="glow-divider" />
          <h2 className="sec-title">Resources</h2>
          <p className="sec-sub" style={{ marginBottom: 40 }}>Technical documentation, architectural guides, and implementation case studies.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { icon: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, badge:"WHITEPAPER", title:"Optimizing RFID Throughput in High-Density Environments" },
              { icon: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, badge:"CASE STUDY", title:"Achieving Sub-Second Latency: The State University Migration" },
              { icon: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, badge:"DOCUMENTATION", title:"Mealiez API v2: Integrating Payroll Deductions" },
            ].map((r, i) => (
              <div key={i} className="glass-card" style={{ overflow: "hidden", cursor: "pointer" }}>
                <div className="resource-icon-bg">{r.icon}</div>
                <div style={{ padding: "18px 20px" }}>
                  <span className="badge-tag">{r.badge}</span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.5 }}>{r.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            §11 FINAL CTA
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="sec" style={{ paddingBottom: 96 }}>
          <div className="cta-section" style={{ padding: "80px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            {/* background orbs */}
            <div style={{ position:"absolute", width:300, height:300, borderRadius:"50%", background:"rgba(255,107,53,0.08)", filter:"blur(60px)", top:-80, left:"50%", transform:"translateX(-50%)", pointerEvents:"none" }} />
            <h2 style={{ fontSize: 52, fontWeight: 900, color: "#FF6B35", lineHeight: 1.16, marginBottom: 20, letterSpacing: "-0.025em", position:"relative" }}>
              Ready to bring precision to your mess hall?
            </h2>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.72, fontWeight: 500, maxWidth: 640, margin: "0 auto 40px", position:"relative" }}>
              Schedule a specialized demo to see exactly how Mealiez can transform your hostel catering operations, reduce waste, and improve student satisfaction.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position:"relative" }}>
              <Link href="/book-demo" className="btn-primary" style={{ padding: "15px 32px", fontSize: 16 }}>
                Book a Specialized Demo
              </Link>
              <Link href="/resources" className="btn-outline" style={{ padding: "15px 32px", fontSize: 16 }}>
                Calculate Your Savings ROI
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
