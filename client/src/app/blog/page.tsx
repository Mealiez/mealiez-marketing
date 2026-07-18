"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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

const categories = ["All", "Mess Management", "Billing & Finance", "Food Waste", "Technology", "Industry News", "Hostel Ops"];

const posts = [
  {
    category: "Food Waste",
    title: "How Indian Hostels Are Losing ₹12 Lakh a Year to Food Wastage (And How to Stop It)",
    excerpt: "A data-backed breakdown of where food wastage happens in hostel messes, the financial impact, and the operational changes that cut it by 25–30%.",
    readTime: "7 min read",
    date: "July 14, 2026",
    icon: "♻️",
    tag: "Most Read",
    tagColor: "#FF6B35",
  },
  {
    category: "Billing & Finance",
    title: "The Mess Operator's Guide to Eliminating Billing Disputes",
    excerpt: "Manual billing creates disputes every month. Here's a step-by-step guide to moving to automated billing and reducing disputes to near-zero.",
    readTime: "6 min read",
    date: "July 8, 2026",
    icon: "💳",
    tag: null,
    tagColor: null,
  },
  {
    category: "Technology",
    title: "QR Code Attendance vs. PIN Entry: What Works Better for Mess Operations?",
    excerpt: "We analysed attendance data from 100+ Mealiez operators to answer this definitively. The results might surprise you.",
    readTime: "5 min read",
    date: "July 2, 2026",
    icon: "📱",
    tag: null,
    tagColor: null,
  },
  {
    category: "Mess Management",
    title: "Why Your Excel-Based Mess Management Will Break Above 200 Members",
    excerpt: "A technical breakdown of why spreadsheet-based mess management has a hard ceiling — and what operators consistently report when they hit it.",
    readTime: "8 min read",
    date: "June 25, 2026",
    icon: "📊",
    tag: "Popular",
    tagColor: "#8b5cf6",
  },
  {
    category: "Hostel Ops",
    title: "The Warden's Playbook: Running a 500-Member Hostel Mess Without the Chaos",
    excerpt: "A practical operational guide for hostel wardens covering meal planning, attendance, billing, and vendor management — all in one place.",
    readTime: "10 min read",
    date: "June 18, 2026",
    icon: "🏠",
    tag: null,
    tagColor: null,
  },
  {
    category: "Industry News",
    title: "India's Food Service Industry in 2026: Key Trends Operators Need to Know",
    excerpt: "From digital payment adoption to the rise of subscription mess businesses — here are the five trends reshaping Indian food service this year.",
    readTime: "6 min read",
    date: "June 10, 2026",
    icon: "🌍",
    tag: "New",
    tagColor: "#22c55e",
  },
  {
    category: "Mess Management",
    title: "Inventory Management for Mess Operators: A Practical First Principles Guide",
    excerpt: "Stock control, vendor relationships, wastage tracking, and how to build a procurement system that keeps your costs predictable every month.",
    readTime: "9 min read",
    date: "June 3, 2026",
    icon: "📦",
    tag: null,
    tagColor: null,
  },
];

export default function BlogPage() {
  useReveal();
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter(p => p.category === active);

  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .bp { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .post-card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:20px;padding:28px;transition:transform .25s,box-shadow .25s;}
        .post-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.07);}
        .cat-pill{background:transparent;color:#666;border:1.5px solid rgba(0,0,0,.1);border-radius:100px;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer;transition:all .15s;font-family:'Inter',system-ui,sans-serif;}
        .cat-pill:hover{border-color:rgba(255,107,53,.3);color:#FF6B35;background:#fff3ee;}
        .cat-pill.active{background:#FF6B35;color:#fff;border-color:#FF6B35;}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
      `}</style>

      <div className="bp">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "80px 0 64px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ display: "inline-flex", gap: 8, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#FF6B35", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
              Blog
            </div>
            <h1 className="rv d1" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              Insights for<br />
              <span style={{ color: "#FF6B35" }}>Food Service Operators</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 16, color: "#555", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
              Practical guides, data-backed articles, and industry research for mess operators across India.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section style={{ background: "#fff", padding: "64px 0 88px" }}>
          <div className="w">
            {/* Category filter */}
            <div className="rv" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 44 }}>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`cat-pill${active === c ? " active" : ""}`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
              {filtered.map((post, i) => (
                <div key={i} className={`post-card rv d${(i % 3) + 1}`}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ fontSize: 28 }}>{post.icon}</div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.06em", textTransform: "uppercase" }}>{post.category}</span>
                    </div>
                    {post.tag && (
                      <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", background: post.tagColor!, borderRadius: 100, padding: "3px 10px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                        {post.tag}
                      </span>
                    )}
                  </div>
                  <h2 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.45, marginBottom: 12 }}>{post.title}</h2>
                  <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.72, marginBottom: 20 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "#aaa" }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa", fontSize: 15 }}>
                No posts in this category yet. Check back soon.
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section style={{ background: "#fef6f0", padding: "64px 40px", textAlign: "center" }}>
          <div className="w">
            <div className="rv" style={{ maxWidth: 560, margin: "0 auto" }}>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#1a1a1a", marginBottom: 12, letterSpacing: "-.025em" }}>
                Get new articles in your inbox
              </h2>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.72, marginBottom: 28 }}>
                No spam. Just practical insights for mess operators, once every two weeks.
              </p>
              <div style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto" }}>
                <input type="email" placeholder="your@email.com" style={{ flex: 1, border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: 12, padding: "13px 16px", fontSize: 14, outline: "none", fontFamily: "'Inter',system-ui,sans-serif" }} />
                <button className="btn-ora" style={{ flexShrink: 0, padding: "13px 22px" }}>Subscribe</button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
