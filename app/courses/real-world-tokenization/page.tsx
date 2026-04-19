import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real World Tokenization Course | Foundation ($500) & Executive ($1,250)",
  description:
    "The definitive online course on real world asset tokenization for finance professionals. Foundation Programme ($500, 8 modules) or Executive Programme ($1,250, 16 modules, 46 video lessons). Certificate on completion. Covering UK, US, EU, Singapore, Hong Kong, and Gulf regulatory frameworks.",
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
  alternates: {
    canonical: "https://executivefinanceacademy.com/courses/real-world-tokenization",
  },
};

const TOKENIZATION_BASIC_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme";
const TOKENIZATION_PREMIUM_URL =
  "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme1";

const modules = [
  { num: "01", title: "The Architecture of Tokenisation", topics: "Blockchain fundamentals for finance professionals; distributed ledger technology; token standards (ERC-20, ERC-1400)" },
  { num: "02", title: "Private Asset Classes & Tokenisation Mechanics", topics: "Which assets tokenise well; valuation of tokenised fractions; ownership and transfer mechanics" },
  { num: "03", title: "Smart Contracts for Institutional Finance", topics: "Designing compliant smart contracts; automated cap tables; programmable compliance" },
  { num: "04", title: "Regulatory Frameworks for Digital Securities", topics: "FCA (UK); SEC Regulation A+ and Reg D (US); MiFID II digital securities (EU); MAS framework (Singapore); SFC (Hong Kong); DIFC / ADGM (Gulf)" },
  { num: "05", title: "Digital Asset Structuring", topics: "Structuring compliant digital investment vehicles; tokenised fund architecture; investor onboarding and transfer restrictions" },
  { num: "06", title: "Secondary Market Design & Liquidity", topics: "Alternative trading systems for digital securities; market-making for tokenised assets; investor onboarding at scale" },
  { num: "07", title: "Due Diligence for Tokenised Assets", topics: "Evaluating tokenised fund offerings; smart contract audit; underlying asset verification" },
  { num: "08", title: "Case Studies & Live Transaction Analysis", topics: "Real estate tokenisation (UK); private equity (US); infrastructure fund (EU); digital securities (Singapore & Hong Kong) — structure, outcomes, lessons learned" },
];

const premiumExtras = [
  { num: "09", title: "Advanced Structuring: Multi-Jurisdiction Offerings", topics: "Cross-border tokenised securities; passporting digital instruments; managing multi-regulatory compliance simultaneously" },
  { num: "10", title: "Tokenised Debt & Fixed Income", topics: "Tokenised bonds and notes; yield distribution mechanics; institutional custody solutions" },
  { num: "11", title: "Tokenised Real Assets: Deep Dive", topics: "Real estate, infrastructure, and commodities; fractional ownership governance; asset servicer obligations" },
  { num: "12", title: "Fund Tokenisation & LP Structures", topics: "Tokenising closed-end fund interests; secondary liquidity for LP stakes; waterfall and distribution mechanics" },
  { num: "13", title: "Institutional Custody & Settlement", topics: "Digital asset custody models; prime brokerage for tokenised assets; settlement finality and DvP" },
  { num: "14", title: "Investor Relations & Reporting for Tokenised Assets", topics: "On-chain reporting standards; investor communication; regulatory disclosure obligations" },
  { num: "15", title: "Risk Management in Tokenised Markets", topics: "Smart contract risk; counterparty risk in DeFi integrations; operational resilience" },
  { num: "16", title: "The Future of Capital Markets Infrastructure", topics: "Central bank digital currencies; T+0 settlement; the long-term architecture of institutional tokenised finance" },
];

const outcomes = [
  "The architecture of blockchain-based investment banking from the structurer's perspective",
  "How to tokenise illiquid assets: private equity, real estate, infrastructure, and private credit",
  "Smart contract design for institutional use — automating KYC/AML, transfer restrictions, and distributions",
  "Regulatory landscape across six major jurisdictions: UK (FCA), US (SEC), EU (MiFID II), Singapore (MAS), Hong Kong (SFC), Gulf (DIFC/ADGM)",
  "Secondary market design — how to establish and operate compliant secondary venues for tokenised securities",
  "Live case study analysis: real tokenisation transactions across global capital markets",
];

