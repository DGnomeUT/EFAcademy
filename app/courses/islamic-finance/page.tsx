import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Islamic Finance & Shariah-Compliant Structuring Course | Executive Finance Academy",
  description:
    "Practitioner-built Islamic finance course for senior finance professionals. Sukuk structuring, Murabaha, Ijarah, Islamic PE, and AAOIFI-aligned governance across 10 modules. GCC, UK, Malaysian, and Indonesian capital markets. Register interest for early-access pricing.",
  keywords: [
    "islamic finance course online",
    "sukuk structuring course",
    "shariah compliant finance training",
    "AAOIFI course for finance professionals",
    "islamic finance certification",
    "sukuk course",
    "islamic private equity course",
    "murabaha structuring training",
    "islamic capital markets course",
    "islamic finance for executives",
    "GCC finance course",
    "shariah compliant structuring programme",
  ],
  alternates: { canonical: "https://executivefinanceacademy.com/courses/islamic-finance" },
};

const modules = [
  { num: "01", title: "First Principles of Islamic Finance", topics: "Riba, Gharar, Maysir in transaction context; risk-sharing vs. risk-transfer; AAOIFI overview" },
  { num: "02", title: "Murabaha & Commodity Finance", topics: "Murabaha structuring; Tawarruq and synthetic commodity transactions; use in corporate financing" },
  { num: "03", title: "Ijarah & Lease-Based Structures", topics: "Operating vs. finance Ijarah; sale and leaseback; Diminishing Musharakah for property finance" },
  { num: "04", title: "Sukuk: Structure & Issuance Process", topics: "Sukuk Al-Ijarah, Al-Musharakah, Al-Mudarabah; asset selection; SPV architecture; rating and distribution" },
  { num: "05", title: "Islamic Equity: Musharakah & Mudarabah", topics: "Partnership finance; Diminishing Musharakah; profit and loss sharing mechanics; governance" },
  { num: "06", title: "Islamic M&A: Due Diligence & Structuring", topics: "Shariah screens in M&A due diligence; non-compliant assets; structuring compliant consideration" },
  { num: "07", title: "Islamic Private Equity & Venture Capital", topics: "Shariah-compliant fund structures; Mudarabah-based LP/GP arrangements; term sheets and exits" },
  { num: "08", title: "Treasury & Liquidity Management", topics: "Wakala investments; Commodity Murabaha; Islamic repos; intra-day liquidity solutions" },
  { num: "09", title: "Cross-Border Islamic Finance", topics: "AAOIFI vs. IFSB standards; navigating dual regulatory environments (DIFC, Malaysia, UK)" },
  { num: "10", title: "Case Studies & Live Transaction Analysis", topics: "Sovereign Sukuk (GCC); Islamic real estate finance (UK); Islamic PE fund (SE Asia)" },
];

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Islamic Finance & Shariah-Compliant Structuring",
  description: "A practitioner's guide to structuring Shariah-compliant transactions in global capital markets. Covers Sukuk, Murabaha, Ijarah, Wakala, Islamic private equity, and AAOIFI-aligned governance across 10 modules.",
  provider: { "@type": "EducationalOrganization", name: "Executive Finance Academy", url: "https://executivefinanceacademy.com" },
  courseMode: "online",
  educationalLevel: "Advanced",
  about: ["Islamic Finance", "Sukuk", "Shariah-Compliant Structuring", "AAOIFI", "GCC Capital Markets"],
  availabilityStarts: "2025",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://executivefinanceacademy.com" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://executivefinanceacademy.com/courses" },
    { "@type": "ListItem", position: 3, name: "Islamic Finance & Shariah-Compliant Structuring", item: "https://executivefinanceacademy.com/courses/islamic-finance" },
  ],
};

