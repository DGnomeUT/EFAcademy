import Link from "next/link";

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

export default function IslamicFinancePage() {
  return (
    <>
      <section className="bg-[#1A2E4A] pt-32 pb-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#E8D4A0]/60 text-sm mb-6">
            <Link href="/" className="hover:text-[#C9A84C]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/courses" className="hover:text-[#C9A84C]">Courses</Link>
            <span className="mx-2">›</span>
            <span className="text-[#E8D4A0]">Islamic Finance</span>
          </p>
          <span className="inline-flex items-center gap-2 text-[#888] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            <span className="bg-[#888]/20 text-[#aaa] px-2 py-0.5 text-xs">COMING SOON</span>
            Islamic Finance & Shariah &nbsp;·&nbsp; Intermediate–Advanced
          </span>
          <h1 className="font-serif text-white/80 text-4xl md:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Islamic Finance & Shariah-Compliant Structuring
          </h1>
          <p className="text-[#E8D4A0]/70 text-xl italic max-w-2xl mb-8 leading-relaxed">
            From theoretical compliance to high-fidelity product engineering — a practitioner&apos;s guide to Shariah-compliant transactions in global capital markets.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#E8D4A0]/60 mb-8">
            <span>10 Modules</span><span>·</span>
            <span>On-Demand + Live Q&A</span><span>·</span>
            <span>AAOIFI-Aligned</span><span>·</span>
            <span>Certificate on Completion</span>
          </div>
          <Link href="/enrol"
            className="inline-block px-7 py-3.5 border border-[#C9A84C] text-[#C9A84C] font-semibold text-sm hover:bg-[#C9A84C] hover:text-[#1A2E4A] transition-colors">
            Notify Me When Available
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="bg-[#F4F5F6] border-l-4 border-[#C9A84C] p-6 mb-14">
          <p className="text-[#1A2E4A] font-semibold mb-1">Registration of Interest Now Open</p>
          <p className="text-[#4A5568] text-sm">
            This course is currently in development. Register your interest below and we will notify you as soon as enrolment opens.
            Registered practitioners will receive early-access pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <div className="gold-rule" />
            <h2 className="font-serif text-[#1A2E4A] text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              The Islamic finance industry manages over $4 trillion in assets globally, yet practitioner education has remained confined to certification courses that teach compliance theory rather than deal execution. The result is a generation of professionals who can identify a Murabaha but cannot structure one for a complex cross-border transaction.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              This programme dismantles the conventional view of Islamic finance as a subset of ethical banking and reconstructs it as a sophisticated risk-sharing framework with its own product engineering logic. Every module focuses on the practical application of AAOIFI standards in the context of real transactions.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              <strong className="text-[#1A2E4A]">Who this is for:</strong> Investment bankers, corporate financiers, private equity professionals, lawyers, and treasury managers operating — or aspiring to operate — in GCC, UK, Malaysian, or Indonesian capital markets.
            </p>

            <div className="gold-rule mt-12" />
            <h2 className="font-serif text-[#1A2E4A] text-2xl font-bold mb-6">Module Outline (Preview)</h2>
            <div className="space-y-4">
              {modules.map((m) => (
                <div key={m.num} className="border border-[#D0D4D8] p-5 opacity-80">
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
          </div>

          <aside>
            <div className="sticky top-24 bg-[#F4F5F6] border-t-4 border-[#C9A84C] p-6">
              <h3 className="font-serif text-[#1A2E4A] text-lg font-bold mb-2">Register Your Interest</h3>
              <p className="text-[#4A5568] text-sm mb-5">Be first to know when this course opens for enrolment.</p>
              <Link href="/enrol"
                className="block w-full py-3.5 bg-[#1A2E4A] text-white font-bold text-sm text-center hover:bg-[#111F33] transition-colors mb-4">
                Register Interest
              </Link>
              <dl className="space-y-3 text-sm border-t border-[#D0D4D8] pt-4">
                <div className="flex justify-between"><dt className="text-[#4A5568]">Modules</dt><dd className="text-[#1A2E4A] font-medium">10</dd></div>
                <div className="flex justify-between"><dt className="text-[#4A5568]">Standard</dt><dd className="text-[#1A2E4A] font-medium">AAOIFI-Aligned</dd></div>
                <div className="flex justify-between"><dt className="text-[#4A5568]">Level</dt><dd className="text-[#1A2E4A] font-medium">Int.–Advanced</dd></div>
                <div className="flex justify-between"><dt className="text-[#4A5568]">Certificate</dt><dd className="text-[#1A2E4A] font-medium">On Completion</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
