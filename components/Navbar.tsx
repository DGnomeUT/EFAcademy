"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Courses", href: "/courses" },
    { label: "Knowledge Base", href: "/knowledge-base" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A2E4A] shadow-lg" : "bg-[#1A2E4A]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo-full.png" alt="Executive Finance Academy" width={200} height={60} priority className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-[#E8D4A0] hover:text-[#C9A84C] text-sm font-medium tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enrol"
            className="ml-4 px-5 py-2.5 border border-[#C9A84C] text-[#C9A84C] text-sm font-semibold hover:bg-[#C9A84C] hover:text-[#1A2E4A] transition-all duration-200"
          >
            Enrol Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#E8D4A0] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111F33] px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#E8D4A0] hover:text-[#C9A84C] text-base font-medium py-2 border-b border-[#1A2E4A]"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enrol"
            className="mt-2 px-5 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm font-semibold text-center hover:bg-[#C9A84C] hover:text-[#1A2E4A]"
            onClick={() => setMenuOpen(false)}
          >
            Enrol Now
          </Link>
        </div>
      )}
    </nav>
  );
}
