/**
 * animations.ts — Reusable Framer Motion variants + animation utilities
 * All durations respect prefers-reduced-motion via the `reducedMotion` guard.
 */

import type { Variants } from "framer-motion";

/* ─── Easing presets ─────────────────────────────────────────────── */
export const ease = {
  out:    [0.22, 1, 0.36, 1] as [number, number, number, number],
  in:     [0.64, 0, 0.78, 0] as [number, number, number, number],
  inOut:  [0.37, 0, 0.63, 1] as [number, number, number, number],
  spring: { type: "spring", stiffness: 280, damping: 30 },
} as const;

/* ─── Viewport options ───────────────────────────────────────────── */
export const viewport = { once: true, margin: "-80px 0px" };

/* ─── Variants ───────────────────────────────────────────────────── */

/** Fade up — standard section entrance */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: ease.out },
  },
};

/** Fade up subtle — for secondary elements */
export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

/** Fade in — no Y movement */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: ease.out },
  },
};

/** Scale up — cards and badges */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: ease.out },
  },
};

/** Fade from left */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: ease.out },
  },
};

/** Fade from right */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: ease.out },
  },
};

/* ─── Stagger containers ─────────────────────────────────────────── */

/** Stagger children with 0.08s delay */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Stagger item — use inside staggerContainer */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: ease.out },
  },
};

/** Stagger item scale — for cards */
export const staggerCard: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: ease.out },
  },
};

/* ─── Hero text animations ───────────────────────────────────────── */

/** Container for word-split hero text */
export const heroTextContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

/** Individual word in a split hero heading */
export const heroWord: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

/* ─── Masking reveals ────────────────────────────────────────────── */

/** Clip-path mask reveal — left to right */
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.9, ease: ease.out },
  },
};

/* ─── Counter animation helper ───────────────────────────────────── */

/** Lerp a number for animated counters */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/* ─── prefers-reduced-motion guard ──────────────────────────────── */

/** Returns true if the user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Instant (no animation) variants — used when reduced motion is active */
export const instant: Variants = {
  hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
  visible: { opacity: 1, y: 0, x: 0, scale: 1 },
};

/** Returns the right variant set based on motion preference */
export function motionVariant(
  variants: Variants,
  _reduced?: boolean
): Variants {
  if (typeof window !== "undefined" && prefersReducedMotion()) return instant;
  return variants;
}
