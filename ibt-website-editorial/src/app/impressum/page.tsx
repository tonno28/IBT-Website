import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

/**
 * Impressum nach § 5 DDG (seit Mai 2024 an der Stelle des früheren § 5 TMG)
 * und § 18 Abs. 2 MStV, ergänzt um die Pflichtangaben der DL-InfoV für
 * Dienstleister (Berufshaftpflicht, Berufsrecht).
 *
 * Mit [...] markierte Stellen kann nur Jonas ausfüllen, bitte vor dem
 * Livegang ersetzen oder den jeweiligen Abschnitt streichen.
 */

const A = "text-amber hover:underline";

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container-max max-w-2xl">
        <h1 className="text-3xl font-bold text-zinc-primary mb-3">Impressum</h1>
        <p className="text-sm text-zinc-hint mb-10">
          Angaben gemäß § 5 DDG und § 18 Abs. 2 MStV
        </p>

        <div className="space-y-8 text-sm text-zinc-muted leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Diensteanbieter</h2>
            <p>
              Jonas Tonn<br />
              IBT Ingenieurbüro Tonn<br />
              Friedhofstr. 15<br />
              52399 Merzenich<br />
              Deutschland
            </p>
            <p className="mt-3">
              Einzelunternehmen, vertreten durch den Inhaber Jonas Tonn.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Kontakt</h2>
            <p>
              Telefon: <a href="tel:+4915231060247" className={A}>0152 31060247</a><br />
              E-Mail: <a href="mailto:info@ib-tonn.de" className={A}>info@ib-tonn.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Jonas Tonn<br />
              Friedhofstr. 15<br />
              52399 Merzenich
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Umsatzsteuer</h2>
            <p>
              Als Kleinunternehmer im Sinne des § 19 UStG wird keine Umsatzsteuer
              berechnet und in Rechnungen nicht ausgewiesen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              Berufsbezeichnung: Ingenieur<br />
              Verliehen in: Bundesrepublik Deutschland<br />
              Akademischer Grad: Bachelor of Engineering (B. Eng.), Smart Building
              Engineering, FH Aachen
            </p>
            <p className="mt-3">
              Die Führung der Berufsbezeichnung „Ingenieur" richtet sich nach dem
              Ingenieurgesetz des Landes Nordrhein-Westfalen (IngG NRW). Zuständige
              Kammer: Ingenieurkammer-Bau NRW, Zollhof 2, 40221 Düsseldorf.
            </p>
            <p className="mt-3">Weitere fachliche Qualifikationen:</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>
                Ausstellungsberechtigung für Energieausweise nach § 88 GEG
                (Gebäudeenergiegesetz)
              </li>
              <li>
                Eingetragen in der Expertenliste für Förderprogramme des Bundes,
                geführt von der Deutschen Energie-Agentur (dena)
              </li>
              <li>
                Zugelassen für Fachplanung und Baubegleitung im Rahmen der
                Bundesförderung für effiziente Gebäude (BAFA/KfW)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">
              Berufshaftpflichtversicherung
            </h2>
            <p>Angabe gemäß § 2 Abs. 1 Nr. 11 DL-InfoV:</p>
            <p className="mt-2">
              Markel Insurance SE<br />
              Sophienstraße 26<br />
              80333 München
            </p>
            <p className="mt-2">
              Räumlicher Geltungsbereich des Versicherungsschutzes: weltweit.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">
              Streitbeilegung
            </h2>
            <p>
              Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
            </p>
            <p className="mt-3 text-xs text-zinc-hint">
              Die Online-Streitbeilegungsplattform der EU wurde zum 20. Juli 2025
              eingestellt; ein Verweis darauf ist nicht mehr erforderlich.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Haftungsausschluss</h2>
            <p className="mb-3">
              <strong className="text-zinc-secondary">Haftung für Inhalte:</strong> Als
              Diensteanbieter bin ich nach § 7 Abs. 1 DDG für eigene Inhalte auf diesen
              Seiten verantwortlich. Die Inhalte wurden mit größter Sorgfalt erstellt.
              Für Richtigkeit, Vollständigkeit und Aktualität kann ich jedoch keine
              Gewähr übernehmen. Das gilt besonders für Angaben zu Förderprogrammen:
              Fördersätze, Höchstbeträge und Voraussetzungen ändern sich häufig.
              Verbindlich ist allein der Bescheid der zuständigen Stelle (BAFA/KfW).
            </p>
            <p className="mb-3">
              <strong className="text-zinc-secondary">Förderrechner:</strong> Der auf
              dieser Website angebotene Rechner liefert eine unverbindliche
              Orientierung, keine Förderzusage und keine Rechts- oder Steuerberatung.
              Eine Haftung für darauf gestützte Entscheidungen ist ausgeschlossen.
            </p>
            <p>
              <strong className="text-zinc-secondary">Haftung für Links:</strong> Diese
              Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich
              keinen Einfluss habe. Für diese fremden Inhalte kann ich keine Gewähr
              übernehmen; verantwortlich ist stets der jeweilige Anbieter. Bei bekannt
              werdenden Rechtsverletzungen entferne ich derartige Links umgehend.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
              des Urheberrechts bedürfen der schriftlichen Zustimmung.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-border">
            <p className="text-xs text-zinc-hint">
              Informationen zum Umgang mit Ihren Daten finden Sie in der{" "}
              <Link href="/datenschutz" className={A}>Datenschutzerklärung</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
