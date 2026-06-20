import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Heizlastberechnung DIN EN 12831 — Wärmepumpe, Heizkörper",
  description:
    "Normheizlast nach DIN EN 12831 für Wärmepumpenauslegung, Heizkörperbemessung und Hydraulischen Abgleich. Ab 250 € für EFH. Schnelle Lieferzeit. Region Köln / Bonn / Rheinbach.",
};

export default function HeizlastPage() {
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
              <span className="text-ink-body">Heizlast</span>
            </nav>
            <p className="section-eyebrow text-warm">Ingenieurleistungen</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-ink-bright leading-tight mb-6">
              Heizlastberechnung<br />
              <span className="text-warm">DIN EN 12831</span>
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Normkonforme Heizlastberechnung als Basis für die richtige Dimensionierung von
              Wärmepumpen, Flächenheizungen, Heizkörpern und den Hydraulischen Abgleich.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-electric">Heizlast anfragen</Link>
              <span className="self-center text-xs text-ink-ghost font-mono">ab 250 € für EFH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Warum */}
      <section className="section-pad bg-surface border-y border-line-dim">
        <div className="container-max max-w-4xl">
          <p className="section-eyebrow text-center text-warm">Wofür wird sie benötigt</p>
          <h2 className="text-2xl font-bold text-ink-bright text-center mb-10">
            Anwendungsfälle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🌊", title: "Wärmepumpen-Auslegung", desc: "Wärmepumpen müssen exakt auf die Gebäudeheizlast dimensioniert werden — zu groß taktet zu oft, zu klein deckt den Bedarf nicht." },
              { icon: "💧", title: "Hydraulischer Abgleich", desc: "Pflicht bei Heizungsförderung und KfW-Kredit. Ohne Heizlast keine korrekte Auslegung der Heizkörper-Ventileinstellungen." },
              { icon: "♨️", title: "Fußbodenheizung", desc: "Vorlauftemperatur-Auslegung und Heizkreisberechnung für Flächenheizungen erfordern die raumweise Heizlast." },
              { icon: "📋", title: "GEG / BEG Nachweise", desc: "Energetische Nachweise für Sanierungsförderung und Effizienzhaus-Bilanzierung basieren auf der normierten Heizlast." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 card p-5">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-ink-bright text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistung & Preis */}
      <section className="section-pad bg-void">
        <div className="container-max max-w-3xl">
          <p className="section-eyebrow text-center text-warm">Leistung & Preis</p>
          <h2 className="text-2xl font-bold text-ink-bright text-center mb-8">Was Sie erhalten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { value: "ab 250 €", label: "EFH (1 WE)", sub: "netto, zzgl. MwSt." },
              { value: "auf Anfrage", label: "MFH / Gewerbe", sub: "nach Aufwand" },
            ].map((s) => (
              <div key={s.label} className="card p-5 text-center">
                <div className="text-xl font-bold font-mono text-warm mb-1">{s.value}</div>
                <div className="text-sm text-ink-bright">{s.label}</div>
                <div className="text-xs text-ink-ghost">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[
              "Raumweise Heizlastberechnung nach DIN EN 12831",
              "Gebäude- und Systemheizlast",
              "Auslegungsgrundlage für Heizkörper und Flächenheizung",
              "Heizlastbericht als PDF (druckfertig)",
              "Geeignet für Vorlage bei Heizungsbauer, Planer, BAFA/KfW",
              "Lieferzeit 3–5 Werktage (Express auf Anfrage)",
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
        title="Heizlast beauftragen"
        description="Senden Sie mir Grundrisse und Gebäudedaten — ich erstelle die normgerechte Heizlastberechnung kurzfristig."
        primaryLabel="Heizlast anfragen"
        secondaryLabel="Alle Ingenieurleistungen"
        secondaryHref="/ingenieurleistungen"
      />
    </>
  );
}
