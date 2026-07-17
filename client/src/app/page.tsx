"use client";

import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   MEALIEZ HOME PAGE — exact clone of the provided design screenshots
═══════════════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', system-ui, sans-serif; }
        .page-bg { background: #fdf5f0; }
        .btn-orange {
          background: #FF6B35; color: #fff; border: none;
          border-radius: 8px; padding: 11px 22px;
          font-size: 14px; font-weight: 600; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: background 0.15s;
        }
        .btn-orange:hover { background: #e55e28; }
        .btn-white {
          background: #fff; color: #222; border: 1.5px solid #e0d8d0;
          border-radius: 8px; padding: 11px 22px;
          font-size: 14px; font-weight: 600; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: border-color 0.15s;
        }
        .btn-white:hover { border-color: #ccc; }
        .card {
          background: #fff; border-radius: 16px;
          border: 1px solid #f0e8e0;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04);
        }
        .check-icon { color: #22c55e; display: inline-flex; flex-shrink: 0; }
        .x-icon { color: #aaa; display: inline-flex; flex-shrink: 0; }
        .orange-icon-box {
          background: #fff3ee; border-radius: 10px;
          padding: 8px; display: inline-flex;
          align-items: center; justify-content: center;
        }
        .section-title {
          font-size: 36px; font-weight: 800; color: #1a1a1a;
          text-align: center; margin-bottom: 12px;
        }
        .section-sub {
          font-size: 15px; color: #666; text-align: center;
          line-height: 1.65; margin-bottom: 48px;
        }
        .badge-sm {
          font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
          color: #FF6B35; border: 1px solid #fdd0bb;
          border-radius: 4px; padding: 2px 8px;
          display: inline-block; margin-bottom: 14px;
        }
        .feature-check { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #555; margin-bottom: 6px; }
      `}</style>

      <div className="page-bg">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1 · HERO
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 32px 48px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 48 }}>

            {/* ── Left text ── */}
            <div style={{ flex: "0 0 430px", paddingTop: 8 }}>
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "#fff3ee", border: "1px solid #fdd0bb",
                borderRadius: 20, padding: "5px 14px", marginBottom: 22
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#FF6B35", display: "inline-block", flexShrink: 0
                }} />
                <span style={{ fontSize: 12, color: "#FF6B35", fontWeight: 500 }}>
                  Enterprise Grade Mess Operations
                </span>
              </div>

              <h1 style={{
                fontSize: 38, fontWeight: 800, lineHeight: 1.18,
                color: "#1a1a1a", marginBottom: 18, letterSpacing: "-0.01em"
              }}>
                Food Operations Made Effortless
              </h1>

              <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.72, marginBottom: 32 }}>
                Streamline hostel, cafeteria, and food service operations with intelligent
                automation, real-time analytics, inventory management, attendance tracking,
                and powerful reporting. Gain complete visibility, improve efficiency, reduce
                costs, and deliver exceptional dining experiences through a single integrated
                platform.
              </p>

              <div style={{ display: "flex", gap: 12 }}>
                <Link href="/book-demo" className="btn-orange">Book Demo</Link>
                <Link href="/why-mealiez" className="btn-white">Explore Architecture</Link>
              </div>
            </div>

            {/* ── Right dashboard placeholder ── */}
            <div style={{ flex: 1, position: "relative" }}>
              {/* Main dashboard card */}
              <div style={{
                background: "#fff", borderRadius: 16,
                boxShadow: "0 4px 40px rgba(0,0,0,0.10)",
                border: "1px solid #f0e8e0", overflow: "hidden"
              }}>
                {/* top bar */}
                <div style={{
                  background: "#fafafa", padding: "10px 16px",
                  borderBottom: "1px solid #f0e8e0",
                  display: "flex", alignItems: "center", justifyContent: "space-between"
                }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["#ff5f57","#febc2e","#28c840"].map(c => (
                      <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                  <span style={{ fontSize: 11, color: "#bbb" }}>Dashboard — Last: Dec 2025</span>
                </div>

                {/* grid of chart placeholders */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  gap: 12, padding: 16, background: "#fafafa"
                }}>
                  {[
                    { label: "Revenue Chart", h: 100 },
                    { label: "Analytics View", h: 100 },
                    { label: "Sales Per Period", h: 90 },
                    { label: "Performance", h: 90 },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: "#fff", borderRadius: 10,
                      border: "1px solid #f0e8e0", padding: 10,
                      height: item.h + 40
                    }}>
                      <div style={{ fontSize: 10, color: "#bbb", marginBottom: 6 }}>{item.label}</div>
                      <div style={{
                        height: item.h - 16,
                        background: "linear-gradient(135deg, #fff3ee 0%, #ffe8d6 100%)",
                        borderRadius: 6,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {i === 0 && (
                          <svg width="80%" height="60%" viewBox="0 0 100 40" fill="none">
                            <polyline points="0,35 20,20 40,28 60,10 80,18 100,5" stroke="#FF6B35" strokeWidth="2" fill="none" strokeLinecap="round"/>
                            <polyline points="0,38 20,30 40,35 60,25 80,28 100,20" stroke="#fdd0bb" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                          </svg>
                        )}
                        {i === 1 && (
                          <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: "80%", padding: "0 8px" }}>
                            {[60,80,55,90,70,85,75].map((h, j) => (
                              <div key={j} style={{
                                flex: 1, background: j % 2 === 0 ? "#FF6B35" : "#fdd0bb",
                                height: `${h}%`, borderRadius: 2
                              }} />
                            ))}
                          </div>
                        )}
                        {i === 2 && (
                          <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 20, fontWeight: 800, color: "#FF6B35" }}>$100,000</div>
                            <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>$100.93 ▲</div>
                          </div>
                        )}
                        {i === 3 && (
                          <svg width="80" height="80" viewBox="0 0 80 80">
                            <circle cx="40" cy="40" r="30" fill="none" stroke="#f0e8e0" strokeWidth="12"/>
                            <circle cx="40" cy="40" r="30" fill="none" stroke="#FF6B35" strokeWidth="12"
                              strokeDasharray="113 75" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 40 40)"/>
                            <text x="40" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">60%</text>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Throughput stat */}
                <div style={{
                  padding: "14px 20px", borderTop: "1px solid #f5ede6",
                  display: "flex", alignItems: "center", gap: 16
                }}>
                  <div style={{
                    width: 32, height: 32, background: "#fff3ee", borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#888", fontWeight: 500, marginBottom: 2 }}>Throughput</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
                      <span style={{ fontSize: 28, fontWeight: 800, color: "#1a1a1a" }}>4.2k</span>
                      <span style={{ fontSize: 13, color: "#999" }}>meals/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2 · TRUSTED BY
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ background: "#fef0e8", padding: "36px 32px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* "Trusted By" label */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 7, marginBottom: 26
            }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#FF6B35" }}>Trusted By</span>
            </div>

            {/* 4 stats */}
            <div style={{
              display: "flex", justifyContent: "space-between",
              flexWrap: "wrap", gap: 20
            }}>
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                  label: "500+ Customers"
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  ),
                  label: "1M+ Meals Managed"
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  ),
                  label: "99.9% Uptime"
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  ),
                  label: "₹100M+ Savings Generated"
                },
              ].map((stat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {stat.icon}
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3 · WHY LEGACY METHODS FAIL
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 32px 60px" }}>
          <h2 className="section-title">Why Legacy Methods Fail</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
                    <path d="M10 11v6M14 11v6"/>
                  </svg>
                ),
                title: "Unpredictable Waste",
                desc: "Manual headcounts lead to overproduction. Our data shows legacy systems average 15-20% daily food waste due to inaccurate forecasting.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="9" r="3"/><circle cx="16" cy="15" r="3"/>
                    <line x1="8" y1="12" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="12"/>
                    <path d="M8 9h8"/>
                  </svg>
                ),
                title: "Siloed Data",
                desc: "Spreadsheets don't communicate with procurement. Changes in attendance don't automatically adjust inventory requisitions in real-time.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                title: "Administrative Drag",
                desc: "Facility managers spend an average of 14 hours a week reconciling meal chits, managing cut-offs, and handling exception requests manually.",
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: "28px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  {item.icon}
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a" }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.68 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4 · ENGINEERED FOR SCALE
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 72px" }}>
          <h2 className="section-title">Engineered for Scale</h2>
          <p className="section-sub">
            Move beyond basic spreadsheets. Discover a tactile, high-performance toolkit designed<br/>
            to handle thousands of transactions with zero friction.
          </p>

          {/* Row 1: text left, list-card right */}
          <div style={{ display: "flex", alignItems: "center", gap: 52, marginBottom: 56 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                <div className="orange-icon-box" style={{ marginTop: 3 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2 }}>
                  Identity &amp; Cohort Logistics
                </h3>
              </div>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.72, marginBottom: 20 }}>
                Maintain authoritative records of your entire dining population. Group individuals by dietary requirements,
                access tiers, or operational cohorts. The system and less complex lifecycle events from onboarding to off
                boarding automatically.
              </p>
              <div>
                {[
                  "Automated credential provisioning via secure API.",
                  "Real-time state synchronization across all terminal nodes.",
                ].map((text, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#444", marginBottom: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: "0 0 380px" }}>
              <div className="card" style={{ padding: "20px 24px" }}>
                {["Normansland Hotday","Colenso Assistercns","Captives quickdowns","Mabooms 1st pClass","Porcine Pitoras","Soras Words"].map((name, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "11px 0",
                    borderBottom: i < 5 ? "1px solid #f5ede6" : "none"
                  }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#f0e8e0", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#888" }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: image left, text right */}
          <div style={{ display: "flex", alignItems: "center", gap: 52 }}>
            <div style={{ flex: "0 0 380px" }}>
              <div style={{
                background: "linear-gradient(160deg, #111 0%, #222 50%, #1a1a1a 100%)",
                borderRadius: 16, height: 300,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden"
              }}>
                {/* Phone silhouette placeholder */}
                <div style={{
                  width: 180, height: 240,
                  background: "linear-gradient(180deg, #1c1c1c 0%, #111 100%)",
                  borderRadius: 28, border: "2px solid #333",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexDirection: "column", gap: 10,
                  boxShadow: "0 0 40px rgba(255,107,53,0.15)"
                }}>
                  {/* QR code grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2, padding: 12 }}>
                    {Array.from({ length: 49 }, (_, i) => {
                      const corners = [0,1,2,3,4,5,6,7,13,14,20,21,27,28,34,35,41,42,43,44,45,46,48];
                      const isOn = corners.includes(i) || Math.random() > 0.5;
                      return (
                        <div key={i} style={{
                          width: 6, height: 6,
                          background: isOn ? "#FF6B35" : "#333",
                          borderRadius: 1
                        }} />
                      );
                    })}
                  </div>
                  <div style={{
                    width: 36, height: 5, borderRadius: 3,
                    background: "#FF6B35", marginTop: 4
                  }} />
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                <div className="orange-icon-box" style={{ marginTop: 3 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2 }}>
                  High-Velocity Access<br/>Control
                </h3>
              </div>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.72, marginBottom: 20 }}>
                Eliminate bottleneck queues during peak service hours. Our proprietary scanning protocol ensures sub-second
                authentication, maintaining flow while generating immutable attendance logs.
              </p>
              <div>
                {[
                  "Sub-100ms validation latency at the edge.",
                  "Offline resilience mode ensures continuous operation.",
                ].map((text, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#444", marginBottom: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 5 · FEATURES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 72px" }}>
          <h2 className="section-title">Features</h2>
          <p className="section-sub">
            Advanced telemetry and control mechanisms for comprehensive mess operations.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              {
                badge: "INVENTORY",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
                title: "Smart Inventory",
                desc: "Real-time stock tracking with predictive depletion alerts. Automate vendor reordering based on historical consumption velocity.",
                checks: ["automated PO generation","par level alerting"],
              },
              {
                badge: "HARDWARE",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>,
                title: "IoT Attendance",
                desc: "Seamlessly integrate with biometric and RFID hardware endpoints. Deploy remote node management from a central dashboard.",
                checks: ["hardware agnostic","remote diagnostics"],
              },
              {
                badge: "INTELLIGENCE",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                title: "Real-time Analytics",
                desc: "Granular insights into dining patterns, peak loads, and cost per meal. Export standardized reports for institutional compliance.",
                checks: ["custom metric dashboards","API data pipelines"],
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: "26px 22px" }}>
                <span className="badge-sm">{item.badge}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  {item.icon}
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a" }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, marginBottom: 16 }}>{item.desc}</p>
                {item.checks.map((c, j) => (
                  <div key={j} className="feature-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {c}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 6 · CONNECT SUPPLY WITH PRECISE DEMAND
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: 52 }}>
            Connect supply with precise demand.
          </h2>
          <div style={{ display: "flex", gap: 20 }}>
            {/* Left: map placeholder + label */}
            <div style={{ flex: "0 0 490px" }}>
              {/* Map image placeholder */}
              <div style={{
                background: "linear-gradient(135deg, #ede8e0 0%, #ddd8d0 100%)",
                borderRadius: 16, height: 268, overflow: "hidden",
                border: "1px solid #e0d8d0",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative"
              }}>
                {/* Placeholder roads/map */}
                <svg width="90%" height="90%" viewBox="0 0 400 240" fill="none">
                  <line x1="0" y1="80" x2="400" y2="80" stroke="#fff" strokeWidth="2" opacity="0.6"/>
                  <line x1="0" y1="160" x2="400" y2="160" stroke="#fff" strokeWidth="2" opacity="0.6"/>
                  <line x1="100" y1="0" x2="100" y2="240" stroke="#fff" strokeWidth="2" opacity="0.6"/>
                  <line x1="240" y1="0" x2="240" y2="240" stroke="#fff" strokeWidth="2" opacity="0.6"/>
                  <line x1="340" y1="0" x2="340" y2="240" stroke="#fff" strokeWidth="2" opacity="0.6"/>
                  {[
                    [80, 60],[160, 130],[280, 50],[320, 160],[200, 190]
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="10" fill="#aaa" opacity="0.5"/>
                      <circle cx={x} cy={y} r="4" fill="#888"/>
                    </g>
                  ))}
                </svg>
              </div>

              <div style={{ marginTop: 22, paddingLeft: 4 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>
                  Intelligent Indexing
                </h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.68 }}>
                  List your facility in the centralized directory. Allow potential patrons to query your location,
                  capacity, and menu specifications using advanced parametric search.
                </p>
              </div>
            </div>

            {/* Right: stacked cards */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
                  title: "Reputation Engine",
                  desc: "Aggregated trust metrics and verified reviews drive organic acquisition.",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
                  title: "Demand Forecasting",
                  desc: "Predictive analytics based on search velocity in your geographic sector.",
                },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: "22px 20px", flex: 1 }}>
                  <div style={{ marginBottom: 10 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 7 · SOLUTIONS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 72px" }}>
          <h2 className="section-title">Solutions</h2>
          <p className="section-sub">
            Specialized configurations designed to meet the rigorous demands of distinct institutional environments.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              {
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
                title: "Higher Ed",
                desc: "Handle massive concurrent loads during class changeovers with student ID integration and meal plan ledger management.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><path d="M12 8v8M8 12h8"/></svg>,
                title: "Healthcare",
                desc: "Strict dietary compliance tracking, visitor access provisioning, and 24/7 operational resilience protocols.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
                title: "Corporate Dining",
                desc: "Frictionless payroll deduction integration, subsidized meal tracking, and premium guest hospitality workflows.",
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: "32px 24px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.68 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 8 · SIMPLE PRICING
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-sub" style={{ marginBottom: 40 }}>
            Choose the plan that&apos;s right for your mess. No hidden fees.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "start" }}>

            {/* Free */}
            <div className="card" style={{ padding: "28px 24px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 14 }}>Free Plan</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 26 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#1a1a1a" }}>₹0</span>
                <span style={{ fontSize: 14, color: "#999" }}>/forever</span>
              </div>
              {[
                { text: "List on Marketplace", ok: true },
                { text: "Basic Mess Info Page", ok: true },
                { text: "Update or Add plans", ok: true },
                { text: "No Student Management", ok: false },
                { text: "No Attendance Tracking", ok: false },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: f.ok ? "#444" : "#aaa", marginBottom: 10 }}>
                  {f.ok
                    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  }
                  {f.text}
                </div>
              ))}
              <button style={{
                width: "100%", marginTop: 22, padding: "12px 0", borderRadius: 8,
                background: "#fff3ee", color: "#FF6B35", fontWeight: 600, fontSize: 15,
                border: "1px solid #fdd0bb", cursor: "pointer"
              }}>Get Started</button>
            </div>

            {/* Starter */}
            <div className="card" style={{ padding: "28px 24px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 14 }}>Starter Plan</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 26 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#1a1a1a" }}>₹499</span>
                <span style={{ fontSize: 14, color: "#999" }}>/month</span>
              </div>
              {["List on Marketplace","Up to 50 Students","QR Attendance System","Menu Management","Student Management"].map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#444", marginBottom: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {f}
                </div>
              ))}
              <button style={{
                width: "100%", marginTop: 22, padding: "12px 0", borderRadius: 8,
                background: "#fff3ee", color: "#FF6B35", fontWeight: 600, fontSize: 15,
                border: "1px solid #fdd0bb", cursor: "pointer"
              }}>Choose Starter</button>
            </div>

            {/* Pro */}
            <div style={{
              background: "#FF6B35", borderRadius: 16, padding: "28px 24px",
              boxShadow: "0 8px 36px rgba(255,107,53,0.32)", position: "relative"
            }}>
              <div style={{
                position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)",
                background: "#fff", border: "1px solid #fdd0bb",
                color: "#FF6B35", fontSize: 10, fontWeight: 800, letterSpacing: "0.12em",
                padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap"
              }}>MOST POPULAR</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 14 }}>Pro Plan</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 26 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#fff" }}>₹799</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>/month</span>
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginBottom: 12 }}>
                Everything in Starter, plus:
              </div>
              {["Up to 100 Students","Full Payment Management","Advanced Analytics","On-site Setup & Training"].map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#fff", fontWeight: 500, marginBottom: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {f}
                </div>
              ))}
              <button style={{
                width: "100%", marginTop: 22, padding: "12px 0", borderRadius: 8,
                background: "#fff", color: "#FF6B35", fontWeight: 700, fontSize: 15,
                border: "none", cursor: "pointer"
              }}>Choose Pro</button>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 9 · CUSTOMERS / TESTIMONIALS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 72px" }}>
          <h2 className="section-title">Customers</h2>
          <p className="section-sub" style={{ marginBottom: 40 }}>
            Deploying operational excellence across hundreds of enterprise campuses globally.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              {
                quote: '"Mealiez fundamentally re-architected our dining logistics. The real-time telemetry allowed us to identify inefficiencies instantly. We saw a 40% waste reduction in the first quarter."',
                name: "Sarah Jenkins",
                role: "Director of Operations, Apex University",
                org: "APEX",
              },
              {
                quote: '"The frictionless access control eliminated our peak-hour queues entirely. Our employees report a significantly improved dining experience, and our administrative overhead is virtually zero."',
                name: "Marcus Thorne",
                role: "Facilities Lead, Nexus Tech",
                org: "NEXUS",
              },
            ].map((t, i) => (
              <div key={i} className="card" style={{ padding: "28px 26px" }}>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.78, marginBottom: 22, fontStyle: "italic" }}>{t.quote}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <p style={{ fontWeight: 700, color: "#1a1a1a", marginBottom: 3, fontSize: 14 }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: "#999" }}>{t.role}</p>
                  </div>
                  <span style={{ fontWeight: 800, color: "#FF6B35", fontSize: 14, letterSpacing: "0.06em" }}>{t.org}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 10 · RESOURCES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 72px" }}>
          <h2 className="section-title">Resources</h2>
          <p className="section-sub" style={{ marginBottom: 40 }}>
            Technical documentation, architectural guides, and implementation case studies.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              {
                icon: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
                badge: "WHITEPAPER",
                title: "Optimizing RFID Throughput in High-Density Environments",
              },
              {
                icon: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
                badge: "CASE STUDY",
                title: "Achieving Sub-Second Latency: The State University Migration",
              },
              {
                icon: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
                badge: "DOCUMENTATION",
                title: "Mealiez API v2: Integrating Payroll Deductions",
              },
            ].map((r, i) => (
              <div key={i} className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
                <div style={{
                  background: "#fdf5f0", height: 148,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderBottom: "1px solid #f0e8e0"
                }}>
                  {r.icon}
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                    color: "#FF6B35", display: "inline-block", marginBottom: 8
                  }}>{r.badge}</span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.5 }}>{r.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 11 · FINAL CTA
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ background: "#fdf0ea", padding: "88px 32px 96px", textAlign: "center" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{
              fontSize: 52, fontWeight: 800, color: "#FF6B35",
              lineHeight: 1.18, marginBottom: 24, letterSpacing: "-0.02em"
            }}>
              Ready to bring precision to your mess hall?
            </h2>
            <p style={{
              fontSize: 17, color: "#444", lineHeight: 1.7,
              fontWeight: 600, maxWidth: 680, margin: "0 auto 40px"
            }}>
              Schedule a specialized demo to see exactly how Mealiez can transform your hostel catering operations,
              reduce waste, and improve student satisfaction.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book-demo" style={{
                background: "#FF6B35", color: "#fff", border: "none",
                borderRadius: 10, padding: "15px 32px",
                fontSize: 16, fontWeight: 700, cursor: "pointer",
                textDecoration: "none", display: "inline-block",
                transition: "background 0.15s"
              }}>
                Book a Specialized Demo
              </Link>
              <Link href="/resources/roi-calculator" style={{
                background: "transparent", color: "#1a1a1a",
                border: "2px solid #1a1a1a",
                borderRadius: 10, padding: "15px 32px",
                fontSize: 16, fontWeight: 700, cursor: "pointer",
                textDecoration: "none", display: "inline-block"
              }}>
                Calculate Your Savings ROI
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
