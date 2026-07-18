"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const orgTypes = [
  { value: "hostel", label: "Hostel Mess", icon: "🏠" },
  { value: "college", label: "College Canteen", icon: "🎓" },
  { value: "industrial", label: "Industrial Canteen", icon: "🏭" },
  { value: "corporate", label: "Corporate Cafeteria", icon: "🏢" },
  { value: "cloud", label: "Cloud Kitchen", icon: "☁️" },
  { value: "subscription", label: "Subscription Mess", icon: "🔁" },
  { value: "other", label: "Other", icon: "🍽️" },
];

const memberRanges = [
  { value: "<100", label: "< 100" },
  { value: "100-500", label: "100 – 500" },
  { value: "500-2000", label: "500 – 2,000" },
  { value: "2000+", label: "2,000+" },
];

const challengeOptions = [
  { value: "wastage", label: "High Food Wastage", icon: "♻️" },
  { value: "billing", label: "Manual Billing / Ledgers", icon: "📋" },
  { value: "attendance", label: "Attendance Discrepancies", icon: "✅" },
  { value: "inventory", label: "Inventory Theft / Loss", icon: "📦" },
  { value: "ux", label: "Poor Member App Experience", icon: "📱" },
  { value: "reports", label: "No Reporting or Insights", icon: "📊" },
];

type FormState = {
  orgType: string;
  memberRange: string;
  challenges: string[];
  name: string;
  email: string;
  phone: string;
  org: string;
  designation: string;
};

