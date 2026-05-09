import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Practitioner-Led Finance Education for Senior Executives",
  description:
    "Executive Finance Academy was founded by senior finance practitioners to bridge the gap between theory and deal execution. Learn about our philosophy, methodology, and what sets us apart.",
  alternates: { canonical: "https://executivefinanceacademy.com/about" },
};

const methodology = [
  {
    title: "Deal-First Curriculum Design",
    copy: "Every course begins with the end in mind: a real transaction, a real decision, a real conversation. We reverse-engineer the knowledge required to execute, then structure learning around that architecture.",
  },
  {
    title: "Practitioner Authorship",
    copy: "Our courses are not designed by curriculum developers or adapted from academic papers. They are authored by practitioners who have sat on deal teams, managed funds, and advised principals.",
  },
  {
    title: "Global Regulatory Coverage",
    copy: "All regulatory content is written for professionals operating across major financial centres. We cover English law, US securities law, EU directives, and the regulatory regimes of Singapore, Hong Kong, and the Gulf.",
  },
  {
    title: "Executive Altitude",
    copy: "Our content is written for senior professionals — not students. We do not over-explain. We do not use unnecessary jargon. We do not build towards a multiple-choice exam. We build towards a boardroom.",
  },
];

const standards = [
  {
    std: "FAST Modelling Standard",
    desc: "All financial models follow FAST principles: Flexible, Appropriate, Structured, Transparent. Models are audit-ready and peer-reviewable by any institutional counterpart.",
  },
  {
    std: "F1F9 Standard",
    desc: "Colour-coding, structural hierarchy, and formula logic in all spreadsheet content follows F1F9 conventions for institutional portability and auditability.",
  },
  {
    std: "English Law Foundations",
    desc: "Cross-border transaction content is grounded in English law as the prevailing legal system for international finance — with coverage of US, EU, and Asia-Pacific frameworks where relevant.",
  },
  {
    std: "Global Regulatory Frameworks",
    desc: "Regulatory content references the frameworks governing the world's major financial centres: FCA (UK), SEC (US), ESMA (EU), MAS (Singapore), SFC (Hong Kong), and DIFC / ADGM (Gulf).",
  },
  {
    std: "Executive Altitude",
    desc: "All content is written for senior finance professionals. We do not over-explain, over-simplify, or design towards a multiple-choice exam. We design towards the boardroom and the deal room.",
  },
];

