"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AuroraBg } from "@/components/ambient/aurora-bg";
import { FloatingParticles } from "@/components/ambient/floating-particles";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AnimatedSection } from "@/components/ui/animated-section";
import BorderGlow from "@/components/ui/border-glow";
import LightRays from "@/components/ui/light-rays";

const PixelSnow = dynamic(() => import("@/components/ui/PixelSnow"), { ssr: false });

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv-el, .rv-l, .rv-r, .rv-s");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); } }),
      { threshold: 0.12 }
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
        .rv-s  { opacity:0; transform:scale(.93); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .rv-s.in { opacity:1; transform:scale(1); }
        .d1 { transition-delay:.1s } .d2 { transition-delay:.2s } .d3 { transition-delay:.3s } .d4 { transition-delay:.4s } .d5 { transition-delay:.5s }

        .hero-scroll-indicator {
          position:absolute; bottom:28px; left:50%; transform:translateX(-50%);
          display:flex; flex-direction:column; align-items:center; gap:6px;
          opacity:0; animation:fadeIn 1s 1.5s both;
        }
        .hero-scroll-indicator span {
          width:1.5px; height:32px;
          background:linear-gradient(180deg,rgba(255,107,53,0.4),transparent);
          animation:scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse { 0%,100%{opacity:0.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.3)} }

        .sec-divider {
          width:100%; height:1px;
          background:linear-gradient(90deg,transparent 0%,rgba(255,107,53,0.06) 20%,rgba(255,107,53,0.10) 50%,rgba(255,107,53,0.06) 80%,transparent 100%);
          margin:0; border:none;
        }

        .stat-value {
          font-family:'Barlow Condensed',system-ui,sans-serif;
          font-weight:800; text-transform:uppercase;
          font-feature-settings:'tnum' on,'lnum' on;
          font-variant-numeric:tabular-nums;
        }

        .pricing-feature-check {
          display:flex; align-items:center; gap:10px;
          font-size:13.5px; color:#555; padding:7px 0;
          border-bottom:1px solid rgba(0,0,0,0.04);
        }
        .pricing-feature-check:last-child { border-bottom:none; }

        .testimonial-quote-mark {
          font-size:72px; line-height:0.7; color:#FF6B35;
          font-family:Georgia,serif; opacity:0.25;
          margin-bottom:8px;
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
          width:1px; height:40px;
          background:linear-gradient(180deg,transparent,rgba(255,107,53,0.2),transparent);
        }

        @keyframes fadeIn { to{opacity:1} }

        /* ─────────────────────────────────────────────────
           RESPONSIVE — Mobile & Tablet
        ───────────────────────────────────────────────── */
        .pg-hero-grid {
          display:grid;
          grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);
          gap:clamp(32px,5vw,80px);
          align-items:center;
        }
        .pg-stats-grid {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:clamp(16px,3vw,40px);
        }
        .pg-problem-grid {
          display:grid;
          grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);
          gap:clamp(32px,5vw,72px);
          align-items:start;
        }
        .pg-features-grid {
          display:grid;
          grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);
          gap:clamp(20px,2.5vw,28px);
        }
        .pg-workflow-grid {
          display:grid;
          grid-template-columns:minmax(0,1fr) minmax(0,1fr);
          gap:clamp(32px,5vw,64px);
          align-items:center;
        }
        .pg-solutions-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:clamp(16px,2vw,24px);
        }
        .pg-testimonials-grid {
          display:grid;
          gap:clamp(20px,2.5vw,32px);
        }
        .pg-pricing-grid {
          display:grid;
          grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) minmax(0,1fr);
          gap:clamp(16px,2vw,24px);
          align-items:start;
        }
        .pg-resources-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:clamp(16px,2vw,24px);
        }
        .pg-dashboard-col { position:relative; }
        .pg-problem-sticky { position:sticky; top:100px; }

        /* Testimonials — feature card layout */
        .pg-testimonials-grid {
          grid-template-columns: minmax(0,1.15fr) minmax(0,1fr);
          align-items:start;
        }
        .testimonial-card-featured {
          border-left:3px solid rgba(255,107,53,0.3);
        }

        /* Tablet ≤ 900px */
        @media (max-width:900px) {
          .pg-hero-grid        { grid-template-columns:1fr; }
          .pg-dashboard-col    { display:none; }
          .pg-problem-grid     { grid-template-columns:1fr; }
          .pg-problem-sticky   { position:static; }
          .pg-features-grid    { grid-template-columns:1fr; }
          .pg-workflow-grid    { grid-template-columns:1fr; }
          .pg-solutions-grid   { grid-template-columns:repeat(2,1fr); }
          .pg-testimonials-grid{ grid-template-columns:1fr; }
          .pg-pricing-grid     { grid-template-columns:1fr 1fr; }
        }

        /* Mobile ≤ 640px */
        @media (max-width:640px) {
          .pg-stats-grid       { grid-template-columns:repeat(2,1fr); }
          .pg-solutions-grid   { grid-template-columns:1fr; }
          .pg-resources-grid   { grid-template-columns:1fr; }
          .pg-pricing-grid     { grid-template-columns:1fr; }
          .pg-pricing-featured { transform:none !important; }
          .hero-stat-item      { padding:0 12px; }
          .hero-stat-item:not(:last-child)::after { display:none; }
        }

        /* Small mobile ≤ 480px */
        @media (max-width:480px) {
          .pg-stats-grid { grid-template-columns:1fr 1fr; gap:12px; }
        }

        /* CTA button overrides for inline-style buttons on this page */
        .pg-cta-primary {
          display:inline-flex; align-items:center; gap:10px;
          background:linear-gradient(135deg,#FF6B35,#FF875C);
          color:#fff; border:none; border-radius:12px;
          padding:14px 30px; font-size:14px; font-weight:700;
          font-family:'Barlow',system-ui,sans-serif;
          text-decoration:none;
          letter-spacing:0.02em;
          box-shadow:0 8px 28px rgba(255,107,53,0.30), inset 0 1px 0 rgba(255,255,255,0.2);
          transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease;
          position:relative; overflow:hidden;
          cursor:pointer;
        }
        .pg-cta-primary:hover {
          transform:translateY(-2px) scale(1.02);
          box-shadow:0 14px 44px rgba(255,107,53,0.45), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .pg-cta-primary:active {
          transform:translateY(0) scale(0.97);
          transition-duration:0.12s;
        }
        .pg-cta-primary-lg {
          padding:16px 34px;
          font-size:15px;
        }

        .pg-cta-ghost {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,0.8);
          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);
          color:#1a1a1a; border:1.5px solid rgba(0,0,0,0.08);
          border-radius:12px; padding:14px 26px;
          font-size:14px; font-weight:600;
          font-family:'Barlow',system-ui,sans-serif;
          text-decoration:none;
          transition:all .3s cubic-bezier(.22,1,.36,1);
          cursor:pointer;
        }
        .pg-cta-ghost:hover {
          background:rgba(255,255,255,0.95);
          border-color:rgba(255,107,53,0.28);
          transform:translateY(-2px);
          box-shadow:0 8px 24px rgba(0,0,0,0.06);
        }
        .pg-cta-ghost:active {
          transform:translateY(0) scale(0.97);
          transition-duration:0.12s;
        }
        .pg-cta-ghost-lg {
          padding:16px 30px;
          font-size:15px;
        }

        .pg-pricing-btn-outline {
          width:100%; margin-top:20px;
          padding:12px 0; border-radius:10px;
          border:1.5px solid rgba(255,107,53,0.2);
          background:rgba(255,107,53,0.05);
          color:#FF6B35; font-weight:700; font-size:14px;
          cursor:pointer; font-family:'Barlow',system-ui,sans-serif;
          transition:all .3s cubic-bezier(.22,1,.36,1);
        }
        .pg-pricing-btn-outline:hover {
          background:rgba(255,107,53,0.10);
          border-color:rgba(255,107,53,0.40);
          transform:translateY(-1px);
        }
        .pg-pricing-btn-primary {
          width:100%; margin-top:20px;
          padding:13px 0; border-radius:10px;
          border:none;
          background:rgba(255,255,255,0.95);
          color:#FF6B35; font-weight:800; font-size:14px;
          cursor:pointer; font-family:'Barlow',system-ui,sans-serif;
          box-shadow:0 4px 16px rgba(0,0,0,0.1);
          transition:all .3s cubic-bezier(.22,1,.36,1);
        }
        .pg-pricing-btn-primary:hover {
          background:#fff;
          box-shadow:0 8px 28px rgba(0,0,0,0.15);
          transform:translateY(-1px);
        }

        /* Resource card thumbnail — more editorial */
        .pg-resource-thumb {
          height:130px;
          display:flex; align-items:center; justify-content:center;
          border-bottom:1px solid rgba(255,107,53,0.06);
          position:relative; overflow:hidden;
        }
        .pg-resource-thumb::before {
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(255,107,53,0.03) 0%,rgba(255,162,127,0.06) 50%,transparent 100%);
        }
        .pg-resource-thumb-grid {
          position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px);
          background-size:20px 20px;
        }

        /* Testimonial — asymmetric layout */
        .testimonial-card-featured {
          padding:clamp(28px,3vw,40px);
          border-radius:20px;
          border:1px solid rgba(255,107,53,0.10);
          background:linear-gradient(145deg,rgba(255,248,244,0.8),rgba(255,240,230,0.4));
          transition:transform .35s cubic-bezier(.22,1,.36,1);
        }
        .testimonial-card-featured:hover { transform:translateY(-3px); }
        .testimonial-card-compact {
          padding:clamp(20px,2.5vw,28px);
          border-radius:16px;
          border:1px solid rgba(0,0,0,0.04);
          background:rgba(255,255,255,0.7);
          backdrop-filter:blur(8px);
          -webkit-backdrop-filter:blur(8px);
          transition:transform .35s cubic-bezier(.22,1,.36,1);
        }
        .testimonial-card-compact:hover { transform:translateY(-2px); }

        /* ── Card hover effects (inline-style cards need CSS :hover) ── */
        .pg-solution-card {
          transition:transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s;
        }
        .pg-solution-card:hover {
          transform:translateY(-6px);
          box-shadow:0 16px 40px rgba(255,107,53,0.12), 0 4px 12px rgba(17,17,17,0.06);
        }

        .pg-resource-card {
          transition:transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s;
        }
        .pg-resource-card:hover {
          transform:translateY(-6px);
          box-shadow:0 16px 40px rgba(255,107,53,0.12), 0 4px 12px rgba(17,17,17,0.06);
        }
        .pg-resource-card:hover .pg-resource-thumb {
          background:linear-gradient(135deg,rgba(255,107,53,0.06),rgba(255,162,127,0.10));
        }

        .pg-feature-small-card {
          transition:transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s;
        }
        .pg-feature-small-card:hover {
          transform:translateY(-5px);
          box-shadow:0 12px 32px rgba(255,107,53,0.10), 0 4px 12px rgba(17,17,17,0.04);
        }

        .pg-feature-large-card {
          transition:transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s;
        }
        .pg-feature-large-card:hover {
          transform:translateY(-5px);
          box-shadow:0 12px 32px rgba(255,107,53,0.10), 0 4px 12px rgba(17,17,17,0.04);
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════════
          HERO — Editorial Layout with Floating Dashboard
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%",
        background:"#fef6f0",
        padding:"clamp(64px,8vw,120px) 0 clamp(40px,5vw,72px)",
        position:"relative",
        overflow:"hidden",
      }}>
        <AuroraBg />
        <FloatingParticles count={8} minSize={2} maxSize={4} speed={0.15} />

        {/* LightRays — warm directional glow */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          opacity: 0.4, mixBlendMode: "screen",
          pointerEvents: "none",
        }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#FF6B35"
            raysSpeed={0.8}
            lightSpread={0.5}
            rayLength={1.8}
            fadeDistance={0.5}
            saturation={0.8}
            followMouse={true}
            mouseInfluence={0.08}
          />
        </div>

        {/* PixelSnow — white snowflakes on peach hero */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          opacity: 0.9,
          pointerEvents: "none",
        }}>
          <PixelSnow
            color="#ffffff"
            flakeSize={0.022}
            minFlakeSize={2.0}
            pixelResolution={600}
            speed={1.2}
            density={0.08}
            direction={125}
            brightness={1.8}
            gamma={0.4545}
            variant="snowflake"
          />
        </div>

        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <div className="pg-hero-grid">
            {/* Left — Editorial Content */}
            <div>
              {/* Premium badge */}
              <div className="rv-el d1" style={{
                display:"inline-flex", alignItems:"center", gap:8,
                background:"rgba(255,107,53,0.06)",
                border:"1px solid rgba(255,107,53,0.12)",
                borderRadius:100,
                padding:"5px 14px 5px 5px",
                fontSize:12, fontWeight:600, color:"#FF6B35",
                letterSpacing:"0.04em",
                marginBottom:32,
              }}>
                <span style={{
                  background:"#FF6B35", color:"#fff",
                  borderRadius:100, padding:"2px 10px",
                  fontSize:10, fontWeight:800, letterSpacing:"0.06em",
                }}>TRUSTED</span>
                500+ institutions across India
              </div>

              {/* Editorial headline */}
              <h1 className="editorial-heading rv-el d2" style={{
                fontSize:"clamp(44px, 5.5vw, 72px)",
                fontWeight:900,
                lineHeight:1.04,
                color:"#0a0a0a",
                marginBottom:20,
                letterSpacing:"-0.02em",
              }}>
                Run your mess<br/>
                <span style={{
                  background:"linear-gradient(135deg,#FF6B35 0%,#FF875C 60%,#FFA27F 100%)",
                  WebkitBackgroundClip:"text",
                  backgroundClip:"text",
                  WebkitTextFillColor:"transparent",
                }}>smarter.</span>
                <br/>
                Not on spreadsheets.
              </h1>

              <p className="rv-el d3" style={{
                fontSize:"clamp(15px,1.2vw,17px)",
                color:"#555",
                lineHeight:1.75,
                maxWidth:480,
                marginBottom:36,
              }}>
                Mealiez automates meal bookings, QR attendance, billing, inventory, and analytics for hostel messes, college canteens, and industrial cafeterias. Cut food wastage by up to 30%.
              </p>

              {/* CTA row */}
              <div className="rv-el d4" style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>
                <Link href="/book-demo" className="pg-cta-primary">
                  <span>Book a Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/why-mealiez" className="pg-cta-ghost">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Why Mealiez?
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="rv-el d5" style={{
                display:"flex", gap:0, marginTop:40,
                paddingTop:28, borderTop:"1px solid rgba(0,0,0,0.06)",
              }}>
                <div className="hero-stat-item">
                  <div className="stat-value" style={{ fontSize:22, color:"#FF6B35" }}>4.9</div>
                  <div style={{ fontSize:11, color:"#999", fontWeight:500, marginTop:2, letterSpacing:"0.04em" }}>RATING</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-value" style={{ fontSize:22, color:"#FF6B35" }}>500+</div>
                  <div style={{ fontSize:11, color:"#999", fontWeight:500, marginTop:2, letterSpacing:"0.04em" }}>INSTITUTIONS</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-value" style={{ fontSize:22, color:"#FF6B35" }}>99.9%</div>
                  <div style={{ fontSize:11, color:"#999", fontWeight:500, marginTop:2, letterSpacing:"0.04em" }}>UPTIME</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-value" style={{ fontSize:22, color:"#FF6B35" }}>₹100M+</div>
                  <div style={{ fontSize:11, color:"#999", fontWeight:500, marginTop:2, letterSpacing:"0.04em" }}>SAVED</div>
                </div>
              </div>
            </div>

            {/* Right — Dashboard Mockup */}
            <div className="rv-r d3 pg-dashboard-col">
              {/* Ambient glow behind dashboard */}
              <div style={{
                position:"absolute", width:"80%", height:"80%",
                top:"10%", left:"10%",
                background:"radial-gradient(circle,rgba(255,107,53,0.08),transparent 60%)",
                filter:"blur(60px)", pointerEvents:"none",
              }}/>
              <div style={{
                background:"rgba(255,255,255,0.78)",
                backdropFilter:"blur(40px) saturate(1.8)",
                WebkitBackdropFilter:"blur(40px) saturate(1.8)",
                borderRadius:20,
                border:"1px solid rgba(255,255,255,0.9)",
                boxShadow:"0 32px 80px rgba(17,17,17,0.06), 0 8px 24px rgba(17,17,17,0.04), inset 0 1px 0 rgba(255,255,255,0.95)",
                overflow:"hidden",
                position:"relative",
              }}>
                {/* Window chrome */}
                <div style={{
                  background:"rgba(248,246,244,0.95)",
                  padding:"12px 18px",
                  borderBottom:"1px solid rgba(255,107,53,0.06)",
                  display:"flex", alignItems:"center", justifyContent:"space-between",
                }}>
                  <div style={{ display:"flex", gap:6 }}>
                    {["#ff5f57","#febc2e","#28c840"].map(c=>(
                      <div key={c} style={{ width:10,height:10,borderRadius:"50%",background:c }}/>
                    ))}
                  </div>
                  <span style={{ fontSize:10, color:"#ccc", fontWeight:600, letterSpacing:"0.04em" }}>DASHBOARD</span>
                  <div style={{ width:40 }}/>
                </div>

                {/* Chart grid */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, padding:14 }}>
                  {/* Revenue mini-chart */}
                  <div style={{
                    background:"rgba(255,255,255,0.6)",
                    borderRadius:10, padding:10,
                    border:"1px solid rgba(255,107,53,0.06)",
                  }}>
                    <div style={{ fontSize:9, color:"#bbb", fontWeight:700, marginBottom:6, letterSpacing:"0.04em" }}>REVENUE</div>
                    <div style={{ height:56, display:"flex", alignItems:"flex-end", gap:2 }}>
                      {[42,58,50,74,62,86,70,92,68,88].map((h,i)=>(
                        <div key={i} style={{
                          flex:1,
                          background:`linear-gradient(180deg,#FF6B35,rgba(255,107,53,0.25))`,
                          height:`${h}%`, borderRadius:"2px 2px 0 0",
                          transition:"height .3s",
                        }}/>
                      ))}
                    </div>
                  </div>

                  {/* Trend line */}
                  <div style={{
                    background:"rgba(255,255,255,0.6)",
                    borderRadius:10, padding:10,
                    border:"1px solid rgba(255,107,53,0.06)",
                  }}>
                    <div style={{ fontSize:9, color:"#bbb", fontWeight:700, marginBottom:4, letterSpacing:"0.04em" }}>TREND</div>
                    <svg viewBox="0 0 100 40" width="100%" height="40">
                      <path d="M0,32 C18,26 28,10 48,14 S76,6 100,2" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M0,36 C18,32 28,20 48,24 S76,16 100,12" fill="none" stroke="rgba(255,107,53,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>

                  {/* KPI cards */}
                  <div style={{
                    background:"rgba(255,255,255,0.7)",
                    borderRadius:10, padding:12,
                    border:"1px solid rgba(255,107,53,0.06)",
                    display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
                  }}>
                    <div className="stat-value" style={{ fontSize:22, lineHeight:1, color:"#FF6B35" }}>₹100k</div>
                    <div style={{ fontSize:9, color:"#aaa", fontWeight:600, marginTop:4, letterSpacing:"0.04em" }}>MONTHLY</div>
                  </div>

                  {/* Donut */}
                  <div style={{
                    background:"rgba(255,255,255,0.7)",
                    borderRadius:10, padding:8,
                    border:"1px solid rgba(255,107,53,0.06)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <svg width="64" height="64" viewBox="0 0 64 64">
                      <circle cx="32" cy="32" r="24" fill="none" stroke="#f0e8e0" strokeWidth="10"/>
                      <circle cx="32" cy="32" r="24" fill="none" stroke="url(#og)" strokeWidth="10" strokeDasharray="99 51" strokeLinecap="round" transform="rotate(-90 32 32)"/>
                      <defs><linearGradient id="og" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#FF6B35"/><stop offset="1" stopColor="#FF875C"/></linearGradient></defs>
                      <text x="32" y="37" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1a1a1a">64%</text>
                    </svg>
                  </div>
                </div>

                {/* Throughput footer */}
                <div style={{
                  padding:"10px 16px",
                  borderTop:"1px solid rgba(255,107,53,0.06)",
                  display:"flex", alignItems:"center", gap:12,
                }}>
                  <div style={{
                    width:32, height:32,
                    background:"linear-gradient(135deg,#FF6B35,#FF875C)",
                    borderRadius:8,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:"0 4px 12px rgba(255,107,53,0.3)",
                    flexShrink:0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:9, color:"#bbb", fontWeight:700, letterSpacing:"0.04em" }}>LIVE THROUGHPUT</div>
                    <div style={{ display:"flex", alignItems:"baseline", gap:6 }}>
                      <span className="stat-value" style={{ fontSize:22, lineHeight:1.2, color:"#1a1a1a" }}>4.2k</span>
                      <span style={{ fontSize:11, color:"#999" }}>meals/hr</span>
                    </div>
                  </div>
                  <div style={{ flex:1, height:3, background:"#f0e8e0", borderRadius:3, maxWidth:120, overflow:"hidden" }}>
                    <div style={{
                      width:"78%", height:"100%",
                      background:"linear-gradient(90deg,#FF6B35,#FF875C)",
                      borderRadius:3,
                    }}/>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div style={{
                position:"absolute", bottom:-16, right:-12, zIndex:-1,
                width:100, height:100,
                background:"radial-gradient(circle,rgba(255,162,127,0.08),transparent 60%)",
                filter:"blur(30px)",
              }}/>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator">
          <span style={{ fontSize:10, color:"rgba(255,107,53,0.3)", fontWeight:600, letterSpacing:"0.08em" }}>SCROLL</span>
          <span/>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STATISTICS — Premium Animated Counters
      ════════════════════════════════════════════════════════════ */}
      <div style={{
        width:"100%",
        padding:"clamp(32px,4vw,56px) 0",
        background:"linear-gradient(180deg,#fef6f0 0%,rgba(255,235,218,0.5) 50%,#fef6f0 100%)",
        borderTop:"1px solid rgba(255,107,53,0.06)",
        borderBottom:"1px solid rgba(255,107,53,0.06)",
      }}>
        <div className="container">
          <div className="pg-stats-grid">
            {[
              { value:500, suffix:"+", label:"Institutions Served", desc:"Hostels, colleges & factories" },
              { value:1000000, suffix:"M+", label:"Meals Managed", desc:"Tracked and accounted for" },
              { value:100, suffix:".9%", label:"Uptime Guarantee", desc:"Enterprise-grade reliability" },
              { label:"₹100M+", static:true, desc:"Wastage reduction achieved" },
            ].map((s:any, i) => (
              <div key={i} className="rv-el" style={{
                textAlign:"center", padding:"8px 0",
                borderRight:i<3?"1px solid rgba(255,107,53,0.06)":"none",
              }}>
                <div className="stat-value" style={{
                  fontSize:"clamp(28px,3vw,38px)",
                  color:"#1a1a1a",
                  lineHeight:1,
                  marginBottom:6,
                }}>
                  {s.static ? s.label : <><AnimatedCounter value={s.value} suffix={s.suffix} duration={1.8} /></>}
                </div>
                <div style={{ fontSize:13, fontWeight:700, color:"#FF6B35", marginBottom:4, letterSpacing:"0.04em" }}>{s.label || s.desc}</div>
                <div style={{ fontSize:11, color:"#aaa", fontWeight:500 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          PROBLEM — Editorial Split Layout
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%", padding:"clamp(72px,9vw,120px) 0",
        background:"#fff",
        position:"relative",
      }}>
        <div className="container">
          <div className="rv-el" style={{ marginBottom:56 }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#FF6B35",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(255,107,53,0.06)",
              border:"1px solid rgba(255,107,53,0.12)",
              borderRadius:100, padding:"4px 12px",
              display:"inline-block", marginBottom:16,
            }}>THE PROBLEM</span>
            <h2 id="problem-heading" className="editorial-heading" style={{
              fontSize:"clamp(32px,4vw,52px)",
              fontWeight:900, color:"#0a0a0a",
              lineHeight:1.08, maxWidth:700,
            }}>
              Manual mess operations<br/>
              <span style={{
                background:"linear-gradient(135deg,#FF6B35,#FF875C)",
                WebkitBackgroundClip:"text",
                backgroundClip:"text",
                WebkitTextFillColor:"transparent",
              }}>cost you more than you think.</span>
            </h2>
          </div>

          <div className="pg-problem-grid">
            {/* Left — editorial large number list */}
            <div style={{ display:"flex", flexDirection:"column", gap:48 }}>
              {[
                { num:"01", title:"Food Wastage", desc:"When your kitchen cooks without knowing tomorrow's headcount, you over-produce every day. Most hostels waste 15–25% of food daily — that's thousands of rupees straight to the bin." },
                { num:"02", title:"Billing Disputes", desc:"Paper chits, WhatsApp messages, and manual ledgers mean someone always disputes the bill. Missed meals, wrong deductions, and late collections cost you real money." },
                { num:"03", title:"Proxy Dining", desc:"Without a digital check-in system, you have no way to know who actually ate. Proxy dining and unauthorized meals go completely undetected." },
              ].map((item,i)=>(
                <div key={i} className="rv-el" style={{
                  display:"flex", gap:24,
                  paddingBottom:40, borderBottom:i<2?"1px solid rgba(0,0,0,0.04)":"none",
                }}>
                  <div className="stat-value" style={{
                    fontSize:36, lineHeight:0.9,
                    color:"rgba(255,107,53,0.15)",
                    fontWeight:900, flexShrink:0,
                    width:48,
                  }}>{item.num}</div>
                  <div>
                    <h3 style={{
                      fontSize:18, fontWeight:800,
                      color:"#1a1a1a", marginBottom:8,
                      fontFamily:"'Barlow Condensed',system-ui,sans-serif",
                      textTransform:"uppercase",
                      letterSpacing:"0.01em",
                    }}>{item.title}</h3>
                    <p style={{ fontSize:14, color:"#666", lineHeight:1.72, maxWidth:380 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — Impact stat card */}
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="transparent"
              borderRadius={20}
              glowRadius={30}
              glowIntensity={0.6}
              colors={["#FF6B35", "#FF875C", "#FFA27F"]}
              className="rv-r d2 pg-problem-sticky"
              style={{
                background:"linear-gradient(145deg,rgba(255,248,244,0.8),rgba(255,240,232,0.6))",
                borderRadius:20,
                border:"1px solid rgba(255,107,53,0.08)",
                padding:"clamp(28px,3vw,44px)",
                backdropFilter:"blur(12px)",
                position:"sticky", top:100,
              }}
            >
              <div style={{
                fontSize:11, fontWeight:800, color:"#FF6B35",
                letterSpacing:"0.1em", marginBottom:20,
                textTransform:"uppercase",
              }}>The Hidden Cost</div>
              <div className="stat-value" style={{
                fontSize:"clamp(44px,5vw,64px)",
                color:"#FF6B35", lineHeight:0.9,
                marginBottom:12,
              }}>₹28L</div>
              <p style={{ fontSize:14, color:"#555", lineHeight:1.72, marginBottom:24 }}>
                Average annual loss for a 200-member hostel mess due to food wastage, billing errors, and attendance leakage.
              </p>
              <div style={{
                width:"100%", height:4,
                background:"rgba(255,107,53,0.08)",
                borderRadius:4, overflow:"hidden",
              }}>
                <div style={{
                  width:"68%", height:"100%",
                  background:"linear-gradient(90deg,#FF6B35,#FFA27F)",
                  borderRadius:4,
                }}/>
              </div>
              <div style={{
                display:"flex", justifyContent:"space-between",
                marginTop:6, fontSize:10, color:"#bbb", fontWeight:600,
              }}>
                <span>Wasted</span>
                <span>Recoverable</span>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FEATURES — Asymmetrical Editorial Grid
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%", padding:"clamp(72px,9vw,120px) 0",
        background:"linear-gradient(180deg,#fef6f0 0%,#fdf0e8 100%)",
        position:"relative",
      }}>
        <div className="container">
          <div className="rv-el" style={{ marginBottom:48 }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#FF6B35",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(255,107,53,0.06)",
              border:"1px solid rgba(255,107,53,0.12)",
              borderRadius:100, padding:"4px 12px",
              display:"inline-block", marginBottom:16,
            }}>FEATURES</span>
            <h2 id="features-heading" className="editorial-heading" style={{
              fontSize:"clamp(32px,4vw,52px)",
              fontWeight:900, color:"#0a0a0a",
              lineHeight:1.08, maxWidth:600,
            }}>
              Built for mess operators.<br/>
              <span style={{ color:"rgba(0,0,0,0.3)" }}>Not generic software.</span>
            </h2>
          </div>

          {/* Asymmetrical grid: 1 large + 2 small */}
          <div className="pg-features-grid">
            {/* Left — Large feature card */}
            <BorderGlow
              glowColor="20 80 70"
              backgroundColor="transparent"
              borderRadius={20}
              glowRadius={30}
              glowIntensity={0.5}
              colors={["#FF6B35", "#FF875C", "#FFA27F"]}
              className="rv-s d2 pg-feature-large-card"
              style={{
                background:"rgba(255,255,255,0.75)",
                backdropFilter:"blur(28px) saturate(1.6)",
                WebkitBackdropFilter:"blur(28px) saturate(1.6)",
                borderRadius:20,
                border:"1px solid rgba(255,107,53,0.08)",
                padding:"clamp(28px,3vw,40px)",
              }}
            >
              <span style={{
                fontSize:10, fontWeight:800, color:"#FF6B35",
                letterSpacing:"0.12em", textTransform:"uppercase",
                background:"rgba(255,107,53,0.06)",
                border:"1px solid rgba(255,107,53,0.12)",
                borderRadius:100, padding:"3px 10px",
                display:"inline-block", marginBottom:16,
              }}>INVENTORY</span>
              <h3 style={{
                fontSize:"clamp(20px,2vw,26px)", fontWeight:800,
                color:"#1a1a1a", marginBottom:12,
                fontFamily:"'Barlow Condensed',system-ui,sans-serif",
                textTransform:"uppercase",
                letterSpacing:"0.01em",
              }}>Inventory & Vendor Management</h3>
              <p style={{ fontSize:14, color:"#555", lineHeight:1.72, marginBottom:20 }}>
                Know exactly what raw materials you have in stock. Mealiez tracks daily ingredient consumption, flags low stock before you run out, and logs every vendor purchase against actual meals served.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {["Low-stock alerts with automatic reorder prompts","Vendor invoices tracked against daily purchase history"].map((c,i)=>(
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#444" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {c}
                  </div>
                ))}
              </div>
            </BorderGlow>

            {/* Right — Two smaller cards stacked */}
            <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
              {[
                { badge:"BILLING", title:"Automated Billing & Fee Collection", desc:"Monthly fee statements generated automatically based on meals attended. Members pay online, you get instant confirmation.", checks:["Auto-generated monthly fee statements","Online payment with instant digital receipts"] },
                { badge:"ANALYTICS", title:"Operations Reports & Analytics", desc:"Daily reports on food wastage, attendance, collection status, and cost-per-meal — all in one dashboard.", checks:["Daily food wastage & cost-per-meal","Revenue and outstanding dues dashboard"] },
              ].map((item,i)=>(
                <BorderGlow
                  key={i}
                  glowColor="20 80 70"
                  backgroundColor="transparent"
                  borderRadius={16}
                  glowRadius={25}
                  glowIntensity={0.4}
                  colors={["#FF6B35", "#FF875C", "#FFA27F"]}
                  className="rv-s pg-feature-small-card"
                  style={{
                    flex:1,
                    background:"rgba(255,255,255,0.65)",
                    backdropFilter:"blur(24px) saturate(1.4)",
                    WebkitBackdropFilter:"blur(24px) saturate(1.4)",
                    borderRadius:16,
                    border:"1px solid rgba(255,255,255,0.7)",
                    padding:"clamp(20px,2.5vw,28px)",
                    boxShadow:"0 4px 20px rgba(17,17,17,0.03)",
                  }}
                >
                  <span style={{
                    fontSize:10, fontWeight:800, color:"#FF6B35",
                    letterSpacing:"0.12em", textTransform:"uppercase",
                    background:"rgba(255,107,53,0.06)",
                    border:"1px solid rgba(255,107,53,0.12)",
                    borderRadius:100, padding:"3px 10px",
                    display:"inline-block", marginBottom:12,
                  }}>{item.badge}</span>
                  <h3 style={{
                    fontSize:16, fontWeight:800,
                    color:"#1a1a1a", marginBottom:8,
                    fontFamily:"'Barlow Condensed',system-ui,sans-serif",
                    textTransform:"uppercase",
                  }}>{item.title}</h3>
                  <p style={{ fontSize:13, color:"#555", lineHeight:1.68, marginBottom:12 }}>{item.desc}</p>
                  <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                    {item.checks.map((c,j)=>(
                      <div key={j} style={{ display:"flex", alignItems:"center", gap:7, fontSize:12, color:"#555" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {c}
                      </div>
                    ))}
                  </div>
                </BorderGlow>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WORKFLOW — Split Editorial
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%", padding:"clamp(72px,9vw,120px) 0",
        background:"#fff",
        position:"relative",
      }}>
        <div className="container">
          <div className="rv-el" style={{ marginBottom:48, textAlign:"center" }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#FF6B35",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(255,107,53,0.06)",
              border:"1px solid rgba(255,107,53,0.12)",
              borderRadius:100, padding:"4px 12px",
              display:"inline-block", marginBottom:16,
            }}>WORKFLOW</span>
            <h2 id="workflow-heading" className="editorial-heading" style={{
              fontSize:"clamp(28px,3.5vw,44px)",
              fontWeight:900, color:"#0a0a0a",
              lineHeight:1.08,
            }}>
              One booking triggers your<br/>
              <span style={{
                background:"linear-gradient(135deg,#FF6B35,#FF875C)",
                WebkitBackgroundClip:"text",
                backgroundClip:"text",
                WebkitTextFillColor:"transparent",
              }}>entire operation.</span>
            </h2>
          </div>

          <div className="pg-workflow-grid">
            {/* Left — Flow diagram */}
            <div className="rv-l d2" style={{
              background:"linear-gradient(145deg,rgba(255,248,244,0.9),rgba(255,240,232,0.7))",
              borderRadius:20,
              border:"1px solid rgba(255,107,53,0.06)",
              padding:"clamp(24px,3vw,40px)",
              height:300,
              display:"flex", alignItems:"center", justifyContent:"center",
              position:"relative", overflow:"hidden",
            }}>
              <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" style={{ maxWidth:360 }}>
                {/* Grid lines */}
                {[[40,80,360,80],[40,160,360,160],[120,40,120,200],[240,40,240,200],[320,40,320,200]].map(([x1,y1,x2,y2],i)=>(
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,107,53,0.06)" strokeWidth="1"/>
                ))}
                {/* Nodes */}
                {[
                  {x:80,y:60,label:"MEMBER\nBOOKS",color:"#FF6B35"},
                  {x:200,y:60,label:"KITCHEN\nPREPARES",color:"#FF875C"},
                  {x:320,y:60,label:"BILL\nGENERATED",color:"#FFA27F"},
                ].map((n,i)=>(
                  <g key={i}>
                    <circle cx={n.x} cy={n.y} r="20" fill={`${n.color}15`} stroke={n.color} strokeWidth="1.5"/>
                    <text x={n.x} y={n.y+4} textAnchor="middle" fontSize="8" fontWeight="700" fill={n.color}>{n.label.split('\n')[0]}</text>
                    <text x={n.x} y={n.y+13} textAnchor="middle" fontSize="7" fontWeight="600" fill={n.color}>{n.label.split('\n')[1]}</text>
                  </g>
                ))}
                {/* Connecting arrows */}
                {[[100,60,160,60],[220,60,280,60]].map(([x1,y1,x2,y2],i)=>(
                  <g key={i+10}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,107,53,0.2)" strokeWidth="1.5" strokeDasharray="4 3"/>
                    <polygon points={`${x2-2},${y2-4} ${x2+4},${y2} ${x2-2},${y2+4}`} fill="rgba(255,107,53,0.2)"/>
                  </g>
                ))}
                {/* Sub-nodes */}
                {[
                  {x:80,y:140,label:"HEADCOUNT\nUPDATED"},
                  {x:200,y:140,label:"INVENTORY\nSYNCED"},
                  {x:320,y:140,label:"PAYMENT\nCOLLECTED"},
                ].map((n,i)=>(
                  <g key={i+20}>
                    <rect x={n.x-28} y={n.y-14} width="56" height="28" rx="6" fill="rgba(200,192,184,0.15)" stroke="rgba(200,192,184,0.2)" strokeWidth="1"/>
                    <text x={n.x} y={n.y+2} textAnchor="middle" fontSize="7" fontWeight="600" fill="#999">{n.label.split('\n')[0]}</text>
                    <text x={n.x} y={n.y+11} textAnchor="middle" fontSize="7" fontWeight="600" fill="#999">{n.label.split('\n')[1]}</text>
                  </g>
                ))}
                {/* Vertical connectors */}
                {[[80,80,80,120],[200,80,200,120],[320,80,320,120]].map(([x1,y1,x2,y2],i)=>(
                  <line key={i+30} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(200,192,184,0.2)" strokeWidth="1" strokeDasharray="3 3"/>
                ))}
              </svg>
            </div>

            {/* Right — Content */}
            <div className="rv-r d2">
              <h3 className="editorial-heading" style={{
                fontSize:"clamp(22px,2.5vw,30px)",
                fontWeight:800, color:"#0a0a0a",
                marginBottom:16, lineHeight:1.15,
              }}>Member Books → Kitchen Prepares → Bill Generated. Automatically.</h3>
              <p style={{ fontSize:14.5, color:"#555", lineHeight:1.75, marginBottom:28 }}>
                When a member books a meal, the kitchen gets the headcount, inventory is updated, and the monthly bill is calculated — all without a single manual step. That's how Mealiez eliminates the daily back-and-forth.
              </p>

              {/* Two feature highlights */}
              <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                {[
                  { icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>, title:"Multi-Location Management", desc:"Run multiple hostel blocks and canteens from a single admin panel." },
                  { icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title:"Mobile App for Members & Admins", desc:"Book meals, check menus, and manage payments from one platform." },
                ].map((item,i)=>(
                  <div key={i} style={{
                    display:"flex", gap:14,
                    padding:"14px 16px",
                    background:"rgba(255,255,255,0.6)",
                    borderRadius:12,
                    border:"1px solid rgba(255,107,53,0.05)",
                  }}>
                    <div style={{
                      width:34, height:34, borderRadius:8,
                      background:"rgba(255,107,53,0.06)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      flexShrink:0,
                    }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize:14, fontWeight:700, color:"#1a1a1a", marginBottom:3 }}>{item.title}</h4>
                      <p style={{ fontSize:12.5, color:"#777", lineHeight:1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SOLUTIONS — Magazine Style
      ════════════════════════════════════════════════════════════ */}
      <section
        id="solutions"
        aria-labelledby="solutions-heading"
        style={{
          width:"100%", padding:"clamp(72px,9vw,120px) 0",
          background:"#fef6f0",
          position:"relative",
        }}
      >
        <div className="container">
          <div className="rv-el" style={{ marginBottom:48 }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#FF6B35",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(255,107,53,0.06)",
              border:"1px solid rgba(255,107,53,0.12)",
              borderRadius:100, padding:"4px 12px",
              display:"inline-block", marginBottom:16,
            }}>SOLUTIONS</span>
            <h2 id="solutions-heading" className="editorial-heading" style={{
              fontSize:"clamp(28px,3.5vw,44px)",
              fontWeight:900, color:"#0a0a0a",
              lineHeight:1.08, maxWidth:500,
            }}>
              Designed for every food service operation.
            </h2>
          </div>

          <div className="pg-solutions-grid">
            {[
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, title:"Hostel & College Mess", desc:"Manage student meal plans, opt-in bookings, dietary preferences, and automated monthly fee collection across all hostel blocks." },
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><path d="M12 8v8M8 12h8"/></svg>, title:"Factory & Industrial Canteen", desc:"Track shift-wise meals for hundreds of workers, manage subsidised meals, and integrate with access control systems." },
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title:"Corporate Cafeteria", desc:"Multi-vendor dining with digital meal wallets, payroll deduction, guest tracking, and daily spend reports for HR." },
            ].map((item,i)=>(
              <BorderGlow
                key={i}
                glowColor="20 80 70"
                backgroundColor="transparent"
                borderRadius={16}
                glowRadius={25}
                glowIntensity={0.4}
                colors={["#FF6B35", "#FF875C", "#FFA27F"]}
                className="rv-s pg-solution-card"
                style={{
                  padding:"clamp(24px,2.5vw,32px)",
                  borderRadius:16,
                  border:"1px solid rgba(255,107,53,0.06)",
                  background:"#fff",
                  boxShadow:"0 2px 12px rgba(17,17,17,0.03)",
                }}
              >
                <div style={{
                  width:40, height:40, borderRadius:10,
                  background:"rgba(255,107,53,0.06)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  marginBottom:16,
                }}>{item.icon}</div>
                <h3 className="editorial-heading" style={{
                  fontSize:16, fontWeight:800, color:"#1a1a1a",
                  marginBottom:8,
                }}>{item.title}</h3>
                <p style={{ fontSize:13, color:"#666", lineHeight:1.68 }}>{item.desc}</p>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TESTIMONIALS — Magazine Style
      ════════════════════════════════════════════════════════════ */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        style={{
          width:"100%", padding:"clamp(72px,9vw,120px) 0",
          background:"linear-gradient(180deg, #fdf8f5 0%, #fef6f0 100%)",
          position:"relative",
        }}
      >
        <div className="container">
          <div className="rv-el" style={{ marginBottom:48 }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#FF6B35",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(255,107,53,0.06)",
              border:"1px solid rgba(255,107,53,0.12)",
              borderRadius:100, padding:"4px 12px",
              display:"inline-block", marginBottom:16,
            }}>TESTIMONIALS</span>
            <h2 id="testimonials-heading" className="editorial-heading" style={{
              fontSize:"clamp(28px,3.5vw,44px)",
              fontWeight:900, color:"#0a0a0a",
              lineHeight:1.08, maxWidth:500,
            }}>
              Real results from real mess operators.
            </h2>
          </div>

          <div className="pg-testimonials-grid">
            {[
              { quote:"We were managing our hostel mess on WhatsApp and a shared Excel file. Every week there was a fight about the food bill. Since we switched to Mealiez, our food wastage has come down by almost 30% and the monthly billing just happens automatically. I wish we had done this sooner.", name:"Rajesh Nair", role:"Hostel Warden, Engineering College, Pune", tag:"HOSTEL", featured:true },
              { quote:"Collecting monthly mess fees was the most stressful part of my job — chasing students, cross-checking Excel entries, handling disputes. Now parents pay online through Mealiez, I get instant confirmation, and the ledger is always accurate. It's saved me at least 10 hours every month.", name:"Priya Sharma", role:"Mess Administrator, Student Housing Facility, Bengaluru", tag:"MESS", featured:false },
            ].map((t,i)=>
              <BorderGlow
                key={i}
                glowColor="20 80 70"
                backgroundColor="transparent"
                borderRadius={t.featured ? 20 : 16}
                glowRadius={25}
                glowIntensity={0.4}
                colors={["#FF6B35", "#FF875C", "#FFA27F"]}
                className={t.featured ? "testimonial-card-featured rv-el" : "testimonial-card-compact rv-el"}
                style={t.featured ? {
                  padding:"clamp(28px,3vw,40px)",
                  borderRadius:20,
                  border:"1px solid rgba(255,107,53,0.10)",
                  background:"linear-gradient(145deg,rgba(255,248,244,0.8),rgba(255,240,230,0.4))",
                } : {
                  padding:"clamp(20px,2.5vw,28px)",
                  borderRadius:16,
                  border:"1px solid rgba(0,0,0,0.04)",
                  background:"rgba(255,255,255,0.7)",
                  backdropFilter:"blur(8px)",
                  WebkitBackdropFilter:"blur(8px)",
                }}
              >
                <div className="testimonial-quote-mark" aria-hidden="true">“</div>
                <p style={{
                  fontSize:"clamp(14px,1.1vw,15px)",
                  color:"#444", lineHeight:1.82,
                  fontStyle:"italic",
                  marginBottom:24,
                }}>{t.quote}</p>
                <div style={{
                  display:"flex", justifyContent:"space-between", alignItems:"flex-end",
                  borderTop:"1px solid rgba(0,0,0,0.04)",
                  paddingTop:16,
                }}>
                  <div>
                    <p style={{ fontWeight:700, color:"#1a1a1a", marginBottom:2, fontSize:14 }}>{t.name}</p>
                    <p style={{ fontSize:12, color:"#999" }}>{t.role}</p>
                  </div>
                  <span style={{
                    fontWeight:800, fontSize:12, letterSpacing:"0.08em",
                    color:"#FF6B35",
                    fontFamily:"'Barlow Condensed',system-ui,sans-serif",
                    textTransform:"uppercase",
                  }}>{t.tag}</span>
                </div>
              </BorderGlow>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PRICING — Spotlight Card
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%", padding:"clamp(72px,9vw,120px) 0",
        background:"linear-gradient(180deg,#fef6f0 0%,#fdf0e8 100%)",
        position:"relative",
      }}>
        <div className="container">
          <div className="rv-el" style={{ marginBottom:48, textAlign:"center" }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#FF6B35",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(255,107,53,0.06)",
              border:"1px solid rgba(255,107,53,0.12)",
              borderRadius:100, padding:"4px 12px",
              display:"inline-block", marginBottom:16,
            }}>PRICING</span>
            <h2 id="pricing-heading" className="editorial-heading" style={{
              fontSize:"clamp(28px,3.5vw,44px)",
              fontWeight:900, color:"#0a0a0a",
              lineHeight:1.08,
            }}>
              Simple, honest pricing.
            </h2>
          </div>

          <div className="pg-pricing-grid">
            {/* Free */}
            <div className="rv-s d1" style={{
              padding:"clamp(20px,2.5vw,28px)",
              borderRadius:16,
              background:"#fff",
              border:"1px solid rgba(0,0,0,0.04)",
              boxShadow:"0 2px 12px rgba(17,17,17,0.03)",
            }}>
              <h3 style={{
                fontSize:16, fontWeight:800,
                color:"#1a1a1a", marginBottom:16,
                fontFamily:"'Barlow Condensed',system-ui,sans-serif",
                textTransform:"uppercase",
              }}>Free</h3>
              <div style={{ display:"flex", alignItems:"baseline", gap:3, marginBottom:20 }}>
                <span className="stat-value" style={{ fontSize:36, lineHeight:1, color:"#1a1a1a" }}>₹0</span>
                <span style={{ fontSize:13, color:"#bbb" }}>/forever</span>
              </div>
              {["List on Marketplace","Basic Mess Info Page","Update or Add plans"].map((f,i)=>(
                <div key={i} className="pricing-feature-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ color:"#444" }}>{f}</span>
                </div>
              ))}
              {["No Student Management","No Attendance Tracking"].map((f,i)=>(
                <div key={i} className="pricing-feature-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  <span style={{ color:"#ccc" }}>{f}</span>
                </div>
              ))}
              <button className="pg-pricing-btn-outline">Get Started</button>
            </div>

            {/* Starter — Spotlight */}
            <div className="rv-s d2 pg-pricing-featured" style={{
              padding:"clamp(24px,3vw,32px)",
              borderRadius:20,
              background:"linear-gradient(145deg,#FF6B35 0%,#FF875C 55%,#FFA27F 100%)",
              boxShadow:"0 24px 64px rgba(255,107,53,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
              position:"relative",
              transform:"translateY(-8px)",
            }}>
              <div style={{
                position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)",
                background:"#fff",
                border:"1px solid rgba(255,107,53,0.2)",
                borderRadius:100, padding:"4px 16px",
                fontSize:10, fontWeight:800, color:"#FF6B35",
                letterSpacing:"0.08em", whiteSpace:"nowrap",
                boxShadow:"0 4px 12px rgba(255,107,53,0.15)",
              }}>MOST POPULAR</div>
              <h3 style={{
                fontSize:18, fontWeight:800,
                color:"#fff", marginBottom:16,
                fontFamily:"'Barlow Condensed',system-ui,sans-serif",
                textTransform:"uppercase",
              }}>Starter</h3>
              <div style={{ display:"flex", alignItems:"baseline", gap:3, marginBottom:20 }}>
                <span className="stat-value" style={{ fontSize:40, lineHeight:1, color:"#fff" }}>₹499</span>
                <span style={{ fontSize:14, color:"rgba(255,255,255,0.6)" }}>/month</span>
              </div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.6)", marginBottom:12 }}>Everything you need to start:</div>
              {["Up to 50 Students","QR Attendance System","Menu Management","Student Management","List on Marketplace"].map((f,i)=>(
                <div key={i} style={{
                  display:"flex", alignItems:"center", gap:10,
                  fontSize:13.5, color:"#fff", fontWeight:500,
                  padding:"7px 0",
                  borderBottom:i<4?"1px solid rgba(255,255,255,0.1)":"none",
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {f}
                </div>
              ))}
              <button className="pg-pricing-btn-primary">Choose Starter</button>
            </div>

            {/* Pro */}
            <div className="rv-s d3" style={{
              padding:"clamp(20px,2.5vw,28px)",
              borderRadius:16,
              background:"#fff",
              border:"1px solid rgba(0,0,0,0.04)",
              boxShadow:"0 2px 12px rgba(17,17,17,0.03)",
            }}>
              <h3 style={{
                fontSize:16, fontWeight:800,
                color:"#1a1a1a", marginBottom:16,
                fontFamily:"'Barlow Condensed',system-ui,sans-serif",
                textTransform:"uppercase",
              }}>Pro</h3>
              <div style={{ display:"flex", alignItems:"baseline", gap:3, marginBottom:20 }}>
                <span className="stat-value" style={{ fontSize:36, lineHeight:1, color:"#1a1a1a" }}>₹799</span>
                <span style={{ fontSize:13, color:"#bbb" }}>/month</span>
              </div>
              <div style={{ fontSize:12, color:"#999", marginBottom:12 }}>Everything in Starter, plus:</div>
              {["Up to 100 Students","Full Payment Management","Advanced Analytics","On-site Setup & Training"].map((f,i)=>(
                <div key={i} className="pricing-feature-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ color:"#444" }}>{f}</span>
                </div>
              ))}
              <button className="pg-pricing-btn-outline">Choose Pro</button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          RESOURCES — Editorial Card Row
      ════════════════════════════════════════════════════════════ */}
      <section
        id="resources"
        aria-labelledby="resources-heading"
        style={{
          width:"100%", padding:"clamp(72px,9vw,120px) 0",
          background:"linear-gradient(180deg,#fff 0%,#fef6f0 100%)",
          position:"relative",
        }}
      >
        <div className="container">
          <div className="rv-el" style={{ marginBottom:48 }}>
            <span style={{
              fontSize:11, fontWeight:800, color:"#FF6B35",
              letterSpacing:"0.12em", textTransform:"uppercase",
              background:"rgba(255,107,53,0.06)",
              border:"1px solid rgba(255,107,53,0.12)",
              borderRadius:100, padding:"4px 12px",
              display:"inline-block", marginBottom:16,
            }}>RESOURCES</span>
            <h2 id="resources-heading" className="editorial-heading" style={{
              fontSize:"clamp(28px,3.5vw,44px)",
              fontWeight:900, color:"#0a0a0a",
              lineHeight:1.08,
            }}>
              Practical resources for<br/>
              <span style={{ color:"rgba(0,0,0,0.3)" }}>mess operators.</span>
            </h2>
          </div>

          <div className="pg-resources-grid">
            {[
              { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, badge:"REPORT", title:"Indian Hostel Mess Food Wastage Report 2026" },
              { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, badge:"CASE STUDY", title:"How a 1,200-Member Hostel Reduced Wastage by 28%" },
              { icon:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, badge:"GUIDE", title:"Step-by-Step Guide to Digitising Your Hostel Mess" },
            ].map((r,i)=>(
              <BorderGlow
                key={i}
                glowColor="20 80 70"
                backgroundColor="transparent"
                borderRadius={16}
                glowRadius={25}
                glowIntensity={0.4}
                colors={["#FF6B35", "#FF875C", "#FFA27F"]}
                className="rv-s pg-resource-card"
                style={{
                  padding:0, borderRadius:16, overflow:"hidden",
                  border:"1px solid rgba(0,0,0,0.04)",
                  background:"#fff",
                  boxShadow:"0 2px 12px rgba(17,17,17,0.03)",
                  cursor:"pointer",
                }}
              >
                <div className="pg-resource-thumb">
                  <div className="pg-resource-thumb-grid" aria-hidden="true"/>
                  <div style={{ position:"relative", zIndex:1 }}>{r.icon}</div>
                </div>
                <div style={{ padding:"16px 18px" }}>
                  <span style={{
                    fontSize:9, fontWeight:800, color:"#FF6B35",
                    letterSpacing:"0.12em", textTransform:"uppercase",
                    background:"rgba(255,107,53,0.06)",
                    border:"1px solid rgba(255,107,53,0.12)",
                    borderRadius:100, padding:"2px 8px",
                    display:"inline-block", marginBottom:10,
                  }}>{r.badge}</span>
                  <p style={{ fontSize:14, fontWeight:600, color:"#1a1a1a", lineHeight:1.45 }}>{r.title}</p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA — Cinematic with Floating Particles
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        width:"100%",
        background:"linear-gradient(180deg,#fdf0e8 0%,#fef6f0 100%)",
        padding:"clamp(72px,10vw,120px) 0",
        position:"relative",
        overflow:"hidden",
      }}>
        <FloatingParticles count={6} minSize={3} maxSize={5} speed={0.1} />
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <BorderGlow
            glowColor="20 80 70"
            backgroundColor="transparent"
            borderRadius={24}
            glowRadius={35}
            glowIntensity={0.5}
            colors={["#FF6B35", "#FF875C", "#FFA27F"]}
            className="rv-s"
            style={{
              maxWidth:800, margin:"0 auto", textAlign:"center",
              padding:"clamp(48px,6vw,80px) clamp(24px,4vw,56px)",
              borderRadius:24,
              background:"rgba(255,255,255,0.5)",
              backdropFilter:"blur(32px) saturate(1.6)",
              WebkitBackdropFilter:"blur(32px) saturate(1.6)",
              border:"1px solid rgba(255,255,255,0.8)",
              boxShadow:"0 4px 24px rgba(17,17,17,0.03)",
              position:"relative",
            }}
          >
            <div style={{
              position:"absolute", width:"50%", height:"50%",
              top:"25%", left:"25%",
              background:"radial-gradient(circle,rgba(255,107,53,0.04),transparent 60%)",
              filter:"blur(60px)", pointerEvents:"none",
            }}/>
            <h2 className="editorial-heading" style={{
              fontSize:"clamp(32px,4vw,48px)",
              fontWeight:900, color:"#0a0a0a",
              lineHeight:1.1, marginBottom:16,
              position:"relative",
            }}>
              Your mess deserves better<br/>
              <span style={{
                background:"linear-gradient(135deg,#FF6B35,#FF875C)",
                WebkitBackgroundClip:"text",
                backgroundClip:"text",
                WebkitTextFillColor:"transparent",
              }}>than WhatsApp and Excel.</span>
            </h2>
            <p style={{
              fontSize:"clamp(14px,1.2vw,16px)",
              color:"#555", lineHeight:1.75,
              maxWidth:560, margin:"0 auto 36px",
              position:"relative",
            }}>
              Book a free 30-minute demo and see exactly how Mealiez cuts food wastage, automates monthly billing, and gives you complete visibility over your operations.
            </p>
            <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", position:"relative" }}>
              <Link href="/book-demo" className="pg-cta-primary pg-cta-primary-lg" aria-label="Book a free demo with Mealiez">
                Book a Free Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/why-mealiez" className="pg-cta-ghost pg-cta-ghost-lg">
                Calculate Your ROI
              </Link>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}