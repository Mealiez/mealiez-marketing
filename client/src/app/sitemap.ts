import type { MetadataRoute } from "next";

/**
 * sitemap.ts — Auto-generated sitemap for Mealiez marketing site.
 * Next.js 15 serves this at /sitemap.xml automatically.
 */

const BASE = "https://mealiez.com";

const staticRoutes = [
  { url: "/",                                    priority: 1.0,  freq: "weekly" },
  { url: "/why-mealiez",                         priority: 0.9,  freq: "monthly" },
  { url: "/pricing",                             priority: 0.9,  freq: "monthly" },
  { url: "/customers",                           priority: 0.8,  freq: "monthly" },
  { url: "/company",                             priority: 0.7,  freq: "monthly" },
  { url: "/book-demo",                           priority: 0.95, freq: "monthly" },
  // Product
  { url: "/product",                             priority: 0.85, freq: "monthly" },
  { url: "/product/meal-booking",                priority: 0.8,  freq: "monthly" },
  { url: "/product/attendance",                  priority: 0.8,  freq: "monthly" },
  { url: "/product/billing",                     priority: 0.8,  freq: "monthly" },
  { url: "/product/inventory",                   priority: 0.8,  freq: "monthly" },
  { url: "/product/analytics",                   priority: 0.8,  freq: "monthly" },
  { url: "/product/mobile-app",                  priority: 0.75, freq: "monthly" },
  // Solutions
  { url: "/solutions",                           priority: 0.85, freq: "monthly" },
  { url: "/solutions/hostel-mess",               priority: 0.8,  freq: "monthly" },
  { url: "/solutions/college-canteen",           priority: 0.8,  freq: "monthly" },
  { url: "/solutions/industrial-canteen",        priority: 0.8,  freq: "monthly" },
  { url: "/solutions/corporate-cafeteria",       priority: 0.75, freq: "monthly" },
  { url: "/solutions/cloud-kitchen",             priority: 0.7,  freq: "monthly" },
  { url: "/solutions/subscription-mess-business",priority: 0.7,  freq: "monthly" },
  // Resources
  { url: "/resources",                           priority: 0.75, freq: "weekly" },
  { url: "/resources/roi-calculator",            priority: 0.8,  freq: "monthly" },
  { url: "/resources/cost-leakage-calculator",   priority: 0.8,  freq: "monthly" },
  { url: "/blog",                                priority: 0.7,  freq: "weekly" },
  { url: "/guides",                              priority: 0.7,  freq: "weekly" },
  { url: "/reports",                             priority: 0.7,  freq: "monthly" },
  // Security & Legal
  { url: "/security",                            priority: 0.5,  freq: "yearly" },
  { url: "/legal/privacy",                       priority: 0.4,  freq: "yearly" },
  { url: "/legal/terms",                         priority: 0.4,  freq: "yearly" },
  { url: "/legal/data-infrastructure",           priority: 0.4,  freq: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map(({ url, priority, freq }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));
}
