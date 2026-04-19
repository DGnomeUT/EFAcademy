import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Executive Finance Academy | Practitioner-Built Finance Courses for Executives",
  description:
    "Global online finance courses for CFOs, fund managers, and senior investment professionals. Real World Tokenization from $500. Private Equity, M&A, Leveraged Finance coming soon. 100% practitioner-authored.",
  alternates: {
    canonical: "https://executivefinanceacademy.com",
  },
};

const TOKENIZATION_BASIC_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme";
const TOKENIZATION_PREMIUM_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme1";

const pillars = [
  { num: "01", title: "Private Markets & Alternatives", items: ["Private Equity", "Venture Capital", "Alternative Credit", "Real Estate Funds"] },
  { num: "02", title: "Transaction Strategy & M&A", items: ["M&A Execution", "Due Diligence", "Post-Merger Integration", "Carve-outs & Spin-offs"] },
  { num: "03", title: "Technical Modelling", items: ["FAST / F1F9 Modelling", "LBO Analysis", "Valuation Frameworks", "Financial Statements"] },
  { num: "04", title: "Special Situations", items: ["Distressed M&A", "Debt Restructuring", "Securitisation", "Special Situations"] },
  { num: "05", title: "Frontier Finance", items: ["Real World Tokenization", "Islamic Finance & Sukuk", "SPACs", "Digital Asset Structures"] },
];

const differentiators = [
  {
    icon: "◈",
    heading: "Built by Those Who Have Done the Deal",
    copy: "Every module is authored and delivered by practitioners who have structured transactions, managed funds, and advised boards — not academics who have studied them. You receive frameworks stress-tested in live deal environments.",
  },
  {
    icon: "◈",
    heading: "Technical Rigour Without the Theory Tax",
    copy: "We strip away academic abstraction and build from first principles. Whether you are modelling an LBO, structuring a digital security, or evaluating a tokenised fund offering, the logic is grounded, defensible, and deployable on your next transaction.",
  },
  {
    icon: "◈",
    heading: "Built for Every Major Financial Centre",
    copy: "Our curriculum is designed for executives operating across the world's leading capital markets — UK, US, EU, Singapore, Hong Kong, and the Gulf. One online platform, every jurisdiction that matters.",
  },
];

const stats = [
  { stat: "29+", label: "Deal Topic Domains" },
  { stat: "16", label: "Modules in Premium" },
  { stat: "6+", label: "Global Jurisdictions" },
  { stat: "100%", label: "Practitioner-Authored" },
];

