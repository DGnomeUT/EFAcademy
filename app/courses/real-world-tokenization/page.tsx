import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real World Tokenization Course | Foundation ($500) & Executive ($1,250)",
  description:
    "The definitive online course on real world asset tokenization for finance professionals. Foundation Programme ($500, 8 modules) or Executive Programme ($1,250, 16 modules, 46 video lessons). Certificate on completion.",
  keywords: [
    "real world tokenization course",
    "asset tokenization training",
    "tokenization course for finance professionals",
    "digital securities course",
    "RWA tokenization certification",
    "online tokenization certification",
    "real world asset tokenization",
    "executive finance course tokenization",
    "digital assets course for executives",
    "blockchain course for finance professionals",
  ],
  alternates: { canonical: "https://executivefinanceacademy.com/courses/real-world-tokenization" },
};

const FOUNDATION_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme";
const EXECUTIVE_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme1";

const foundationModules = [
  { num: "01", title: "The Architecture of Tokenisation", topics: "Blockchain fundamentals for finance professionals; distributed ledger technology; token standards (ERC-20, ERC-1400)" },
  { num: "02", title: "Private Asset Classes & Tokenisation Mechanics", topics: "Which assets tokenise well; valuation of tokenised fractions; ownership and transfer mechanics" },
  { num: "03", title: "Smart Contracts for Institutional Finance", topics: "Designing compliant smart contracts; automated cap tables; programmable compliance" },
  { num: "04", title: "Regulatory Frameworks for Digital Securities", topics: "FCA (UK); SEC Regulation A+ and Reg D (US); MiFID II digital securities (EU); MAS framework (Singapore); SFC (Hong Kong); DIFC / ADGM (Gulf)" },
  { num: "05", title: "Digital Asset Structuring", topics: "Structuring compliant digital investment vehicles; tokenised fund architecture; investor onboarding and transfer restrictions" },
  { num: "06", title: "Secondary Market Design & Liquidity", topics: "Alternative trading systems for digital securities; market-making for tokenised assets; investor onboarding at scale" },
  { num: "07", title: "Due Diligence for Tokenised Assets", topics: "Evaluating tokenised fund offerings; smart contract audit; underlying asset verification" },
  { num: "08", title: "Case Studies & Live Transaction Analysis", topics: "Real estate tokenisation (UK); private equity (US); infrastructure fund (EU); digital securities (Singapore & Hong Kong)" },
];

const executiveModules = [
  { num: "09", title: "Advanced Structuring: Multi-Jurisdiction Offerings", topics: "Cross-border tokenised securities; passporting digital instruments; managing multi-regulatory compliance simultaneously" },
  { num: "10", title: "Tokenised Debt & Fixed Income", topics: "Tokenised bonds and notes; yield distribution mechanics; institutional custody solutions" },
  { num: "11", title: "Tokenised Real Assets: Deep Dive", topics: "Real estate, infrastructure, and commodities; fractional ownership governance; asset servicer obligations" },
  { num: "12", title: "Fund Tokenisation & LP Structures", topics: "Tokenising closed-end fund interests; secondary liquidity for LP stakes; waterfall and distribution mechanics" },
  { num: "13", title: "Institutional Custody & Settlement", topics: "Digital asset custody models; prime brokerage for tokenised assets; settlement finality and DvP" },
  { num: "14", title: "Investor Relations & Reporting for Tokenised Assets", topics: "On-chain reporting standards; investor communication; regulatory disclosure obligations" },
  { num: "15", title: "Risk Management in Tokenised Markets", topics: "Smart contract risk; counterparty risk in DeFi integrations; operational resilience" },
  { num: "16", title: "The Future of Capital Markets Infrastructure", topics: "Central bank digital currencies; T+0 settlement; the long-term architecture of institutional tokenised finance" },
];

