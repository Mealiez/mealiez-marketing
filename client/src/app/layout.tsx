import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Mealiez | Modern Mess Management Platform",
  description:
    "Mealiez helps institutions and food operators automate meal booking, attendance, billing, inventory, and analytics from one platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#fef6f0" }} className="antialiased">
        <SiteHeader />
        <main style={{ width: "100%" }}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
