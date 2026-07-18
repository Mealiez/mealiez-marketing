"use client";

import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      ["Meal Booking", "/product/meal-booking"],
      ["Attendance", "/product/attendance"],
      ["Billing & Payments", "/product/billing"],
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
      ["Industrial Canteen", "/solutions/industrial-canteen"],
      ["Corporate Cafeteria", "/solutions/corporate-cafeteria"],
      ["Cloud Kitchen", "/solutions/cloud-kitchen"],
      ["Subscription Mess", "/solutions/subscription-mess-business"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/blog"],
      ["Guides", "/guides"],
      ["Reports", "/reports"],
      ["Case Studies", "/customers"],
      ["ROI Calculator", "/resources/roi-calculator"],
      ["Cost Leakage Calc", "/resources/cost-leakage-calculator"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/company"],
      ["Founder Story", "/company#founder-story"],
      ["Mission & Vision", "/company#mission-vision"],
      ["Why Mealiez", "/why-mealiez"],
      ["Contact", "/company#contact"],
      ["Book Demo", "/book-demo"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/security"],
      ["Terms of Service", "/security"],
      ["Security", "/security"],
      ["Data Infrastructure", "/security"],
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
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
        .footer-link { font-size: 13px; color: #666; text-decoration: none; transition: color 0.15s; display: inline-block; line-height: 1; }
        .footer-link:hover { color: #FF6B35; }
        .footer-social-btn { color: #555; display: inline-flex; padding: 7px; border-radius: 9px; transition: background 0.15s, color 0.15s; text-decoration: none; border: 1px solid rgba(0,0,0,0.07); }
        .footer-social-btn:hover { background: #fff3ee; color: #FF6B35; border-color: rgba(255,107,53,0.2); }
      `}</style>

      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "56px 32px 44px",
        display: "flex", gap: 48, alignItems: "flex-start"
      }}>
        {/* Left: Brand */}
        <div style={{ flex: "0 0 180px" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{
              width: 30, height: 30,
              background: "linear-gradient(135deg, #FF6B35, #FF875C)",
              borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z"/>
              </svg>
            </div>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#FF6B35", letterSpacing: "-0.02em" }}>Mealiez</span>
          </Link>

          <p style={{ fontSize: 12, color: "#999", lineHeight: 1.65, marginBottom: 6, maxWidth: 164 }}>
            The operating system for modern messes and food service businesses.
          </p>
          <p style={{ fontSize: 11, color: "#bbb", lineHeight: 1.6, marginBottom: 20 }}>
            © 2026 Mealiez. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="footer-social-btn" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: nav columns */}
        <div style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 8
        }}>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontSize: 11, fontWeight: 800, color: "#1a1a1a",
                marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em"
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map(([label, href]) => (
                  <li key={label} style={{ marginBottom: 11 }}>
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(0,0,0,0.05)",
        maxWidth: 1200, margin: "0 auto",
        padding: "16px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <p style={{ fontSize: 12, color: "#bbb" }}>Made with ❤️ for mess operators across India.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {[["Privacy", "/security"], ["Terms", "/security"], ["Security", "/security"]].map(([label, href]) => (
            <Link key={label} href={href} className="footer-link" style={{ fontSize: 12 }}>{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
