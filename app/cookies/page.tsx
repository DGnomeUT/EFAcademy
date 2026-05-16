import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Executive Finance Academy cookie policy.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1 className="page-h1">Cookie Policy</h1>
        </div>
      </section>
      <section className="section-pad section-light">
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="gold-rule" />
          <p className="section-body" style={{ marginBottom: "20px" }}>
            The Cookie Policy for Executive Finance Academy is currently being finalised and will be published
            prior to the full public launch of the platform.
          </p>
          <p className="section-body">
            For any queries regarding data collection or cookie usage, please contact us at{" "}
            <a
              href="mailto:theexecutivefinanceacademy@gmail.com"
              style={{ color: "var(--gold-dim)", textDecoration: "none" }}
            >
              theexecutivefinanceacademy@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
