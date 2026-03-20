import { Container, Section } from "@/components/ui";

/**
 * CTA section - prominent heading before footer
 */
export function CTASection() {
  return (
    <Section variant="default" className="relative overflow-hidden bg-[#1a1a1a]">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <Container className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" style={{ color: '#ffffff' }}>
          Bereit für Ihr nächstes Projekt?
        </h2>
        <p className="max-w-xl mx-auto text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Kontaktieren Sie uns unverbindlich – wir beraten Sie gerne und
          erstellen Ihnen ein transparentes Angebot.
        </p>
      </Container>
    </Section>
  );
}
