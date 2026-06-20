import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Über mich — Jonas Tonn, Energieberater & Ingenieur",
  description:
    "Jonas Tonn — Dipl.-Ing., Teamleiter bei Siemens AG, nebenberuflich Energieberater und Inhaber IBT Ingenieurbüro Tonn. §88 GEG qualifiziert, dena-gelistet, BAFA/KfW-akkreditiert.",
};

export default function UeberMichPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-void relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-electric/5 blur-[100px] pointer-events-none" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Über mich</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-ink-bright leading-tight mb-4">
              Jonas Tonn
            </h1>
            <p className="text-xl text-ink-muted mb-2">
              Ingenieur & Energieberater
            </p>
            <p className="text-ink-ghost mb-8">IBT Ingenieurbüro Tonn · Rheinbach</p>
            <div className="flex flex-wrap gap-2">
              {["§88 GEG qualifiziert", "dena Energieeffizienz-Experte", "BAFA/KfW akkreditiert", "BEG-Fachplaner"].map((b) => (
                <span key={b} className="badge-electric">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vita */}
      <section className="section-pad bg-surface border-y border-line-dim">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-eyebrow">Wer ich bin</p>
              <h2 className="text-2xl font-bold text-ink-bright mb-6">Ingenieur aus Leidenschaft</h2>
              <div className="space-y-4 text-ink-muted leading-relaxed text-sm">
                <p>
                  Ich bin Diplom-Ingenieur und arbeite hauptberuflich als Teamleiter bei der
                  Siemens AG in Köln. Nebenberuflich bin ich seit Jahren als unabhängiger
                  Energieberater tätig und betreibe das IBT Ingenieurbüro Tonn.
                </p>
                <p>
                  Was das bedeutet: Ich habe keine Abhängigkeiten von Heizungsherstellern,
                  Dämmstofffirmen oder Handwerksbetrieben. Keine Provisionen, keine
                  Verkaufsziele. Nur technische Beratung, die Ihren Interessen dient.
                </p>
                <p>
                  Meine Stärke ist die Verbindung von Ingenieurwissen und Praxisnähe:
                  Ich verstehe, was Handwerker brauchen, was Förderbehörden fordern und
                  was Hauseigentümer wirklich wissen wollen. Diese Schnittstelle ist der
                  Kern von IBT.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-ink-body uppercase tracking-wider">Qualifikationen</h3>
              {[
                {
                  title: "§88 GEG — Qualifikationsnachweis",
                  desc: "Nachweis der fachlichen Eignung als Energieberater nach Gebäudeenergiegesetz (GEG).",
                  year: "laufend gültig",
                },
                {
                  title: "dena Energieeffizienz-Experte",
                  desc: "Gelistet in der offiziellen Expertenliste der Deutschen Energie-Agentur — Voraussetzung für BAFA/KfW-Anträge.",
                  year: "dena-Expertenliste",
                },
                {
                  title: "BEG-Fachplaner & Baubegleiter",
                  desc: "Akkreditiert für Fachplanung und Baubegleitung nach BEG (Einzelmaßnahmen).",
                  year: "BAFA/KfW",
                },
                {
                  title: "Diplom-Ingenieur",
                  desc: "Ingenieurstudium mit Schwerpunkt Energietechnik und Gebäudetechnik.",
                  year: "Hochschulabschluss",
                },
              ].map((q) => (
                <div key={q.title} className="card p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-ink-bright text-sm mb-1">{q.title}</div>
                      <div className="text-xs text-ink-muted">{q.desc}</div>
                    </div>
                    <span className="badge-electric shrink-0 text-xs">{q.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warum nebenberuflich */}
      <section className="section-pad bg-void">
        <div className="container-max max-w-3xl">
          <p className="section-eyebrow text-center">Transparenz</p>
          <h2 className="text-2xl font-bold text-ink-bright text-center mb-8">
            Warum nebenberuflich?
          </h2>
          <div className="space-y-4 text-ink-muted text-sm leading-relaxed">
            <p>
              IBT ist bewusst klein und fokussiert. Ich nehme nur so viele Aufträge an, wie
              ich mit voller Aufmerksamkeit bearbeiten kann. Kein Wachstum um des Wachstums
              willen — sondern Qualität für jeden einzelnen Auftrag.
            </p>
            <p>
              Durch meine Haupttätigkeit bei Siemens bleibe ich technisch auf dem aktuellen
              Stand, ohne auf jeden Umsatz angewiesen zu sein. Das ermöglicht mir,
              Aufträge abzulehnen, die nicht passen — und die anzunehmen, bei denen ich
              wirklich einen Mehrwert schaffe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {[
              { value: "100 %", label: "herstellerunabhängig" },
              { value: "0", label: "Provisionen" },
              { value: "1", label: "Ansprechpartner" },
            ].map((s) => (
              <div key={s.label} className="card p-5 text-center">
                <div className="text-2xl font-bold font-mono text-warm mb-1">{s.value}</div>
                <div className="text-xs text-ink-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Erstgespräch vereinbaren"
        description="Ich freue mich auf Ihre Anfrage. Beschreiben Sie kurz Ihr Vorhaben — ich melde mich innerhalb eines Werktags."
        primaryLabel="Jetzt anfragen"
      />
    </>
  );
}
