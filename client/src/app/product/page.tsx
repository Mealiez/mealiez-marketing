"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv,.rv-l,.rv-r");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 14,
      marginBottom: 12, boxShadow: open ? "0 4px 24px rgba(255,107,53,0.08)" : "none",
      transition: "box-shadow .2s"
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", background: "none", border: "none", cursor: "pointer",
        padding: "20px 26px", display: "flex", justifyContent: "space-between",
        alignItems: "center", textAlign: "left", fontSize: 16, fontWeight: 600, color: "#1a1a1a"
      }}>
        {q}
        <svg style={{ flexShrink: 0, marginLeft: 16, transform: open ? "rotate(180deg)" : "none", transition: "transform .25s" }}
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div style={{ padding: "0 26px 20px", fontSize: 15, color: "#555", lineHeight: 1.78 }}>{a}</div>
      )}
    </div>
  );
}

export default function ProductPage() {
  useReveal();
  return (
    <>
      <style>{`
        /* ── Reveal ── */
        .rv   { opacity:0; transform:translateY(28px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .rv-l { opacity:0; transform:translateX(-32px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .rv-r { opacity:0; transform:translateX(32px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .rv.in,.rv-l.in,.rv-r.in { opacity:1; transform:none; }
        .d1{transition-delay:.1s!important} .d2{transition-delay:.2s!important}
        .d3{transition-delay:.3s!important} .d4{transition-delay:.4s!important}

        /* ── Page base ── */
        .pp { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; width:100%; }

        /* ── Full-width section wrappers ── */
        .sec { width:100%; }
        .sec-cream { width:100%; background:#fef6f0; }
        .sec-white { width:100%; background:#fff; }
        .sec-dark  { width:100%; background:#111; }

        /* ── Inner content wrapper — scales with screen ── */
        .cx {
          width:100%;
          max-width:1400px;
          margin:0 auto;
          padding: clamp(60px,8vw,100px) clamp(24px,6vw,100px);
        }
        .cx-md {
          width:100%;
          max-width:900px;
          margin:0 auto;
          padding: clamp(60px,8vw,100px) clamp(24px,6vw,100px);
        }

        /* ── Section title ── */
        .sec-h { font-size:clamp(28px,4vw,46px); font-weight:900; text-align:center;
          letter-spacing:-.025em; margin-bottom:clamp(32px,4vw,56px); color:#1a1a1a; }
        .sec-p { font-size:clamp(14px,1.4vw,17px); color:#555; text-align:center;
          line-height:1.75; max-width:580px; margin:0 auto clamp(36px,4vw,56px); }

        /* ── Buttons ── */
        .btn-ora {
          background:#FF6B35; color:#fff; border:none; border-radius:12px;
          padding:clamp(12px,1.4vw,17px) clamp(24px,3vw,40px);
          font-size:clamp(14px,1.3vw,16px); font-weight:700;
          cursor:pointer; text-decoration:none;
          display:inline-flex; align-items:center; gap:8px;
          box-shadow:0 6px 24px rgba(255,107,53,.36);
          transition:transform .2s,box-shadow .2s;
        }
        .btn-ora:hover{transform:translateY(-2px);box-shadow:0 10px 36px rgba(255,107,53,.46);}
        .btn-out {
          background:#fff; color:#1a1a1a; border:1.5px solid rgba(0,0,0,.12); border-radius:12px;
          padding:clamp(11px,1.3vw,16px) clamp(24px,3vw,40px);
          font-size:clamp(14px,1.3vw,16px); font-weight:600;
          cursor:pointer; text-decoration:none;
          display:inline-flex; align-items:center; gap:8px;
          transition:border-color .2s,background .2s,transform .2s;
        }
        .btn-out:hover{border-color:rgba(255,107,53,.4);background:#fff3ee;transform:translateY(-2px);}

        /* ── Cards ── */
        .card {
          background:#fff; border:1px solid rgba(0,0,0,.07); border-radius:18px;
          padding:clamp(20px,2.5vw,32px);
          transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s;
        }
        .card:hover{transform:translateY(-5px);box-shadow:0 20px 56px rgba(255,107,53,.10);}

        /* ── Icon circle ── */
        .ic {
          width:clamp(40px,4vw,52px); height:clamp(40px,4vw,52px); border-radius:50%;
          background:rgba(255,107,53,.1); border:1px solid rgba(255,107,53,.2);
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }

        /* ── Badge label ── */
        .blabel { font-size:10px;font-weight:800;letter-spacing:.1em;
          color:#FF6B35;text-transform:uppercase;margin-bottom:10px; }

        /* ── Dark card ── */
        .dark-card {
          background:#0f0f0f; border-radius:18px; overflow:hidden;
          border:1px solid rgba(255,255,255,.07);
          box-shadow:0 20px 64px rgba(0,0,0,.3);
        }

        /* ── Impact stat ── */
        .impact-card {
          background:#fff; border:1px solid rgba(0,0,0,.07); border-radius:16px;
          padding:clamp(22px,3vw,36px) clamp(16px,2vw,24px); text-align:center;
          transition:transform .25s,box-shadow .25s;
        }
        .impact-card:hover{transform:translateY(-5px);box-shadow:0 14px 48px rgba(255,107,53,.12);}
        .impact-num {
          font-size:clamp(34px,5vw,52px); font-weight:900; color:#FF6B35;
          letter-spacing:-.03em; line-height:1.1;
        }
        .impact-label { font-size:clamp(12px,1.1vw,15px); color:#666; margin-top:10px; }

        /* ── Check list row ── */
        .chk { display:flex; align-items:center; gap:10px;
          font-size:clamp(13px,1.2vw,15px); color:#444; margin-bottom:11px; }

        /* ── Dashed divider ── */
        .dash-rule { border:none; border-top:2px dashed rgba(255,107,53,.2); margin:0; }

        /* ── Responsive grid helpers ── */
        .grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,2vw,24px); }
        .grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(12px,2vw,22px); }
        .grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:clamp(16px,2.5vw,30px); }
        @media(max-width:900px){
          .grid-3,.grid-4{ grid-template-columns:1fr 1fr; }
          .grid-2{ grid-template-columns:1fr; }
        }
        @media(max-width:600px){
          .grid-3,.grid-4,.grid-2{ grid-template-columns:1fr; }
        }
      `}</style>

      <div className="pp">

        {/* ══ HERO ══ */}
        <section className="sec-cream">
          <div style={{ width:"100%", maxWidth:1400, margin:"0 auto", padding:"clamp(72px,8vw,100px) clamp(24px,6vw,100px) 0", textAlign:"center" }}>
            <h1 className="rv" style={{
              fontSize:"clamp(36px,5.5vw,64px)", fontWeight:900, lineHeight:1.1,
              letterSpacing:"-.03em", color:"#1a1a1a", marginBottom:"clamp(16px,2vw,24px)"
            }}>
              Precision <span style={{ color:"#FF6B35" }}>Meal Booking</span> for<br/>Enterprise Scale
            </h1>
            <p className="rv d1" style={{
              fontSize:"clamp(15px,1.5vw,18px)", color:"#555", lineHeight:1.75,
              maxWidth:"min(580px, 90%)", margin:"0 auto clamp(28px,3vw,40px)"
            }}>
              Eliminate food waste and operational friction with our predictive, high-fidelity booking engine designed for complex food service logistics.
            </p>
            <div className="rv d2" style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/book-demo" className="btn-ora">Start Optimizing</Link>
              <Link href="#architecture" className="btn-out">View Architecture</Link>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="rv" style={{
            width:"100%", maxWidth:1100, margin:"clamp(40px,5vw,60px) auto 0",
            padding:"0 clamp(16px,4vw,60px)"
          }}>
            <div style={{
              background:"#fff", borderRadius:"20px 20px 0 0",
              border:"1px solid rgba(0,0,0,.07)", borderBottom:"none",
              boxShadow:"0 -8px 56px rgba(0,0,0,.09)", overflow:"hidden"
            }}>
              {/* Window chrome */}
              <div style={{ background:"#f5f5f5", padding:"11px 18px", borderBottom:"1px solid rgba(0,0,0,.06)", display:"flex", alignItems:"center", gap:7 }}>
                {["#ff5f57","#febc2e","#28c840"].map(c=><div key={c} style={{ width:12,height:12,borderRadius:"50%",background:c }} />)}
                <div style={{ flex:1, background:"#e0e0e0", borderRadius:5, height:19, maxWidth:240, marginLeft:10 }} />
              </div>
              {/* Layout */}
              <div style={{ display:"flex", minHeight:"clamp(280px,35vw,400px)" }}>
                {/* Sidebar */}
                <div style={{ width:"clamp(100px,12vw,160px)", background:"#fafafa", borderRight:"1px solid rgba(0,0,0,.05)", padding:"16px 14px", flexShrink:0 }}>
                  {["Deals Dashboard","Leads Dashboard"].map(t=>(
                    <div key={t} style={{ fontSize:"clamp(8px,0.9vw,11px)",color:"#bbb",marginBottom:8 }}>{t}</div>
                  ))}
                  <div style={{ fontSize:"clamp(7px,0.8vw,10px)",fontWeight:700,color:"#ddd",letterSpacing:".08em",marginTop:14,marginBottom:8 }}>LAYOUT</div>
                  {["Horizontal","Detached","Modern","Two Column","Hovered","Boxed","RTL","Dark"].map(t=>(
                    <div key={t} style={{ fontSize:"clamp(8px,0.9vw,11px)",color:"#999",marginBottom:6,display:"flex",alignItems:"center",gap:5 }}>
                      <div style={{ width:6,height:6,borderRadius:1,background:"#e0e0e0",flexShrink:0 }}/>{t}
                    </div>
                  ))}
                  <div style={{ fontSize:"clamp(7px,0.8vw,10px)",fontWeight:700,color:"#ddd",letterSpacing:".08em",marginTop:12,marginBottom:8 }}>CONTENT</div>
                  {["Pages","Blogs","Locations","Testimonials"].map(t=>(
                    <div key={t} style={{ fontSize:"clamp(8px,0.9vw,11px)",color:"#999",marginBottom:7 }}>{t}</div>
                  ))}
                </div>
                {/* Main */}
                <div style={{ flex:1, display:"grid", gridTemplateColumns:"1fr 1fr" }}>
                  {/* User */}
                  <div style={{ padding:"clamp(14px,2vw,22px)",borderRight:"1px solid rgba(0,0,0,.05)",borderBottom:"1px solid rgba(0,0,0,.05)" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:14 }}>
                      <div style={{ width:38,height:38,borderRadius:"50%",background:"linear-gradient(135deg,#FF6B35,#FF875C)",flexShrink:0 }}/>
                      <div>
                        <div style={{ fontSize:"clamp(10px,1.1vw,13px)",fontWeight:700,color:"#1a1a1a" }}>Stephan Peralt</div>
                        <div style={{ fontSize:"clamp(8px,0.9vw,11px)",color:"#bbb" }}>Senior Product Designer</div>
                      </div>
                    </div>
                    {[["Phone","+1 324 3453 545"],["Email","Stapedo124@example.com"],["Office","Douglas Martini"],["Joined","16 Jan 2024"]].map(([l,v])=>(
                      <div key={l} style={{ marginBottom:9 }}>
                        <div style={{ fontSize:"clamp(7px,0.8vw,10px)",color:"#ccc",marginBottom:2 }}>{l}</div>
                        <div style={{ fontSize:"clamp(9px,1vw,12px)",color:"#444",fontWeight:500 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  {/* Leave details */}
                  <div style={{ padding:"clamp(14px,2vw,22px)",borderBottom:"1px solid rgba(0,0,0,.05)" }}>
                    <div style={{ fontSize:"clamp(10px,1.1vw,13px)",fontWeight:700,color:"#1a1a1a",marginBottom:14 }}>Leave Details</div>
                    <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                      <svg width="80" height="80" viewBox="0 0 80 80" style={{ flexShrink:0 }}>
                        <circle cx="40" cy="40" r="30" fill="none" stroke="#f0f0f0" strokeWidth="13"/>
                        <circle cx="40" cy="40" r="30" fill="none" stroke="#FF6B35" strokeWidth="13" strokeDasharray="76 113" strokeLinecap="round" transform="rotate(-90 40 40)"/>
                        <circle cx="40" cy="40" r="30" fill="none" stroke="#22c55e" strokeWidth="13" strokeDasharray="42 113" strokeDashoffset="-76" strokeLinecap="round" transform="rotate(-90 40 40)"/>
                        <circle cx="40" cy="40" r="30" fill="none" stroke="#3b82f6" strokeWidth="13" strokeDasharray="18 113" strokeDashoffset="-118" strokeLinecap="round" transform="rotate(-90 40 40)"/>
                      </svg>
                      <div>
                        {[["1254","On time","#22c55e"],["32","Late Attendance","#FF6B35"],["658","Work From Home","#3b82f6"],["14","Absent","#ef4444"],["68","Sick Leave","#a855f7"]].map(([n,l,c])=>(
                          <div key={l} style={{ display:"flex",alignItems:"center",gap:6,marginBottom:5 }}>
                            <div style={{ width:7,height:7,borderRadius:"50%",background:c,flexShrink:0 }}/>
                            <span style={{ fontSize:"clamp(8px,0.9vw,11px)",color:"#888" }}><b style={{ color:"#1a1a1a" }}>{n}</b> {l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Attendance */}
                  <div style={{ padding:"clamp(12px,1.8vw,18px)",borderRight:"1px solid rgba(0,0,0,.05)" }}>
                    <div style={{ fontSize:"clamp(8px,0.9vw,11px)",color:"#bbb",marginBottom:8 }}>Attendance · 11 Mar 2025</div>
                    <div style={{ display:"flex",justifyContent:"center",marginBottom:8 }}>
                      <svg width="70" height="70" viewBox="0 0 70 70">
                        <circle cx="35" cy="35" r="27" fill="none" stroke="#f0f0f0" strokeWidth="11"/>
                        <circle cx="35" cy="35" r="27" fill="none" stroke="#22c55e" strokeWidth="11" strokeDasharray="100 70" strokeLinecap="round" transform="rotate(-90 35 35)"/>
                        <text x="35" y="32" textAnchor="middle" fontSize="7" fontWeight="700" fill="#1a1a1a">Total Hours</text>
                        <text x="35" y="41" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1a1a1a">3:45:32</text>
                      </svg>
                    </div>
                    <div style={{ background:"#f7f7f7",borderRadius:8,padding:"7px 10px",fontSize:"clamp(8px,0.9vw,11px)",color:"#666",marginBottom:7 }}>Production · 3:45 hrs</div>
                    <button style={{ width:"100%",background:"#FF6B35",color:"#fff",border:"none",borderRadius:8,padding:"8px 0",fontSize:"clamp(9px,1vw,12px)",fontWeight:700,cursor:"pointer" }}>Punch Out</button>
                  </div>
                  {/* Stats */}
                  <div style={{ padding:"clamp(12px,1.8vw,18px)" }}>
                    <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:9 }}>
                      {[["8.36/8","Today"],["24.4/40","Week"],["126/380","Month"]].map(([n,l])=>(
                        <div key={l} style={{ background:"#f7f7f7",borderRadius:8,padding:"7px 5px",textAlign:"center" }}>
                          <div style={{ fontSize:"clamp(8px,1vw,12px)",fontWeight:700,color:"#1a1a1a" }}>{n}</div>
                          <div style={{ fontSize:"clamp(7px,0.8vw,9px)",color:"#bbb" }}>{l}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background:"#f7f7f7",borderRadius:8,padding:"9px 11px" }}>
                      <div style={{ display:"flex",justifyContent:"space-between",marginBottom:7 }}>
                        {[["12h 36m","Working"],["08h 36m","Productive"],["22m 15s","Break"]].map(([v,l])=>(
                          <div key={l} style={{ textAlign:"center" }}>
                            <div style={{ fontSize:"clamp(8px,1vw,11px)",fontWeight:700,color:"#1a1a1a" }}>{v}</div>
                            <div style={{ fontSize:"clamp(7px,0.8vw,9px)",color:"#bbb" }}>{l}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ display:"flex",gap:3,height:5 }}>
                        <div style={{ flex:3,background:"#22c55e",borderRadius:2 }}/>
                        <div style={{ flex:1,background:"#FF6B35",borderRadius:2 }}/>
                        <div style={{ flex:1,background:"#e5e7eb",borderRadius:2 }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ WHY LEGACY FAILS ══ */}
        <section className="sec-cream">
          <div className="cx">
            <h2 className="sec-h rv">Why Legacy Methods Fail</h2>
            <div className="grid-3">
              {[
                { icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>, title:"Unpredictable Waste", desc:"Manual headcounts lead to overproduction. Legacy systems average 15–20% daily food waste due to inaccurate forecasting." },
                { icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="3"/><circle cx="16" cy="15" r="3"/><line x1="8" y1="12" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="12"/><path d="M8 9h8"/></svg>, title:"Siloed Data", desc:"Spreadsheets don't communicate with procurement. Attendance changes don't adjust inventory requisitions in real-time." },
                { icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title:"Administrative Drag", desc:"Facility managers spend 14+ hours a week reconciling meal chits, managing cut-offs, and handling exception requests manually." },
              ].map((item,i)=>(
                <div key={i} className={`card rv d${i+1}`}>
                  <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:14 }}>
                    <div className="ic">{item.icon}</div>
                    <h3 style={{ fontSize:"clamp(14px,1.4vw,17px)",fontWeight:700,color:"#1a1a1a" }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize:"clamp(13px,1.2vw,15px)",color:"#666",lineHeight:1.75 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="dash-rule"/>

        {/* ══ AUTOMATED BOOKING TO PLATE ══ */}
        <section className="sec-cream" id="architecture">
          <div className="cx">
            <h2 className="sec-h rv">Automated from Booking to Plate</h2>
            <div className="grid-2">
              {/* Phone */}
              <div className="rv-l">
                <div style={{ background:"linear-gradient(160deg,#111,#1c1c1c)", borderRadius:26, padding:18, boxShadow:"0 32px 80px rgba(0,0,0,.45),inset 0 0 0 1px rgba(255,255,255,.06)" }}>
                  <div style={{ background:"#fff",borderRadius:16,overflow:"hidden",minHeight:"clamp(300px,35vw,420px)" }}>
                    <div style={{ padding:"clamp(36px,5vw,52px) clamp(16px,2.5vw,26px) clamp(20px,3vw,28px)",background:"#fff" }}>
                      <div style={{ fontSize:"clamp(14px,1.4vw,17px)",fontWeight:800,color:"#1a1a1a",marginBottom:16,textAlign:"center" }}>Mealiez</div>
                      <div style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:16 }}>
                        {["S","M","T","W","T","F","S"].map((d,i)=>(
                          <div key={i} style={{ textAlign:"center",fontSize:"clamp(8px,0.9vw,11px)",color:"#bbb",fontWeight:600,marginBottom:4 }}>{d}</div>
                        ))}
                        {Array.from({length:35},(_,i)=>{ const day=i-2; const isToday=day===14; const inM=day>=1&&day<=31; return (
                          <div key={i} style={{ textAlign:"center",fontSize:"clamp(9px,1vw,12px)",padding:"5px 2px",borderRadius:7,background:isToday?"#FF6B35":"transparent",color:isToday?"#fff":inM?"#333":"#ddd",fontWeight:isToday?700:400 }}>{inM?day:""}</div>
                        );})}
                      </div>
                      <button style={{ width:"100%",background:"#FF6B35",color:"#fff",border:"none",borderRadius:12,padding:"clamp(11px,1.4vw,15px) 0",fontSize:"clamp(13px,1.3vw,15px)",fontWeight:700,cursor:"pointer",boxShadow:"0 6px 20px rgba(255,107,53,.35)" }}>Book Now</button>
                    </div>
                  </div>
                  <div style={{ marginTop:14,padding:"0 4px" }}>
                    <div style={{ color:"#fff",fontWeight:700,fontSize:"clamp(13px,1.3vw,16px)",marginBottom:6 }}>Frictionless User Experience</div>
                    <div style={{ color:"rgba(255,255,255,.55)",fontSize:"clamp(11px,1.1vw,13px)",lineHeight:1.6 }}>One-tap booking, automated cut-off times, and dietary preference profiles.</div>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
                <div className="card rv-r">
                  <div style={{ display:"flex",alignItems:"flex-start",gap:14 }}>
                    <div className="ic" style={{ marginTop:2 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize:"clamp(15px,1.4vw,18px)",fontWeight:700,color:"#1a1a1a",marginBottom:9 }}>1. Predictive Entry</h3>
                      <p style={{ fontSize:"clamp(13px,1.2vw,15px)",color:"#666",lineHeight:1.72 }}>Users book via mobile or web portal. Historical data forecasts no-shows and walk-ins automatically.</p>
                    </div>
                  </div>
                </div>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
                  <div className="card rv-r d1">
                    <div className="ic" style={{ marginBottom:12 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
                    </div>
                    <h3 style={{ fontSize:"clamp(14px,1.3vw,17px)",fontWeight:700,color:"#1a1a1a",marginBottom:8 }}>2. Dynamic Routing</h3>
                    <p style={{ fontSize:"clamp(12px,1.1vw,14px)",color:"#666",lineHeight:1.7 }}>Aggregated data routes to procurement and kitchen display systems for precise prep scaling.</p>
                  </div>
                  <div className="card rv-r d2">
                    <div className="ic" style={{ marginBottom:12 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    </div>
                    <h3 style={{ fontSize:"clamp(14px,1.3vw,17px)",fontWeight:700,color:"#1a1a1a",marginBottom:8 }}>3. Verified Fulfillment</h3>
                    <p style={{ fontSize:"clamp(12px,1.1vw,14px)",color:"#666",lineHeight:1.7 }}>Secure QR or biometric scanning ensures accurate billing and attendance reconciliation.</p>
                  </div>
                </div>
                <div className="card rv-r d3">
                  <div className="blabel">Module Specs</div>
                  {["Granular cut-off time configuration","Guest meal and exception handling","Multi-location & shift support"].map((s,i)=>(
                    <div key={i} className="chk">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>{s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ENGINEERED FOR ENTERPRISE ══ */}
        <section className="sec-white">
          <div className="cx">
            <h2 className="sec-h rv">Engineered for Enterprise</h2>
            <div className="grid-4">
              {[
                { badge:"DATA/SYNC",title:"Real-time KDS",desc:"Instant synchronization between booking portal and kitchen display systems." },
                { badge:"SECURE/AUTH",title:"SSO Integration",desc:"Seamless login via SAML/OAuth with existing enterprise active directories." },
                { badge:"ANALYTICS/ML",title:"Predictive Modeling",desc:"Machine learning algorithms forecast consumption patterns to reduce waste." },
                { badge:"COMPLIANCE/AUDIT",title:"Audit Trails",desc:"Comprehensive logging of all transactions and changes for accountability." },
              ].map((item,i)=>(
                <div key={i} className={`card rv d${i+1}`}>
                  <div className="blabel">{item.badge}</div>
                  <h3 style={{ fontSize:"clamp(14px,1.4vw,18px)",fontWeight:700,color:"#1a1a1a",marginBottom:10 }}>{item.title}</h3>
                  <p style={{ fontSize:"clamp(12px,1.1vw,14px)",color:"#666",lineHeight:1.72 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ DATA FLOW ══ */}
        <section className="sec-cream">
          <div className="cx">
            <h2 className="sec-h rv">End-to-End Data Flow</h2>
            <div className="card rv" style={{ padding:"clamp(32px,5vw,56px) clamp(24px,6vw,80px)" }}>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:"clamp(16px,4vw,48px)",flexWrap:"wrap" }}>
                {[
                  { icon:<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,label:"User Input",sub:"Mobile/Web App" },
                  null,
                  { icon:<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,label:"Mealiez Core",sub:"Processing Engine" },
                  null,
                  { icon:<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,label:"KDS & Inventory",sub:"Kitchen Display" },
                ].map((item,i) => item ? (
                  <div key={i} style={{ textAlign:"center" }}>
                    <div style={{ width:"clamp(56px,7vw,76px)",height:"clamp(56px,7vw,76px)",borderRadius:"50%",background:"rgba(255,107,53,.1)",border:"1px solid rgba(255,107,53,.2)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto clamp(10px,1.5vw,16px)" }}>{item.icon}</div>
                    <div style={{ fontSize:"clamp(13px,1.3vw,16px)",fontWeight:700,color:"#1a1a1a",marginBottom:4 }}>{item.label}</div>
                    <div style={{ fontSize:"clamp(11px,1vw,14px)",color:"#aaa" }}>{item.sub}</div>
                  </div>
                ) : (
                  <div key={i} style={{ fontSize:"clamp(18px,2.5vw,28px)",color:"#ccc" }}>→</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ HIGH-FIDELITY CONTROL ══ */}
        <section className="sec-white">
          <div className="cx">
            <h2 className="sec-h rv">High-Fidelity Control</h2>
            <div className="grid-2">
              <div className="rv-l">
                <div className="dark-card" style={{ marginBottom:14 }}>
                  <div style={{ padding:"13px 18px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",gap:7 }}>
                    {["#ff5f57","#febc2e","#28c840"].map(c=><div key={c} style={{ width:11,height:11,borderRadius:"50%",background:c }} />)}
                  </div>
                  <div style={{ padding:"clamp(14px,2vw,22px)" }}>
                    <div style={{ display:"flex",alignItems:"flex-end",gap:3,height:"clamp(80px,12vw,120px)",marginBottom:14 }}>
                      {[35,55,42,72,60,88,65,78,50,92,68,82,45,70,58,85].map((h,i)=>(
                        <div key={i} style={{ flex:1,borderRadius:"2px 2px 0 0",background:i%3===0?"#FF6B35":i%3===1?"#22c55e":"#3b82f6",height:`${h}%`,opacity:.85 }} />
                      ))}
                    </div>
                    <svg viewBox="0 0 300 56" width="100%" style={{ display:"block" }}>
                      <path d="M0,45 C40,38 60,18 100,24 S160,10 200,14 S260,4 300,7" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M0,50 C40,46 60,34 100,37 S160,26 200,28 S260,20 300,18" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,.06)",padding:"10px 18px" }}>
                    {[["Revenue","$124,320","↑ 12%"],["Meals Served","42,100","↑ 8%"],["Waste %","3.2%","↓ 18%"]].map(([k,v,c])=>(
                      <div key={k} style={{ display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:"clamp(10px,1vw,13px)" }}>
                        <span style={{ color:"#666" }}>{k}</span>
                        <span style={{ color:"#ccc",fontWeight:600 }}>{v}</span>
                        <span style={{ color:c.includes("↓")?"#22c55e":"#FF6B35",fontWeight:600 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize:"clamp(13px,1.3vw,16px)",fontWeight:600,color:"#1a1a1a" }}>Executive Analytics</div>
              </div>
              <div className="rv-r">
                <div className="dark-card" style={{ marginBottom:14 }}>
                  <div style={{ padding:"13px 18px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",gap:7 }}>
                    {["#ff5f57","#febc2e","#28c840"].map(c=><div key={c} style={{ width:11,height:11,borderRadius:"50%",background:c }} />)}
                  </div>
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"center",height:"clamp(160px,22vw,240px)" }}>
                    <svg viewBox="0 0 200 200" width="clamp(140px,18vw,200px)" height="clamp(140px,18vw,200px)">
                      <defs>
                        <radialGradient id="ig3" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#1e3a6e"/>
                          <stop offset="100%" stopColor="#060d1a"/>
                        </radialGradient>
                      </defs>
                      <circle cx="100" cy="100" r="90" fill="url(#ig3)"/>
                      {Array.from({length:16},(_,i)=>{ const angle=(i/16)*Math.PI*2-Math.PI/2; const r1=28+(i%3)*9; const r2=55+(i%4)*11; return <line key={i} x1={100+Math.cos(angle)*r1} y1={100+Math.sin(angle)*r1} x2={100+Math.cos(angle)*r2} y2={100+Math.sin(angle)*r2} stroke="rgba(96,165,250,.5)" strokeWidth="1.5"/>; })}
                      <circle cx="100" cy="100" r="32" fill="none" stroke="rgba(59,130,246,.4)" strokeWidth="2"/>
                      <circle cx="100" cy="100" r="54" fill="none" stroke="rgba(59,130,246,.2)" strokeWidth="1" strokeDasharray="4 4"/>
                      <text x="100" y="96" textAnchor="middle" fontSize="9" fontWeight="800" fill="rgba(255,255,255,.8)">REAL-TIME</text>
                      <text x="100" y="108" textAnchor="middle" fontSize="9" fontWeight="800" fill="rgba(255,255,255,.8)">INVENTORY</text>
                    </svg>
                  </div>
                </div>
                <div style={{ fontSize:"clamp(13px,1.3vw,16px)",fontWeight:600,color:"#1a1a1a" }}>Real-Time Inventory</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ MEASURABLE IMPACT ══ */}
        <section className="sec-cream">
          <div className="cx">
            <h2 className="sec-h rv">Measurable Impact</h2>
            <div className="grid-4">
              {[
                { num:"-18%",label:"Average Waste Reduction" },
                { num:"99.8%",label:"Fulfillment Accuracy" },
                { num:"+12h",label:"Admin Time Saved / Wk" },
                { num:"ROI",label:"< 3 Months Average" },
              ].map((s,i)=>(
                <div key={i} className={`impact-card rv d${i+1}`}>
                  <div className="impact-num">{s.num}</div>
                  <div className="impact-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="sec-white">
          <div className="cx-md">
            <h2 className="sec-h rv">Frequently Asked Questions</h2>
            <div className="rv">
              <FAQ q="How does the integration with existing ERPs work?" a="Mealiez connects to your ERP via REST API or webhook. We support SAP, Oracle, and most custom ERPs. Setup typically takes 1–2 days with our integration team. All data flows are encrypted and auditable." />
              <FAQ q="What is the hardware requirement for fulfillment?" a="For QR scanning, any Android or iOS device with a camera works. For biometric access, we support standard RFID readers and fingerprint scanners. We also offer our own hardened terminal hardware for enterprise deployments." />
              <FAQ q="Is data secure and compliant?" a="Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified and GDPR compliant. Data residency options are available for regulated industries." />
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="sec-cream" style={{ textAlign:"center" }}>
          <div style={{ padding:"clamp(64px,8vw,100px) clamp(24px,6vw,100px)" }}>
            <h2 className="rv" style={{ fontSize:"clamp(30px,5vw,52px)",fontWeight:900,color:"#1a1a1a",marginBottom:18,letterSpacing:"-.025em" }}>Ready for precision?</h2>
            <p className="rv d1" style={{ fontSize:"clamp(14px,1.4vw,17px)",color:"#555",lineHeight:1.75,maxWidth:"min(560px,90%)",margin:"0 auto clamp(28px,3vw,40px)" }}>
              Join the enterprise kitchens running at peak efficiency with Mealiez Culinary OS.
            </p>
            <Link href="/book-demo" className="btn-ora rv d2" style={{ fontSize:"clamp(15px,1.4vw,18px)",padding:"clamp(14px,1.6vw,19px) clamp(32px,4vw,52px)" }}>
              Book a Technical Demo
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
