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
        setError("Incorrect email or password. Try admin@mealiez.com / mealiez123");
      }
    }, 1200);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Page shell ── */
        .lp {
          font-family: 'Inter', system-ui, sans-serif;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 20px;
          background:
            radial-gradient(ellipse 70% 60% at 85% 5%,  rgba(255,107,53,0.16) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 5%  90%, rgba(255,162,127,0.11) 0%, transparent 55%),
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
          will-change: transform;
        }

        /* ── Outer card ── */
        .outer-card {
          width: 100%;
          max-width: 920px;
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(32px) saturate(1.8);
          -webkit-backdrop-filter: blur(32px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.85);
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
          min-height: 580px;
        }

        /* ── Left panel ── */
        .left-panel {
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          background: transparent;
        }

        .left-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 48px;
        }

        .left-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .left-headline {
          font-size: clamp(26px, 2.6vw, 34px);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.22;
          letter-spacing: -0.03em;
          margin-bottom: 14px;
        }

        .left-sub {
          font-size: 13.5px;
          color: #777;
          line-height: 1.76;
          max-width: 270px;
          margin-bottom: 28px;
        }

        .chips-row {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,107,53,0.07);
          border: 1px solid rgba(255,107,53,0.15);
          border-radius: 100px;
          padding: 4px 11px;
          font-size: 11px;
          font-weight: 700;
          color: #FF6B35;
        }
        .chip-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #FF6B35;
          flex-shrink: 0;
        }

        .btn-contact {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(0,0,0,0.09);
          border-radius: 10px;
          padding: 11px 20px;
          font-size: 13px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.18s, background 0.18s, transform 0.18s, box-shadow 0.18s;
          width: fit-content;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .btn-contact:hover {
          border-color: rgba(255,107,53,0.32);
          background: rgba(255,255,255,0.92);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.07);
        }

        .left-footer {
          margin-top: 40px;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: #bbb;
          text-decoration: none;
          transition: color 0.15s;
        }
        .back-link:hover { color: #888; }

        /* ── Right panel ── */
        .right-panel {
          background: #ffffff;
          border-left: 1px solid rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 52px 48px;
          position: relative;
          overflow: hidden;
        }

        /* Soft orange glow top-right */
        .right-panel::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 260px; height: 260px;
          background: radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Inner content wrapper — max-width so form never stretches too wide */
        .form-shell {
          width: 100%;
          max-width: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* Logo mark */
        .logo-mark {
          width: 60px; height: 60px;
          background: linear-gradient(135deg, #FF6B35, #FF875C);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 28px rgba(255,107,53,0.36), inset 0 1px 0 rgba(255,255,255,0.22);
          margin-bottom: 18px;
          flex-shrink: 0;
        }

        .welcome-title {
          font-size: 21px;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          margin-bottom: 5px;
          text-align: center;
        }
        .welcome-sub {
          font-size: 13px;
          color: #aaa;
          margin-bottom: 28px;
          text-align: center;
        }

        /* Form — full width inside shell */
        .form { width: 100%; }

        .field { margin-bottom: 16px; }

        .field-label {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          color: #555;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .field-input {
          width: 100%;
          border: 1.5px solid rgba(0,0,0,0.09);
          border-radius: 10px;
          padding: 11px 13px;
          font-size: 14px;
          color: #1a1a1a;
          font-family: 'Inter', system-ui, sans-serif;
          outline: none;
          background: #f9f9f9;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }
        .field-input:focus {
          border-color: #FF6B35;
          box-shadow: 0 0 0 3px rgba(255,107,53,0.11);
          background: #fff;
        }
        .field-input::placeholder { color: #c0c0c0; }

        /* Password wrapper */
        .pass-wrap { position: relative; }
        .pass-toggle {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #bbb;
          display: flex;
          align-items: center;
          padding: 0;
          line-height: 0;
          transition: color 0.15s;
        }
        .pass-toggle:hover { color: #FF6B35; }

        /* Password label row */
        .pass-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 7px;
        }
        .forgot-link {
          font-size: 11px;
          color: #FF6B35;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.15s;
        }
        .forgot-link:hover { opacity: 0.72; }

        /* Role select */
        .field-select {
          width: 100%;
          border: 1.5px solid rgba(0,0,0,0.09);
          border-radius: 10px;
          padding: 11px 36px 11px 13px;
          font-size: 14px;
          color: #1a1a1a;
          font-family: 'Inter', system-ui, sans-serif;
          outline: none;
          background: #f9f9f9;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          cursor: pointer;
          transition: border-color 0.18s, box-shadow 0.18s, background-color 0.18s;
        }
        .field-select:focus {
          border-color: #FF6B35;
          box-shadow: 0 0 0 3px rgba(255,107,53,0.11);
          background-color: #fff;
        }

        /* Error box */
        .err-box {
          background: rgba(239,68,68,0.06);
          border: 1px solid rgba(239,68,68,0.16);
          border-radius: 9px;
          padding: 10px 13px;
          font-size: 12.5px;
          color: #c0392b;
          margin-bottom: 12px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,0.06);
          margin: 6px 0 16px;
        }

        /* Submit button */
        .btn-signin {
          width: 100%;
          background: linear-gradient(135deg, #FF6B35, #FF875C);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 13px;
          font-size: 14.5px;
          font-weight: 700;
          font-family: 'Inter', system-ui, sans-serif;
          cursor: pointer;
          margin-bottom: 16px;
          box-shadow: 0 6px 22px rgba(255,107,53,0.36);
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
          background: linear-gradient(135deg, rgba(255,255,255,0.14), transparent);
          opacity: 0;
          transition: opacity 0.18s;
        }
        .btn-signin:hover:not(:disabled) {
          opacity: 0.91;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255,107,53,0.40);
        }
        .btn-signin:hover:not(:disabled)::before { opacity: 1; }
        .btn-signin:disabled { opacity: 0.65; cursor: not-allowed; }

        .register-link {
          font-size: 12px;
          color: #aaa;
          text-align: center;
          margin-bottom: 20px;
        }
        .register-link a {
          color: #FF6B35;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.15s;
        }
        .register-link a:hover { opacity: 0.75; }

        /* Trust badges */
        .trust-row {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 600;
          color: #bbb;
          background: #f5f5f5;
          border-radius: 100px;
          padding: 3px 9px;
        }

        /* Spinner */
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 15px; height: 15px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 680px) {
          .outer-card { grid-template-columns: 1fr; min-height: unset; }
          .left-panel { display: none; }
          .right-panel { padding: 44px 28px; }
          .form-shell { max-width: 100%; }
        }
      `}</style>

      <div className="lp">
        {/* Ambient blobs */}
        <div className="blob" style={{ width: 460, height: 460, top: -100, right: -80, background: "rgba(255,107,53,0.11)" }} />
        <div className="blob" style={{ width: 340, height: 340, bottom: -80, left: -60, background: "rgba(255,162,127,0.09)" }} />

        <BorderGlow className="outer-card" backgroundColor="#ffffff" borderRadius={28}>

          {/* ══ LEFT PANEL ══ */}
          <div className="left-panel">
            {/* Brand */}
            <div className="left-brand">
              <div style={{
                width: 34, height: 34,
                background: "linear-gradient(135deg,#FF6B35,#FF875C)",
                borderRadius: 9,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 14px rgba(255,107,53,0.32)",
                flexShrink: 0,
              }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                </svg>
              </div>
              <span style={{ fontSize: 17, fontWeight: 800, color: "#FF6B35", letterSpacing: "-0.025em" }}>Mealiez</span>
            </div>

            {/* Body copy — vertically centered in the remaining space */}
            <div className="left-body">
              <h1 className="left-headline">
                Ready to streamline<br />your operations?
              </h1>
              <p className="left-sub">
                Join hundreds of institutions using Mealiez to manage food services effortlessly.
              </p>

              <div className="chips-row">
                {["500+ operators", "10L+ meals/mo", "99.9% uptime"].map((s) => (
                  <span key={s} className="chip">
                    <span className="chip-dot" />
                    {s}
                  </span>
                ))}
              </div>

              <Link href="/company#contact" className="btn-contact">
                Contact Sales
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </Link>
            </div>

            {/* Back link pinned to bottom */}
            <div className="left-footer">
              <Link href="/" className="back-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                Back to website
              </Link>
            </div>
          </div>

          {/* ══ RIGHT PANEL ══ */}
          <div className="right-panel">
            <div className="form-shell">

              {/* Logo mark */}
              <div className="logo-mark">
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
                  <ellipse cx="24" cy="30" rx="16" ry="5" fill="rgba(255,255,255,0.28)"/>
                  <path d="M8 26c0 7.18 7.16 13 16 13s16-5.82 16-13H8z" fill="white" fillOpacity="0.9"/>
                  <path d="M8 26h32" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
                  <path d="M18 20c0 0 2-3 0-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.82"/>
                  <path d="M24 18c0 0 2-3 0-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.82"/>
                  <path d="M30 20c0 0 2-3 0-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.82"/>
                </svg>
              </div>

              <p className="welcome-title">Welcome Back</p>
              <p className="welcome-sub">Sign in to your Mealiez account</p>

              <form className="form" onSubmit={handleSubmit} noValidate>

                {/* Email */}
                <div className="field">
                  <label className="field-label" htmlFor="lp-email">Email Address</label>
                  <input
                    id="lp-email"
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
                  <div className="pass-label-row">
                    <label className="field-label" htmlFor="lp-password" style={{ margin: 0 }}>Password</label>
                    <a href="#" className="forgot-link">Forgot password?</a>
                  </div>
                  <div className="pass-wrap">
                    <input
                      id="lp-password"
                      type={showPass ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="field-input"
                      style={{ paddingRight: 42 }}
                      required
                    />
                    <button
                      type="button"
                      className="pass-toggle"
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
                <div className="field">
                  <label className="field-label" htmlFor="lp-role">Login As</label>
                  <select
                    id="lp-role"
                    className="field-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    {roleOptions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* Error */}
                {error && (
                  <div className="err-box">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {error}
                  </div>
                )}

                <div className="divider" />

                {/* Submit */}
                <button type="submit" className="btn-signin" disabled={loading}>
                  {loading ? (
                    <><span className="spinner" />Signing in…</>
                  ) : (
                    <>Sign In <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg></>
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

        </BorderGlow>
      </div>
    </>
  );
}
