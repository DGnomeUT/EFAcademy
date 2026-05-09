import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Executive Finance Academy privacy policy.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1 className="page-h1">Privacy Policy</h1>
        </div>
      </section>
      <section className="section-pad section-light">
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="gold-rule" />
          <p className="section-body" style={{ marginBottom: "20px" }}>
            This Privacy Policy is currently being finalised. It will be published prior to the full public launch
            of the Executive Finance Academy platform.
          </p>
          <p className="section-body">
            For any privacy-related queries in the interim, please contact us at{" "}
            <a
              href="mailto:hello@executivefinanceacademy.com"
              style={{ color: "var(--gold-dim)", textDecoration: "none" }}
            >
              hello@executivefinanceacademy.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
