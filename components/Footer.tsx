import Link from "next/link";

export default function Footer() {
  return (
    <footer className="efa-footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Executive Finance Academy</div>
          <p className="footer-brand-desc">Practitioner-built finance education for senior professionals operating across global capital markets.</p>
        </div>
        <div>
          <div className="footer-col-title">Programmes</div>
          <ul className="footer-col-links">
            <li><Link href="/courses/real-world-tokenization">Real World Tokenization</Link></li>
            <li><Link href="/courses">Private Markets</Link></li>
            <li><Link href="/courses">Transaction Strategy</Link></li>
            <li><Link href="/courses">Technical Modelling</Link></li>
            <li><Link href="/courses">Special Situations</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Platform</div>
          <ul className="footer-col-links">
            <li><Link href="/knowledge-base">Knowledge Base</Link></li>
            <li><Link href="/about">About EFA</Link></li>
            <li><Link href="/about">Our Philosophy</Link></li>
            <li><a href="https://the-executive-finance-academy.teachable.com/p/home" target="_blank" rel="noreferrer">Enrol Now</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Jurisdictions</div>
          <ul className="footer-col-links">
            <li><Link href="/courses">United Kingdom</Link></li>
            <li><Link href="/courses">United States</Link></li>
            <li><Link href="/courses">European Union</Link></li>
            <li><Link href="/courses">Singapore & HK</Link></li>
            <li><Link href="/courses">Gulf (DIFC/ADGM)</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} Executive Finance Academy. All rights reserved.</span>
        <div className="footer-legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
