"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is Executive Finance Academy?",
    a: "Executive Finance Academy is an online finance education platform built by practitioners for senior finance professionals. Our programmes cover deal-level technical skills across private markets, M&A, special situations, and frontier finance — designed for CFOs, fund managers, principals, and investment professionals who operate in global capital markets.",
  },
  {
    q: "Who are Executive Finance Academy courses designed for?",
    a: "Our programmes are designed for senior finance professionals — CFOs, principals, fund managers, investment directors, general counsels, and board advisors — who need executable technical knowledge, not classroom theory. If you are operating at transaction level, our curriculum is built for you.",
  },
  {
    q: "What courses does Executive Finance Academy currently offer?",
    a: "Our inaugural programme is Real World Tokenization, available at two tiers: Foundation ($500) and Executive ($1,250). Further programmes across Private Markets, M&A, Technical Modelling, and Special Situations are in development and coming soon.",
  },
  {
    q: "How is Executive Finance Academy different from Wall Street Prep or similar platforms?",
    a: "Most analyst-focused platforms are built to train juniors for entry-level roles. EFA is built for senior practitioners who already have deal experience and need frameworks that are immediately deployable in board rooms, investment committees, and deal structures — not Excel bootcamps.",
  },
  {
    q: "How is Executive Finance Academy different from business school executive education?",
    a: "Business school executive programmes offer broad strategic frameworks with academic delivery. EFA offers narrow, deep, deal-specific knowledge built by practitioners. No theory tax, no irrelevant case studies — only the frameworks you will actually use on your next transaction.",
  },
  {
    q: "Is Executive Finance Academy available globally?",
    a: "Yes. Our platform is fully online and accessible from any jurisdiction. Our curriculum specifically addresses the regulatory and market conventions of the UK, US, EU, Singapore, Hong Kong, and the Gulf — making it relevant for professionals operating across all major financial centres.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-list reveal">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
          <button className="faq-question" onClick={() => toggle(i)}>
            <span className="faq-question-text">{faq.q}</span>
            <span className="faq-icon" />
          </button>
          <div
            className="faq-answer"
            style={{ maxHeight: openIndex === i ? "400px" : "0" }}
          >
            <div className="faq-answer-inner">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
