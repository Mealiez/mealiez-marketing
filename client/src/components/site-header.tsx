"use client";

import Link from "next/link";
import { navMenus } from "@/lib/site-data";

const topLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/customers", label: "Customers" },
  { href: "/resources", label: "Resources" },
];

export function SiteHeader() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,252,249,0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,107,53,0.08)",
      boxShadow: "0 1px 24px rgba(0,0,0,0.04)"
    }}>
      <style>{`
        .nav-link { font-size: 14px; font-weight: 500; color: #333; text-decoration: none; padding: 8px 0; transition: color 0.15s; }
        .nav-link:hover { color: #FF6B35; }
        .nav-group { position: relative; }
        .nav-group .nav-dropdown {
          position: absolute; top: calc(100% + 8px); left: -16px;
          width: 480px; background: rgba(255,252,249,0.98);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 16px; border: 1px solid rgba(255,107,53,0.1);
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
          padding: 16px; z-index: 100;
          opacity: 0; visibility: hidden;
          transform: translateY(8px);
          transition: all 0.2s ease;
          pointer-events: none;
        }
        .nav-group:hover .nav-dropdown {
          opacity: 1; visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
        .dropdown-item { font-size: 13px; color: #444; text-decoration: none; display: block; padding: 8px 12px; border-radius: 8px; transition: background 0.15s, color 0.15s; }
        .dropdown-item:hover { background: #fff3ee; color: #FF6B35; }
        .header-book-btn {
          background: #FF6B35; color: #fff; border-radius: 8px;
          padding: 9px 20px; font-weight: 600; font-size: 14px;
          text-decoration: none; display: inline-block;
          transition: background 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 14px rgba(255,107,53,0.25);
        }
        .header-book-btn:hover { background: #e55e28; box-shadow: 0 6px 20px rgba(255,107,53,0.35); }
        .header-login { font-size: 14px; font-weight: 500; color: #333; text-decoration: none; padding: 8px 12px; border-radius: 8px; transition: color 0.15s, background 0.15s; }
        .header-login:hover { color: #FF6B35; background: #fff3ee; }
      `}</style>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: 64
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 32, height: 32, background: "linear-gradient(135deg, #FF6B35, #FF875C)",
            borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(255,107,53,0.3)"
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <path d="M12 8v4l3 3"/>
            </svg>
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#FF6B35", letterSpacing: "-0.02em" }}>Mealiez</span>
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div className="nav-group">
            <Link href="/product" className="nav-link">Product</Link>
            <div className="nav-dropdown">
              <div style={{ background: "linear-gradient(135deg, #fff3ee, #ffe8d6)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#555", marginBottom: 12 }}>
                Explore automation modules that power bookings, attendance, billing, and growth intelligence.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                {navMenus.product.map((item) => (
                  <Link key={item.slug} href={`/product/${item.slug}`} className="dropdown-item">{item.title}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="nav-group">
            <Link href="/solutions" className="nav-link">Solutions</Link>
            <div className="nav-dropdown">
              <div style={{ background: "linear-gradient(135deg, #fff3ee, #ffe8d6)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#555", marginBottom: 12 }}>
                Pick your industry journey and see tailored workflows designed for scale and control.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                {navMenus.solutions.map((item) => (
                  <Link key={item.slug} href={`/solutions/${item.slug}`} className="dropdown-item">{item.title}</Link>
                ))}
              </div>
            </div>
          </div>

          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/company" className="header-login">Login</Link>
          <Link href="/book-demo" className="header-book-btn">Book Demo</Link>
        </div>
      </div>
    </header>
  );
}
