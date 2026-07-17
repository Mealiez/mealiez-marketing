"use client";

import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      ["Meal Booking", "/product/meal-booking"],
      ["Attendance", "/product/attendance"],
      ["Billing", "/product/billing"],
      ["Inventory", "/product/inventory"],
      ["Analytics", "/product/analytics"],
      ["Mobile App", "/product/mobile-app"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Hostel Mess", "/solutions/hostel-mess"],
      ["College Canteens", "/solutions/college-canteen"],
      ["Corporate Cafeteria", "/solutions/corporate-cafeteria"],
      ["Industrial Canteen", "/solutions/industrial-canteen"],
      ["Cloud Kitchen", "/solutions/cloud-kitchen"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/resources"],
      ["Guides", "/resources"],
      ["Reports", "/resources"],
      ["Case Studies", "/customers"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/company"],
      ["Contact", "/company"],
      ["Book Demo", "/book-demo"],
    ],
  },
  {
    title: "LEGAL",
    links: [
      ["Privacy Policy", "/security"],
      ["Terms", "/security"],
      ["Security", "/security"],
    ],
  },
  {
    title: "SOCIALS",
    links: [
      ["LinkedIn", "#"],
      ["Instagram", "#"],
      ["YouTube", "#"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer style={{
      background: "#fff",
      borderTop: "1px solid rgba(255,107,53,0.1)",
      fontFamily: "'Inter', system-ui, sans-serif"
    }}>
      <style>{`
        .footer-link { font-size: 13px; color: #666; text-decoration: none; transition: color 0.15s; display: inline-block; }
        .footer-link:hover { color: #FF6B35; }
        .footer-social-btn { color: #555; display: inline-flex; padding: 6px; border-radius: 8px; transition: background 0.15s, color 0.15s; text-decoration: none; }
        .footer-social-btn:hover { background: #fff3ee; color: #FF6B35; }
      `}</style>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "52px 32px 44px",
        display: "flex", gap: 48, alignItems: "flex-start"
      }}>
        {/* ── Left: Logo + copyright + social icons ── */}
        <div style={{ flex: "0 0 180px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{
              width: 30, height: 30, background: "#FF6B35",
              borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#FF6B35", letterSpacing: "-0.02em" }}>Mealiez</span>
          </div>

          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6, marginBottom: 20, maxWidth: 160 }}>
            © 2024 Mealiez Culinary OS. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <a href="#" className="footer-social-btn" aria-label="Share">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </a>
            <a href="#" className="footer-social-btn" aria-label="Website">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
            <a href="#" className="footer-social-btn" aria-label="Copy">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right: nav columns ── */}
        <div style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 12
        }}>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontSize: 13, fontWeight: 700, color: "#1a1a1a",
                marginBottom: 14
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map(([label, href]) => (
                  <li key={label} style={{ marginBottom: 10 }}>
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
