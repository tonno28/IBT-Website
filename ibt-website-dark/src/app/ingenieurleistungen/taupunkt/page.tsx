import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Taupunktnachweis — Feuchteschutz DIN 4108-3 Köln Bonn",
  description:
    "Taupunktnachweis nach Glaser-Verfahren (DIN 4108-3): Feuchteschutznachweis für Außenbauteile, verhindert Kondensatschäden und Schimmel. Ab 120 € pro Bauteil. Region Köln / Bonn / Rheinbach.",
};

export default function TaupunktPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-void relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6">
              <Link href="/" className="hover:text-ink-body">Startseite</Link>
              <span>/</span>
              <Link href="/ingenieurleistungen" className="hover:text-ink-body">Ingenieurleistungen</Link>
              <span>/</span>
              <span className="text-ink-body">Taupunkt</span>
            </nav>
            <p className="section-eyebrow text-warm">Ingenieurleistungen</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-ink-bright leading-tight mb-6">
              Taupunktnachweis<br />
              <span className="text-warm">Feuchteschutz DIN 4108-3</span>
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Der Taupunktnachweis zeigt, ob in einem Bauteil Kondensatfeuchtigkeit entsteht —
              und schützt so vor Schimmel, Bauteilschäden und teuren Sanierungen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-electric">Taupunkt anfragen</Link>
              <span className="self-center text-xs text-ink-ghost font-mono">ab 120 € / Bauteil</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface border-y border-line-dim">
        <div className="container-max max-w-3xl">
          <p className="section-eyebrow text-center text-warm">Hintergrund</p>
          <h2 className="text-2xl font-bold text-ink-bright text-center mb-8">Was ist der Taupunktnachweis?</h2>
          <div className="space-y-4 text-ink-muted text-sm leading-relaxed">
            <p>
              Das Glaser-Verfahren (DIN 4108-3) berechnet, ob in einer Bauteilschicht während der
              Winterperiode Tauwasser ausfällt — also ob Feuchtigkeit kondensiert. Dies kann bei
              falsch aufgebautem Wärmedämmverbundsystem (WDVS), Innendämmung oder undichter
              Dampfbremse passieren.
            </p>
            <p>
              Besonders kritisch: Bei nachträglicher Innendämmung, Auf-Sparren-Dämmung und
              bestimmten Wandaufbauten besteht erhöhtes Kondensationsrisiko.
              Der Nachweis schützt Bauherren und Handwerker gleichermaßen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "🧱", title: "WDVS / Innendämmung", desc: "Kritische Bauteile bei Sanierung" },
              { icon: "🏠", title: "Dach / Aufsparren", desc: "Feuchtigkeitsrisiko bei Umkehrdächern" },
              { icon: "🪟", title: "Fensterlaibung", desc: "Wärmebrücken und Taupunkt" },
            ].map((item) => (
              <div key={item.title} className="card p-4 text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-sm font-semibold text-ink-bright mb-0.5">{item.title}</div>
                <div className="text-xs text-ink-muted">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-void">
        <div className="container-max max-w-3xl">
          <p className="section-eyebrow text-center text-warm">Leistung</p>
          <h2 className="text-2xl font-bold text-ink-bright text-center mb-8">Was enthalten ist</h2>
          <div className="space-y-3">
            {[
              "Taupunktnachweis nach Glaser-Verfahren (DIN 4108-3)",
              "Berechnung des stationären Diffusionsvorgangs",
              "Nachweis: Tauwasserfreiheit oder tolerierbares Tauwasser",
              "Nachweis der Verdunstung in der Tauperiode",
              "Bericht als PDF mit Schichtenaufbau und Ergebnis",
              "Empfehlung bei kritischem Ergebnis (Dampfbremse etc.)",
              "Lieferzeit 3–5 Werktage",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-ink-muted">
                <svg className="w-4 h-4 text-warm shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Taupunktnachweis beauftragen"
        description="Senden Sie mir den Bauteilaufbau — ich liefere den normierten Feuchteschutznachweis nach DIN 4108-3."
        primaryLabel="Taupunkt anfragen"
        secondaryLabel="Alle Ingenieurleistungen"
        secondaryHref="/ingenieurleistungen"
      />
    </>
  );
}
