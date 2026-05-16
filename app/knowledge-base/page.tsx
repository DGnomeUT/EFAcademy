import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Base | Free Finance Resources for Practitioners — Deal Library",
  description:
    "Free practitioner-grade finance resources: M&A guides, financial due diligence standards, LBO and leveraged finance handbooks, valuation frameworks, securitisation guides, and restructuring references. Baker McKenzie, ICAEW, Damodaran, PwC, and more. No sign-up required.",
  keywords: [
    "free finance resources for professionals",
    "M&A due diligence guide free download",
    "leveraged finance handbook",
    "LBO guide free",
    "financial due diligence ICAEW",
    "valuation resources for finance professionals",
    "securitisation guide",
    "restructuring insolvency guide Europe",
    "private equity resources",
    "venture capital term sheet guide",
    "finance practitioner library",
    "Baker McKenzie M&A guide",
    "Damodaran valuation",
    "free finance PDF download",
  ],
  alternates: { canonical: "https://executivefinanceacademy.com/knowledge-base" },
};

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

const resources = [
  {
    category: "M&A Execution",
    title: "Global M&A Guide 2025",
    meta: "Baker McKenzie · 7 MB",
    file: "/resources/Global-MA-Guide-2025.pdf",
    desc: "Baker McKenzie's annual reference on cross-border M&A — regulatory clearance, foreign investment screening, antitrust, and deal structuring across the world's major jurisdictions. The single most useful starting point when a transaction touches more than one legal system. Essential for anyone running or advising on international acquisitions.",
  },
  {
    category: "Due Diligence",
    title: "ICAEW Financial Due Diligence Guideline 2024",
    meta: "ICAEW · Practitioner Standard",
    file: "/resources/icaew-financial-due-diligence-guideline-2024.pdf",
    desc: "The authoritative practitioner standard for financial due diligence, issued by the Institute of Chartered Accountants in England and Wales. Defines scope, quality-of-earnings analysis, working-capital and net-debt mechanics, and the reporting expectations a buyer should hold an adviser to. The reference point for what good FDD actually looks like.",
  },
  {
    category: "Due Diligence",
    title: "ICAEW Commercial Due Diligence Guideline",
    meta: "ICAEW",
    file: "/resources/icaew-commercial-due-diligence-guideline.pdf",
    desc: "ICAEW's companion guideline on commercial due diligence — market sizing, competitive positioning, customer concentration, and the demand-side assumptions that underpin a business plan. Reads the target from the outside in, where financial DD reads it from the inside out. Designed for acquirers, principals, and the advisers who support them.",
  },
  {
    category: "LBO & Private Equity",
    title: "Global LBO Guide",
    meta: "Practitioner Reference",
    file: "/resources/bk_global_lboguide_rebranded.pdf",
    desc: "A structural guide to leveraged buyouts across jurisdictions — acquisition financing, security packages, financial assistance rules, and the legal mechanics that govern how a sponsor puts debt onto a target. Bridges the gap between the LBO model and the documents that make it enforceable. For sponsors, lenders, and deal counsel.",
  },
  {
    category: "Leveraged Finance",
    title: "Leveraged Finance Handbook",
    meta: "Market Reference",
    file: "/resources/265576251-LeveragedFinanceHandbook-PDF.pdf",
    desc: "A comprehensive handbook on the leveraged finance market — instrument types, the syndication process, pricing, and the relationship between sponsors, arrangers, and institutional investors. Explains how leveraged capital is raised, distributed, and traded. A core text for credit professionals and anyone funding a buyout.",
  },
  {
    category: "Leveraged Finance / Credit",
    title: "Leveraged Finance 101: A Covenant Handbook",
    meta: "Covenant Reference",
    file: "/resources/leveraged-finance-101---a-covenant-handbook.pdf",
    desc: "A focused handbook on credit agreement covenants — incurrence versus maintenance tests, baskets, restricted payments, and the covenant erosion that has reshaped lender protection in recent cycles. Reading covenants well is the difference between an informed credit decision and a surprised one. Indispensable for private credit and leveraged finance practitioners.",
  },
  {
    category: "Valuation",
    title: "Valuation",
    meta: "Aswath Damodaran · NYU Stern",
    file: "/resources/valuation-damodaran.pdf",
    desc: "Damodaran's foundational treatment of valuation — intrinsic, relative, and contingent-claim approaches, with the cash-flow, growth, and discount-rate logic that drives every model. The clearest available articulation of why a number is what it is. Required reading for anyone who values businesses for a living.",
  },
  {
    category: "Alternative Credit",
    title: "NN IP Guidebook to Alternative Credit",
    meta: "NN Investment Partners",
    file: "/resources/NN_IP_Guidebook_to_Alternative_Credit.pdf",
    desc: "An institutional investor's guide to the alternative credit universe — direct lending, asset-backed finance, distressed debt, and the spread, liquidity, and structural premia each segment carries. Frames alternative credit as a portfolio allocation rather than a single asset. Useful for allocators, fund managers, and credit investors building exposure.",
  },
  {
    category: "Securitisation",
    title: "PwC Securitisation Guide 2024",
    meta: "PwC Luxembourg",
    file: "/resources/pwc-securitisation-in-luxembourg-comprehensive-guide-2024.pdf",
    desc: "PwC Luxembourg's comprehensive guide to structuring securitisation vehicles — legal form, tax treatment, accounting, and the regulatory regime governing one of Europe's primary jurisdictions for structured finance. Practical detail on how a securitisation is actually set up and run. For structurers, fund administrators, and structured finance counsel.",
  },
  {
    category: "Fund Formation",
    title: "Fund Structuring: Beyond Just Theories",
    meta: "Practitioner Guide",
    file: "/resources/Fund-Structuring-beyond-just-theories.pdf",
    desc: "A practical guide to the architecture of investment funds — domicile selection, GP/LP structures, carry and management-fee mechanics, and the parallel and feeder vehicles that accommodate different investor bases. Moves past the textbook diagram into the trade-offs that actually drive structuring decisions. For fund sponsors and the lawyers who set them up.",
  },
  {
    category: "Venture Capital",
    title: "BVCA Guide to VC Term Sheets",
    meta: "British Private Equity & Venture Capital Association",
    file: "/resources/bvca-guide-to-vc-termsheets.pdf",
    desc: "The BVCA's reference on venture capital term sheets — liquidation preferences, anti-dilution, board composition, and the economic and control terms that shape a financing round. Explains not just what each term means but how it behaves at exit. Essential for founders, investors, and growth-stage advisers.",
  },
  {
    category: "M&A Documentation",
    title: "Guidance on Share Purchase Agreements (SPA)",
    meta: "ONEtoONE",
    file: "/resources/ONEtoONE-Guidance-on-the-Purchase-Agreements-SPA-.pdf",
    desc: "A clause-level guide to the share purchase agreement — price mechanisms, completion accounts versus locked box, warranties, indemnities, and the conditions that govern signing to closing. The SPA is where deal value is finally allocated between buyer and seller. Practical reading for principals and deal teams negotiating their own terms.",
  },
  {
    category: "Fund Operations",
    title: "The Private Funds Cookbook",
    meta: "Operations Reference",
    file: "/resources/private-funds-cookbook.pdf",
    desc: "A working reference on the operational mechanics of private funds — capital calls, distributions, waterfall calculations, NAV, and the reporting cadence that keeps LPs informed. Covers the machinery that runs after the fund has closed and the capital is being deployed. For CFOs, fund controllers, and operations teams.",
  },
  {
    category: "M&A Process",
    title: "The Sell-Side M&A Process Explained",
    meta: "Process Guide",
    file: "/resources/MA-Sell-Side-Process-Explained.pdf",
    desc: "A step-by-step walkthrough of a sell-side process — preparation, the information memorandum, buyer outreach, the auction structure, and the management of competitive tension through to signing. Explains how a well-run process converts a single asset into a contested price. For sellers, advisers, and anyone preparing a business for sale.",
  },
  {
    category: "Restructuring",
    title: "Guide to Restructuring & Insolvency in Europe",
    meta: "Multi-jurisdiction · European Coverage",
    file: "/resources/a-guide-to-restructuring-and-insolvency-procedures-in-europe.pdf",
    desc: "A jurisdiction-by-jurisdiction guide to restructuring and insolvency regimes across Europe — schemes, restructuring plans, administration, and the cross-border recognition rules that govern multi-jurisdiction cases. Where the insolvency framework sits often determines the restructuring outcome. For special situations investors, distressed-debt teams, and restructuring counsel.",
  },
];

