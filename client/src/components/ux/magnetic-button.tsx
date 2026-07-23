"use client";

import { useRef, useCallback } from "react";

/**
 * Magnetic button — cursor-aware interaction that pulls the button toward the cursor
 * Extends the existing magnetic-button component with enhanced physics
 */
export function MagneticButton({
  children,
  className,
  style,
  strength = 0.25,
  radius = 150,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < radius) {
        const moveX = distX * strength;
        const moveY = distY * strength;
        el.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
      }
    },
    [strength, radius]
  );

  const onMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0) scale(1)";
    }
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        display: "inline-flex",
        transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Card tilt effect — subtle 3D tilt on hover
 */
export function TiltCard({
  children,
  className,
  style,
  tiltDegree = 5,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tiltDegree?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      el.style.transform = `
        perspective(1000px)
        rotateY(${x * tiltDegree}deg)
        rotateX(${-y * tiltDegree}deg)
        scale3d(1.02, 1.02, 1.02)
      `;

      // Dynamic shadow
      const shadowX = x * 20;
      const shadowY = y * 20;
      el.style.boxShadow = `
        ${shadowX}px ${shadowY}px 40px rgba(255,107,53,0.12),
        0 4px 16px rgba(17,17,17,0.06)
      `;
    },
    [tiltDegree]
  );

  const onMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
      ref.current.style.boxShadow = "";
    }
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease",
        willChange: "transform",
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      {children}
    </div>
  );
}