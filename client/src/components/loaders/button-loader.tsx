"use client";

import { motion } from "framer-motion";

/**
 * Loading spinner for buttons
 */
export function ButtonSpinner({ size = 16 }: { size?: number }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid rgba(255,255,255,0.3)`,
        borderTopColor: "#fff",
        flexShrink: 0,
      }}
    />
  );
}

/**
 * Button with loading state
 */
export function LoadingButton({
  children,
  loading = false,
  onClick,
  disabled,
  variant = "primary",
  style,
}: {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "outline";
  style?: React.CSSProperties;
}) {
  const isPrimary = variant === "primary";

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        background: isPrimary
          ? "linear-gradient(135deg, #FF6B35, #FF875C)"
          : "rgba(255,255,255,0.8)",
        color: isPrimary ? "#fff" : "#1a1a1a",
        border: isPrimary ? "none" : "1.5px solid rgba(0,0,0,0.10)",
        borderRadius: 14,
        padding: "14px 28px",
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "'Barlow', system-ui, sans-serif",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        opacity: disabled || loading ? 0.7 : 1,
        transition: "opacity 0.2s, transform 0.2s",
        transform: loading ? "scale(0.98)" : "scale(1)",
        boxShadow: isPrimary ? "0 4px 16px rgba(255,107,53,0.30)" : "none",
        ...style,
      }}
    >
      {loading && <ButtonSpinner size={16} />}
      {loading ? "Loading..." : children}
    </button>
  );
}

/**
 * Form submission loader overlay
 */
export function FormLoader({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(255,252,249,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 12,
        zIndex: 10,
        borderRadius: "inherit",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "3px solid rgba(255,107,53,0.2)",
          borderTopColor: "#FF6B35",
        }}
      />
      <span style={{ fontSize: 13, color: "#666", fontFamily: "'Barlow', system-ui, sans-serif" }}>
        Submitting...
      </span>
    </motion.div>
  );
}