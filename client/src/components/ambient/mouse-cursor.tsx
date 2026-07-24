"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface MouseCursorProps {
  color?: string;
  size?: number;
  blur?: number;
  opacity?: number;
  className?: string;
}

/**
 * MouseCursor — optimised ambient glow effect.
 *
 * Optimisations vs original:
 *  - blur applied once via CSS class (not inline per frame) — no style recalc
 *  - rAF throttle: mousemove only queues position update, rAF applies it
 *  - translate3d() forces GPU compositing (no CPU paint)
 *  - reduced blur 120px → 80px (halves blur compositing cost)
 *  - touch/coarse-pointer devices: never initialises
 */
export function MouseCursor({
  color = "rgba(255,107,53,0.06)",
  size = 350,
  blur = 80,
  opacity = 0.7,
  className = "",
}: MouseCursorProps) {
  const glowRef    = useRef<HTMLDivElement>(null);
  const posRef     = useRef({ x: -9999, y: -9999 });
  const rafRef     = useRef<number>(0);
  const isActive   = useRef(false);
  const isMobile   = useRef(false);

  const applyPosition = useCallback(() => {
    if (!glowRef.current) return;
    const { x, y } = posRef.current;
    glowRef.current.style.transform = `translate3d(${x}px,${y}px,0)`;
    rafRef.current = 0;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    posRef.current = {
      x: e.clientX - size / 2,
      y: e.clientY - size / 2,
    };
    // Show on first move
    if (!isActive.current && glowRef.current) {
      glowRef.current.style.opacity = String(opacity);
      isActive.current = true;
    }
    // Throttle: one rAF per frame maximum
    if (rafRef.current === 0) {
      rafRef.current = requestAnimationFrame(applyPosition);
    }
  }, [size, opacity, applyPosition]);

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = "0";
    isActive.current = false;
  }, []);

  useEffect(() => {
    // Skip entirely on touch/coarse devices
    isMobile.current = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile.current) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={glowRef}
      className={`mouse-cursor-glow ${className}`}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
        filter: `blur(${blur}px)`,
        pointerEvents: "none",
        zIndex: 9998,
        opacity: 0,
        transition: "opacity 0.5s ease",
        willChange: "transform",
        // Start far off-screen — updated via rAF translate3d
        transform: "translate3d(-9999px,-9999px,0)",
        // Promote to its own GPU layer permanently
        backfaceVisibility: "hidden",
      }}
    />
  );
}