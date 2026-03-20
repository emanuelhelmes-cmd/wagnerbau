import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui";
import { serviceIconMap } from "@/components/icons/service-icons";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle Leistungen von Wagner Bau & Immobilien: Trockenbau, Küchenmontage, Bodenverlegung, Terrassenbau, Entrümpelung und mehr in Weilheim.",
};

/**
 * Leistungen overview – icon grid linking to individual sub-pages
 */
export default function LeistungenPage() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-accent/5 to-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            Unsere{" "}
            <span className="text-accent">Leistungen</span>
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Professionelle Unterstützung bei vielfältigen Bau- und
            Montagearbeiten — von Abbruch bis Terrassenbau.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {SERVICES.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <Link
                key={service.id}
                href={`/leistungen/${service.slug}`}
                className="group flex flex-col items-center gap-3 sm:gap-4 rounded-2xl bg-[#f8f4ed] border border-transparent hover:border-accent/25 px-4 py-6 sm:px-5 sm:py-8 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f5f0e8] group-hover:bg-accent/15 transition-colors">
                  {Icon && <Icon className="w-9 h-9 sm:w-11 sm:h-11 text-accent" />}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#222222] group-hover:text-accent transition-colors leading-tight">
                  {service.title}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
