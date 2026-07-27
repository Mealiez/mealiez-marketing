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

const team = [
  { name: "Rohan Mehta", role: "Co-Founder & CEO", bio: "10+ years in food service operations. Built Mealiez after managing a 600-member mess with nothing but Excel and regret.", icon: "👨‍💼" },
  { name: "Priya Sharma", role: "Co-Founder & CTO", bio: "Former SDE at a leading food-tech company. Obsessed with building software that works for field operators, not just boardrooms.", icon: "👩‍💻" },
  { name: "Aditya Kumar", role: "Head of Product", bio: "Spent 3 years doing hostel mess audits across 40 institutions. Every Mealiez feature was born from that fieldwork.", icon: "🎯" },
];

const timeline = [
  { year: "2021", event: "Mealiez founded after experiencing the chaos of managing a 600-member hostel mess manually." },
  { year: "2022", event: "First 10 hostel operators onboarded. Product-market fit confirmed with 0% churn in year one." },
  { year: "2023", event: "Expanded to college canteens and industrial operations. Crossed 100 active operator accounts." },
  { year: "2024", event: "Launched enterprise plan. Crossed 500 operators and 10 lakh meals tracked monthly." },
  { year: "2025", event: "Raised seed funding to accelerate product and team growth across India's Tier 1 and Tier 2 cities." },
  { year: "2026", event: "Serving 500+ operators, processing ₹12Cr+ in billings monthly, and expanding to new food service verticals." },
];

const values = [
  { icon: "🎯", title: "Operator First", desc: "Every feature we build starts with a field visit or operator interview. We ship for the warden, not the investor deck." },
  { icon: "🔍", title: "Radical Transparency", desc: "No hidden fees, no gotcha contracts. Our pricing, data policies, and roadmap are always open to our customers." },
  { icon: "⚡", title: "Speed Over Perfection", desc: "We ship fast, listen faster, and iterate based on real operator feedback — not internal assumptions." },
  { icon: "🤝", title: "Partnership Mindset", desc: "We don't just sell software. We help our operators grow their business, save money, and serve their members better." },
];

