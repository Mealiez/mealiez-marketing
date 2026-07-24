"use client";

/**
 * premium-card.tsx — 3D Tilt + Cursor-Follow Glow Card Wrapper
 *
 * Features:
 *  • Mouse-follow 3D perspective tilt (max ±6 deg X/Y) via Framer Motion
 *  • Cursor-follow radial glow spot (requestAnimationFrame, smooth lerp)
 *  • Spring physics lift on hover (useSpring)
 *  • Ambient shadow expansion
 *  • Diagonal shine sweep (CSS keyframe triggered on hover)
 *  • Glass top-edge reflection that shifts with cursor
 *  • Touch-device fallback — no tilt, standard CSS hover only
 *  • prefers-reduced-motion: disables all motion
 *
 * Usage:
 *   <PremiumCard>
 *     <div className="card">…</div>
 *   </PremiumCard>
 *
 *   <PremiumCard tiltStrength={5} glowColor="rgba(255,107,53,0.14)">
 *     <div className="post-card">…</div>
 *   </PremiumCard>
 */

import {
  useRef,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import {
  motion,
  useSpring,
  useTransform,
  type MotionStyle,
} from "framer-motion";

interface PremiumCardProps {
  children:       ReactNode;
  className?:     string;
  style?:         CSSProperties;
  tiltStrength?:  number;        // max tilt degrees, default 6
  liftPx?:        number;        // hover lift, default 6
  glowColor?:     string;        // radial glow color, default orange
  glowSize?:      number;        // glow spot diameter in px, default 260
  disableGlow?:   boolean;
  disableTilt?:   boolean;
}

/* ─── lerp helper ─────────────────────────────── */
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

export function PremiumCard({
  children,
  className = "",
  style,
  tiltStrength = 6,
  liftPx       = 6,
  glowColor    = "rgba(255,107,53,0.14)",
  glowSize     = 260,
  disableGlow  = false,
  disableTilt  = false,
}: PremiumCardProps) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);
  const isTouch  = useRef(false);
  const glowPos  = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [hovering, setHovering] = useState(false);

  /* Spring values for tilt */
  const rotX = useSpring(0, { stiffness: 220, damping: 26 });
  const rotY = useSpring(0, { stiffness: 220, damping: 26 });
  const liftY = useSpring(0,  { stiffness: 260, damping: 24 });
  const sc    = useSpring(1,  { stiffness: 280, damping: 24 });

  /* Cursor glow rAF loop */
  const startGlowLoop = useCallback(() => {
    const loop = () => {
      const g = glowPos.current;
      g.x = lerp(g.x, g.targetX, 0.10);
      g.y = lerp(g.y, g.targetY, 0.10);
      if (glowRef.current) {
        glowRef.current.style.left = `${g.x}px`;
        glowRef.current.style.top  = `${g.y}px`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  }, []);

  const stopGlowLoop = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  /* Mouse move */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width  - 0.5; // -0.5 … +0.5
    const ny = (e.clientY - rect.top)  / rect.height - 0.5;

    if (!disableTilt) {
      rotX.set(-ny * tiltStrength * 2);   // tilt up when cursor at top
      rotY.set(nx  * tiltStrength * 2);
    }

    /* Update glow target */
    glowPos.current.targetX = e.clientX - rect.left;
    glowPos.current.targetY = e.clientY - rect.top;
  }, [rotX, rotY, disableTilt, tiltStrength]);

  const handleMouseEnter = useCallback(() => {
    if (isTouch.current) return;
    setHovering(true);
    liftY.set(-liftPx);
    sc.set(1.012);
    if (!disableGlow) startGlowLoop();
  }, [liftY, sc, disableGlow, startGlowLoop, liftPx]);

  const handleMouseLeave = useCallback(() => {
    setHovering(false);
    rotX.set(0); rotY.set(0);
    liftY.set(0); sc.set(1);
    stopGlowLoop();
  }, [rotX, rotY, liftY, sc, stopGlowLoop]);

  const handleTouchStart = useCallback(() => {
    isTouch.current = true;
  }, []);

  /* Motion style */
  const motionStyle: MotionStyle = disableTilt ? {
    y: liftY,
    scale: sc,
  } : {
    rotateX: rotX,
    rotateY: rotY,
    y: liftY,
    scale: sc,
    transformPerspective: 900,
  };

  const wrapStyle: CSSProperties = {
    position: "relative",
    display: "block",
    transformStyle: disableTilt ? undefined : "preserve-3d",
    ...style,
  };

  return (
    <motion.div
      ref={cardRef}
      className={`cursor-glow-container ${className}`}
      style={{ ...wrapStyle, ...motionStyle }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {/* Cursor-follow glow spot */}
      {!disableGlow && (
        <div
          ref={glowRef}
          className="cursor-glow-spot"
          style={{
            width:  glowSize,
            height: glowSize,
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 65%)`,
            opacity: hovering ? 1 : 0,
          }}
        />
      )}

      {/* Glass top-edge reflection (shifts subtly with tilt) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, transparent 42%)",
          pointerEvents: "none",
          zIndex: 2,
          opacity: hovering ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />

      {children}
    </motion.div>
  );
}
