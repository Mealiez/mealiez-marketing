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

const layers = [
  {
    id: "cloud",
    icon: "☁️",
    color: "#3b82f6",
    title: "Cloud Provider — AWS India",
    subtitle: "Foundation Layer",
    points: [
      "All data resides in the AWS ap-south-1 (Mumbai) region — no data leaves India",
      "Mealiez uses AWS EC2, RDS (PostgreSQL), S3, CloudFront, and SES",
      "AWS maintains SOC 2 Type II, ISO 27001, and PCI DSS Level 1 certifications",
      "Physical data centre access is restricted to authorised AWS personnel with biometric controls",
      "AWS Nitro System provides hardware-level isolation between customer workloads",
    ],
  },
  {
    id: "network",
    icon: "🌐",
    color: "#8b5cf6",
    title: "Network Architecture",
    subtitle: "Perimeter Security",
    points: [
      "All traffic is routed through AWS VPC with strict security group rules",
      "Web Application Firewall (WAF) inspects all inbound HTTP/HTTPS requests",
      "DDoS protection via AWS Shield Standard on all public endpoints",
      "TLS 1.3 enforced on all connections — older protocols (TLS 1.0, 1.1) are rejected",
      "Certificate management via AWS Certificate Manager with auto-renewal",
      "Private subnets for database and application tiers — no direct internet access",
    ],
  },
  {
    id: "database",
    icon: "🗄️",
    color: "#22c55e",
    title: "Database Layer",
    subtitle: "Data Storage",
    points: [
      "PostgreSQL on Amazon RDS with Multi-AZ deployment for automatic failover",
      "Storage encrypted with AES-256 using AWS KMS customer-managed keys",
      "Automated backups every 24 hours with 30-day point-in-time recovery (PITR)",
      "Read replicas in a separate Availability Zone for resilience and read scaling",
      "Database parameter groups enforce least-privilege access and audit logging",
      "All database connections require SSL/TLS — plaintext connections are refused",
    ],
  },
  {
    id: "application",
    icon: "⚙️",
    color: "#FF6B35",
    title: "Application Layer",
    subtitle: "Runtime Security",
    points: [
      "Application servers run in private subnets — accessible only through load balancers",
      "Secrets (API keys, DB credentials) managed via AWS Secrets Manager with automatic rotation",
      "Container images scanned for vulnerabilities before every production deployment",
      "Dependency vulnerability scanning runs on every CI/CD pipeline run",
      "Environment-level isolation: production and staging share no resources or credentials",
      "Runtime application self-protection (RASP) guards against injection attacks",
    ],
  },
  {
    id: "access",
    icon: "🔑",
    color: "#f59e0b",
    title: "Access Control",
    subtitle: "Identity & Auth",
    points: [
      "Role-based access control (RBAC) enforces principle of least privilege across all tiers",
      "MFA mandatory for all Mealiez engineering and operations staff",
      "SSH access to production servers requires hardware security keys (FIDO2)",
      "All privileged operations are logged, monitored, and subject to peer review",
      "Mealiez staff cannot view operator member data — zero-knowledge architecture",
      "Session tokens expire after 24 hours of inactivity; refresh tokens after 30 days",
    ],
  },
  {
    id: "monitoring",
    icon: "📊",
    color: "#ec4899",
    title: "Monitoring & Incident Response",
    subtitle: "Observability",
    points: [
      "24/7 automated monitoring via AWS CloudWatch with sub-minute alerting",
      "Centralised log aggregation with anomaly detection and alert rules",
      "P0 incidents trigger automated paging to on-call engineers within 2 minutes",
      "Incident response runbooks maintained and reviewed quarterly",
      "Post-incident reviews (PIRs) published for all major incidents on status.mealiez.in",
      "Annual third-party penetration testing with remediation tracked to closure",
    ],
  },
];

const slaData = [
  { metric: "Standard Plan Uptime SLA", value: "99.9%" },
  { metric: "Enterprise Plan Uptime SLA", value: "99.99%" },
  { metric: "Backup Frequency", value: "Every 24 h" },
  { metric: "PITR Retention Window", value: "30 days" },
  { metric: "Failover Time (Multi-AZ)", value: "< 60 sec" },
  { metric: "P0 Incident Response", value: "< 2 min" },
  { metric: "Recovery Time Objective (RTO)", value: "< 4 hours" },
  { metric: "Recovery Point Objective (RPO)", value: "< 1 hour" },
];

