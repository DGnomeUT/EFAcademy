import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance Courses for Executives | Online Finance Certification Programmes",
  description:
    "Browse practitioner-built online finance courses for senior executives. Real World Tokenization Foundation ($500) and Executive ($1,250) available now. Private Equity, M&A, Leveraged Finance, and more coming soon. 100% practitioner-authored. Certificate on completion.",
  keywords: [
    "finance courses for executives",
    "online finance certification",
    "executive finance education",
    "real world tokenization course",
    "private equity course online",
    "M&A training for executives",
    "leveraged finance course",
    "online finance certificate programme",
    "senior finance training online",
  ],
  alternates: {
    canonical: "https://executivefinanceacademy.com/courses",
  },
};

const TOKENIZATION_BASIC_URL = "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme";
const TOKENIZATION_PREMIUM_URL = "https://the-executive-finance-academy.teachable.com/p/asset-tokenization-executive-programme1";

const comingSoon = [
  "Private Equity: Fund Structure & LBO Modelling",
  "Distressed M&A & Debt Restructuring",
  "M&A Execution: From Mandate to Close",
  "Leveraged Finance & Private Credit",
  "Due Diligence: A Practitioner's Framework",
  "Venture Capital: Structure, Terms & Exits",
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A2E4A] pt-36 pb-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3">Course Catalogue</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
            Executive Programmes for the Modern Deal Professional.
          </h1>
          <p className="text-[#E8D4A0] text-lg max-w-2xl leading-relaxed">
            Structured around five pillars of transaction intelligence — from private equity fundamentals to frontier digital asset structures. All programmes are practitioner-authored and designed for senior finance professionals operating across global capital markets.
          </p>
        </div>
      </section>

      {/* Live Courses */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-8">Live Now — Real World Tokenization</p>

          {/* Tier comparison intro */}
          <div className="bg-[#F4F5F6] border-l-4 border-[#C9A84C] p-6 mb-10">
            <p className="text-[#1A2E4A] font-semibold mb-1">Two programmes. One subject mastered at two levels.</p>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              Both programmes cover the same subject — tokenisation of real-world assets as a financial instrument. The Executive Programme builds on the Foundation curriculum with a substantially deeper reference library, designed to turn knowledge into institutional capability.
            </p>
          </div>

          {/* Foundation */}
          <div className="course-card border border-[#D0D4D8] border-l-4 border-l-[#C9A84C] p-8 md:p-10 mb-8">
            <div className="flex flex-wrap justify-between items-start gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Foundation Programme &nbsp;·&nbsp; Digital Assets & Tokenization</span>
                </div>
                <div className="flex items-baseline gap-4 mt-2 mb-3">
                  <h2 className="font-serif text-[#1A2E4A] text-2xl md:text-3xl font-bold">Real World Tokenization</h2>
                  <span className="font-serif text-[#1A2E4A] text-2xl font-bold shrink-0">$500</span>
                </div>
                <p className="text-[#4A5568] text-base mb-4 leading-relaxed max-w-2xl">
                  The institutional framework for tokenising private assets and designing compliant digital securities. Eight on-demand modules built from the structurer&apos;s perspective — covering blockchain architecture, regulatory frameworks across six major jurisdictions, and live deal case studies.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#4A5568] mb-4">
                  <span><strong className="text-[#1A2E4A]">Format:</strong> On-Demand + Live Q&A</span>
                  <span><strong className="text-[#1A2E4A]">Modules:</strong> 8</span>
                  <span><strong className="text-[#1A2E4A]">Level:</strong> Advanced Practitioner</span>
                  <span><strong className="text-[#1A2E4A]">Certificate:</strong> On Completion</span>
                </div>
                <ul className="space-y-1 mb-6">
                  {[
                    "8 on-demand video modules with slide presentations",
                    "Regulatory coverage: UK, US, EU, Singapore, Hong Kong, Gulf",
                    "Live tokenisation case studies across global markets",
                  ].map((b) => (
                    <li key={b} className="text-[#4A5568] text-sm flex gap-2">
                      <span className="text-[#C9A84C] shrink-0">→</span>{b}
                    </li>
                  ))}
                </ul>
                <Link href="/courses/real-world-tokenization" className="text-[#C9A84C] text-sm font-semibold hover:text-[#1A2E4A]">
                  View Full Syllabus →
                </Link>
              </div>
              <div className="shrink-0">
                <a href={TOKENIZATION_BASIC_URL} target="_blank" rel="noreferrer"
                  className="block px-6 py-3 bg-[#C9A84C] text-[#1A2E4A] text-sm font-bold text-center hover:bg-[#E8D4A0] transition-colors min-w-[180px]">
                  Enrol — $500
                </a>
              </div>
            </div>
          </div>

          {/* Executive / Premium */}
          <div className="course-card border border-[#1A2E4A] border-l-4 border-l-[#1A2E4A] p-8 md:p-10 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#C9A84C] text-[#1A2E4A] text-xs font-bold px-4 py-1.5 tracking-wider uppercase">
              Most Complete
            </div>
            <div className="flex flex-wrap justify-between items-start gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="text-[#1A2E4A] text-xs font-bold tracking-[0.2em] uppercase">Executive Programme &nbsp;·&nbsp; Digital Assets & Tokenization</span>
                </div>
                <div className="flex items-baseline gap-4 mt-2 mb-3">
                  <h2 className="font-serif text-[#1A2E4A] text-2xl md:text-3xl font-bold">Real World Tokenization</h2>
                  <span className="font-serif text-[#1A2E4A] text-2xl font-bold shrink-0">$1,250</span>
                </div>
                <p className="text-[#4A5568] text-base mb-4 leading-relaxed max-w-2xl">
                  Everything in the Foundation Programme, plus a comprehensive institutional reference library across 16 modules. Designed for executives who need to brief boards, evaluate vendor proposals, build internal capability, and conduct due diligence on tokenised products.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#4A5568] mb-4">
                  <span><strong className="text-[#1A2E4A]">Format:</strong> On-Demand + Live Q&A</span>
                  <span><strong className="text-[#1A2E4A]">Modules:</strong> 16</span>
                  <span><strong className="text-[#1A2E4A]">Video Lessons:</strong> 46</span>
                  <span><strong className="text-[#1A2E4A]">Certificate:</strong> On Completion</span>
                </div>
                <ul className="space-y-1 mb-6">
                  {[
                    "46 video lessons + 46 slide presentations (non-downloadable)",
                    "16 detailed written module notes",
                    "16 executive question sets — MCQs with answer keys & explanations",
                    "16 curated bibliographies with links to primary research & regulatory documents",
                    "Complete institutional reference for working knowledge",
                  ].map((b) => (
                    <li key={b} className="text-[#4A5568] text-sm flex gap-2">
                      <span className="text-[#1A2E4A] shrink-0 font-bold">→</span>{b}
                    </li>
                  ))}
                </ul>
                <Link href="/courses/real-world-tokenization" className="text-[#1A2E4A] text-sm font-semibold hover:text-[#C9A84C]">
                  View Full Syllabus & Tier Comparison →
                </Link>
              </div>
              <div className="shrink-0">
                <a href={TOKENIZATION_PREMIUM_URL} target="_blank" rel="noreferrer"
                  className="block px-6 py-3 bg-[#1A2E4A] text-white text-sm font-bold text-center hover:bg-[#111F33] transition-colors min-w-[180px]">
                  Enrol — $1,250
                </a>
              </div>
            </div>
          </div>

          {/* Islamic Finance — coming soon */}
          <p className="text-[#4A5568] text-xs font-bold tracking-[0.2em] uppercase mb-6 mt-14">Coming Soon</p>
          <div className="border border-[#D0D4D8] border-l-4 border-l-[#D0D4D8] p-8 md:p-10 mb-6 opacity-70">
            <div className="flex flex-wrap justify-between items-start gap-6">
              <div className="flex-1">
                <span className="text-[#888] text-xs font-bold tracking-[0.2em] uppercase">Islamic Finance & Shariah &nbsp;·&nbsp; Intermediate–Advanced</span>
                <h2 className="font-serif text-[#4A5568] text-2xl md:text-3xl font-bold mt-2 mb-3">Islamic Finance & Shariah-Compliant Structuring</h2>
                <p className="text-[#4A5568]/80 text-base mb-4 leading-relaxed max-w-2xl">
                  From theoretical compliance to high-fidelity product engineering — a practitioner&apos;s guide to Shariah-compliant transactions in global capital markets. AAOIFI-aligned. 10 modules.
                </p>
              </div>
              <Link href="/enrol"
                className="px-6 py-3 border border-[#D0D4D8] text-[#888] text-sm font-semibold text-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors shrink-0">
                Notify Me
              </Link>
            </div>
          </div>

          {/* Other coming soon */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {comingSoon.map((course) => (
              <div key={course} className="border border-[#D0D4D8] p-5 opacity-60">
                <span className="text-[#888] text-xs font-bold uppercase tracking-wider">Pipeline</span>
                <p className="text-[#4A5568] text-base font-semibold mt-2">{course}</p>
                <Link href="/enrol" className="text-[#888] text-xs hover:text-[#C9A84C] mt-3 block">Notify Me →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
