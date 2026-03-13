import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ValuesSection } from "@/components/sections/values-section";
import { CTASection } from "@/components/sections/cta-section";
import { COMPANY_NAME, SITE_URL } from "@/lib/constants";

/**
 * Homepage - Startseite
 * Includes hero, services overview, values, and CTA sections
 */
export default function HomePage() {
  // JSON-LD structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY_NAME,
    description:
      "Ihr zuverlässiger Partner für kleine Bau- und Montagearbeiten in Weilheim und Umgebung.",
    url: SITE_URL,
    telephone: "+491758920350",
    email: "info@wagner-bau-immobilien.de",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Weilheim i.OB",
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 47.839,
        longitude: 11.142,
      },
      geoRadius: "30000",
    },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
