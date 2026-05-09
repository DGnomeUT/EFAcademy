import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import HomeInteractive from "@/components/HomeInteractive";

export const metadata: Metadata = {
  title: "Executive Finance Academy | Practitioner-Built Finance Courses for Executives",
  description:
    "Global online finance courses for CFOs, fund managers, and senior investment professionals. Real World Tokenization from $500. Private Equity, M&A, Leveraged Finance coming soon. 100% practitioner-authored.",
  alternates: { canonical: "https://executivefinanceacademy.com" },
};

const FOUNDATION_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme";
const EXECUTIVE_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme1";

const tickerItems = [
  "Private Equity", "Real World Tokenization", "Leveraged Finance",
  "M&A Execution", "LBO Modelling", "Distressed M&A",
  "Islamic Finance & Sukuk", "FAST Modelling", "Debt Restructuring",
  "SPACs", "Securitisation", "Valuation Frameworks",
  "Digital Asset Structures", "Regulatory Compliance", "Due Diligence",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Executive Finance Academy?", acceptedAnswer: { "@type": "Answer", text: "Executive Finance Academy is an online finance education platform built by practitioners for senior finance professionals, covering private markets, M&A, special situations, and frontier finance." } },
    { "@type": "Question", name: "Who are Executive Finance Academy courses designed for?", acceptedAnswer: { "@type": "Answer", text: "Senior finance professionals — CFOs, principals, fund managers, investment directors, general counsels, and board advisors — who need executable technical knowledge." } },
    { "@type": "Question", name: "What courses does Executive Finance Academy currently offer?", acceptedAnswer: { "@type": "Answer", text: "Our inaugural programme is Real World Tokenization, available at Foundation ($500) and Executive ($1,250) tiers." } },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomeInteractive />

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span>Practitioner-Led · Deal-Driven · Globally Relevant</span>
          </div>
          <h1 className="hero-title">Deal-Level<br /><em>Precision.</em></h1>
          <p className="hero-body">Executive Finance Academy delivers practitioner-built online finance courses for CFOs, principals, fund managers, and senior investment professionals operating across global capital markets.</p>
          <p className="hero-sub">Executive finance education rebuilt from first principles — for the deal room, not the classroom.</p>
          <div className="hero-actions">
            <Link href="/courses" className="btn-primary">Explore Courses</Link>
            <Link href="/about" className="btn-ghost">Our Philosophy</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-right-bg" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 10L185 55V145L100 190L15 145V55L100 10Z" stroke="white" strokeWidth="0.5"/>
              <path d="M100 30L170 67.5V132.5L100 170L30 132.5V67.5L100 30Z" stroke="white" strokeWidth="0.5"/>
              <path d="M100 50L155 80V120L100 150L45 120V80L100 50Z" stroke="white" strokeWidth="0.5"/>
              <path d="M100 70L140 92.5V107.5L100 130L60 107.5V92.5L100 70Z" stroke="white" strokeWidth="0.5"/>
            </svg>
          </div>

          <div className="hero-feature-list">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg viewBox="0 0 14 14" fill="none"><path d="M1 13L5 8L8 11L13 4" stroke="#C9A85C" strokeWidth="0.8"/></svg>
              </div>
              <div>
                <div className="hero-feature-title">Deal-Room Frameworks</div>
                <div className="hero-feature-desc">Every module is built around real transaction structures, not academic case studies</div>
              </div>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#C9A85C" strokeWidth="0.8"/><path d="M7 4v3.5l2 1.5" stroke="#C9A85C" strokeWidth="0.8"/></svg>
              </div>
              <div>
                <div className="hero-feature-title">On-Demand Access</div>
                <div className="hero-feature-desc">Learn at deal pace — video modules, written notes, and executive question sets</div>
              </div>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg viewBox="0 0 14 14" fill="none"><path d="M2 12V7l5-5 5 5v5H9V9H5v3H2Z" stroke="#C9A85C" strokeWidth="0.8" fill="none"/></svg>
              </div>
              <div>
                <div className="hero-feature-title">6+ Global Jurisdictions</div>
                <div className="hero-feature-desc">UK, US, EU, Singapore, Hong Kong, and Gulf regulatory coverage in every programme</div>
              </div>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg viewBox="0 0 14 14" fill="none"><rect x="2" y="4" width="10" height="7" rx="0.5" stroke="#C9A85C" strokeWidth="0.8"/><path d="M5 4V3a2 2 0 014 0v1" stroke="#C9A85C" strokeWidth="0.8"/></svg>
              </div>
              <div>
                <div className="hero-feature-title">Certificate of Completion</div>
                <div className="hero-feature-desc">Verifiable credential issued upon successful completion of each programme</div>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">29+</div>
              <div className="hero-stat-label">Deal Topic Domains</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">16</div>
              <div className="hero-stat-label">Modules in Premium</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">6+</div>
              <div className="hero-stat-label">Global Jurisdictions</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">100%</div>
              <div className="hero-stat-label">Practitioner-Authored</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker-bar" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>
              <span className="ticker-item">{item}</span>
              <span className="ticker-sep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── WHY EFA ── */}
      <section className="section-light section-pad">
        <div className="container">
          <div className="why-grid">
            <div className="why-left reveal">
              <div className="eyebrow">Why Executive Finance Academy</div>
              <h2 className="section-title">Finance Education<br />Rebuilt From<br />First Principles.</h2>
              <p className="why-body">The conventional executive education model — whether academic programmes at top business schools or analyst-focused online platforms — was not designed for the rhythm of senior deal execution. EFA was. Every module begins with the deal, not the textbook.</p>
            </div>
            <div className="value-props">
              <div className="value-prop reveal reveal-delay-1">
                <div className="value-prop-num">01</div>
                <div className="value-prop-title">Built by Those Who Have Done the Deal</div>
                <p className="value-prop-body">Every module is authored and delivered by practitioners who have structured transactions, managed funds, and advised boards — not academics who have studied them. You receive frameworks stress-tested in live deal environments.</p>
              </div>
              <div className="value-prop reveal reveal-delay-2">
                <div className="value-prop-num">02</div>
                <div className="value-prop-title">Technical Rigour Without the Theory Tax</div>
                <p className="value-prop-body">We strip away academic abstraction and build from first principles. Whether you are modelling an LBO, structuring a digital security, or evaluating a tokenised fund offering, the logic is grounded, defensible, and deployable on your next transaction.</p>
              </div>
              <div className="value-prop reveal reveal-delay-3">
                <div className="value-prop-num">03</div>
                <div className="value-prop-title">Built for Every Major Financial Centre</div>
                <p className="value-prop-body">Our curriculum is designed for executives operating across the world's leading capital markets — UK, US, EU, Singapore, Hong Kong, and the Gulf. One online platform, every jurisdiction that matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES / PRICING ── */}
      <section id="courses" className="section-pad">
        <div className="container">
          <div className="pricing-intro reveal">
            <div className="eyebrow" style={{ justifyContent: "center", color: "var(--gold)" }}>Our Inaugural Programme</div>
            <h2 className="section-title section-title-light">Real World Tokenization</h2>
            <p>Our inaugural online finance programme is available at two tiers — choose the depth that matches your mandate.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card reveal reveal-delay-1">
              <div className="pricing-tier">Foundation Programme</div>
              <div className="pricing-course">Real World<br />Tokenization</div>
              <div className="pricing-price">$500</div>
              <p className="pricing-desc">The institutional framework for tokenising private assets and designing compliant digital securities. A rigorous on-demand finance certification for senior professionals encountering tokenised assets in a professional context.</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                <li>8 on-demand video modules with slide presentations</li>
                <li>Tokenising private equity, real estate, and infrastructure</li>
                <li>Smart contract design for automated institutional compliance</li>
                <li>Regulatory frameworks: UK (FCA), US (SEC), EU, Singapore (MAS), Hong Kong (SFC), Gulf (DIFC/ADGM)</li>
                <li>Live tokenisation case studies across global markets</li>
                <li>Certificate of completion</li>
              </ul>
              <a href={FOUNDATION_URL} target="_blank" rel="noreferrer" className="btn-enrol-outline">Enrol — Foundation</a>
            </div>

            <div className="pricing-card featured reveal reveal-delay-2">
              <div className="pricing-badge">Most Complete</div>
              <div className="pricing-tier">Executive Programme</div>
              <div className="pricing-course">Real World<br />Tokenization</div>
              <div className="pricing-price">$1,250</div>
              <p className="pricing-desc">Everything in the Foundation Programme, plus a comprehensive institutional reference library — the complete online finance certification for executives who need to brief boards, evaluate vendor proposals, conduct due diligence, and build internal capability.</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                <li>46 video lessons across 16 modules</li>
                <li>46 slide presentations (non-downloadable)</li>
                <li>16 detailed written module notes</li>
                <li>16 executive question sets — MCQs with answer keys &amp; explanations</li>
                <li>16 curated bibliographies linking to primary research &amp; regulatory documents</li>
                <li>Complete institutional reference for working knowledge</li>
                <li>Certificate of completion</li>
              </ul>
              <a href={EXECUTIVE_URL} target="_blank" rel="noreferrer" className="btn-enrol-gold">Enrol — Executive Programme</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE PILLARS ── */}
      <section id="pillars" className="section-light section-pad">
        <div className="container">
          <div className="pillars-header reveal">
            <div>
              <div className="eyebrow">The Curriculum Architecture</div>
              <h2 className="section-title">Five Pillars.<br />A Complete Transaction<br />Intelligence System.</h2>
            </div>
            <div>
              <p className="pillars-intro-body">The EFA curriculum is organised around the five domains that define the modern deal professional — from private equity and M&A to technical modelling, special situations, and frontier finance.</p>
            </div>
          </div>
          <div className="pillars-grid">
            {[
              { num: "01", title: "Private Markets & Alternatives", items: ["Private Equity", "Venture Capital", "Alternative Credit", "Real Estate Funds"], status: "Coming Soon" },
              { num: "02", title: "Transaction Strategy & M&A", items: ["M&A Execution", "Due Diligence", "Post-Merger Integration", "Carve-outs & Spin-offs"], status: "Coming Soon" },
              { num: "03", title: "Technical Modelling", items: ["FAST / F1F9 Modelling", "LBO Analysis", "Valuation Frameworks", "Financial Statements"], status: "Coming Soon" },
              { num: "04", title: "Special Situations", items: ["Distressed M&A", "Debt Restructuring", "Securitisation", "Special Situations"], status: "Coming Soon" },
              { num: "05", title: "Frontier Finance", items: ["Real World Tokenization", "Islamic Finance & Sukuk", "SPACs", "Digital Asset Structures"], status: "Live & Coming Soon" },
            ].map((p, i) => (
              <div key={p.num} className={`pillar-card reveal reveal-delay-${i + 1}`}>
                <div className="pillar-num">{p.num}</div>
                <div className="pillar-title">{p.title}</div>
                <ul className="pillar-items">
                  {p.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <span className="pillar-status">{p.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM BAR ── */}
      <div className="curriculum-bar">
        <span className="curriculum-bar-label">Curriculum standards</span>
        <div className="curriculum-standards">
          <span>FAST Modelling Standard</span>
          <span>F1F9 Principles</span>
          <span>English Law Foundations</span>
          <span>Global Regulatory Frameworks</span>
        </div>
      </div>

      {/* ── TEAM ── */}
      <section id="team" className="section-dark section-pad">
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>The Team</div>
          <div className="team-quote-block reveal">
            <span className="team-quotemark">&ldquo;</span>
            <blockquote className="team-quote">The team behind Executive Finance Academy brings together decades of deal-making experience across investment banking, private equity, private credit, and corporate finance. Every member is a practitioner first — professionals who have structured transactions, sat on investment committees, managed portfolios, and advised boards across global markets.</blockquote>
            <p className="team-quote-sub">Our perspective is not academic. It is built from the deal room, the term sheet, and the due diligence process. We operate without named profiles because the knowledge itself is the credential.</p>
          </div>
          <div className="team-cols">
            <div className="team-col reveal reveal-delay-1">
              <div className="team-col-heading">Deal Experience</div>
              <ul className="team-col-items">
                <li>Investment Banking &amp; M&amp;A Advisory</li>
                <li>Private Equity Fund Management</li>
                <li>Private Credit &amp; Leveraged Finance</li>
                <li>Structured Finance &amp; Securitisation</li>
                <li>Real World Tokenization &amp; Digital Assets</li>
              </ul>
            </div>
            <div className="team-col reveal reveal-delay-2">
              <div className="team-col-heading">Sector Coverage</div>
              <ul className="team-col-items">
                <li>Financial Services &amp; FinTech</li>
                <li>Real Estate &amp; Infrastructure</li>
                <li>Technology &amp; Growth Equity</li>
                <li>Energy &amp; Natural Resources</li>
                <li>Family Office &amp; Wealth Management</li>
              </ul>
            </div>
            <div className="team-col reveal reveal-delay-3">
              <div className="team-col-heading">Jurisdictions</div>
              <ul className="team-col-items">
                <li>UK &amp; English Law (Cross-border)</li>
                <li>United States (NYSE / NASDAQ / SEC)</li>
                <li>European Union (MiFID / ESMA)</li>
                <li>Singapore &amp; Hong Kong (MAS / SFC)</li>
                <li>Gulf Markets (DIFC / ADGM)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-light section-pad">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Frequently Asked Questions</div>
            <h2 className="section-title">Common Questions<br />About EFA</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div className="cta-band">
        <div className="cta-band-left">
          <h2 className="cta-band-title">Ready to operate at<br />deal-room standard?</h2>
          <p className="cta-band-body">Enrol in our inaugural Real World Tokenization programme and acquire the institutional frameworks your mandate requires.</p>
        </div>
        <div className="cta-band-actions">
          <Link href="/courses" className="btn-primary">Explore Courses</Link>
          <Link href="#pillars" className="btn-ghost">View Curriculum</Link>
        </div>
      </div>
    </>
  );
}
