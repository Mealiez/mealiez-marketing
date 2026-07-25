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

const stories = [
  {
    name: "North Valley Hostel",
    type: "Hostel Mess",
    icon: "🏠",
    members: 340,
    result: "18% reduction in food wastage",
    metric: "18%",
    metricLabel: "Less Waste",
    quote: "We cut our monthly grocery bill by ₹40,000 in the first two months without any menu changes.",
    role: "Warden, North Valley Hostel",
  },
  {
    name: "Citywide Canteens",
    type: "College Canteen",
    icon: "🎓",
    members: 1200,
    result: "22% faster collections",
    metric: "22%",
    metricLabel: "Faster Collections",
    quote: "Billing disputes went from weekly headaches to almost zero. Students can see their own ledger in real time.",
    role: "Operations Head, Citywide Canteens",
  },
  {
    name: "Metro Cloud Kitchen",
    type: "Cloud Kitchen",
    icon: "☁️",
    members: 600,
    result: "30% better demand planning",
    metric: "30%",
    metricLabel: "Better Planning",
    quote: "Our kitchen used to over-produce by 25–30% daily. Now we plan to within 5% accuracy every single day.",
    role: "Founder, Metro Cloud Kitchen",
  },
];

const testimonials = [
  {
    text: "Mealiez transformed how we manage our hostel mess. What used to take my warden 3 hours daily now takes 20 minutes.",
    author: "Rajesh Sharma",
    role: "Hostel Director",
    org: "Sunrise Student Housing, Pune",
    icon: "🏠",
  },
  {
    text: "The billing automation alone was worth the switch. We went from chasing payments to having them come in automatically.",
    author: "Priya Mehta",
    role: "Founder",
    org: "GreenLeaf Tiffin Service, Mumbai",
    icon: "🔁",
  },
  {
    text: "Our canteen waste dropped 20% in month one. The demand forecasting is surprisingly accurate even for our irregular schedule.",
    author: "Dr. Anand Kumar",
    role: "Campus Facilities Manager",
    org: "VIT Institute, Vellore",
    icon: "🎓",
  },
  {
    text: "Finally a system built for food operations, not adapted from some generic ERP. The team understood our problems immediately.",
    author: "Sonal Verma",
    role: "Operations Manager",
    org: "Bharat Industries Canteen, Nashik",
    icon: "🏭",
  },
  {
    text: "Setup was done in 5 days. The Mealiez team was with us every step. Best onboarding experience we've had with any software.",
    author: "Mohammed Aslam",
    role: "Owner",
    org: "Al-Farhan Mess, Hyderabad",
    icon: "🍽️",
  },
  {
    text: "Our members love the app. Booking meals, checking their plan, seeing their dues — everything in one place. Adoption was instant.",
    author: "Kavya Iyer",
    role: "Student Housing Manager",
    org: "StayEasy PG Network, Bangalore",
    icon: "📱",
  },
];

const stats = [
  { stat: "500+", label: "Active Operators" },
  { stat: "10L+", label: "Meals Tracked Monthly" },
  { stat: "₹12Cr+", label: "Billing Processed Monthly" },
  { stat: "4.8★", label: "Operator Satisfaction" },
];

