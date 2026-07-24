"use client";

/**
 * icon-frame.tsx — Premium Icon/Emoji Container with Spring Animation
 *
 * Features:
 *  • Elastic spring scale on hover (useSpring, Framer Motion)
 *  • Subtle rotation on hover
 *  • Ambient glow ring (pulsing, behind the icon)
 *  • Cursor ripple on click
 *  • Idle breathing glow (optional, for hero icons)
 *  • Touch-device safe
 *  • prefers-reduced-motion compliant
 *
 * Usage:
 *   <IconFrame size={44} color="#FF6B35">🍽️</IconFrame>
 *   <IconFrame size={52} idle glow>📊</IconFrame>
 *   <IconFrame size={44} color="#8b5cf6" rotateDeg={6}>🎯</IconFrame>
 */

import {
  useRef,
  useCallback,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import { motion, useSpring, type MotionStyle } from "framer-motion";

interface IconFrameProps {
  children:    ReactNode;
  size?:       number;          // width + height in px, default 44
  color?:      string;          // background color accent, default orange
  rotateDeg?:  number;          // max hover rotation, default 5
  scalePeak?:  number;          // max scale on hover, default 1.14
  idle?:       boolean;         // enable breathing idle glow animation
  glow?:       boolean;         // show ambient glow ring
  className?:  string;
  style?:      CSSProperties;
  onClick?:    () => void;
}

interface Ripple { id: number; x: number; y: number; size: number; }

export function IconFrame({
  children,
  size      = 44,
  color     = "rgba(255,107,53,1)",
  rotateDeg = 5,
  scalePeak = 1.14,
  idle      = false,
  glow      = true,
  className = "",
  style,
  onClick,
}: IconFrameProps) {
  const elRef  = useRef<HTMLDivElement>(null);
  const isTouch = useRef(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);

  /* Spring physics */
  const sc  = useSpring(1, { stiffness: 320, damping: 20 });
  const rot = useSpring(0, { stiffness: 280, damping: 18 });
  const lift = useSpring(0, { stiffness: 260, damping: 22 });

  const handleMouseEnter = useCallback(() => {
    if (isTouch.current) return;
    sc.set(scalePeak);
    rot.set(-rotateDeg);
    lift.set(-3);
  }, [sc, rot, lift, scalePeak, rotateDeg]);

  const handleMouseLeave = useCallback(() => {
    sc.set(1);
    rot.set(0);
    lift.set(0);
  }, [sc, rot, lift]);

  const handleTouchStart = useCallback(() => {
    isTouch.current = true;
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!elRef.current) return;
    /* Elastic press */
    sc.set(0.88);
    setTimeout(() => sc.set(scalePeak), 100);
    setTimeout(() => sc.set(1), 220);

    /* Ripple */
    const rect = elRef.current.getBoundingClientRect();
    const sz   = Math.max(rect.width, rect.height) * 2.5;
    const id   = rippleId.current++;
    setRipples(prev => [...prev, {
      id,
      x: e.clientX - rect.left - sz / 2,
      y: e.clientY - rect.top  - sz / 2,
      size: sz,
    }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);

    onClick?.();
  }, [sc, scalePeak, onClick]);

  /* Derived color for glow */
  const glowAlpha = color.startsWith("rgba")
    ? color.replace(/[\d.]+\)$/, "0.22)")
    : `rgba(255,107,53,0.22)`;

  const motionStyle: MotionStyle = {
    scale: sc,
    rotate: rot,
    y: lift,
  };

  const wrapStyle: CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    borderRadius: "50%",
    flexShrink: 0,
    cursor: onClick ? "pointer" : "default",
    overflow: "hidden",
    willChange: "transform",
    animation: idle ? "glowRingPulse 3s ease-in-out infinite" : undefined,
    ...style,
  };

  return (
    <div style={{ position: "relative", display: "inline-flex" }} className={className}>
      {/* Ambient glow ring behind */}
      {glow && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: -8,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${glowAlpha} 0%, transparent 65%)`,
            pointerEvents: "none",
            zIndex: 0,
            animation: idle ? "glowRingPulse 3s ease-in-out infinite" : undefined,
          }}
        />
      )}

      <motion.div
        ref={elRef}
        style={{ ...wrapStyle, ...motionStyle }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onClick={handleClick}
      >
        {/* Ripple container */}
        <span style={{
          position: "absolute", inset: 0,
          borderRadius: "inherit",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 10,
        }}>
          {ripples.map(r => (
            <span
              key={r.id}
              className="btn-ripple"
              style={{
                left: r.x, top: r.y,
                width: r.size, height: r.size,
                background: `${glowAlpha}`,
              }}
            />
          ))}
        </span>

        {/* Glass top shine */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "45%",
            borderRadius: "inherit",
            background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Icon content */}
        <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {children}
        </span>
      </motion.div>
    </div>
  );
}
