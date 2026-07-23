"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { AuroraBg } from "@/components/ambient/aurora-bg";
import { FloatingParticles } from "@/components/ambient/floating-particles";

/* ─── Scroll-reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-item");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); e.target.classList.add("stagger-visible"); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Counter animation ─── */
function useCounter(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let start = 0; const step = target / (duration / 16);
      const t = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = Math.floor(start).toLocaleString();
        if (start >= target) clearInterval(t);
      }, 16);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return ref;
}

export default function Home() {
  useReveal();
  const c1 = useCounter(500);
  const c2 = useCounter(1000000);
  const c3 = useCounter(100);

  return (
    <>
      <style>{`
        /* Full-width hero mesh */
        .hero-section {
          width: 100%;
          background:
            radial-gradient(ellipse 100% 80% at 0% 0%, rgba(255,107,53,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 70% 60% at 100% 0%, rgba(255,162,127,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 80% 70% at 50% 100%, rgba(255,135,92,0.09) 0%, transparent 55%),
            #fef6f0;
          padding: clamp(60px,8vw,100px) 0 clamp(48px,6vw,80px);
          position: relative;
          overflow: hidden;
        }

        /* Full-width stat strip */
        .stat-strip-full {
          width: 100%;
          background: linear-gradient(90deg, rgba(255,235,218,0.6), rgba(255,220,196,0.7), rgba(255,235,218,0.6));
          border-top: 1px solid rgba(255,107,53,0.12);
          border-bottom: 1px solid rgba(255,107,53,0.12);
          backdrop-filter: blur(12px);
          padding: clamp(24px,3.5vw,48px) 0;
          overflow: hidden;
        }

        /* Full-width section alternating bg */
        .section-light { width:100%; padding:clamp(64px,8vw,104px) 0; position:relative; background:#fef6f0; }
        .section-warm  { width:100%; padding:clamp(64px,8vw,104px) 0; position:relative; background:linear-gradient(180deg,#fef0e7 0%,#fef6f0 100%); }
        .section-white { width:100%; padding:clamp(64px,8vw,104px) 0; position:relative; background:#fff; }

        /* Dashboard card */
        .dashboard-card {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          border: 1px solid rgba(255,255,255,0.95);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 24px 72px rgba(255,107,53,0.12), 0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 #fff;
          animation: floatY 7s ease-in-out infinite;
        }

        /* Ticker item */
        .ticker-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 0 36px; font-size: 15px; font-weight: 700; color: #1a1a1a;
          white-space: nowrap;
        }
        .ticker-dot { width: 8px; height: 8px; border-radius: 50%; background: #FF6B35; flex-shrink: 0; }

        /* Glow divider */
        .glow-line { width: 64px; height: 3px; background: linear-gradient(90deg,#FF6B35,#FF875C,#FFA27F); border-radius: 2px; margin: 0 auto 16px; box-shadow: 0 0 12px rgba(255,107,53,0.5); }

        /* Hero badge pulse dot */
        .dot-pulse { width: 8px; height: 8px; border-radius: 50%; background: #FF6B35; display: inline-block; flex-shrink: 0; animation: glow-pulse 2s ease-in-out infinite; }

        /* Cards hover lift */
        .lift { transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s; }
        .lift:hover { transform: translateY(-6px); box-shadow: 0 20px 56px rgba(255,107,53,0.16)!important; }

        /* Animate hero text on mount */
        .hero-badge   { animation: fadeUp 0.6s 0.1s both; }
        .hero-h1      { animation: fadeUp 0.7s 0.2s both; }
        .hero-p       { animation: fadeUp 0.7s 0.35s both; }
        .hero-btns    { animation: fadeUp 0.7s 0.5s both; }
        .hero-dash    { animation: slideLeft 0.8s 0.4s both; }

        /* Pricing popular badge */
        .popular-tag {
          position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
          background: #fff; border: 1.5px solid rgba(255,107,53,0.25);
          color: #FF6B35; font-size: 10px; font-weight: 800; letter-spacing: 0.1em;
          padding: 4px 16px; border-radius: 20px; white-space: nowrap;
          box-shadow: 0 4px 12px rgba(255,107,53,0.2);
        }

        /* Phone mockup */
        .phone-mockup {
          background: linear-gradient(160deg, #111 0%, #1c1c1c 100%);
          border-radius: 24px; border: 1.5px solid #2a2a2a;
          box-shadow: 0 0 48px rgba(255,107,53,0.15), 0 24px 64px rgba(0,0,0,0.3);
          animation: floatYSlow 8s ease-in-out infinite;
        }

        /* Checklist */
        .check-row { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #444; margin-bottom: 10px; }

        /* Resource card top area */
        .res-icon-area {
          background: linear-gradient(135deg, rgba(255,107,53,0.05), rgba(255,162,127,0.03));
          display: flex; align-items: center; justify-content: center;
          height: 140px; border-bottom: 1px solid rgba(255,107,53,0.08);
          transition: background 0.3s;
        }
        .resource-card:hover .res-icon-area { background: linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,162,127,0.06)); }

        /* Premium enhanced hover for glass cards */
        .glass-card-premium {
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease;
          will-change: transform;
        }
        .glass-card-premium:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 24px 64px rgba(255,107,53,0.10), inset 0 1px 0 rgba(255,255,255,0.98);
          border-color: rgba(255,107,53,0.12);
        }

        /* Countdown shimmer bar enhancement */
        .shimmer-progress {
          background: linear-gradient(90deg, transparent, rgba(255,107,53,0.08), transparent);
          background-size: 200% 100%;
          animation: shimmerProgress 3s ease-in-out infinite;
        }
        @keyframes shimmerProgress {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes floatY { 0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)} }
        @keyframes floatYSlow { 0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(2deg)} }
        @keyframes glow-pulse { 0%,100%{box-shadow:0 0 16px rgba(255,107,53,0.3)}50%{box-shadow:0 0 32px rgba(255,107,53,0.7)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)} }
        @keyframes slideLeft { from{opacity:0;transform:translateX(36px)}to{opacity:1;transform:translateX(0)} }
        @keyframes orbPulse { 0%,100%{transform:scale(1);opacity:.55}50%{transform:scale(1.15);opacity:.85} }
        @keyframes spin-slow { to{transform:rotate(360deg)} }
        @keyframes border-flow { 0%,100%{border-color:rgba(255,107,53,.18)}50%{border-color:rgba(255,107,53,.5)} }
        @keyframes ticker { 0%{transform:translateX(0)}100%{transform:translateX(-50%)} }
        @keyframes shimmer { 0%{background-position:-400px 0}100%{background-position:400px 0} }
      `}</style>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §1 HERO — full width mesh background
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="hero-section light-bloom-premium">
        {/* Premium aurora background (CSS-only for 60fps) */}
        <AuroraBg />

        {/* Floating particles (CSS-only) */}
        <FloatingParticles count={12} minSize={3} maxSize={5} speed={0.2} />

        {/* Decorative morphing blobs (CSS-only) */}
        <div className="morph-blob" style={{ width:480, height:480, background:"rgba(255,107,53,0.06)", top:-120, right:-80 }} />
        <div className="morph-blob" style={{ width:320, height:320, background:"rgba(255,162,127,0.07)", bottom:-60, left:-60, animationDelay:"-3s" }} />
        <div className="morph-blob" style={{ width:200, height:200, background:"rgba(255,107,53,0.05)", top:"40%", left:"38%", animationDelay:"-6s" }} />

        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:56 }}>

            {/* Left */}
            <div style={{ flex: "0 0 min(500px, 48%)" }}>
              <div className="hero-badge badge-pill" style={{ marginBottom:28, display:"inline-flex" }}>
                <span className="dot-pulse" />
                Trusted by 500+ Messes Across India
              </div>

              <h1 className="hero-h1" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 900, lineHeight: 1.11, color: "#1a1a1a", marginBottom: 22, letterSpacing: "-0.03em" }}>
                Run Your Mess Smarter.<br/>Not on{" "}
                <span className="text-gradient-premium" style={{ background:"linear-gradient(135deg,#FF6B35,#FF875C)", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  WhatsApp & Excel.
                </span>
              </h1>

              <p className="hero-p" style={{ fontSize:15.5, color:"#555", lineHeight:1.75, marginBottom:36, maxWidth:420 }}>
                Mealiez is India's mess management software for hostels, college canteens, industrial canteens, and corporate cafeterias. Automate meal bookings, attendance, billing, inventory, and reports — all from one platform.
              </p>

              <div className="hero-btns" style={{ display:"flex", gap:14 }}>
                <Link href="/book-demo" className="btn-primary btn-cta btn-premium btn-glow shadow-float">
                  Book a Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/why-mealiez" className="btn-outline btn-secondary-premium">
                  Why Mealiez?
                </Link>
              </div>

              {/* Trust row */}
              <div className="hero-btns" style={{ display:"flex", alignItems:"center", gap:20, marginTop:32, paddingTop:28, borderTop:"1px solid rgba(255,107,53,0.1)" }}>
                {[["4.9★","Rating"],["500+","Institutions"],["99.9%","Uptime"]].map(([v,l]) => (
                  <div key={l} style={{ textAlign:"center" }}>
                    <div style={{ fontSize:18, fontWeight:800, color:"#FF6B35" }}>{v}</div>
                    <div style={{ fontSize:11, color:"#999", fontWeight:500 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dashboard */}
            <div className="hero-dash" style={{ flex:1, maxWidth:560 }}>
              <div className="dashboard-card glass-reflection">
                {/* Window bar */}
                <div style={{ background:"rgba(250,248,246,0.95)", padding:"11px 18px", borderBottom:"1px solid rgba(255,107,53,0.07)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <div style={{ display:"flex", gap:7 }}>
                    {["#ff5f57","#febc2e","#28c840"].map(c=><div key={c} style={{ width:11,height:11,borderRadius:"50%",background:c }} />)}
                  </div>
                  <span style={{ fontSize:11, color:"#ccc", letterSpacing:"0.03em" }}>Dashboard — Live</span>
                  <div style={{ width:11 }} />
                </div>

                {/* Charts grid */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, padding:16 }}>
                  {/* Bar chart */}
                  <div className="glass-deep" style={{ padding:12, borderRadius:12 }}>
                    <div style={{ fontSize:10, color:"#bbb", marginBottom:8, fontWeight:600 }}>Revenue · Dec</div>
                    <div style={{ height:72, display:"flex", alignItems:"flex-end", gap:3 }}>
                      {[42,58,50,74,62,86,70,92,68,88].map((h,i)=>(
                        <div key={i} style={{ flex:1, background:`linear-gradient(180deg,#FF6B35,rgba(255,107,53,0.35))`, height:`${h}%`, borderRadius:"3px 3px 0 0" }} />
                      ))}
                    </div>
                  </div>
                  {/* Line chart */}
                  <div className="glass-deep" style={{ padding:12, borderRadius:12 }}>
                    <div style={{ fontSize:10, color:"#bbb", marginBottom:6, fontWeight:600 }}>Analytics Trend</div>
                    <svg viewBox="0 0 100 52" width="100%" style={{ overflow:"visible" }}>
                      <defs>
                        <linearGradient id="area1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FF6B35" stopOpacity="0.25"/><stop offset="100%" stopColor="#FF6B35" stopOpacity="0"/></linearGradient>
                      </defs>
                      <path d="M0,42 C18,36 28,18 48,22 S76,12 100,6" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M0,48 C18,44 28,30 48,34 S76,24 100,18" fill="none" stroke="rgba(255,107,53,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  {/* Big stat */}
                  <div className="neumorph" style={{ padding:14, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                    <div style={{ fontSize:26, fontWeight:900, color:"#FF6B35", lineHeight:1 }}>₹100k</div>
                    <div style={{ fontSize:11, color:"#888", marginTop:4, display:"flex", alignItems:"center", gap:3 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="18 15 12 9 6 15"/></svg>
                      +₹12.3k this week
                    </div>
                  </div>
                  {/* Donut */}
                  <div className="neumorph" style={{ padding:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <svg width="76" height="76" viewBox="0 0 76 76">
                      <circle cx="38" cy="38" r="28" fill="none" stroke="#f0e8e0" strokeWidth="12"/>
                      <circle cx="38" cy="38" r="28" fill="none" stroke="url(#og2)" strokeWidth="12" strokeDasharray="113 63" strokeLinecap="round" transform="rotate(-90 38 38)"/>
                      <defs><linearGradient id="og2" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#FF6B35"/><stop offset="1" stopColor="#FF875C"/></linearGradient></defs>
                      <text x="38" y="42" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1a1a1a">64%</text>
                    </svg>
                  </div>
                </div>

                {/* Throughput bar */}
                <div style={{ padding:"13px 20px", borderTop:"1px solid rgba(255,107,53,0.07)", display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ width:36, height:36, background:"linear-gradient(135deg,#FF6B35,#FF875C)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 14px rgba(255,107,53,0.35)", flexShrink:0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize:11, color:"#aaa", fontWeight:600, marginBottom:2 }}>Live Throughput</div>
                    <div style={{ display:"flex", alignItems:"baseline", gap:5 }}>
                      <span style={{ fontSize:28, fontWeight:900, color:"#1a1a1a" }}>4.2k</span>
                      <span style={{ fontSize:13, color:"#999" }}>meals / hr</span>
                    </div>
                  </div>
                  <div style={{ flex:1, height:4, background:"#f0e8e0", borderRadius:4, marginLeft:8, overflow:"hidden" }}>
                    <div style={{ width:"78%", height:"100%", background:"linear-gradient(90deg,#FF6B35,#FF875C)", borderRadius:4,
                      animation:"shimmer 2.5s infinite", backgroundSize:"800px 100%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §2 TRUSTED BY — animated ticker
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="stat-strip-full section-gradient-top">
        <div className="container" style={{ marginBottom:24 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:22 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span style={{ fontSize:13, fontWeight:700, color:"#FF6B35", letterSpacing:"0.06em", textTransform:"uppercase" }}>Trusted By</span>
          </div>
        </div>

        {/* Animated stats */}
        <div className="container">
          <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:24 }}>
            {[
              { ref:c1, suffix:"+", label:"Institutions", icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
              { ref:c2, suffix:"M+", label:"Meals Managed", divBy:1000000, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
              { ref:c3, suffix:".9% Uptime", label:"Enterprise SLA", icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
              { label:"₹100M+ Saved", static:true, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
            ].map((s:any, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:12, transitionDelay:`${i*0.1}s` }} className="reveal">
                {s.icon}
                <div>
                  <div style={{ fontSize:20, fontWeight:800, color:"#1a1a1a", lineHeight:1 }}>
                    {s.static ? s.label : <><span ref={s.ref}>0</span>{s.suffix}</>}
                  </div>
                  {!s.static && <div style={{ fontSize:12, color:"#888", marginTop:2 }}>{s.label}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §3 WHY LEGACY METHODS FAIL
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-light bg-aurora-mesh">
        <AuroraBg />
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="reveal" style={{ textAlign:"center" }}>
            <div className="glow-line" />
            <h2 className="section-title">The Hidden Costs of Running a Mess Manually</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:22, marginTop:12 }}>
            {[
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>, title:"Food Wastage Eats Your Margin", desc:"When your kitchen cooks without knowing tomorrow's headcount, you over-produce every day. Most hostels waste 15–25% of food daily — that's thousands of rupees straight to the bin." },
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="3"/><circle cx="16" cy="15" r="3"/><line x1="8" y1="12" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="12"/><path d="M8 9h8"/></svg>, title:"Billing Errors & Monthly Fights", desc:"Paper chits, WhatsApp messages, and manual ledgers mean someone always disputes the bill. Missed meals, wrong deductions, and late collections are costing you real money every month." },
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title:"Proxy Dining & Unauthorized Entry", desc:"Without a digital check-in system, you have no way to know who actually ate. Proxy dining, register manipulation, and unauthorized meals go completely undetected." },
            ].map((item, i) => (
              <div key={i} className={`glass-card glass-card-premium lift reveal delay-${(i+1)*100}`} style={{ padding:"30px 26px", borderRadius:20 }}>
                <div className="icon-box" style={{ marginBottom:18 }}>{item.icon}</div>
                <h3 style={{ fontSize:18, fontWeight:700, color:"#1a1a1a", marginBottom:10 }}>{item.title}</h3>
                <p style={{ fontSize:14, color:"#666", lineHeight:1.72 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §4 ENGINEERED FOR SCALE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-warm bg-warm-glow section-gradient-top vignette-premium">
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="reveal" style={{ textAlign:"center" }}>
            <div className="glow-line" />
            <h2 className="section-title">Everything You Need to Run a Profitable Mess</h2>
            <p className="section-sub">From meal bookings to billing and inventory — Mealiez handles every part of your daily food service operation so you can focus on running a great mess.</p>
          </div>

          {/* Row 1 */}
          <div style={{ display:"flex", alignItems:"center", gap:56, marginBottom:64 }}>
            <div className="reveal-left" style={{ flex:1 }}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:18 }}>
                <div className="icon-box" style={{ marginTop:3 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 style={{ fontSize:28, fontWeight:800, color:"#1a1a1a", lineHeight:1.2 }}>Meal Booking & Member Management</h3>
              </div>
              <p style={{ fontSize:14.5, color:"#555", lineHeight:1.75, marginBottom:22 }}>Members can opt-in for breakfast, lunch, or dinner in advance from their phone or web app. Your kitchen gets the exact headcount before cooking starts — so you cook only what you need, and your food cost becomes predictable.</p>
              {["Members opt-in for meals daily, weekly, or by meal type.", "Kitchen sees real-time headcount before cooking starts — no guessing."].map((t,i)=>(
                <div key={i} className="check-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {t}
                </div>
              ))}
            </div>
            <div className="reveal-right" style={{ flex:"0 0 380px" }}>
              <div className="glass-card shadow-float" style={{ padding:"20px 24px", borderRadius:20 }}>
                {["Arjun Mehta","Priya Sharma","Rohit Verma","Sneha Pillai","Karthik Nair","Divya Rao"].map((name,i)=>(
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:14, padding:"11px 0", borderBottom:i<5?"1px solid rgba(255,107,53,0.07)":"none" }}>
                    <div className="neumorph-inset" style={{ width:32, height:32, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <div style={{ width:20, height:20, borderRadius:"50%", background:"linear-gradient(135deg,rgba(255,107,53,0.2),rgba(255,162,127,0.1))" }} />
                    </div>
                    <span style={{ fontSize:13, color:"#777" }}>{name}</span>
                    <div style={{ marginLeft:"auto", fontSize:11, color:"#FF6B35", fontWeight:600, background:"rgba(255,107,53,0.08)", padding:"2px 8px", borderRadius:4 }}>Active</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display:"flex", alignItems:"center", gap:56 }}>
            <div className="reveal-left" style={{ flex:"0 0 380px" }}>
              <div className="phone-mockup" style={{ height:320, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <div style={{ width:190, height:270, background:"linear-gradient(180deg,#1c1c1c,#111)", borderRadius:28, border:"1.5px solid #2a2a2a", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12 }}>
                  {/* QR pattern — static */}
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:2.5, padding:14 }}>
                    {[1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1].map((v,i)=>(
                      <div key={i} style={{ width:6, height:6, background:v?"#FF6B35":"#2d2d2d", borderRadius:1 }} />
                    ))}
                  </div>
                  <div style={{ width:44, height:4, borderRadius:2, background:"linear-gradient(90deg,#FF6B35,#FF875C)" }} />
                  <div style={{ fontSize:9, color:"rgba(255,107,53,0.7)", fontWeight:600, letterSpacing:"0.08em" }}>TAP TO SCAN</div>
                </div>
              </div>
            </div>
            <div className="reveal-right" style={{ flex:1 }}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:18 }}>
                <div className="icon-box" style={{ marginTop:3 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </div>
                <h3 style={{ fontSize:28, fontWeight:800, color:"#1a1a1a", lineHeight:1.2 }}>QR & Biometric Attendance</h3>
              </div>
              <p style={{ fontSize:14.5, color:"#555", lineHeight:1.75, marginBottom:22 }}>Ditch the paper register. Members scan their personal QR code or biometric at the dining counter — every meal entry is logged, verified, and timestamped instantly. No proxy dining. No manual errors. No end-of-day reconciliation headache.</p>
              {["Supports QR code, RFID card, and biometric fingerprint entry.","Attendance auto-syncs with billing so your monthly statement is always accurate."].map((t,i)=>(
                <div key={i} className="check-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §5 FEATURES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-white vignette-premium light-leak">
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="reveal" style={{ textAlign:"center" }}>
            <div className="glow-line" />
            <h2 className="section-title">Built for Mess Operators. Not Generic Software.</h2>
            <p className="section-sub">Every feature in Mealiez is designed specifically for food service operations — from raw material tracking and vendor management to automated monthly billing.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:22 }}>
            {[
              { badge:"INVENTORY", icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title:"Inventory & Vendor Management", desc:"Know exactly what raw materials you have in stock. Mealiez tracks daily ingredient consumption, flags low stock before you run out, and logs every vendor purchase against actual meals served.", checks:["Low-stock alerts with automatic reorder prompts","Vendor invoices tracked against daily purchase history"] },
              { badge:"BILLING", icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>, title:"Automated Billing & Fee Collection", desc:"Monthly fee statements are generated automatically based on meals attended. Members pay online, you get instant confirmation, and your ledger stays clean — no manual entries, no end-of-month chaos.", checks:["Auto-generated monthly fee statements per member","Online payment collection with instant digital receipts"] },
              { badge:"ANALYTICS", icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title:"Operations Reports & Analytics", desc:"Get clear daily reports on food wastage, meal attendance, collection status, and cost-per-meal — all in one dashboard. Export any report in seconds for management review or audits.", checks:["Daily food wastage & cost-per-meal breakdown","Revenue, collection, and outstanding dues dashboard"] },
            ].map((item,i)=>(
              <div key={i} className={`glass-card glass-card-premium lift reveal delay-${(i+1)*150}`} style={{ padding:"28px 24px", borderRadius:20 }}>
                <span className="badge-tag">{item.badge}</span>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                  {item.icon}
                  <h3 style={{ fontSize:18, fontWeight:700, color:"#1a1a1a" }}>{item.title}</h3>
                </div>
                <p style={{ fontSize:14, color:"#666", lineHeight:1.7, marginBottom:18 }}>{item.desc}</p>
                {item.checks.map((c,j)=>(
                  <div key={j} style={{ display:"flex", alignItems:"center", gap:7, fontSize:13, color:"#444", marginBottom:8 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {c}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §6 CONNECT SUPPLY WITH DEMAND
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-light bg-aurora-mesh">
        <AuroraBg />
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="reveal" style={{ textAlign:"center", marginBottom:52 }}>
            <div className="glow-line" />
            <h2 className="section-title">One Booking Triggers Your Entire Operation</h2>
          </div>
          <div style={{ display:"flex", gap:24 }}>
            <div className="reveal-left" style={{ flex:"0 0 500px" }}>
              <div className="glow-panel" style={{ height:270, display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
                <svg width="90%" height="90%" viewBox="0 0 400 240" fill="none">
                  {[[0,80,400,80],[0,160,400,160],[100,0,100,240],[240,0,240,240],[340,0,340,240]].map(([x1,y1,x2,y2],i)=>(
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                  ))}
                  {[[80,60],[160,130],[280,50],[320,160],[200,190],[140,80],[320,80]].map(([x,y],i)=>(
                    <g key={i}>
                      <circle cx={x} cy={y} r="14" fill="rgba(180,172,164,0.3)"/>
                      <circle cx={x} cy={y} r="6" fill="rgba(140,132,124,0.7)"/>
                    </g>
                  ))}
                </svg>
              </div>
              <div style={{ marginTop:24 }}>
                <h3 style={{ fontSize:21, fontWeight:700, color:"#1a1a1a", marginBottom:9 }}>Member Books → Kitchen Prepares → Bill Generated. Automatically.</h3>
                <p style={{ fontSize:14, color:"#666", lineHeight:1.72 }}>When a member books a meal, the kitchen gets the headcount, inventory is updated, and the monthly bill is calculated — all without a single manual step. That's how Mealiez eliminates the daily back-and-forth.</p>
              </div>
            </div>
            <div className="reveal-right" style={{ flex:1, display:"flex", flexDirection:"column", gap:20 }}>
              {[
                { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>, title:"Multi-Location Management", desc:"Managing multiple hostel blocks, mess counters, or campus canteens? Run them all from a single admin panel with separate headcounts, menus, and reports for each location." },
                { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title:"Mobile App for Members & Admins", desc:"Members book meals, check today's menu, and view their monthly bill from the Mealiez app. Admins track attendance, approve bookings, and manage payments from the same platform." },
              ].map((item,i)=>(
                <div key={i} className="glass-card shadow-float" style={{ padding:"26px 22px", flex:1, borderRadius:20 }}>
                  <div style={{ marginBottom:10 }}>{item.icon}</div>
                  <h3 style={{ fontSize:17, fontWeight:700, color:"#1a1a1a", marginBottom:7 }}>{item.title}</h3>
                  <p style={{ fontSize:13.5, color:"#666", lineHeight:1.68 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §7 SOLUTIONS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-warm bg-warm-glow vignette-premium">
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="reveal" style={{ textAlign:"center" }}>
            <div className="glow-line" />
            <h2 className="section-title">Designed for Every Food Service Operation in India</h2>
            <p className="section-sub">Whether you manage a 50-member hostel mess or a 5,000-worker factory canteen, Mealiez has the right setup for your scale and operation type.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:22 }}>
            {[
              { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, title:"Hostel & College Mess Management", desc:"Manage student meal plans, opt-in bookings, dietary preferences, and automated monthly fee collection across all hostel blocks — from a single admin dashboard. Built for wardens, administrators, and hostel facility managers." },
              { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><path d="M12 8v8M8 12h8"/></svg>, title:"Factory & Industrial Canteen Software", desc:"Track shift-wise meals for hundreds of workers, manage subsidised meal programs, and integrate with factory access control systems for accurate attendance — built for high-volume industrial operations." },
              { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title:"Corporate Cafeteria Management", desc:"Run multi-vendor office dining with digital meal wallets, payroll deduction integration, guest meal tracking, and daily spend reports for HR and finance — built for modern corporate workplaces." },
            ].map((item,i)=>(
              <div key={i} className={`glass-card glass-card-premium lift reveal delay-${(i+1)*150}`} style={{ padding:"34px 26px", textAlign:"center", borderRadius:20 }}>
                <div style={{ display:"flex", justifyContent:"center", marginBottom:18 }}>
                  <div className="icon-box">{item.icon}</div>
                </div>
                <h3 style={{ fontSize:17, fontWeight:700, color:"#1a1a1a", marginBottom:10 }}>{item.title}</h3>
                <p style={{ fontSize:13.5, color:"#666", lineHeight:1.72 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §8 PRICING
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-white vignette-premium light-leak">
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="reveal" style={{ textAlign:"center" }}>
            <div className="glow-line" />
            <h2 className="section-title">Simple, Honest Pricing</h2>
            <p className="section-sub">No hidden fees. No setup surprises. Pick a plan that matches your mess size and scale up when you're ready.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:22, alignItems:"start" }}>
            {/* Free */}
            <div className="glass-card glass-card-premium reveal delay-100" style={{ padding:"28px 24px", borderRadius:20 }}>
              <h3 style={{ fontSize:18, fontWeight:700, color:"#1a1a1a", marginBottom:14 }}>Free Plan</h3>
              <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:26 }}>
                <span style={{ fontSize:40, fontWeight:900, color:"#1a1a1a" }}>₹0</span>
                <span style={{ fontSize:14, color:"#aaa" }}>/forever</span>
              </div>
              {[{t:"List on Marketplace",ok:true},{t:"Basic Mess Info Page",ok:true},{t:"Update or Add plans",ok:true},{t:"No Student Management",ok:false},{t:"No Attendance Tracking",ok:false}].map((f,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color:f.ok?"#444":"#bbb", marginBottom:10 }}>
                  {f.ok?<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
                  {f.t}
                </div>
              ))}
              <button className="pricing-btn">Get Started</button>
            </div>
            {/* Starter */}
            <div className="glass-card glass-card-premium reveal delay-200" style={{ padding:"28px 24px", borderRadius:20 }}>
              <h3 style={{ fontSize:18, fontWeight:700, color:"#1a1a1a", marginBottom:14 }}>Starter Plan</h3>
              <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:26 }}>
                <span style={{ fontSize:40, fontWeight:900, color:"#1a1a1a" }}>₹499</span>
                <span style={{ fontSize:14, color:"#aaa" }}>/month</span>
              </div>
              {["List on Marketplace","Up to 50 Students","QR Attendance System","Menu Management","Student Management"].map((f,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color:"#444", marginBottom:10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>{f}
                </div>
              ))}
              <button className="pricing-btn">Choose Starter</button>
            </div>
            {/* Pro */}
            <div className="pricing-pro reveal delay-300" style={{ padding:"28px 24px", borderRadius:22 }}>
              <div className="popular-tag">MOST POPULAR</div>
              <h3 style={{ fontSize:18, fontWeight:700, color:"#fff", marginBottom:14 }}>Pro Plan</h3>
              <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:26 }}>
                <span style={{ fontSize:40, fontWeight:900, color:"#fff" }}>₹799</span>
                <span style={{ fontSize:14, color:"rgba(255,255,255,0.75)" }}>/month</span>
              </div>
              <div style={{ fontSize:13, color:"rgba(255,255,255,0.75)", marginBottom:14 }}>Everything in Starter, plus:</div>
              {["Up to 100 Students","Full Payment Management","Advanced Analytics","On-site Setup & Training"].map((f,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color:"#fff", fontWeight:500, marginBottom:10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>{f}
                </div>
              ))}
              <button className="pricing-btn-pro">Choose Pro</button>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §9 CUSTOMERS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-light bg-aurora-mesh">
        <AuroraBg />
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="reveal" style={{ textAlign:"center" }}>
            <div className="glow-line" />
            <h2 className="section-title">Real Results from Real Mess Operators</h2>
            <p className="section-sub">Hostel wardens, college administrators, and canteen managers across India share how Mealiez changed the way they run their operations.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:22 }}>
            {[
              { quote:'"We were managing our hostel mess on WhatsApp and a shared Excel file. Every week there was a fight about the food bill. Since we switched to Mealiez, our food wastage has come down by almost 30% and the monthly billing just happens automatically. I wish we had done this sooner."', name:"Rajesh Nair", role:"Hostel Warden, Engineering College, Pune", org:"HOSTEL" },
              { quote:'"Collecting monthly mess fees was the most stressful part of my job — chasing students, cross-checking Excel entries, handling disputes. Now parents pay online through Mealiez, I get instant confirmation, and the ledger is always accurate. It\'s saved me at least 10 hours every month."', name:"Priya Sharma", role:"Mess Administrator, Student Housing Facility, Bengaluru", org:"MESS" },
            ].map((t,i)=>(
              <div key={i} className={`glass-card glass-card-premium lift reveal delay-${(i+1)*150}`} style={{ padding:"30px 28px", borderRadius:20 }}>
                <div style={{ fontSize:28, color:"#FF6B35", lineHeight:1, marginBottom:14, fontFamily:"Georgia,serif" }}>"</div>
                <p style={{ fontSize:14.5, color:"#444", lineHeight:1.82, marginBottom:26, fontStyle:"italic" }}>{t.quote}</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
                  <div>
                    <p style={{ fontWeight:700, color:"#1a1a1a", marginBottom:3, fontSize:14 }}>{t.name}</p>
                    <p style={{ fontSize:12, color:"#999" }}>{t.role}</p>
                  </div>
                  <span className="text-gradient-premium" style={{ fontWeight:900, fontSize:15, letterSpacing:"0.08em" }}>{t.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §10 RESOURCES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-white vignette-premium light-leak">
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="reveal" style={{ textAlign:"center" }}>
            <div className="glow-line" />
            <h2 className="section-title">Practical Resources for Mess Operators</h2>
            <p className="section-sub">Guides, benchmarks, and real customer stories to help you cut food costs, fix billing, and run a more profitable mess business.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:22 }}>
            {[
              { icon:<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, badge:"REPORT", title:"Indian Hostel Mess Food Wastage Report 2026 — What's Actually Being Lost and How to Fix It" },
              { icon:<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, badge:"CASE STUDY", title:"How a 1,200-Member Hostel Mess Reduced Food Wastage by 28% and Fixed Billing in 3 Months" },
              { icon:<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, badge:"GUIDE", title:"The Step-by-Step Guide to Digitising Your Hostel Mess — From Booking to Billing" },
            ].map((r,i)=>(
              <div key={i} className={`glass-card resource-card reveal delay-${(i+1)*150}`} style={{ overflow:"hidden", cursor:"pointer", borderRadius:20 }}>
                <div className="res-icon-area">{r.icon}</div>
                <div style={{ padding:"18px 20px" }}>
                  <span className="badge-tag">{r.badge}</span>
                  <p style={{ fontSize:14, fontWeight:600, color:"#1a1a1a", lineHeight:1.5 }}>{r.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §11 FINAL CTA — full width warm bg
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ width:"100%", background:"#fdf0e8", padding:"96px 0", position:"relative" }}>
        <FloatingParticles count={8} minSize={3} maxSize={5} speed={0.15} />
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="cta-section reveal" style={{ padding:"80px 56px", textAlign:"center" }}>
            <div className="morph-blob" style={{ width:400, height:400, background:"rgba(255,107,53,0.05)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", animationDelay:"-4s" }} />
            <h2 className="reveal" style={{ fontSize:52, fontWeight:900, color:"#FF6B35", lineHeight:1.15, marginBottom:22, letterSpacing:"-0.025em", position:"relative" }}>
              Your mess deserves better<br/>than WhatsApp and Excel.
            </h2>
            <p className="reveal delay-100" style={{ fontSize:16, color:"#555", lineHeight:1.75, maxWidth:620, margin:"0 auto 44px", position:"relative" }}>
              Book a free 30-minute demo and see exactly how Mealiez cuts food wastage, automates monthly billing, and gives you complete visibility over your operations — whether you run a hostel mess, college canteen, or industrial cafeteria.
            </p>
            <div className="reveal delay-200" style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap", position:"relative" }}>
              <Link href="/book-demo" className="btn-primary btn-cta btn-premium btn-glow shadow-float" style={{ padding:"16px 36px", fontSize:16 }}>
                Book a Free Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/why-mealiez" className="btn-outline btn-secondary-premium" style={{ padding:"16px 36px", fontSize:16 }}>
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}