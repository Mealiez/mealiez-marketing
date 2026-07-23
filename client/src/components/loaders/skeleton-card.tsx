"use client";

import { motion } from "framer-motion";

/**
 * Skeleton card loader — shimmer placeholder for cards, blog posts, etc.
 */
export function SkeletonCard({ height = 320 }: { height?: number }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 4px 16px rgba(17,17,17,0.04)",
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          width: "100%",
          height: height * 0.55,
          background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2s ease-in-out infinite",
        }}
      />
      {/* Content placeholders */}
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <div
          style={{
            width: "40%", height: 12, borderRadius: 6,
            background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            width: "90%", height: 16, borderRadius: 8,
            background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            width: "75%", height: 14, borderRadius: 7,
            background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            width: "30%", height: 32, borderRadius: 8, marginTop: 8,
            background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}

/**
 * Skeleton card grid — renders multiple skeleton cards
 */
export function SkeletonCardGrid({ count = 6, columns = 3 }: { count?: number; columns?: number }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: 24,
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
        >
          <SkeletonCard />
        </motion.div>
      ))}
    </div>
  );
}