import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { buttonVariants } from "@/components/ui/button";
import { serviceIconMap } from "@/components/icons/service-icons";
import { SERVICES } from "@/lib/constants";

/**
 * Services grid section for the homepage
 * Compact cards: icon + title only, responsive grid
 */
export function ServicesSection() {
  return (
    <Section variant="muted" id="leistungen">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] mb-3">
            Unsere{" "}
            <span className="text-accent">Leistungen</span>
          </h2>
          <p className="text-[#555555] max-w-xl mx-auto text-sm sm:text-base">
            Von Trockenbau bis Terrassenbau — handwerkliche Arbeiten
            rund um Ihr Zuhause.
          </p>
        </div>

        {/* Services Grid — larger icon cards like reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {SERVICES.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <Link
                key={service.id}
                href={`/leistungen#${service.slug}`}
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

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/leistungen"
            className={buttonVariants({ variant: "outline", size: "default", className: "gap-2" })}
          >
            Alle Leistungen im Detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
