import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Turbopack (dev) ──────────────────────────────────────────
  turbopack: {
    root: process.cwd(),
  },

  // ── Compression ──────────────────────────────────────────────
  compress: true,

  // ── Security / perf headers ──────────────────────────────────
  poweredByHeader: false,

  // ── Image optimization ───────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
  },

  // ── Experimental ─────────────────────────────────────────────
  experimental: {
    // Optimise CSS delivery (inline critical CSS)
    optimizeCss: false, // keep false — critters can break complex CSS
    // Partial prerendering for static shells
    ppr: false,
  },

  // ── Cache headers for static assets ─────────────────────────
  async headers() {
    return [
      {
        source: "/(.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp|avif|woff|woff2|ttf|otf)$)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
