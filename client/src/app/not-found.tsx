"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Premium 404 page — animated, engaging, and on-brand
 */
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fef6f0",
        position: "relative",
        overflow: "hidden",
        padding: 24,
      }}
    >
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
          top: -100,
          right: -100,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,162,127,0.1) 0%, transparent 70%)",
          bottom: -50,
          left: -50,
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          textAlign: "center",
          maxWidth: 500,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
          style={{ marginBottom: 24 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(255,107,53,0.08)",
              border: "1px solid rgba(255,107,53,0.15)",
              borderRadius: 9999,
              padding: "8px 20px",
              fontSize: 13,
              fontWeight: 600,
              color: "#FF6B35",
              fontFamily: "'Barlow', system-ui, sans-serif",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🍽️
            </motion.span>
            Page not found
          </div>
        </motion.div>

        {/* Large 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: "clamp(80px, 20vw, 160px)",
            fontWeight: 900,
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            margin: "0 0 16px",
            background: "linear-gradient(135deg, #FF6B35, #FF875C, #FFA27F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: 18,
            color: "#666",
            fontFamily: "'Barlow', system-ui, sans-serif",
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          Looks like this dish isn&apos;t on the menu. <br />
          Let&apos;s get you back to something delicious.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link
            href="/"
            style={{
              background: "linear-gradient(135deg, #FF6B35, #FF875C)",
              color: "#fff",
              border: "none",
              borderRadius: 14,
              padding: "14px 28px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Barlow', system-ui, sans-serif",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 4px 16px rgba(255,107,53,0.30)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,107,53,0.40)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,107,53,0.30)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Go Home
          </Link>
          <Link
            href="/book-demo"
            style={{
              background: "rgba(255,255,255,0.8)",
              color: "#1a1a1a",
              border: "1.5px solid rgba(0,0,0,0.10)",
              borderRadius: 14,
              padding: "14px 28px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Barlow', system-ui, sans-serif",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)";
            }}
          >
            Book a Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
        </motion.div>

        {/* Decorative food icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 48,
            fontSize: 24,
            opacity: 0.3,
          }}
        >
          <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>🍕</motion.span>
          <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>🥗</motion.span>
          <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>🍜</motion.span>
          <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}>🍛</motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
}