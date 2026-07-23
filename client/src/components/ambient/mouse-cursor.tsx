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
 * Premium cursor-follow ambient glow effect.
 * Creates a soft, diffused light that follows the mouse on desktop only.
 * Automatically disables on touch devices.
 */
export function MouseCursor({
  color = "rgba(255,107,53,0.08)",
  size = 300,
  blur = 100,
  opacity = 0.8,
  className = "",
}: MouseCursorProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!glowRef.current || isMobileRef.current) return;
    const x = e.clientX - size / 2;
    const y = e.clientY - size / 2;
    glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
    glowRef.current.style.opacity = `${opacity}`;
  }, [size, opacity]);

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = "0";
  }, []);

  useEffect(() => {
    // Detect touch device
    isMobileRef.current = window.matchMedia("(pointer: coarse)").matches;
    if (isMobileRef.current) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={glowRef}
      className={`mouse-cursor-glow ${className}`}
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
        transform: "translate(-9999px, -9999px)",
      }}
      aria-hidden="true"
    />
  );
}