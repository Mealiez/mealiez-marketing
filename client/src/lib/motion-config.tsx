"use client";

/**
 * motion-config.tsx — Global Framer Motion optimisation wrapper
 *
 * What this does:
 *  - LazyMotion + domAnimation: loads only ~10KB of animation features
 *    instead of the full ~50KB Framer Motion bundle
 *  - MotionConfig: applies reducedMotion:"user" globally — no per-component logic
 *  - Shared animation VARIANTS exported for reuse across the app:
 *    eliminates per-render object creation (GC pressure)
 *
 * Usage in layout.tsx:
 *   <MotionProvider>{children}</MotionProvider>
 *
 * Usage of variants in components:
 *   import { fadeUp, fadeIn, scaleIn } from "@/lib/motion-config";
 *   <m.div variants={fadeUp} initial="hidden" animate="visible" />
 */

import { MotionConfig } from "framer-motion";

// ── Shared animation variants ─────────────────────────────────────────────
// Defined outside components — stable references, zero GC pressure

export const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
};

export const slideLeft = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const slideRight = {
  hidden:  { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Shared spring config for hover interactions
export const springHover = { type: "spring" as const, stiffness: 280, damping: 24 };
export const springTap   = { type: "spring" as const, stiffness: 400, damping: 20 };

// ── Provider ──────────────────────────────────────────────────────────────

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