const foundationOutcomes = [
  "The architecture of blockchain-based investment banking from the structurer's perspective",
  "How to tokenise illiquid assets: private equity, real estate, infrastructure, and private credit",
  "Smart contract design for institutional use — automating KYC/AML, transfer restrictions, and distributions",
  "Regulatory landscape across six major jurisdictions: UK (FCA), US (SEC), EU (MiFID II), Singapore (MAS), Hong Kong (SFC), Gulf (DIFC/ADGM)",
  "Secondary market design — how to establish and operate compliant secondary venues for tokenised securities",
  "Live case study analysis: real tokenisation transactions across global capital markets",
];

const executiveOutcomes = [
  "Brief boards and investment committees on tokenised asset strategies with confidence",
  "Evaluate vendor proposals and technology platforms against institutional benchmarks",
  "Conduct due diligence on tokenised fund offerings across 16 structured frameworks",
  "Build internal team capability through 16 detailed module notes and structured question sets",
  "Access primary research and regulatory documents through 16 curated bibliographies",
];

const faqs = [
  {
    q: "What is real world asset tokenization?",
    a: "Real world asset tokenization is the process of creating digital representations of physical or financial assets — such as private equity fund interests, real estate, infrastructure, or private credit — on a blockchain. For institutional finance professionals, tokenisation represents a structural shift in how private assets are distributed, traded, and managed.",
  },
  {
    q: "What is the difference between the Foundation and Executive programmes?",
    a: "The Foundation Programme ($500) covers 8 core modules including blockchain architecture, private asset tokenisation mechanics, smart contracts, regulatory frameworks across six jurisdictions, digital asset structuring, secondary market design, due diligence, and global case studies. The Executive Programme ($1,250) includes all 8 Foundation modules plus 8 advanced modules, 46 video lessons, 46 slide presentations, 16 detailed written module notes, 16 executive question sets with MCQs and answer keys, and 16 curated bibliographies.",
  },
  {
    q: "Which regulatory frameworks does the course cover?",
    a: "The course covers digital securities regulatory frameworks across six major jurisdictions: FCA digital securities rules (UK), SEC Regulation A+ and Regulation D (US), MiFID II digital securities framework (EU), MAS digital asset regulations (Singapore), SFC framework (Hong Kong), and DIFC/ADGM rules (Gulf).",
  },
  {
    q: "Do I need a technical or blockchain background?",
    a: "No. The course is designed for finance professionals, not technologists. It treats blockchain as a structural layer — a mechanism for automating compliance, enhancing liquidity, and distributing private assets — rather than a technology requiring code-level understanding. A background in capital markets, corporate finance, fund management, private equity, or legal advisory is ideal preparation.",
  },
  {
    q: "Who is this course designed for?",
    a: "The programme is designed for investment professionals, CFOs, fund managers, private equity principals, legal advisors, compliance officers, and regulators who are encountering tokenised assets in a professional context. Both programmes assume financial literacy and capital markets experience.",
  },
  {
    q: "Is a certificate included?",
    a: "Yes. Both the Foundation ($500) and Executive ($1,250) programmes include a certificate of completion, issued upon finishing all modules of the respective programme.",
  },
  {
    q: "Is group or institutional licensing available?",
    a: "Yes. Executive Finance Academy offers group licensing for teams of three or more. Group enrolments include all course materials plus a dedicated Q&A session with course authors. Custom cohort options are available for teams of ten or more. Contact theexecutivefinanceacademy@gmail.com or use the enquiry form.",
  },
];

