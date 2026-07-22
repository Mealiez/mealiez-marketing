import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Mealiez | Mess Management Software for Hostels, Colleges & Industrial Canteens in India",
  description:
    "Mealiez is India's mess management software. Automate meal bookings, QR attendance, billing, inventory, and analytics for hostel messes, college canteens, and industrial cafeterias. Cut food wastage by up to 30%.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Font pairing:
          • Bricolage Grotesque — distinctive geometric display font for all headings
          • Plus Jakarta Sans   — clean, modern humanist sans for body / UI
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#fef6f0" }} className="antialiased">
        <SiteHeader />
        <main style={{ width: "100%" }}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