const teamColumns = [
  {
    label: "Deal Experience",
    items: [
      "Investment Banking & M&A Advisory",
      "Private Equity Fund Management",
      "Private Credit & Leveraged Finance",
      "Structured Finance & Securitisation",
      "Real World Tokenization & Digital Assets",
      "Venture Capital & Growth Equity",
    ],
  },
  {
    label: "Sector Coverage",
    items: [
      "Financial Services & FinTech",
      "Real Estate & Infrastructure",
      "Technology & Growth Equity",
      "Energy & Natural Resources",
      "Family Office & Wealth Management",
      "Sovereign & Government Advisory",
    ],
  },
  {
    label: "Jurisdictions",
    items: [
      "UK & English Law (Cross-border)",
      "United States (NYSE / NASDAQ / SEC)",
      "European Union (MiFID / ESMA)",
      "Singapore & Hong Kong (MAS / SFC)",
      "Gulf Markets (DIFC / ADGM)",
      "Emerging & Frontier Markets",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About EFA</div>
          <h1 className="page-h1">
            Finance Education Rebuilt<br />
            <em>From First Principles.</em>
          </h1>
          <p className="page-subtitle">
            We are practitioners who got tired of training that does not survive contact with a live deal.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad section-light">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="gold-rule reveal" />
          <h2 className="section-h2 reveal">The EFA Story</h2>
          <div className="section-body reveal" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p>
              Executive Finance Academy was founded on a single conviction: that the most consequential gap in
              professional finance education is not breadth of content, but depth of application.
            </p>
            <p>
              Most platforms have solved the content problem. They offer hundreds of courses, thousands of articles,
              and libraries of models. What they have not solved is the logic problem — the ability to take a framework
              learned in a module and deploy it confidently in the context of a live transaction, a board presentation,
              or a regulatory filing.
            </p>
            <p>
              EFA was built to solve that problem. Every programme begins with the deal, not the textbook. We ask:
              what does a Group CFO actually need to know before walking into an M&A discussion? What does a principal
              need to grasp before authorising a leveraged buyout?
            </p>
            <p>
              The answers to those questions shape every module, every case study, and every piece of content we produce.
              The result is education designed for professionals operating across global capital markets — not tailored
              to any single geography or market convention.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-pad section-grey">
        <div className="container">
          <div className="eyebrow reveal">Methodology</div>
          <h2 className="section-h2 reveal">How We Teach</h2>
          <div
            className="two-col-grid reveal"
            style={{ marginTop: "40px" }}
          >
            {methodology.map((m) => (
              <div key={m.title} className="card">
                <h3 className="section-h3">{m.title}</h3>
                <p className="section-body" style={{ fontSize: "14px" }}>{m.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad section-dark">
        <div className="container">
          <div className="team-quote-block reveal">
            <span className="team-quotemark">&ldquo;</span>
            <p className="team-quote">
              The team behind Executive Finance Academy brings together decades of deal-making experience across
              investment banking, private equity, private credit, and corporate finance. Every member is a practitioner
              first: professionals who have structured transactions, sat on investment committees, managed portfolios,
              and advised boards across global markets.
            </p>
            <p className="team-quote-sub" style={{ marginTop: "20px" }}>
              We operate without named profiles because the knowledge itself is the credential. In a world saturated
              with personal branding and thought leadership content, we prefer to let the depth and applicability of the
              curriculum make the case.
            </p>
          </div>
          <div className="team-cols reveal">
            {teamColumns.map((col) => (
              <div key={col.label} className="team-col">
                <h4 className="team-col-heading">{col.label}</h4>
                <ul className="team-col-items">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="section-pad section-light">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="section-h2 reveal">How EFA Differs From Other Finance Education</h2>
          <div
            className="two-col-grid reveal"
            style={{ marginBottom: "2px" }}
          >
            <div className="card">
              <h3 className="section-h3">vs. Analyst-Focused Platforms</h3>
              <p className="section-body" style={{ fontSize: "14px" }}>
                Platforms such as Wall Street Prep and Breaking Into Wall Street are designed primarily for students and
                junior analysts seeking to enter investment banking. Their content teaches you how to build a model to
                get a job. EFA is built for professionals who already hold senior roles and need frameworks deployable in
                a live deal, board presentation, or investment committee discussion.
              </p>
            </div>
            <div className="card">
              <h3 className="section-h3">vs. Business School Executive Education</h3>
              <p className="section-body" style={{ fontSize: "14px" }}>
                Executive education programmes at LBS, INSEAD, and Wharton offer broad management frameworks — often
                campus-based, cohort-driven, and priced at thousands of pounds. EFA offers the opposite: highly
                specialised, on-demand technical finance training from $500, authored by active practitioners and
                designed to be immediately applicable rather than conceptually enriching.
              </p>
            </div>
          </div>
          <div className="card-ink-solid reveal">
            <p className="eyebrow" style={{ marginBottom: "16px" }}>The EFA Position</p>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#8a8a9a" }}>
              Executive Finance Academy occupies a distinct position in the global finance education market: specialised
              enough to cover topics at the depth a senior practitioner requires, accessible enough to be completed on
              demand without leaving your desk, and priced for individual professionals rather than corporate training
              budgets. It is not a substitute for either of the above — it is a category of its own.
            </p>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section-pad section-grey">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="section-h2 reveal">Our Standards Framework</h2>
          <div className="data-table reveal">
            {standards.map((s) => (
              <div key={s.std} className="data-row">
                <p className="data-label">{s.std}</p>
                <p className="data-value">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band reveal">
        <div className="cta-band-left">
          <h2 className="cta-band-title">Ready to Begin?</h2>
          <p className="cta-band-body">
            Explore our live courses or register your interest for upcoming programmes.
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
