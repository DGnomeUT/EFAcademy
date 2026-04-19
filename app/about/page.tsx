import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Practitioner-Led Finance Education for Senior Executives",
  description:
    "Executive Finance Academy was founded by senior finance practitioners to bridge the gap between theory and deal execution. Learn about our philosophy, methodology, and what sets us apart from business school executive education and analyst-focused training platforms.",
  alternates: {
    canonical: "https://executivefinanceacademy.com/about",
  },
};

const standards = [
  { std: "FAST Modelling Standard", desc: "All financial models follow FAST principles: Flexible, Appropriate, Structured, Transparent. Models are audit-ready and peer-reviewable by any institutional counterpart." },
  { std: "F1F9 Standard", desc: "Colour-coding, structural hierarchy, and formula logic in all spreadsheet content follows F1F9 conventions for institutional portability and auditability." },
  { std: "English Law Foundations", desc: "Cross-border transaction content is grounded in English law as the prevailing legal system for international finance — with coverage of US, EU, and Asia-Pacific frameworks where relevant." },
  { std: "Global Regulatory Frameworks", desc: "Regulatory content is designed to be jurisdiction-agnostic where possible, and references the frameworks governing the world's major financial centres: FCA (UK), SEC (US), ESMA (EU), MAS (Singapore), SFC (Hong Kong), and DIFC / ADGM (Gulf)." },
  { std: "Executive Altitude", desc: "All content is written for senior finance professionals. We do not over-explain, over-simplify, or design towards a multiple-choice exam. We design towards the boardroom and the deal room." },
];

