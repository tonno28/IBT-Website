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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-zinc-muted mb-6">
              <Link href="/" className="hover:text-zinc-secondary">Startseite</Link>
              <span>/</span>
              <Link href="/ingenieurleistungen" className="hover:text-zinc-secondary">Ingenieurleistungen</Link>
              <span>/</span>
              <span className="text-zinc-secondary">Heizlast</span>
            </nav>
            <p className="section-label text-amber">Ingenieurleistungen</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
              Heizlastberechnung<br />
              <span className="text-amber">DIN EN 12831</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-8">
              Normkonforme Heizlastberechnung als Basis für die richtige Dimensionierung von
              Wärmepumpen, Flächenheizungen, Heizkörpern und den Hydraulischen Abgleich.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-primary">Heizlast anfragen</Link>
              <span className="self-center text-xs text-zinc-hint font-mono">ab 250 € für EFH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Warum */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-4xl">
          <p className="section-label text-center text-amber">Wofür wird sie benötigt</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-10">
            Anwendungsfälle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🌊", title: "Wärmepumpen-Auslegung", desc: "Wärmepumpen müssen exakt auf die Gebäudeheizlast dimensioniert werden — zu groß taktet zu oft, zu klein deckt den Bedarf nicht." },
              { icon: "💧", title: "Hydraulischer Abgleich", desc: "Pflicht bei Heizungsförderung und KfW-Kredit. Ohne Heizlast keine korrekte Auslegung der Heizkörper-Ventileinstellungen." },
              { icon: "♨️", title: "Fußbodenheizung", desc: "Vorlauftemperatur-Auslegung und Heizkreisberechnung für Flächenheizungen erfordern die raumweise Heizlast." },
              { icon: "📋", title: "GEG / BEG Nachweise", desc: "Energetische Nachweise für Sanierungsförderung und Effizienzhaus-Bilanzierung basieren auf der normierten Heizlast." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 card-base p-5">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-zinc-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-zinc-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistung & Preis */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center text-amber">Leistung & Preis</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-8">Was Sie erhalten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { value: "ab 250 €", label: "EFH (1 WE)", sub: "netto, zzgl. MwSt." },
              { value: "auf Anfrage", label: "MFH / Gewerbe", sub: "nach Aufwand" },
            ].map((s) => (
              <div key={s.label} className="card-base p-5 text-center">
                <div className="text-xl font-bold font-mono text-amber mb-1">{s.value}</div>
                <div className="text-sm text-zinc-primary">{s.label}</div>
                <div className="text-xs text-zinc-hint">{s.sub}</div>
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
              <div key={item} className="flex items-center gap-3 text-sm text-zinc-muted">
                <svg className="w-4 h-4 text-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
