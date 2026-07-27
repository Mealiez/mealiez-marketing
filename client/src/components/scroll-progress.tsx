"use client";

/**
 * scroll-progress.tsx — Thin orange progress bar fixed at top of viewport.
 * Shows scroll depth. GPU-accelerated via transform: scaleX().
 * Uses direct DOM ref — zero React re-renders on scroll.
 */

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    function onScroll() {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      if (scrollHeight === 0 || !bar) return;
      bar.style.transform = `scaleX(${scrollTop / scrollHeight})`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2.5,
        zIndex: 9999,
        background: "rgba(255,107,53,0.12)",
        pointerEvents: "none",
      }}
    >
      <div
        ref={barRef}
        style={{
          height: "100%",
          background: "linear-gradient(90deg, #FF6B35, #FF875C, #FFa27f)",
          transformOrigin: "left center",
          transform: "scaleX(0)",
          willChange: "transform",
          boxShadow: "0 0 8px rgba(255,107,53,0.6)",
        }}
      />
    </div>
  );
}
