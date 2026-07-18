"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const companySizes = [
  "1–50 members",
  "51–200 members",
  "201–500 members",
  "501–1000 members",
  "1000+ members",
];

const serviceNames = [
  "Hostel Mess",
  "College Canteen",
  "Industrial Canteen",
  "Corporate Cafeteria",
  "Cloud Kitchen",
  "Subscription Mess",
];

export default function BookDemoPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companySize: "",
    service: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.firstName || !form.email) {
      setError("Please fill in your first name and work email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        /* Base: Inria Serif for all text on this page */
        .bd, .bd * {
          font-family: 'Inria Serif', Georgia, serif;
        }
        /* Exception: form controls stay in Plus Jakarta Sans for legibility */
        .bd input,
        .bd select,
        .bd .f-label,
        .bd .enterprise-pill,
        .bd .privacy-note,
        .bd .trust-item {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .bd {
          font-family: 'Inria Serif', Georgia, serif;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
          background:
            radial-gradient(ellipse 70% 60% at 90% 20%, rgba(255,107,53,0.13) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(255,162,127,0.09) 0%, transparent 50%),
            #fdf2ea;
          position: relative;
          overflow: hidden;
        }

        .bd-inner {
          width: 100%;
          max-width: 980px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ── LEFT ── */
        .bd-left { display: flex; flex-direction: column; gap: 0; }

        .enterprise-pill {
          display: inline-flex;
          align-items: center;
          background: rgba(255,107,53,0.12);
          border: 1px solid rgba(255,107,53,0.2);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 800;
          color: #FF6B35;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
          width: fit-content;
        }

        .bd-headline {
          font-family: 'Inria Serif', Georgia, serif;
          font-size: clamp(34px, 4.2vw, 50px);
          font-weight: 700;
          font-style: normal;
          color: #1a1a1a;
          line-height: 1.18;
          letter-spacing: -0.01em;
          margin: 0 0 20px;
        }

        .bd-sub {
          font-family: 'Inria Serif', Georgia, serif;
          font-size: 16.5px;
          font-weight: 400;
          color: #666;
          line-height: 1.82;
          margin: 0 0 32px;
          max-width: 360px;
        }

        .trust-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .trust-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #555;
        }
        .trust-dot {
          width: 22px; height: 22px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 11px;
        }

        /* ── RIGHT card ── */
        .bd-card {
          background: #fff;
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow:
            0 24px 64px rgba(0,0,0,0.07),
            0 4px 16px rgba(0,0,0,0.04),
            inset 0 1px 0 rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .card-title {
          font-family: 'Inria Serif', Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.01em;
          margin: 0 0 8px;
          line-height: 1.2;
        }
        .card-sub {
          font-family: 'Inria Serif', Georgia, serif;
          font-size: 15px;
          font-weight: 400;
          font-style: italic;
          color: #888;
          line-height: 1.7;
          margin: 0 0 28px;
          max-width: 320px;
        }

        /* Form grid */
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        .form-field { display: flex; flex-direction: column; gap: 6px; }
        .form-field-full { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }

        .f-label {
          font-size: 12px;
          font-weight: 600;
          color: #666;
          letter-spacing: 0.02em;
        }

        .f-input, .f-select {
          width: 100%;
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 14px;
          color: #1a1a1a;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          background: #fafafa;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }
        .f-input:focus, .f-select:focus {
          border-color: #FF6B35;
          box-shadow: 0 0 0 3px rgba(255,107,53,0.1);
          background: #fff;
        }
        .f-input::placeholder { color: #c0b8b0; }

        .f-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 14px;
          padding-right: 36px;
          cursor: pointer;
          color: #aaa;
        }
        .f-select.has-value { color: #1a1a1a; }

        /* Submit button */
        .btn-request {
          width: 100%;
          background: linear-gradient(135deg, #FF6B35, #FF875C);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 14px;
          font-size: 14px;
          font-weight: 700;
          font-family: inherit;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 20px;
          margin-bottom: 14px;
          box-shadow: 0 6px 20px rgba(255,107,53,0.36);
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-request:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255,107,53,0.44);
        }
        .btn-request:disabled { opacity: 0.65; cursor: not-allowed; }

        .privacy-note {
          text-align: center;
          font-size: 12px;
          color: #bbb;
          line-height: 1.5;
        }
        .privacy-note a { color: #FF6B35; text-decoration: none; }
        .privacy-note a:hover { text-decoration: underline; }

        /* Error */
        .form-error {
          background: rgba(239,68,68,0.06);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: 9px;
          padding: 10px 14px;
          font-size: 13px;
          color: #c0392b;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          line-height: 1.5;
        }

        /* Spinner */
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        /* Success */
        .success-wrap {
          text-align: center;
          padding: 16px 0;
        }
        .success-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 6px 20px rgba(34,197,94,0.3);
        }

        @media (max-width: 720px) {
          .bd-inner { grid-template-columns: 1fr; gap: 40px; }
          .bd-left { text-align: center; align-items: center; }
          .bd-sub { max-width: 100%; }
          .trust-row { align-items: center; }
        }
      `}</style>

      <div className="bd">
        <div className="bd-inner">

          {/* ── LEFT — Marketing copy ── */}
          <div className="bd-left">
            <span className="enterprise-pill">Enterprise Grade</span>

            <h1 className="bd-headline">
              Powering Smarter<br />Food Management
            </h1>

            <p className="bd-sub">
              Streamline your high-output food operations with frictionless precision. See how Mealiez transforms complex logistics into intelligent workflows.
            </p>

            <div className="trust-row">
              <span className="trust-item">
                <span className="trust-dot" style={{ background: "rgba(255,107,53,0.12)" }}>🛡️</span>
                FSSAI Verified
              </span>
              <span className="trust-item">
                <span className="trust-dot" style={{ background: "rgba(34,197,94,0.12)" }}>✅</span>
                GDPR Compliant
              </span>
              <span className="trust-item">
                <span className="trust-dot" style={{ background: "rgba(239,68,68,0.10)" }}>🔒</span>
                End-to-End Encryption
              </span>
            </div>
          </div>

          {/* ── RIGHT — Form card ── */}
          <div className="bd-card">
            {submitted ? (
              /* ── Success state ── */
              <div className="success-wrap">
                <div className="success-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 10, letterSpacing: "-0.02em" }}>
                  Demo request sent! 🎉
                </h2>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.72, marginBottom: 28, maxWidth: 280, margin: "0 auto 28px" }}>
                  Our team will reach out within 24 hours to schedule your personalised demo.
                </p>
                <Link href="/" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.2)",
                  borderRadius: 10, padding: "11px 22px",
                  fontSize: 13.5, fontWeight: 700, color: "#FF6B35", textDecoration: "none",
                }}>
                  Back to home
                </Link>
              </div>
            ) : (
              <>
                <h2 className="card-title">Book a Demo</h2>
                <p className="card-sub">
                  Fill out the details below and our logistics experts will reach out shortly.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Row 1: First + Last name */}
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="f-label" htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Rohit"
                        className="f-input"
                        value={form.firstName}
                        onChange={set("firstName")}
                        autoComplete="given-name"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label className="f-label" htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Kanase"
                        className="f-input"
                        value={form.lastName}
                        onChange={set("lastName")}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  {/* Row 2: Work email */}
                  <div className="form-field-full">
                    <label className="f-label" htmlFor="email">Work Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="rohitkanase1221@company.com"
                      className="f-input"
                      value={form.email}
                      onChange={set("email")}
                      autoComplete="work email"
                      required
                    />
                  </div>

                  {/* Row 3: Company size + Service */}
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="f-label" htmlFor="companySize">Company Size</label>
                      <select
                        id="companySize"
                        className={`f-select${form.companySize ? " has-value" : ""}`}
                        value={form.companySize}
                        onChange={set("companySize")}
                      >
                        <option value="" disabled>Select size</option>
                        {companySizes.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="f-label" htmlFor="service">Service Name</label>
                      <select
                        id="service"
                        className={`f-select${form.service ? " has-value" : ""}`}
                        value={form.service}
                        onChange={set("service")}
                      >
                        <option value="" disabled>Select Service</option>
                        {serviceNames.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="form-error">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button type="submit" className="btn-request" disabled={loading}>
                    {loading ? (
                      <><span className="spinner" /> Submitting…</>
                    ) : (
                      <>Request Demo →</>
                    )}
                  </button>

                  <p className="privacy-note">
                    By submitting this form, you agree to our{" "}
                    <Link href="/security">Privacy Policy</Link>.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
