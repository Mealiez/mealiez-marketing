"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Scroll-to-top button — appears when scrolled past a threshold
 * Smoothly animates the user back to the top
 */
export function ScrollToTop({ threshold = 400 }: { threshold?: number }) {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setShow(v > threshold);
    });
    return () => unsubscribe();
  }, [scrollY, threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 999,
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FF6B35, #FF875C)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(255,107,53,0.35)",
            color: "#fff",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          aria-label="Scroll to top"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,107,53,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,107,53,0.35)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}