const premiumOutcomes = [
  "Brief boards and investment committees on tokenised asset strategies with confidence",
  "Evaluate vendor proposals and technology platforms against institutional benchmarks",
  "Conduct due diligence on tokenised fund offerings across 16 structured frameworks",
  "Build internal team capability through 16 detailed module notes and structured question sets",
  "Access primary research and regulatory documents through 16 curated bibliographies",
];

const faqs = [
  {
    q: "What is real world asset tokenization?",
    a: "Real world asset tokenization is the process of creating digital representations of physical or financial assets — such as private equity fund interests, real estate, infrastructure, or private credit — on a blockchain. Tokenisation allows illiquid assets to be fractionated, transferred digitally, and made accessible to a broader investor base through compliant digital securities platforms. For institutional finance professionals, tokenisation represents a structural shift in how private assets are distributed, traded, and managed.",
  },
  {
    q: "What is the difference between the Foundation and Executive Real World Tokenization programmes?",
    a: "The Foundation Programme ($500) covers 8 core modules: blockchain architecture, private asset tokenisation mechanics, smart contract design, regulatory frameworks across six jurisdictions (UK, US, EU, Singapore, Hong Kong, Gulf), digital asset structuring, secondary market design, due diligence for tokenised assets, and global case studies. The Executive Programme ($1,250) includes all 8 Foundation modules plus 8 additional advanced modules (16 total), 46 video lessons, 46 slide presentations, 16 detailed written module notes, 16 executive question sets with MCQs and answer keys, and 16 curated bibliographies with links to primary research and regulatory documents.",
  },
  {
    q: "Which regulatory frameworks does the Real World Tokenization course cover?",
    a: "The course covers digital securities regulatory frameworks across six major jurisdictions: FCA digital securities rules (UK), SEC Regulation A+ and Regulation D (US), MiFID II digital securities framework (EU), MAS digital asset regulations (Singapore), SFC framework (Hong Kong), and DIFC/ADGM rules (Gulf). This multi-jurisdictional coverage is a key differentiator — most tokenization courses focus on a single market.",
  },
  {
    q: "Do I need a technical or blockchain background to take this course?",
    a: "No. The Real World Tokenization course is designed for finance professionals, not technologists. It treats blockchain as a structural layer — a mechanism for automating compliance, enhancing liquidity, and distributing private assets — rather than a technology requiring code-level understanding. A background in capital markets, corporate finance, fund management, private equity, or legal advisory is ideal preparation.",
  },
  {
    q: "Who is this course designed for?",
    a: "The Real World Tokenization programme is designed for investment professionals, CFOs, fund managers, private equity principals, legal advisors, compliance officers, and regulators who are encountering tokenised assets in a professional context. Both programmes are senior-level: they assume financial literacy and capital markets experience. They are not designed for students or those new to finance.",
  },
  {
    q: "Is a certificate included?",
    a: "Yes. Both the Foundation ($500) and Executive ($1,250) Real World Tokenization programmes include a certificate of completion, issued upon finishing all modules of the respective programme.",
  },
  {
    q: "Is group or institutional licensing available?",
    a: "Yes. Executive Finance Academy offers group licensing for teams of three or more. Group enrolments include all course materials plus a dedicated Q&A session with course authors. Custom cohort options are available for teams of ten or more. Contact corporate@executivefinanceacademy.com or use the enquiry form.",
  },
];

const courseSchemaBasic = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Real World Tokenization — Foundation Programme",
  description:
    "The institutional framework for tokenising private assets and designing compliant digital securities. 8 on-demand modules covering blockchain architecture, regulatory frameworks across six global jurisdictions (UK, US, EU, Singapore, Hong Kong, Gulf), smart contract design, and live case studies. Designed for senior finance professionals.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Executive Finance Academy",
    url: "https://executivefinanceacademy.com",
  },
  courseMode: "online",
  educationalLevel: "Advanced",
  numberOfCredits: 8,
  teaches: [
    "Real World Asset Tokenization",
    "Digital Securities Regulation",
    "Smart Contract Design for Finance",
    "Tokenised Fund Structuring",
    "Secondary Market Design for Digital Assets",
  ],
  offers: {
    "@type": "Offer",
    price: "500",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT8H",
  },
};

