"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions, products } from "@/lib/site-data";

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

export default function SolutionDetailPage({ params }: Props) {
  useReveal();
  const { slug } = React.use(params);
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const otherSolutions = solutions.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv-l { opacity:0; transform:translateX(-28px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv-r { opacity:0; transform:translateX(28px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in,.rv-l.in,.rv-r.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}

        .sp { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
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
        .chk{display:flex;align-items:center;gap:10px;font-size:14px;color:#444;margin-bottom:12px;}

        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:10px;padding:15px 32px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,box-shadow .2s,opacity .2s;}
        .btn-ora:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(255,107,53,.46);opacity:0.92;}
        .btn-out{background:#fff;color:#1a1a1a;border:1.5px solid rgba(0,0,0,.12);border-radius:10px;padding:14px 32px;font-size:15px;font-weight:600;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:border-color .2s,background .2s,transform .2s;}
        .btn-out:hover{border-color:rgba(255,107,53,.35);background:#fff3ee;transform:translateY(-2px);}

        .other-card{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:14px;padding:20px;text-decoration:none;display:block;transition:transform .25s,box-shadow .25s;}
        .other-card:hover{transform:translateY(-3px);box-shadow:0 12px 36px rgba(255,107,53,.10);}

        .process-step{display:flex;align-items:flex-start;gap:16px;margin-bottom:20px;}
        .process-num{width:36px;height:36px;border-radius:50%;background:#FF6B35;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;flex-shrink:0;}

        .feat-pill{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid rgba(255,107,53,0.2);border-radius:100px;padding:8px 16px;font-size:13px;font-weight:500;color:#333;text-decoration:none;transition:background .15s,border-color .15s,color .15s;}
        .feat-pill:hover{background:#fff3ee;border-color:#FF6B35;color:#FF6B35;}
      `}</style>

      <div className="sp">

        {/* ── Hero ── */}
        <section style={{ background: "#fef6f0", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="w">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 24, fontSize: 13 }}>
              <Link href="/solutions" style={{ color: "#FF6B35", textDecoration: "none", fontWeight: 600 }}>Solutions</Link>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              <span style={{ color: "#888" }}>{solution.title}</span>
            </div>

            <div className="rv" style={{ fontSize: 52, marginBottom: 16 }}>{solution.icon}</div>
            <h1 className="rv d1" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              <span style={{ color: "#FF6B35" }}>{solution.title}</span>
            </h1>
            <p className="rv d2" style={{ fontSize: 18, color: "#555", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 16px" }}>
              {solution.tagline}
            </p>
            <p className="rv d3" style={{ fontSize: 15, color: "#888", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 38px" }}>
              {solution.challenge}
            </p>
            <div className="rv d4" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book-demo" className="btn-ora">Book a Demo</Link>
              <Link href="/solutions" className="btn-out">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                All Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* ── Current Process (The Problem) ── */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              How Operations Run Today
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 520, margin: "0 auto 48px" }}>
              And why traditional approaches fall short at scale.
            </p>
            <div className="card rv" style={{ maxWidth: 680, margin: "0 auto", padding: "36px 40px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>The Current Reality</h3>
                  <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.78 }}>{solution.currentProcess}</p>
                </div>
              </div>
              <div style={{ borderTop: "1px dashed rgba(0,0,0,0.08)", paddingTop: 20 }}>
                <p style={{ fontSize: 13, color: "#888", fontStyle: "italic" }}>
                  This is exactly the operational gap Mealiez is built to close.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How Mealiez Solves It ── */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              How Mealiez Solves It
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 500, margin: "0 auto 48px" }}>
              A purpose-built solution for your specific operational context.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
              {solution.mealiezApproach.map((item, i) => (
                <div key={i} className={`card rv d${(i % 4) + 1}`} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div className="ic" style={{ marginTop: 2 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p style={{ fontSize: 14.5, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Relevant Features ── */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-.025em" }}>
              Key Modules for {solution.title}
            </h2>
            <p className="rv d1" style={{ fontSize: 15, color: "#666", textAlign: "center", lineHeight: 1.72, maxWidth: 480, margin: "0 auto 40px" }}>
              The exact Mealiez modules that deliver the most impact for your operations.
            </p>
            <div className="rv d2" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {solution.relevantFeatures.map((feat) => {
                const product = products.find(p => p.title === feat);
                return (
                  <Link
                    key={feat}
                    href={product ? `/product/${product.slug}` : "/product"}
                    className="feat-pill"
                  >
                    {product && <span style={{ fontSize: 16 }}>{product.icon}</span>}
                    {feat}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ROI Impact ── */}
        <section className="s-cream">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-.025em" }}>
              Measurable ROI Impact
            </h2>
            <div className="rv" style={{
              maxWidth: 680, margin: "0 auto",
              background: "linear-gradient(135deg, #FF6B35, #FF875C)",
              borderRadius: 20, padding: "40px 48px", textAlign: "center",
              boxShadow: "0 20px 60px rgba(255,107,53,0.3)"
            }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>📈</div>
              <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.6 }}>{solution.roiImpact}</p>
              <div style={{ marginTop: 28 }}>
                <Link href="/resources/roi-calculator" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", borderRadius: 10, padding: "12px 28px", fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.4)", display: "inline-block", transition: "background .15s" }}>
                  Calculate Your Savings →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Customer Story ── */}
        <section className="s-white">
          <div className="w">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-.025em" }}>
              Real Operator Results
            </h2>
            <div className="card rv" style={{ maxWidth: 680, margin: "0 auto", padding: "36px 40px" }}>
              <div style={{ fontSize: 32, marginBottom: 16, color: "#FF6B35" }}>"</div>
              <p style={{ fontSize: 16, color: "#333", lineHeight: 1.85, fontStyle: "italic", marginBottom: 24 }}>
                Switching to Mealiez was the single best operational decision we made this year.
                Our kitchen waste dropped within the first month, and our billing disputes became
                almost zero.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #FF6B35, #FF875C)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18, fontWeight: 800 }}>
                  {solution.icon}
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>Operations Head</p>
                  <p style={{ fontSize: 12, color: "#888" }}>{solution.title} Customer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="s-cream">
          <div className="w-sm">
            <h2 className="rv" style={{ fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 44, letterSpacing: "-.025em" }}>
              Frequently Asked Questions
            </h2>
            <div className="rv">
              {solution.faqItems.map((faq, i) => (
                <FAQ key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Solutions ── */}
        {otherSolutions.length > 0 && (
          <section className="s-white">
            <div className="w">
              <h2 className="rv" style={{ fontSize: 28, fontWeight: 800, textAlign: "center", marginBottom: 36, letterSpacing: "-.02em" }}>
                Explore Other Industry Solutions
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                {otherSolutions.map((s, i) => (
                  <Link key={s.slug} href={`/solutions/${s.slug}`} className={`other-card rv d${i + 1}`}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, marginBottom: 12 }}>{s.tagline}</p>
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
            Ready to transform your {solution.title.toLowerCase()}?
          </h2>
          <p className="rv d1" style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 36px" }}>
            Book a tailored demo and see exactly how Mealiez works for your operation.
          </p>
          <div className="rv d2" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book-demo" className="btn-ora">Book a Tailored Demo</Link>
            <Link href="/solutions" style={{ color: "rgba(255,255,255,.55)", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, padding: "15px 0" }}>
              View all solutions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