const faqs = [
  {
    q: "What is Executive Finance Academy?",
    a: "Executive Finance Academy (EFA) is a global online finance education platform offering practitioner-built courses for senior finance professionals. EFA programmes cover private markets, transaction structuring, digital assets, and frontier finance — designed for CFOs, fund managers, investment principals, and corporate finance executives operating across international capital markets. Every course is authored exclusively by practitioners who have structured transactions, sat on investment committees, managed portfolios, and advised boards.",
  },
  {
    q: "Who are Executive Finance Academy courses designed for?",
    a: "EFA courses are designed for senior finance professionals: Group CFOs, private equity principals, fund managers, investment bankers, corporate finance directors, family office executives, and legal advisors active in capital markets. The programmes are written at executive altitude — for professionals who make investment decisions, chair deal teams, and present to boards. They are not designed for entry-level analysts or students.",
  },
  {
    q: "What courses does Executive Finance Academy currently offer?",
    a: "Executive Finance Academy currently offers two programmes on Real World Tokenization: a Foundation Programme ($500, 8 modules) and an Executive Programme ($1,250, 16 modules with 46 video lessons, detailed module notes, executive question sets with answer keys, and curated bibliographies). Upcoming programmes include Private Equity & LBO Modelling, M&A Execution, Leveraged Finance & Private Credit, Due Diligence, Venture Capital, and Islamic Finance & Shariah-Compliant Structuring.",
  },
  {
    q: "How is Executive Finance Academy different from Wall Street Prep or similar platforms?",
    a: "Unlike Wall Street Prep, Breaking Into Wall Street, and similar platforms — which are primarily designed for entry-level analysts seeking jobs in investment banking — Executive Finance Academy is built exclusively for senior professionals already operating in deal environments. EFA content is authored by practitioners with board-level and investment committee experience. EFA does not teach you how to get into finance; it makes you more effective at the senior level you already hold.",
  },
  {
    q: "How is Executive Finance Academy different from business school executive education?",
    a: "Unlike executive education programmes at institutions such as LBS, INSEAD, or Wharton — which are typically campus-based, generalist in scope, and priced at thousands of pounds per programme — Executive Finance Academy offers highly specialised, on-demand technical programmes starting from $500. EFA content is authored by active deal practitioners rather than faculty researchers, and is designed to be deployed immediately in a live deal or board context rather than applied abstractly.",
  },
  {
    q: "Is Executive Finance Academy available globally?",
    a: "Yes. Executive Finance Academy is a fully online platform available to finance professionals worldwide. The curriculum covers the regulatory and legal frameworks of the UK, United States, European Union, Singapore, Hong Kong, and Gulf markets. All programmes are delivered in English and are accessible on demand from any location.",
  },
  {
    q: "Do Executive Finance Academy courses include a certificate?",
    a: "Yes. All Executive Finance Academy programmes include a certificate of completion, issued upon finishing all modules of the respective programme.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="bg-[#1A2E4A] min-h-screen flex flex-col justify-center px-6 lg:px-10 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
          <Image src="/logo-mark.png" alt="" width={480} height={480} />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase mb-6 fade-in">
            Practitioner-Led &nbsp;·&nbsp; Deal-Driven &nbsp;·&nbsp; Globally Relevant
          </p>
          <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl fade-in-delay-1">
            Where Executive Intelligence Meets{" "}
            <span className="text-[#C9A84C]">Deal-Level Precision.</span>
          </h1>
          <p className="text-[#E8D4A0] text-lg md:text-xl max-w-2xl mb-4 leading-relaxed fade-in-delay-2">
            Executive Finance Academy delivers practitioner-built online finance courses for CFOs, principals, fund managers, and senior investment professionals operating across global capital markets.
          </p>
          <p className="text-[#E8D4A0]/70 text-base max-w-2xl mb-10 leading-relaxed fade-in-delay-2">
            Executive finance education rebuilt from first principles — for the deal room, not the classroom.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="px-8 py-4 bg-[#C9A84C] text-[#1A2E4A] font-bold text-sm tracking-wide hover:bg-[#E8D4A0] transition-colors"
            >
              Explore Courses
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-[#C9A84C] text-[#C9A84C] font-semibold text-sm tracking-wide hover:bg-[#C9A84C] hover:text-[#1A2E4A] transition-colors"
            >
              Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────── */}
      <section className="bg-[#F4F5F6] py-10 px-6 lg:px-10 border-b border-[#D0D4D8]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.stat} className="text-center">
              <p className="font-serif text-[#1A2E4A] text-2xl md:text-3xl font-bold mb-1">{s.stat}</p>
              <p className="text-[#4A5568] text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY EFA ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3">Why Executive Finance Academy?</p>
          <h2 className="font-serif text-[#1A2E4A] text-3xl md:text-4xl font-bold mb-4 max-w-2xl">
            Finance Education Rebuilt From First Principles.
          </h2>
          <p className="text-[#4A5568] text-base max-w-2xl mb-14 leading-relaxed">
            The conventional executive education model — whether academic programmes at top business schools or analyst-focused online platforms — was not designed for the rhythm of senior deal execution. EFA was. Every module begins with the deal, not the textbook.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.heading} className="course-card bg-[#F4F5F6] p-8 border-t-4 border-[#C9A84C]">
                <p className="text-[#C9A84C] text-xl mb-4">{d.icon}</p>
                <h3 className="font-serif text-[#1A2E4A] text-lg font-bold mb-3">{d.heading}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{d.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ───────────────────────────────────────────────────── */}
      <section className="bg-[#1A2E4A] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3 text-center">Launch Curriculum</p>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-4 text-center">
            One Subject. Two Levels of Mastery.
          </h2>
          <p className="text-[#E8D4A0] text-center max-w-2xl mx-auto mb-14">
            Our inaugural online finance programme on Real World Tokenization is available at two tiers — choose the depth that matches your mandate.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Foundation Card */}
            <div className="course-card bg-[#111F33] border-l-4 border-[#C9A84C] p-8 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Foundation Programme</span>
                <span className="text-white font-serif text-2xl font-bold shrink-0">$500</span>
              </div>
              <h3 className="font-serif text-white text-2xl font-bold mb-3">Real World Tokenization</h3>
              <p className="text-[#E8D4A0] text-sm mb-6 leading-relaxed">
                The institutional framework for tokenising private assets and designing compliant digital securities. A rigorous on-demand finance certification for senior professionals encountering tokenised assets in a professional context.
              </p>
              <ul className="space-y-2 mb-8 flex-grow">
                {[
                  "8 on-demand video modules with slide presentations",
                  "Tokenising private equity, real estate, and infrastructure",
                  "Smart contract design for automated institutional compliance",
                  "Regulatory frameworks: UK (FCA), US (SEC), EU, Singapore (MAS), Hong Kong (SFC), Gulf (DIFC/ADGM)",
                  "Live tokenisation case studies across global markets",
                  "Certificate of completion",
                ].map((b) => (
                  <li key={b} className="text-[#E8D4A0]/80 text-sm flex gap-2">
                    <span className="text-[#C9A84C] shrink-0 mt-0.5">→</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={TOKENIZATION_BASIC_URL}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-[#C9A84C] text-[#1A2E4A] text-sm font-bold text-center hover:bg-[#E8D4A0] transition-colors"
              >
                Enrol — Foundation
              </a>
            </div>

            {/* Executive / Premium Card */}
            <div className="course-card bg-[#111F33] border-l-4 border-[#E8D4A0] p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#1A2E4A] text-xs font-bold px-3 py-1 tracking-wider uppercase">
                Most Complete
              </div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="text-[#E8D4A0] text-xs font-bold tracking-[0.2em] uppercase">Executive Programme</span>
                <span className="text-white font-serif text-2xl font-bold shrink-0">$1,250</span>
              </div>
              <h3 className="font-serif text-white text-2xl font-bold mb-3">Real World Tokenization</h3>
              <p className="text-[#E8D4A0] text-sm mb-6 leading-relaxed">
                Everything in the Foundation Programme, plus a comprehensive institutional reference library — the complete online finance certification for executives who need to brief boards, evaluate vendor proposals, conduct due diligence, and build internal capability.
              </p>
              <ul className="space-y-2 mb-8 flex-grow">
                {[
                  "46 video lessons across 16 modules",
                  "46 slide presentations (non-downloadable)",
                  "16 detailed written module notes",
                  "16 executive question sets — MCQs with answer keys & explanations",
                  "16 curated bibliographies linking to primary research & regulatory documents",
                  "Complete institutional reference for working knowledge",
                  "Certificate of completion",
                ].map((b) => (
                  <li key={b} className="text-[#E8D4A0]/90 text-sm flex gap-2">
                    <span className="text-[#E8D4A0] shrink-0 mt-0.5">→</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={TOKENIZATION_PREMIUM_URL}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-white text-[#1A2E4A] text-sm font-bold text-center hover:bg-[#E8D4A0] transition-colors"
              >
                Enrol — Executive Programme
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/courses" className="text-[#C9A84C] text-sm font-semibold hover:text-[#E8D4A0] transition-colors">
              View Full Course Catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM PILLARS ────────────────────────────────────────── */}
      <section className="bg-[#F4F5F6] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3 text-center">The Curriculum Architecture</p>
          <h2 className="font-serif text-[#1A2E4A] text-3xl md:text-4xl font-bold mb-4 text-center">
            Five Pillars. A Complete Transaction Intelligence System.
          </h2>
          <p className="text-[#4A5568] text-center max-w-2xl mx-auto mb-14">
            The EFA curriculum is organised around the five domains that define the modern deal professional — from private equity and M&A to technical modelling, special situations, and frontier finance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((p) => (
              <div key={p.num} className="pillar-card bg-white p-6">
                <p className="text-[#C9A84C] text-2xl font-bold mb-3">{p.num}</p>
                <h3 className="font-serif text-[#1A2E4A] text-base font-bold mb-4 leading-snug">{p.title}</h3>
                <ul className="space-y-1">
                  {p.items.map((item) => (
                    <li key={item} className="text-[#4A5568] text-xs flex gap-1.5">
                      <span className="text-[#C9A84C] mt-0.5 shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[#aaa] text-xs mt-4 italic">
                  {p.num === "05" ? "Live & Coming Soon" : "Coming Soon"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM / CREDIBILITY ────────────────────────────────────────── */}
      <section className="bg-[#1A2E4A] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3 text-center">The Team</p>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-8 text-center">
            Practitioners First. Always.
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[#C9A84C] text-5xl font-serif mb-4">&ldquo;</p>
            <p className="text-[#E8D4A0] text-lg leading-relaxed italic mb-6">
              The team behind Executive Finance Academy brings together decades of deal-making experience across investment banking, private equity, private credit, and corporate finance. Every member is a practitioner first — professionals who have structured transactions, sat on investment committees, managed portfolios, and advised boards across global markets.
            </p>
            <p className="text-[#E8D4A0] text-base leading-relaxed">
              Our perspective is not academic. It is built from the deal room, the term sheet, and the due diligence process. We operate without named profiles because the knowledge itself is the credential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Deal Experience",
                items: ["Investment Banking & M&A Advisory", "Private Equity Fund Management", "Private Credit & Leveraged Finance", "Structured Finance & Securitisation", "Real World Tokenization & Digital Assets", "Venture Capital & Growth Equity"],
              },
              {
                label: "Sector Coverage",
                items: ["Financial Services & FinTech", "Real Estate & Infrastructure", "Technology & Growth Equity", "Energy & Natural Resources", "Family Office & Wealth Management", "Sovereign & Government Advisory"],
              },
              {
                label: "Jurisdictions",
                items: ["UK & English Law (Cross-border)", "United States (NYSE / NASDAQ / SEC)", "European Union (MiFID / ESMA)", "Singapore & Hong Kong (MAS / SFC)", "Gulf Markets (DIFC / ADGM)", "Emerging & Frontier Markets"],
              },
            ].map((col) => (
              <div key={col.label} className="bg-[#111F33] p-6 border-t-4 border-[#C9A84C]">
                <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-4">{col.label}</h4>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-[#E8D4A0] text-sm flex gap-2">
                      <span className="text-[#C9A84C] shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARDS BAR ─────────────────────────────────────────────── */}
      <section className="bg-white py-10 px-6 lg:px-10 border-b border-[#D0D4D8]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#4A5568] text-sm tracking-wide">
            <span className="text-[#1A2E4A] font-semibold">Curriculum standards: </span>
            FAST Modelling Standard &nbsp;·&nbsp; F1F9 Principles &nbsp;·&nbsp; English Law Foundations &nbsp;·&nbsp; Global Regulatory Frameworks
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-[#F4F5F6] py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3">Frequently Asked Questions</p>
          <h2 className="font-serif text-[#1A2E4A] text-3xl font-bold mb-12">
            Common Questions About EFA
          </h2>
          <div className="space-y-0 divide-y divide-[#D0D4D8]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none">
                  <h3 className="font-serif text-[#1A2E4A] text-base font-semibold leading-snug group-open:text-[#C9A84C] transition-colors">
                    {faq.q}
                  </h3>
                  <span className="text-[#C9A84C] shrink-0 text-lg font-light mt-0.5 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-[#4A5568] text-sm leading-relaxed mt-4 max-w-2xl">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-rule mx-auto" />
          <h2 className="font-serif text-[#1A2E4A] text-3xl md:text-4xl font-bold mb-5">
            Ready to Invest in Deal-Level Intelligence?
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-10">
            Join a global cohort of finance executives, principals, and senior practitioners — and build the technical frameworks that separate good advisors from exceptional ones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="px-8 py-4 bg-[#1A2E4A] text-white font-bold text-sm tracking-wide hover:bg-[#111F33] transition-colors"
            >
              View All Courses
            </Link>
            <Link
              href="/enrol"
              className="px-8 py-4 border border-[#1A2E4A] text-[#1A2E4A] font-semibold text-sm tracking-wide hover:bg-[#1A2E4A] hover:text-white transition-colors"
            >
              Enrolment Enquiry
            </Link>
          </div>
          <p className="text-[#4A5568]/60 text-sm mt-6 italic">
            Cohort enrolments open quarterly. Institutional group pricing available on request.
          </p>
        </div>
      </section>
    </>
  );
}
