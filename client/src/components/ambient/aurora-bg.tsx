"use client";

import React, { useRef } from "react";

interface AuroraBgProps {
  colors?: string[];
  className?: string;
  children?: React.ReactNode;
}

/**
 * Premium animated aurora gradient background.
 * Uses pure CSS animations for 60fps performance — no JS animation loop.
 */
export function AuroraBg({
  className = "",
  children,
}: AuroraBgProps) {
  return (
    <div
      className={`aurora-container ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div
        className="aurora-layer-1"
        style={{
          position: "absolute",
          width: "60%",
          height: "70%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,107,53,0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
          top: "10%",
          left: "5%",
          willChange: "transform",
        }}
      />
      <div
        className="aurora-layer-2"
        style={{
          position: "absolute",
          width: "50%",
          height: "60%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,162,127,0.06) 0%, transparent 60%)",
          filter: "blur(70px)",
          bottom: "5%",
          right: "5%",
          willChange: "transform",
        }}
      />
      {children}
    </div>
  );
}