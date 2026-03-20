import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { serviceIconMap } from "@/components/icons/service-icons";
import { CTASection } from "@/components/sections/cta-section";
import { SERVICES } from "@/lib/constants";

/** Pre-generate all service slugs at build time */
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

/** Dynamic metadata per service */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Leistung nicht gefunden" };

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

/**
 * Individual service detail page
 * Same design as the previous inline sections, now on its own URL
 */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = serviceIconMap[service.icon];

  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-8 md:pt-40 md:pb-10 bg-gradient-to-b from-accent/5 to-background">
        <Container>
          {/* Back link */}
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle Leistungen
          </Link>

          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#f5f0e8]">
              {Icon && <Icon className="w-9 h-9 text-accent" />}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {service.title}
            </h1>
          </div>

          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            {service.shortDescription}
          </p>
        </Container>
      </Section>

      {/* Detail Content */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <div>
              <p className="text-muted leading-relaxed mb-8 text-base">
                {service.description}
              </p>

              {/* Advantages */}
              <div className="space-y-3">
                <h2 className="font-semibold text-xl mb-4">Ihre Vorteile:</h2>
                <ul className="space-y-3">
                  {service.advantages.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Placeholder Images */}
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
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
