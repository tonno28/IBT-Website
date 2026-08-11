import type { Metadata } from "next";
import Link from "next/link";
import CookieEinstellungen from "@/components/CookieEinstellungen";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: false },
};

/**
 * Datenschutzerklärung.
 *
 * Beschreibt genau die Verarbeitungen, die diese Website tatsächlich
 * auslöst: Vercel als Hoster, Web3Forms für den Formularversand, Google Tag
 * nur nach Einwilligung. Kommt ein Dienst dazu oder fällt einer weg, gehört
 * das hier hinein, eine Erklärung, die etwas anderes behauptet als der Code
 * tut, ist der häufigste Mangel bei Abmahnungen.
 *
 * UMZUG NACH IONOS: Sobald der statische Export auf IONOS-Webspace liegt,
 * Abschnitt 3 ersetzen durch:
 *
 *   Diese Website wird bei der IONOS SE, Elgendorfer Str. 57, 56410
 *   Montabaur, Deutschland gehostet. Die Server stehen in Deutschland. Mit
 *   IONOS besteht ein Vertrag über Auftragsverarbeitung nach Art. 28 DSGVO.
 *
 * Der Absatz zum Drittlandtransfer entfällt dann ersatzlos, und das Datum
 * in STAND wird hochgesetzt.
 *
 * Mit [...] markierte Stellen kann nur Jonas ausfüllen.
 */

const STAND = "11. August 2026";
const A = "text-amber hover:underline";

