"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navMenus } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";

const topLinks = [
  { href: "/why-mealiez", label: "Why Mealiez" },
  { href: "/pricing",     label: "Pricing" },
  { href: "/customers",   label: "Customers" },
  { href: "/resources",   label: "Resources" },
  { href: "/company",     label: "Company" },
];

const easeNav = [0.22, 1, 0.36, 1] as [number, number, number, number];
const easeSpring = [0.34, 1.56, 0.64, 1] as [number, number, number, number];

export function SiteHeader() {
  const path = usePathname();
  const isActive = (href: string) => path === href || path.startsWith(href + "/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProduct, setMobileProduct] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [ctaHovered, setCtaHovered] = useState(false);

  // Detect scroll direction + distance
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 24);
      if (sy > 200) {
        setHidden(sy > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = sy;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileProduct(false);
    setMobileSolutions(false);
  }, [path]);

  // Cursor-aware magnetic effect for CTA
  const handleCtaMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  }, []);

  // Ripple effect on CTA click
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const rippleId = useRef(0);

  const handleCtaClick = useCallback((e: React.MouseEvent) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = rippleId.current++;
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  }, []);

  return (
    <>
      <style>{`
        /* ── Aurora border animation ── */
        @keyframes auroraRotate {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes auroraDrift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes borderShimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes ctaBreathing {
          0%, 100% { box-shadow: 0 4px 20px rgba(255,107,53,0.25), 0 0 0 0 rgba(255,107,53,0.1); }
          50%      { box-shadow: 0 6px 28px rgba(255,107,53,0.35), 0 0 0 4px rgba(255,107,53,0.05); }
        }
        @keyframes ctaShine {
          0%   { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(200%) rotate(25deg); }
        }
        @keyframes ambientPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 0.8; }
        }

        /* ── Nav link styles ── */
        .nav-link {
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(0,0,0,0.65);
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          text-decoration: none;
          padding: 6px 14px;
          position: relative;
          white-space: nowrap;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border-radius: 9999px;
          transition: color 0.3s ease, letter-spacing 0.35s ease, transform 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          z-index: 1;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,162,127,0.04));
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: -1;
        }
        .nav-link:hover {
          color: #FF6B35;
          letter-spacing: 0.07em;
          transform: translateY(-1px);
        }
        .nav-link:hover::before {
          opacity: 1;
          transform: scale(1);
        }
        .nav-link.active {
          color: #FF6B35;
          font-weight: 600;
          letter-spacing: 0.07em;
        }
        .nav-link.active::before {
          opacity: 1;
          transform: scale(1);
          background: linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,162,127,0.06));
          box-shadow: 0 0 20px rgba(255,107,53,0.08), inset 0 1px 0 rgba(255,255,255,0.6);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 50%;
          width: 0;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #FF6B35, #FF875C, #FFA27F);
          transform: translateX(-50%);
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover::after {
          width: 60%;
        }
        .nav-link.active::after {
          width: 60%;
        }

        /* ── Dropdown ── */
        .nav-group { position: relative; }
        .nav-group .nav-dropdown {
          position: absolute; top: calc(100% + 12px); left: -20px;
          width: 520px;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(40px) saturate(1.8);
          -webkit-backdrop-filter: blur(40px) saturate(1.8);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.85);
          box-shadow: 0 24px 64px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,1);
          padding: 16px; z-index: 100;
          opacity: 0; visibility: hidden;
          transform: translateY(12px) scale(0.96);
          transform-origin: top center;
          transition: opacity 0.25s cubic-bezier(0.22,1,0.36,1),
                      visibility 0.25s,
                      transform 0.25s cubic-bezier(0.22,1,0.36,1);
          pointer-events: none;
        }
        .nav-group:hover .nav-dropdown {
          opacity: 1; visibility: visible;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .dropdown-item {
          font-size: 13px; color: #444; text-decoration: none;
          display: flex; align-items: center;
          padding: 9px 12px; border-radius: 10px;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
          font-family: 'Barlow', system-ui, sans-serif;
          line-height: 1.4; gap: 10px;
        }
        .dropdown-item .di-icon { flex-shrink: 0; }
        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,135,92,0.04));
          color: #FF6B35;
          transform: translateX(3px);
        }
        .dropdown-item.active-item { color: #FF6B35; background: rgba(255,107,53,0.06); }

        /* ── CTA Button ── */
        .header-book-btn {
          background: linear-gradient(135deg, #FF6B35, #FF875C, #FFA27F);
          background-size: 200% 200%;
          color: #fff; border-radius: 9999px; padding: 7px 20px;
          font-weight: 600; font-size: 12px;
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          text-decoration: none; display: inline-flex; align-items: center;
          gap: 6px; letter-spacing: 0.04em; text-transform: uppercase;
          transition: box-shadow 0.3s ease, background-position 0.4s ease, transform 0.3s ease;
          box-shadow: 0 4px 16px rgba(255,107,53,0.25), inset 0 1px 0 rgba(255,255,255,0.2);
          white-space: nowrap;
          will-change: transform;
          position: relative;
          overflow: hidden;
          animation: ctaBreathing 3s ease-in-out infinite;
        }
        .header-book-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          animation: ctaShine 4s ease-in-out infinite;
          pointer-events: none;
        }
        .header-book-btn::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(255,107,53,0.4), rgba(255,162,127,0.2), rgba(255,107,53,0.4));
          background-size: 200% 200%;
          animation: auroraDrift 4s ease-in-out infinite;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .header-book-btn:hover::after {
          opacity: 1;
        }
        .header-book-btn:hover {
          background-position: 100% 0;
          box-shadow: 0 8px 28px rgba(255,107,53,0.4), 0 0 0 1px rgba(255,107,53,0.2);
          transform: translateY(-2px) scale(1.02);
          animation: none;
        }
        .header-book-btn:active {
          transform: scale(0.96);
        }

        /* ── Ripple container ── */
        .ripple-container {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          overflow: hidden;
          pointer-events: none;
        }
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          transform: scale(0);
          animation: rippleAnim 0.6s ease-out forwards;
        }
        @keyframes rippleAnim {
          to { transform: scale(4); opacity: 0; }
        }

        .header-login {
          font-size: 12px; font-weight: 500; color: rgba(0,0,0,0.55);
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          text-decoration: none; padding: 7px 14px; border-radius: 9999px;
          transition: color 0.2s, background 0.2s, transform 0.2s; white-space: nowrap;
          display: inline-flex; align-items: center;
          letter-spacing: 0.04em; text-transform: uppercase;
        }
        .header-login:hover { color: #FF6B35; background: rgba(255,107,53,0.07); transform: translateY(-1px); }

        /* ── Hamburger ── */
        .hamburger {
          display: none; flex-direction: column; justify-content: center;
          gap: 5px; padding: 8px; background: none; border: none;
          cursor: pointer; border-radius: 9999px;
          transition: background 0.2s;
          min-height: unset !important;
          position: relative;
          z-index: 60;
        }
        .hamburger:hover { background: rgba(255,107,53,0.08); }
        .hamburger .bar {
          width: 20px; height: 2px; border-radius: 2px;
          background: #444;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }
        .hamburger.open .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); background: #FF6B35; }
        .hamburger.open .bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: #FF6B35; }

        /* ── Mobile Drawer ── */
        .mobile-drawer {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(48px) saturate(1.8);
          -webkit-backdrop-filter: blur(48px) saturate(1.8);
          z-index: 40; overflow-y: auto;
          padding: 88px 20px 48px;
          display: flex; flex-direction: column; gap: 2px;
        }

        .mobile-nav-link {
          font-size: 15px; font-weight: 600; color: #1a1a1a;
          text-decoration: none; padding: 12px 16px; border-radius: 12px;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          display: flex; align-items: center; justify-content: space-between;
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          letter-spacing: 0.03em; text-transform: uppercase;
        }
        .mobile-nav-link:hover  { background: rgba(255,107,53,0.07); color: #FF6B35; transform: translateX(4px); }
        .mobile-nav-link.active { color: #FF6B35; background: rgba(255,107,53,0.06); }

        .mobile-section-btn {
          font-size: 15px; font-weight: 600; color: #1a1a1a;
          padding: 12px 16px; border-radius: 12px;
          background: none; border: none; cursor: pointer; width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.2s, color 0.2s;
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          letter-spacing: 0.03em; text-transform: uppercase;
          min-height: unset !important;
        }
        .mobile-section-btn:hover { background: rgba(255,107,53,0.07); color: #FF6B35; }

        .mobile-submenu {
          padding: 4px 0 4px 16px;
          display: flex; flex-direction: column; gap: 2px;
          overflow: hidden;
        }
        .mobile-sub-link {
          font-size: 14px; font-weight: 500; color: #555;
          text-decoration: none; padding: 9px 12px; border-radius: 10px;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow', system-ui, sans-serif;
        }
        .mobile-sub-link:hover { background: rgba(255,107,53,0.07); color: #FF6B35; transform: translateX(4px); }

        .mobile-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.12), transparent); margin: 12px 0; }
        .mobile-cta-row { display: flex; gap: 10px; margin-top: 16px; }
        .mobile-cta-row a { flex: 1; justify-content: center; text-align: center; }

        @media (max-width: 900px) {
          .desktop-nav  { display: none !important; }
          .desktop-btns { display: none !important; }
          .hamburger    { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-drawer { display: none !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .header-book-btn { animation: none; }
          .header-book-btn::before { animation: none; }
          .header-book-btn::after { animation: none; }
          .nav-link, .nav-link::before, .nav-link::after { transition: none; }
        }
      `}</style>

      {/* Floating Glass Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{
          opacity: 1,
          y: hidden ? -100 : 0,
          transition: {
            opacity: { duration: 0.6, ease: easeNav },
            y: { duration: 0.4, ease: easeNav },
          },
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: scrolled ? "10px 16px 0" : "20px 16px 0",
          pointerEvents: "none",
          transition: "padding 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* ── Ambient glow behind the navbar ── */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "100%",
          background: "radial-gradient(ellipse at center, rgba(255,107,53,0.08) 0%, rgba(255,162,127,0.04) 30%, transparent 60%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          opacity: scrolled ? 0.5 : 0.25,
          transition: "opacity 0.6s ease",
          animation: scrolled ? "none" : "ambientPulse 6s ease-in-out infinite",
        }}/>

        {/* ── Secondary ambient glow (cool tone) ── */}
        <div style={{
          position: "absolute",
          top: "30%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          height: "80%",
          background: "radial-gradient(ellipse at center, rgba(100,180,255,0.04) 0%, transparent 50%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          opacity: scrolled ? 0.3 : 0.15,
          transition: "opacity 0.6s ease",
        }}/>

        {/* ── Animated Glowing Border (conic gradient) ── */}
        <div style={{
          position: "absolute",
          top: scrolled ? 10 : 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(calc(100% - 32px), 1240px)",
          height: scrolled ? 48 : 54,
          borderRadius: 9999,
          padding: "1.5px",
          background: "conic-gradient(from var(--angle, 0deg), rgba(255,107,53,0.15), rgba(255,162,127,0.08), rgba(255,107,53,0.05), rgba(200,150,255,0.08), rgba(255,107,53,0.12), rgba(255,162,127,0.08), rgba(255,107,53,0.15))",
          opacity: scrolled ? 0.7 : 0.5,
          transition: "all 0.4s ease",
          pointerEvents: "none",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          zIndex: 0,
        }}>
          {/* CSS variable rotation for conic gradient */}
          <style>{`
            @property --angle {
              syntax: '<angle>';
              initial-value: 0deg;
              inherits: false;
            }
            @keyframes conicRotate {
              to { --angle: 360deg; }
            }
            .border-glow-anim {
              animation: conicRotate 8s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .border-glow-anim { animation: none; }
            }
          `}</style>
          <div className="border-glow-anim" style={{
            position: "absolute",
            inset: "-1.5px",
            borderRadius: 9999,
            background: "conic-gradient(from var(--angle, 0deg), rgba(255,107,53,0.2), rgba(255,162,127,0.1), rgba(255,107,53,0.05), rgba(200,150,255,0.1), rgba(255,107,53,0.15), rgba(255,162,127,0.1), rgba(255,107,53,0.2))",
            opacity: 0.6,
            filter: "blur(4px)",
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}/>
        </div>

        {/* ── Main floating glass card ── */}
        <motion.div
          ref={headerRef}
          style={{
            position: "relative",
            pointerEvents: "auto",
            width: "min(100%, 1240px)",
            height: scrolled ? 48 : 54,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 8px 0 16px",
            borderRadius: 9999,
            background: scrolled
              ? "linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,252,249,0.78))"
              : "linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,252,249,0.55))",
            backdropFilter: scrolled
              ? "blur(40px) saturate(1.8)"
              : "blur(28px) saturate(1.6)",
            WebkitBackdropFilter: scrolled
              ? "blur(40px) saturate(1.8)"
              : "blur(28px) saturate(1.6)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: scrolled
              ? "0 12px 48px rgba(17,17,17,0.08), 0 4px 12px rgba(17,17,17,0.04), 0 0 0 1px rgba(255,107,53,0.04), 0 0 60px rgba(255,107,53,0.03)"
              : "0 8px 32px rgba(17,17,17,0.05), 0 2px 8px rgba(17,17,17,0.02), 0 0 0 1px rgba(255,107,53,0.02), 0 0 40px rgba(255,107,53,0.02)",
            transition: "height 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.5s ease, backdrop-filter 0.5s ease, box-shadow 0.5s ease, border 0.3s ease",
          }}
        >
          {/* ── Glass reflection layer ── */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 9999, pointerEvents: "none", zIndex: 0,
            background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 40%, transparent 60%)",
          }}/>
          {/* ── Secondary reflection (bottom edge) ── */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 9999, pointerEvents: "none", zIndex: 0,
            background: "linear-gradient(0deg, rgba(255,255,255,0.15) 0%, transparent 30%)",
          }}/>

          {/* ── Logo ── */}
          <Link href="/" style={{
            textDecoration: "none", display: "flex", alignItems: "center", gap: 8, flexShrink: 0, zIndex: 1,
          }}>
            <motion.div
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: easeSpring, delay: 0.1 },
              }}
              whileHover={{ scale: 1.08, rotate: -4 }}
              style={{
                width: 28, height: 28,
                background: "linear-gradient(135deg, #FF6B35, #FF875C)",
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 3px 10px rgba(255,107,53,0.3)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 5px 18px rgba(255,107,53,0.5), 0 0 30px rgba(255,107,53,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 3px 10px rgba(255,107,53,0.3)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z"/>
              </svg>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } }}
              style={{
                fontSize: 17, fontWeight: 800, color: "#FF6B35",
                letterSpacing: "-0.02em",
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Mealiez
            </motion.span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="desktop-nav" style={{
            display: "flex", alignItems: "center", gap: 2, flex: 1,
            justifyContent: "center", zIndex: 1,
          }}>
            <div className="nav-group">
              <Link href="/product" className={`nav-link${isActive("/product") ? " active" : ""}`}>
                Product
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: 0.5 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </Link>
              <div className="nav-dropdown">
                <div style={{
                  background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(255,135,92,0.03))",
                  borderRadius: 10, padding: "8px 12px",
                  fontSize: 11, color: "#999", marginBottom: 10,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  border: "1px solid rgba(255,107,53,0.06)",
                }}>
                  Automated modules for booking, attendance, billing, inventory and growth.
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                  {navMenus.product.map((item) => (
                    <Link key={item.slug} href={`/product/${item.slug}`}
                      className={`dropdown-item${path === `/product/${item.slug}` ? " active-item" : ""}`}>
                      <span className="di-icon"><Icon name={item.icon} size={16} color="#FF6B35" /></span>{item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="nav-group">
              <Link href="/solutions" className={`nav-link${isActive("/solutions") ? " active" : ""}`}>
                Solutions
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: 0.5 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </Link>
              <div className="nav-dropdown">
                <div style={{
                  background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(255,135,92,0.03))",
                  borderRadius: 10, padding: "8px 12px",
                  fontSize: 11, color: "#999", marginBottom: 10,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  border: "1px solid rgba(255,107,53,0.06)",
                }}>
                  Industry-specific workflows for operational scale and control.
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                  {navMenus.solutions.map((item) => (
                    <Link key={item.slug} href={`/solutions/${item.slug}`}
                      className={`dropdown-item${path === `/solutions/${item.slug}` ? " active-item" : ""}`}>
                      <span className="di-icon"><Icon name={item.icon} size={16} color="#FF6B35" /></span>{item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {topLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`nav-link${isActive(link.href) ? " active" : ""}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop right buttons ── */}
          <div className="desktop-btns" style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0, zIndex: 1 }}>
            <Link href="/login" className="header-login">Login</Link>
            <Link
              ref={ctaRef}
              href="/book-demo"
              className="header-book-btn"
              style={{ display: "inline-flex" }}
              onMouseMove={handleCtaMouseMove}
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => { setCtaHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
              onClick={handleCtaClick}
            >
              Book Demo
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              <div className="ripple-container">
                {ripples.map((r) => (
                  <span
                    key={r.id}
                    className="ripple"
                    style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
                  />
                ))}
              </div>
            </Link>
          </div>

          {/* ── Hamburger ── */}
          <button
            className={`hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{ zIndex: 60 }}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </motion.div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-drawer"
            role="navigation"
          >
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed", inset: 0, zIndex: -1,
                background: "rgba(0,0,0,0.02)",
                backdropFilter: "blur(2px)",
              }}
            />

            {/* Glowing border for mobile drawer */}
            <div style={{
              position: "absolute",
              top: 76,
              left: "50%",
              transform: "translateX(-50%)",
              width: "calc(100% - 40px)",
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.15), rgba(255,162,127,0.1), rgba(255,107,53,0.15), transparent)",
              opacity: 0.6,
            }}/>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.35, ease: easeNav }}
            >
              <button className="mobile-section-btn" onClick={() => setMobileProduct(!mobileProduct)}>
                Product
                <motion.svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  animate={{ rotate: mobileProduct ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: easeSpring }} style={{ flexShrink: 0 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </motion.svg>
              </button>
              <AnimatePresence>
                {mobileProduct && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: easeNav }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="mobile-submenu">
                      {navMenus.product.map((item, i) => (
                        <motion.div
                          key={item.slug}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.3, ease: easeNav }}
                        >
                          <Link href={`/product/${item.slug}`} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                            <Icon name={item.icon} size={18} color="#FF6B35" />
                            {item.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.35, ease: easeNav }}
            >
              <button className="mobile-section-btn" onClick={() => setMobileSolutions(!mobileSolutions)}>
                Solutions
                <motion.svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  animate={{ rotate: mobileSolutions ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: easeSpring }} style={{ flexShrink: 0 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </motion.svg>
              </button>
              <AnimatePresence>
                {mobileSolutions && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: easeNav }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="mobile-submenu">
                      {navMenus.solutions.map((item, i) => (
                        <motion.div
                          key={item.slug}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.3, ease: easeNav }}
                        >
                          <Link href={`/solutions/${item.slug}`} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                            <Icon name={item.icon} size={18} color="#FF6B35" />
                            {item.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {topLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.35, ease: easeNav }}
              >
                <Link href={link.href} className={`mobile-nav-link${isActive(link.href) ? " active" : ""}`} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.4, ease: easeNav }}
              className="mobile-divider"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35, ease: easeNav }}
              className="mobile-cta-row"
            >
              <Link href="/login" className="header-login"
                style={{ flex: 1, justifyContent: "center", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 12 }}
                onClick={() => setMobileOpen(false)}>Login</Link>
              <Link href="/book-demo" className="header-book-btn"
                style={{ flex: 1, justifyContent: "center", borderRadius: 12, animation: "none" }}
                onClick={() => setMobileOpen(false)}>Book Demo</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}