"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@/components/ui/icon";
import BorderGlow from "@/components/ui/border-glow";

const footerColumns = [
  {
    title: "Product",
    links: [
      ["All Products", "/product"],
      ["Meal Booking", "/product/meal-booking"],
      ["Smart Attendance", "/product/attendance"],
      ["Billing & Payments", "/product/billing"],
      ["Inventory Control", "/product/inventory"],
      ["Analytics & Reports", "/product/analytics"],
      ["Mobile App", "/product/mobile-app"],
    ],
  },
  {
    title: "Company & Trust",
    links: [
      ["About Company", "/company"],
      ["Reviews & FAQs", "/reviews-faqs"],
      ["Pricing Plans", "/pricing"],
      ["Book a Demo", "/book-demo"],
      ["Customer Stories", "/customers"],
      ["Why Mealiez", "/why-mealiez"],
    ],
  },
  {
    title: "Solutions & Tools",
    links: [
      ["Hostel Mess", "/solutions/hostel-mess"],
      ["College Canteens", "/solutions/college-canteen"],
      ["Industrial Canteen", "/solutions/industrial-canteen"],
      ["Corporate Cafeteria", "/solutions/corporate-cafeteria"],
      ["ROI Calculator", "/resources/roi-calculator"],
      ["Cost Leakage Calc", "/resources/cost-leakage-calculator"],
    ],
  },
];

const legalLinks = [
  ["Privacy Policy", "/legal/privacy"],
  ["Terms of Service", "/legal/terms"],
  ["Security", "/security"],
  ["Data Infrastructure", "/legal/data-infrastructure"],
];

