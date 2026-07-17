"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#FF6B35] to-[#FF875C] text-white shadow-lg shadow-[#FF6B35]/25 hover:shadow-xl hover:shadow-[#FF6B35]/35 focus-visible:ring-[#FF6B35]",
    secondary:
      "bg-white text-slate-900 border border-[#FF6B35]/20 hover:border-[#FF6B35]/40 hover:bg-[#FF6B35]/5 focus-visible:ring-[#FF6B35]",
    ghost:
      "text-slate-700 hover:text-[#FF6B35] hover:bg-[#FF6B35]/5 focus-visible:ring-[#FF6B35]",
  };

  const sizeStyles = {
    sm: "text-sm px-4 py-2 rounded-full",
    md: "text-sm px-6 py-3 rounded-full",
    lg: "text-base px-8 py-4 rounded-full",
  };

  const motionProps = {
    whileHover: !disabled ? { scale: 1.02, y: -2 } : {},
    whileTap: !disabled ? { scale: 0.98 } : {},
  };

  const content = (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className={disabled ? "pointer-events-none" : ""}>
        {content}
      </Link>
    );
  }

  return content;
}
