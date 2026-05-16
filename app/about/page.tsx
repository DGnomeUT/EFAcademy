import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Executive Finance Academy | Practitioner-Led Finance Education",
  description:
    "Executive Finance Academy is built by practitioners who structure transactions, sit on investment committees, and advise boards. Practitioner-authored online finance courses for CFOs, fund managers, and senior investment professionals — taught from the deal inward, not the textbook outward.",
  keywords: [
    "practitioner-led finance education",
    "executive finance academy about",
    "finance courses built by practitioners",
    "online finance education for CFOs",
    "deal-first finance curriculum",
    "finance education for senior executives",
    "investment banking training practitioners",
    "private equity education online",
  ],
  alternates: { canonical: "https://executivefinanceacademy.com/about" },
};

const methodology = [
  {
    title: "Deal-First Curriculum Design",
    copy: "We do not start with a syllabus and search for applications. We start with a transaction — a buyout, a cross-border acquisition, a tokenised issuance — and ask what an executive must actually know to carry it. The knowledge required to execute becomes the curriculum; everything that does not survive that test is cut.",
  },
  {
    title: "Practitioner Authorship",
    copy: "No course is written by a curriculum developer or assembled from academic papers. Each is authored by professionals who have sat on deal teams, run investment committees, managed portfolios, and answered to boards. The judgement calls, the failure modes, and the points where a deal quietly goes wrong are written in by people who have seen them.",
  },
  {
    title: "Global Regulatory Coverage",
    copy: "Capital does not respect borders, and neither does our content. Regulatory material is written for professionals operating across financial centres — English law as the prevailing system for international finance, alongside US securities law, EU directives, and the regimes governing Singapore, Hong Kong, and the Gulf.",
  },
  {
    title: "Executive Altitude",
    copy: "Our content is written for senior professionals, and the tone reflects it. We do not over-explain, pad with theory, or build towards a multiple-choice exam. We assume the reader is fluent, time-constrained, and accountable — and we write at the altitude they already operate at: the boardroom and the deal room.",
  },
];