export default function KnowledgeBasePage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Knowledge Base</div>
          <h1 className="page-h1">
            The Practitioner&apos;s<br />
            <em>Deal Library — Live.</em>
          </h1>
          <p className="page-subtitle">
            A curated collection of the references senior practitioners actually keep on the desk —
            authoritative guides on M&A, due diligence, leveraged finance, valuation, securitisation,
            and restructuring. Free to download. Selected, not aggregated.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad section-light">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="gold-rule reveal" />
          <h2 className="section-h2 reveal">What This Library Is</h2>
          <div className="section-body reveal" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p>
              Most finance resource libraries are aggregations — every document anyone could find, indexed
              and left for the reader to sort. This one is the opposite. Each item below has been chosen
              because it is the reference a practitioner would name first: an institutional standard, a
              market handbook, or a guide authored by a firm or body whose work sets the benchmark in its
              field.
            </p>
            <p>
              The library is built for the professional who needs an answer at the depth a transaction
              demands — a CFO preparing for an M&A discussion, a credit investor reading covenants, a
              sponsor structuring a fund, a deal lead negotiating an SPA. Every resource is free to
              download and authored by a recognised firm, institute, or academic. There is no gate and
              no sign-up.
            </p>
          </div>
        </div>
      </section>

      {/* Resource library */}
      <section className="section-pad section-grey">
        <div className="container">
          <div className="eyebrow reveal">Resources</div>
          <h2 className="section-h2 reveal">The Library</h2>
          <p className="section-body reveal" style={{ marginBottom: "32px", maxWidth: "680px" }}>
            Fifteen authoritative references, free to download. Each is the kind of document that
            survives contact with a live deal.
          </p>
          <div
            className="reveal"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "var(--divider-light)" }}
          >
            {resources.map((r) => (
              <div key={r.file} className="card" style={{ borderTop: "2px solid var(--gold)", display: "flex", flexDirection: "column" }}>
                <p className="eyebrow" style={{ marginBottom: "12px" }}>{r.category}</p>
                <h3 className="section-h3" style={{ marginBottom: "6px" }}>{r.title}</h3>
                <p style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: "14px" }}>
                  {r.meta}
                </p>
                <p className="section-body" style={{ fontSize: "14px", marginBottom: "20px", flex: 1 }}>{r.desc}</p>
                <a
                  href={r.file}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "12px", letterSpacing: "0.06em", color: "var(--gold)", textDecoration: "none", fontWeight: 500 }}
                >
                  Download PDF →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrolled students note */}
      <section className="section-light" style={{ padding: "56px 0" }}>
        <div className="container">
          <div
            className="reveal"
            style={{
              display: "grid", gridTemplateColumns: "1fr auto", gap: "40px",
              alignItems: "center", padding: "40px", background: "var(--cream)",
              borderLeft: "2px solid var(--gold)",
            }}
          >
            <div>
              <h3 className="section-h3" style={{ marginBottom: "12px" }}>Model Templates for Enrolled Students</h3>
              <p className="section-body" style={{ fontSize: "14px", maxWidth: "600px" }}>
                The public library above is open to everyone. Enrolled students receive an additional tier
                of practitioner material — FAST / F1F9-compliant Excel models for LBO, DCF, merger, and
                debt-capacity analysis, alongside term sheet templates and worked transaction case studies.
                These are delivered through the course platform and built to the same institutional
                standard as the programmes themselves.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link href="/courses" className="btn-primary">View Courses</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad section-grey">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="section-h2 reveal">Browse by Deal Domain</h2>
          <p className="section-body reveal" style={{ marginBottom: "32px" }}>
            The library is organised across 29 deal domains spanning the full spectrum of professional
            finance activity. The collection expands as new programmes are released — each course adds
            its own reference material to the relevant domains.
          </p>
          <div className="kb-categories reveal">
            {categories.map((cat) => (
              <div key={cat} className="kb-category">{cat}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band reveal">
        <div className="cta-band-left">
          <h2 className="cta-band-title">Go Beyond the Reading.</h2>
          <p className="cta-band-body">
            The library frames the subject. The courses teach you to execute it. Begin with Real World Tokenization.
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