const courseSchemaBasic = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Real World Tokenization — Foundation Programme",
  description: "The institutional framework for tokenising private assets and designing compliant digital securities. 8 on-demand modules covering blockchain architecture, regulatory frameworks across six global jurisdictions, smart contract design, and live case studies.",
  provider: { "@type": "EducationalOrganization", name: "Executive Finance Academy", url: "https://executivefinanceacademy.com" },
  courseMode: "online",
  educationalLevel: "Advanced",
  offers: { "@type": "Offer", price: "500", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const courseSchemaExecutive = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Real World Tokenization — Executive Programme",
  description: "The complete institutional reference for real world asset tokenization. 16 modules, 46 video lessons, 16 detailed module notes, 16 executive question sets with answer keys, and 16 curated bibliographies.",
  provider: { "@type": "EducationalOrganization", name: "Executive Finance Academy", url: "https://executivefinanceacademy.com" },
  courseMode: "online",
  educationalLevel: "Advanced",
  offers: { "@type": "Offer", price: "1250", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TokenizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaBasic) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaExecutive) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span style={{ color: "#3e3e4a" }}>›</span>
            <Link href="/courses">Courses</Link>
            <span style={{ color: "#3e3e4a" }}>›</span>
            <span style={{ color: "#8a8a9a" }}>Real World Tokenization</span>
          </div>
          <div className="eyebrow">Digital Assets & Tokenization · Advanced Practitioner</div>
          <h1 className="page-h1" style={{ marginTop: "16px" }}>
            Real World<br /><em>Tokenization</em>
          </h1>
          <p style={{ fontSize: "17px", fontStyle: "italic", lineHeight: "1.7", color: "#6a6a7a", maxWidth: "600px", marginBottom: "16px", fontFamily: "var(--serif)" }}>
            How blockchain architecture is reshaping private market liquidity — and what every institutional finance
            professional needs to know now.
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#5a5a6a", maxWidth: "580px", marginBottom: "40px" }}>
            For senior investment professionals, CFOs, fund managers, legal advisors, and regulators.
            Regulatory coverage across UK, US, EU, Singapore, Hong Kong, and Gulf markets.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px", fontSize: "12px", color: "#5a5a6a", letterSpacing: "0.06em" }}>
            <span>Foundation: 8 Modules</span>
            <span style={{ color: "#3e3e4a" }}>·</span>
            <span>Executive: 16 Modules / 46 Video Lessons</span>
            <span style={{ color: "#3e3e4a" }}>·</span>
            <span>On-Demand + Live Q&amp;A</span>
            <span style={{ color: "#3e3e4a" }}>·</span>
            <span>Certificate on Completion</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href={FOUNDATION_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Enrol — Foundation ($500)
            </a>
            <a
              href={EXECUTIVE_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "var(--dark-bg-1)", background: "var(--cream)",
                padding: "14px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.2s",
              }}
            >
              Enrol — Executive ($1,250)
            </a>
            <Link href="/enrol" className="btn-ghost">Group Enquiry</Link>
          </div>
        </div>
      </section>

      {/* Tier comparison */}
      <section className="section-pad section-grey">
        <div className="container">
          <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Choose Your Programme</div>
          <h2 className="section-h2 reveal" style={{ textAlign: "center", marginTop: "12px" }}>
            Foundation or Executive — Which is Right for You?
          </h2>
          <div className="tier-compare reveal" style={{ marginTop: "40px" }}>
            {/* Foundation */}
            <div className="tier-card">
              <p className="tier-name">Foundation Programme</p>
              <p className="tier-price">$500</p>
              <p className="tier-desc">
                The core institutional framework for tokenised finance. Ideal for investment professionals, CFOs,
                and legal advisors who need a rigorous, deal-oriented foundation for working with tokenised assets.
              </p>
              <ul className="tier-features">
                <li>8 on-demand video modules</li>
                <li>8 slide presentations</li>
                <li>Certificate of completion</li>
                <li>Regulatory coverage: UK, US, EU, Singapore, HK, Gulf</li>
                <li>Live global deal case studies</li>
                <li>Lifetime access</li>
              </ul>
              <a href={FOUNDATION_URL} target="_blank" rel="noreferrer" className="btn-enrol-gold">
                Enrol — Foundation ($500)
              </a>
            </div>

            {/* Executive */}
            <div className="tier-card-dark">
              <span className="tier-badge">Most Complete</span>
              <p className="tier-name">Executive Programme</p>
              <p className="tier-price tier-price-light">$1,250</p>
              <p className="tier-desc tier-desc-light">
                Everything in the Foundation, plus a complete institutional reference library. Built for executives who
                need working knowledge — not just awareness — to drive decisions, evaluate providers, and build internal
                team capability.
              </p>
              <ul className="tier-features tier-features-light">
                <li>Everything in Foundation</li>
                <li>46 video lessons across 16 modules</li>
                <li>46 slide presentations (non-downloadable)</li>
                <li>16 detailed written module notes</li>
                <li>16 executive question sets with MCQs &amp; answer keys</li>
                <li>16 curated bibliographies with primary research links</li>
                <li>Certificate of completion · Lifetime access</li>
              </ul>
              <a href={EXECUTIVE_URL} target="_blank" rel="noreferrer" className="btn-enrol-gold">
                Enrol — Executive ($1,250)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="section-pad section-light">
        <div
          className="container content-with-sidebar"
        >
          {/* Main content */}
          <div>
            {/* Overview */}
            <div style={{ marginBottom: "56px" }} className="reveal">
              <div className="gold-rule" />
              <h2 className="section-h2">Course Overview</h2>
              <div className="section-body" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <p>
                  The tokenisation of real-world private assets is discussed almost entirely in the language of
                  technology rather than capital markets. Blockchain whitepapers, DeFi protocols, and Web3 commentary
                  have dominated the discourse — leaving institutional finance professionals without a rigorous framework
                  for evaluating tokenised assets as financial instruments.
                </p>
                <p>
                  This online finance course treats blockchain as a structural layer — a mechanism for automating
                  compliance, enhancing liquidity, and expanding the distribution of private assets — rather than a
                  speculative technology play. Every module is built from the perspective of an institutional structurer,
                  not a technologist.
                </p>
                <p>
                  <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Who this is for:</strong>{" "}
                  Investment professionals, CFOs, fund managers, legal advisors, private equity principals, compliance
                  officers, and regulators who are encountering tokenised assets in a professional context.
                </p>
                <p>
                  <strong style={{ color: "var(--ink)", fontWeight: 500 }}>What makes this course different:</strong>{" "}
                  Unlike general blockchain or DeFi courses, this programme is written exclusively for senior finance
                  professionals with existing capital markets experience. It does not explain what money is — it explains
                  how tokenisation changes the mechanics of a deal you are already working on.
                </p>
              </div>
            </div>

            {/* Foundation outcomes */}
            <div style={{ marginBottom: "56px" }} className="reveal">
              <div className="gold-rule" />
              <h2 className="section-h2">What You Will Learn — Foundation</h2>
              <p className="section-body" style={{ fontSize: "14px", marginBottom: "24px" }}>
                Core outcomes for both the Foundation and Executive programmes.
              </p>
              <ul className="outcome-list">
                {foundationOutcomes.map((o) => (
                  <li key={o} className="outcome-item">{o}</li>
                ))}
              </ul>
            </div>

            {/* Executive outcomes */}
            <div
              className="reveal"
              style={{ marginBottom: "56px", background: "var(--cream-dark)", padding: "36px", borderLeft: "2px solid var(--dark-bg-1)" }}
            >
              <h2 className="section-h2" style={{ fontSize: "22px" }}>Additional Outcomes — Executive Programme</h2>
              <p className="section-body" style={{ fontSize: "14px", marginBottom: "24px" }}>
                The Executive Programme adds the following institutional capabilities on top of the Foundation outcomes.
              </p>
              <ul className="outcome-list">
                {executiveOutcomes.map((o) => (
                  <li key={o} className="outcome-item">{o}</li>
                ))}
              </ul>
            </div>

            {/* Foundation modules */}
            <div style={{ marginBottom: "48px" }} className="reveal">
              <div className="gold-rule" />
              <h2 className="section-h2">Module Outline — Foundation (01–08)</h2>
              <p className="section-body" style={{ fontSize: "14px", marginBottom: "24px" }}>
                Included in both the Foundation ($500) and Executive ($1,250) programmes.
              </p>
              <div className="module-list">
                {foundationModules.map((m) => (
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

            {/* Executive modules */}
            <div style={{ marginBottom: "56px" }} className="reveal">
              <div className="tier-bar">
                <span className="tier-bar-title">Executive Programme Only — Modules 09–16</span>
                <span className="tier-bar-badge">$1,250</span>
              </div>
              <div className="module-list module-list-dark">
                {executiveModules.map((m) => (
                  <div key={m.num} className="module-item">
                    <span className="module-num">{m.num}</span>
                    <div>
                      <p className="module-title module-title-light">{m.title}</p>
                      <p className="module-topics module-topics-light">{m.topics}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="reveal">
              <div className="gold-rule" />
              <h2 className="section-h2" style={{ marginBottom: "32px" }}>Frequently Asked Questions</h2>
              <div className="faq-native">
                {faqs.map((faq) => (
                  <details key={faq.q} className="faq-native-item">
                    <summary>
                      <span>{faq.q}</span>
                      <span className="faq-icon-box" />
                    </summary>
                    <p className="faq-native-body">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside style={{ position: "sticky", top: "88px" }}>
            {/* Foundation card */}
            <div className="sidebar-card reveal">
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
                Foundation Programme
              </p>
              <p className="sidebar-price">$500</p>
              <div className="spec-table">
                <div className="spec-row"><span className="spec-label">Modules</span><span className="spec-value">8</span></div>
                <div className="spec-row"><span className="spec-label">Format</span><span className="spec-value">On-Demand + Live Q&A</span></div>
                <div className="spec-row"><span className="spec-label">Certificate</span><span className="spec-value">On Completion</span></div>
                <div className="spec-row"><span className="spec-label">Access</span><span className="spec-value">Lifetime</span></div>
              </div>
              <a href={FOUNDATION_URL} target="_blank" rel="noreferrer" className="btn-enrol-gold" style={{ marginTop: "24px" }}>
                Enrol — Foundation
              </a>
            </div>

            {/* Executive card */}
            <div className="sidebar-card-dark reveal">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
                  Executive Programme
                </p>
                <span style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", background: "var(--gold)", color: "var(--ink)", padding: "3px 8px" }}>
                  Best Value
                </span>
              </div>
              <p className="sidebar-price sidebar-price-light">$1,250</p>
              <div className="spec-table spec-table-dark">
                <div className="spec-row"><span className="spec-label spec-label-dark">Modules</span><span className="spec-value spec-value-dark">16</span></div>
                <div className="spec-row"><span className="spec-label spec-label-dark">Video Lessons</span><span className="spec-value spec-value-dark">46</span></div>
                <div className="spec-row"><span className="spec-label spec-label-dark">Module Notes</span><span className="spec-value spec-value-dark">16</span></div>
                <div className="spec-row"><span className="spec-label spec-label-dark">Question Sets</span><span className="spec-value spec-value-dark">16 (with keys)</span></div>
                <div className="spec-row"><span className="spec-label spec-label-dark">Bibliographies</span><span className="spec-value spec-value-dark">16</span></div>
                <div className="spec-row"><span className="spec-label spec-label-dark">Access</span><span className="spec-value spec-value-dark">Lifetime</span></div>
              </div>
              <a href={EXECUTIVE_URL} target="_blank" rel="noreferrer" className="btn-enrol-gold" style={{ marginTop: "24px" }}>
                Enrol — Executive
              </a>
              <p style={{ fontSize: "12px", color: "#5a5a6a", textAlign: "center", marginTop: "12px" }}>
                Includes everything in Foundation
              </p>
            </div>

            <p style={{ fontSize: "12px", color: "var(--ink-soft)", textAlign: "center", marginTop: "16px" }}>
              Group licensing for teams of 3+.{" "}
              <Link href="/enrol" style={{ color: "var(--gold-dim)" }}>Contact us →</Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