export default function CustomersPage() {
  useReveal();
  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}
        .cp { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .s-cream{ background:#fef6f0; padding:80px 0; }
        .s-white{ background:#fff; padding:80px 0; }
        .card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:20px;padding:32px;transition:transform .25s,box-shadow .25s;}
        .card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(255,107,53,.1);}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
        .test-card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:16px;padding:24px;transition:transform .25s,box-shadow .25s;}
        .test-card:hover{transform:translateY(-3px);box-shadow:0 12px 36px rgba(255,107,53,.08);}
      `}</style>

      <div className="cp">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="w">
            <h1 className="rv" style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Operators Who Made<br />
              <span style={{ color: "#FF6B35" }}>the Switch</span>
            </h1>
            <p className="rv d1" style={{ fontSize: 17, color: "#555", lineHeight: 1.75, maxWidth: 500, margin: "0 auto 48px" }}>
              From hostels to cloud kitchens, see how Mealiez is changing how India's food operations run.
            </p>
            {/* Stats strip */}
            <div className="rv d2" style={{ display: "flex", gap: 0, background: "#fff", borderRadius: 20, border: "1px solid rgba(255,107,53,0.15)", overflow: "hidden", maxWidth: 720, margin: "0 auto" }}>
              {stats.map((s, i) => (
                <div key={i} style={{ flex: 1, padding: "24px 16px", textAlign: "center", borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#FF6B35", letterSpacing: "-0.02em" }}>{s.stat}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Customer Stories
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 48px" }}>
              Real operators, real results — measured and verified.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
              {stories.map((s, i) => (
                <BorderGlow key={i} className={`card rv d${i + 1}`} backgroundColor="#ffffff" borderRadius={20}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#FF6B35,#FF875C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                      {s.icon}
                    </BorderGlow>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a" }}>{s.name}</h3>
                      <p style={{ fontSize: 12, color: "#888" }}>{s.type} · {s.members} members</p>
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,107,53,0.06)", borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
                    <div style={{ fontSize: 32, fontWeight: 900, color: "#FF6B35", letterSpacing: "-0.02em" }}>{s.metric}</div>
                    <div style={{ fontSize: 13, color: "#555", fontWeight: 600 }}>{s.metricLabel}</div>
                  </div>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, fontStyle: "italic", marginBottom: 16 }}>"{s.quote}"</p>
                  <p style={{ fontSize: 12, color: "#999" }}>— {s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Case Studies
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 48px" }}>
              Detailed breakdowns of how operators transformed their food operations with Mealiez.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
              {stories.map((s, i) => (
                <BorderGlow key={i} className={`card rv d${i + 1}`} style={{ borderLeft: "3px solid #FF6B35" }} backgroundColor="#ffffff" borderRadius={20}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Case Study</div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a", marginBottom: 8 }}>
                    How {s.name} achieved {s.result}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.65, marginBottom: 16 }}>
                    A {s.type} with {s.members} members transformed operations by switching to Mealiez from manual registers.
                  </p>
                  {[["Challenge", "Manual tracking causing daily errors and revenue leakage"],
                    ["Implementation", "5-day guided onboarding with staff training"],
                    ["Result", s.result + " in under 60 days"]].map(([label, text]) => (
                    <div key={label} style={{ marginBottom: 12 }}>
                      <div style={{ fontSize: 10, fontWeight: 800, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{text}</div>
                    </BorderGlow>
                  ))}
                  <Link href="/book-demo" style={{ fontSize: 13, fontWeight: 700, color: "#FF6B35", textDecoration: "none", display: "flex", alignItems: "center", gap: 4, marginTop: 16 }}>
                    Replicate these results →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              What Operators Are Saying
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 48px" }}>
              Unfiltered feedback from the operators running Mealiez every day.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
              {testimonials.map((t, i) => (
                <BorderGlow key={i} className={`test-card rv d${(i % 3) + 1}`} backgroundColor="#ffffff" borderRadius={18}>
                  <div style={{ fontSize: 24, color: "#FF6B35", marginBottom: 14 }}>"</div>
                  <p style={{ fontSize: 14, color: "#333", lineHeight: 1.8, fontStyle: "italic", marginBottom: 20 }}>{t.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#FF6B35,#FF875C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                      {t.icon}
                    </BorderGlow>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>{t.author}</p>
                      <p style={{ fontSize: 11, color: "#888" }}>{t.role}, {t.org}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            Join 500+ operators on Mealiez
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 36px" }}>
            Book a 30-minute demo tailored to your operation type and see results in your first month.
          </p>
          <Link href="/book-demo" className="btn-ora rv d2">Book Your Free Demo</Link>
        </section>

      </div>
    </>
  );
}
