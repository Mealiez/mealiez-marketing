"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Beautiful global page loader with animated logo.
 * Shows on initial page load and disappears once content is ready.
 */
export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate initial load / wait for resources
    const timer = setTimeout(() => setIsVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "#fef6f0",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
            }}
            exit={{
              scale: 1.1,
              opacity: 0,
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            }}
          >
            {/* Animated logo */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: 56, height: 56,
                background: "linear-gradient(135deg, #FF6B35, #FF875C)",
                borderRadius: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 32px rgba(255,107,53,0.35)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z"/>
              </svg>
            </motion.div>

            {/* Brand name */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1, y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              style={{
                fontSize: 24, fontWeight: 800,
                color: "#FF6B35", letterSpacing: "-0.02em",
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Mealiez
            </motion.span>

            {/* Loading dots */}
            <motion.div style={{ display: "flex", gap: 6, marginTop: 4 }}>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#FF6B35",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}