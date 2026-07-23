import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { LenisProvider } from "@/lib/lenis";
import { PageLoader } from "@/components/loaders/page-loader";
import { ToastProvider } from "@/components/ux/toast";
import { ScrollToTop } from "@/components/ux/scroll-to-top";
import { PageTransition } from "@/components/ux/page-transition";
import { TopProgressBar } from "@/components/loaders/progress-bar";

export const metadata: Metadata = {
  title: "Mealiez | Mess Management Software for Hostels, Colleges & Industrial Canteens in India",
  description:
    "Mealiez is India's mess management software. Automate meal bookings, QR attendance, billing, inventory, and analytics for hostel messes, college canteens, and industrial cafeterias. Cut food wastage by up to 30%.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Pre-connect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/*
          Font stack:
          • Barlow Condensed — hero titles, section headings, statistics (display)
          • Barlow            — body text, nav, buttons, cards, footer
          • Edu VIC WA NT Hand — decorative accents, handwritten highlights
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Edu+VIC+WA+NT+Hand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Preload critical assets */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#fef6f0" }} className="antialiased">
        {/* Global page loader — shows on first visit */}
        <PageLoader />

        {/* Top navigation loading indicator */}
        <TopProgressBar />

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Toast notifications */}
        <ToastProvider>
          {/* Lenis smooth scroll provider */}
          <LenisProvider>
            <SiteHeader />
            <main style={{ width: "100%" }}>
              {/* Page transition animation between routes */}
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <SiteFooter />
          </LenisProvider>
        </ToastProvider>

        {/* Scroll-to-top button */}
        <ScrollToTop />
      </body>
    </html>
  );
}
