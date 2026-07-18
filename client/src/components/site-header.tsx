"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navMenus } from "@/lib/site-data";

const topLinks = [
  { href: "/why-mealiez", label: "Why Mealiez" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customers", label: "Customers" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
];

export function SiteHeader() {
  const path = usePathname();
  const isActive = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,252,249,0.92)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,107,53,0.08)",
      boxShadow: "0 1px 24px rgba(0,0,0,0.04)"
    }}>
      <style>{`
        .nav-link {
          font-size: 13.5px; font-weight: 500; color: #333;
          text-decoration: none; padding: 8px 0;
          transition: color 0.15s; position: relative; white-space: nowrap;
        }
        .nav-link:hover { color: #FF6B35; }
        .nav-link.active { color: #FF6B35; font-weight: 600; }
        .nav-link.active::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; background: #FF6B35; border-radius: 1px;
        }
        .nav-group { position: relative; }
        .nav-group .nav-dropdown {
          position: absolute; top: calc(100% + 10px); left: -16px;
          width: 480px; background: rgba(255,252,249,0.98);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 16px; border: 1px solid rgba(255,107,53,0.1);
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
          padding: 16px; z-index: 100;
          opacity: 0; visibility: hidden;
          transform: translateY(10px);
          transition: all 0.22s cubic-bezier(.22,1,.36,1);
          pointer-events: none;
        }
        .nav-group:hover .nav-dropdown {
          opacity: 1; visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
        .dropdown-item {
          font-size: 13px; color: #444; text-decoration: none;
          display: block; padding: 8px 12px; border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }
        .dropdown-item span.di-icon { font-size: 16px; margin-right: 8px; }
        .dropdown-item:hover { background: #fff3ee; color: #FF6B35; }
        .dropdown-item.active-item { color: #FF6B35; background: rgba(255,107,53,0.05); }
        .header-book-btn {
          background: linear-gradient(135deg, #FF6B35, #FF875C); color: #fff; border-radius: 8px;
          padding: 9px 20px; font-weight: 600; font-size: 13.5px;
          text-decoration: none; display: inline-block;
          transition: opacity 0.15s, box-shadow 0.15s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(255,107,53,0.28);
        }
        .header-book-btn:hover {
          opacity: 0.9;
          box-shadow: 0 6px 22px rgba(255,107,53,0.38);
          transform: translateY(-1px);
        }
        .header-login {
          font-size: 13.5px; font-weight: 500; color: #333;
          text-decoration: none; padding: 8px 12px; border-radius: 8px;
          transition: color 0.15s, background 0.15s;
        }
        .header-login:hover { color: #FF6B35; background: #fff3ee; }
      `}</style>

      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: 64
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <div style={{
            width: 32, height: 32,
            background: "linear-gradient(135deg, #FF6B35, #FF875C)",
            borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(255,107,53,0.3)"
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l19-9-9 19-2-8-8-2z"/>
            </svg>
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#FF6B35", letterSpacing: "-0.02em" }}>Mealiez</span>
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 22, flex: 1, justifyContent: "center" }}>
          {/* Product mega menu */}
          <div className="nav-group">
            <Link href="/product" className={`nav-link${isActive("/product") ? " active" : ""}`}>Product</Link>
            <div className="nav-dropdown">
              <div style={{ background: "linear-gradient(135deg,#fff3ee,#ffe8d6)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#555", marginBottom: 12 }}>
                Automation modules for bookings, attendance, billing, inventory and growth.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                {navMenus.product.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/product/${item.slug}`}
                    className={`dropdown-item${path === `/product/${item.slug}` ? " active-item" : ""}`}
                  >
                    <span className="di-icon">{item.icon}</span>{item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions mega menu */}
          <div className="nav-group">
            <Link href="/solutions" className={`nav-link${isActive("/solutions") ? " active" : ""}`}>Solutions</Link>
            <div className="nav-dropdown">
              <div style={{ background: "linear-gradient(135deg,#fff3ee,#ffe8d6)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#555", marginBottom: 12 }}>
                Industry-specific workflows designed for operational scale and control.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                {navMenus.solutions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    className={`dropdown-item${path === `/solutions/${item.slug}` ? " active-item" : ""}`}
                  >
                    <span className="di-icon">{item.icon}</span>{item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${isActive(link.href) ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <a href="#" className="header-login">Login</a>
          <Link href="/book-demo" className="header-book-btn">Book Demo</Link>
        </div>
      </div>
    </header>
  );
}
