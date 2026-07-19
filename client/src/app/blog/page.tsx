"use client";

import React, { useState, useEffect } from "react";
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

/* ── Data ── */
const disciplines = [
  { icon: "🍽️", tag: "Operations",     title: "Mess Management",   desc: "Standard operating procedures, staffing guides, and daily workflow checklists for running a tight hostel mess." },
  { icon: "🏫", tag: "Hostel Ops",     title: "Hostel Operations",  desc: "Modern hostel management: meal plans, student engagement, dietary tracking, and warden resources." },
  { icon: "♻️", tag: "Sustainability", title: "Waste Reduction",   desc: "Practical batch-cooking formulas, advance booking strategies, and wastage measurement guides for operators." },
  { icon: "💳", tag: "Finance",        title: "Billing & Payments", desc: "Fee structure models, online collection strategies, and reconciliation guides for mess billing." },
  { icon: "📱", tag: "Technology",     title: "Attendance Systems", desc: "Comparing QR codes, biometrics, RFID cards — what works best for different mess sizes and contexts." },
  { icon: "📈", tag: "Insights",       title: "Industry Insights",  desc: "B2B food service statistics, market trends, and policy shifts shaping hostel and canteen operations in India." },
  { icon: "🛠️", tag: "Product",       title: "Product Updates",    desc: "New feature releases, platform updates, and how-to guides from the Mealiez engineering team." },
];

const tagColors: Record<string, string> = {
  "Logistics":      "#3b82f6",
  "Operations":     "#8b5cf6",
  "Sustainability": "#22c55e",
  "Finance":        "#f59e0b",
  "Technology":     "#06b6d4",
  "Trends":         "#ec4899",
  "Product":        "#FF6B35",
};

const posts = [
  {
    category: "Food Waste",
    discipline: "Waste Reduction",
    title: "How Indian Hostels Are Losing ₹12 Lakh a Year to Food Wastage",
    excerpt: "A data-backed breakdown of where food wastage happens in hostel messes, the real financial impact, and the operational changes that cut it by 25–30%.",
    readTime: "7 min read", date: "July 14, 2026", icon: "♻️",
    tag: "Most Read", tagColor: "#FF6B35",
  },
  {
    category: "Mess Management",
    discipline: "Mess Management",
    title: "5 Reasons Your Mess Is Still Losing Money Even After Going Digital",
    excerpt: "From unverified attendance to disconnected billing — the hidden operational gaps that even messes with 'some software' still face.",
    readTime: "8 min read", date: "July 10, 2026", icon: "📋",
    tag: "Editor's Pick", tagColor: "#8b5cf6",
  },
  {
    category: "Technology",
    discipline: "Attendance Systems",
    title: "QR Code vs. Biometric vs. RFID Card: What Works Best for Your Mess?",
    excerpt: "We break down the cost, accuracy, and setup requirements of the three most common digital attendance methods for hostel and canteen operators.",
    readTime: "5 min read", date: "July 7, 2026", icon: "📱",
    tag: "Comparison", tagColor: "#06b6d4",
  },
  {
    category: "Billing & Finance",
    discipline: "Billing & Payments",
    title: "Why Paper Chit Billing Is a Revenue Leak, Not a System",
    excerpt: "The average reconciliation delay with paper chit billing is 7+ days. Here's the true cost for mess operators and what automated billing replaces it with.",
    readTime: "6 min read", date: "July 3, 2026", icon: "💳",
    tag: "Finance", tagColor: "#f59e0b",
  },
  {
    category: "Industry Insights",
    discipline: "Industry Insights",
    title: "India's Hostel & Canteen Market: A ₹28,000 Cr Opportunity Being Digitised",
    excerpt: "Deep-dive into why institutional food service is the next frontier for SaaS-enabled automation — and who is leading the adoption.",
    readTime: "8 min read", date: "June 28, 2026", icon: "📊",
    tag: "Market Report", tagColor: "#ec4899",
  },
  {
    category: "Hostel Ops",
    discipline: "Hostel Operations",
    title: "How to Run a 1,200-Member Hostel Mess with Just 3 Staff Members",
    excerpt: "A real operational blueprint from a Mealiez deployment at a Tier-2 engineering college — every automated process, every time saved.",
    readTime: "10 min read", date: "June 22, 2026", icon: "🏫",
    tag: "Case Study", tagColor: "#3b82f6",
  },
];

const featuredPost = {
  tag: "Featured Report",
  title: "Indian Mess Wastage Report 2026",
  desc: "A data-backed analysis of how hostel messes, college canteens, and industrial cafeterias are losing 15–25% of food cost every day — and the operational changes that reverse it.",
  cta: "Read the Full Report",
  href: "/blog/indian-mess-wastage-report-2026",
};

