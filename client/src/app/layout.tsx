import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import "../components/ui/styles/animations.css";
import "../components/ui/styles/visual-effects.css";
import "../components/ui/styles/premium-effects.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { ClientShell } from "@/components/client-shell";

// ── Fonts via next/font (no render-blocking network request) ───────────────
// Only load the weights we actually use — cuts font payload by ~60%
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-barlow",
  preload: true,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal"],
  display: "swap",
  variable: "--font-barlow-condensed",
  preload: true,
});

// ── Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mealiez | Mess Management Software for Hostels, Colleges & Industrial Canteens in India",
  description:
    "Mealiez is India's mess management software. Automate meal bookings, QR attendance, billing, inventory, and analytics for hostel messes, college canteens, and industrial cafeterias. Cut food wastage by up to 30%.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mealiez",
    title: "Mealiez | Mess Management Software",
    description:
      "India's mess management software. Automate billing, attendance, inventory & analytics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mealiez | Mess Management Software",
    description: "India's mess management software for hostels, colleges & industrial canteens.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        style={{ margin: 0, padding: 0 }}
        className="antialiased bg-aurora noise-overlay noise-premium"
      >
        {/* Server-rendered immediately — critical for LCP */}
        <ScrollProgress />
        <SiteHeader />

        {/* Client boundary — all ssr:false dynamic imports live here */}
        <ClientShell>
          {children}
        </ClientShell>

        {/* Server-rendered footer */}
        <SiteFooter />
      </body>
    </html>
  );
}
