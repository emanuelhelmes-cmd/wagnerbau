import type { MetadataRoute } from "next";

/**
 * Sitemap generation for SEO
 * Uses a fixed build-time date to avoid always reporting "just modified"
 */
const BUILD_DATE = new Date("2026-03-13");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wagner-bau-immobilien.de";

  return [
    {
      url: baseUrl,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: BUILD_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: BUILD_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
