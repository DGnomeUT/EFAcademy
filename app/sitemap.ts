import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://executivefinanceacademy.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/courses`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/courses/real-world-tokenization`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/courses/islamic-finance`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/knowledge-base`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.65 },
    { url: `${base}/enrol`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