const socials = [
  { label: "LinkedIn", href: "#",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: "Instagram", href: "#",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: "YouTube", href: "#",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
  { label: "Twitter / X", href: "#",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
];

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function SiteFooter() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-80px 0px" });

  return (
    <motion.footer
      ref={footerRef}
      style={{
        position: "relative",
        width: "100%",
        background:
          "radial-gradient(ellipse 100% 60% at 0% 0%, rgba(234,88,12,0.08) 0%, transparent 50%)," +
          "radial-gradient(ellipse 70% 50% at 100% 0%, rgba(249,115,22,0.06) 0%, transparent 50%)," +
          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(234,88,12,0.05) 0%, transparent 50%)," +
          "#F9FAFB",
        overflow: "hidden",
        padding: "clamp(40px, 5vw, 80px) clamp(16px, 3vw, 48px)",
        borderTop: "1px solid #E5E7EB",
      }}
    >
      <style>{`
        .ft-nav-link {
          font-size: 13px;
          color: #4B5563;
          font-weight: 500;
          text-decoration: none;
          display: inline-block;
          line-height: 1.4;
          font-family: 'Barlow', system-ui, sans-serif;
          position: relative;
          transition: color 0.3s ease, transform 0.3s ease;
          padding: 2px 0;
        }
        .ft-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #EA580C, #F97316);
          transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          border-radius: 2px;
        }
        .ft-nav-link:hover {
          color: #EA580C;
          font-weight: 600;
          transform: translateX(4px);
        }
        .ft-nav-link:hover::after { width: 60%; }

        .ft-bottom-link {
          font-size: 12px;
          color: #6B7280;
          font-weight: 500;
          text-decoration: none;
          font-family: 'Barlow', system-ui, sans-serif;
          transition: color 0.3s ease;
          position: relative;
        }
        .ft-bottom-link:hover { color: #EA580C; }

        .ft-social-float {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(229,231,235,0.8);
          color: #6B7280;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
          position: relative;
        }
        .ft-social-float:hover {
          color: #EA580C;
          border-color: rgba(234,88,12,0.3);
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 24px rgba(234,88,12,0.18);
          background: #ffffff;
        }
      `}</style>

      {/* ── Background ambient glow — orange glow outside the card ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: easeOut }}
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
      >
        {/* Large orange glow behind the floating card */}
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          transform:"translate(-50%,-50%)",
          width:"80%", height:"80%",
          background:"radial-gradient(ellipse, rgba(255,107,53,0.12) 0%, rgba(255,162,127,0.05) 30%, transparent 60%)",
          filter:"blur(80px)",
          animation:"auroraDrift 15s ease-in-out infinite",
        }}/>
        <div style={{
          position:"absolute", top:"20%", right:"10%",
          width:300, height:300,
          background:"radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 60%)",
          filter:"blur(60px)",
          animation:"auroraDrift 20s ease-in-out infinite reverse",
        }}/>
        <div style={{
          position:"absolute", bottom:"10%", left:"15%",
          width:250, height:250,
          background:"radial-gradient(circle, rgba(255,162,127,0.06) 0%, transparent 60%)",
          filter:"blur(50px)",
          animation:"auroraDrift 18s ease-in-out infinite",
        }}/>
        <div className="morph-blob" style={{ width:400, height:400, background:"rgba(255,107,53,0.05)", top:-100, right:-60, animationDelay:"-2s" }} />
        <div className="morph-blob" style={{ width:300, height:300, background:"rgba(255,162,127,0.04)", bottom:-80, left:-40, animationDelay:"-5s" }} />
      </motion.div>

      {/* ── Floating Glass Card ── */}
      <BorderGlow
        glowColor="20 80 70"
        backgroundColor="transparent"
        borderRadius={32}
        glowRadius={40}
        glowIntensity={0.5}
        colors={["#EA580C", "#F97316", "#FB923C"]}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          borderRadius: 32,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(32px) saturate(1.6)",
          WebkitBackdropFilter: "blur(32px) saturate(1.6)",
          border: "1px solid #E5E7EB",
          boxShadow:
            "0 0 60px rgba(234,88,12,0.10)," +
            "0 32px 80px rgba(17,24,39,0.05)," +
            "0 8px 24px rgba(17,24,39,0.03)," +
            "inset 0 1px 0 rgba(255,255,255,0.95)",
          overflow: "hidden",
        }}
      >
        {/* Glass reflection overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
          background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.2) 100%)",
          borderRadius: 32,
        }}/>

        {/* ━━━ CTA SECTION ━━━ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          style={{
            position: "relative", zIndex: 1,
            padding: "clamp(40px, 5vw, 64px) clamp(28px, 4vw, 56px)",
            borderBottom: "1px solid rgba(234,88,12,0.08)",
          }}
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
            gap: "clamp(24px, 4vw, 56px)",
            alignItems: "center",
          }}>
            {/* Left */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  fontSize: 10, fontWeight: 800, color: "#EA580C",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  marginBottom: 10,
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                }}
              >
                Ready to transform?
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.35 }}
                style={{
                  fontSize: "clamp(26px, 3.2vw, 40px)",
                  fontWeight: 900,
                  color: "#111827",
                  marginBottom: 14,
                  lineHeight: 1.08,
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "-0.015em",
                }}
              >
                Your mess deserves<br/>
                <span style={{
                  background: "linear-gradient(135deg, #EA580C, #F97316)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>better operations.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                style={{
                  fontSize: 14, color: "#555", lineHeight: 1.7, fontWeight: 500,
                  maxWidth: 400, marginBottom: 20,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                }}
              >
                Join 500+ mess operators across India who have cut food wastage, automated billing, and gained complete control.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
                style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
              >
                <Link href="/book-demo" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg, #EA580C, #F97316)",
                  color: "#fff", border: "none", borderRadius: 10,
                  padding: "12px 24px", fontSize: 13, fontWeight: 700,
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                  textDecoration: "none", letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  boxShadow: "0 6px 20px rgba(234,88,12,0.28), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transition: "transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s",
                }}
                  onMouseEnter={(e)=>{e.currentTarget.style.transform="translateY(-2px) scale(1.02)";e.currentTarget.style.boxShadow="0 10px 32px rgba(234,88,12,0.4)"}}
                  onMouseLeave={(e)=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
                  Book a Free Demo
                  <Icon name="arrow-right" size={12} color="#fff" strokeWidth={2.5} />
                </Link>
                <Link href="/pricing" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "#ffffff",
                  backdropFilter: "blur(8px)",
                  color: "#111827", border: "1.5px solid #E5E7EB",
                  borderRadius: 10, padding: "12px 20px",
                  fontSize: 12, fontWeight: 600,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  textDecoration: "none",
                  transition: "all .3s cubic-bezier(.22,1,.36,1)",
                }}
                  onMouseEnter={(e)=>{e.currentTarget.style.background="#FFF7ED";e.currentTarget.style.borderColor="rgba(234,88,12,0.3)";e.currentTarget.style.transform="translateY(-2px)"}}
                  onMouseLeave={(e)=>{e.currentTarget.style.background="#ffffff";e.currentTarget.style.borderColor="#E5E7EB";e.currentTarget.style.transform=""}}>
                  View Pricing
                </Link>
              </motion.div>
            </div>

            {/* Right — Trust stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
            >
              {[
                { value: "500+", label: "Institutions" },
                { value: "10M+", label: "Meals Tracked" },
                { value: "99.9%", label: "Uptime" },
                { value: "₹100M+", label: "Wastage Saved" },
              ].map((s,i)=>(
                <div key={i} style={{
                  background: "#ffffff",
                  borderRadius: 12, padding: "12px 14px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                }}>
                  <div style={{
                    fontSize: 18, fontWeight: 900, color: "#EA580C",
                    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    fontFeatureSettings: "'tnum' on",
                    lineHeight: 1,
                  }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600, marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ━━━ NAVIGATION + BRAND ━━━ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
          style={{
            position: "relative", zIndex: 1,
            padding: "clamp(28px, 3.5vw, 48px) clamp(28px, 4vw, 56px) clamp(20px, 2.5vw, 32px)",
          }}
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.8fr) minmax(0, 1fr)",
            gap: "clamp(28px, 4vw, 60px)",
            alignItems: "start",
          }}>
            {/* Navigation */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.55 }}
                style={{
                  fontSize: 10, fontWeight: 800, color: "#999",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  marginBottom: 16,
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                }}
              >
                Explore
              </motion.p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "clamp(16px, 2vw, 32px)",
              }}>
                {footerColumns.map((col, ci) => (
                  <motion.div
                    key={col.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: easeOut, delay: 0.6 + ci * 0.08 }}
                  >
                    <h4 style={{
                      fontSize: 10, fontWeight: 800, color: "#888",
                      marginBottom: 12, textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    }}>
                      {col.title}
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {col.links.map(([label, href]) => (
                        <li key={label} style={{ marginBottom: 6 }}>
                          <Link href={href} className="ft-nav-link">{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Brand + Social + Legal */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.65 }}
                style={{ marginBottom: 16 }}
              >
                <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 26, height: 26,
                    background: "linear-gradient(135deg, #EA580C, #F97316)",
                    borderRadius: 7,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 3px 10px rgba(234,88,12,0.3)",
                    flexShrink: 0,
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                    </svg>
                  </div>
                  <span style={{
                    fontSize: 16, fontWeight: 800, color: "#EA580C",
                    letterSpacing: "-0.02em",
                    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    textTransform: "uppercase",
                  }}>
                    Mealiez
                  </span>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                style={{
                  fontSize: 13, color: "#4B5563", lineHeight: 1.65, fontWeight: 500,
                  marginBottom: 10, maxWidth: 260,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                }}
              >
                India's smart mess management system and marketplace.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.72 }}
                style={{
                  fontSize: 12, color: "#6B7280", lineHeight: 1.6,
                  marginBottom: 16,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                }}
              >
                <div>Email: <a href="mailto:Mealiez.customercare@gmail.com" style={{ color: "#EA580C", textDecoration: "none" }}>Mealiez.customercare@gmail.com</a></div>
                <div>Phone: <a href="tel:+919270398199" style={{ color: "#111827", textDecoration: "none", fontWeight: 600 }}>+91 9270398199</a></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.75 }}
                style={{ display: "flex", gap: 8, marginBottom: 20 }}
              >
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="ft-social-float"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{ display: "flex", flexDirection: "column", gap: 5 }}
              >
                {legalLinks.map(([label, href]) => (
                  <Link key={label} href={href} className="ft-bottom-link">{label}</Link>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ━━━ BOTTOM BAR ━━━ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{
            position: "relative", zIndex: 1,
            borderTop: "1px solid rgba(255,107,53,0.04)",
            padding: "16px clamp(28px, 4vw, 56px)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 10,
          }}
        >
          <p style={{
            fontSize: 11, color: "#999", margin: 0, fontWeight: 500,
            fontFamily: "'Barlow', system-ui, sans-serif",
          }}>
            &copy; 2026 Mealiez. All rights reserved.
          </p>
          <div style={{
            fontSize: 11, color: "#bbb", fontWeight: 500,
            fontFamily: "'Barlow', system-ui, sans-serif",
          }}>
            Made for mess operators across India
          </div>
        </motion.div>
      </BorderGlow>
    </motion.footer>
  );
}