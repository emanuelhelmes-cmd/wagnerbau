import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { COMPANY_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${COMPANY_NAME} – Informationen zum Umgang mit Ihren Daten.`,
  robots: { index: false, follow: true },
};

/**
 * Datenschutz (Privacy Policy) page
 * Required by DSGVO/GDPR
 */
export default function DatenschutzPage() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <Container size="narrow">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-gray max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
            <p className="text-muted leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">2. Verantwortliche Stelle</h2>
            <p className="text-muted leading-relaxed">
              {COMPANY_NAME}
              <br />
              {CONTACT.address.city}, {CONTACT.address.region}
              <br />
              <br />
              Telefon: {CONTACT.phone}
              <br />
              E-Mail: {CONTACT.email}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">3. Datenerfassung auf dieser Website</h2>

            <h3 className="text-lg font-medium mb-2">Kontaktformular</h3>
            <p className="text-muted leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter.
            </p>
            <p className="text-muted leading-relaxed mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist.
            </p>

            <h3 className="text-lg font-medium mb-2 mt-4">Server-Log-Dateien</h3>
            <p className="text-muted leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in
              so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
              übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">4. Ihre Rechte</h2>
            <p className="text-muted leading-relaxed">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
              Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
              erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
              dieser Daten zu verlangen.
            </p>
            <p className="text-muted leading-relaxed mt-2">
              Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können
              Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
            <p className="text-muted leading-relaxed">
              Diese Website verwendet nur technisch notwendige Cookies für die
              Funktionsfähigkeit der Website. Es werden keine Tracking-Cookies oder
              Cookies für Werbezwecke eingesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">6. Hosting</h2>
            <p className="text-muted leading-relaxed">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf
              dieser Website erfasst werden, werden auf den Servern des Hosters
              gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen,
              Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Websitezugriffe und sonstige Daten, die über eine Website generiert
              werden, handeln.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">7. Änderungen</h2>
            <p className="text-muted leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
              stets den aktuellen rechtlichen Anforderungen entspricht oder um
              Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
            </p>
            <p className="text-muted leading-relaxed mt-2">
              <em>Stand: März 2026</em>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
