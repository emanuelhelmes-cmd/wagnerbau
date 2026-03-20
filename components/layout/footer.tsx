import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Container } from "@/components/ui";
import { CONTACT, NAV_LINKS, COMPANY_NAME } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

/**
 * Compact, professional footer
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111]">
      <Container className="py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/logo-dark.svg"
                alt={COMPANY_NAME}
                width={200}
                height={62}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/40 text-xs leading-relaxed">
              Bau- und Montagearbeiten<br />
              in Weilheim und Umgebung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.address.city}, {CONTACT.address.region}</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2.5">
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent hover:bg-accent-dark px-4 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              Jetzt anrufen
            </a>
            <a
              href={whatsappLink(CONTACT.whatsapp, "Hallo, ich interessiere mich für Ihre Leistungen.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] px-4 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 hover:border-white/30 px-4 py-2.5 text-sm font-semibold text-white/70 hover:text-white transition-all"
            >
              <Mail className="h-4 w-4" />
              Kontaktformular
            </Link>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08]">
        <Container className="py-4">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row text-xs text-white/30">
            <p>© {currentYear} {COMPANY_NAME}</p>
            <div className="flex gap-4">
              <Link href="/impressum" className="hover:text-white/60 transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white/60 transition-colors">Datenschutz</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
