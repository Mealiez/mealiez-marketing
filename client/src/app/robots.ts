import type { MetadataRoute } from "next";

/**
 * robots.ts — Robots directives for Mealiez marketing site.
 * Next.js 15 serves this at /robots.txt automatically.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/(auth)/"],
      },
    ],
    sitemap: "https://mealiez.in/sitemap.xml",
    host: "https://mealiez.in",
  };
}
