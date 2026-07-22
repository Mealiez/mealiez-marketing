"use client";

/**
 * magnetic-button.tsx — CTA button with magnetic mouse-tracking effect.
 * Falls back gracefully on touch devices (no magnetic effect, normal click).
 * Wraps any children — keep children purely presentational.
 */

import { useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number; // 0–1, default 0.35
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  tag?: "button" | "a" | "div";
}

export function MagneticButton({
  children,
  strength = 0.35,
  className,
  style,
  onClick,
  href,
  tag: Tag = "div",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement & HTMLAnchorElement & HTMLButtonElement>(null);
  const isTouchRef = useRef(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouchRef.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      ref.current.style.transform = `translate(${dx}px, ${dy}px)`;
      ref.current.style.transition = "transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)";
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
  }, []);

  const handleTouchStart = useCallback(() => {
    isTouchRef.current = true;
  }, []);

  const props = {
    ref,
    className,
    style: { display: "inline-block", willChange: "transform", ...style },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onTouchStart: handleTouchStart,
    onClick,
    ...(href ? { href } : {}),
  };

  return <Tag {...(props as React.HTMLAttributes<HTMLElement>)}>{children}</Tag>;
}
