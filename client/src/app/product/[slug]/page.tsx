"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

/* ── Scroll reveal ── */
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

/* ── FAQ item ── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: 12, marginBottom: 10,
      boxShadow: open ? "0 4px 20px rgba(255,107,53,0.06)" : "none",
      transition: "box-shadow .2s"
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", background: "none", border: "none", cursor: "pointer",
        padding: "18px 22px", display: "flex", justifyContent: "space-between",
        alignItems: "center", textAlign: "left", fontSize: 15, fontWeight: 600, color: "#1a1a1a"
      }}>
        {q}
        <svg style={{ flexShrink: 0, marginLeft: 12, transform: open ? "rotate(180deg)" : "none", transition: "transform .25s" }}
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#555", lineHeight: 1.78 }}>{a}</div>
      )}
    </div>
  );
}

/* ── Feature icons map ── */
const featureIcons: Record<string, React.ReactElement> = {
  default: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
};

export default function ProductDetailPage({ params }: Props) {
  useReveal();
  const { slug } = React.use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== slug);

  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv-l { opacity:0; transform:translateX(-28px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv-r { opacity:0; transform:translateX(28px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in,.rv-l.in,.rv-r.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}

        .pp { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:1080px; margin:0 auto; padding:0 40px; }
        .w-sm{ max-width:720px; margin:0 auto; padding:0 40px; }
        .s-cream{ background:#fef6f0; padding:80px 0; }
        .s-white{ background:#fff; padding:80px 0; }

        .card {
          background:#fff; border:1px solid rgba(0,0,0,.07);
          border-radius:16px; padding:24px 20px;
          transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s;
        }
        .card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(255,107,53,.10);}
        .ic{width:40px;height:40px;border-radius:50%;background:rgba(255,107,53,.1);border:1px solid rgba(255,107,53,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .blabel{font-size:10px;font-weight:800;letter-spacing:.1em;color:#FF6B35;text-transform:uppercase;margin-bottom:8px;}
        .chk{display:flex;align-items:center;gap:8px;font-size:14px;color:#444;margin-bottom:10px;}

        .btn-ora{background:#FF6B35;color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,box-shadow .2s;}
        .btn-ora:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(255,107,53,.46);}
        .btn-out{background:#fff;color:#1a1a1a;border:1.5px solid rgba(0,0,0,.12);border-radius:10px;padding:14px 32px;font-size:15px;font-weight:600;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:border-color .2s,background .2s,transform .2s;}
        .btn-out:hover{border-color:rgba(255,107,53,.35);background:#fff3ee;transform:translateY(-2px);}

        .other-card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:14px;padding:20px;text-decoration:none;display:block;transition:transform .25s,box-shadow .25s;}
        .other-card:hover{transform:translateY(-3px);box-shadow:0 12px 36px rgba(255,107,53,.10);}
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

            <h1 className="rv" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              <span style={{ color: "#FF6B35" }}>{product.title}</span>
            </h1>
            <p className="rv d1" style={{ fontSize: 16, color: "#555", lineHeight: 1.75, maxWidth: 520, margin: "0 auto 38px" }}>
              {product.summary}
            </p>
            <div className="rv d2" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book-demo" className="btn-ora">Book a Demo</Link>
              <Link href="/product" className="btn-out">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                All Products
              </Link>
            </div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-.025em" }}>
              Why Current Systems Fall Short
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
              {product.painPoints.map((pt, i) => (
                <div key={i} className={`card rv d${i+1}`}>
                  <div className="ic" style={{ marginBottom: 14 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.72 }}>{pt}</p>
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
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 500, margin: "0 auto 48px" }}>
              A complete, automation-first module engineered for operational scale.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
              {product.features.map((feat, i) => (
                <div key={i} className={`card rv d${(i%4)+1}`} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div className="ic" style={{ marginTop: 2 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 14.5, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.5 }}>{feat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it Works ── */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-.025em" }}>
              End-to-End Workflow
            </h2>
            <div className="card rv" style={{ padding: "40px 56px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28 }}>
                {[
                  { label: "Capture", sub: "Input & request", icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                  null,
                  { label: "Automate", sub: "Process & route", icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
                  null,
                  { label: "Optimize", sub: "Analyse & refine", icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
                ].map((item, i) => item ? (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ width: 62, height: 62, borderRadius: "50%", background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{item.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: "#aaa" }}>{item.sub}</div>
                  </div>
                ) : (
                  <div key={i} style={{ fontSize: 22, color: "#ddd" }}>→</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-.025em" }}>
              Measurable Outcomes
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${product.benefits.length},1fr)`, gap: 18 }}>
              {product.benefits.map((b, i) => (
                <div key={i} className={`card rv d${i+1}`} style={{ textAlign: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,107,53,.1)", border: "1px solid rgba(255,107,53,.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p style={{ fontSize: 14.5, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.55 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="s-white">
          <div className="w-sm">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 44, letterSpacing: "-.025em" }}>
              Frequently Asked Questions
            </h2>
            <div className="rv">
              <FAQ q={`Can ${product.title} integrate with the full Mealiez platform?`} a="Yes. All Mealiez modules share a unified data layer. Enabling any module instantly connects it to your existing booking, attendance, billing, and reporting flows." />
              <FAQ q="What does onboarding look like?" a="Our team handles full onboarding — data migration, staff training, and go-live support — typically completed within 5-7 business days for most institutions." />
              <FAQ q="Is there a free trial or pilot available?" a="Yes. We offer a 30-day pilot program for enterprise clients. Book a technical demo to discuss your specific requirements and get a tailored onboarding plan." />
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
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                {otherProducts.slice(0, 3).map((p, i) => (
                  <Link key={p.slug} href={`/product/${p.slug}`} className={`other-card rv d${i+1}`}>
                    <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: ".08em", color: "#FF6B35", textTransform: "uppercase", marginBottom: 6 }}>Product</div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, marginBottom: 12 }}>{p.summary}</p>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#FF6B35", display: "flex", alignItems: "center", gap: 4 }}>
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
          <h2 className="rv" style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-.025em" }}>
            See {product.title} in Action
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 36px" }}>
            Join thousands of institutions running {product.title.toLowerCase()} on Mealiez Culinary OS.
          </p>
          <div className="rv d2" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-ora">Book a Technical Demo</Link>
            <Link href="/product" style={{ color: "rgba(255,255,255,.55)", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, padding: "15px 0" }}>
              View all modules
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
