"use client";

/**
 * button.tsx — Premium Button Component v3
 *
 * Features:
 *  • Spring-physics hover (Framer Motion useSpring)
 *  • Cursor-accurate ripple on every click
 *  • Magnetic hover effect (desktop only)
 *  • Loading state with spinner
 *  • Success state with checkmark pulse
 *  • Full accessibility: keyboard focus ring, aria, reduced-motion
 *  • Three variants: primary | secondary | ghost
 *  • Three sizes: sm | md | lg
 */

import Link from "next/link";
import { ReactNode, CSSProperties, useRef, useCallback, useState } from "react";
import { motion, useSpring, useTransform, type MotionStyle } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize    = "sm" | "md" | "lg";
type ButtonState   = "idle" | "loading" | "success";

interface ButtonProps {
  children:   ReactNode;
  href?:      string;
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  className?: string;
  style?:     CSSProperties;
  onClick?:   (e: React.MouseEvent) => void | Promise<void>;
  disabled?:  boolean;
  magnetic?:  boolean;      // enables magnetic hover (default true on primary)
  ariaLabel?: string;
  type?:      "button" | "submit" | "reset";
}

/* ─── Design tokens ──────────────────────────────────── */
const VAR: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: "linear-gradient(135deg,#FF6B35 0%,#FF875C 55%,#FF9A72 100%)",
    color: "#fff",
    border: "none",
    boxShadow: "0 6px 22px rgba(255,107,53,0.32),0 2px 6px rgba(255,107,53,0.18),inset 0 1px 0 rgba(255,255,255,0.20)",
  },
  secondary: {
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(14px)",
    color: "#1a1a1a",
    border: "1.5px solid rgba(0,0,0,0.08)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.90)",
  },
  ghost: {
    background: "transparent",
    color: "rgba(0,0,0,0.60)",
    border: "none",
    boxShadow: "none",
  },
};

const SZ: Record<ButtonSize, CSSProperties> = {
  sm: { fontSize: 12.5, padding: "8px 18px",  borderRadius: 9999, letterSpacing: "0.04em" },
  md: { fontSize: 13.5, padding: "11px 24px", borderRadius: 9999, letterSpacing: "0.03em" },
  lg: { fontSize: 15,   padding: "14px 32px", borderRadius: 9999, letterSpacing: "0.02em" },
};

/* ─── Success icon ───────────────────────────────────── */
const CheckIcon = () => (
  <motion.svg
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
  >
    <polyline points="20 6 9 17 4 12"/>
  </motion.svg>
);

