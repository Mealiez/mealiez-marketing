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

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      {
        heading: "Account & Operator Information",
        body: "When you register for Mealiez, we collect your name, email address, phone number, organisation name, and billing information. This data is required to create and maintain your account.",
      },
      {
        heading: "Member & Resident Data",
        body: "As an operator, you may upload or input data about your mess members — including names, contact details, meal preferences, and payment records. This data belongs to you and your organisation. Mealiez acts only as a data processor.",
      },
      {
        heading: "Usage Data",
        body: "We automatically collect information on how you interact with the platform — pages visited, features used, session duration, and device/browser type. This helps us improve the product experience.",
      },
      {
        heading: "Payment Data",
        body: "Payment transactions are processed through PCI-DSS compliant payment gateways. Mealiez does not store raw card numbers or CVVs. We receive tokenised transaction references and status.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      {
        heading: "Service Delivery",
        body: "We use your data to provide the Mealiez platform — managing meal bookings, generating bills, processing payments, and delivering analytics dashboards.",
      },
      {
        heading: "Product Improvement",
        body: "Aggregated and anonymised usage data helps us understand which features are most valuable and where to focus development efforts.",
      },
      {
        heading: "Communications",
        body: "We send transactional emails (invoices, receipts, alerts) and, with your consent, product updates and announcements. You can unsubscribe from marketing emails at any time.",
      },
      {
        heading: "Legal & Compliance",
        body: "We may use your data to comply with applicable Indian laws, resolve disputes, and enforce our terms of service.",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third Parties",
    content: [
      {
        heading: "We Do Not Sell Your Data",
        body: "Mealiez does not sell, rent, or trade your personal information or your members' data to any third parties — ever.",
      },
      {
        heading: "Service Providers",
        body: "We share limited data with trusted sub-processors who help us operate the platform: cloud hosting (AWS), payment gateways (Razorpay / Stripe), email delivery (SES), and analytics (internal only). All sub-processors are bound by data processing agreements.",
      },
      {
        heading: "Legal Disclosure",
        body: "We may disclose data if required by law, court order, or government authority. We will notify affected operators where legally permitted to do so.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    content: [
      {
        heading: "Access & Portability",
        body: "You have the right to request a full export of all data associated with your account in standard machine-readable formats (CSV/JSON) at any time.",
      },
      {
        heading: "Correction",
        body: "You can update your account information directly from your dashboard at any time.",
      },
      {
        heading: "Deletion",
        body: "You may request complete deletion of your account and all associated data. We will process this within 30 days and confirm via email. Note that some data may be retained for legal or audit obligations for up to 7 years under Indian law.",
      },
      {
        heading: "Marketing Opt-Out",
        body: "Every marketing email includes an unsubscribe link. You can also manage communication preferences from your account settings.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    content: [
      {
        heading: "Essential Cookies",
        body: "We use strictly necessary cookies to authenticate your session, prevent fraud, and keep the platform functional. These cannot be disabled.",
      },
      {
        heading: "Analytics Cookies",
        body: "With your consent, we use first-party analytics to understand platform usage. We do not use Google Analytics or any third-party advertising trackers.",
      },
      {
        heading: "Managing Cookies",
        body: "You can control cookie preferences via the cookie banner shown on first visit, or through your browser settings.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      {
        heading: "Active Accounts",
        body: "Data is retained for as long as your account is active and for a period of 90 days after termination, during which you can request an export.",
      },
      {
        heading: "Financial Records",
        body: "Transaction and billing data is retained for 7 years as required by Indian GST and accounting laws.",
      },
      {
        heading: "Backups",
        body: "Encrypted backups are retained for 30 days with point-in-time recovery. After that, they are permanently and irreversibly deleted.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(22px); transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.08s} .d2{transition-delay:.16s} .d3{transition-delay:.24s}
        .lp { font-family:'Plus Jakarta Sans','Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:780px; margin:0 auto; padding:0 40px; }
        .lp-card { background:#fff; border:1px solid rgba(0,0,0,.07); border-radius:18px; padding:28px 32px; margin-bottom:16px; }
        .anchor-pill { display:inline-block; font-size:12.5px; color:#FF6B35; text-decoration:none; font-weight:600; padding:5px 13px; border:1px solid rgba(255,107,53,0.2); border-radius:100px; transition:background .15s,border-color .15s; white-space:nowrap; }
        .anchor-pill:hover { background:#fff3ee; border-color:#FF6B35; }
        @media(max-width:640px){ .w,.w-sm{ padding:0 20px; } .lp-card{ padding:20px; } }
      `}</style>

      <div className="lp">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 64px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 11.5, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 22 }}>
              Legal · Privacy Policy
            </div>
            <h1 className="rv d1" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 18 }}>
              Privacy Policy
            </h1>
            <p className="rv d2" style={{ fontSize: 16, color: "#666", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 28px" }}>
              We believe privacy is a right, not a feature. This policy explains exactly what data we collect, why, and how we protect it.
            </p>
            <p className="rv d3" style={{ fontSize: 12.5, color: "#aaa" }}>
              Last updated: 1 July 2026 · Effective from: 1 July 2026
            </p>
          </div>
        </section>

        {/* Quick nav */}
        <section style={{ background: "#fff", padding: "24px 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="w">
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="anchor-pill">{s.title}</a>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ background: "#fef6f0", padding: "64px 0" }}>
          <div className="w-sm">
            {sections.map((sec, si) => (
              <div key={sec.id} id={sec.id} className="rv" style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 20, letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ display: "inline-block", width: 4, height: 22, background: "linear-gradient(180deg,#FF6B35,#FF875C)", borderRadius: 2, flexShrink: 0 }} />
                  {sec.title}
                </h2>
                {sec.content.map((block, bi) => (
                  <BorderGlow key={bi} className="lp-card" backgroundColor="#ffffff" borderRadius={16}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#FF6B35", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{block.heading}</h3>
                    <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.8, margin: 0 }}>{block.body}</p>
                  </BorderGlow>
                ))}
              </div>
            ))}

            {/* Contact */}
            <BorderGlow className="rv lp-card" style={{ borderTop: "3px solid #FF6B35", textAlign: "center", padding: "36px 32px", marginTop: 16 }} backgroundColor="#ffffff" borderRadius={16}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>📬</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", marginBottom: 8 }}>Privacy Questions?</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75, marginBottom: 20, maxWidth: 400, margin: "0 auto 20px" }}>
                If you have any questions about this policy or want to exercise your rights, contact our Privacy Officer.
              </p>
              <a href="mailto:privacy@mealiez.in" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.2)", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700, color: "#FF6B35", textDecoration: "none" }}>
                privacy@mealiez.in
              </a>
            </BorderGlow>
          </div>
        </section>

        {/* Bottom nav */}
        <section style={{ background: "#fff", padding: "32px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="w" style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            {[["Terms of Service", "/legal/terms"], ["Security", "/security"], ["Data Infrastructure", "/legal/data-infrastructure"]].map(([label, href]) => (
              <Link key={label} href={href} className="anchor-pill">{label}</Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