export default function DataInfrastructurePage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(22px); transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.08s} .d2{transition-delay:.16s} .d3{transition-delay:.24s} .d4{transition-delay:.32s}
        .lp { font-family:'Plus Jakarta Sans','Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:860px; margin:0 auto; padding:0 40px; }
        .infra-card { background:#fff; border:1px solid rgba(0,0,0,.07); border-radius:20px; padding:32px; margin-bottom:20px; }
        .check-item { display:flex; align-items:flex-start; gap:10px; font-size:14px; color:#444; margin-bottom:12px; line-height:1.7; }
        .anchor-pill { display:inline-block; font-size:12.5px; color:#FF6B35; text-decoration:none; font-weight:600; padding:5px 13px; border:1px solid rgba(255,107,53,0.2); border-radius:100px; transition:background .15s,border-color .15s; white-space:nowrap; }
        .anchor-pill:hover { background:#fff3ee; border-color:#FF6B35; }
        .sla-row { display:flex; align-items:center; justify-content:space-between; padding:14px 0; border-bottom:1px solid rgba(0,0,0,0.05); }
        .sla-row:last-child { border-bottom:none; }
        @media(max-width:640px){ .w,.w-sm{ padding:0 20px; } .infra-card{ padding:20px; } }
      `}</style>

      <div className="lp">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 64px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 11.5, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 22 }}>
              Legal · Data Infrastructure
            </div>
            <h1 className="rv d1" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 18 }}>
              Data Infrastructure
            </h1>
            <p className="rv d2" style={{ fontSize: 16, color: "#666", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 28px" }}>
              A transparent, layer-by-layer breakdown of how Mealiez stores, protects, and keeps your data available — built on AWS India with enterprise-grade controls throughout.
            </p>
            <p className="rv d3" style={{ fontSize: 12.5, color: "#aaa" }}>
              Last updated: 1 July 2026
            </p>
          </div>
        </section>

        {/* Quick nav */}
        <section style={{ background: "#fff", padding: "24px 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="w">
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {layers.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="anchor-pill">{l.icon} {l.title.split("—")[0].trim()}</a>
              ))}
              <a href="#sla" className="anchor-pill">📋 SLA Metrics</a>
            </div>
          </div>
        </section>

        {/* Layers */}
        <section style={{ background: "#fef6f0", padding: "64px 0" }}>
          <div className="w-sm">
            {layers.map((layer) => (
              <BorderGlow key={layer.id} id={layer.id} className="rv infra-card" style={{ borderTop: `3px solid ${layer.color}` }} backgroundColor="#ffffff" borderRadius={16}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 24 }}>
                  <div style={{ fontSize: 38, lineHeight: 1, flexShrink: 0 }}>{layer.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: layer.color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{layer.subtitle}</div>
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", margin: 0, letterSpacing: "-0.02em" }}>{layer.title}</h2>
                  </div>
                </div>
                {layer.points.map((point, i) => (
                  <div key={i} className="check-item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={layer.color} strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12"/></svg>
                    {point}
                  </div>
                ))}
              </BorderGlow>
            ))}

            {/* SLA Table */}
            <BorderGlow id="sla" className="rv infra-card" style={{ borderTop: "3px solid #FF6B35", marginTop: 8 }} backgroundColor="#ffffff" borderRadius={16}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", marginBottom: 24, letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 28 }}>📋</span> SLA & Recovery Metrics
              </h2>
              {slaData.map((row) => (
                <div key={row.metric} className="sla-row">
                  <span style={{ fontSize: 14, color: "#555" }}>{row.metric}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", background: "rgba(255,107,53,0.07)", padding: "3px 12px", borderRadius: 100, border: "1px solid rgba(255,107,53,0.15)" }}>{row.value}</span>
                </div>
              ))}
            </BorderGlow>

            {/* Contact */}
            <BorderGlow className="rv infra-card" style={{ textAlign: "center", padding: "36px 32px", marginTop: 4 }} backgroundColor="#ffffff" borderRadius={16}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🏗️</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", marginBottom: 8 }}>Need a full security questionnaire?</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75, margin: "0 auto 20px", maxWidth: 440 }}>
                Enterprise customers can request our full infrastructure documentation, penetration test reports, and custom compliance questionnaires.
              </p>
              <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FF6B35,#FF875C)", color: "#fff", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700, textDecoration: "none", boxShadow: "0 6px 20px rgba(255,107,53,0.3)" }}>
                Schedule a Security Review →
              </Link>
            </BorderGlow>
          </div>
        </section>

        {/* Bottom nav */}
        <section style={{ background: "#fff", padding: "32px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="w" style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            {[["Privacy Policy", "/legal/privacy"], ["Terms of Service", "/legal/terms"], ["Security", "/security"]].map(([label, href]) => (
              <Link key={label} href={href} className="anchor-pill">{label}</Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