const categories = ["All", "Mess Management", "Hostel Ops", "Food Waste", "Billing & Finance", "Technology", "Industry Insights"];

export default function BlogPage() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory || p.discipline.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        .bp { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; color: #1a1a1a; }
        .w  { max-width: 1080px; margin: 0 auto; padding: 0 40px; }

        .rv   { opacity:0; transform:translateY(24px); transition:opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .d1{transition-delay:.08s!important} .d2{transition-delay:.16s!important}
        .d3{transition-delay:.24s!important} .d4{transition-delay:.32s!important}
        .d5{transition-delay:.40s!important} .d6{transition-delay:.48s!important}

        /* ── Hero ── */
        .hero-dark {
          background: linear-gradient(145deg, #0f172a 0%, #1e293b 60%, #0f172a 100%);
          padding: 0;
          overflow: hidden;
          position: relative;
        }
        .hero-inner {
          max-width: 1080px; margin: 0 auto; padding: 56px 40px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center;
          position: relative; z-index: 1;
        }
        .hero-glow {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,107,53,0.18) 0%, transparent 70%);
          top: -100px; right: -80px; pointer-events: none;
        }

        /* ── Category filter ── */
        .cat-bar {
          display: flex; gap: 8px; flex-wrap: wrap;
          padding: 32px 0 0;
        }
        .cat-btn {
          padding: 8px 18px; border-radius: 100px;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: all 0.18s; border: 1.5px solid rgba(0,0,0,0.1);
          background: #fff; color: #555;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }
        .cat-btn.active {
          background: #FF6B35; color: #fff; border-color: #FF6B35;
          box-shadow: 0 4px 12px rgba(255,107,53,0.28);
        }
        .cat-btn:hover:not(.active) { border-color: rgba(255,107,53,0.4); color: #FF6B35; }

        /* ── Discipline grid ── */
        .disc-card {
          background: #fef6f0; border: 1px solid rgba(255,107,53,0.08);
          border-radius: 16px; padding: 24px 20px;
          transition: transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .28s;
          cursor: pointer;
        }
        .disc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(255,107,53,0.1);
          border-color: rgba(255,107,53,0.22);
          background: #fff;
        }
        .disc-tag {
          display: inline-block; font-size: 10px; font-weight: 800;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px;
          margin-bottom: 10px;
        }

        /* ── Post cards ── */
        .post-card {
          background: #fff; border: 1px solid rgba(0,0,0,0.07);
          border-radius: 18px; padding: 28px 24px;
          display: flex; flex-direction: column; gap: 12px;
          transition: transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .28s;
        }
        .post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 48px rgba(0,0,0,0.09);
          border-color: rgba(255,107,53,0.18);
        }
        .post-tag {
          display: inline-flex; align-items: center;
          font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 3px 10px; border-radius: 100px;
          width: fit-content;
        }
        .post-icon-wrap {
          width: 48px; height: 48px; border-radius: 14px;
          background: rgba(255,107,53,0.08); border: 1px solid rgba(255,107,53,0.12);
          display: flex; align-items: center; justify-content: center; font-size: 22px;
          flex-shrink: 0;
        }
        .read-link {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 13px; font-weight: 700; color: #FF6B35;
          text-decoration: none; margin-top: auto;
          transition: gap 0.15s;
        }
        .read-link:hover { gap: 8px; }

        /* ── Newsletter ── */
        .newsletter {
          background: linear-gradient(135deg, rgba(255,107,53,0.07), rgba(255,162,127,0.04)), #fdf6f0;
          border: 1px solid rgba(255,107,53,0.1); border-radius: 24px;
          padding: 56px 40px; text-align: center;
        }
        .nl-input-row {
          display: flex; gap: 10px; max-width: 440px; margin: 0 auto;
        }
        .nl-input {
          flex: 1; padding: 13px 18px; border-radius: 10px;
          border: 1.5px solid rgba(0,0,0,0.1); outline: none;
          font-size: 14px; font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          transition: border-color .18s, box-shadow .18s;
          background: #fff;
        }
        .nl-input:focus { border-color: #FF6B35; box-shadow: 0 0 0 3px rgba(255,107,53,0.1); }
        .nl-btn {
          background: linear-gradient(135deg,#FF6B35,#FF875C); color: #fff;
          border: none; border-radius: 10px; padding: 13px 22px;
          font-size: 14px; font-weight: 700; cursor: pointer;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          transition: opacity .15s, transform .15s;
          white-space: nowrap;
        }
        .nl-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        /* Dashboard mock for hero */
        .dash-mock {
          background: #1e293b; border-radius: 14px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 64px rgba(0,0,0,0.4);
        }
        .dash-topbar {
          background: #0f172a; padding: 10px 14px;
          display: flex; gap: 6px; align-items: center;
        }
        .dash-dot { width: 9px; height: 9px; border-radius: 50%; }

        @media(max-width:768px){
          .hero-inner { grid-template-columns:1fr; padding:40px 20px; }
          .w { padding-left:20px; padding-right:20px; }
          .nl-input-row { flex-direction:column; }
          .newsletter { padding:40px 20px; }
        }
        @media(max-width:640px){
          .disc-grid { grid-template-columns: repeat(2,1fr) !important; }
          .post-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="bp">

        {/* ════════════════════════════════════
            HERO — Featured Report
        ════════════════════════════════════ */}
        <section className="hero-dark">
          <div className="hero-glow" />
          <div className="hero-inner">

            {/* Left */}
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,107,53,0.18)", border: "1px solid rgba(255,107,53,0.35)",
                borderRadius: 100, padding: "5px 14px",
                fontSize: 10, fontWeight: 800, color: "#FF875C",
                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20,
              }}>
                ✦ {featuredPost.tag}
              </span>

              <h1 style={{
                fontSize: "clamp(28px,4vw,50px)", fontWeight: 900,
                color: "#fff", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: 16,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                {featuredPost.title}
              </h1>

              <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.78, marginBottom: 28, maxWidth: 380 }}>
                {featuredPost.desc}
              </p>

              <Link href={featuredPost.href} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg,#FF6B35,#FF875C)",
                color: "#fff", borderRadius: 10, padding: "13px 26px",
                fontSize: 14, fontWeight: 700, textDecoration: "none",
                boxShadow: "0 6px 24px rgba(255,107,53,0.4)",
              }}>
                {featuredPost.cta} →
              </Link>
            </div>

            {/* Right — dashboard mockup */}
            <div style={{ position: "relative" }}>
              <div className="dash-mock">
                <div className="dash-topbar">
                  {["#ef4444","#f59e0b","#22c55e"].map((c) => (
                    <div key={c} className="dash-dot" style={{ background: c }} />
                  ))}
                  <div style={{ flex:1, background:"rgba(255,255,255,0.06)", borderRadius:6, height:16, marginLeft:8 }} />
                </div>
                <div style={{ padding:16, display:"flex", gap:10 }}>
                  {/* Sidebar */}
                  <div style={{ width:70, display:"flex", flexDirection:"column", gap:6 }}>
                    {["Overview","Analytics","Reports","Settings"].map((item,i) => (
                      <div key={item} style={{
                        padding:"5px 8px", borderRadius:6, fontSize:8,
                        color: i===1 ? "#FF6B35":"rgba(255,255,255,0.3)",
                        background: i===1 ? "rgba(255,107,53,0.12)":"transparent",
                        fontWeight: i===1 ? 700:400,
                      }}>{item}</div>
                    ))}
                  </div>
                  {/* Chart area */}
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:9, color:"rgba(255,255,255,0.4)", marginBottom:8 }}>Waste Reduction Trend</div>
                    {/* Bar chart */}
                    <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:60, marginBottom:10 }}>
                      {[45,62,55,78,68,85,72,90,80,95].map((h,i) => (
                        <div key={i} style={{
                          flex:1, height:`${h}%`,
                          background: i===9 ? "#FF6B35" : i>6 ? "rgba(255,107,53,0.5)" : "rgba(255,255,255,0.1)",
                          borderRadius:"2px 2px 0 0",
                        }} />
                      ))}
                    </div>
                    {/* KPI row */}
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
                      {[["Waste Cut","22%","#22c55e"],["Accuracy","100%","#FF6B35"]].map(([k,v,c]) => (
                        <div key={String(k)} style={{ background:"rgba(255,255,255,0.04)", borderRadius:8, padding:"6px 8px" }}>
                          <div style={{ fontSize:7, color:"rgba(255,255,255,0.3)", marginBottom:2 }}>{k}</div>
                          <div style={{ fontSize:14, fontWeight:800, color: String(c) }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow below card */}
              <div style={{
                position:"absolute", bottom:-20, left:"20%", right:"20%", height:40,
                background:"rgba(255,107,53,0.3)", filter:"blur(20px)", borderRadius:"50%",
              }} />
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════
            CORE DISCIPLINES
        ════════════════════════════════════ */}
        <section style={{ background:"#fff", padding:"72px 0 64px" }}>
          <div className="w">
            <div className="rv" style={{ marginBottom:40 }}>
              <h2 style={{
                fontSize:"clamp(24px,3vw,38px)", fontWeight:800,
                color:"#1a1a1a", letterSpacing:"-0.025em",
                fontFamily:"'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                Core Disciplines
              </h2>
            </div>

            <div className="disc-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
              {disciplines.map((d, i) => (
                <div key={d.title} className={`disc-card rv d${Math.min(i+1,6)}`}>
                  <span className="disc-tag" style={{
                    background:`${tagColors[d.tag]}18`,
                    color: tagColors[d.tag],
                  }}>
                    {d.tag}
                  </span>
                  <div style={{ fontSize:22, marginBottom:8 }}>{d.icon}</div>
                  <h3 style={{
                    fontSize:14.5, fontWeight:700, color:"#1a1a1a", marginBottom:7,
                    fontFamily:"'Bricolage Grotesque', system-ui, sans-serif",
                  }}>
                    {d.title}
                  </h3>
                  <p style={{ fontSize:12.5, color:"#777", lineHeight:1.65 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            BLOG POSTS
        ════════════════════════════════════ */}
        <section style={{ background:"#fef6f0", padding:"72px 0" }}>
          <div className="w">

            {/* Header + filter */}
            <div className="rv" style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:16, marginBottom:8 }}>
              <h2 style={{
                fontSize:"clamp(22px,2.8vw,34px)", fontWeight:800,
                color:"#1a1a1a", letterSpacing:"-0.025em",
                fontFamily:"'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                Latest Articles
              </h2>
              <span style={{ fontSize:13, color:"#999", marginTop:6 }}>
                {filtered.length} article{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Category pills */}
            <div className="rv d1 cat-bar" style={{ marginBottom:40 }}>
              {categories.map((cat) => (
                <button key={cat} className={`cat-btn${activeCategory===cat?" active":""}`}
                  onClick={() => setActiveCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="post-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
              {filtered.map((post, i) => (
                <article key={i} className={`post-card rv d${Math.min(i+1,6)}`}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <div className="post-icon-wrap">{post.icon}</div>
                    <span className="post-tag" style={{
                      background:`${post.tagColor}15`, color:post.tagColor,
                    }}>
                      {post.tag}
                    </span>
                  </div>

                  <div>
                    <span style={{
                      fontSize:10.5, fontWeight:700, color:"#FF6B35",
                      textTransform:"uppercase", letterSpacing:"0.06em",
                    }}>
                      {post.category}
                    </span>
                    <h3 style={{
                      fontSize:16, fontWeight:800, color:"#1a1a1a",
                      lineHeight:1.35, marginTop:6,
                      fontFamily:"'Bricolage Grotesque', system-ui, sans-serif",
                    }}>
                      {post.title}
                    </h3>
                  </div>

                  <p style={{ fontSize:13.5, color:"#666", lineHeight:1.72 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:4 }}>
                    <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                      <span style={{ fontSize:12, color:"#aaa" }}>{post.date}</span>
                      <span style={{ width:3, height:3, borderRadius:"50%", background:"#ddd" }} />
                      <span style={{ fontSize:12, color:"#aaa" }}>{post.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}`}
                    className="read-link">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div style={{ textAlign:"center", padding:"60px 0", color:"#aaa" }}>
                <div style={{ fontSize:40, marginBottom:12 }}>📭</div>
                <p style={{ fontSize:15 }}>No articles in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════
            NEWSLETTER
        ════════════════════════════════════ */}
        <section style={{ padding:"72px 40px" }}>
          <div style={{ maxWidth:1080, margin:"0 auto" }}>
            <div className="newsletter rv">
              <div style={{
                display:"inline-flex", alignItems:"center", gap:6,
                background:"rgba(255,107,53,0.08)", border:"1px solid rgba(255,107,53,0.15)",
                borderRadius:100, padding:"5px 14px",
                fontSize:10, fontWeight:800, color:"#FF6B35",
                letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:18,
              }}>
                📬 Intelligence Digest
              </div>
              <h2 style={{
                fontSize:"clamp(22px,3vw,36px)", fontWeight:900,
                color:"#1a1a1a", letterSpacing:"-0.025em", marginBottom:12,
                fontFamily:"'Bricolage Grotesque', system-ui, sans-serif",
              }}>
                Get Culinary OS Insights Weekly
              </h2>
              <p style={{ fontSize:14.5, color:"#666", lineHeight:1.72, maxWidth:420, margin:"0 auto 28px" }}>
                Data-backed operational intelligence for food service leaders — no fluff, straight to your inbox.
              </p>
              <div className="nl-input-row">
                <input type="email" placeholder="your@company.com" className="nl-input" />
                <button className="nl-btn">Subscribe →</button>
              </div>
              <p style={{ fontSize:11.5, color:"#bbb", marginTop:12 }}>
                Join 1,200+ food service operators. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