const courseSchemaExecutive = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Real World Tokenization — Executive Programme",
  description:
    "The complete institutional reference for real world asset tokenization. 16 modules, 46 video lessons, 46 slide presentations, 16 detailed module notes, 16 executive question sets with answer keys, and 16 curated bibliographies. Designed for executives briefing boards, evaluating vendors, and conducting due diligence on tokenised assets.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Executive Finance Academy",
    url: "https://executivefinanceacademy.com",
  },
  courseMode: "online",
  educationalLevel: "Advanced",
  numberOfCredits: 16,
  teaches: [
    "Real World Asset Tokenization",
    "Multi-Jurisdiction Digital Securities Regulation",
    "Tokenised Debt and Fixed Income",
    "Fund Tokenisation and LP Structures",
    "Institutional Custody and Settlement for Digital Assets",
    "Risk Management in Tokenised Markets",
  ],
  offers: {
    "@type": "Offer",
    price: "1250",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT20H",
  },
};

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

export default function TokenizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaBasic) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaExecutive) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb + Hero */}
      <section className="bg-[#1A2E4A] pt-32 pb-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#E8D4A0]/60 text-sm mb-6">
            <Link href="/" className="hover:text-[#C9A84C]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/courses" className="hover:text-[#C9A84C]">Courses</Link>
            <span className="mx-2">›</span>
            <span className="text-[#E8D4A0]">Real World Tokenization</span>
          </p>
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Digital Assets & Tokenization &nbsp;·&nbsp; Advanced Practitioner &nbsp;·&nbsp; Online Finance Certification</span>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Real World Tokenization
          </h1>
          <p className="text-[#E8D4A0] text-xl italic max-w-2xl mb-4 leading-relaxed">
            How blockchain architecture is reshaping private market liquidity — and what every institutional finance professional needs to know now.
          </p>
          <p className="text-[#E8D4A0]/70 text-sm max-w-2xl mb-8 leading-relaxed">
            An online finance course for senior investment professionals, CFOs, fund managers, legal advisors, and regulators. Regulatory coverage across UK, US, EU, Singapore, Hong Kong, and Gulf markets.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#E8D4A0] mb-10">
            <span>Foundation: 8 Modules</span>
            <span>·</span>
            <span>Executive: 16 Modules / 46 Video Lessons</span>
            <span>·</span>
            <span>On-Demand + Live Q&A</span>
            <span>·</span>
            <span>Certificate on Completion</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={TOKENIZATION_BASIC_URL} target="_blank" rel="noreferrer"
              className="px-7 py-3.5 bg-[#C9A84C] text-[#1A2E4A] font-bold text-sm hover:bg-[#E8D4A0] transition-colors">
              Enrol — Foundation ($500)
            </a>
            <a href={TOKENIZATION_PREMIUM_URL} target="_blank" rel="noreferrer"
              className="px-7 py-3.5 bg-white text-[#1A2E4A] font-bold text-sm hover:bg-[#E8D4A0] transition-colors">
              Enrol — Executive ($1,250)
            </a>
            <Link href="/enrol"
              className="px-7 py-3.5 border border-[#E8D4A0]/40 text-[#E8D4A0]/70 font-semibold text-sm hover:border-[#E8D4A0] hover:text-[#E8D4A0] transition-colors">
              Group Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Tier Comparison */}
      <section className="bg-[#F4F5F6] py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3 text-center">Choose Your Programme</p>
          <h2 className="font-serif text-[#1A2E4A] text-3xl font-bold mb-10 text-center">Foundation or Executive — Which is Right for You?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Foundation */}
            <div className="bg-white border-t-4 border-[#C9A84C] p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-1">Foundation Programme</p>
                  <p className="font-serif text-[#1A2E4A] text-3xl font-bold">$500</p>
                </div>
                <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold px-3 py-1.5">8 Modules</span>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
                The core institutional framework for tokenised finance. Ideal for investment professionals, CFOs, and legal advisors who need a rigorous, deal-oriented foundation for working with tokenised assets in a professional capacity.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "8 on-demand video modules",
                  "8 slide presentations",
                  "Certificate of completion",
                  "Regulatory coverage: UK, US, EU, Singapore, HK, Gulf",
                  "Live global deal case studies",
                ].map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-[#4A5568]">
                    <span className="text-[#C9A84C] shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href={TOKENIZATION_BASIC_URL} target="_blank" rel="noreferrer"
                className="block w-full py-3.5 bg-[#C9A84C] text-[#1A2E4A] font-bold text-sm text-center hover:bg-[#E8D4A0] transition-colors">
                Enrol — Foundation ($500)
              </a>
            </div>

            {/* Executive */}
            <div className="bg-[#1A2E4A] border-t-4 border-white p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#1A2E4A] text-xs font-bold px-3 py-1 tracking-wider uppercase">
                Most Complete
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[#E8D4A0] text-xs font-bold tracking-widest uppercase mb-1">Executive Programme</p>
                  <p className="font-serif text-white text-3xl font-bold">$1,250</p>
                </div>
                <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5">16 Modules</span>
              </div>
              <p className="text-[#E8D4A0] text-sm leading-relaxed mb-6">
                Everything in the Foundation, plus a complete institutional reference library. Built for executives who need working knowledge — not just awareness — to drive decisions, evaluate providers, and build internal team capability.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Everything in Foundation",
                  "46 video lessons across 16 modules",
                  "46 slide presentations (non-downloadable)",
                  "16 detailed written module notes",
                  "16 executive question sets — MCQs, answer keys & explanations",
                  "16 curated bibliographies with primary research & regulatory links",
                  "Certificate of completion",
                ].map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-[#E8D4A0]">
                    <span className="text-[#C9A84C] shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href={TOKENIZATION_PREMIUM_URL} target="_blank" rel="noreferrer"
                className="block w-full py-3.5 bg-white text-[#1A2E4A] font-bold text-sm text-center hover:bg-[#E8D4A0] transition-colors">
                Enrol — Executive ($1,250)
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Overview */}
          <section className="mb-16">
            <div className="gold-rule" />
            <h2 className="font-serif text-[#1A2E4A] text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              The tokenisation of real-world private assets is discussed almost entirely in the language of technology rather than capital markets. Blockchain whitepapers, DeFi protocols, and Web3 commentary have dominated the discourse — leaving institutional finance professionals without a rigorous framework for evaluating tokenised assets as financial instruments.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              This online finance course treats blockchain as a structural layer — a mechanism for automating compliance, enhancing liquidity, and expanding the distribution of private assets — rather than a speculative technology play. Every module is built from the perspective of an institutional structurer, not a technologist.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              <strong className="text-[#1A2E4A]">Who this is for:</strong> Investment professionals, CFOs, fund managers, legal advisors, private equity principals, compliance officers, and regulators who are encountering tokenised assets in a professional context and need a rigorous, deal-oriented framework to evaluate, structure, or advise on them.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              <strong className="text-[#1A2E4A]">What makes this course different:</strong> Unlike general blockchain or DeFi courses, this programme is written exclusively for senior finance professionals with existing capital markets experience. It does not explain what money is, or why finance matters — it explains how tokenisation changes the mechanics of a deal you are already working on.
            </p>
          </section>

          {/* Outcomes — Foundation */}
          <section className="mb-16">
            <div className="gold-rule" />
            <h2 className="font-serif text-[#1A2E4A] text-2xl font-bold mb-2">What You Will Learn — Foundation</h2>
            <p className="text-[#4A5568] text-sm mb-6">Core outcomes for both the Foundation and Executive programmes.</p>
            <ul className="space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-[#4A5568]">
                  <span className="text-[#C9A84C] mt-1 shrink-0">→</span>
                  {o}
                </li>
              ))}
            </ul>
          </section>

          {/* Outcomes — Executive additions */}
          <section className="mb-16 bg-[#F4F5F6] p-8 border-l-4 border-[#1A2E4A]">
            <h2 className="font-serif text-[#1A2E4A] text-xl font-bold mb-2">Additional Outcomes — Executive Programme</h2>
            <p className="text-[#4A5568] text-sm mb-6">The Executive Programme adds the following institutional capabilities on top of the Foundation outcomes.</p>
            <ul className="space-y-3">
              {premiumOutcomes.map((o) => (
                <li key={o} className="flex gap-3 text-[#4A5568]">
                  <span className="text-[#1A2E4A] mt-1 shrink-0 font-bold">→</span>
                  {o}
                </li>
              ))}
            </ul>
          </section>

          {/* Modules — Foundation */}
          <section className="mb-12">
            <div className="gold-rule" />
            <h2 className="font-serif text-[#1A2E4A] text-2xl font-bold mb-2">Module Outline — Foundation (Modules 01–08)</h2>
            <p className="text-[#4A5568] text-sm mb-6">Included in both the Foundation ($500) and Executive ($1,250) programmes.</p>
            <div className="space-y-4">
              {modules.map((m) => (
                <div key={m.num} className="border border-[#D0D4D8] p-5 hover:border-[#C9A84C] transition-colors">
                  <div className="flex gap-4 items-baseline">
                    <span className="text-[#C9A84C] font-bold text-sm shrink-0">{m.num}</span>
                    <div>
                      <p className="text-[#1A2E4A] font-semibold mb-1">{m.title}</p>
                      <p className="text-[#4A5568] text-sm">{m.topics}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Modules — Executive additions */}
          <section className="mb-16">
            <div className="bg-[#1A2E4A] px-5 py-3 flex items-center justify-between mb-4">
              <h2 className="font-serif text-white text-lg font-bold">Executive Programme Only — Modules 09–16</h2>
              <span className="text-[#C9A84C] text-xs font-bold tracking-wider uppercase">$1,250</span>
            </div>
            <div className="space-y-4">
              {premiumExtras.map((m) => (
                <div key={m.num} className="border border-[#1A2E4A]/20 p-5 hover:border-[#1A2E4A] transition-colors bg-[#F4F5F6]">
                  <div className="flex gap-4 items-baseline">
                    <span className="text-[#1A2E4A] font-bold text-sm shrink-0">{m.num}</span>
                    <div>
                      <p className="text-[#1A2E4A] font-semibold mb-1">{m.title}</p>
                      <p className="text-[#4A5568] text-sm">{m.topics}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <div className="gold-rule" />
            <h2 className="font-serif text-[#1A2E4A] text-2xl font-bold mb-8">Frequently Asked Questions</h2>
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
          </section>
        </div>

        {/* Sticky sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Foundation */}
            <div className="bg-[#F4F5F6] border-t-4 border-[#C9A84C] p-6">
              <h3 className="font-serif text-[#1A2E4A] text-lg font-bold mb-1">Foundation Programme</h3>
              <p className="font-serif text-[#1A2E4A] text-2xl font-bold mb-4">$500</p>
              <dl className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#4A5568]">Modules</dt>
                  <dd className="text-[#1A2E4A] font-medium">8</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#4A5568]">Format</dt>
                  <dd className="text-[#1A2E4A] font-medium text-right">On-Demand + Live Q&A</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#4A5568]">Certificate</dt>
                  <dd className="text-[#1A2E4A] font-medium">On Completion</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#4A5568]">Access</dt>
                  <dd className="text-[#1A2E4A] font-medium">Lifetime</dd>
                </div>
              </dl>
              <a href={TOKENIZATION_BASIC_URL} target="_blank" rel="noreferrer"
                className="block w-full py-3.5 bg-[#C9A84C] text-[#1A2E4A] font-bold text-sm text-center hover:bg-[#E8D4A0] transition-colors">
                Enrol — Foundation
              </a>
            </div>

            {/* Executive */}
            <div className="bg-[#1A2E4A] border-t-4 border-[#C9A84C] p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-serif text-white text-lg font-bold">Executive Programme</h3>
                <span className="bg-[#C9A84C] text-[#1A2E4A] text-xs font-bold px-2 py-0.5">Best Value</span>
              </div>
              <p className="font-serif text-white text-2xl font-bold mb-4">$1,250</p>
              <dl className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#E8D4A0]">Modules</dt>
                  <dd className="text-white font-medium">16</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#E8D4A0]">Video Lessons</dt>
                  <dd className="text-white font-medium">46</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#E8D4A0]">Module Notes</dt>
                  <dd className="text-white font-medium">16</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#E8D4A0]">Question Sets</dt>
                  <dd className="text-white font-medium">16 (with keys)</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#E8D4A0]">Bibliographies</dt>
                  <dd className="text-white font-medium">16</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#E8D4A0]">Access</dt>
                  <dd className="text-white font-medium">Lifetime</dd>
                </div>
              </dl>
              <a href={TOKENIZATION_PREMIUM_URL} target="_blank" rel="noreferrer"
                className="block w-full py-3.5 bg-white text-[#1A2E4A] font-bold text-sm text-center hover:bg-[#E8D4A0] transition-colors mb-4">
                Enrol — Executive Programme
              </a>
              <p className="text-[#E8D4A0]/60 text-xs text-center">
                Includes everything in Foundation
              </p>
            </div>

            <p className="text-[#4A5568] text-xs text-center">
              Group licensing for teams of 3+.{" "}
              <Link href="/enrol#group" className="text-[#C9A84C] hover:underline">Contact us</Link>
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