export default function BookDemoPage() {
  useReveal();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    orgType: "",
    memberRange: "",
    challenges: [],
    name: "",
    email: "",
    phone: "",
    org: "",
    designation: "",
  });

  const toggleChallenge = (val: string) => {
    setForm(f => ({
      ...f,
      challenges: f.challenges.includes(val)
        ? f.challenges.filter(c => c !== val)
        : [...f.challenges, val],
    }));
  };

  const canNext = () => {
    if (step === 1) return !!form.orgType;
    if (step === 2) return !!form.memberRange;
    if (step === 3) return form.challenges.length > 0;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .rv   { opacity:0; transform:translateY(26px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .rv.in { opacity:1; transform:none; }
        .bd { font-family:'Inter',system-ui,sans-serif; color:#1a1a1a; }
        .w  { max-width:640px; margin:0 auto; padding:0 40px; }
        .tile{background:#fff;border:2px solid rgba(0,0,0,.08);border-radius:16px;padding:18px 20px;cursor:pointer;display:flex;align-items:center;gap:14px;transition:border-color .2s,background .2s,transform .2s;text-align:left;font-family:'Inter',system-ui,sans-serif;}
        .tile:hover{border-color:rgba(255,107,53,.3);background:#fff3ee;transform:translateY(-2px);}
        .tile.selected{border-color:#FF6B35;background:#fff3ee;box-shadow:0 0 0 3px rgba(255,107,53,.12);}
        .chip{background:#fff;border:2px solid rgba(0,0,0,.08);border-radius:100px;padding:10px 22px;cursor:pointer;font-size:14px;font-weight:600;color:#444;transition:border-color .2s,background .2s;white-space:nowrap;font-family:'Inter',system-ui,sans-serif;}
        .chip:hover{border-color:rgba(255,107,53,.3);color:#FF6B35;background:#fff3ee;}
        .chip.selected{border-color:#FF6B35;background:#fff3ee;color:#FF6B35;}
        .input{width:100%;border:1.5px solid rgba(0,0,0,.12);border-radius:12px;padding:13px 16px;font-size:14px;outline:none;transition:border-color .2s,box-shadow .2s;font-family:'Inter',system-ui,sans-serif;box-sizing:border-box;}
        .input:focus{border-color:#FF6B35;box-shadow:0 0 0 3px rgba(255,107,53,.1);}
        .btn-ora{background:linear-gradient(135deg,#FF6B35,#FF875C);color:#fff;border:none;border-radius:12px;padding:16px 32px;font-size:15px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 6px 22px rgba(255,107,53,.36);transition:transform .2s,opacity .2s;font-family:'Inter',system-ui,sans-serif;width:100%;}
        .btn-ora:hover{transform:translateY(-2px);opacity:.92;}
        .btn-ora:disabled{opacity:0.4;cursor:not-allowed;transform:none;}
        .step-dot{width:10px;height:10px;border-radius:50%;background:rgba(0,0,0,0.12);transition:background .3s,transform .3s;}
        .step-dot.active{background:#FF6B35;transform:scale(1.3);}
        .step-dot.done{background:#22c55e;}
        .label{font-size:13px;font-weight:600;color:#555;margin-bottom:8px;display:block;}
      `}</style>

      <div className="bd">

        {/* Hero */}
        <section style={{ background: "#fef6f0", padding: "64px 0 56px", textAlign: "center" }}>
          <div className="w">
            <h1 className="rv" style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 16 }}>
              Book Your<br />
              <span style={{ color: "#FF6B35" }}>Free Demo</span>
            </h1>
            <p className="rv" style={{ fontSize: 16, color: "#666", lineHeight: 1.75, maxWidth: 440, margin: "0 auto" }}>
              30 minutes, tailored to your exact operation. Zero pressure, just value.
            </p>
          </div>
        </section>

        {/* Form */}
        <section style={{ background: "#fff", padding: "60px 0 80px" }}>
          <div className="w">
            {!submitted ? (
              <div style={{ background: "#fff", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 24, padding: "40px", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>

                {/* Progress */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36, justifyContent: "center" }}>
                  {[1, 2, 3, 4].map((s) => (
                    <React.Fragment key={s}>
                      <div className={`step-dot${step > s ? " done" : step === s ? " active" : ""}`} />
                      {s < 4 && <div style={{ flex: 1, maxWidth: 40, height: 1, background: step > s ? "#22c55e" : "rgba(0,0,0,0.1)", borderRadius: 1, transition: "background .3s" }} />}
                    </React.Fragment>
                  ))}
                </div>

                {/* Step 1: Org Type */}
                {step === 1 && (
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 6 }}>What type of operation do you run?</h2>
                    <p style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>Step 1 of 4 — We'll tailor the demo to your specific context.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {orgTypes.map((o) => (
                        <button
                          key={o.value}
                          onClick={() => setForm(f => ({ ...f, orgType: o.value }))}
                          className={`tile${form.orgType === o.value ? " selected" : ""}`}
                        >
                          <span style={{ fontSize: 24 }}>{o.icon}</span>
                          <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>{o.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Member Range */}
                {step === 2 && (
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 6 }}>How many members or customers do you serve?</h2>
                    <p style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>Step 2 of 4 — This helps us show you the right scale features.</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                      {memberRanges.map((r) => (
                        <button
                          key={r.value}
                          onClick={() => setForm(f => ({ ...f, memberRange: r.value }))}
                          className={`chip${form.memberRange === r.value ? " selected" : ""}`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Challenges */}
                {step === 3 && (
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 6 }}>What are your biggest operational challenges?</h2>
                    <p style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>Step 3 of 4 — Select all that apply. We'll focus the demo here.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {challengeOptions.map((c) => (
                        <button
                          key={c.value}
                          onClick={() => toggleChallenge(c.value)}
                          className={`tile${form.challenges.includes(c.value) ? " selected" : ""}`}
                        >
                          <span style={{ fontSize: 22 }}>{c.icon}</span>
                          <span style={{ fontSize: 13.5, fontWeight: 600, color: "#1a1a1a" }}>{c.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <form onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 6 }}>Your contact details</h2>
                    <p style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>Step 4 of 4 — Our team will reach out within 4 business hours.</p>
                    <div style={{ display: "grid", gap: 16 }}>
                      {[
                        { field: "name", label: "Full Name", placeholder: "Your full name", type: "text" },
                        { field: "email", label: "Work Email", placeholder: "you@company.com", type: "email" },
                        { field: "phone", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel" },
                        { field: "org", label: "Organisation / Business Name", placeholder: "Name of your mess, institution, or company", type: "text" },
                        { field: "designation", label: "Your Designation", placeholder: "e.g. Owner, Warden, Facility Manager", type: "text" },
                      ].map(({ field, label, placeholder, type }) => (
                        <div key={field}>
                          <label className="label">{label}</label>
                          <input
                            type={type}
                            placeholder={placeholder}
                            value={form[field as keyof FormState] as string}
                            onChange={(e) => setForm(f => ({ ...f, [field]: e.target.value }))}
                            required
                            className="input"
                          />
                        </div>
                      ))}
                      <button type="submit" className="btn-ora" style={{ marginTop: 8 }}>
                        Request My Demo
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                      </button>
                      <p style={{ fontSize: 11, color: "#bbb", textAlign: "center" }}>
                        By submitting, you agree to our privacy policy. No spam, ever.
                      </p>
                    </div>
                  </form>
                )}

                {/* Nav buttons */}
                {step < 4 && (
                  <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
                    {step > 1 && (
                      <button onClick={() => setStep(s => s - 1)} style={{ background: "none", border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: 12, padding: "14px 24px", fontSize: 14, fontWeight: 600, color: "#555", cursor: "pointer", fontFamily: "'Inter',system-ui,sans-serif" }}>
                        ← Back
                      </button>
                    )}
                    <button
                      onClick={() => setStep(s => s + 1)}
                      disabled={!canNext()}
                      className="btn-ora"
                      style={{ flex: 1 }}
                    >
                      Continue →
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Confirmation */
              <div style={{ background: "#fff", border: "1.5px solid rgba(34,197,94,0.3)", borderRadius: 24, padding: "56px 40px", textAlign: "center", boxShadow: "0 8px 40px rgba(34,197,94,0.06)" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: "#1a1a1a", marginBottom: 12 }}>Demo Requested!</h2>
                <p style={{ fontSize: 16, color: "#555", lineHeight: 1.75, maxWidth: 380, margin: "0 auto 32px" }}>
                  Our team will reach out to {form.email} within 4 business hours to confirm your slot.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/" style={{ background: "linear-gradient(135deg,#FF6B35,#FF875C)", color: "#fff", borderRadius: 12, padding: "14px 28px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    Back to Home
                  </Link>
                  <Link href="/resources/roi-calculator" style={{ background: "#fff", border: "1.5px solid rgba(0,0,0,0.1)", color: "#333", borderRadius: 12, padding: "14px 28px", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                    Calculate Your ROI
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Trust signals */}
        {!submitted && (
          <section style={{ background: "#fef6f0", padding: "48px 0" }}>
            <div className="w">
              <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
                {[
                  { icon: "🔒", text: "Your data is never shared" },
                  { icon: "⚡", text: "Response within 4 hours" },
                  { icon: "🎯", text: "Demo tailored to your operation" },
                  { icon: "💸", text: "No credit card required" },
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#666", fontWeight: 500 }}>
                    <span style={{ fontSize: 18 }}>{t.icon}</span>
                    {t.text}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
