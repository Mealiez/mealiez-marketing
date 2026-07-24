"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { navMenus } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";

const topLinks = [
  { href: "/why-mealiez", label: "Why Mealiez" },
  { href: "/pricing",     label: "Pricing" },
  { href: "/customers",   label: "Customers" },
  { href: "/resources",   label: "Resources" },
  { href: "/company",     label: "Company" },
];

const easeNav    = [0.22, 1, 0.36, 1]    as [number, number, number, number];
const easeSpring = [0.34, 1.56, 0.64, 1] as [number, number, number, number];

/* ─── Inline CSS (scoped to header) ──────────────────────────────── */
const NAV_CSS = `
  /* ── @property registrations for animatable CSS vars ── */
  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  @property --shimmer-pos {
    syntax: '<percentage>';
    initial-value: -50%;
    inherits: false;
  }

  /* ── Keyframes ── */
  @keyframes conicRotate   { to { --angle: 360deg; } }
  @keyframes shimmerSweep  { 0% { --shimmer-pos: -60%; } 100% { --shimmer-pos: 160%; } }
  @keyframes auroraDrift   { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  @keyframes ctaBreathing  {
    0%,100% { box-shadow: 0 4px 22px rgba(255,107,53,0.28), 0 0 0 0 rgba(255,107,53,0.12); }
    50%     { box-shadow: 0 8px 36px rgba(255,107,53,0.42), 0 0 0 5px rgba(255,107,53,0.06); }
  }
  @keyframes ctaShine      { 0% { transform: translateX(-120%) rotate(28deg); } 100% { transform: translateX(260%) rotate(28deg); } }
  @keyframes ambientFloat  { 0%,100% { opacity:.28; transform:scale(1) translate(-50%,-50%); } 50% { opacity:.52; transform:scale(1.08) translate(-50%,-50%); } }
  @keyframes ambientFloat2 { 0%,100% { opacity:.14; transform:scale(1) translate(-50%,-50%); } 50% { opacity:.28; transform:scale(1.12) translate(-50%,-50%); } }
  @keyframes borderBloom   { 0%,100% { opacity:.55; filter:blur(4px); } 50% { opacity:.85; filter:blur(7px); } }
  @keyframes rippleAnim    { to { transform:scale(5); opacity:0; } }
  @keyframes logoGlimmer   { 0%,100% { box-shadow:0 3px 12px rgba(255,107,53,0.32); } 50% { box-shadow:0 6px 24px rgba(255,107,53,0.55), 0 0 0 4px rgba(255,107,53,0.08); } }
  @keyframes drawerSlide   { from { opacity:0; transform:translateY(-8px) scale(0.99); } to { opacity:1; transform:translateY(0) scale(1); } }
  @keyframes indicatorPop  { 0% { opacity:0; transform:scaleX(0.5); } 100% { opacity:1; transform:scaleX(1); } }

  /* ─────────────────────────────────────────────────────────────────
     BORDER GLOW WRAPPER
  ───────────────────────────────────────────────────────────────── */
  .hdr-border-glow {
    animation: conicRotate 10s linear infinite;
    will-change: --angle;
  }
  .hdr-border-bloom {
    animation: borderBloom 4s ease-in-out infinite;
  }

  /* ─────────────────────────────────────────────────────────────────
     NAV LINKS
  ───────────────────────────────────────────────────────────────── */
  .nav-link {
    font-size: 12px;
    font-weight: 500;
    color: rgba(0,0,0,0.6);
    font-family: 'Barlow Condensed', system-ui, sans-serif;
    text-decoration: none;
    padding: 6px 13px;
    position: relative;
    white-space: nowrap;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border-radius: 9999px;
    transition:
      color 0.3s cubic-bezier(0.22,1,0.36,1),
      letter-spacing 0.35s cubic-bezier(0.22,1,0.36,1),
      transform 0.3s cubic-bezier(0.22,1,0.36,1);
    display: inline-flex;
    align-items: center;
    gap: 4px;
    z-index: 1;
    cursor: pointer;
  }

  /* Hover pill background */
  .nav-link::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background: linear-gradient(135deg, rgba(255,107,53,0.10) 0%, rgba(255,162,127,0.05) 100%);
    border: 1px solid rgba(255,107,53,0.10);
    opacity: 0;
    transform: scale(0.88);
    transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
    z-index: -1;
  }
  .nav-link:hover {
    color: #FF6B35;
    letter-spacing: 0.08em;
    transform: translateY(-1.5px);
  }
  .nav-link:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  /* Active state */
  .nav-link.active {
    color: #FF6B35;
    font-weight: 600;
    letter-spacing: 0.07em;
  }
  .nav-link.active::before {
    opacity: 1;
    transform: scale(1);
    background: linear-gradient(135deg, rgba(255,107,53,0.13) 0%, rgba(255,162,127,0.07) 100%);
    border-color: rgba(255,107,53,0.18);
    box-shadow: 0 0 18px rgba(255,107,53,0.10), inset 0 1px 0 rgba(255,255,255,0.65);
  }

  /* Gradient underline */
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 0;
    height: 1.5px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, #FF6B35, #FF875C, #FFA27F, transparent);
    transform: translateX(-50%);
    transition: width 0.38s cubic-bezier(0.22,1,0.36,1);
    opacity: 0.8;
  }
  .nav-link:hover::after { width: 55%; }
  .nav-link.active::after { width: 55%; }

  /* ─────────────────────────────────────────────────────────────────
     DROPDOWN
  ───────────────────────────────────────────────────────────────── */
  .nav-group { position: relative; }
  .nav-group .nav-dropdown {
    position: absolute;
    top: calc(100% + 14px);
    left: -22px;
    width: 520px;
    background: linear-gradient(160deg, rgba(255,255,255,0.82) 0%, rgba(255,250,246,0.78) 100%);
    backdrop-filter: blur(48px) saturate(2.0);
    -webkit-backdrop-filter: blur(48px) saturate(2.0);
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,0.90);
    box-shadow:
      0 28px 80px rgba(0,0,0,0.10),
      0 8px 20px rgba(0,0,0,0.04),
      0 0 0 1px rgba(255,107,53,0.04),
      inset 0 1px 0 rgba(255,255,255,1),
      inset 0 -1px 0 rgba(255,107,53,0.04);
    padding: 16px;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transform: translateY(14px) scale(0.95);
    transform-origin: top left;
    transition:
      opacity 0.28s cubic-bezier(0.22,1,0.36,1),
      visibility 0.28s,
      transform 0.28s cubic-bezier(0.22,1,0.36,1);
    pointer-events: none;
  }
  .nav-group:hover .nav-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  /* Dropdown glass reflection */
  .nav-group .nav-dropdown::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 22px;
    background: linear-gradient(180deg, rgba(255,255,255,0.30) 0%, transparent 40%);
    pointer-events: none;
  }

  .dropdown-item {
    font-size: 13px;
    color: #444;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 9px 12px;
    border-radius: 12px;
    transition: background 0.22s ease, color 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
    font-family: 'Barlow', system-ui, sans-serif;
    line-height: 1.4;
    gap: 10px;
    position: relative;
  }
  .dropdown-item .di-icon { flex-shrink: 0; }
  .dropdown-item:hover {
    background: linear-gradient(135deg, rgba(255,107,53,0.09), rgba(255,135,92,0.04));
    color: #FF6B35;
    transform: translateX(4px);
  }
  .dropdown-item.active-item {
    color: #FF6B35;
    background: rgba(255,107,53,0.07);
  }

  /* ─────────────────────────────────────────────────────────────────
     CTA BUTTON
  ───────────────────────────────────────────────────────────────── */
  .header-book-btn {
    background: linear-gradient(135deg, #FF6B35 0%, #FF875C 50%, #FF9A72 100%);
    background-size: 220% 220%;
    color: #fff;
    border-radius: 9999px;
    padding: 8px 20px;
    font-weight: 700;
    font-size: 11.5px;
    font-family: 'Barlow Condensed', system-ui, sans-serif;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition:
      box-shadow 0.35s ease,
      background-position 0.5s ease,
      transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    box-shadow:
      0 4px 18px rgba(255,107,53,0.30),
      0 1px 4px rgba(255,107,53,0.18),
      inset 0 1px 0 rgba(255,255,255,0.22);
    white-space: nowrap;
    will-change: transform;
    position: relative;
    overflow: hidden;
    animation: ctaBreathing 3.5s ease-in-out infinite;
    cursor: pointer;
  }

  /* Aurora outer glow ring */
  .header-book-btn::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 9999px;
    background: linear-gradient(135deg,
      rgba(255,107,53,0.50),
      rgba(255,162,127,0.25),
      rgba(255,200,170,0.15),
      rgba(255,107,53,0.40)
    );
    background-size: 300% 300%;
    animation: auroraDrift 5s ease-in-out infinite;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.35s ease;
    filter: blur(3px);
  }
  .header-book-btn:hover::after { opacity: 1; }

  /* Shine sweep */
  .header-book-btn::before {
    content: '';
    position: absolute;
    top: -60%;
    left: -60%;
    width: 220%;
    height: 220%;
    background: linear-gradient(45deg,
      transparent 25%,
      rgba(255,255,255,0.18) 50%,
      transparent 75%
    );
    animation: ctaShine 4.5s ease-in-out infinite;
    pointer-events: none;
  }
  .header-book-btn:hover {
    background-position: 100% 100%;
    box-shadow:
      0 10px 36px rgba(255,107,53,0.46),
      0 2px 8px rgba(255,107,53,0.22),
      0 0 0 1.5px rgba(255,107,53,0.25),
      inset 0 1px 0 rgba(255,255,255,0.28);
    transform: translateY(-2.5px) scale(1.03);
    animation: none;
  }
  .header-book-btn:active { transform: scale(0.95); }

  /* ─────────────────────────────────────────────────────────────────
     LOGIN LINK
  ───────────────────────────────────────────────────────────────── */
  .header-login {
    font-size: 11.5px;
    font-weight: 500;
    color: rgba(0,0,0,0.50);
    font-family: 'Barlow Condensed', system-ui, sans-serif;
    text-decoration: none;
    padding: 8px 14px;
    border-radius: 9999px;
    transition: color 0.25s, background 0.25s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .header-login:hover {
    color: #FF6B35;
    background: rgba(255,107,53,0.07);
    transform: translateY(-1px);
  }

  /* ─────────────────────────────────────────────────────────────────
     RIPPLE
  ───────────────────────────────────────────────────────────────── */
  .ripple-container {
    position: absolute; inset: 0;
    border-radius: 9999px;
    overflow: hidden;
    pointer-events: none;
  }
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.38);
    transform: scale(0);
    animation: rippleAnim 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
  }

  /* ─────────────────────────────────────────────────────────────────
     HAMBURGER
  ───────────────────────────────────────────────────────────────── */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 10px;
    background: rgba(255,255,255,0.55);
    border: 1px solid rgba(255,255,255,0.80);
    backdrop-filter: blur(12px);
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9);
    transition: background 0.25s, box-shadow 0.25s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
    min-height: unset !important;
    position: relative;
    z-index: 60;
  }
  .hamburger:hover {
    background: rgba(255,255,255,0.75);
    box-shadow: 0 4px 18px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,107,53,0.10), inset 0 1px 0 rgba(255,255,255,1);
    transform: scale(1.04);
  }
  .hamburger .bar {
    width: 19px; height: 1.8px;
    border-radius: 2px;
    background: rgba(30,30,30,0.70);
    transition: all 0.38s cubic-bezier(0.34,1.56,0.64,1);
    transform-origin: center;
  }
  .hamburger.open .bar:nth-child(1) { transform: translateY(6.8px) rotate(45deg); background: #FF6B35; }
  .hamburger.open .bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger.open .bar:nth-child(3) { transform: translateY(-6.8px) rotate(-45deg); background: #FF6B35; }

  /* ─────────────────────────────────────────────────────────────────
     MOBILE DRAWER
  ───────────────────────────────────────────────────────────────── */
  .mobile-drawer {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(255,253,250,0.72);
    backdrop-filter: blur(52px) saturate(1.9);
    -webkit-backdrop-filter: blur(52px) saturate(1.9);
    z-index: 40;
    overflow-y: auto;
    padding: 92px 16px 48px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  /* Drawer glass top reflection */
  .mobile-drawer::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 180px;
    background: linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }

  .mobile-nav-link {
    font-size: 15px; font-weight: 600; color: #1a1a1a;
    text-decoration: none; padding: 13px 16px; border-radius: 14px;
    transition: background 0.22s, color 0.22s, transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
    display: flex; align-items: center; justify-content: space-between;
    font-family: 'Barlow Condensed', system-ui, sans-serif;
    letter-spacing: 0.04em; text-transform: uppercase;
    position: relative;
    z-index: 1;
  }
  .mobile-nav-link:hover  { background: rgba(255,107,53,0.08); color: #FF6B35; transform: translateX(5px); }
  .mobile-nav-link.active {
    color: #FF6B35;
    background: linear-gradient(135deg, rgba(255,107,53,0.10), rgba(255,162,127,0.05));
    border: 1px solid rgba(255,107,53,0.12);
    box-shadow: 0 0 20px rgba(255,107,53,0.08), inset 0 1px 0 rgba(255,255,255,0.7);
  }

  .mobile-section-btn {
    font-size: 15px; font-weight: 600; color: #1a1a1a;
    padding: 13px 16px; border-radius: 14px;
    background: none; border: none; cursor: pointer; width: 100%;
    display: flex; align-items: center; justify-content: space-between;
    transition: background 0.22s, color 0.22s;
    font-family: 'Barlow Condensed', system-ui, sans-serif;
    letter-spacing: 0.04em; text-transform: uppercase;
    min-height: unset !important;
    position: relative; z-index: 1;
  }
  .mobile-section-btn:hover { background: rgba(255,107,53,0.08); color: #FF6B35; }

  .mobile-submenu {
    padding: 4px 0 4px 16px;
    display: flex; flex-direction: column; gap: 2px;
    overflow: hidden;
  }
  .mobile-sub-link {
    font-size: 14px; font-weight: 500; color: #555;
    text-decoration: none; padding: 10px 12px; border-radius: 12px;
    transition: background 0.2s, color 0.2s, transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
    display: flex; align-items: center; gap: 10px;
    font-family: 'Barlow', system-ui, sans-serif;
  }
  .mobile-sub-link:hover { background: rgba(255,107,53,0.07); color: #FF6B35; transform: translateX(5px); }

  .mobile-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,107,53,0.14), rgba(255,162,127,0.10), rgba(255,107,53,0.14), transparent);
    margin: 14px 0;
  }
  .mobile-cta-row { display: flex; gap: 10px; margin-top: 18px; }
  .mobile-cta-row a { flex: 1; justify-content: center; text-align: center; }

  /* ─────────────────────────────────────────────────────────────────
     RESPONSIVE BREAKPOINTS
  ───────────────────────────────────────────────────────────────── */
  @media (max-width: 900px) {
    .desktop-nav  { display: none !important; }
    .desktop-btns { display: none !important; }
    .hamburger    { display: flex !important; }
  }
  @media (min-width: 901px) {
    .mobile-drawer { display: none !important; }
  }

  /* ─────────────────────────────────────────────────────────────────
     REDUCED MOTION
  ───────────────────────────────────────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .header-book-btn,
    .header-book-btn::before,
    .header-book-btn::after,
    .hdr-border-glow,
    .hdr-border-bloom { animation: none !important; }
    .nav-link, .nav-link::before, .nav-link::after { transition: none !important; }
    .hamburger .bar { transition: none !important; }
  }
`;

