import type { Metadata } from "next";
import EnrolForm from "@/components/EnrolForm";

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
            <EnrolForm />
          </div>

          {/* Sidebar */}
          <aside className="reveal">
            <div className="sidebar-card">
              <h3 className="section-h3" style={{ marginBottom: "24px" }}>Contact Details</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: "6px" }}>
                    All Enquiries
                  </p>
                  <a
                    href="mailto:theexecutivefinanceacademy@gmail.com"
                    style={{ fontSize: "13px", color: "var(--ink-mid)", textDecoration: "none" }}
                  >
                    theexecutivefinanceacademy@gmail.com
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
