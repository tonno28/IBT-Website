import type { Metadata } from "next";
import Link from "next/link";
import Foerderrechner from "@/components/Foerderrechner";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { BAFA, BAUBEGLEITUNG, HEIZUNG, STAND, fmtEuro } from "@/lib/foerderung";

export const metadata: Metadata = {
  title: "BEG-Förderrechner 2026 — Förderung nach der Reform vom 21.07.2026 berechnen",
  description:
    "Aktueller BEG-Förderrechner nach den Förderrichtlinien vom 17.07.2026: Heizungstausch, Dämmung, Fenster, Lüftung und Baubegleitung. Mit dreistufigem Einkommensbonus, Familienzuschlag und neuer iSFP-Systematik. Unverbindlich, ohne Registrierung.",
};

const AENDERUNGEN = [
  {
    titel: "Klimageschwindigkeitsbonus auf 16 %",
    text: "Abgesenkt von 20 auf 16 Prozentpunkte. Ab 01.02.2027 sinkt er halbjährlich um weitere 4 Punkte bis auf null.",
  },
  {
    titel: "Einkommensbonus jetzt dreistufig",
    text: "40 % bis 30.000 €, 30 % bis 40.000 €, 10 % bis 50.000 € zu versteuerndem Haushaltseinkommen — statt pauschal 30 %.",
  },
  {
    titel: "Neuer Familienzuschlag",
    text: "Mit mindestens einem minderjährigen Kind im Haushalt wird das maßgebliche Einkommen einmalig um 10.000 € reduziert.",
  },
  {
    titel: "Effizienzbonus entfällt",
    text: "Die 5 % für Wärmepumpen mit Erdreich, Wasser oder natürlichem Kältemittel gibt es nicht mehr. Ebenso entfällt der Emissionsminderungszuschlag für Biomasse.",
  },
  {
    titel: "iSFP-Bonus nur noch oberhalb der Höchstgrenze",
    text: "Die 5 Prozentpunkte gelten ausschließlich für den Ausgabenanteil über 30.000 € (1. WE). Dafür verdoppelt der iSFP weiterhin die förderfähigen Kosten.",
  },
  {
    titel: "Förderfähige Kosten Heizung gesenkt",
    text: "28.000 € statt 30.000 € für die erste Wohneinheit — und ab 01.02.2027 halbjährlich 750 € weniger.",
  },
];

const KURZUEBERSICHT = [
  { label: "Heizung — Grundförderung", wert: `${HEIZUNG.grundfoerderung} %` },
  { label: "Klimageschwindigkeitsbonus", wert: `+ ${HEIZUNG.klimaBonus} %` },
  { label: "Einkommensbonus", wert: "+ 10 / 30 / 40 %" },
  { label: "Deckel Heizung", wert: `${HEIZUNG.deckel} %` },
  { label: "… mit 40 % Einkommensbonus", wert: `${HEIZUNG.deckelEinkommen} %` },
  { label: "Max. Kosten Heizung (1. WE)", wert: fmtEuro(HEIZUNG.capErsteWE) },
  { label: "Hülle & Technik — Basis", wert: `${BAFA.grundfoerderung} %` },
  { label: "iSFP-Bonus (über der Grenze)", wert: `+ ${BAFA.isfpBonus} %` },
  { label: "Max. Kosten Hülle (1. WE)", wert: `${fmtEuro(BAFA.capErsteWE)} · mit iSFP ${fmtEuro(BAFA.capErsteWE * 2)}` },
  { label: "Fachplanung & Baubegleitung", wert: `${BAUBEGLEITUNG.satz} %` },
];

const FAQ = [
  {
    q: "Was hat sich zum 21. Juli 2026 konkret geändert?",
    a: "Der Haushaltsausschuss hat die BEG-Reform am 08.07.2026 beschlossen, die Richtlinien wurden am 17.07.2026 veröffentlicht und gelten seit dem 21.07.2026. Die Grundstruktur bleibt: KfW für die Heizung, BAFA für Hülle, Anlagentechnik und Heizungsoptimierung. Geändert haben sich vor allem die Boni — der Klimageschwindigkeitsbonus sinkt auf 16 %, der Einkommensbonus wird dreistufig mit bis zu 40 %, der Effizienzbonus entfällt, und der iSFP-Bonus greift erst oberhalb der Basis-Höchstgrenze.",
  },
  {
    q: "Gelten die neuen Regeln auch für meinen laufenden Antrag?",
    a: "Nein. Anträge, die vor der Umstellung eingereicht wurden, werden nach den alten Bedingungen geprüft, und bereits erteilte Zusagen bleiben unberührt. Für neue Anträge nach den neuen Konditionen ist eine neue technische Projektbeschreibung (TPB) erforderlich — ältere TPB können nicht weiterverwendet werden.",
  },
  {
    q: "Kann ich mehrere Maßnahmen kombinieren?",
    a: "Ja, und genau dafür ist dieser Rechner gebaut. Wichtig ist die Höchstgrenze: Für alle BAFA-Einzelmaßnahmen zusammen gilt eine gemeinsame Obergrenze pro Gebäude und Kalenderjahr. Bei größeren Paketen kann es sich lohnen, die Maßnahmen über zwei Kalenderjahre zu verteilen — das rechne ich Ihnen im Einzelfall durch.",
  },
  {
    q: "Lohnt sich der individuelle Sanierungsfahrplan (iSFP) noch?",
    a: "Bei kleinen Einzelmaßnahmen unter 30.000 € bringt der Bonus seit der Reform nichts mehr. Bei einem größeren Sanierungspaket schon: Der iSFP verdoppelt die förderfähigen Kosten und hebt den Satz auf dem Anteil darüber auf 20 %. Die Energieberatung selbst wird weiterhin mit 50 % gefördert, maximal 650 € beim Ein- und Zweifamilienhaus.",
  },
  {
    q: "Muss ich vor der Beauftragung des Handwerkers einen Antrag stellen?",
    a: "Ja. Der Antrag muss vor der Auftragserteilung gestellt sein — ein zu früh unterschriebener Handwerkervertrag ist der häufigste Ablehnungsgrund. Eine Ausnahme gilt nur beim Heizungsnotfall, wenn die Anlage nicht mehr funktionsfähig ist.",
  },
  {
    q: "Zuschuss oder Steuerbonus nach § 35c EStG?",
    a: "Für dieselbe Maßnahme geht nur eines von beiden. Der Steuerbonus bringt 20 % über drei Jahre (7/7/6), maximal 40.000 € je Objekt, setzt aber selbst genutztes Wohneigentum und eine ausreichend hohe Steuerlast voraus. Eine Aufteilung nach Maßnahmen — Wärmepumpe über die KfW, Dämmung über die Steuer — ist zulässig und oft die bessere Rechnung.",
  },
];

