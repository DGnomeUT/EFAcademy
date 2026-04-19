import Link from "next/link";

const categories = [
  "Alternative Credit", "Asset Management Guides", "Capital Markets", "Carve-outs & Spin-offs",
  "Corporate Governance", "Debt Finance", "Distressed M&A", "Due Diligence",
  "Financial Modelling (FAST/F1F9)", "Financial Statements Analysis", "Funds (PE / VC / HF)",
  "Infrastructure & Real Assets", "Islamic Finance & Sukuk", "Joint Ventures",
  "Leveraged Finance & LBOs", "M&A Execution", "M&A Integration", "M&A Valuation",
  "Private Credit", "Private Equity", "Public Markets & IPOs", "Real Estate",
  "Restructuring & Insolvency", "Risk Management", "Search Funds", "Securitisation",
  "Special Situations", "SPACs", "Venture Capital",
];

const resourceTypes = [
  { type: "Guides", desc: "In-depth written frameworks and how-to guides for specific deal processes", access: "Free" },
  { type: "Model Templates", desc: "FAST-compliant Excel models for LBO, DCF, merger, and debt capacity analysis", access: "Enrolled Students" },
  { type: "Case Studies", desc: "Real transaction analyses with structure, rationale, and lessons learned", access: "Free / Enrolled" },
  { type: "Term Sheet Vault", desc: "Standardised term sheet templates for PE, VC, Sukuk, and credit facilities", access: "Enrolled Students" },
];

export default function KnowledgeBasePage() {
  return (
    <>
      <section className="bg-[#1A2E4A] pt-36 pb-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3">Knowledge Base</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
            The Deal Education & Resources Library.
          </h1>
          <p className="text-[#E8D4A0] text-lg max-w-xl leading-relaxed">
            29 deal domains. Guides, models, case studies, and term sheet templates — curated for practitioners, not students.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Resource types */}
          <div className="gold-rule" />
          <h2 className="font-serif text-[#1A2E4A] text-2xl font-bold mb-8">Resource Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {resourceTypes.map((r) => (
              <div key={r.type} className="bg-[#F4F5F6] p-6 border-t-4 border-[#C9A84C]">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">{r.type}</p>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{r.desc}</p>
                <p className="text-[#1A2E4A] text-xs font-semibold">Access: {r.access}</p>
              </div>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="bg-[#F4F5F6] border-l-4 border-[#C9A84C] p-6 mb-14">
            <h3 className="font-serif text-[#1A2E4A] text-lg font-bold mb-2">Knowledge Base Launching Soon</h3>
            <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
              The full resource library is currently being built. Enrolled students on the Tokenization programme gain early access to relevant models and case studies through the Teachable platform. The public knowledge base will launch alongside the expanded course catalogue.
            </p>
            <Link href="/enrol" className="text-[#C9A84C] text-sm font-semibold hover:underline">
              Register for early access →
            </Link>
          </div>

          {/* Categories */}
          <div className="gold-rule" />
          <h2 className="font-serif text-[#1A2E4A] text-2xl font-bold mb-6">Browse by Deal Domain</h2>
          <p className="text-[#4A5568] mb-8">Our 29 deal domains cover the full spectrum of professional finance activity.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <div key={cat} className="bg-[#F4F5F6] px-4 py-3 border border-[#D0D4D8] hover:border-[#C9A84C] transition-colors cursor-default">
                <p className="text-[#4A5568] text-sm">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
