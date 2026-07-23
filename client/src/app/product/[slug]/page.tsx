"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";

type Props = { params: Promise<{ slug: string }> };

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv,.rv-l,.rv-r");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#fff",
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: 14,
      marginBottom: 10,
      boxShadow: open ? "0 4px 24px rgba(255,107,53,0.07)" : "none",
      transition: "box-shadow .25s",
      overflow: "hidden",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", background: "none", border: "none", cursor: "pointer",
        padding: "20px 24px", display: "flex", justifyContent: "space-between",
        alignItems: "center", textAlign: "left",
        fontSize: 15, fontWeight: 600, color: "#1a1a1a",
        fontFamily: "inherit",
      }}>
        {q}
        <span style={{
          flexShrink: 0, marginLeft: 16,
          width: 28, height: 28, borderRadius: "50%",
          background: open ? "#FF6B35" : "rgba(255,107,53,0.08)",
          border: `1px solid ${open ? "#FF6B35" : "rgba(255,107,53,0.15)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all .25s",
        }}>
          <svg style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .25s" }}
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke={open ? "#fff" : "#FF6B35"} strokeWidth="2.5" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 24px 20px", fontSize: 14, color: "#555", lineHeight: 1.82 }}>{a}</div>
      )}
    </div>
  );
}

export default function ProductDetailPage({ params }: Props) {
  useReveal();
  const { slug } = React.use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv-l { opacity:0; transform:translateX(-28px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv-r { opacity:0; transform:translateX(28px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in,.rv-l.in,.rv-r.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}

        .pp  { font-family:'Inter','DM Sans',system-ui,sans-serif; color:#1a1a1a; }
        .w   { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:720px;  margin:0 auto; padding:0 40px; }
        .s-cream { background:#fef6f0; padding:80px 0; }
        .s-white { background:#fff;    padding:80px 0; }

        .card {
          background:#fff; border:1px solid rgba(0,0,0,.07);
          border-radius:18px; padding:26px 22px;
          transition:transform .28s cubic-bezier(.22,1,.36,1),box-shadow .28s,border-color .28s;
        }
        .card:hover { transform:translateY(-5px); box-shadow:0 18px 52px rgba(255,107,53,.11); border-color:rgba(255,107,53,.18); }

        .ic  { width:42px;height:42px;border-radius:50%;background:rgba(255,107,53,.08);border:1px solid rgba(255,107,53,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0; }

        .btn-ora {
          background: linear-gradient(135deg,#FF6B35,#FF875C);
          color:#fff; border:none; border-radius:11px;
          padding:15px 32px; font-size:15px; font-weight:700;
          cursor:pointer; text-decoration:none;
          display:inline-flex; align-items:center; gap:8px;
          box-shadow:0 6px 22px rgba(255,107,53,.36);
          transition:transform .2s,box-shadow .2s,opacity .2s;
          font-family:inherit;
        }
        .btn-ora:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(255,107,53,.46);opacity:.94;}

        .btn-out {
          background:#fff; color:#1a1a1a;
          border:1.5px solid rgba(0,0,0,.11); border-radius:11px;
          padding:14px 32px; font-size:15px; font-weight:600;
          cursor:pointer; text-decoration:none;
          display:inline-flex; align-items:center; gap:8px;
          transition:border-color .2s,background .2s,transform .2s;
          font-family:inherit;
        }
        .btn-out:hover{border-color:rgba(255,107,53,.35);background:#fff3ee;transform:translateY(-2px);}

        .other-card {
          background:#fff; border:1px solid rgba(0,0,0,.07);
          border-radius:16px; padding:22px; text-decoration:none; display:block;
          transition:transform .28s,box-shadow .28s,border-color .28s;
        }
        .other-card:hover{transform:translateY(-4px);box-shadow:0 14px 40px rgba(255,107,53,.10);border-color:rgba(255,107,53,.18);}

        /* Workflow step connector */
        .workflow-row { display:flex; align-items:stretch; gap:0; overflow:hidden; border-radius:18px; border:1px solid rgba(0,0,0,.07); }
        .workflow-step { flex:1; padding:28px 20px; text-align:center; background:#fff; position:relative; }
        .workflow-step+.workflow-step::before {
          content:''; position:absolute; left:0; top:50%; transform:translateY(-50%);
          width:1px; height:60%; background:rgba(255,107,53,0.14);
        }
        .workflow-num {
          width:36px; height:36px; border-radius:50%;
          background:linear-gradient(135deg,#FF6B35,#FF875C);
          color:#fff; display:flex; align-items:center; justify-content:center;
          font-size:14px; font-weight:800; margin:0 auto 12px;
          box-shadow:0 4px 14px rgba(255,107,53,.3);
        }
      `}</style>

      <div className="pp">

        {/* ── Hero ── */}
        <section style={{ background: "#fef6f0", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="w">
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 24, fontSize: 13 }}>
              <Link href="/product" style={{ color: "#FF6B35", textDecoration: "none", fontWeight: 600 }}>Product</Link>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              <span style={{ color: "#888" }}>{product.title}</span>
            </div>

            <div className="rv" style={{ marginBottom: 16 }}>
              <Icon name={product.icon} size={52} color="#FF6B35" />
            </div>
            <h1 className="rv d1" style={{
              fontSize: "clamp(36px, 4.5vw, 54px)", fontWeight: 900,
              lineHeight: 1.1, letterSpacing: "-0.03em",
              color: "#1a1a1a", marginBottom: 20,
            }}>
              <span style={{ color: "#FF6B35" }}>{product.title}</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 17, color: "#555", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 38px" }}>
              {product.summary}
            </p>
            <div className="rv d3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book-demo" className="btn-ora">Book a Demo</Link>
              <Link href="/product" className="btn-out">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                All Modules
              </Link>
            </div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Why Current Systems Fall Short
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 48px" }}>
              Every one of these pain points is something Mealiez {product.title} is built to eliminate.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
              {product.painPoints.map((pt, i) => (
                <div key={i} className={`card rv d${i + 1}`}>
                  <div className="ic" style={{ marginBottom: 14 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75 }}>{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Features ── */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              What {product.title} Does
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 48px" }}>
              A complete, automation-first module engineered for operational scale.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
              {product.features.map((feat, i) => (
                <div key={i} className={`card rv d${(i % 4) + 1}`} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div className="ic" style={{ marginTop: 2 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p style={{ fontSize: 14.5, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.55, margin: 0 }}>{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works — from real workflowSteps data ── */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              How It Works
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 40px" }}>
              From first input to final insight — every step automated.
            </p>

            <div className="rv d2 workflow-row">
              {product.workflowSteps.map((step, i) => (
                <div key={i} className="workflow-step">
                  <div className="workflow-num">{i + 1}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>{step.label}</div>
                  <div style={{ fontSize: 12.5, color: "#888", lineHeight: 1.6 }}>{step.sub}</div>
                </div>
              ))}
            </div>

            {/* Connector arrow below */}
            <div className="rv" style={{ textAlign: "center", marginTop: 28 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,107,53,0.07)", border: "1px solid rgba(255,107,53,0.15)",
                borderRadius: 100, padding: "8px 20px",
                fontSize: 12.5, fontWeight: 600, color: "#FF6B35",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                All steps happen automatically inside Mealiez — no manual handoffs
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Measurable Outcomes
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 48px" }}>
              Real results operators report within the first 60 days.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${product.benefits.length}, 1fr)`, gap: 18 }}>
              {product.benefits.map((b, i) => (
                <div key={i} className={`card rv d${i + 1}`} style={{ textAlign: "center" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "rgba(255,107,53,.08)", border: "1px solid rgba(255,107,53,.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p style={{ fontSize: 14.5, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.6, margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ — from real product faqs ── */}
        <section className="s-white">
          <div className="w-sm">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Frequently Asked Questions
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 44px" }}>
              Everything you need to know before booking a demo.
            </p>
            <div className="rv d2">
              {product.faqs.map((faq, i) => (
                <FAQ key={i} q={faq.q} a={faq.a} />
              ))}
              {/* Always-present platform integration FAQ */}
              <FAQ
                q={`Does ${product.title} work with other Mealiez modules?`}
                a="Yes. All modules share a unified data layer. Enabling any module instantly connects it to your existing booking, attendance, billing, and analytics flows — no manual linking required."
              />
            </div>
          </div>
        </section>

        {/* ── Other Modules ── */}
        {otherProducts.length > 0 && (
          <section className="s-cream">
            <div className="w">
              <h2 className="rv" style={{ fontSize: 28, fontWeight: 800, textAlign: "center", marginBottom: 36, letterSpacing: "-.02em" }}>
                Explore Other Modules
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
                {otherProducts.map((p, i) => (
                  <Link key={p.slug} href={`/product/${p.slug}`} className={`other-card rv d${i + 1}`}>
                     <div style={{ marginBottom: 10 }}>
                       <Icon name={p.icon} size={28} color="#FF6B35" />
                     </div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, marginBottom: 14 }}>{p.summary}</p>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#FF6B35", display: "flex", alignItems: "center", gap: 5 }}>
                      Explore
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section style={{ background: "#1a1a1a", padding: "80px 40px", textAlign: "center" }}>
          <h2 className="rv" style={{ fontSize: 42, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            See {product.title} in Action
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.5)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 36px" }}>
            Book a 30-minute demo and we'll walk you through every feature tailored to your operation.
          </p>
          <div className="rv d2" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-ora">Book a Demo</Link>
            <Link href="/product" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, padding: "15px 0" }}>
              View all modules
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
