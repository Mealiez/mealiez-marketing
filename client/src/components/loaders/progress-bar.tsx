"use client";

import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Top navigation loading indicator — thin gradient bar that animates across the top
 * Shows on route changes and auto-hides after completion
 */
export function TopProgressBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate route change progress
    const show = () => {
      setIsVisible(true);
      setProgress(0);
    };

    const complete = () => {
      setProgress(100);
      setTimeout(() => setIsVisible(false), 300);
    };

    // Listen for route changes via popstate
    const onPopState = () => {
      show();
      // Simulate load
      const timer = setTimeout(complete, 600);
      return () => clearTimeout(timer);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "100%",
          background: "linear-gradient(90deg, #FF6B35, #FF875C, #FFA27F, #FF6B35)",
          backgroundSize: "200% 100%",
          borderRadius: 2,
          boxShadow: "0 0 12px rgba(255,107,53,0.5)",
        }}
      />
    </motion.div>
  );
}

/**
 * Scroll progress indicator — shows reading progress on blog/article pages
 * Already exists as a separate component, this is an enhanced version
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 9999,
        transformOrigin: "0%",
        scaleX,
        background: "linear-gradient(90deg, #FF6B35, #FF875C)",
        boxShadow: "0 0 12px rgba(255,107,53,0.4)",
      }}
    />
  );
}

/**
 * Animated progress bar — for forms, uploads, etc.
 */
export function AnimatedProgressBar({ value = 0 }: { value?: number }) {
  const springValue = useSpring(value, {
    stiffness: 60,
    damping: 20,
  });
  const width = useTransform(springValue, (v) => `${v}%`);

  return (
    <div
      style={{
        width: "100%",
        height: 6,
        background: "rgba(255,107,53,0.1)",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          height: "100%",
          width,
          background: "linear-gradient(90deg, #FF6B35, #FF875C)",
          borderRadius: 3,
          boxShadow: "0 0 8px rgba(255,107,53,0.3)",
        }}
      />
    </div>
  );
}

/**
 * Infinite loading indicator — for infinite scroll
 */
export function InfiniteLoader({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "24px 0",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          border: "2.5px solid rgba(255,107,53,0.2)",
          borderTopColor: "#FF6B35",
        }}
      />
      <span style={{
        fontSize: 13,
        color: "#999",
        fontFamily: "'Barlow', system-ui, sans-serif",
      }}>
        Loading more...
      </span>
    </motion.div>
  );
}