export function SiteHeader() {
  const path = usePathname();
  const isActive = (href: string) => path === href || path.startsWith(href + "/");

  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [mobileProduct,   setMobileProduct]   = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [scrolled,        setScrolled]        = useState(false);
  const [hidden,          setHidden]          = useState(false);

  const lastScrollY  = useRef(0);
  const ctaRef       = useRef<HTMLAnchorElement>(null);
  const headerRef    = useRef<HTMLDivElement>(null);

  /* Ripple state */
  const [ripples,  setRipples]  = useState<{ x: number; y: number; id: number }[]>([]);
  const rippleId = useRef(0);

  /* Magnetic CTA mouse offset (spring-smoothed) */
  const rawX = useSpring(0, { stiffness: 180, damping: 22 });
  const rawY = useSpring(0, { stiffness: 180, damping: 22 });
  const ctaMagX = useTransform(rawX, v => v * 8);
  const ctaMagY = useTransform(rawY, v => v * 5);

  /* ── Scroll detection ──────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 20);
      setHidden(sy > 220 && sy > lastScrollY.current);
      lastScrollY.current = sy;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile on route change ─────────────────────────────── */
  useEffect(() => {
    setMobileOpen(false);
    setMobileProduct(false);
    setMobileSolutions(false);
  }, [path]);

  /* ── CTA magnetic movement ─────────────────────────────────────── */
  const handleCtaMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2));
    rawY.set((e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2));
  }, [rawX, rawY]);

  const handleCtaMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  /* ── CTA ripple ────────────────────────────────────────────────── */
  const handleCtaClick = useCallback((e: React.MouseEvent) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const id = rippleId.current++;
    setRipples(prev => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);
  }, []);

  /* ── Derived scroll values ─────────────────────────────────────── */
  const navPillH    = scrolled ? 46 : 56;
  const topPad      = scrolled ? "10px" : "20px";
  const glassAlpha  = scrolled ? 0.88 : 0.62;
  const blurAmount  = scrolled ? "blur(44px) saturate(2.0)" : "blur(28px) saturate(1.7)";
  const shadowDepth = scrolled
    ? "0 20px 70px rgba(10,10,10,0.11), 0 6px 18px rgba(10,10,10,0.06), 0 0 0 1px rgba(255,107,53,0.06), 0 0 80px rgba(255,107,53,0.04)"
    : "0 8px 36px rgba(10,10,10,0.06), 0 2px 10px rgba(10,10,10,0.03), 0 0 0 1px rgba(255,255,255,0.60), 0 0 40px rgba(255,107,53,0.025)";

  return (
    <>
      <style>{NAV_CSS}</style>

      {/* ════════════════════════════════════════════════════════════
          FLOATING HEADER SHELL (positions the pill above the page)
      ════════════════════════════════════════════════════════════ */}
      <motion.header
        initial={{ opacity: 0, y: -48 }}
        animate={{
          opacity: 1,
          y: hidden ? -110 : 0,
          transition: {
            opacity: { duration: 0.7, ease: easeNav },
            y:       { duration: 0.45, ease: easeNav },
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
          padding: `${topPad} 16px 0`,
          pointerEvents: "none",
          transition: "padding 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* ── AMBIENT BACKGROUND LIGHTING (warm tone) ──────────── */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "75%", height: "140%",
          background: "radial-gradient(ellipse 70% 80% at 50% 40%, rgba(255,107,53,0.10) 0%, rgba(255,162,127,0.05) 35%, transparent 65%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          animation: "ambientFloat 7s ease-in-out infinite",
          willChange: "transform, opacity",
        }}/>

        {/* ── AMBIENT BACKGROUND LIGHTING (cool accent) ─────────── */}
        <div style={{
          position: "absolute",
          top: "40%", left: "65%",
          transform: "translate(-50%,-50%)",
          width: "45%", height: "110%",
          background: "radial-gradient(ellipse at center, rgba(120,160,255,0.05) 0%, transparent 55%)",
          filter: "blur(55px)",
          pointerEvents: "none",
          animation: "ambientFloat2 9s ease-in-out infinite 1.5s",
          willChange: "transform, opacity",
        }}/>

        {/* ══════════════════════════════════════════════════════════
            ANIMATED GLOWING BORDER LAYER
            Two divs: outer conic gradient mask → inner bloom blur
        ══════════════════════════════════════════════════════════ */}
        <div
          className="hdr-border-glow"
          style={{
            position: "absolute",
            top: topPad,
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(calc(100% - 32px), 1280px)",
            height: navPillH,
            borderRadius: 9999,
            padding: "1.5px",
            background: `conic-gradient(
              from var(--angle, 0deg),
              rgba(255,107,53,0.18),
              rgba(255,162,127,0.10),
              rgba(255,107,53,0.06),
              rgba(180,140,255,0.10),
              rgba(255,107,53,0.08),
              rgba(255,162,127,0.12),
              rgba(255,220,180,0.08),
              rgba(255,107,53,0.18)
            )`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            opacity: scrolled ? 0.9 : 0.65,
            transition: "opacity 0.5s ease, height 0.45s cubic-bezier(0.22,1,0.36,1), top 0.45s cubic-bezier(0.22,1,0.36,1)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          {/* Bloom glow (blurred duplicate for soft outer halo) */}
          <div
            className="hdr-border-bloom"
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: 9999,
              background: `conic-gradient(
                from var(--angle, 0deg),
                rgba(255,107,53,0.22),
                rgba(255,162,127,0.12),
                rgba(255,107,53,0.06),
                rgba(180,140,255,0.12),
                rgba(255,107,53,0.10),
                rgba(255,162,127,0.16),
                rgba(255,107,53,0.22)
              )`,
              filter: "blur(6px)",
              opacity: 0.65,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ══════════════════════════════════════════════════════════
            MAIN GLASS PILL CARD
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          ref={headerRef}
          style={{
            position: "relative",
            pointerEvents: "auto",
            width: "min(100%, 1280px)",
            height: navPillH,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px 0 18px",
            borderRadius: 9999,
            background: `linear-gradient(145deg,
              rgba(255,255,255,${glassAlpha}) 0%,
              rgba(255,252,248,${glassAlpha - 0.04}) 50%,
              rgba(255,248,242,${glassAlpha - 0.06}) 100%
            )`,
            backdropFilter: blurAmount,
            WebkitBackdropFilter: blurAmount,
            border: "1px solid rgba(255,255,255,0.85)",
            boxShadow: shadowDepth,
            transition: "height 0.45s cubic-bezier(0.22,1,0.36,1), background 0.5s ease, backdrop-filter 0.5s ease, box-shadow 0.5s ease",
            zIndex: 2,
          }}
        >
          {/* ── Glass top reflection ──────────────────────────── */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 9999,
            background: "linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.08) 38%, transparent 55%)",
            pointerEvents: "none", zIndex: 0,
          }}/>
          {/* ── Glass bottom edge shimmer ─────────────────────── */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 9999,
            background: "linear-gradient(0deg, rgba(255,255,255,0.18) 0%, transparent 28%)",
            pointerEvents: "none", zIndex: 0,
          }}/>
          {/* ── Subtle inner left light ───────────────────────── */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 9999,
            background: "radial-gradient(ellipse 40% 60% at 15% 50%, rgba(255,255,255,0.22) 0%, transparent 60%)",
            pointerEvents: "none", zIndex: 0,
          }}/>

          {/* ════════════════════════════════════════════════════
              LOGO
          ════════════════════════════════════════════════════ */}
          <Link href="/" style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 9,
            flexShrink: 0,
            zIndex: 1,
          }}>
            <motion.div
              initial={{ scale: 0, rotate: -25, opacity: 0 }}
              animate={{
                scale: 1, rotate: 0, opacity: 1,
                transition: { duration: 0.55, ease: easeSpring, delay: 0.08 },
              }}
              whileHover={{ scale: 1.10, rotate: -5, transition: { duration: 0.3, ease: easeSpring } }}
              style={{
                width: 30, height: 30,
                background: "linear-gradient(135deg, #FF6B35 0%, #FF875C 60%, #FFA27F 100%)",
                borderRadius: 9,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 3px 12px rgba(255,107,53,0.32), 0 0 0 1px rgba(255,107,53,0.12), inset 0 1px 0 rgba(255,255,255,0.30)",
                animation: "logoGlimmer 4s ease-in-out infinite",
                willChange: "box-shadow",
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(255,107,53,0.58), 0 0 0 3px rgba(255,107,53,0.12), 0 0 40px rgba(255,107,53,0.18), inset 0 1px 0 rgba(255,255,255,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "0 3px 12px rgba(255,107,53,0.32), 0 0 0 1px rgba(255,107,53,0.12), inset 0 1px 0 rgba(255,255,255,0.30)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z"/>
              </svg>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.45, delay: 0.18 } }}
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: "#FF6B35",
                letterSpacing: "-0.01em",
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Mealiez
            </motion.span>
          </Link>

          {/* ════════════════════════════════════════════════════
              DESKTOP NAV LINKS
          ════════════════════════════════════════════════════ */}
          <nav className="desktop-nav" style={{
            display: "flex", alignItems: "center", gap: 1,
            flex: 1, justifyContent: "center", zIndex: 1,
          }}>
            {/* Product dropdown */}
            <div className="nav-group">
              <Link href="/product" className={`nav-link${isActive("/product") ? " active" : ""}`}>
                Product
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: 0.45 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </Link>
              <div className="nav-dropdown">
                <div style={{
                  background: "linear-gradient(135deg, rgba(255,107,53,0.07), rgba(255,135,92,0.03))",
                  borderRadius: 10, padding: "8px 12px",
                  fontSize: 11, color: "#999", marginBottom: 10,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  border: "1px solid rgba(255,107,53,0.07)",
                  lineHeight: 1.5,
                }}>
                  Automated modules for booking, attendance, billing, inventory and growth.
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                  {navMenus.product.map((item) => (
                    <Link key={item.slug} href={`/product/${item.slug}`}
                      className={`dropdown-item${path === `/product/${item.slug}` ? " active-item" : ""}`}>
                      <span className="di-icon"><Icon name={item.icon} size={16} color="#FF6B35" /></span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions dropdown */}
            <div className="nav-group">
              <Link href="/solutions" className={`nav-link${isActive("/solutions") ? " active" : ""}`}>
                Solutions
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: 0.45 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </Link>
              <div className="nav-dropdown">
                <div style={{
                  background: "linear-gradient(135deg, rgba(255,107,53,0.07), rgba(255,135,92,0.03))",
                  borderRadius: 10, padding: "8px 12px",
                  fontSize: 11, color: "#999", marginBottom: 10,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  border: "1px solid rgba(255,107,53,0.07)",
                  lineHeight: 1.5,
                }}>
                  Industry-specific workflows for operational scale and control.
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                  {navMenus.solutions.map((item) => (
                    <Link key={item.slug} href={`/solutions/${item.slug}`}
                      className={`dropdown-item${path === `/solutions/${item.slug}` ? " active-item" : ""}`}>
                      <span className="di-icon"><Icon name={item.icon} size={16} color="#FF6B35" /></span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Top-level links */}
            {topLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`nav-link${isActive(link.href) ? " active" : ""}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ════════════════════════════════════════════════════
              DESKTOP RIGHT BUTTONS
          ════════════════════════════════════════════════════ */}
          <div className="desktop-btns" style={{
            display: "flex", alignItems: "center", gap: 3, flexShrink: 0, zIndex: 1,
          }}>
            <Link href="/login" className="header-login">Login</Link>

            {/* ── Magnetic CTA wrapper ── */}
            <motion.div style={{ x: ctaMagX, y: ctaMagY, display: "inline-flex" }}>
              <Link
                ref={ctaRef}
                href="/book-demo"
                className="header-book-btn"
                style={{ display: "inline-flex" }}
                onMouseMove={handleCtaMouseMove}
                onMouseLeave={handleCtaMouseLeave}
                onClick={handleCtaClick}
              >
                Book Demo
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                <div className="ripple-container">
                  {ripples.map(r => (
                    <span
                      key={r.id}
                      className="ripple"
                      style={{ left: r.x - 12, top: r.y - 12, width: 24, height: 24 }}
                    />
                  ))}
                </div>
              </Link>
            </motion.div>
          </div>

          {/* ── Hamburger (mobile) ─────────────────────────── */}
          <button
            className={`hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="bar"/>
            <span className="bar"/>
            <span className="bar"/>
          </button>
        </motion.div>
      </motion.header>

      {/* ════════════════════════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="mobile-drawer"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {/* Glowing separator line below sticky navbar zone */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: easeNav }}
              style={{
                position: "absolute",
                top: 80,
                left: "50%",
                transform: "translateX(-50%)",
                width: "calc(100% - 32px)",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.20), rgba(255,162,127,0.14), rgba(255,107,53,0.20), transparent)",
                transformOrigin: "center",
              }}
            />

            {/* PRODUCT accordion */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04, duration: 0.38, ease: easeNav }}
            >
              <button className="mobile-section-btn" onClick={() => setMobileProduct(!mobileProduct)}>
                Product
                <motion.svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  animate={{ rotate: mobileProduct ? 180 : 0 }}
                  transition={{ duration: 0.32, ease: easeSpring }}
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </motion.svg>
              </button>
              <AnimatePresence>
                {mobileProduct && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: easeNav }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="mobile-submenu">
                      {navMenus.product.map((item, i) => (
                        <motion.div
                          key={item.slug}
                          initial={{ opacity: 0, x: -14 }}
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

            {/* SOLUTIONS accordion */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.09, duration: 0.38, ease: easeNav }}
            >
              <button className="mobile-section-btn" onClick={() => setMobileSolutions(!mobileSolutions)}>
                Solutions
                <motion.svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  animate={{ rotate: mobileSolutions ? 180 : 0 }}
                  transition={{ duration: 0.32, ease: easeSpring }}
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </motion.svg>
              </button>
              <AnimatePresence>
                {mobileSolutions && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: easeNav }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="mobile-submenu">
                      {navMenus.solutions.map((item, i) => (
                        <motion.div
                          key={item.slug}
                          initial={{ opacity: 0, x: -14 }}
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

            {/* Top-level links */}
            {topLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 + i * 0.05, duration: 0.38, ease: easeNav }}
              >
                <Link
                  href={link.href}
                  className={`mobile-nav-link${isActive(link.href) ? " active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.38, duration: 0.42, ease: easeNav }}
              className="mobile-divider"
              style={{ transformOrigin: "center" }}
            />

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.38, ease: easeNav }}
              className="mobile-cta-row"
            >
              <Link
                href="/login"
                className="header-login"
                style={{
                  flex: 1,
                  justifyContent: "center",
                  border: "1.5px solid rgba(0,0,0,0.07)",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.55)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/book-demo"
                className="header-book-btn"
                style={{ flex: 1, justifyContent: "center", borderRadius: 14, animation: "none" }}
                onClick={() => setMobileOpen(false)}
              >
                Book Demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}