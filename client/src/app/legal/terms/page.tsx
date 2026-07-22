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

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      {
        heading: "Agreement",
        body: "By accessing or using the Mealiez platform (\"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree, you may not use the Service.",
      },
      {
        heading: "Eligibility",
        body: "You must be at least 18 years old and have the legal authority to enter into contracts on behalf of your organisation to create a Mealiez account.",
      },
      {
        heading: "Changes to Terms",
        body: "We may update these Terms from time to time. We will notify you by email and in-app notice at least 30 days before any material changes take effect. Continued use of the Service after changes constitutes acceptance.",
      },
    ],
  },
  {
    id: "service-description",
    title: "Service Description",
    content: [
      {
        heading: "What Mealiez Provides",
        body: "Mealiez is a SaaS platform for mess, canteen, and food service management. Features include meal booking, QR-based attendance, automated billing, inventory tracking, analytics, and member management.",
      },
      {
        heading: "Service Availability",
        body: "We target 99.9% uptime (Standard plans) and 99.99% uptime (Enterprise plans), measured monthly excluding scheduled maintenance windows.",
      },
      {
        heading: "Beta Features",
        body: "Certain features may be marked as \"Beta\" or \"Preview\". These are provided as-is with no uptime guarantees and may be modified or discontinued without prior notice.",
      },
    ],
  },
  {
    id: "accounts",
    title: "Accounts & Responsibilities",
    content: [
      {
        heading: "Account Security",
        body: "You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account. Notify us immediately at security@mealiez.com of any unauthorised access.",
      },
      {
        heading: "Accurate Information",
        body: "You agree to provide accurate, current, and complete information during registration and to keep your account information up to date.",
      },
      {
        heading: "Operator Responsibility for Members",
        body: "As an operator, you are solely responsible for obtaining any necessary consents from your mess members before uploading their personal data to Mealiez. You represent that you have the legal right to process and share that data.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Subscriptions",
    content: [
      {
        heading: "Subscription Fees",
        body: "Mealiez charges a recurring subscription fee as described on our Pricing page. Fees are billed in advance — monthly or annually, depending on your chosen plan.",
      },
      {
        heading: "Taxes",
        body: "All fees are exclusive of applicable taxes. GST at the prevailing rate will be added to invoices for Indian customers.",
      },
      {
        heading: "Refunds",
        body: "Monthly subscriptions are non-refundable. For annual plans, we offer a pro-rated refund within the first 30 days of a new billing cycle. After 30 days, no refunds are issued.",
      },
      {
        heading: "Late Payment",
        body: "Failure to pay within 7 days of the due date may result in service suspension. Your data is retained for 60 days post-suspension before permanent deletion.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: [
      {
        heading: "Prohibited Conduct",
        body: "You may not use Mealiez to violate any applicable law; upload malicious code or malware; attempt to reverse-engineer, decompile, or extract source code; scrape or bulk-download data through automated means without written consent; or resell or sub-license the Service without authorisation.",
      },
      {
        heading: "Content Standards",
        body: "Any content you upload (member lists, menu items, announcements) must not be defamatory, discriminatory, or in violation of third-party rights.",
      },
      {
        heading: "Fair Use",
        body: "Plans are subject to fair-use limits on API calls and storage as described in the plan documentation. Excessive usage that degrades service for other customers may be throttled or result in upgrade requirements.",
      },
    ],
  },
  {
    id: "ip",
    title: "Intellectual Property",
    content: [
      {
        heading: "Mealiez IP",
        body: "The Mealiez platform, including all software, design, trademarks, and documentation, is owned by Mealiez Technologies Pvt. Ltd. and protected under Indian and international intellectual property laws.",
      },
      {
        heading: "Your Data",
        body: "You retain full ownership of all data you upload to Mealiez. You grant Mealiez a limited, non-exclusive, royalty-free license to store, process, and transmit your data solely to provide the Service.",
      },
      {
        heading: "Feedback",
        body: "If you provide suggestions or feedback about the Service, you grant Mealiez a perpetual, royalty-free license to use that feedback without restriction.",
      },
    ],
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    content: [
      {
        heading: "Disclaimer",
        body: "The Service is provided \"as is\" and \"as available\". Mealiez disclaims all warranties, express or implied, including merchantability and fitness for a particular purpose, to the maximum extent permitted by law.",
      },
      {
        heading: "Liability Cap",
        body: "To the maximum extent permitted by applicable law, Mealiez's total liability to you for any claim arising from or related to these Terms shall not exceed the amount you paid to Mealiez in the 3 months preceding the event giving rise to the claim.",
      },
      {
        heading: "Exclusions",
        body: "Mealiez shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — even if advised of the possibility of such damages.",
      },
    ],
  },
  {
    id: "termination",
    title: "Termination",
    content: [
      {
        heading: "By You",
        body: "You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period.",
      },
      {
        heading: "By Mealiez",
        body: "We reserve the right to suspend or terminate your account for violations of these Terms, non-payment, or at our sole discretion with 30 days written notice.",
      },
      {
        heading: "Effect of Termination",
        body: "Upon termination, your access to the Service ceases. You have 60 days to export your data before it is permanently deleted from our systems.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: [
      {
        heading: "Governing Law",
        body: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.",
      },
      {
        heading: "Dispute Resolution",
        body: "We encourage resolving disputes amicably. Before initiating legal proceedings, please contact legal@mealiez.com and allow 30 days for good-faith resolution.",
      },
    ],
  },
];

export default function TermsOfServicePage() {
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
              Legal · Terms of Service
            </div>
            <h1 className="rv d1" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 18 }}>
              Terms of Service
            </h1>
            <p className="rv d2" style={{ fontSize: 16, color: "#666", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 28px" }}>
              Clear, plain-English terms that govern your use of the Mealiez platform. No legal jargon without explanation.
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
            {sections.map((sec) => (
              <div key={sec.id} id={sec.id} className="rv" style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 20, letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ display: "inline-block", width: 4, height: 22, background: "linear-gradient(180deg,#FF6B35,#FF875C)", borderRadius: 2, flexShrink: 0 }} />
                  {sec.title}
                </h2>
                {sec.content.map((block, bi) => (
                  <div key={bi} className="lp-card">
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#FF6B35", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{block.heading}</h3>
                    <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.8, margin: 0 }}>{block.body}</p>
                  </div>
                ))}
              </div>
            ))}

            {/* Contact */}
            <div className="rv lp-card" style={{ borderTop: "3px solid #FF6B35", textAlign: "center", padding: "36px 32px", marginTop: 16 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>⚖️</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", marginBottom: 8 }}>Legal Questions?</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75, margin: "0 auto 20px", maxWidth: 400 }}>
                For any questions about these Terms, please reach out to our legal team.
              </p>
              <a href="mailto:legal@mealiez.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.2)", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700, color: "#FF6B35", textDecoration: "none" }}>
                legal@mealiez.com
              </a>
            </div>
          </div>
        </section>

        {/* Bottom nav */}
        <section style={{ background: "#fff", padding: "32px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="w" style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            {[["Privacy Policy", "/legal/privacy"], ["Security", "/security"], ["Data Infrastructure", "/legal/data-infrastructure"]].map(([label, href]) => (
              <Link key={label} href={href} className="anchor-pill">{label}</Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