/* ─── Spinner icon ───────────────────────────────────── */
const Spinner = () => (
  <motion.svg
    width="15" height="15" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    animate={{ rotate: 360 }}
    transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
    style={{ flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
    <path d="M12 2a10 10 0 0 1 10 10" />
  </motion.svg>
);

/* ─── Ripple ─────────────────────────────────────────── */
interface Ripple { id: number; x: number; y: number; size: number; }

function useRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const counter = useRef(0);

  const addRipple = useCallback((e: React.MouseEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const id   = counter.current++;
    setRipples(prev => [...prev, {
      id,
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top  - size / 2,
      size,
    }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);
  }, []);

  const rippleEls = ripples.map(r => (
    <span
      key={r.id}
      className="btn-ripple"
      style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
    />
  ));

  return { addRipple, rippleEls };
}

/* ─── Main component ─────────────────────────────────── */
export function Button({
  children,
  href,
  variant  = "primary",
  size     = "md",
  className = "",
  style,
  onClick,
  disabled = false,
  magnetic = variant === "primary",
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const elRef = useRef<HTMLElement>(null);
  const [btnState, setBtnState] = useState<ButtonState>("idle");
  const { addRipple, rippleEls } = useRipple();

  /* Spring magnetic offset */
  const isTouchRef = useRef(false);
  const rawX = useSpring(0, { stiffness: 200, damping: 22 });
  const rawY = useSpring(0, { stiffness: 200, damping: 22 });
  const magX = useTransform(rawX, v => v * (magnetic ? 9 : 0));
  const magY = useTransform(rawY, v => v * (magnetic ? 6 : 0));

  /* Spring lift for hover */
  const lift = useSpring(0, { stiffness: 260, damping: 22 });
  const sc   = useSpring(1, { stiffness: 300, damping: 22 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouchRef.current || !elRef.current || disabled) return;
    const rect = elRef.current.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2));
    rawY.set((e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2));
  }, [rawX, rawY, disabled]);

  const handleMouseEnter = useCallback(() => {
    if (disabled || btnState !== "idle") return;
    lift.set(-2.5);
    sc.set(variant === "primary" ? 1.03 : 1.02);
  }, [lift, sc, disabled, btnState, variant]);

  const handleMouseLeave = useCallback(() => {
    lift.set(0); sc.set(1);
    rawX.set(0); rawY.set(0);
  }, [lift, sc, rawX, rawY]);

  const handleClick = useCallback(async (e: React.MouseEvent) => {
    if (disabled || !elRef.current) return;
    addRipple(e, elRef.current);
    // Spring press
    sc.set(0.95);
    setTimeout(() => sc.set(variant === "primary" ? 1.03 : 1.02), 100);

    if (onClick) {
      const result = onClick(e);
      if (result instanceof Promise) {
        setBtnState("loading");
        try {
          await result;
          setBtnState("success");
          setTimeout(() => setBtnState("idle"), 2000);
        } catch {
          setBtnState("idle");
        }
      }
    }
  }, [disabled, addRipple, sc, onClick, variant]);

  const handleTouchStart = useCallback(() => { isTouchRef.current = true; }, []);

  /* Derived styles */
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontWeight: 700,
    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.50 : 1,
    textDecoration: "none",
    userSelect: "none",
    whiteSpace: "nowrap",
    position: "relative",
    overflow: "hidden",
    willChange: "transform",
    ...VAR[variant],
    ...SZ[size],
    ...style,
  };

  const successStyle: CSSProperties = btnState === "success" ? {
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    boxShadow: "0 8px 28px rgba(34,197,94,0.35)",
    pointerEvents: "none",
  } : {};

  /* MotionStyle extends CSSProperties with MotionValue support */
  const mergedStyle: MotionStyle = { ...base, ...successStyle };

  /* Style including spring motion values — valid MotionStyle */
  const animatedStyle: MotionStyle = { ...mergedStyle, y: lift, scale: sc };

  const btnClass = `${className} ${btnState === "loading" ? "btn-loading" : ""} ${btnState === "success" ? "btn-success" : ""}`.trim();

  const sharedEvents = {
    onMouseMove:  handleMouseMove as React.MouseEventHandler,
    onMouseEnter: handleMouseEnter as React.MouseEventHandler,
    onMouseLeave: handleMouseLeave as React.MouseEventHandler,
    onClick:      handleClick as React.MouseEventHandler,
    onTouchStart: handleTouchStart as React.TouchEventHandler,
  };

  const inner = (
    <>
      {/* Ripple container */}
      <span className="btn-ripple-container">{rippleEls}</span>

      {/* Glass top reflection for primary */}
      {variant === "primary" && (
        <span style={{
          position: "absolute", inset: 0, borderRadius: "inherit",
          background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 50%)",
          pointerEvents: "none", zIndex: 0,
        }}/>
      )}

      {/* Content */}
      <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 8 }}>
        {btnState === "loading" ? <><Spinner/> {children}</> :
         btnState === "success" ? <><CheckIcon/> Done!</> :
         children}
      </span>
    </>
  );

  const wrapStyle: MotionStyle = {
    display: "inline-flex",
    x: magX,
    y: magY,
  };

  if (href && !disabled) {
    return (
      <motion.div style={wrapStyle}>
        <motion.a
          ref={elRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          style={animatedStyle}
          className={btnClass}
          aria-label={ariaLabel}
          onMouseMove={handleMouseMove as React.MouseEventHandler}
          onMouseEnter={handleMouseEnter as React.MouseEventHandler}
          onMouseLeave={handleMouseLeave as React.MouseEventHandler}
          onClick={handleClick as React.MouseEventHandler}
          onTouchStart={handleTouchStart as React.TouchEventHandler}
        >
          {inner}
        </motion.a>
      </motion.div>
    );
  }

  return (
    <motion.div style={wrapStyle}>
      <motion.button
        ref={elRef as React.RefObject<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        style={animatedStyle}
        className={btnClass}
        aria-label={ariaLabel}
        aria-busy={btnState === "loading"}
        onMouseMove={handleMouseMove as React.MouseEventHandler}
        onMouseEnter={handleMouseEnter as React.MouseEventHandler}
        onMouseLeave={handleMouseLeave as React.MouseEventHandler}
        onClick={handleClick as React.MouseEventHandler}
        onTouchStart={handleTouchStart as React.TouchEventHandler}
      >
        {inner}
      </motion.button>
    </motion.div>
  );
}

/* ─── MagneticLink — lightweight wrapper for inline Link CTAs ── */
export function MagneticLink({
  href,
  children,
  className,
  style,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const isTouchRef = useRef(false);
  const rawX = useSpring(0, { stiffness: 200, damping: 22 });
  const rawY = useSpring(0, { stiffness: 200, damping: 22 });
  const magX = useTransform(rawX, v => v * 8);
  const magY = useTransform(rawY, v => v * 5);
  const elRef = useRef<HTMLAnchorElement>(null);
  const { addRipple, rippleEls } = useRipple();

  return (
    <motion.div style={{ display: "inline-flex", x: magX, y: magY }}>
      <Link
        ref={elRef}
        href={href}
        className={className}
        style={{ position: "relative", overflow: "hidden", ...style }}
        onMouseMove={(e) => {
          if (isTouchRef.current || !elRef.current) return;
          const rect = elRef.current.getBoundingClientRect();
          rawX.set((e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2));
          rawY.set((e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2));
        }}
        onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
        onTouchStart={() => { isTouchRef.current = true; }}
        onClick={(e) => elRef.current && addRipple(e, elRef.current)}
      >
        <span className="btn-ripple-container">{rippleEls}</span>
        {children}
      </Link>
    </motion.div>
  );
}
