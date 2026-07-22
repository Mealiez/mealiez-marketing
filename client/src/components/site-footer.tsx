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
      ["Privacy Policy", "/legal/privacy"],
      ["Terms of Service", "/legal/terms"],
      ["Security", "/security"],
      ["Data Infrastructure", "/legal/data-infrastructure"],
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    /* ── Warm background that the glass floats over ── */
    <footer style={{
      position: "relative",
      width: "100%",
      background:
        "radial-gradient(ellipse 120% 80% at 0% 0%, rgba(255,107,53,0.13) 0%, transparent 55%)," +
        "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(255,162,127,0.11) 0%, transparent 50%)," +
        "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(255,135,92,0.09) 0%, transparent 55%)," +
        "#fef6f0",
      overflow: "hidden",
    }}>

      {/* CSS for hover states — avoids JS event handlers and hydration mismatch */}
      <style>{`
        .ft-nav-link { font-size:12.5px; color:#666; text-decoration:none; transition:color 0.15s; display:inline-block; line-height:1; }
        .ft-nav-link:hover { color:#FF6B35; }
        .ft-bottom-link { font-size:12px; color:#bbb; text-decoration:none; transition:color 0.15s; }
        .ft-bottom-link:hover { color:#FF6B35; }
        .ft-social { color:#aaa; display:inline-flex; align-items:center; justify-content:center; width:30px; height:30px; border-radius:8px; border:1px solid rgba(0,0,0,0.08); background:rgba(255,255,255,0.7); text-decoration:none; transition:color 0.15s,background 0.15s,border-color 0.15s,transform 0.15s; }
        .ft-social:hover { color:#FF6B35; background:rgba(255,107,53,0.08); border-color:rgba(255,107,53,0.22); transform:translateY(-2px); }
        .ft-demo-btn { background:linear-gradient(135deg,#FF6B35,#FF875C); color:#fff; border-radius:12px; padding:13px 26px; font-weight:700; font-size:14px; text-decoration:none; display:inline-flex; align-items:center; gap:8px; box-shadow:0 6px 22px rgba(255,107,53,0.32),inset 0 1px 0 rgba(255,255,255,0.2); flex-shrink:0; font-family:inherit; transition:opacity 0.15s,transform 0.15s; }
        .ft-demo-btn:hover { opacity:0.92; transform:translateY(-1px); }
      `}</style>

      {/* ── Decorative soft orbs (behind the glass) ── */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: -80, left: "10%",
          width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 65%)",
          filter: "blur(48px)",
        }} />
        <div style={{
          position: "absolute", bottom: -60, right: "8%",
          width: 440, height: 440, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,162,127,0.09) 0%, transparent 65%)",
          filter: "blur(56px)",
        }} />
        <div style={{
          position: "absolute", top: "30%", left: "55%",
          width: 320, height: 320, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </div>

      {/* ── White glass panel — full width ── */}
      <div style={{
        position: "relative",
        width: "100%",
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(28px) saturate(1.8) brightness(1.04)",
        WebkitBackdropFilter: "blur(28px) saturate(1.8) brightness(1.04)",
        borderTop: "1px solid rgba(255,255,255,0.85)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92), 0 -4px 32px rgba(255,107,53,0.04)",
      }}>

        {/* ── Top CTA strip ── */}
        <div style={{
          borderBottom: "1px solid rgba(255,107,53,0.08)",
          padding: "32px 0",
        }}>
          <div className="footer-cta-inner" style={{
            maxWidth: 1200, margin: "0 auto", padding: "0 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 20,
          }}>
            <div>
              <p style={{
                fontSize: 11, fontWeight: 800, color: "#FF6B35",
                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6,
              }}>
                Ready to modernise your mess?
              </p>
              <p style={{
                fontSize: 20, fontWeight: 800, color: "#1a1a1a",
                letterSpacing: "-0.02em", lineHeight: 1.3,
              }}>
                Join 500+ operators already running on Mealiez.
              </p>
            </div>
            <Link href="/book-demo" className="ft-demo-btn">
              Book a Free Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>
        </div>

        {/* ── Nav columns + brand ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 40px 40px" }}>
          <div className="footer-inner-flex" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>

            {/* Brand column */}
            <div style={{ flex: "0 0 196px" }}>
              <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{
                  width: 30, height: 30,
                  background: "linear-gradient(135deg, #FF6B35, #FF875C)",
                  borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(255,107,53,0.35)",
                  flexShrink: 0,
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                  </svg>
                </div>
                <span style={{ fontSize: 19, fontWeight: 800, color: "#FF6B35", letterSpacing: "-0.025em" }}>Mealiez</span>
              </Link>

              <p style={{ fontSize: 12.5, color: "#888", lineHeight: 1.7, maxWidth: 178, marginBottom: 20 }}>
                The operating system for modern messes and food service businesses across India.
              </p>

              {/* Social icons — hover via CSS class */}
              <div style={{ display: "flex", gap: 6 }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="ft-social"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Trust badge */}
              <div style={{
                marginTop: 24,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(255,107,53,0.06)",
                border: "1px solid rgba(255,107,53,0.14)",
                borderRadius: 100,
                padding: "5px 12px",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#555", letterSpacing: "0.04em" }}>
                  500+ operators live
                </span>
              </div>
            </div>

            {/* Nav columns */}
            <div className="footer-nav-cols" style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 8,
            }}>
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <h4 style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#999",
                    marginBottom: 14,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}>
                    {col.title}
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {col.links.map(([label, href]) => (
                      <li key={label} style={{ marginBottom: 10 }}>
                        <Link
                          href={href}
                          className="ft-nav-link"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom" style={{
          borderTop: "1px solid rgba(255,107,53,0.07)",
          maxWidth: 1200, margin: "0 auto",
          padding: "16px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 10,
        }}>
          <p style={{ fontSize: 12, color: "#bbb", margin: 0, fontFamily: "inherit" }}>
            © 2026 Mealiez. All rights reserved. Made with ❤️ for mess operators across India.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"], ["Security", "/security"]].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="ft-bottom-link"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
