"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { solutions } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";
import BorderGlow from "@/components/ui/border-glow";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function SolutionsOverviewPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}
        .so { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .sol-card{background:#fff;border:1.5px solid rgba(0,0,0,.07);border-radius:20px;padding:32px;text-decoration:none;display:block;transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s,border-color .25s;}
        .sol-card:hover{transform:translateY(-6px);box-shadow:0 20px 56px rgba(255,107,53,.12);border-color:rgba(255,107,53,.25);}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
        .btn-out{background:#fff;color:#1a1a1a;border:1.5px solid rgba(0,0,0,.12);border-radius:10px;padding:14px 32px;font-size:15px;font-weight:600;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:border-color .2s,background .2s,transform .2s;}
        .btn-out:hover{border-color:rgba(255,107,53,.35);background:#fff3ee;transform:translateY(-2px);}
      `}</style>

      <div className="so">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
              Industry Solutions
            </div>
            <h1 className="rv d1" style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Mealiez for{" "}
              <span style={{ color: "#FF6B35" }}>Your Type of Operation</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 540, margin: "0 auto 38px" }}>
              Whether you manage a hostel mess, college canteen, factory cafeteria, or corporate dining — Mealiez is built with the specific workflows, challenges, and integrations your operation actually needs.
            </p>
            <div className="rv d3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book-demo" className="btn-ora">Book a Demo</Link>
              <Link href="/why-mealiez" className="btn-out">Why Mealiez?</Link>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section style={{ background: "#fff", padding: "88px 0" }}>
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Choose Your Industry
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 500, margin: "0 auto 56px" }}>
              Select your operation type to see exactly how Mealiez works for your specific setup.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
              {solutions.map((sol, i) => (
                <BorderGlow key={sol.slug} backgroundColor="transparent" borderRadius={20} glowIntensity={0.4} colors={["#FF6B35", "#FF875C", "#FFA27F"]}>
                <Link href={`/solutions/${sol.slug}`} className={`sol-card rv d${(i % 4) + 1}`}>
                   <div style={{ marginBottom: 16 }}>
                     <Icon name={sol.icon} size={36} color="#FF6B35" />
                   </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", marginBottom: 10 }}>{sol.title}</h3>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7, marginBottom: 20 }}>{sol.tagline}</p>
                  <div style={{ background: "rgba(255,107,53,0.06)", borderRadius: 10, padding: "10px 14px", fontSize: 12.5, color: "#555", lineHeight: 1.6, marginBottom: 20 }}>
                    <strong style={{ color: "#FF6B35" }}>ROI:</strong> {sol.roiImpact.split("within")[0].trim()}
                  </div>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: "#FF6B35", display: "flex", alignItems: "center", gap: 6 }}>
                    View {sol.title} Solution
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </span>
                </Link>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Not sure which fits best?
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 36px" }}>
            Tell us about your operation and our team will show you exactly how Mealiez fits your setup in a 20-minute call.
          </p>
          <Link href="/book-demo" className="btn-ora rv d2">Talk to an Expert</Link>
        </section>

      </div>
    </>
  );
}
