"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navMenus } from "@/lib/site-data";

const topLinks = [
  { href: "/why-mealiez", label: "Why Mealiez" },
  { href: "/pricing",     label: "Pricing" },
  { href: "/customers",   label: "Customers" },
  { href: "/resources",   label: "Resources" },
  { href: "/company",     label: "Company" },
];

export function SiteHeader() {
  const path = usePathname();
  const isActive = (href: string) => path === href || path.startsWith(href + "/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProduct, setMobileProduct] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to enhance header styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileProduct(false);
    setMobileSolutions(false);
  }, [path]);

  return (
    <>
      <style>{`
        /* ── Nav links — Barlow font with animated underline ── */
        .nav-link {
          font-size: 13.5px;
          font-weight: 500;
          color: #333;
          font-family: 'Barlow', system-ui, sans-serif;
          text-decoration: none;
          padding: 8px 0;
          transition: color 0.18s ease;
          position: relative;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1.5px;
          background: #FF6B35;
          border-radius: 1px;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover { color: #FF6B35; }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active { color: #FF6B35; font-weight: 600; }
        .nav-link.active::after { transform: scaleX(1); }

        /* ── Mega menu ── */
        .nav-group { position: relative; }
        .nav-group .nav-dropdown {
          position: absolute; top: calc(100% + 14px); left: -16px;
          width: 500px;
          background: rgba(255,252,249,0.98);
          backdrop-filter: blur(28px) saturate(1.8);
          -webkit-backdrop-filter: blur(28px) saturate(1.8);
          border-radius: 18px;
          border: 1px solid rgba(255,107,53,0.10);
          box-shadow: 0 20px 56px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.04);
          padding: 16px; z-index: 100;
          opacity: 0; visibility: hidden;
          transform: translateY(14px) scale(0.98);
          transform-origin: top left;
          transition: opacity 0.22s cubic-bezier(0.22,1,0.36,1),
                      visibility 0.22s,
                      transform 0.22s cubic-bezier(0.22,1,0.36,1);
          pointer-events: none;
        }
        .nav-group:hover .nav-dropdown {
          opacity: 1; visibility: visible;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .dropdown-item {
          font-size: 13.5px; color: #444; text-decoration: none;
          display: flex; align-items: center;
          padding: 9px 12px; border-radius: 10px;
          transition: background 0.14s ease, color 0.14s ease;
          font-family: 'Barlow', system-ui, sans-serif;
          line-height: 1.4; gap: 10px;
        }
        .dropdown-item .di-icon { font-size: 16px; flex-shrink: 0; }
        .dropdown-item:hover { background: #fff3ee; color: #FF6B35; }
        .dropdown-item.active-item { color: #FF6B35; background: rgba(255,107,53,0.06); }

        /* ── CTA buttons ── */
        .header-book-btn {
          background: linear-gradient(135deg, #FF6B35, #FF875C);
          color: #fff; border-radius: 9px; padding: 9px 20px;
          font-weight: 600; font-size: 13.5px;
          font-family: 'Barlow', system-ui, sans-serif;
          text-decoration: none; display: inline-flex; align-items: center;
          gap: 6px; letter-spacing: 0.01em;
          transition: opacity 0.15s, box-shadow 0.18s, transform 0.18s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 4px 16px rgba(255,107,53,0.30); white-space: nowrap;
          will-change: transform;
        }
        .header-book-btn:hover {
          opacity: 0.92;
          box-shadow: 0 8px 24px rgba(255,107,53,0.42);
          transform: translateY(-1px);
        }
        .header-login {
          font-size: 13.5px; font-weight: 500; color: #444;
          font-family: 'Barlow', system-ui, sans-serif;
          text-decoration: none; padding: 8px 14px; border-radius: 9px;
          transition: color 0.15s, background 0.15s; white-space: nowrap;
          display: inline-flex; align-items: center;
        }
        .header-login:hover { color: #FF6B35; background: rgba(255,107,53,0.06); }

        /* ── Hamburger ── */
        .hamburger {
          display: none; flex-direction: column; justify-content: center;
          gap: 5px; padding: 8px; background: none; border: none;
          cursor: pointer; border-radius: 9px;
          transition: background 0.15s;
          min-height: unset !important;
        }
        .hamburger:hover { background: rgba(255,107,53,0.07); }
        .hamburger .bar {
          width: 22px; height: 2px; border-radius: 2px;
          background: #333; transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          transform-origin: center;
        }
        .hamburger.open .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); background: #FF6B35; }
        .hamburger.open .bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: #FF6B35; }

        /* ── Mobile drawer ── */
        .mobile-drawer {
          display: none;
          position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
          background: rgba(255,252,249,0.97);
          backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px);
          z-index: 40; overflow-y: auto;
          padding: 20px 20px 48px;
          border-top: 1px solid rgba(255,107,53,0.08);
          flex-direction: column; gap: 4px;
          animation: mobileSlideDown 0.25s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes mobileSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-drawer.open { display: flex; }

        .mobile-nav-link {
          font-size: 15px; font-weight: 600; color: #1a1a1a;
          text-decoration: none; padding: 13px 16px; border-radius: 12px;
          transition: background 0.14s, color 0.14s;
          display: flex; align-items: center; justify-content: space-between;
          font-family: 'Barlow', system-ui, sans-serif;
          letter-spacing: 0.01em;
        }
        .mobile-nav-link:hover  { background: #fff3ee; color: #FF6B35; }
        .mobile-nav-link.active { color: #FF6B35; background: rgba(255,107,53,0.06); }

        .mobile-section-btn {
          font-size: 15px; font-weight: 600; color: #1a1a1a;
          padding: 13px 16px; border-radius: 12px;
          background: none; border: none; cursor: pointer; width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.14s, color 0.14s;
          font-family: 'Barlow', system-ui, sans-serif;
          min-height: unset !important;
        }
        .mobile-section-btn:hover { background: #fff3ee; color: #FF6B35; }

        .mobile-submenu {
          padding: 4px 0 4px 16px;
          display: flex; flex-direction: column; gap: 2px;
          overflow: hidden;
        }
        .mobile-sub-link {
          font-size: 13.5px; font-weight: 500; color: #555;
          text-decoration: none; padding: 9px 12px; border-radius: 10px;
          transition: background 0.14s, color 0.14s;
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow', system-ui, sans-serif;
        }
        .mobile-sub-link:hover { background: #fff3ee; color: #FF6B35; }

        .mobile-divider { height: 1px; background: rgba(0,0,0,0.06); margin: 8px 0; border-radius: 1px; }
        .mobile-cta-row { display: flex; gap: 10px; margin-top: 12px; }
        .mobile-cta-row a { flex: 1; justify-content: center; text-align: center; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .desktop-nav  { display: none !important; }
          .desktop-btns { display: none !important; }
          .hamburger    { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-drawer { display: none !important; }
        }
      `}</style>

      <header
        style={{
          position: "sticky", top: 0, zIndex: 50,
          background: scrolled ? "rgba(255,250,246,0.96)" : "rgba(255,252,249,0.90)",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          borderBottom: scrolled ? "1px solid rgba(255,107,53,0.10)" : "1px solid rgba(255,107,53,0.06)",
          boxShadow: scrolled ? "0 2px 28px rgba(0,0,0,0.06)" : "none",
          width: "100%",
          transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div style={{
          maxWidth: 1240, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 28px", height: 64,
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 9, flexShrink: 0 }}>
            <div style={{
              width: 33, height: 33,
              background: "linear-gradient(135deg, #FF6B35, #FF875C)",
              borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 14px rgba(255,107,53,0.32)",
              transition: "transform 0.2s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s",
            }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z"/>
              </svg>
            </div>
            <span style={{
              fontSize: 20, fontWeight: 800, color: "#FF6B35",
              letterSpacing: "-0.02em",
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              textTransform: "uppercase",
            }}>Mealiez</span>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 24, flex: 1, justifyContent: "center" }}>
            <div className="nav-group">
              <Link href="/product" className={`nav-link${isActive("/product") ? " active" : ""}`}>Product</Link>
              <div className="nav-dropdown">
                <div style={{ background: "linear-gradient(135deg,#fff3ee,#ffe8d6)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#666", marginBottom: 12, fontFamily: "'Barlow', system-ui, sans-serif" }}>
                  Automation modules for bookings, attendance, billing, inventory and growth.
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                  {navMenus.product.map((item) => (
                    <Link key={item.slug} href={`/product/${item.slug}`}
                      className={`dropdown-item${path === `/product/${item.slug}` ? " active-item" : ""}`}>
                      <span className="di-icon">{item.icon}</span>{item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="nav-group">
              <Link href="/solutions" className={`nav-link${isActive("/solutions") ? " active" : ""}`}>Solutions</Link>
              <div className="nav-dropdown">
                <div style={{ background: "linear-gradient(135deg,#fff3ee,#ffe8d6)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#666", marginBottom: 12, fontFamily: "'Barlow', system-ui, sans-serif" }}>
                  Industry-specific workflows designed for operational scale and control.
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                  {navMenus.solutions.map((item) => (
                    <Link key={item.slug} href={`/solutions/${item.slug}`}
                      className={`dropdown-item${path === `/solutions/${item.slug}` ? " active-item" : ""}`}>
                      <span className="di-icon">{item.icon}</span>{item.title}
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

          {/* Desktop right buttons */}
          <div className="desktop-btns" style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <Link href="/login" className="header-login">Login</Link>
            <Link href="/book-demo" className="header-book-btn">
              Book Demo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

        </div>

        {/* Mobile drawer */}
        <div className={`mobile-drawer${mobileOpen ? " open" : ""}`} role="navigation">

          {/* Product accordion */}
          <button className="mobile-section-btn" onClick={() => setMobileProduct(!mobileProduct)}>
            Product
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              style={{ transform: mobileProduct ? "rotate(180deg)" : "none", transition: "transform .22s cubic-bezier(0.22,1,0.36,1)", flexShrink: 0 }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {mobileProduct && (
            <div className="mobile-submenu">
              {navMenus.product.map((item) => (
                <Link key={item.slug} href={`/product/${item.slug}`}
                  className="mobile-sub-link"
                  onClick={() => setMobileOpen(false)}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>{item.title}
                </Link>
              ))}
            </div>
          )}

          {/* Solutions accordion */}
          <button className="mobile-section-btn" onClick={() => setMobileSolutions(!mobileSolutions)}>
            Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              style={{ transform: mobileSolutions ? "rotate(180deg)" : "none", transition: "transform .22s cubic-bezier(0.22,1,0.36,1)", flexShrink: 0 }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {mobileSolutions && (
            <div className="mobile-submenu">
              {navMenus.solutions.map((item) => (
                <Link key={item.slug} href={`/solutions/${item.slug}`}
                  className="mobile-sub-link"
                  onClick={() => setMobileOpen(false)}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>{item.title}
                </Link>
              ))}
            </div>
          )}

          {/* Top links */}
          {topLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`mobile-nav-link${isActive(link.href) ? " active" : ""}`}
              onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}

          <div className="mobile-divider" />

          {/* CTA buttons */}
          <div className="mobile-cta-row">
            <Link href="/login" className="header-login"
              style={{ flex: 1, justifyContent: "center", border: "1.5px solid rgba(0,0,0,0.10)", borderRadius: 10 }}
              onClick={() => setMobileOpen(false)}>
              Login
            </Link>
            <Link href="/book-demo" className="header-book-btn"
              style={{ flex: 1, justifyContent: "center", borderRadius: 10 }}
              onClick={() => setMobileOpen(false)}>
              Book Demo
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}
