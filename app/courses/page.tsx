import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance Courses for Executives | Practitioner-Built Certification Programmes",
  description:
    "Practitioner-authored finance courses for senior executives. Real World Tokenization Foundation ($500) and Executive ($1,250) enrolling now. Private equity, M&A, leveraged finance, and restructuring programmes in development.",
  keywords: [
    "finance courses for executives",
    "online finance certification",
    "executive finance education",
    "real world tokenization course",
    "asset tokenization certification",
    "tokenization course for CFOs",
    "private equity course online",
    "M&A training for executives",
    "leveraged finance course",
    "islamic finance course online",
    "sukuk course",
    "finance courses for fund managers",
    "online finance certificate programme",
    "senior finance training online",
    "practitioner finance education",
  ],
  alternates: { canonical: "https://executivefinanceacademy.com/courses" },
};

const FOUNDATION_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme";
const EXECUTIVE_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme1";

const pipeline = [
  {
    category: "Private Equity",
    title: "Private Equity & LBO Modelling",
    desc: "Fund structures, capital deployment, and the mechanics of a leveraged buyout from sources-and-uses through to exit. Built around the investment committee process, with full return attribution across leverage, multiple expansion, and operational improvement.",
  },
  {
    category: "Private Credit",
    title: "Private Credit & Leveraged Finance",
    desc: "Direct lending, unitranche, and the architecture of the syndicated loan and CLO markets. Covers covenant analysis, credit documentation, and how lenders price, structure, and protect downside in a leveraged capital stack.",
  },
  {
    category: "M&A Execution",
    title: "M&A Execution: From Mandate to Close",
    desc: "The full transaction lifecycle — origination, valuation, and negotiation through to the share purchase agreement, regulatory clearance, and completion mechanics. Concludes with post-merger integration and the realities of capturing synergies.",
  },
  {
    category: "Special Situations",
    title: "Distressed M&A & Corporate Restructuring",
    desc: "Workouts, balance-sheet repair, and the acquisition of stressed and distressed assets. Covers debt restructuring, the creditor hierarchy, and the principal insolvency frameworks across major European and US jurisdictions.",
  },
  {
    category: "Financial Modelling",
    title: "Financial Modelling: FAST / F1F9 Standard",
    desc: "Institutional-grade model construction built to a recognised modelling standard — Flexible, Appropriate, Structured, Transparent. The output is an audit-ready model any counterparty analyst can open, follow, and stress without explanation.",
  },
  {
    category: "Due Diligence",
    title: "Due Diligence: A Practitioner's Framework",
    desc: "Commercial, financial, and legal diligence as a single coordinated workstream across asset classes. Covers quality-of-earnings analysis, working-capital and net-debt mechanics, and how diligence findings translate into price and protections.",
  },
  {
    category: "Venture Capital",
    title: "Venture Capital: Structure, Terms & Exits",
    desc: "Fund formation, term sheet negotiation, and the cap table mathematics that govern dilution and control. Concludes with exit mechanics — secondary sales, trade sales, and IPO — and how each pathway shapes return outcomes.",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Course Catalogue</div>
          <h1 className="page-h1">
            Transaction Intelligence for<br />
            <em>the Senior Practitioner.</em>
          </h1>
          <p className="page-subtitle">
            Practitioner-authored programmes for finance professionals operating across global capital markets.
            Each course is reverse-engineered from a live transaction — not adapted from a syllabus — and written
            at the altitude a CFO, fund principal, or deal lead actually works at.
          </p>
        </div>
      </section>

      {/* Live courses — dark section reusing pricing-card system */}
      <section id="courses" className="section-pad">
        <div className="container">
          <div className="pricing-intro reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Live Now — Real World Tokenization</div>
            <h2 className="section-title section-title-light" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", marginTop: "16px" }}>
              Two programmes. One subject mastered at two levels.
            </h2>
            <p>
              Tokenisation has moved from conference panel to live mandate. Asset managers are issuing tokenised
              funds, banks are settling on chain, and regulators across six major jurisdictions have published
              the frameworks that govern it. Real World Tokenization is built for the executive who now has to
              evaluate, brief, or build against that reality — and needs the structurer&apos;s view, not the
              vendor&apos;s pitch. Both programmes cover the same subject; the Executive Programme adds a
              substantially deeper institutional reference library.
            </p>
          </div>

          <div className="pricing-grid reveal">
            {/* Foundation */}
            <div className="pricing-card">
              <p className="pricing-tier">Foundation Programme · Digital Assets & Tokenization</p>
              <p className="pricing-course">Real World Tokenization</p>
              <p className="pricing-price">$500</p>
              <p className="pricing-desc">
                The institutional framework for tokenising private assets and designing compliant digital securities.
                Eight on-demand modules built from the structurer&apos;s perspective — covering blockchain architecture,
                regulatory frameworks across six major jurisdictions, and live deal case studies.
              </p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                <li>8 on-demand video modules + slide presentations</li>
                <li>Regulatory coverage: UK, US, EU, Singapore, Hong Kong, Gulf</li>
                <li>Live tokenisation case studies across global markets</li>
                <li>Certificate of completion</li>
                <li>Lifetime access</li>
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href={FOUNDATION_URL} target="_blank" rel="noreferrer" className="btn-enrol-gold">
                  Enrol — Foundation ($500)
                </a>
                <Link href="/courses/real-world-tokenization" className="btn-enrol-outline">
                  View Full Syllabus
                </Link>
              </div>
            </div>

            {/* Executive */}
            <div className="pricing-card featured">
              <span className="pricing-badge">Most Complete</span>
              <p className="pricing-tier">Executive Programme · Digital Assets & Tokenization</p>
              <p className="pricing-course">Real World Tokenization</p>
              <p className="pricing-price">$1,250</p>
              <p className="pricing-desc">
                Everything in the Foundation Programme, plus a comprehensive institutional reference library across 16
                modules. Designed for executives who need to brief boards, evaluate vendor proposals, build internal
                capability, and conduct due diligence on tokenised products.
              </p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                <li>46 video lessons across 16 modules</li>
                <li>46 slide presentations (non-downloadable)</li>
                <li>16 detailed written module notes</li>
                <li>16 executive question sets with answer keys</li>
                <li>16 curated bibliographies with primary research links</li>
                <li>Certificate of completion · Lifetime access</li>
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href={EXECUTIVE_URL} target="_blank" rel="noreferrer" className="btn-enrol-gold">
                  Enrol — Executive ($1,250)
                </a>
                <Link href="/courses/real-world-tokenization" className="btn-enrol-outline">
                  View Full Syllabus & Tier Comparison
                </Link>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: "28px" }}>
            <Link
              href="/enrol"
              style={{ fontSize: "13px", color: "#6a6a7a", textDecoration: "none" }}
            >
              Group licensing for teams of 3+ — <span style={{ color: "var(--gold)" }}>contact us →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="section-pad section-grey">
        <div className="container">
          <div className="eyebrow reveal">In Development</div>
          <h2 className="section-h2 reveal">Programmes in Development</h2>
          <p className="section-body reveal" style={{ maxWidth: "720px", marginBottom: "40px" }}>
            The catalogue is built deliberately and one programme at a time. Each course below is authored to the
            same standard as Real World Tokenization — practitioner-written, deal-first, and audit-grade. Register
            your interest and we will notify you the moment a programme opens for enrolment.
          </p>

          {/* Islamic Finance feature card */}
          <div
            className="reveal"
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              gap: "40px", padding: "40px", background: "var(--cream)",
              borderLeft: "2px solid var(--gold)", marginBottom: "2px",
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
                Featured · Islamic Finance & Shariah · Intermediate–Advanced
              </p>
              <h3
                className="section-h3"
                style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 300, marginBottom: "12px" }}
              >
                Islamic Finance & Shariah-Compliant Structuring
              </h3>
              <p className="section-body" style={{ fontSize: "14px", maxWidth: "560px" }}>
                From theoretical compliance to high-fidelity product engineering — a practitioner&apos;s guide to
                structuring Shariah-compliant transactions in global capital markets. Covers Sukuk, Murabaha,
                Ijara, and Wakala structures, AAOIFI-aligned governance, and the documentation that makes a
                deal both economically viable and Shariah-defensible. Ten modules.
              </p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link
                href="/courses/islamic-finance"
                style={{
                  display: "inline-block", padding: "12px 28px", textAlign: "center",
                  border: "1px solid var(--gold)", color: "var(--gold)",
                  fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Preview Programme
              </Link>
              <Link
                href="/enrol"
                style={{
                  display: "inline-block", padding: "12px 28px", textAlign: "center",
                  border: "1px solid var(--divider-light)", color: "var(--ink-soft)",
                  fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Notify Me
              </Link>
            </div>
          </div>

          {/* Pipeline grid */}
          <div className="pipeline-grid reveal" style={{ marginTop: "2px" }}>
            {pipeline.map((course) => (
              <div key={course.title} className="pipeline-item">
                <p className="pipeline-tag">{course.category}</p>
                <p className="pipeline-name">{course.title}</p>
                <p className="section-body" style={{ fontSize: "13px", margin: "12px 0 16px" }}>
                  {course.desc}
                </p>
                <Link
                  href="/enrol"
                  style={{ fontSize: "12px", color: "var(--gold-dim)", textDecoration: "none" }}
                >
                  Notify Me →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band reveal">
        <div className="cta-band-left">
          <h2 className="cta-band-title">Questions Before You Enrol?</h2>
          <p className="cta-band-body">
            Speak to us about group licensing, programme fit, or upcoming courses.
          </p>
        </div>
        <div className="cta-band-actions">
          <Link href="/enrol" className="btn-primary">Get in Touch</Link>
          <Link href="/about" className="btn-ghost">About EFA</Link>
        </div>
      </div>
    </>
  );
}
