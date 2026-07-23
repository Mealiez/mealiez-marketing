"use client";

import { motion } from "framer-motion";

/**
 * Search loading animation — pulsing search icon
 */
export function SearchLoader({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ color: "#FF6B35" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}

/**
 * Table loading skeleton
 */
export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div style={{ width: "100%", overflow: "hidden", borderRadius: 14, border: "1px solid rgba(0,0,0,0.06)" }}>
      {/* Header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 8,
        padding: "14px 16px",
        background: "rgba(255,107,53,0.04)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        {Array.from({ length: columns }).map((_, i) => (
          <div key={i} style={{
            height: 14, borderRadius: 7,
            background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s ease-in-out infinite",
          }} />
        ))}
      </div>

      {/* Rows */}
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 8,
          padding: "12px 16px",
          borderBottom: row < rows - 1 ? "1px solid rgba(0,0,0,0.04)" : "none",
        }}>
          {Array.from({ length: columns }).map((_, col) => (
            <div key={col} style={{
              height: 12, borderRadius: 6,
              width: col === 0 ? "60%" : "80%",
              background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s ease-in-out infinite",
              animationDelay: `${(row * columns + col) * 0.05}s`,
            }} />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Dashboard widget skeleton
 */
export function WidgetSkeleton({ height = 180 }: { height?: number }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 20,
      padding: 20,
      border: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 4px 16px rgba(17,17,17,0.04)",
      height,
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      {/* Title */}
      <div style={{
        width: "40%", height: 14, borderRadius: 7,
        background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s ease-in-out infinite",
      }} />
      {/* Value */}
      <div style={{
        width: "25%", height: 32, borderRadius: 8,
        background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s ease-in-out infinite",
      }} />
      {/* Chart area */}
      <div style={{
        flex: 1, borderRadius: 10,
        background: "linear-gradient(90deg, #f0e8e0 25%, #f5ede5 50%, #f0e8e0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s ease-in-out infinite",
      }} />
    </div>
  );
}

/**
 * Video loading placeholder
 */
export function VideoPlaceholder({ aspectRatio = "16/9" }: { aspectRatio?: string }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio,
      borderRadius: 20,
      overflow: "hidden",
      background: "#f0e8e0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: "50%",
        background: "rgba(255,107,53,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF6B35">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </motion.div>
      </div>
      {/* Shimmer overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.15) 50%, transparent 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s ease-in-out infinite",
      }} />
    </div>
  );
}