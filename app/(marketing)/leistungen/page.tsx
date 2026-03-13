import type { Metadata } from "next";
import Image from "next/image";
import {
  Hammer, LayoutGrid, ChefHat, DoorOpen, DoorClosed,
  Layers, Droplets, Fence, PaintBucket, Wrench, CheckCircle2,
} from "lucide-react";
import { Container, Section } from "@/components/ui";
import { CTASection } from "@/components/sections/cta-section";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle Leistungen von Wagner Bau & Immobilien: Trockenbau, Küchenmontage, Bodenverlegung, Terrassenbau, Entrümpelung und mehr in Weilheim.",
};

/** Map icon names to Lucide components */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hammer, LayoutGrid, ChefHat, DoorOpen, DoorClosed,
  Layers, Droplets, Fence, PaintBucket, Wrench,
};

/**
 * Leistungen (Services) page
 * Detailed description of each service with advantages and placeholder gallery
 */
export default function LeistungenPage() {
  return (
    <>
      {/* Page Header */}
      <Section className="pt-32 pb-8 md:pt-40 md:pb-10 bg-gradient-to-b from-accent/5 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              Unsere{" "}
              <span className="text-accent">Leistungen</span>
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto">
              Professionelle Unterstützung bei vielfältigen Bau- und
              Montagearbeiten — von Abbruch bis Terrassenbau.
            </p>
          </div>

          {/* Quick Navigation */}
          <nav aria-label="Leistungen Schnellnavigation">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
              {SERVICES.map((service) => {
                const Icon = iconMap[service.icon] || Wrench;
                return (
                  <a
                    key={service.id}
                    href={`#${service.slug}`}
                    className="group flex flex-col items-center gap-2 rounded-xl bg-white border border-transparent hover:border-accent/25 px-3 py-4 sm:px-4 sm:py-5 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#222222] group-hover:text-accent transition-colors leading-tight">
                      {service.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </nav>
        </Container>
      </Section>

      {/* Service Detail Sections */}
      {SERVICES.map((service, index) => {
        const Icon = iconMap[service.icon] || Wrench;
        const isEven = index % 2 === 0;

        return (
          <Section
            key={service.id}
            id={service.slug}
            variant={isEven ? "default" : "muted"}
            className="scroll-mt-24"
          >
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                {/* Content */}
                <div className={!isEven ? "lg:order-2" : ""}>
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Advantages */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Ihre Vorteile:</h3>
                    <ul className="space-y-2">
                      {service.advantages.map((advantage) => (
                        <li key={advantage} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Placeholder Image Gallery */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2 aspect-[16/10] relative rounded-xl overflow-hidden">
                      <Image
                        src="/images/placeholders/placeholder-service.svg"
                        alt={`${service.title} – Beispielbild`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src="/images/placeholders/placeholder-gallery.svg"
                        alt={`${service.title} – Detail 1`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src="/images/placeholders/placeholder-gallery.svg"
                        alt={`${service.title} – Detail 2`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      <CTASection />
    </>
  );
}