const standards = [
  {
    std: "FAST Modelling Standard",
    desc: "Every financial model is built to FAST principles — Flexible, Appropriate, Structured, Transparent. The standard is not decorative: it produces a model a counterparty analyst can open, follow, and stress-test without a walkthrough, and that survives audit and peer review.",
  },
  {
    std: "F1F9 Standard",
    desc: "Colour-coding, structural hierarchy, and formula logic across all spreadsheet content follow F1F9 conventions. The result is institutional portability — a model that reads identically whether it lands on a desk in London, New York, or Singapore, with no house style to decode.",
  },
  {
    std: "English Law Foundations",
    desc: "Cross-border transaction content is grounded in English law, the prevailing system for international finance and the governing law of choice for most cross-border documentation. Coverage extends to US, EU, and Asia-Pacific frameworks wherever a transaction touches them.",
  },
  {
    std: "Global Regulatory Frameworks",
    desc: "Regulatory content references the authorities that actually govern the world's major financial centres — the FCA, SEC, ESMA, MAS, SFC, and the DIFC and ADGM in the Gulf. We name the regime and the rule, not a generalised abstraction of it.",
  },
  {
    std: "Executive Altitude",
    desc: "All content is pitched for senior finance professionals. We do not over-explain, over-simplify, or design towards an exam. We design towards the moment that matters — the board paper, the IC vote, the negotiation — and write only what is needed to perform there.",
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
      "Restructuring & Special Situations",
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
      "Healthcare & Consumer",
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
      "Offshore Fund Domiciles",
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
            We are practitioners who grew tired of training that reads well in a classroom and fails on
            contact with a live deal. Executive Finance Academy is the education we wanted and could not find.
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
              Executive Finance Academy was founded on a single conviction: that the most consequential gap
              in professional finance education is not breadth of content, but depth of application. There
              is no shortage of material. There is a shortage of material that can be used.
            </p>
            <p>
              Most platforms have solved the content problem comprehensively. They offer hundreds of courses,
              thousands of articles, and entire libraries of models. What they have not solved is the logic
              problem — and the logic problem is the one that matters. The logic problem is the distance
              between a framework understood in a module and a framework deployed under pressure: in a live
              negotiation, in a board paper that will be voted on, in a regulatory filing that carries a
              signature and a liability.
            </p>
            <p>
              In practice that gap is specific, not abstract. A Group CFO walking into an M&A discussion does
              not need a definition of EBITDA. They need to know which adjustments the other side will
              contest, where the working-capital peg should sit, what a locked-box mechanism does to their
              risk between signing and completion, and which warranties they should refuse to give. That is
              not content. That is judgement — and judgement is what conventional training quietly omits.
            </p>
            <p>
              A live deal, viewed through the lens of this education, is a sequence of decisions made with
              incomplete information against a clock. The model is one input. The diligence findings are
              another. The regulatory timetable, the financing conditions, the personalities across the
              table, and the downside if it breaks are all live at once. Education that prepares a
              professional for that moment has to teach the whole sequence — not a tidy slice of it
              abstracted from the noise.
            </p>
            <p>
              EFA was built to close that gap. Every programme begins with the deal, not the textbook. We
              ask: what does a Group CFO actually need before that M&A discussion? What must a principal
              grasp before authorising a leveraged buyout? What does a structurer need to defend a tokenised
              issuance to a regulator? We answer those questions first, then build the curriculum backwards
              from the answer.
            </p>
            <p>
              The result is education designed for professionals operating across global capital markets —
              not tailored to a single geography or market convention, not pitched at the analyst seeking a
              first job, and not diluted to fill a longer syllabus. It is technical, current, and written by
              people who have carried the same decisions the reader is preparing to make.
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
              The team behind Executive Finance Academy brings together decades of deal-making across
              investment banking, private equity, private credit, structured finance, and corporate
              advisory. Every contributor is a practitioner first — professionals who have priced and
              structured transactions, sat on the investment committees that approved or killed them,
              managed portfolios through full cycles, and answered to boards when the outcome had to be
              defended.
            </p>
            <p className="team-quote-sub" style={{ marginTop: "20px" }}>
              We operate without named profiles by deliberate choice. The curriculum is the credential,
              and it should stand on its own merits — testable against the reader&apos;s own experience
              of a live deal, not against a biography. In a market saturated with personal branding and
              thought-leadership content, we would rather be judged on whether the work holds up in the
              deal room. If it does, the names are irrelevant. If it does not, the names would not have
              saved it.
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
                Platforms such as Wall Street Prep and Breaking Into Wall Street are built for students and
                junior analysts trying to enter investment banking. Their purpose is to teach a candidate to
                build a model well enough to pass an interview and survive a first year on a desk — and they
                do that job well. EFA starts where that job ends. It is written for professionals who already
                hold senior roles and need frameworks that hold up in a live deal, a board presentation, or
                an investment committee vote — where the question is not whether the model is built correctly,
                but whether the decision behind it is right.
              </p>
            </div>
            <div className="card">
              <h3 className="section-h3">vs. Business School Executive Education</h3>
              <p className="section-body" style={{ fontSize: "14px" }}>
                Executive programmes at LBS, INSEAD, and Wharton deliver broad management frameworks — often
                campus-based, cohort-paced, scheduled months ahead, and priced in the thousands. They are
                valuable for perspective and network. EFA is engineered for the opposite need: deep,
                specialised, technical finance training, available on demand from $500, authored by active
                practitioners, and built to be applied the same week it is completed rather than admired in
                the abstract. One broadens the executive. The other equips them for a specific transaction.
              </p>
            </div>
          </div>
          <div className="card-ink-solid reveal">
            <p className="eyebrow" style={{ marginBottom: "16px" }}>The EFA Position</p>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#8a8a9a" }}>
              Executive Finance Academy occupies a position the existing market leaves open: specialised
              enough to treat a subject at the depth a senior practitioner genuinely requires, accessible
              enough to complete on demand without leaving the desk or clearing a calendar, and priced for
              the individual professional rather than a corporate training budget. It is not a cheaper
              version of business school, and it is not a more advanced analyst course. It is a distinct
              category — practitioner education, sold direct to the practitioner — and it is built to be
              measured against the only standard that counts: whether it works when the deal is real.
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
