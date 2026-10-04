"use client";

import React, { useState } from "react";
import Link from "next/link";
import BorderGlow from "@/components/ui/border-glow";

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
    }, 1200);
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .bd {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
          background:
            radial-gradient(ellipse 70% 60% at 90% 20%, rgba(234,88,12,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(249,115,22,0.05) 0%, transparent 50%),
            #F9FAFB;
          position: relative;
          overflow: hidden;
        }

        .bd-inner {
          width: 100%;
          max-width: 980px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ── LEFT ── */
        .bd-left { display: flex; flex-direction: column; gap: 0; }

        .enterprise-pill {
          display: inline-flex;
          align-items: center;
          background: rgba(234,88,12,0.08);
          border: 1px solid rgba(234,88,12,0.2);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 800;
          color: #EA580C;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
          width: fit-content;
        }

        .bd-headline {
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          font-size: clamp(34px, 4.2vw, 50px);
          font-weight: 900;
          text-transform: uppercase;
          color: #111827;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
        }

        .bd-sub {
          font-size: 15.5px;
          font-weight: 400;
          color: #4B5563;
          line-height: 1.75;
          margin: 0 0 28px;
          max-width: 380px;
        }

        .trust-row {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .trust-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          font-weight: 600;
          color: #374151;
        }
        .trust-dot {
          width: 26px; height: 26px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 13px;
        }

        /* ── RIGHT card ── */
        .bd-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03);
          border: 1px solid #E5E7EB;
        }

        .card-title {
          font-family: 'Barlow Condensed', system-ui, sans-serif;
          font-size: 28px;
          font-weight: 900;
          text-transform: uppercase;
          color: #111827;
          margin: 0 0 6px;
          line-height: 1.2;
        }
        .card-sub {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0 0 24px;
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
          font-size: 12.5px;
          font-weight: 700;
          color: #374151;
          letter-spacing: 0.02em;
        }

        .f-input, .f-select {
          width: 100%;
          border: 1.5px solid #E5E7EB;
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 14px;
          color: #111827;
          background: #F9FAFB;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }
        .f-input:focus, .f-select:focus {
          border-color: #EA580C;
          box-shadow: 0 0 0 3px rgba(234,88,12,0.12);
          background: #ffffff;
        }
        .f-input::placeholder { color: #9CA3AF; }

        .f-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 14px;
          padding-right: 36px;
          cursor: pointer;
          color: #6B7280;
        }
        .f-select.has-value { color: #111827; }

        /* Submit button */
        .btn-request {
          width: 100%;
          background: linear-gradient(135deg, #EA580C, #F97316);
          color: #ffffff;
          border: none;
          border-radius: 10px;
          padding: 14px;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 16px;
          margin-bottom: 12px;
          box-shadow: 0 4px 16px rgba(234,88,12,0.3);
          transition: opacity 0.18s, transform 0.18s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-request:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(234,88,12,0.38);
        }
        .btn-request:disabled { opacity: 0.65; cursor: not-allowed; }

        .privacy-note {
          text-align: center;
          font-size: 12px;
          color: #6B7280;
          line-height: 1.5;
        }
        .privacy-note a { color: #EA580C; text-decoration: none; font-weight: 600; }
        .privacy-note a:hover { text-decoration: underline; }

        /* Error */
        .form-error {
          background: rgba(239,68,68,0.06);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: 9px;
          padding: 10px 14px;
          font-size: 13px;
          color: #dc2626;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Spinner */
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* Success */
        .success-wrap {
          text-align: center;
          padding: 20px 0;
        }
        .success-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10B981, #059669);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          box-shadow: 0 6px 20px rgba(16,185,129,0.3);
        }

        @media (max-width: 768px) {
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
            <span className="enterprise-pill">Guided Walkthrough</span>

            <h1 className="bd-headline">
              Powering Smarter<br />Mess Management
            </h1>

            <p className="bd-sub">
              See how Mealiez stops food wastage, automates monthly student billing, and eliminates chaotic paper registers. We will tailor the demo to your specific dining facility.
            </p>

            <div className="trust-row">
              <span className="trust-item">
                <span className="trust-dot" style={{ background: "rgba(234,88,12,0.1)" }}>📱</span>
                Zero Proprietary Hardware Required
              </span>
              <span className="trust-item">
                <span className="trust-dot" style={{ background: "rgba(16,185,129,0.1)" }}>⚡</span>
                Live Setup & Onboarding in 10 Minutes
              </span>
              <span className="trust-item">
                <span className="trust-dot" style={{ background: "rgba(59,130,246,0.1)" }}>🔒</span>
                Secure Role-Based Student & Staff Access
              </span>
            </div>
          </div>

          {/* ── RIGHT — Form card ── */}
          <BorderGlow className="bd-card" backgroundColor="#ffffff" borderRadius={24}>
            {submitted ? (
              <div className="success-wrap">
                <div className="success-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 900, color: "#111827", marginBottom: 8 }}>
                  Demo Request Received! 🎉
                </h2>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, marginBottom: 24, maxWidth: 300, margin: "0 auto 24px" }}>
                  Our team will reach out via WhatsApp or email to schedule your personalized 20-minute walkthrough.
                </p>
                <Link href="/" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "#FFF7ED", border: "1.5px solid #FED7AA",
                  borderRadius: 10, padding: "11px 22px",
                  fontSize: 13.5, fontWeight: 700, color: "#EA580C", textDecoration: "none",
                }}>
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <h2 className="card-title">Book a Demo</h2>
                <p className="card-sub">
                  Fill out the details below and we will show you how Mealiez works for your mess.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Row 1: First + Last name */}
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="f-label" htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Rahul"
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
                        placeholder="Sharma"
                        className="f-input"
                        value={form.lastName}
                        onChange={set("lastName")}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  {/* Row 2: Work email */}
                  <div className="form-field-full">
                    <label className="f-label" htmlFor="email">Work Email / Phone</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="rahul@hostelmess.in"
                      className="f-input"
                      value={form.email}
                      onChange={set("email")}
                      autoComplete="email"
                      required
                    />
                  </div>

                  {/* Row 3: Company size + Service */}
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="f-label" htmlFor="companySize">Diner Capacity</label>
                      <select
                        id="companySize"
                        className={`f-select${form.companySize ? " has-value" : ""}`}
                        value={form.companySize}
                        onChange={set("companySize")}
                      >
                        <option value="" disabled>Select diner count</option>
                        {companySizes.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="f-label" htmlFor="service">Mess Type</label>
                      <select
                        id="service"
                        className={`f-select${form.service ? " has-value" : ""}`}
                        value={form.service}
                        onChange={set("service")}
                      >
                        <option value="" disabled>Select mess type</option>
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
                      <><span className="spinner" /> Scheduling…</>
                    ) : (
                      <>Schedule My Demo →</>
                    )}
                  </button>

                  <p className="privacy-note">
                    By submitting this form, you agree to our{" "}
                    <Link href="/security">Privacy Policy</Link>.
                  </p>
                </form>
              </>
            )}
          </BorderGlow>

        </div>
      </div>
    </>
  );
}
