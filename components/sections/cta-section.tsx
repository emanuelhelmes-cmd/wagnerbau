import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

/**
 * CTA section - prominent call-to-action with multiple contact options
 */
export function CTASection() {
  return (
    <Section variant="dark" className="relative overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <Container className="text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
          Bereit für Ihr nächstes Projekt?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto text-lg mb-10">
          Kontaktieren Sie uns unverbindlich – wir beraten Sie gerne und
          erstellen Ihnen ein transparentes Angebot.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/kontakt"
            className={buttonVariants({ variant: "primary", size: "lg", className: "w-full sm:w-auto gap-2" })}
          >
            Kontaktformular
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={whatsappLink(
              CONTACT.whatsapp,
              "Hallo, ich hätte eine Anfrage zu einer Bau- oder Montagearbeit."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "whatsapp", size: "lg", className: "w-full sm:w-auto gap-2" })}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg h-13 px-8 text-lg font-medium w-full sm:w-auto text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Phone className="h-5 w-5" />
            {CONTACT.phone}
          </a>
        </div>
      </Container>
    </Section>
  );
}