export default function IslamicFinancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span style={{ color: "#3e3e4a" }}>›</span>
            <Link href="/courses">Courses</Link>
            <span style={{ color: "#3e3e4a" }}>›</span>
            <span style={{ color: "#8a8a9a" }}>Islamic Finance</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", background: "#2e2e36", color: "#8a8a9a", padding: "4px 12px" }}>
              Coming Soon
            </span>
            <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#5a5a6a" }}>
              Islamic Finance & Shariah
            </span>
          </div>
          <h1 className="page-h1" style={{ opacity: 0.75 }}>
            Islamic Finance &<br />
            <em>Shariah-Compliant Structuring</em>
          </h1>
          <p style={{ fontSize: "17px", fontStyle: "italic", lineHeight: "1.7", color: "#5a5a6a", maxWidth: "580px", marginBottom: "16px", fontFamily: "var(--serif)" }}>
            From theoretical compliance to high-fidelity product engineering — a practitioner&apos;s guide to
            Shariah-compliant transactions in global capital markets.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px", fontSize: "12px", color: "#4a4a5a", letterSpacing: "0.06em" }}>
            <span>10 Modules</span>
            <span style={{ color: "#3e3e4a" }}>·</span>
            <span>On-Demand + Live Q&amp;A</span>
            <span style={{ color: "#3e3e4a" }}>·</span>
            <span>AAOIFI-Aligned</span>
            <span style={{ color: "#3e3e4a" }}>·</span>
            <span>Certificate on Completion</span>
          </div>
          <Link
            href="/enrol"
            style={{
              fontFamily: "var(--sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "var(--gold)", border: "1px solid var(--gold)",
              padding: "14px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.2s, color 0.2s",
            }}
          >
            Notify Me When Available
          </Link>
        </div>
      </section>

      {/* Registration notice */}
      <section className="section-grey" style={{ padding: "40px 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: "40px",
              padding: "32px 40px", background: "var(--cream)", borderLeft: "2px solid var(--gold)",
            }}
          >
            <div>
              <p style={{ fontFamily: "var(--serif)", fontSize: "17px", fontWeight: 400, color: "var(--ink)", marginBottom: "8px" }}>
                Registration of Interest Now Open
              </p>
              <p className="section-body" style={{ fontSize: "14px" }}>
                This course is currently in development. Register your interest and we will notify you as soon as
                enrolment opens. Registered practitioners will receive early-access pricing.
              </p>
            </div>
            <Link href="/enrol" className="btn-primary" style={{ flexShrink: 0 }}>Register Interest</Link>
          </div>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="section-pad section-light">
        <div
          className="container content-with-sidebar"
        >
          {/* Main */}
          <div>
            <div style={{ marginBottom: "48px" }} className="reveal">
              <div className="gold-rule" />
              <h2 className="section-h2">Course Overview</h2>
              <div className="section-body" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <p>
                  The Islamic finance industry manages over $4 trillion in assets globally, yet practitioner education
                  has remained confined to certification courses that teach compliance theory rather than deal execution.
                  The result is a generation of professionals who can identify a Murabaha but cannot structure one for
                  a complex cross-border transaction.
                </p>
                <p>
                  This programme dismantles the conventional view of Islamic finance as a subset of ethical banking
                  and reconstructs it as a sophisticated risk-sharing framework with its own product engineering logic.
                  Every module focuses on the practical application of AAOIFI standards in the context of real transactions.
                </p>
                <p>
                  <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Who this is for:</strong>{" "}
                  Investment bankers, corporate financiers, private equity professionals, lawyers, and treasury managers
                  operating — or aspiring to operate — in GCC, UK, Malaysian, or Indonesian capital markets.
                </p>
              </div>
            </div>

            <div className="reveal">
              <div className="gold-rule" />
              <h2 className="section-h2">Module Outline (Preview)</h2>
              <div className="module-list" style={{ opacity: 0.8 }}>
                {modules.map((m) => (
                  <div key={m.num} className="module-item">
                    <span className="module-num">{m.num}</span>
                    <div>
                      <p className="module-title">{m.title}</p>
                      <p className="module-topics">{m.topics}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: "88px" }} className="reveal">
            <div className="sidebar-card">
              <h3 className="section-h3" style={{ marginBottom: "12px" }}>Register Your Interest</h3>
              <p className="section-body" style={{ fontSize: "14px", marginBottom: "24px" }}>
                Be first to know when this course opens for enrolment. Early registrants receive priority access and
                introductory pricing.
              </p>
              <Link href="/enrol" className="btn-enrol-gold" style={{ display: "block", textAlign: "center", padding: "14px" }}>
                Register Interest
              </Link>
              <div className="spec-table" style={{ marginTop: "24px" }}>
                <div className="spec-row"><span className="spec-label">Modules</span><span className="spec-value">10</span></div>
                <div className="spec-row"><span className="spec-label">Standard</span><span className="spec-value">AAOIFI-Aligned</span></div>
                <div className="spec-row"><span className="spec-label">Level</span><span className="spec-value">Int.–Advanced</span></div>
                <div className="spec-row"><span className="spec-label">Certificate</span><span className="spec-value">On Completion</span></div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
