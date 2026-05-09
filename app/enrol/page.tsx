import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enrol & Get in Touch | Executive Finance Academy",
  description:
    "Speak to us before you commit. Enquire about Executive Finance Academy programmes for individuals, groups, or institutional teams. We respond within 2 business days.",
  alternates: { canonical: "https://executivefinanceacademy.com/enrol" },
};

export default function EnrolPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Enrol & Get in Touch</div>
          <h1 className="page-h1">
            Speak to Us<br />
            <em>Before You Commit.</em>
          </h1>
          <p className="page-subtitle">
            We respond to all enquiries within 2 business days.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="section-pad section-light">
        <div
          className="container enrol-with-sidebar"
        >
          {/* Form */}
          <div className="reveal">
            <div className="gold-rule" />
            <h2 className="section-h2" style={{ marginBottom: "36px" }}>Send an Enquiry</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="form-row-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div className="form-field">
                  <label className="form-label">Full Name *</label>
                  <input type="text" required className="form-input" placeholder="Your full name" />
                </div>
                <div className="form-field">
                  <label className="form-label">Job Title *</label>
                  <input type="text" required className="form-input" placeholder="Your current role" />
                </div>
              </div>

              <div className="form-row-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div className="form-field">
                  <label className="form-label">Organisation *</label>
                  <input type="text" required className="form-input" placeholder="Company / institution" />
                </div>
                <div className="form-field">
                  <label className="form-label">Email Address *</label>
                  <input type="email" required className="form-input" placeholder="your@email.com" />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Course of Interest</label>
                <select className="form-input" style={{ cursor: "pointer" }}>
                  <option value="">Select a course</option>
                  <option>Real World Tokenization — Foundation ($500)</option>
                  <option>Real World Tokenization — Executive ($1,250)</option>
                  <option>Islamic Finance & Shariah-Compliant Structuring (Notify Me)</option>
                  <option>Group / Institutional Licensing</option>
                  <option>General Enquiry</option>
                  <option>Corporate Partnership</option>
                </select>
              </div>

              <div className="form-field" id="group">
                <label className="form-label">Number of Participants (for group enquiries)</label>
                <input type="number" min="1" className="form-input" placeholder="e.g. 5" />
              </div>

              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea
                  rows={5}
                  className="form-input"
                  style={{ resize: "none" }}
                  placeholder="Tell us about your background and what you are looking to achieve..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", textAlign: "center", padding: "16px", fontSize: "12px" }}
              >
                Submit Enquiry
              </button>

              <p style={{ fontSize: "12px", color: "var(--ink-soft)", textAlign: "center" }}>
                We respond to all enquiries within 2 business days.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="reveal">
            <div className="sidebar-card">
              <h3 className="section-h3" style={{ marginBottom: "24px" }}>Contact Details</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: "6px" }}>
                    General Enquiries
                  </p>
                  <a
                    href="mailto:hello@executivefinanceacademy.com"
                    style={{ fontSize: "13px", color: "var(--ink-mid)", textDecoration: "none" }}
                  >
                    hello@executivefinanceacademy.com
                  </a>
                </div>
                <div>
                  <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: "6px" }}>
                    Corporate & Group
                  </p>
                  <a
                    href="mailto:corporate@executivefinanceacademy.com"
                    style={{ fontSize: "13px", color: "var(--ink-mid)", textDecoration: "none" }}
                  >
                    corporate@executivefinanceacademy.com
                  </a>
                </div>
              </div>
            </div>

            <div className="sidebar-card-dark">
              <h3 className="section-h3 section-h3-light" style={{ marginBottom: "16px" }}>
                Group & Institutional Licensing
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#8a8a9a", marginBottom: "20px" }}>
                Executive Finance Academy offers institutional access for teams of three or more. Group enrolments
                receive all course materials, a dedicated Q&A session with course authors, and a custom cohort
                option for teams of 10+.
              </p>
              <p style={{ fontSize: "13px", color: "var(--gold)", fontStyle: "italic" }}>
                Contact us to discuss pricing and structure.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
