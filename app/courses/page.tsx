import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance Courses for Executives | Online Finance Certification Programmes",
  description:
    "Browse practitioner-built online finance courses for senior executives. Real World Tokenization Foundation ($500) and Executive ($1,250) available now. Private Equity, M&A, and more coming soon.",
  keywords: [
    "finance courses for executives",
    "online finance certification",
    "executive finance education",
    "real world tokenization course",
    "private equity course online",
    "M&A training for executives",
    "leveraged finance course",
    "online finance certificate programme",
    "senior finance training online",
  ],
  alternates: { canonical: "https://executivefinanceacademy.com/courses" },
};

const FOUNDATION_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme";
const EXECUTIVE_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme1";

const comingSoon = [
  "Private Equity: Fund Structure & LBO Modelling",
  "Distressed M&A & Debt Restructuring",
  "M&A Execution: From Mandate to Close",
  "Leveraged Finance & Private Credit",
  "Due Diligence: A Practitioner's Framework",
  "Venture Capital: Structure, Terms & Exits",
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Course Catalogue</div>
          <h1 className="page-h1">
            Executive Programmes for<br />
            <em>the Modern Deal Professional.</em>
          </h1>
          <p className="page-subtitle">
            Practitioner-authored and designed for senior finance professionals operating across global capital markets.
            Five pillars of transaction intelligence — from private equity fundamentals to frontier digital asset structures.
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
              Both programmes cover tokenisation of real-world assets as a financial instrument. The Executive Programme
              builds on the Foundation curriculum with a substantially deeper reference library.
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
          <div className="eyebrow reveal">Coming Soon</div>
          <h2 className="section-h2 reveal">Programmes in Development</h2>

          {/* Islamic Finance feature card */}
          <div
            className="reveal"
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              gap: "40px", padding: "40px", background: "var(--cream)",
              borderLeft: "2px solid var(--divider-light)", marginBottom: "2px", opacity: 0.8,
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: "8px" }}>
                Islamic Finance & Shariah · Intermediate–Advanced
              </p>
              <h3
                className="section-h3"
                style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 300, marginBottom: "12px" }}
              >
                Islamic Finance & Shariah-Compliant Structuring
              </h3>
              <p className="section-body" style={{ fontSize: "14px", maxWidth: "560px" }}>
                From theoretical compliance to high-fidelity product engineering — a practitioner&apos;s guide to
                Shariah-compliant transactions in global capital markets. AAOIFI-aligned. 10 modules.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link
                href="/enrol"
                style={{
                  display: "inline-block", padding: "12px 28px",
                  border: "1px solid var(--divider-light)", color: "var(--ink-soft)",
                  fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
                  textDecoration: "none", transition: "border-color 0.2s, color 0.2s",
                }}
              >
                Notify Me
              </Link>
            </div>
          </div>

          {/* Pipeline grid */}
          <div className="pipeline-grid reveal" style={{ marginTop: "2px" }}>
            {comingSoon.map((course) => (
              <div key={course} className="pipeline-item">
                <p className="pipeline-tag">Pipeline</p>
                <p className="pipeline-name">{course}</p>
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
