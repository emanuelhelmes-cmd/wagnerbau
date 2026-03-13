import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Container, Section, Card, CardContent } from "@/components/ui";
import { ContactForm } from "@/components/forms/contact-form";
import { CONTACT } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Wagner Bau & Immobilien – per Telefon, WhatsApp, E-Mail oder Kontaktformular. Wir freuen uns auf Ihre Anfrage!",
};

/**
 * Kontakt (Contact) page
 * Contact form + phone/WhatsApp/email options
 */
export default function KontaktPage() {
  return (
    <>
      {/* Page Header */}
      <Section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-accent/5 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              <span className="text-accent">Kontakt</span>aufnahme
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Sie haben ein Projekt oder eine Frage? Wir freuen uns auf Ihre Nachricht –
              per Formular, Telefon oder WhatsApp.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form (wider) */}
            <div className="lg:col-span-3">
              <Card className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Nachricht senden
                </h2>
                <ContactForm />
              </Card>
            </div>

            {/* Contact Options (sidebar) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <Card className="hover:border-accent/30">
                <CardContent>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-accent transition-colors">
                        Telefon
                      </h3>
                      <p className="text-muted text-sm mt-1">{CONTACT.phone}</p>
                      <p className="text-xs text-muted-light mt-1">
                        Mo–Fr, 7:00–18:00 Uhr
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="hover:border-[#25D366]/30">
                <CardContent>
                  <a
                    href={whatsappLink(
                      CONTACT.whatsapp,
                      "Hallo, ich habe eine Anfrage zu einer Bau- oder Montagearbeit."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#25D366]/10 flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-[#25D366] transition-colors">
                        WhatsApp
                      </h3>
                      <p className="text-muted text-sm mt-1">Direkt schreiben</p>
                      <p className="text-xs text-muted-light mt-1">
                        Schnelle Antwort, auch Fotos möglich
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="hover:border-accent/30">
                <CardContent>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-accent transition-colors">
                        E-Mail
                      </h3>
                      <p className="text-muted text-sm mt-1">{CONTACT.email}</p>
                      <p className="text-xs text-muted-light mt-1">
                        Wir antworten innerhalb von 24 Stunden
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Standort</h3>
                      <p className="text-muted text-sm mt-1">
                        {CONTACT.address.city}
                        <br />
                        {CONTACT.address.region}, {CONTACT.address.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Erreichbarkeit</h3>
                      <p className="text-muted text-sm mt-1">
                        Montag – Freitag
                        <br />
                        7:00 – 18:00 Uhr
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
