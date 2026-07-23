"use client";

import { motion } from "framer-motion";

/**
 * Skeleton loader for blog pages — full article placeholder
 */
export function SkeletonBlog() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
      {/* Title shimmer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}
      >
        <div
          style={{
            width: "85%", height: 42, borderRadius: 10,
            background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            width: "60%", height: 42, borderRadius: 10,
            background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Meta info shimmer */}
      <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
        <div
          style={{
            width: 48, height: 48, borderRadius: "50%",
            background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div
            style={{
              width: "30%", height: 14, borderRadius: 7,
              background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s ease-in-out infinite",
            }}
          />
          <div
            style={{
              width: "20%", height: 12, borderRadius: 6,
              background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Featured image shimmer */}
      <div
        style={{
          width: "100%", height: 400, borderRadius: 20, marginBottom: 32,
          background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2s ease-in-out infinite",
        }}
      />

      {/* Body paragraphs shimmer */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[100, 95, 90, 88, 92, 85, 78, 95, 88].map((width, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                width: `${width}%`, height: 14, borderRadius: 7,
                background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s ease-in-out infinite",
                animationDelay: `${i * 0.1}s`,
              }}
            />
            {i % 3 === 0 && (
              <div
                style={{
                  width: "75%", height: 14, borderRadius: 7,
                  background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s ease-in-out infinite",
                  animationDelay: `${i * 0.1 + 0.05}s`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}