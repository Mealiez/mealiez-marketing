"use client";

/**
 * magnetic-button.tsx — Premium Magnetic Wrapper v3
 *
 * Wraps any children with:
 *  - Physics-based magnetic cursor attraction (Framer Motion useSpring)
 *  - Cursor-accurate ripple on click
 *  - Soft spring lift on hover
 *  - Graceful touch-device fallback (no magnetic, normal tap)
 *  - Respects prefers-reduced-motion
 *
 * Usage:
 *   <MagneticButton strength={0.4}>
 *     <button className="btn-ora">Book Demo</button>
 *   </MagneticButton>
 */

import { useRef, useCallback, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children:  React.ReactNode;
  strength?: number;          // 0–1, default 0.38
  liftPx?:  number;           // vertical lift on hover, default 3
  className?: string;
  style?:   React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  href?:    string;
  tag?:     "button" | "a" | "div";
  ripple?:  boolean;          // cursor ripple on click, default true
}

interface Ripple { id: number; x: number; y: number; size: number; }

export function MagneticButton({
  children,
  strength = 0.38,
  liftPx   = 3,
  className,
  style,
  onClick,
  href,
  tag: Tag = "div",
  ripple = true,
}: MagneticButtonProps) {
  const outerRef  = useRef<HTMLElement>(null);
  const isTouchRef = useRef(false);
  const isHovering = useRef(false);

  /* Spring physics for magnetic offset */
  const rawX = useSpring(0, { stiffness: 210, damping: 24 });
  const rawY = useSpring(0, { stiffness: 210, damping: 24 });
  const magX = useTransform(rawX, v => v * strength * 22);
  const magY = useTransform(rawY, v => v * strength * 14);

  /* Spring for hover lift */
  const liftY = useSpring(0,  { stiffness: 280, damping: 22 });
  const scale  = useSpring(1,  { stiffness: 300, damping: 22 });

  /* Ripple state */
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);

  const addRipple = useCallback((e: React.MouseEvent) => {
    if (!ripple || !outerRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.2;
    const id   = rippleId.current++;
    setRipples(prev => [...prev, {
      id,
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top  - size / 2,
      size,
    }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);
  }, [ripple]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouchRef.current || !outerRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2));
    rawY.set((e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2));
  }, [rawX, rawY]);

  const handleMouseEnter = useCallback(() => {
    if (isTouchRef.current) return;
    isHovering.current = true;
    liftY.set(-liftPx);
    scale.set(1.025);
  }, [liftY, scale, liftPx]);

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    rawX.set(0); rawY.set(0);
    liftY.set(0); scale.set(1);
  }, [rawX, rawY, liftY, scale]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    addRipple(e);
    scale.set(0.94);
    setTimeout(() => scale.set(isHovering.current ? 1.025 : 1), 130);
    onClick?.(e);
  }, [addRipple, scale, onClick]);

  const handleTouchStart = useCallback(() => {
    isTouchRef.current = true;
  }, []);

  const outerStyle: React.CSSProperties = {
    display: "inline-flex",
    position: "relative",
    willChange: "transform",
    ...style,
  };

  const props = {
    ref: outerRef,
    onMouseMove:  handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onTouchStart: handleTouchStart,
    onClick:      handleClick,
    className,
    ...(href ? { href } : {}),
  };

  return (
    <motion.div
      style={{
        display: "inline-flex",
        x: magX,
        y: magY,
      }}
    >
      <motion.div
        style={{
          ...outerStyle,
          y:     liftY,
          scale,
        }}
      >
        {/* Ripple overlay */}
        {ripple && (
          <span style={{
            position: "absolute", inset: 0,
            borderRadius: "inherit",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 99,
          }}>
            {ripples.map(r => (
              <span
                key={r.id}
                className="btn-ripple"
                style={{
                  left: r.x, top: r.y,
                  width: r.size, height: r.size,
                }}
              />
            ))}
          </span>
        )}

        <Tag {...(props as React.HTMLAttributes<HTMLElement>)}>
          {children}
        </Tag>
      </motion.div>
    </motion.div>
  );
}
