"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * PageLoader — optimised version.
 *
 * Changes from original:
 *  - Timer: 800ms → 300ms  (removes ~500ms from LCP)
 *  - Removed repeating logo animation (expensive during initial paint)
 *  - Simplified to single fade-in/out — no complex nested motion trees
 *  - Loading dots use CSS animation instead of Framer Motion (cheaper)
 *  - Component renders null immediately if sessionStorage flag is set
 *    (subsequent navigations skip the loader entirely)
 */

const SHOWN_KEY = "mealiez_loader_shown";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on the very first visit per session
    const alreadyShown = sessionStorage.getItem(SHOWN_KEY);
    if (alreadyShown) return;

    setIsVisible(true);
    sessionStorage.setItem(SHOWN_KEY, "1");

    const timer = setTimeout(() => setIsVisible(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "#fef6f0",
          willChange: "opacity",
        }}
        aria-hidden="true"
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ scale: 1.04, opacity: 0, transition: { duration: 0.2 } }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
        >
          {/* Static logo — no repeating animation during initial load */}
          <div style={{
            width: 52, height: 52,
            background: "linear-gradient(135deg, #FF6B35, #FF875C)",
            borderRadius: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 28px rgba(255,107,53,0.30)",
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
              stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l19-9-9 19-2-8-8-2z"/>
            </svg>
          </div>

          <span style={{
            fontSize: 22, fontWeight: 800,
            color: "#FF6B35", letterSpacing: "-0.02em",
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            textTransform: "uppercase",
          }}>
            Mealiez
          </span>

          {/* CSS-only loading dots — no JS animation overhead */}
          <div style={{ display: "flex", gap: 5 }} aria-label="Loading">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#FF6B35",
                display: "inline-block",
                animation: `loaderDot 0.7s ease-in-out ${i * 0.12}s infinite`,
              }}/>
            ))}
          </div>
        </motion.div>

        <style>{`
          @keyframes loaderDot {
            0%,100% { transform: translateY(0); opacity: 0.4; }
            50%      { transform: translateY(-7px); opacity: 1; }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}