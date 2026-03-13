import Link from "next/link";
import {
  Hammer, LayoutGrid, ChefHat, DoorOpen, DoorClosed,
  Layers, Droplets, Fence, PaintBucket, Wrench, ArrowRight,
} from "lucide-react";
import { Container, Section } from "@/components/ui";
import { buttonVariants } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

/** Map service icon names to Lucide components */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hammer, LayoutGrid, ChefHat, DoorOpen, DoorClosed,
  Layers, Droplets, Fence, PaintBucket, Wrench,
};

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
            <span className="heading-accent heading-accent-center text-accent">
              Leistungen
            </span>
          </h2>
          <p className="text-[#555555] max-w-xl mx-auto text-sm sm:text-base">
            Von Trockenbau bis Terrassenbau — handwerkliche Arbeiten
            rund um Ihr Zuhause.
          </p>
        </div>

        {/* Services Grid — compact */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Link
                key={service.id}
                href={`/leistungen#${service.slug}`}
                className="group flex flex-col items-center gap-2.5 rounded-xl bg-white border border-transparent hover:border-accent/25 px-3 py-5 sm:px-4 sm:py-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 text-accent" />
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
