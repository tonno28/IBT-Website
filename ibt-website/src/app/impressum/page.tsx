import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — IBT Ingenieurbüro Tonn",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container-max max-w-2xl">
        <h1 className="text-3xl font-bold text-zinc-primary mb-10">Impressum</h1>

        <div className="space-y-8 text-sm text-zinc-muted leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Jonas Tonn<br />
              IBT Ingenieurbüro Tonn<br />
              [Straße, Hausnummer]<br />
              53359 Rheinbach
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:info@ibt-tonn.de" className="text-amber hover:underline">info@ibt-tonn.de</a><br />
              Telefon: +49 (0) 2251 48 39
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-IdNr.]
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Energieberater / Ingenieur<br />
              Qualifikation nach §88 GEG<br />
              Gelistet in der Expertenliste der Deutschen Energie-Agentur (dena)<br />
              Akkreditiert bei BAFA und KfW
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Jonas Tonn<br />
              [Adresse wie oben]
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">Haftungsausschluss</h2>
            <p className="mb-3">
              <strong className="text-zinc-secondary">Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <p>
              <strong className="text-zinc-secondary">Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
