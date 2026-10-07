import type { MetadataRoute } from "next";
import { products, solutions } from "@/lib/site-data";

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
  { url: "/reviews-faqs",                        priority: 0.8,  freq: "monthly" },
  
  // Product Landing Pages
  { url: "/product",                             priority: 0.85, freq: "monthly" },
  { url: "/product/overview",                    priority: 0.8,  freq: "monthly" },
  
  // Solutions Landing Page
  { url: "/solutions",                           priority: 0.85, freq: "monthly" },
  
  // Resources & Content
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

  // Map static routes
  const routes: MetadataRoute.Sitemap = staticRoutes.map(({ url, priority, freq }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));

  // Dynamically map product routes
  products.forEach((product) => {
    routes.push({
      url: `${BASE}/product/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  // Dynamically map solutions routes
  solutions.forEach((solution) => {
    routes.push({
      url: `${BASE}/solutions/${solution.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return routes;
}
