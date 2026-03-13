import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui";
import { CONTACT, NAV_LINKS, COMPANY_NAME } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

/**
 * Footer component with contact info, navigation, and legal links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="border-b border-white/10">
        <Container className="py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo.png"
                  alt={COMPANY_NAME}
                  width={477}
                  height={253}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed">
                Ihr verlässlicher Partner für kleine Bau- und Montagearbeiten
                in Weilheim und Umgebung.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                Kontakt
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink(CONTACT.whatsapp, "Hallo, ich interessiere mich für Ihre Leistungen.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-[#25D366] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 flex-shrink-0" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 text-sm text-white/60">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>
                      {CONTACT.address.city}
                      <br />
                      {CONTACT.address.region}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                Schnellkontakt
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Jetzt anrufen
                </a>
                <a
                  href={whatsappLink(CONTACT.whatsapp, "Hallo, ich interessiere mich für Ihre Leistungen.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp schreiben
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <Container className="py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/40">
            © {currentYear} {COMPANY_NAME} – Weilheim und Umgebung
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
