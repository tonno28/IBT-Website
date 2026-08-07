import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — IBT Ingenieurbüro Tonn",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container-max max-w-2xl">
        <h1 className="text-3xl font-bold text-zinc-primary mb-10">Datenschutzerklärung</h1>

        <div className="space-y-8 text-sm text-zinc-muted leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-sm font-semibold text-zinc-secondary mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-sm font-semibold text-zinc-secondary mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p className="mb-3">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
              Jonas Tonn, IBT Ingenieurbüro Tonn. Kontakt: info@ib-tonn.de
            </p>

            <h3 className="text-sm font-semibold text-zinc-secondary mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p className="mb-3">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen —
              z.B. durch Eingabe in unser Kontaktformular. Andere Daten werden automatisch
              oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
            </p>

            <h3 className="text-sm font-semibold text-zinc-secondary mb-2">Wofür nutzen wir Ihre Daten?</h3>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website
              zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens oder
              zur Bearbeitung Ihrer Anfragen verwendet werden.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">3. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
              Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den
              Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
              Namen, Websitezugriffe und sonstige Daten handeln.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">4. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2">
              Für den technischen Versand der Formulare nutzen wir den Dienst Web3Forms
              (Web3Forms, Indien). Ihre Formulareingaben werden dort zur Zustellung per
              E-Mail verarbeitet und nicht dauerhaft gespeichert. Grundlage ist ein
              Auftragsverarbeitungsverhältnis; die Übermittlung erfolgt zur Erfüllung
              Ihrer Anfrage.
            </p>
            <p className="mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden
              gelöscht, sobald sie für den Verarbeitungszweck nicht mehr benötigt werden.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">5. Ihre Rechte</h2>
            <p className="mb-2">
              Sie haben jederzeit das Recht auf:
            </p>
            <ul className="space-y-1 ml-4">
              {[
                "Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)",
                "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                "Löschung Ihrer Daten (Art. 17 DSGVO)",
                "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Datenübertragbarkeit (Art. 20 DSGVO)",
                "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
              ].map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-mid shrink-0 mt-1.5" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich an: info@ib-tonn.de<br />
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren
              (zuständig: Landesbeauftragte für Datenschutz und Informationsfreiheit NRW).
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">6. Förderrechner</h2>
            <p>
              Die Berechnung selbst läuft vollständig in Ihrem Browser. Solange Sie nur
              rechnen, werden keine Daten übertragen und nichts gespeichert.
            </p>
            <p className="mt-2">
              Erst wenn Sie am Ende aktiv eine Anfrage absenden, werden Ihre Eingaben
              (Wohneinheiten, Nutzungsart, gewählte Maßnahmen mit Kosten, Boni sowie das
              Berechnungsergebnis) zusammen mit Ihren Kontaktdaten an uns übermittelt —
              technisch über den unter Ziffer 4 genannten Dienst. Das ist notwendig, damit
              wir Ihre Anfrage inhaltlich beantworten können.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-primary mb-3">
              7. Cookies und Reichweitenmessung
            </h2>
            <p>
              Technisch notwendige Speicherung setzen wir ein, damit die Website
              funktioniert und wir uns Ihre Cookie-Entscheidung merken können. Diese
              Speicherung erfolgt auf Grundlage von § 25 Abs. 2 TDDDG und
              Art. 6 Abs. 1 lit. f DSGVO und bedarf keiner Einwilligung.
            </p>
            <h3 className="text-sm font-semibold text-zinc-secondary mt-4 mb-2">Google Tag</h3>
            <p>
              Zur Reichweitenmessung setzen wir Google Tag (Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Irland) ein. Damit werten wir aus, wie diese
              Website genutzt wird, um sie zu verbessern. Dabei können Cookies gesetzt und
              Daten — einschließlich Ihrer gekürzten IP-Adresse — an Google übertragen und
              gegebenenfalls in die USA weitergeleitet werden.
            </p>
            <p className="mt-2">
              Diese Dienste werden <strong>erst nach Ihrer ausdrücklichen Einwilligung</strong>{" "}
              geladen. Lehnen Sie ab oder haben Sie noch nicht entschieden, wird kein
              Google-Skript ausgeführt. Rechtsgrundlage ist Ihre Einwilligung nach
              § 25 Abs. 1 TDDDG und Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p className="mt-2">
              Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen —
              über den Link „Cookie-Einstellungen" am Ende jeder Seite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
