"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BorderGlow from "@/components/ui/border-glow";

const roleOptions = [
  "Mess Admin",
  "Warden",
  "Student",
  "Canteen Manager",
  "Enterprise Admin",
];

// Demo credentials — swap for real auth when backend is ready
const DEMO_EMAIL    = "admin@mealiez.com";
const DEMO_PASSWORD = "mealiez123";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole]       = useState("Mess Admin");
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic client-side guard
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    // Simulate auth — replace with real API call
    setTimeout(() => {
      setLoading(false);
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        // ✅ Success → redirect to dashboard (or home until dashboard exists)
        router.push("/");
      } else {
        // ❌ Wrong credentials
        setError("Incorrect email or password. Try admin@mealiez.com / mealiez123");
      }
    }, 1200);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .lp {
          font-family: 'Inter', system-ui, sans-serif;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background:
            radial-gradient(ellipse 80% 60% at 80% 10%, rgba(255,107,53,0.18) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 0% 80%, rgba(255,162,127,0.12) 0%, transparent 50%),
            #fdf2ea;
          position: relative;
          overflow: hidden;
        }

        /* Ambient blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(72px);
          pointer-events: none;
          animation: blobFloat 8s ease-in-out infinite;
        }
        @keyframes blobFloat {
          0%,100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(-20px) scale(1.05); }
        }

        /* Outer container card */
        .outer-card {
          width: 100%;
          max-width: 900px;
          background: rgba(255,255,255,0.42);
          backdrop-filter: blur(32px) saturate(1.8);
          -webkit-backdrop-filter: blur(32px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.82);
          border-radius: 28px;
          box-shadow:
            0 32px 80px rgba(255,107,53,0.10),
            0 8px 24px rgba(0,0,0,0.05),
            inset 0 1px 0 rgba(255,255,255,0.95);
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        /* Left panel */
        .left-panel {
          padding: 56px 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: transparent;
        }
        .left-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: auto;
        }
        .left-copy {
          margin-top: 40px;
        }
        .left-headline {
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.22;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }
        .left-sub {
          font-size: 14px;
          color: #666;
          line-height: 1.75;
          max-width: 280px;
          margin-bottom: 28px;
        }
        .btn-contact {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 10px;
          padding: 11px 22px;
          font-size: 13.5px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.18s, background 0.18s, transform 0.18s, box-shadow 0.18s;
          width: fit-content;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .btn-contact:hover {
          border-color: rgba(255,107,53,0.35);
          background: rgba(255,255,255,0.9);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.07);
        }

        /* Right panel — white form card */
        .right-panel {
          background: #fff;
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-left: 1px solid rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
        }
        /* Orange glow behind the form */
        .right-panel::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 260px; height: 260px;
          background: radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Logo mark */
        .logo-mark {
          width: 64px; height: 64px;
          background: linear-gradient(135deg, #FF6B35, #FF875C);
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 28px rgba(255,107,53,0.38), inset 0 1px 0 rgba(255,255,255,0.25);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .welcome-title {
          font-size: 22px; font-weight: 800;
          color: #1a1a1a; letter-spacing: -0.02em;
          margin-bottom: 6px; position: relative; z-index: 1;
        }
        .welcome-sub {
          font-size: 13px; color: #999;
          margin-bottom: 32px; position: relative; z-index: 1;
        }

        /* Form */
        .form { width: 100%; position: relative; z-index: 1; }
        .field { margin-bottom: 18px; }
        .field-label {
          display: block;
          font-size: 12px; font-weight: 700;
          color: #555;
          letter-spacing: 0.04em;
          margin-bottom: 7px;
        }
        .field-input {
          width: 100%;
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 11px;
          padding: 12px 14px;
          font-size: 14px; color: #1a1a1a;
          font-family: 'Inter', system-ui, sans-serif;
          outline: none;
          background: #fafafa;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }
        .field-input:focus {
          border-color: #FF6B35;
          box-shadow: 0 0 0 3.5px rgba(255,107,53,0.12);
          background: #fff;
        }
        .field-input::placeholder { color: #bbb; }

        /* Password wrapper */
        .pass-wrap { position: relative; }
        .pass-toggle {
          position: absolute; right: 14px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; color: #aaa;
          display: flex; align-items: center;
          padding: 0;
          transition: color 0.15s;
        }
        .pass-toggle:hover { color: #FF6B35; }

        /* Role select */
        .field-select {
          width: 100%;
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 11px;
          padding: 12px 36px 12px 14px;
          font-size: 14px; color: #1a1a1a;
          font-family: 'Inter', system-ui, sans-serif;
          outline: none;
          background: #fafafa;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          cursor: pointer;
          transition: border-color 0.18s, box-shadow 0.18s, background-color 0.18s;
        }
        .field-select:focus {
          border-color: #FF6B35;
          box-shadow: 0 0 0 3.5px rgba(255,107,53,0.12);
          background-color: #fff;
        }

        /* Sign in button */
        .btn-signin {
          width: 100%;
          background: linear-gradient(135deg, #FF6B35, #FF875C);
          color: #fff;
          border: none;
          border-radius: 11px;
          padding: 14px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Inter', system-ui, sans-serif;
          cursor: pointer;
          margin-top: 8px;
          margin-bottom: 20px;
          box-shadow: 0 6px 22px rgba(255,107,53,0.38);
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-signin::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.18s;
        }
        .btn-signin:hover:not(:disabled) { opacity: 0.92; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(255,107,53,0.42); }
        .btn-signin:hover:not(:disabled)::before { opacity: 1; }
        .btn-signin:disabled { opacity: 0.7; cursor: not-allowed; }

        .register-link {
          font-size: 12.5px; color: #aaa; text-align: center;
        }
        .register-link a {
          color: #FF6B35; text-decoration: none; font-weight: 600;
          transition: opacity 0.15s;
        }
        .register-link a:hover { opacity: 0.75; }

        /* Spinner */
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 16px; height: 16px;
          border: 2.5px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        /* Trust badges */
        .trust-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 16px;
          justify-content: center;
        }
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          font-weight: 600;
          color: #aaa;
          background: #f5f5f5;
          border-radius: 100px;
          padding: 4px 10px;
        }

        /* Divider */
        .divider {
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,0.06);
          margin: 4px 0 20px;
        }
      `}</style>

      <div className="lp">

        {/* Ambient background orbs */}
        <div className="blob" style={{ width: 480, height: 480, top: -80, right: -60, background: "rgba(255,107,53,0.12)", animationDelay: "0s" }} />
        <div className="blob" style={{ width: 360, height: 360, bottom: -60, left: -40, background: "rgba(255,162,127,0.10)", animationDelay: "3s" }} />

        {/* Main outer card */}
        <BorderGlow className="outer-card" backgroundColor="#ffffff" borderRadius={24}>

          {/* ── LEFT PANEL ── */}
          <div className="left-panel">
            {/* Brand */}
            <div className="left-logo">
              <div style={{
                width: 36, height: 36,
                background: "linear-gradient(135deg,#FF6B35,#FF875C)",
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 14px rgba(255,107,53,0.35)",
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                </svg>
              </BorderGlow>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#FF6B35", letterSpacing: "-0.025em" }}>Mealiez</span>
            </div>

            {/* Copy */}
            <div className="left-copy">
              <h1 className="left-headline">
                Ready to streamline<br />your operations?
              </h1>
              <p className="left-sub">
                Join hundreds of institutions already using Mealiez to manage their food services effortlessly.
              </p>

              {/* Social proof chips */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                {["500+ operators", "10L+ meals/mo", "99.9% uptime"].map((s) => (
                  <span key={s} style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    background: "rgba(255,107,53,0.07)",
                    border: "1px solid rgba(255,107,53,0.14)",
                    borderRadius: 100,
                    padding: "4px 11px",
                    fontSize: 11, fontWeight: 700, color: "#FF6B35",
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B35", flexShrink: 0 }} />
                    {s}
                  </span>
                ))}
              </div>

              <Link href="/company#contact" className="btn-contact">
                Contact Sales
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </Link>
            </div>

            {/* Bottom back link */}
            <div style={{ marginTop: 40 }}>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: "#bbb", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#888"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#bbb"; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                Back to website
              </Link>
            </div>
          </div>

          {/* ── RIGHT PANEL (form) ── */}
          <div className="right-panel">

            {/* Logo mark */}
            <div className="logo-mark">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                {/* Bowl */}
                <ellipse cx="24" cy="30" rx="16" ry="5" fill="rgba(255,255,255,0.3)"/>
                <path d="M8 26c0 7.18 7.16 13 16 13s16-5.82 16-13H8z" fill="white" fillOpacity="0.9"/>
                <path d="M8 26h32" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                {/* Steam */}
                <path d="M18 20c0 0 2-3 0-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.85"/>
                <path d="M24 18c0 0 2-3 0-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.85"/>
                <path d="M30 20c0 0 2-3 0-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.85"/>
              </svg>
            </div>

            <p className="welcome-title">Welcome Back</p>
            <p className="welcome-sub">Sign in to your account</p>

            <form className="form" onSubmit={handleSubmit} noValidate>
              {/* Email */}
              <div className="field">
                <label className="field-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="admin@institution.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field-input"
                  required
                />
              </div>

              {/* Password */}
              <div className="field">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
                  <label className="field-label" htmlFor="password" style={{ margin: 0 }}>Password</label>
                  <a href="#" style={{ fontSize: 11.5, color: "#FF6B35", textDecoration: "none", fontWeight: 600 }}>
                    Forgot password?
                  </a>
                </div>
                <div className="pass-wrap">
                  <input
                    id="password"
                    type={showPass ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="field-input"
                    style={{ paddingRight: 44 }}
                    required
                  />
                  <button
                    type="button"
                    className="pass-toggle"
                    onClick={() => setShowPass(!showPass)}
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    {showPass ? (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Role selector */}
              <div className="field">
                <label className="field-label" htmlFor="role">Login As</label>
                <select
                  id="role"
                  className="field-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  {roleOptions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Error message */}
              {error && (
                <div style={{
                  background: "rgba(239,68,68,0.06)",
                  border: "1px solid rgba(239,68,68,0.18)",
                  borderRadius: 10,
                  padding: "11px 14px",
                  fontSize: 13,
                  color: "#c0392b",
                  marginBottom: 14,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  lineHeight: 1.5,
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {error}
                </div>
              )}

              <div className="divider" />

              {/* Submit */}
              <button type="submit" className="btn-signin" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner" />
                    Signing in…
                  </>
                ) : (
                  <>
                    Sign In
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </>
                )}
              </button>

              <p className="register-link">
                Don't have an account?{" "}
                <a href="/book-demo">Register here</a>
              </p>

              {/* Trust badges */}
              <div className="trust-row">
                {[
                  { icon: "🔐", text: "SSL Encrypted" },
                  { icon: "🇮🇳", text: "India Hosted" },
                  { icon: "✅", text: "99.9% Uptime" },
                ].map((b) => (
                  <span key={b.text} className="trust-badge">
                    {b.icon} {b.text}
                  </span>
                ))}
              </div>
            </form>

          </div>
        </div>

      </div>
    </>
  );
}
