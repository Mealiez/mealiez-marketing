"use client";

import React, { useEffect } from "react";
import Link from "next/link";
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

const sections = [
  {
    id: "data-security",
    icon: "🔐",
    title: "Data Security",
    color: "#FF6B35",
    items: [
      "AES-256 encryption for all stored data at rest",
      "TLS 1.3 encryption for all data in transit",
      "Role-based access control (RBAC) with granular permissions",
      "Multi-factor authentication (MFA) for all admin accounts",
      "Automatic session expiry and device management",
      "Zero-knowledge architecture — Mealiez staff cannot view your member data",
    ],
  },
  {
    id: "privacy",
    icon: "🛡️",
    title: "Privacy",
    color: "#8b5cf6",
    items: [
      "GDPR-aligned data processing and storage architecture",
      "No data sold to third parties — ever",
      "Member data belongs to the operator, not Mealiez",
      "Right to data export: full data portability in standard formats",
      "Right to deletion: complete account and data removal on request",
      "Transparent cookie policy with granular consent controls",
    ],
  },
  {
    id: "infrastructure",
    icon: "🏗️",
    title: "Infrastructure",
    color: "#22c55e",
    items: [
      "Hosted on AWS India region (ap-south-1) — data stays in India",
      "Auto-scaling architecture handles 10x traffic spikes seamlessly",
      "Multi-AZ deployment ensures zero single-point-of-failure",
      "CDN-accelerated delivery for sub-second response times",
      "Separate production and staging environments with no data crossover",
      "DDoS protection and Web Application Firewall (WAF) on all endpoints",
    ],
  },
  {
    id: "backups",
    icon: "💾",
    title: "Backups",
    color: "#f59e0b",
    items: [
      "Automated daily encrypted backups of all operator data",
      "Point-in-time recovery (PITR) with 30-day retention window",
      "Cross-region backup replication for disaster recovery",
      "Backup integrity verified automatically on every snapshot",
      "Enterprise customers can request dedicated backup schedules",
      "Recovery time objective (RTO): under 4 hours for critical incidents",
    ],
  },
  {
    id: "reliability",
    icon: "⚡",
    title: "Reliability",
    color: "#3b82f6",
    items: [
      "99.9% uptime SLA guaranteed for all Standard plan customers",
      "99.99% uptime SLA for Enterprise customers with dedicated infrastructure",
      "Real-time public status page at status.mealiez.in",
      "Proactive incident communication with postmortem reports",
      "Scheduled maintenance during off-peak hours with advance notice",
      "24/7 automated monitoring with sub-minute alert response",
    ],
  },
];

const certBadges = [
  { icon: "🔒", label: "SSL/TLS Encrypted" },
  { icon: "🏛️", label: "AWS India Hosted" },
  { icon: "🛡️", label: "GDPR Aligned" },
  { icon: "✅", label: "99.9% Uptime SLA" },
  { icon: "🔑", label: "MFA Enforced" },
  { icon: "💾", label: "Daily Backups" },
];

export default function SecurityPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}
        .sec { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:760px; margin:0 auto; padding:0 40px; }
        .s-cream{ background:#fef6f0; padding:80px 0; }
        .s-white{ background:#fff; padding:80px 0; }
        .card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:20px;padding:32px;}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
        .check-item{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:#444;margin-bottom:13px;line-height:1.65;}
        .anchor-link{display:inline-block;font-size:13px;color:#FF6B35;text-decoration:none;font-weight:600;padding:6px 14px;border:1px solid rgba(255,107,53,0.2);border-radius:100px;transition:background .15s,border-color .15s;}
        .anchor-link:hover{background:#fff3ee;border-color:#FF6B35;}
      `}</style>

      <div className="sec">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
              Security & Trust
            </div>
            <h1 className="rv d1" style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Your data is safe.<br />
              <span style={{ color: "#FF6B35" }}>We take that seriously.</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 40px" }}>
              Mealiez is built with enterprise-grade security from day one. Here's exactly how we protect your operation's data.
            </p>

            {/* Cert badges */}
            <div className="rv d3" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {certBadges.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 100, padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "#333" }}>
                  <span style={{ fontSize: 16 }}>{b.icon}</span>{b.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick nav */}
        <section style={{ background: "#fff", padding: "32px 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="w">
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="anchor-link">{s.icon} {s.title}</a>
              ))}
            </div>
          </div>
        </section>

        {/* Security sections */}
        {sections.map((sec, idx) => (
          <section key={sec.id} id={sec.id} className={idx % 2 === 0 ? "s-white" : "s-cream"}>
            <div className="w">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "flex-start" }}>
                <div>
                  <div className="rv" style={{ fontSize: 48, marginBottom: 16 }}>{sec.icon}</div>
                  <h2 className="rv d1" style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.2, letterSpacing: "-.025em", marginBottom: 12 }}>{sec.title}</h2>
                  <div style={{ width: 40, height: 4, borderRadius: 2, background: sec.color, marginTop: 4 }} />
                </div>
                <BorderGlow className="card rv d2" style={{ borderTop: `3px solid ${sec.color}` }} backgroundColor="#ffffff" borderRadius={20}>
                  {sec.items.map((item, i) => (
                    <div key={i} className="check-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sec.color} strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </div>
                  ))}
                </BorderGlow>
              </div>
            </div>
          </section>
        ))}

        {/* Responsible disclosure */}
        <section className="s-white">
          <div className="w-sm">
            <BorderGlow className="card rv" style={{ textAlign: "center", padding: "40px 48px", borderTop: "3px solid #FF6B35" }} backgroundColor="#ffffff" borderRadius={20}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 12 }}>Responsible Disclosure</h3>
              <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.8, marginBottom: 24 }}>
                If you discover a security vulnerability in Mealiez, please report it responsibly. We take all reports seriously and aim to respond within 24 hours.
              </p>
              <a href="mailto:security@mealiez.in" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.2)", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700, color: "#FF6B35", textDecoration: "none" }}>
                📧 security@mealiez.in
              </a>
            </BorderGlow>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Questions about our security?
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 36px" }}>
            Our team is happy to share our full security documentation during an enterprise evaluation.
          </p>
          <div className="rv d2" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-ora">Schedule a Security Review</Link>
            <a href="mailto:security@mealiez.in" style={{ color: "rgba(255,255,255,.6)", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, padding: "15px 0" }}>
              Email Security Team →
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
