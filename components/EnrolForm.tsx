"use client";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnrolForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f7407298-3873-458b-b06b-6f1361586470",
          subject: "New Enquiry — Executive Finance Academy",
          from_name: "Executive Finance Academy Website",
          ...data,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          padding: "48px 40px",
          background: "var(--cream)",
          borderLeft: "2px solid var(--gold)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}
        >
          Enquiry Received
        </p>
        <h3 className="section-h3">Thank you — we will be in touch.</h3>
        <p className="section-body" style={{ fontSize: "14px" }}>
          Your enquiry has been sent to our team. We respond to all enquiries within 2 business
          days. In the meantime, you are welcome to explore the{" "}
          <a href="/knowledge-base" style={{ color: "var(--gold-dim)", textDecoration: "none" }}>
            Knowledge Base
          </a>{" "}
          or review the{" "}
          <a href="/courses" style={{ color: "var(--gold-dim)", textDecoration: "none" }}>
            full course catalogue
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            alignSelf: "flex-start",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gold-dim)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Send another enquiry →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        className="form-row-two"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <div className="form-field">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            name="Full Name"
            required
            className="form-input"
            placeholder="Your full name"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Job Title *</label>
          <input
            type="text"
            name="Job Title"
            required
            className="form-input"
            placeholder="Your current role"
          />
        </div>
      </div>

      <div
        className="form-row-two"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <div className="form-field">
          <label className="form-label">Organisation *</label>
          <input
            type="text"
            name="Organisation"
            required
            className="form-input"
            placeholder="Company / institution"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            className="form-input"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="form-field">
        <label className="form-label">Course of Interest</label>
        <select name="Course of Interest" className="form-input" style={{ cursor: "pointer" }}>
          <option value="">Select a course</option>
          <option>Real World Tokenization — Foundation ($500)</option>
          <option>Real World Tokenization — Executive ($1,250)</option>
          <option>Islamic Finance &amp; Shariah-Compliant Structuring (Notify Me)</option>
          <option>Group / Institutional Licensing</option>
          <option>General Enquiry</option>
          <option>Corporate Partnership</option>
        </select>
      </div>

      <div className="form-field">
        <label className="form-label">Number of Participants (for group enquiries)</label>
        <input
          type="number"
          name="Number of Participants"
          min="1"
          className="form-input"
          placeholder="e.g. 5"
        />
      </div>

      <div className="form-field">
        <label className="form-label">Message</label>
        <textarea
          name="Message"
          rows={5}
          className="form-input"
          style={{ resize: "none" }}
          placeholder="Tell us about your background and what you are looking to achieve..."
        />
      </div>

      {status === "error" && (
        <p
          style={{
            fontSize: "13px",
            color: "#b04040",
            padding: "12px 16px",
            background: "#fdf0f0",
            border: "1px solid #e8c8c8",
          }}
        >
          Something went wrong sending your enquiry. Please email us directly at{" "}
          <a
            href="mailto:theexecutivefinanceacademy@gmail.com"
            style={{ color: "#b04040" }}
          >
            theexecutivefinanceacademy@gmail.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary"
        style={{
          width: "100%",
          textAlign: "center",
          padding: "16px",
          fontSize: "12px",
          opacity: status === "submitting" ? 0.6 : 1,
          cursor: status === "submitting" ? "not-allowed" : "pointer",
        }}
      >
        {status === "submitting" ? "Sending…" : "Submit Enquiry"}
      </button>

      <p style={{ fontSize: "12px", color: "var(--ink-soft)", textAlign: "center" }}>
        We respond to all enquiries within 2 business days.
      </p>
    </form>
  );
}