const teamColumns = [
  { label: "Deal Experience", items: ["Investment Banking & M&A Advisory", "Private Equity Fund Management", "Private Credit & Leveraged Finance", "Structured Finance & Securitisation", "Real World Tokenization & Digital Assets", "Venture Capital & Growth Equity"] },
  { label: "Sector Coverage", items: ["Financial Services & FinTech", "Real Estate & Infrastructure", "Technology & Growth Equity", "Energy & Natural Resources", "Family Office & Wealth Management", "Sovereign & Government Advisory"] },
  { label: "Jurisdictions", items: ["UK & English Law (Cross-border)", "United States (NYSE / NASDAQ / SEC)", "European Union (MiFID / ESMA)", "Singapore & Hong Kong (MAS / SFC)", "Gulf Markets (DIFC / ADGM)", "Emerging & Frontier Markets"] },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A2E4A] pt-36 pb-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3">About EFA</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
            Finance Education Rebuilt From First Principles.
          </h1>
          <p className="text-[#E8D4A0] text-lg max-w-xl leading-relaxed">
            We are practitioners who got tired of training that does not survive contact with a live deal.
          </p>
        </div>
      </section>

      {/* Story */}
      <section id="philosophy" className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="gold-rule" />
          <h2 className="font-serif text-[#1A2E4A] text-3xl font-bold mb-6">The EFA Story</h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-5">
            Executive Finance Academy was founded on a single conviction: that the most consequential gap in professional finance education is not breadth of content, but depth of application.
          </p>
          <p className="text-[#4A5568] text-base leading-relaxed mb-5">
            Most platforms have solved the content problem. They offer hundreds of courses, thousands of articles, and libraries of models. What they have not solved is the logic problem — the ability to take a framework learned in a module and deploy it confidently in the context of a live transaction, a board presentation, or a regulatory filing.
          </p>
          <p className="text-[#4A5568] text-base leading-relaxed mb-5">
            EFA was built to solve that problem. Every programme begins with the deal, not the textbook. We ask: what does a Group CFO actually need to know before walking into an M&A discussion? What does an investment committee member need to understand before evaluating a tokenised fund offering? What does a principal need to grasp before authorising a leveraged buyout?
          </p>
          <p className="text-[#4A5568] text-base leading-relaxed">
            The answers to those questions shape every module, every case study, and every piece of content we produce. The result is education that is designed for professionals operating across global capital markets — not tailored to any single geography or market convention.
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-[#F4F5F6] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="gold-rule" />
          <h2 className="font-serif text-[#1A2E4A] text-3xl font-bold mb-10">Our Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Deal-First Curriculum Design", copy: "Every course begins with the end in mind: a real transaction, a real decision, a real conversation. We reverse-engineer the knowledge required to execute, then structure learning around that architecture." },
              { title: "Practitioner Authorship", copy: "Our courses are not designed by curriculum developers or adapted from academic papers. They are authored by practitioners who have sat on deal teams, managed funds, and advised principals — and who bring that lived experience directly into the content." },
              { title: "Global Regulatory Coverage", copy: "All regulatory content is written for professionals operating across major financial centres. We cover the frameworks that govern cross-border transactions: English law, US securities law, EU directives, and the regulatory regimes of Singapore, Hong Kong, and the Gulf." },
              { title: "Executive Altitude", copy: "Our content is written for senior professionals — not students. We do not over-explain. We do not use unnecessary jargon. We do not build towards a multiple-choice exam. We build towards a boardroom." },
            ].map((m) => (
              <div key={m.title} className="bg-white p-8 border-t-4 border-[#C9A84C]">
                <h3 className="font-serif text-[#1A2E4A] text-xl font-bold mb-3">{m.title}</h3>
                <p className="text-[#4A5568] leading-relaxed">{m.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#1A2E4A] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3 text-center">The Team</p>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-6 text-center">Practitioners First. Always.</h2>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[#C9A84C] text-5xl font-serif mb-4">&ldquo;</p>
            <p className="text-[#E8D4A0] text-lg leading-relaxed italic mb-5">
              The team behind Executive Finance Academy brings together decades of deal-making experience across investment banking, private equity, private credit, and corporate finance. Every member is a practitioner first: professionals who have structured transactions, sat on investment committees, managed portfolios, and advised boards across global markets.
            </p>
            <p className="text-[#E8D4A0] text-base leading-relaxed">
              We operate without named profiles because the knowledge itself is the credential. In a world saturated with personal branding and thought leadership content, we prefer to let the depth and applicability of the curriculum make the case.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamColumns.map((col) => (
              <div key={col.label} className="bg-[#111F33] p-6 border-t-4 border-[#C9A84C]">
                <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-4">{col.label}</h4>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-[#E8D4A0] text-sm flex gap-2">
                      <span className="text-[#C9A84C] shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="bg-white py-20 px-6 lg:px-10 border-t border-[#D0D4D8]">
        <div className="max-w-4xl mx-auto">
          <div className="gold-rule" />
          <h2 className="font-serif text-[#1A2E4A] text-3xl font-bold mb-6">How EFA Differs From Other Finance Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#F4F5F6] p-8 border-t-4 border-[#C9A84C]">
              <h3 className="font-serif text-[#1A2E4A] text-lg font-bold mb-3">vs. Analyst-Focused Training Platforms</h3>
              <p className="text-[#4A5568] leading-relaxed text-sm">
                Platforms such as Wall Street Prep and Breaking Into Wall Street are designed primarily for students and junior analysts seeking to enter investment banking. Their content teaches you how to build a model to get a job. EFA is built for professionals who already hold senior roles and need frameworks they can deploy in a live deal, board presentation, or investment committee discussion — not a recruiting process.
              </p>
            </div>
            <div className="bg-[#F4F5F6] p-8 border-t-4 border-[#C9A84C]">
              <h3 className="font-serif text-[#1A2E4A] text-lg font-bold mb-3">vs. Business School Executive Education</h3>
              <p className="text-[#4A5568] leading-relaxed text-sm">
                Executive education programmes at institutions such as LBS, INSEAD, and Wharton offer broad management frameworks — often campus-based, cohort-driven, and priced at thousands of pounds per programme. EFA offers the opposite: highly specialised, on-demand technical finance training starting from $500, authored by active practitioners rather than faculty researchers, and designed to be immediately applicable rather than conceptually enriching.
              </p>
            </div>
          </div>
          <div className="bg-[#1A2E4A] p-8">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">The EFA Position</p>
            <p className="text-[#E8D4A0] leading-relaxed">
              Executive Finance Academy occupies a distinct position in the global finance education market: specialised enough to cover topics at the depth a senior practitioner requires, accessible enough to be completed on demand without leaving your desk, and priced for individual professionals rather than corporate training budgets. It is not a substitute for either of the above — it is a category of its own.
            </p>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="gold-rule" />
          <h2 className="font-serif text-[#1A2E4A] text-3xl font-bold mb-8">Our Standards Framework</h2>
          <div className="divide-y divide-[#D0D4D8]">
            {standards.map((s) => (
              <div key={s.std} className="py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                <p className="text-[#1A2E4A] font-semibold">{s.std}</p>
                <p className="text-[#4A5568] md:col-span-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F5F6] py-20 px-6 lg:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-[#1A2E4A] text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-[#4A5568] mb-8">Explore our live courses or register your interest for upcoming programmes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/courses" className="px-8 py-4 bg-[#1A2E4A] text-white font-bold text-sm hover:bg-[#111F33] transition-colors">
              View Courses
            </Link>
            <Link href="/enrol" className="px-8 py-4 border border-[#1A2E4A] text-[#1A2E4A] font-semibold text-sm hover:bg-[#1A2E4A] hover:text-white transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
