import type { Metadata } from "next";
import Image from "next/image";
import {
  Heart, Shield, Eye, Target, Users, CheckCircle2, ArrowRight,
} from "lucide-react";
import { Container, Section, Card, CardContent } from "@/components/ui";
import { buttonVariants } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { WORKFLOW_STEPS } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Wagner Bau & Immobilien kennen – Ihr zuverlässiger Partner für Bau- und Montagearbeiten in Weilheim. Erfahrung, Qualität und Leidenschaft.",
};

/**
 * Über uns (About) page
 * Owner introduction, values, experience, and workflow
 */
export default function UeberUnsPage() {
  return (
    <>
      {/* Page Header */}
      <Section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-accent/5 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Über{" "}
              <span className="text-accent">uns</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Persönlich, zuverlässig und mit Leidenschaft fürs Handwerk –
              das ist Wagner Bau & Immobilien.
            </p>
          </div>
        </Container>
      </Section>

      {/* Personal Introduction */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/placeholders/placeholder-portrait.svg"
                  alt="Inhaber von Wagner Bau & Immobilien"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Decorative accent border */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-accent/20 ring-inset" />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-accent-dark">
                  Persönliche Vorstellung
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Der Mensch hinter dem Betrieb
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Als gelernter Fliesenleger bringe ich fundiertes Fachwissen und praktische
                Erfahrung in jedes Projekt ein. Nach meiner Ausbildung und dem Erhalt
                meines Gesellenbriefs habe ich in verschiedenen Bereichen des Handwerks
                gearbeitet und dabei ein breites Spektrum an Fähigkeiten aufgebaut.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Mit Wagner Bau & Immobilien habe ich mir den Traum erfüllt, Handwerk
                so anzubieten, wie ich es selbst als Kunde erwarten würde: zuverlässig,
                sauber und mit einem offenen Ohr für die Wünsche meiner Kunden.
              </p>
              <p className="text-muted leading-relaxed">
                Mein Schwerpunkt liegt auf kleinen Bau- und Montagearbeiten – genau die
                Arbeiten, für die man oft schwer einen Handwerker findet. Genau hier
                bin ich für Sie da.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values & Work Method */}
      <Section variant="muted">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Werte &{" "}
              <span className="text-accent">
                Arbeitsweise
              </span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Qualität beginnt bei der Einstellung – und genau die stimmt bei uns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Leidenschaft",
                desc: "Jede Arbeit wird mit Herzblut und dem Anspruch auf ein perfektes Ergebnis ausgeführt.",
              },
              {
                icon: Shield,
                title: "Zuverlässigkeit",
                desc: "Vereinbarte Termine werden eingehalten. Versprochen ist versprochen.",
              },
              {
                icon: Eye,
                title: "Sorgfalt",
                desc: "Wir arbeiten sauber und achten auf jedes Detail – Ihr Zuhause verdient das.",
              },
              {
                icon: Target,
                title: "Qualität",
                desc: "Lieber einmal richtig als zweimal gemacht. Qualität ist unser Maßstab.",
              },
              {
                icon: Users,
                title: "Kundennähe",
                desc: "Offene Kommunikation und ehrliche Beratung – wir sind für Sie erreichbar.",
              },
              {
                icon: CheckCircle2,
                title: "Transparenz",
                desc: "Klare Preise, keine versteckten Kosten. Sie wissen immer, woran Sie sind.",
              },
            ].map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section variant="default">
        <Container size="narrow">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Erfahrung &{" "}
              <span className="text-accent">Schwerpunkt</span>
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-muted">
            <p className="leading-relaxed">
              Als gelernter Fliesenleger verfüge ich über eine solide handwerkliche
              Grundausbildung. Im Laufe der Jahre habe ich mein Können in vielen
              weiteren Bereichen erweitert: Trockenbau, Bodenverlegung, Montagearbeiten
              und vieles mehr.
            </p>
            <p className="leading-relaxed">
              Mein Schwerpunkt liegt auf <strong>kleinen und mittleren Bau- und
              Montagearbeiten</strong> im Innen- und Außenbereich. Genau die Aufträge,
              die für große Baufirmen zu klein, aber für den Heimwerker zu komplex sind.
            </p>
            <p className="leading-relaxed">
              Ich arbeite hauptsächlich in <strong>Weilheim und der näheren Umgebung
              in Oberbayern</strong>. Die kurzen Wege ermöglichen mir, schnell und
              flexibel auf Ihre Anfragen zu reagieren.
            </p>
          </div>
        </Container>
      </Section>

      {/* Workflow */}
      <Section variant="muted">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              So läuft die{" "}
              <span className="text-accent">
                Zusammenarbeit
              </span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Von der ersten Kontaktaufnahme bis zur Abnahme – transparent und unkompliziert.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {WORKFLOW_STEPS.map((step, index) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                {/* Step Number + Line */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  {index < WORKFLOW_STEPS.length - 1 && (
                    <div className="w-px h-full bg-accent/20 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/kontakt" className={buttonVariants({ variant: "primary", size: "lg", className: "gap-2" })}>
              Projekt anfragen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
