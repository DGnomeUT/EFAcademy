import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    default: "Executive Finance Academy | Finance Courses for Executives",
    template: "%s | Executive Finance Academy",
  },
  description:
    "Practitioner-built online finance courses for CFOs, fund managers, and senior finance executives. Real World Tokenization, Private Equity, M&A, and more — globally delivered from $500.",
  keywords: [
    "executive finance courses",
    "finance courses for executives",
    "online finance certification",
    "real world tokenization course",
    "asset tokenization training",
    "private equity course online",
    "M&A training for executives",
    "leveraged finance course",
    "finance education for CFOs",
    "practitioner-led finance education",
    "executive finance certification",
    "digital assets course",
    "finance professional development",
    "investment banking training",
    "senior finance training online",
  ],
  openGraph: {
    title: "Executive Finance Academy | Finance Courses for Executives",
    description:
      "Where Executive Intelligence Meets Deal-Level Precision. Practitioner-built online finance courses for CFOs, fund managers, and senior investment professionals globally.",
    type: "website",
    siteName: "Executive Finance Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Executive Finance Academy | Finance Courses for Executives",
    description:
      "Practitioner-built online finance courses for CFOs, fund managers, and senior investment professionals. Real World Tokenization, Private Equity, M&A and more.",
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Executive Finance Academy",
  alternateName: "EFA",
  url: "https://executivefinanceacademy.com",
  description:
    "Executive Finance Academy is a global online finance education platform offering practitioner-built courses for senior finance professionals including CFOs, fund managers, private equity principals, and investment bankers.",
  email: "hello@executivefinanceacademy.com",
  knowsAbout: [
    "Executive Finance Education", "Real World Asset Tokenization", "Private Equity",
    "Mergers and Acquisitions", "Leveraged Finance", "Private Credit",
    "Financial Modelling", "Investment Banking", "Corporate Finance", "Digital Securities",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Executive Finance Programmes",
    itemListElement: [
      {
        "@type": "Course",
        name: "Real World Tokenization — Foundation Programme",
        description: "The institutional framework for tokenising private assets and designing compliant digital securities. 8 modules. On-demand.",
        offers: { "@type": "Offer", price: "500", priceCurrency: "USD" },
      },
      {
        "@type": "Course",
        name: "Real World Tokenization — Executive Programme",
        description: "Everything in the Foundation Programme plus 46 video lessons across 16 modules, detailed module notes, executive question sets, and curated bibliographies.",
        offers: { "@type": "Offer", price: "1250", priceCurrency: "USD" },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
