"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const roleOptions = [
  "Mess Admin",
  "Warden",
  "Student",
  "Canteen Manager",
  "Enterprise Admin",
];

const DEMO_EMAIL    = "admin@mealiez.com";
const DEMO_PASSWORD = "mealiez123";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole]         = useState("Mess Admin");
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        router.push("/");
      } else {
        setError("Incorrect email or password.");
      }
    }, 1200);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

        .login-page {
          font-family: 'Inter', system-ui, sans-serif;
          min-height: 100vh;
          width: 100%;
          /* Push below the fixed floating navbar (~76px) with extra breathing room */
          padding-top: 96px;
          padding-bottom: 48px;
          padding-left: 20px;
          padding-right: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(ellipse 65% 55% at 90% 8%,  rgba(255,107,53,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 50% 45% at 10% 92%, rgba(255,162,127,0.13) 0%, transparent 55%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(255,135,92,0.06) 0%, transparent 60%),
            #fdf2ea;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        /* Decorative floating orbs */
        .lp-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(64px);
          pointer-events: none;
          will-change: transform;
        }

        /* ═══════════════════════════════════════════════════
           CARD — single column, centered, max-w 440px
        ═══════════════════════════════════════════════════ */
        .lp-card {
          width: 100%;
          max-width: 440px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(40px) saturate(1.8);
          -webkit-backdrop-filter: blur(40px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.95);
          border-radius: 24px;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.03),
            0 8px 24px rgba(0,0,0,0.06),
            0 32px 72px rgba(255,107,53,0.09),
            inset 0 1px 0 #fff;
          padding: 44px 40px 36px;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
        }

        /* ─── Card top accent line ─── */
        .lp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 60%; height: 2px;
          background: linear-gradient(90deg, transparent, #FF6B35 40%, #FF875C 60%, transparent);
          border-radius: 0 0 2px 2px;
        }

        /* ─── Header area ─── */
        .lp-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 32px;
        }

        /* Back link row */
        .lp-back {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: #bbb;
          text-decoration: none;
          transition: color 0.15s;
          align-self: flex-start;
          margin-bottom: 24px;
          font-weight: 500;
        }
        .lp-back:hover { color: #888; }

        /* Logo + brand */
        .lp-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .lp-logo-ring {
          width: 72px; height: 72px;
          border-radius: 22px;
          background: linear-gradient(145deg, #FF6B35 0%, #FF875C 60%, #FFA27F 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 0 8px rgba(255,107,53,0.08),
            0 12px 32px rgba(255,107,53,0.38),
            inset 0 1px 0 rgba(255,255,255,0.25);
          position: relative;
        }
        /* Pulse ring */
        .lp-logo-ring::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 28px;
          border: 1.5px solid rgba(255,107,53,0.18);
        }

        .lp-brand-name {
          font-size: 15px;
          font-weight: 700;
          color: #FF6B35;
          letter-spacing: -0.01em;
        }
        .lp-brand-title {
          font-size: 22px;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: -0.025em;
          text-align: center;
          margin-top: 2px;
        }
        .lp-brand-sub {
          font-size: 13.5px;
          color: #aaa;
          text-align: center;
          font-weight: 400;
          margin-top: 4px;
          line-height: 1.5;
        }

        /* ─── Divider ─── */
        .lp-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 24px;
        }
        .lp-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(0,0,0,0.07);
        }
        .lp-divider-text {
          font-size: 11px;
          color: #ccc;
          font-weight: 500;
          white-space: nowrap;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ─── Form ─── */
        .lp-form { width: 100%; }

        .lp-field { margin-bottom: 18px; }

        .lp-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #444;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }

        .lp-input-wrap { position: relative; }

        /* Icon prefix */
        .lp-input-icon {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #ccc;
          display: flex;
          align-items: center;
          pointer-events: none;
          transition: color 0.15s;
        }

        .lp-input {
          width: 100%;
          border: 1.5px solid rgba(0,0,0,0.09);
          border-radius: 11px;
          padding: 12px 14px 12px 40px;
          font-size: 14px;
          color: #1a1a1a;
          font-family: 'Inter', system-ui, sans-serif;
          outline: none;
          background: rgba(250,250,250,0.8);
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
          box-sizing: border-box;
        }
        .lp-input:focus {
          border-color: #FF6B35;
          box-shadow: 0 0 0 3.5px rgba(255,107,53,0.10);
          background: #fff;
        }
        .lp-input:focus ~ .lp-input-icon,
        .lp-input-wrap:focus-within .lp-input-icon {
          color: #FF6B35;
        }
        .lp-input::placeholder { color: #ccc; }

        /* No icon variant (select) */
        .lp-input-no-icon {
          padding-left: 14px;
        }

        /* Password toggle */
        .lp-pass-toggle {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #ccc;
          display: flex;
          align-items: center;
          padding: 0;
          transition: color 0.15s;
        }
        .lp-pass-toggle:hover { color: #FF6B35; }

        /* Password row */
        .lp-pass-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .lp-forgot {
          font-size: 11.5px;
          color: #FF6B35;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.15s;
        }
        .lp-forgot:hover { opacity: 0.72; }

        /* Role select */
        .lp-select {
          width: 100%;
          border: 1.5px solid rgba(0,0,0,0.09);
          border-radius: 11px;
          padding: 12px 36px 12px 40px;
          font-size: 14px;
          color: #1a1a1a;
          font-family: 'Inter', system-ui, sans-serif;
          outline: none;
          background: rgba(250,250,250,0.8);
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23bbb' stroke-width='2' stroke-linecap='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 13px center;
          background-size: 14px;
          cursor: pointer;
          transition: border-color 0.18s, box-shadow 0.18s;
          box-sizing: border-box;
        }
        .lp-select:focus {
          border-color: #FF6B35;
          box-shadow: 0 0 0 3.5px rgba(255,107,53,0.10);
          background-color: #fff;
        }

        /* Error */
        .lp-error {
          background: rgba(239,68,68,0.05);
          border: 1px solid rgba(239,68,68,0.16);
          border-radius: 10px;
          padding: 10px 13px;
          font-size: 12.5px;
          color: #c0392b;
          margin-bottom: 16px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }

        /* Submit */
        .lp-submit {
          width: 100%;
          background: linear-gradient(135deg, #FF6B35 0%, #FF875C 55%, #FFA27F 100%);
          background-size: 200% 200%;
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 14px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Inter', system-ui, sans-serif;
          cursor: pointer;
          margin-top: 4px;
          margin-bottom: 20px;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.18) inset,
            0 6px 24px rgba(255,107,53,0.40);
          transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
        }
        .lp-submit::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .lp-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.18) inset, 0 12px 36px rgba(255,107,53,0.45);
        }
        .lp-submit:hover:not(:disabled)::before { transform: translateX(100%); }
        .lp-submit:active:not(:disabled) { transform: translateY(0) scale(0.98); }
        .lp-submit:disabled { opacity: 0.65; cursor: not-allowed; }

        /* Register link */
        .lp-register {
          font-size: 13px;
          color: #aaa;
          text-align: center;
          margin-bottom: 24px;
        }
        .lp-register a {
          color: #FF6B35;
          text-decoration: none;
          font-weight: 600;
        }
        .lp-register a:hover { text-decoration: underline; }

        /* Trust row */
        .lp-trust {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .lp-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10.5px;
          font-weight: 500;
          color: #bbb;
          background: #f7f7f7;
          border-radius: 100px;
          padding: 4px 10px;
          border: 1px solid rgba(0,0,0,0.05);
        }

        /* Spinner */
        @keyframes lp-spin { to { transform: rotate(360deg); } }
        .lp-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: lp-spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        /* ─── Responsive ─── */
        @media (max-width: 500px) {
          .login-page { padding-top: 88px; }
          .lp-card { padding: 36px 24px 28px; border-radius: 20px; }
          .lp-logo-ring { width: 60px; height: 60px; border-radius: 18px; }
          .lp-brand-title { font-size: 20px; }
        }
      `}</style>

      <div className="login-page">
        {/* Decorative orbs */}
        <div className="lp-orb" style={{ width: 500, height: 500, top: -120, right: -100, background: "rgba(255,107,53,0.11)" }} />
        <div className="lp-orb" style={{ width: 360, height: 360, bottom: -100, left: -80, background: "rgba(255,162,127,0.09)" }} />
        <div className="lp-orb" style={{ width: 220, height: 220, top: "40%", left: "15%", background: "rgba(255,107,53,0.05)" }} />

        <div className="lp-card">

          {/* ── Header ── */}
          <div className="lp-header">

            {/* Back link */}
            <Link href="/" className="lp-back">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              Back to website
            </Link>

            {/* Brand */}
            <div className="lp-brand">
              <div className="lp-logo-ring">
                <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
                  <ellipse cx="24" cy="30" rx="15" ry="5" fill="rgba(255,255,255,0.25)"/>
                  <path d="M9 26c0 7.18 7.16 13 15 13s15-5.82 15-13H9z" fill="white" fillOpacity="0.92"/>
                  <path d="M18 20c0 0 2-3 0-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.85"/>
                  <path d="M24 18c0 0 2-3 0-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.85"/>
                  <path d="M30 20c0 0 2-3 0-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.85"/>
                </svg>
              </div>
              <span className="lp-brand-name">Mealiez</span>
              <p className="lp-brand-title">Welcome Back 👋</p>
              <p className="lp-brand-sub">Sign in to your mess management dashboard</p>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="lp-divider">
            <div className="lp-divider-line" />
            <span className="lp-divider-text">Sign in with email</span>
            <div className="lp-divider-line" />
          </div>

          {/* ── Form ── */}
          <form className="lp-form" onSubmit={handleSubmit} noValidate>

            {/* Email */}
            <div className="lp-field">
              <label className="lp-label" htmlFor="lp-email">Email Address</label>
              <div className="lp-input-wrap">
                <span className="lp-input-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <input
                  id="lp-email"
                  type="email"
                  autoComplete="email"
                  placeholder="admin@institution.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="lp-input"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="lp-field">
              <div className="lp-pass-row">
                <label className="lp-label" htmlFor="lp-password" style={{ margin: 0 }}>Password</label>
                <a href="#" className="lp-forgot">Forgot password?</a>
              </div>
              <div className="lp-input-wrap">
                <span className="lp-input-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  id="lp-password"
                  type={showPass ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="lp-input"
                  style={{ paddingRight: 42 }}
                  required
                />
                <button
                  type="button"
                  className="lp-pass-toggle"
                  onClick={() => setShowPass(!showPass)}
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Role */}
            <div className="lp-field">
              <label className="lp-label" htmlFor="lp-role">Login As</label>
              <div className="lp-input-wrap">
                <span className="lp-input-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <select
                  id="lp-role"
                  className="lp-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  {roleOptions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="lp-error">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {error}
              </div>
            )}

            {/* Submit */}
            <button type="submit" className="lp-submit" disabled={loading}>
              {loading ? (
                <><span className="lp-spinner" /> Signing in…</>
              ) : (
                <>
                  Sign In
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </>
              )}
            </button>

            {/* Register */}
            <p className="lp-register">
              Don't have an account?{" "}
              <a href="/book-demo">Book a demo →</a>
            </p>

            {/* Trust badges */}
            <div className="lp-trust">
              {[
                { icon: "🔐", text: "SSL Encrypted" },
                { icon: "🇮🇳", text: "India Hosted" },
                { icon: "✅", text: "99.9% Uptime" },
              ].map((b) => (
                <span key={b.text} className="lp-badge">{b.icon} {b.text}</span>
              ))}
            </div>

          </form>

        </div>
      </div>
    </>
  );
}
