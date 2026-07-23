"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navMenus } from "@/lib/site-data";

const topLinks = [
  { href: "/why-mealiez", label: "Why Mealiez" },
  { href: "/pricing",     label: "Pricing" },
  { href: "/customers",   label: "Customers" },
  { href: "/resources",   label: "Resources" },
  { href: "/company",     label: "Company" },
];

/* ─── Magnetic effect hook ─── */
function useMagnetic(ref: React.RefObject<HTMLElement | null>, strength = 0.2) {
  const handleMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }, [ref, strength]);

  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  }, [ref]);

  return { handleMove, handleLeave };
}

export function SiteHeader() {
  const path = usePathname();
  const isActive = (href: string) => path === href || path.startsWith(href + "/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProduct, setMobileProduct] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const logoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const magneticCta = useMagnetic(ctaRef, 0.15);

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

  // Magnetic listeners for CTA
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    el.addEventListener("mousemove", magneticCta.handleMove);
    el.addEventListener("mouseleave", magneticCta.handleLeave);
    return () => {
      el.removeEventListener("mousemove", magneticCta.handleMove);
      el.removeEventListener("mouseleave", magneticCta.handleLeave);
    };
  }, [magneticCta]);

  return (
    <>
      <style>{`
        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: rgba(0,0,0,0.75);
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          text-decoration: none;
          padding: 6px 2px;
          position: relative;
          white-space: nowrap;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: color 0.25s ease, letter-spacing 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, #FF6B35, #FF875C, #FFA27F);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover { color: #FF6B35; letter-spacing: 0.06em; }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active { color: #FF6B35; font-weight: 600; letter-spacing: 0.06em; }
        .nav-link.active::after { transform: scaleX(1); }

        .nav-group { position: relative; }
        .nav-group .nav-dropdown {
          position: absolute; top: calc(100% + 16px); left: -20px;
          width: 520px;
          background: rgba(255,252,249,0.92);
          backdrop-filter: blur(32px) saturate(1.8);
          -webkit-backdrop-filter: blur(32px) saturate(1.8);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 24px 64px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1);
          padding: 18px; z-index: 100;
          opacity: 0; visibility: hidden;
          transform: translateY(16px) scale(0.97);
          transform-origin: top left;
          transition: opacity 0.28s cubic-bezier(0.22,1,0.36,1),
                      visibility 0.28s,
                      transform 0.28s cubic-bezier(0.22,1,0.36,1);
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
          padding: 10px 14px; border-radius: 12px;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
          font-family: 'Barlow', system-ui, sans-serif;
          line-height: 1.4; gap: 12px;
        }
        .dropdown-item .di-icon { font-size: 17px; flex-shrink: 0; }
        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,135,92,0.04));
          color: #FF6B35;
          transform: translateX(4px);
        }
        .dropdown-item.active-item { color: #FF6B35; background: rgba(255,107,53,0.06); }

        .header-book-btn {
          background: linear-gradient(135deg, #FF6B35, #FF875C, #FFA27F);
          background-size: 200% 200%;
          color: #fff; border-radius: 10px; padding: 10px 22px;
          font-weight: 600; font-size: 13px;
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          text-decoration: none; display: inline-flex; align-items: center;
          gap: 7px; letter-spacing: 0.04em; text-transform: uppercase;
          transition: box-shadow 0.3s ease, background-position 0.4s ease;
          box-shadow: 0 4px 20px rgba(255,107,53,0.30), inset 0 1px 0 rgba(255,255,255,0.25);
          white-space: nowrap;
          will-change: transform;
          position: relative;
          overflow: hidden;
        }
        .header-book-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .header-book-btn:hover::before { transform: translateX(100%); }
        .header-book-btn:hover {
          background-position: 100% 0;
          box-shadow: 0 8px 28px rgba(255,107,53,0.45), inset 0 1px 0 rgba(255,255,255,0.25);
        }
        .header-book-btn:active { transform: scale(0.97); }

        .header-login {
          font-size: 13px; font-weight: 500; color: rgba(0,0,0,0.6);
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          text-decoration: none; padding: 8px 16px; border-radius: 10px;
          transition: color 0.2s, background 0.2s; white-space: nowrap;
          display: inline-flex; align-items: center;
          letter-spacing: 0.04em; text-transform: uppercase;
        }
        .header-login:hover { color: #FF6B35; background: rgba(255,107,53,0.07); }

        .hamburger {
          display: none; flex-direction: column; justify-content: center;
          gap: 5px; padding: 8px; background: none; border: none;
          cursor: pointer; border-radius: 10px;
          transition: background 0.2s;
          min-height: unset !important;
        }
        .hamburger:hover { background: rgba(255,107,53,0.08); }
        .hamburger .bar {
          width: 22px; height: 2px; border-radius: 2px;
          background: #333;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }
        .hamburger.open .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); background: #FF6B35; }
        .hamburger.open .bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: #FF6B35; }

        .mobile-drawer {
          display: none;
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255,252,249,0.96);
          backdrop-filter: blur(40px) saturate(1.8);
          -webkit-backdrop-filter: blur(40px) saturate(1.8);
          z-index: 40; overflow-y: auto;
          padding: 80px 24px 48px;
          flex-direction: column; gap: 2px;
        }
        .mobile-drawer.open { display: flex; }

        .mobile-nav-link {
          font-size: 16px; font-weight: 600; color: #1a1a1a;
          text-decoration: none; padding: 14px 18px; border-radius: 14px;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          display: flex; align-items: center; justify-content: space-between;
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          letter-spacing: 0.03em; text-transform: uppercase;
        }
        .mobile-nav-link:hover  { background: rgba(255,107,53,0.07); color: #FF6B35; transform: translateX(4px); }
        .mobile-nav-link.active { color: #FF6B35; background: rgba(255,107,53,0.06); }

        .mobile-section-btn {
          font-size: 16px; font-weight: 600; color: #1a1a1a;
          padding: 14px 18px; border-radius: 14px;
          background: none; border: none; cursor: pointer; width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.2s, color 0.2s;
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          letter-spacing: 0.03em; text-transform: uppercase;
          min-height: unset !important;
        }
        .mobile-section-btn:hover { background: rgba(255,107,53,0.07); color: #FF6B35; }

        .mobile-submenu {
          padding: 4px 0 4px 18px;
          display: flex; flex-direction: column; gap: 2px;
          overflow: hidden;
        }
        .mobile-sub-link {
          font-size: 14px; font-weight: 500; color: #555;
          text-decoration: none; padding: 10px 14px; border-radius: 12px;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          display: flex; align-items: center; gap: 12px;
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
      `}</style>

      {/* Sticky header — full width, centered content */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: hidden ? -80 : 0,
          transition: {
            opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          height: 64,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: scrolled
            ? "rgba(255,252,249,0.85)"
            : "rgba(255,252,249,0.60)",
          backdropFilter: scrolled
            ? "blur(36px) saturate(1.9)"
            : "blur(24px) saturate(1.6)",
          WebkitBackdropFilter: scrolled
            ? "blur(36px) saturate(1.9)"
            : "blur(24px) saturate(1.6)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.85)"
            : "1px solid rgba(255,255,255,0.5)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0,0,0,0.06)"
            : "none",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease, border-bottom 0.4s ease",
        }}
      >
        <div style={{
          width: "100%",
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 56,
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <motion.div
              ref={logoRef}
              initial={{ scale: 0, rotate: -20 }}
              animate={{
                scale: 1,
                rotate: 0,
                transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 },
              }}
              whileHover={{ scale: 1.08, rotate: -5 }}
              style={{
                width: 34, height: 34,
                background: "linear-gradient(135deg, #FF6B35, #FF875C)",
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(255,107,53,0.35)",
                transition: "box-shadow 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(255,107,53,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,107,53,0.35)")}
            >
              <div style={{
                position: "absolute", inset: -4, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,107,53,0.2), transparent 70%)",
                opacity: 0.6, pointerEvents: "none",
              }} />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z"/>
              </svg>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }}
              style={{
                fontSize: 20, fontWeight: 800, color: "#FF6B35",
                letterSpacing: "-0.02em",
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Mealiez
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28, flex: 1, justifyContent: "center" }}>
            <div className="nav-group">
              <Link href="/product" className={`nav-link${isActive("/product") ? " active" : ""}`}>Product</Link>
              <div className="nav-dropdown">
                <div style={{
                  background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(255,135,92,0.03))",
                  borderRadius: 12, padding: "10px 14px",
                  fontSize: 12, color: "#888", marginBottom: 12,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  border: "1px solid rgba(255,107,53,0.06)",
                }}>
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
                <div style={{
                  background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(255,135,92,0.03))",
                  borderRadius: 12, padding: "10px 14px",
                  fontSize: 12, color: "#888", marginBottom: 12,
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  border: "1px solid rgba(255,107,53,0.06)",
                }}>
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
          <div className="desktop-btns" style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            <Link href="/login" className="header-login">Login</Link>
            <Link ref={ctaRef} href="/book-demo" className="header-book-btn" style={{ display: "inline-flex" }}>
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
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-drawer open"
            role="navigation"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed", inset: 0, zIndex: -1,
                background: "rgba(0,0,0,0.04)",
                backdropFilter: "blur(4px)",
              }}
            />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.35 }}>
              <button className="mobile-section-btn" onClick={() => setMobileProduct(!mobileProduct)}>
                Product
                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  animate={{ rotate: mobileProduct ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }} style={{ flexShrink: 0 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </motion.svg>
              </button>
              <AnimatePresence>
                {mobileProduct && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                    <div className="mobile-submenu">
                      {navMenus.product.map((item, i) => (
                        <motion.div key={item.slug} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04, duration: 0.3 }}>
                          <Link href={`/product/${item.slug}`} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                            <span style={{ fontSize: 18 }}>{item.icon}</span>{item.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.35 }}>
              <button className="mobile-section-btn" onClick={() => setMobileSolutions(!mobileSolutions)}>
                Solutions
                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  animate={{ rotate: mobileSolutions ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }} style={{ flexShrink: 0 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </motion.svg>
              </button>
              <AnimatePresence>
                {mobileSolutions && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                    <div className="mobile-submenu">
                      {navMenus.solutions.map((item, i) => (
                        <motion.div key={item.slug} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04, duration: 0.3 }}>
                          <Link href={`/solutions/${item.slug}`} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                            <span style={{ fontSize: 18 }}>{item.icon}</span>{item.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {topLinks.map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05, duration: 0.35 }}>
                <Link href={link.href} className={`mobile-nav-link${isActive(link.href) ? " active" : ""}`} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.35, duration: 0.4 }} className="mobile-divider" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.35 }} className="mobile-cta-row">
              <Link href="/login" className="header-login"
                style={{ flex: 1, justifyContent: "center", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 12 }}
                onClick={() => setMobileOpen(false)}>Login</Link>
              <Link href="/book-demo" className="header-book-btn"
                style={{ flex: 1, justifyContent: "center", borderRadius: 12 }}
                onClick={() => setMobileOpen(false)}>Book Demo</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}