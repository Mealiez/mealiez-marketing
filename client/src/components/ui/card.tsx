"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
};

export function Card({ children, className = "", hoverable = true }: CardProps) {
  const motionProps = hoverable
    ? {
        whileHover: { y: -6, boxShadow: "0 32px 80px rgba(15, 23, 42, 0.12)" },
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  return (
    <motion.div className={`surface-card ${className}`} {...motionProps}>
      {children}
    </motion.div>
  );
}
