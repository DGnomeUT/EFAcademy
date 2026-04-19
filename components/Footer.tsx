import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A2E4A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Gold rule */}
        <div className="h-px bg-[#C9A84C] mb-12 opacity-40" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/logo-full.png" alt="Executive Finance Academy" width={180} height={55} className="h-11 w-auto mb-4" />
            <p className="text-[#E8D4A0] text-sm leading-relaxed mb-4">
              Practitioner-built executive education for the finance professionals who lead transactions, manage capital, and advise boards across global markets.
            </p>
            <div className="flex gap-4 text-[#C9A84C] text-sm">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#E8D4A0]">LinkedIn</a>
              <span className="text-[#1A2E4A]/50">|</span>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#E8D4A0]">X</a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><Link href="/courses/real-world-tokenization" className="text-[#E8D4A0] text-sm hover:text-[#C9A84C]">Real World Tokenization — Foundation</Link></li>
              <li><Link href="/courses/real-world-tokenization" className="text-[#E8D4A0] text-sm hover:text-[#C9A84C]">Real World Tokenization — Executive</Link></li>
              <li><Link href="/courses" className="text-[#E8D4A0]/60 text-sm hover:text-[#E8D4A0]">More Coming Soon</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#E8D4A0] text-sm hover:text-[#C9A84C]">About EFA</Link></li>
              <li><Link href="/about#philosophy" className="text-[#E8D4A0] text-sm hover:text-[#C9A84C]">Our Philosophy</Link></li>
              <li><Link href="/knowledge-base" className="text-[#E8D4A0] text-sm hover:text-[#C9A84C]">Knowledge Base</Link></li>
              <li><Link href="/enrol" className="text-[#E8D4A0] text-sm hover:text-[#C9A84C]">Contact & Enrol</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@executivefinanceacademy.com" className="text-[#E8D4A0] text-sm hover:text-[#C9A84C]">hello@executivefinanceacademy.com</a></li>
              <li><Link href="/enrol" className="text-[#E8D4A0] text-sm hover:text-[#C9A84C]">Enrolment Enquiries</Link></li>
              <li><Link href="/enrol#group" className="text-[#E8D4A0] text-sm hover:text-[#C9A84C]">Group Licensing</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-[#C9A84C]/20 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#4A5568]">
          <p>&copy; {new Date().getFullYear()} Executive Finance Academy. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[#E8D4A0]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#E8D4A0]">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-[#E8D4A0]">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
