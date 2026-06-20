import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Förderberatung BEG — BAFA & KfW Förderung Köln Bonn",
  description:
    "Professionelle Förderberatung für BEG Einzelmaßnahmen und Effizienzhaus. Antragsstellung bei BAFA und KfW, Förderoptimierung bis 70 %, vollständige Begleitung. Region Köln / Bonn / Rheinbach.",
};

export default function FoerderberatungPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-zinc-muted mb-6">
              <Link href="/" className="hover:text-zinc-secondary">Startseite</Link>
              <span>/</span>
              <Link href="/energieberatung" className="hover:text-zinc-secondary">Energieberatung</Link>
              <span>/</span>
              <span className="text-zinc-secondary">Förderberatung</span>
            </nav>
            <p className="section-label">Energieberatung</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
              Förderberatung<br />
              <span className="text-gradient-teal">BAFA & KfW</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-8">
              Bis zu 70 % Förderung auf Ihre Sanierungsmaßnahmen — wenn Sie alle Boni
              konsequent nutzen. Ich kenne das System und stelle alle Anträge vollständig für Sie.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-primary">Förderberatung anfragen</Link>
              <Link href="/foerderrechner" className="btn-secondary">Förderrechner →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEG Overview */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max">
          <p className="section-label text-center">BEG 2025</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-10">
            Welche Förderung ist möglich?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Heizungsförderung",
                icon: "🔥",
                basis: "30 %",
                max: "70 %",
                details: [
                  "Klima-Geschwindigkeitsbonus: +20 % (Altkessel-Austausch)",
                  "Effizienz-Bonus: +5 % (Erdwärme/Wasser-WP)",
                  "Einkommens-Bonus: +30 % (≤ 40.000 € Einkommen)",
                  "Max. förderfähig: 30.000 € (EFH) + 15.000 € je WE",
                ],
              },
              {
                title: "Gebäudehülle",
                icon: "🏠",
                basis: "15 %",
                max: "20 %",
                details: [
                  "iSFP-Bonus: +5 % (wenn im Sanierungsfahrplan)",
                  "Fenster, Dach, Fassade, Boden",
                  "Max. förderfähig: 30.000 € (ohne iSFP)",
                  "Mit iSFP: max. 60.000 € förderfähig",
                ],
              },
              {
                title: "Baubegleitung",
                icon: "🏗️",
                basis: "50 %",
                max: "50 %",
                details: [
                  "Max. 5.000 € (EFH) + 2.000 € je weitere WE",
                  "Pflicht für viele Fördermaßnahmen",
                  "Ich übernehme das vollständig",
                  "Fachplanung & Qualitätssicherung",
                ],
              },
              {
                title: "Anlagentechnik",
                icon: "⚡",
                basis: "15 %",
                max: "20 %",
                details: [
                  "Smart-Home/Gebäudeautomation",
                  "Heizungsoptimierung (Hydraulischer Abgleich)",
                  "Sommerlicher Wärmeschutz",
                  "iSFP-Bonus ebenfalls anwendbar",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="card-base p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-semibold text-zinc-primary">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-zinc-hint">bis zu</div>
                    <div className="text-xl font-bold font-mono text-teal-light">{item.max}</div>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-zinc-muted">
                      <svg className="w-4 h-4 text-teal-dark shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was ich übernehme */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center">Meine Leistung</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-10">
            Was ich für Sie übernehme
          </h2>
          <div className="space-y-4">
            {[
              { icon: "📝", title: "Technische Projektbeschreibung (TPB)", desc: "Pflichtdokument für alle BEG-Anträge — ich erstelle sie normgerecht und vollständig." },
              { icon: "✅", title: "Energieeffizienz-Experten-Bestätigung", desc: "Als dena-gelisteter EEE bestätige ich die technische Richtigkeit der Maßnahmen. Ohne EEE keine Förderung." },
              { icon: "🖥️", title: "Antragsstellung BAFA / KfW", desc: "Vollständige Online-Antragstellung in den Portalen von BAFA und KfW — Sie müssen sich um nichts kümmern." },
              { icon: "📋", title: "Verwendungsnachweis", desc: "Nach Abschluss der Maßnahme erstelle ich den Verwendungsnachweis — Voraussetzung für die Auszahlung." },
              { icon: "💡", title: "Förder-Optimierung", desc: "Ich prüfe, welche Boni für Sie zutreffen und kombiniere sie optimal — nicht alle Berater kennen alle Möglichkeiten." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 card-base p-5">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-zinc-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Förderung nicht liegen lassen"
        description="Ich prüfe kostenlos und unverbindlich, welche Förderung für Ihr Vorhaben realistisch ist. Rufen Sie an oder schreiben Sie mir."
        primaryLabel="Förderberatung anfragen"
      />
    </>
  );
}
