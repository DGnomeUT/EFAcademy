import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Base | Deal Education & Resources Library",
  description:
    "29 deal domains. Guides, model templates, case studies, and term sheet templates — curated for practitioners, not students. Launching soon alongside the expanded course catalogue.",
  alternates: { canonical: "https://executivefinanceacademy.com/knowledge-base" },
};

const categories = [
  "Alternative Credit", "Asset Management Guides", "Capital Markets", "Carve-outs & Spin-offs",
  "Corporate Governance", "Debt Finance", "Distressed M&A", "Due Diligence",
  "Financial Modelling (FAST/F1F9)", "Financial Statements Analysis", "Funds (PE / VC / HF)",
  "Infrastructure & Real Assets", "Islamic Finance & Sukuk", "Joint Ventures",
  "Leveraged Finance & LBOs", "M&A Execution", "M&A Integration", "M&A Valuation",
  "Private Credit", "Private Equity", "Public Markets & IPOs", "Real Estate",
  "Restructuring & Insolvency", "Risk Management", "Search Funds", "Securitisation",
  "Special Situations", "SPACs", "Venture Capital",
];

const resourceTypes = [
  {
    type: "Guides",
    desc: "In-depth written frameworks and how-to guides for specific deal processes and transaction structures.",
    access: "Free",
  },
  {
    type: "Model Templates",
    desc: "FAST-compliant Excel models for LBO, DCF, merger, and debt capacity analysis — built to institutional standards.",
    access: "Enrolled Students",
  },
  {
    type: "Case Studies",
    desc: "Real transaction analyses with structure, rationale, and lessons learned from practitioners.",
    access: "Free / Enrolled",
  },
  {
    type: "Term Sheet Vault",
    desc: "Standardised term sheet templates for PE, VC, Sukuk, and credit facilities — directly usable in transactions.",
    access: "Enrolled Students",
  },
];

export default function KnowledgeBasePage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Knowledge Base</div>
          <h1 className="page-h1">
            The Deal Education<br />
            <em>&amp; Resources Library.</em>
          </h1>
          <p className="page-subtitle">
            29 deal domains. Guides, models, case studies, and term sheet templates —
            curated for practitioners, not students.
          </p>
        </div>
      </section>

      {/* Resource types */}
      <section className="section-pad section-light">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="section-h2 reveal">Resource Types</h2>
          <div
            className="reveal"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "var(--divider-light)", marginTop: "32px" }}
          >
            {resourceTypes.map((r) => (
              <div key={r.type} className="card" style={{ borderTop: "2px solid var(--gold)" }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
                  {r.type}
                </p>
                <p className="section-body" style={{ fontSize: "14px", marginBottom: "16px" }}>{r.desc}</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-soft)" }}>
                  Access: {r.access}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon notice */}
      <section className="section-grey" style={{ padding: "56px 0" }}>
        <div className="container">
          <div
            className="reveal"
            style={{
              display: "grid", gridTemplateColumns: "1fr auto", gap: "40px",
              alignItems: "center", padding: "40px", background: "var(--cream)",
              borderLeft: "2px solid var(--gold)",
            }}
          >
            <div>
              <h3 className="section-h3" style={{ marginBottom: "12px" }}>Knowledge Base Launching Soon</h3>
              <p className="section-body" style={{ fontSize: "14px", maxWidth: "600px" }}>
                The full resource library is currently being built. Enrolled students on the Tokenization programme
                gain early access to relevant models and case studies through the Teachable platform. The public
                knowledge base will launch alongside the expanded course catalogue.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link href="/enrol" className="btn-primary">Register for Early Access</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad section-light">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="section-h2 reveal">Browse by Deal Domain</h2>
          <p className="section-body reveal" style={{ marginBottom: "32px" }}>
            Our 29 deal domains cover the full spectrum of professional finance activity.
            Resources are indexed and searchable by deal type, jurisdiction, and asset class.
          </p>
          <div className="kb-categories reveal">
            {categories.map((cat) => (
              <div key={cat} className="kb-category">{cat}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band reveal">
        <div className="cta-band-left">
          <h2 className="cta-band-title">Start With a Course.</h2>
          <p className="cta-band-body">
            Enrolled students get early access to relevant resources. Begin with Real World Tokenization.
          </p>
        </div>
        <div className="cta-band-actions">
          <Link href="/courses" className="btn-primary">View Courses</Link>
          <Link href="/enrol" className="btn-ghost">Get in Touch</Link>
        </div>
      </div>
    </>
  );
}
