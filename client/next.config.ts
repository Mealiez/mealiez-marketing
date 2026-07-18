import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack is the fast Rust-based bundler — already enabled.
  // Keep the config minimal; extra keys can slow it down.
  
  // Skip type-checking during dev builds (tsc runs separately)
  typescript: {
    ignoreBuildErrors: false,
  },

  // Faster image handling
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },

  // Reduce dev overlay noise
  devIndicators: {
    position: "bottom-right",
  },

  // Experimental: speed up component compilation
  experimental: {
    // Optimise CSS — avoids re-processing globals.css on every HMR
    optimizeCss: false, // keep false unless critters is installed

    // Turbopack will handle this automatically
    // but explicitly disabling webpack minimizer in dev helps
  },
};

export default nextConfig;
