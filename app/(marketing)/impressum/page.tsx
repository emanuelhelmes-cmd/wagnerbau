import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { COMPANY_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${COMPANY_NAME} – Angaben gemäß § 5 TMG.`,
  robots: { index: false, follow: true },
};

/**
 * Impressum (Legal Notice) page
 * Required by German law (Telemediengesetz)
 */
export default function ImpressumPage() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <Container size="narrow">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-gray max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-muted leading-relaxed">
              {COMPANY_NAME}
              <br />
              {CONTACT.address.city}
              <br />
              {CONTACT.address.region}, {CONTACT.address.country}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
            <p className="text-muted leading-relaxed">
              Telefon: {CONTACT.phone}
              <br />
              E-Mail: {CONTACT.email}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
            <p className="text-muted leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              <em>[wird nachgetragen]</em>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Berufsbezeichnung</h2>
            <p className="text-muted leading-relaxed">
              Berufsbezeichnung: Fliesenleger (Gesellenbrief)
              <br />
              Verliehen in: Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Streitschlichtung</h2>
            <p className="text-muted leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-muted leading-relaxed mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Haftung für Inhalte</h2>
            <p className="text-muted leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
              TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte
              oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Haftung für Links</h2>
            <p className="text-muted leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
              auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
              stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Urheberrecht</h2>
            <p className="text-muted leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