function Abschnitt({
  nr,
  titel,
  children,
}: {
  nr: number;
  titel: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-28" id={`abschnitt-${nr}`}>
      <h2 className="text-base font-semibold text-zinc-primary mb-3">
        {nr}. {titel}
      </h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container-max max-w-2xl">
        <h1 className="text-3xl font-bold text-zinc-primary mb-3">
          Datenschutzerklärung
        </h1>
        <p className="text-sm text-zinc-hint mb-10">Stand: {STAND}</p>

        <div className="space-y-10 text-sm text-zinc-muted leading-relaxed">
          <Abschnitt nr={1} titel="Verantwortlicher">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
              der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p className="pt-1">
              Jonas Tonn<br />
              IBT Ingenieurbüro Tonn<br />
              Friedhofstr. 15<br />
              52399 Merzenich<br />
              E-Mail: <a href="mailto:info@ib-tonn.de" className={A}>info@ib-tonn.de</a><br />
              Telefon: <a href="tel:+4915231060247" className={A}>0152 31060247</a>
            </p>
            <p className="pt-1">
              Ein Datenschutzbeauftragter ist gesetzlich nicht bestellt; die
              Voraussetzungen des Art. 37 DSGVO liegen nicht vor. Für alle Fragen
              zum Datenschutz erreichen Sie mich unter den oben genannten
              Kontaktdaten.
            </p>
          </Abschnitt>

          <Abschnitt nr={2} titel="Grundsätzliches">
            <p>
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können. Ich verarbeite Ihre Daten nur, soweit
              das für den jeweils genannten Zweck erforderlich ist, und nur auf
              einer der in Art. 6 DSGVO genannten Rechtsgrundlagen.
            </p>
            <p>
              Die Nutzung dieser Website ist ohne Angabe personenbezogener Daten
              möglich. Daten geben Sie nur dann an, wenn Sie mich aktiv
              kontaktieren.
            </p>
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine
              TLS-/SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie am Schloss-Symbol in Ihrem Browser. Ist sie aktiv, können die
              Daten, die Sie an mich übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
          </Abschnitt>

          <Abschnitt nr={3} titel="Hosting und Server-Logfiles">
            <p>
              Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA gehostet. Mit Vercel besteht ein Vertrag über
              Auftragsverarbeitung nach Art. 28 DSGVO. Da die Auslieferung über
              ein weltweites Servernetz erfolgt, können dabei personenbezogene
              Daten, insbesondere Ihre IP-Adresse, in die USA übermittelt
              werden. Grundlage der Übermittlung sind die
              Standardvertragsklauseln der EU-Kommission nach Art. 46 Abs. 2
              lit. c DSGVO.
            </p>
            <p>
              Beim Aufruf der Website erhebt der Hoster automatisch Informationen,
              die Ihr Browser übermittelt, und speichert sie in sogenannten
              Server-Logfiles:
            </p>
            <ul className="list-disc pl-5 space-y-1 pt-1">
              <li>aufgerufene Seite und übertragene Datenmenge</li>
              <li>Datum und Uhrzeit des Abrufs</li>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL (die zuvor besuchte Seite)</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="pt-1">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt
              und dienen dem sicheren, störungsfreien Betrieb der Website.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte
              Interesse liegt in der technischen Bereitstellung und der
              Angriffserkennung. Die Logfiles werden nach spätestens 7 Tagen
              gelöscht, sofern sie nicht zur Aufklärung eines konkreten
              Sicherheitsvorfalls benötigt werden.
            </p>
          </Abschnitt>

          <Abschnitt nr={4} titel="Kontaktaufnahme">
            <p>
              Wenn Sie mir über das Kontaktformular, per E-Mail, Telefon oder
              WhatsApp eine Anfrage senden, verarbeite ich Ihre Angaben zur
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen.
            </p>
            <p>
              Verarbeitet werden die Daten, die Sie angeben: Name, E-Mail-Adresse,
              gegebenenfalls Telefonnummer, das gewählte Anliegen sowie Ihre
              freiwilligen Angaben zum Gebäude (etwa Gebäudetyp, Baujahr,
              Wohnfläche, Zeitrahmen) und Ihre Nachricht.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage
              auf einen Vertrag abzielt, sonst Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
            <p>
              <strong className="text-zinc-secondary">Formularversand:</strong> Für
              die technische Zustellung der Formulare nutze ich den Dienst
              Web3Forms. Ihre Eingaben werden dort ausschließlich verarbeitet, um
              sie mir per E-Mail zuzustellen, und nicht dauerhaft gespeichert. Es
              besteht ein Auftragsverarbeitungsverhältnis. Sofern dabei Daten
              außerhalb der EU verarbeitet werden, geschieht dies auf Grundlage
              der Standardvertragsklauseln der EU-Kommission.
            </p>
            <p className="text-xs text-zinc-hint">
              [Vor Livegang prüfen: aktuelle Firmierung und Anschrift von
              Web3Forms sowie den abgeschlossenen AVV hier konkret benennen.]
            </p>
          </Abschnitt>

          <Abschnitt nr={5} titel="Förderrechner">
            <p>
              Die Berechnung läuft vollständig in Ihrem Browser. Solange Sie nur
              rechnen, werden keine Daten übertragen und nichts gespeichert. Der
              Rechner setzt dafür keine Cookies.
            </p>
            <p>
              Erst wenn Sie am Ende aktiv eine Anfrage absenden, werden Ihre
              Eingaben (Wohneinheiten, Nutzungsart, gewählte Maßnahmen mit Kosten,
              Boni sowie das Berechnungsergebnis) zusammen mit Ihren Kontaktdaten
              übermittelt. Das ist notwendig, damit ich Ihre Anfrage inhaltlich
              beantworten kann. Es gilt dann Ziffer 4.
            </p>
            <p>
              Angaben zum Haushaltseinkommen dienen ausschließlich der Berechnung
              des Einkommens-Bonus. Sie sind freiwillig, werden nur als
              Größenordnung übermittelt und nicht mit anderen Daten
              zusammengeführt.
            </p>
          </Abschnitt>

          <Abschnitt nr={6} titel="Keine automatisierte Entscheidungsfindung">
            <p>
              Ihre Anfragen werden von mir persönlich gelesen und beantwortet. Es
              findet keine automatisierte Entscheidungsfindung einschließlich
              Profiling im Sinne des Art. 22 DSGVO statt.
            </p>
            <p>
              Ich setze auch keine KI-Systeme zur Auswertung oder Bearbeitung Ihrer
              Anfragen ein. Ihre Angaben werden nicht an Anbieter solcher Systeme
              übermittelt und nicht zum Training von Modellen verwendet.
            </p>
          </Abschnitt>

          <Abschnitt nr={7} titel="Cookies und Einwilligung">
            <p>
              Technisch notwendige Speicherung setze ich ein, damit die Website
              funktioniert und Ihre Cookie-Entscheidung erhalten bleibt. Diese
              Entscheidung wird lokal in Ihrem Browser abgelegt (Local Storage,
              Schlüssel <code className="text-zinc-secondary">ibt-consent</code>)
              und nicht an mich übertragen. Rechtsgrundlage ist § 25 Abs. 2 TDDDG
              in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO; eine Einwilligung ist
              dafür nicht erforderlich.
            </p>
            <p>
              Die auf dieser Website verwendeten Schriftarten werden lokal von
              meinem Server ausgeliefert. Es besteht dadurch keine Verbindung zu
              Servern von Google Fonts.
            </p>
          </Abschnitt>

          <Abschnitt nr={8} titel="Reichweitenmessung mit Google Tag">
            <p>
              Zur Reichweitenmessung setze ich Google Tag ein (Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland). Damit werte
              ich aus, wie diese Website genutzt wird, um sie zu verbessern. Dabei
              können Cookies gesetzt und Daten, einschließlich Ihrer gekürzten
              IP-Adresse, an Google übertragen und gegebenenfalls in die USA
              weitergeleitet werden. Google LLC ist unter dem EU-US Data Privacy
              Framework zertifiziert.
            </p>
            <p>
              Diese Dienste werden{" "}
              <strong className="text-zinc-secondary">
                erst nach Ihrer ausdrücklichen Einwilligung
              </strong>{" "}
              geladen. Lehnen Sie ab oder haben Sie noch nicht entschieden, wird
              kein Google-Skript ausgeführt. Rechtsgrundlage ist Ihre Einwilligung
              nach § 25 Abs. 1 TDDDG und Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p>
              Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
              widerrufen, über den Link „Cookie-Einstellungen" am Ende jeder
              Seite oder direkt hier:
            </p>
            <div className="pt-1">
              <CookieEinstellungen />
            </div>
          </Abschnitt>

          <Abschnitt nr={9} titel="WhatsApp">
            <p>
              Auf dieser Website finden Sie Links zu WhatsApp. Es handelt sich um
              einfache Verlinkungen. Solange Sie sie nicht anklicken, werden keine
              Daten an WhatsApp übertragen. Klicken Sie den Link an, öffnet sich
              WhatsApp und es gelten die Datenschutzbestimmungen der WhatsApp
              Ireland Limited. Wenn Sie das vermeiden möchten, erreichen Sie mich
              genauso gut per E-Mail oder Telefon.
            </p>
          </Abschnitt>

          <Abschnitt nr={10} titel="Speicherdauer">
            <p>
              Ich speichere personenbezogene Daten nur so lange, wie es für den
              jeweiligen Zweck erforderlich ist:
            </p>
            <ul className="list-disc pl-5 space-y-1 pt-1">
              <li>
                Server-Logfiles: spätestens nach 7 Tagen
              </li>
              <li>
                Anfragen ohne anschließenden Auftrag: gelöscht, sobald absehbar
                ist, dass keine weitere Kommunikation folgt, spätestens nach
                6 Monaten
              </li>
              <li>
                Anfragen mit anschließendem Auftrag: nach Abschluss des Projekts
                gemäß den handels- und steuerrechtlichen Aufbewahrungsfristen von
                6 beziehungsweise 10 Jahren (§ 257 HGB, § 147 AO)
              </li>
              <li>
                Ihre Cookie-Entscheidung: bis Sie sie widerrufen oder den lokalen
                Speicher Ihres Browsers leeren
              </li>
            </ul>
          </Abschnitt>

          <Abschnitt nr={11} titel="Ihre Rechte">
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="space-y-1 pt-1">
              {[
                "Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)",
                "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                "Löschung Ihrer Daten (Art. 17 DSGVO)",
                "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Datenübertragbarkeit (Art. 20 DSGVO)",
                "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
              ].map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-mid shrink-0 mt-1.5" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="pt-2">
              <strong className="text-zinc-secondary">
                Widerspruchsrecht nach Art. 21 DSGVO:
              </strong>{" "}
              Soweit ich Daten auf Grundlage berechtigter Interessen verarbeite,
              können Sie der Verarbeitung aus Gründen widersprechen, die sich aus
              Ihrer besonderen Situation ergeben. Ich verarbeite die Daten dann
              nicht mehr, es sei denn, ich kann zwingende schutzwürdige Gründe
              nachweisen.
            </p>
            <p className="pt-1">
              Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an{" "}
              <a href="mailto:info@ib-tonn.de" className={A}>info@ib-tonn.de</a>.
            </p>
            <p className="pt-1">
              Unabhängig davon haben Sie das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist:
            </p>
            <p className="pt-1">
              Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen<br />
              Kavalleriestr. 2–4, 40213 Düsseldorf<br />
              <a
                href="https://www.ldi.nrw.de"
                target="_blank"
                rel="noopener noreferrer"
                className={A}
              >
                www.ldi.nrw.de
              </a>
            </p>
          </Abschnitt>

          <Abschnitt nr={12} titel="Änderungen dieser Erklärung">
            <p>
              Ich passe diese Datenschutzerklärung an, sobald sich die
              Datenverarbeitung auf dieser Website ändert, etwa weil ein Dienst
              hinzukommt oder wegfällt, oder wenn die Rechtslage es erfordert. Für
              Ihren erneuten Besuch gilt jeweils die hier veröffentlichte Fassung.
              Das Datum oben zeigt Ihnen den aktuellen Stand.
            </p>
            <p className="pt-1">
              Das <Link href="/impressum" className={A}>Impressum</Link> enthält
              die Angaben zum Anbieter dieser Website.
            </p>
          </Abschnitt>
        </div>
      </div>
    </section>
  );
}
