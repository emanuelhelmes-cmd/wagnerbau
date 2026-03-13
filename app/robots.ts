import type { MetadataRoute } from "next";

/**
 * Robots.txt configuration
 * Allows all crawlers, blocks admin routes
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://wagner-bau-immobilien.de/sitemap.xml",
  };
}