export default function FoerderrechnerPage() {
  return (
    <>
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="text-center max-w-3xl mx-auto">
            <p className="section-label">BEG-Reform 2026</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary mb-4">
              Förderrechner
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-5">
              Rechnen Sie Ihre Bundesförderung nach dem aktuellen Stand durch — Heizungstausch,
              Dämmung, Fenster, Lüftung und Baubegleitung, einzeln oder als Paket. Ohne
              Registrierung, ohne persönliche Daten.
            </p>
            <span className="badge-teal">{STAND.lang}</span>
          </div>
        </div>
      </section>

      {/* Was sich geändert hat */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-bg-primary">
        <div className="container-max">
          <Reveal>
            <div className="rounded-2xl border border-amber/25 bg-bg-card p-6 sm:p-8">
              <h2 className="text-xl font-bold text-zinc-primary mb-1">
                Das hat sich zum 21.07.2026 geändert
              </h2>
              <p className="text-sm text-zinc-muted mb-6">
                Rechner, die noch mit 20 % Klimabonus, 5 % Effizienzbonus oder pauschalem
                iSFP-Bonus rechnen, liegen seit der Reform zu hoch. Hier ist der aktuelle Stand
                eingearbeitet.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
                {AENDERUNGEN.map((a) => (
                  <div key={a.titel}>
                    <h3 className="text-sm font-semibold text-zinc-primary mb-1">{a.titel}</h3>
                    <p className="text-xs text-zinc-muted leading-relaxed">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rechner */}
      <section className="section-padding bg-bg-primary pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-bg-card border border-zinc-border rounded-2xl p-6 sm:p-8">
                <Foerderrechner />
              </div>
            </div>

            <div className="space-y-5">
              <div className="card-base p-5">
                <h3 className="font-semibold text-zinc-primary mb-3">Kurzübersicht</h3>
                <div className="space-y-2.5">
                  {KURZUEBERSICHT.map((row) => (
                    <div key={row.label} className="flex justify-between gap-3 text-sm">
                      <span className="text-zinc-muted">{row.label}</span>
                      <span className="font-mono text-amber font-semibold text-right shrink-0">
                        {row.wert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-base p-5">
                <h3 className="font-semibold text-zinc-primary mb-3">
                  Effizienzhaus statt Einzelmaßnahmen?
                </h3>
                <p className="text-sm text-zinc-muted leading-relaxed mb-3">
                  Wer das ganze Haus auf einmal saniert, fährt meist über den KfW-Kredit für
                  Wohngebäude besser: einheitlich bis 150.000 € je Wohneinheit, EE-Klasse
                  inzwischen Pflicht, dazu Tilgungszuschuss und Boni für besonders unsanierte
                  Gebäude und serielle Sanierung.
                </p>
                <p className="text-sm text-zinc-muted leading-relaxed">
                  Diese Variante hängt stark am Einzelfall — das rechnen wir gemeinsam durch,
                  bevor Sie sich festlegen.
                </p>
              </div>

              <div className="card-base p-5">
                <h3 className="font-semibold text-zinc-primary mb-2">Nächster Schritt</h3>
                <p className="text-sm text-zinc-muted mb-4 leading-relaxed">
                  Als dena-gelisteter Energieeffizienz-Experte stelle ich alle Anträge für Sie —
                  vollständig, fristgerecht und vor der Auftragsvergabe.
                </p>
                <Link href="/kontakt" className="btn-primary w-full justify-center text-sm">
                  Kostenlose Erstberatung
                </Link>
              </div>

              <div className="card-base p-5">
                <h3 className="font-semibold text-zinc-primary mb-2">Wichtig zum Zeitpunkt</h3>
                <p className="text-sm text-zinc-muted leading-relaxed">
                  Der Klimageschwindigkeitsbonus und die förderfähigen Höchstkosten sinken ab
                  dem 01.02.2027 halbjährlich. Maßgeblich ist der Zeitpunkt der Förderzusage —
                  wer 2026 beantragt, sichert sich die höheren Sätze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-primary text-center mb-10">
            Häufige Fragen zur BEG-Förderung
          </h2>
          <div className="space-y-6">
            {FAQ.map((f) => (
              <div key={f.q} className="border-b border-zinc-border pb-6 last:border-0">
                <h3 className="font-semibold text-zinc-primary mb-2">{f.q}</h3>
                <p className="text-sm text-zinc-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Förderung nicht liegen lassen"
        description="Ich beantrage Ihre Förderung vollständig — BAFA und KfW. Als dena-gelisteter Energieeffizienz-Experte übernehme ich alle Schritte bis zum Verwendungsnachweis."
        primaryLabel="Beratung anfragen"
      />
    </>
  );
}
