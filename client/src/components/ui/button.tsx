/* Button component — CSS transitions only, no framer-motion. */
"use client";

import Link from "next/link";
import { ReactNode, CSSProperties } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
};

const variantStyles: Record<string, CSSProperties> = {
  primary: {
    background: "linear-gradient(135deg, #FF6B35, #FF875C)",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(255,107,53,0.32)",
    border: "none",
  },
  secondary: {
    background: "#fff",
    color: "#1a1a1a",
    border: "1.5px solid rgba(255,107,53,0.25)",
    boxShadow: "none",
  },
  ghost: {
    background: "transparent",
    color: "#555",
    border: "none",
    boxShadow: "none",
  },
};

const sizeStyles: Record<string, CSSProperties> = {
  sm: { fontSize: 13, padding: "8px 18px", borderRadius: 100 },
  md: { fontSize: 14, padding: "11px 24px", borderRadius: 100 },
  lg: { fontSize: 15, padding: "14px 32px", borderRadius: 100 },
};

export function Button({
  children, href, variant = "primary", size = "md",
  className = "", style, onClick, disabled = false,
}: ButtonProps) {
  const baseStyle: CSSProperties = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 8, fontWeight: 700, cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1, textDecoration: "none",
    transition: "opacity 0.15s, box-shadow 0.2s, transform 0.15s",
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
    (e.currentTarget as HTMLElement).style.opacity = "0.9";
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = "none";
    (e.currentTarget as HTMLElement).style.opacity = "1";
  };

  if (href) {
    return (
      <Link href={href} style={baseStyle} className={className}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </Link>
    );
  }

  return (
    <button style={baseStyle} className={className} onClick={onClick}
      disabled={disabled} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </button>
  );
}