export default function CompanyPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}
        .co { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:760px; margin:0 auto; padding:0 40px; }
        .s-cream{ background:#fef6f0; padding:80px 0; }
        .s-white{ background:#fff; padding:80px 0; }
        .card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:20px;padding:32px;}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
        .input{width:100%;border:1.5px solid rgba(0,0,0,.12);border-radius:12px;padding:13px 16px;font-size:14px;outline:none;transition:border-color .2s,box-shadow .2s;font-family:'Inter',system-ui,sans-serif;box-sizing:border-box;}
        .input:focus{border-color:#FF6B35;box-shadow:0 0 0 3px rgba(255,107,53,.1);}
        .label{font-size:13px;font-weight:600;color:#555;margin-bottom:8px;display:block;}
      `}</style>

      <div className="co">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
              Our Company
            </div>
            <h1 className="rv d1" style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              We're on a mission to<br />
              <span style={{ color: "#FF6B35" }}>modernise India's messes</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
              Mealiez started when our founders got tired of running a hostel mess with registers, WhatsApp groups, and spreadsheets. We built the tool we wished existed.
            </p>
          </div>
        </section>

        {/* About Mealiez */}
        <section id="about" className="s-white">
          <div className="w">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <div className="rv" style={{ fontSize: 11, fontWeight: 800, color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>About Mealiez</div>
                <h2 className="rv d1" style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, letterSpacing: "-.025em", marginBottom: 20 }}>
                  Built for operators, by someone who was one
                </h2>
                <p className="rv d2" style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
                  Mealiez is India's leading mess management and food operations platform. We help hostel operators, college canteens, industrial kitchens, corporate cafeterias, cloud kitchens, and subscription mess businesses run their entire operation from one platform.
                </p>
                <p className="rv d3" style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>
                  Today, we serve 500+ operators across India, processing over 10 lakh meals and ₹12 crore in billings every month — and growing.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { stat: "500+", label: "Active Operators" },
                  { stat: "10L+", label: "Meals/Month" },
                  { stat: "₹12Cr+", label: "Billing/Month" },
                  { stat: "5 days", label: "Avg Onboarding" },
                ].map((s, i) => (
                  <BorderGlow key={i} className={`card rv d${i + 1}`} style={{ textAlign: "center" }} backgroundColor="#ffffff" borderRadius={20}>
                    <div style={{ fontSize: 28, fontWeight: 900, color: "#FF6B35", letterSpacing: "-0.02em", marginBottom: 6 }}>{s.stat}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{s.label}</div>
                  </BorderGlow>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section id="founder-story" className="s-cream">
          <div className="w-sm">
            <div className="rv" style={{ fontSize: 11, fontWeight: 800, color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>Founder Story</div>
            <h2 className="rv d1" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-.025em" }}>
              How Mealiez Was Born
            </h2>
            <BorderGlow className="card rv d2" style={{ padding: "40px 48px", borderLeft: "4px solid #FF6B35" }} backgroundColor="#ffffff" borderRadius={20}>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.9, marginBottom: 24, fontStyle: "italic" }}>
                "I managed a 600-member hostel mess in my final year. Every day was a battle — paper registers no one could read, billing disputes every week, and no way to know how much food to cook. I wrote everything in Excel. It broke constantly. After graduation, I spent a year talking to 40+ mess operators. They all had the same problems. That's when I knew I had to build Mealiez."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#FF6B35,#FF875C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                  👨‍💼
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 800, color: "#1a1a1a" }}>Rohan Mehta</p>
                  <p style={{ fontSize: 13, color: "#888" }}>Co-Founder & CEO, Mealiez</p>
                </div>
              </div>
            </BorderGlow>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission-vision" className="s-white">
          <div className="w">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              <BorderGlow className="card rv d1" style={{ borderTop: "3px solid #FF6B35" }} backgroundColor="#ffffff" borderRadius={20}>
                <div style={{ fontSize: 32, marginBottom: 20 }}>🎯</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 14 }}>Our Mission</h3>
                <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>
                  To give every mess operator in India — from a 50-member tiffin service to a 5,000-member university — the operational tools that make their food business efficient, transparent, and profitable.
                </p>
              </BorderGlow>
              <BorderGlow className="card rv d2" style={{ borderTop: "3px solid #FF6B35" }} backgroundColor="#ffffff" borderRadius={20}>
                <div style={{ fontSize: 32, marginBottom: 20 }}>🔭</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 14 }}>Our Vision</h3>
                <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>
                  A world where no food service operator wastes food, loses revenue to manual errors, or spends hours on billing. Where every member gets a transparent, frictionless dining experience.
                </p>
              </BorderGlow>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>Our Values</h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 460, margin: "0 auto 48px" }}>What guides every decision we make at Mealiez.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
              {values.map((v, i) => (
                <BorderGlow key={i} className={`card rv d${i + 1}`} style={{ textAlign: "center" }} backgroundColor="#ffffff" borderRadius={20}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a1a", marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{v.desc}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="s-white">
          <div className="w-sm">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-.025em" }}>Our Journey</h2>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: 24, top: 0, bottom: 0, width: 2, background: "rgba(255,107,53,0.15)" }} />
              {timeline.map((t, i) => (
                <div key={i} className={`rv d${(i % 3) + 1}`} style={{ display: "flex", gap: 28, alignItems: "flex-start", marginBottom: 32 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#FF6B35", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0, boxShadow: "0 4px 14px rgba(255,107,53,0.35)" }}>
                    {t.year.slice(2)}
                  </div>
                  <div style={{ paddingTop: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "#FF6B35", letterSpacing: "0.06em", marginBottom: 6 }}>{t.year}</div>
                    <p style={{ fontSize: 14.5, color: "#444", lineHeight: 1.72 }}>{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="s-cream">
          <div className="w">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
              <div>
                <div className="rv" style={{ fontSize: 11, fontWeight: 800, color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Get in Touch</div>
                <h2 className="rv d1" style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, letterSpacing: "-.025em", marginBottom: 20 }}>Let's talk about your operation</h2>
                <p className="rv d2" style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 32 }}>
                  Whether you're exploring Mealiez for the first time, looking for a custom enterprise quote, or interested in a partnership — we'd love to hear from you.
                </p>
                {[
                  { icon: "📧", label: "Email", value: "hello@mealiez.com" },
                  { icon: "📞", label: "Phone", value: "+91 99000 00000" },
                  { icon: "🏢", label: "HQ", value: "Bangalore, Karnataka, India" },
                ].map((c, i) => (
                  <div key={i} className="rv" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                    <div style={{ fontSize: 20 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#888", marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <BorderGlow className="card rv d2" style={{ padding: 32 }} backgroundColor="#ffffff" borderRadius={20}>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 24, color: "#1a1a1a" }}>Send us a message</h3>
                <div style={{ display: "grid", gap: 14 }}>
                  {[
                    { label: "Your Name", placeholder: "Full name", type: "text" },
                    { label: "Email Address", placeholder: "you@company.com", type: "email" },
                    { label: "Subject", placeholder: "Partnership, Enterprise, Press...", type: "text" },
                  ].map(({ label, placeholder, type }) => (
                    <div key={label}>
                      <label className="label">{label}</label>
                      <input type={type} placeholder={placeholder} className="input" />
                    </div>
                  ))}
                  <div>
                    <label className="label">Message</label>
                    <textarea placeholder="Tell us about your operation and how we can help..." rows={4} className="input" style={{ resize: "vertical" }} />
                  </div>
                  <Link href="/book-demo" className="btn-ora" style={{ justifyContent: "center" }}>
                    Send Message
                  </Link>
                </div>
              </BorderGlow>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Want to see Mealiez in action?
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 36px" }}>
            Book a free 30-minute demo and we'll show you exactly how it works for your operation.
          </p>
          <Link href="/book-demo" className="btn-ora rv d2">Book a Free Demo</Link>
        </section>

      </div>
    </>
  );
}
