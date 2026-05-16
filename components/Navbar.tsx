"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        hamburgerRef.current && !hamburgerRef.current.contains(e.target as Node) &&
        menuRef.current && !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className="efa-nav">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-mark">
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L16 5.5V12.5L9 17L2 12.5V5.5L9 1Z" stroke="#C9A85C" strokeWidth="0.8" fill="none"/>
              <path d="M9 5L13 7.5V12.5L9 15L5 12.5V7.5L9 5Z" stroke="#C9A85C" strokeWidth="0.5" fill="none" opacity="0.5"/>
            </svg>
          </div>
          <div className="nav-logo-text">Executive<br/>Finance Academy</div>
        </Link>

        <ul className="nav-links">
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/knowledge-base">Knowledge Base</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>

        <a href="https://the-executive-finance-academy.teachable.com/p/home" target="_blank" rel="noreferrer" className="nav-cta">Enrol Now</a>

        <button
          ref={hamburgerRef}
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div ref={menuRef} className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <Link href="/courses" onClick={close}>Courses</Link>
        <Link href="/knowledge-base" onClick={close}>Knowledge Base</Link>
        <Link href="/about" onClick={close}>About</Link>
        <a href="https://the-executive-finance-academy.teachable.com/p/home" target="_blank" rel="noreferrer" onClick={close} style={{ color: "var(--gold)" }}>Enrol Now →</a>
      </div>
    </>
  );
}
