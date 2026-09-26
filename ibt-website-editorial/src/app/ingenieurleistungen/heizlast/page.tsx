import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Heizlastberechnung nach DIN EN 12831",
  description:
    "Normheizlast nach DIN EN 12831 für Wärmepumpenauslegung und Heizkörperbemessung, Datensatz für den hydraulischen Abgleich inklusive. Ab 499 € für EFH. Schnelle Lieferzeit. Region Köln / Aachen / Düren.",
};

export default function HeizlastPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <nav className="flex items-center gap-2 text-xs text-zinc-muted mb-6">
              <Link href="/" className="hover:text-zinc-secondary">Startseite</Link>
              <span>/</span>
              <Link href="/ingenieurleistungen" className="hover:text-zinc-secondary">Ingenieurleistungen</Link>
              <span>/</span>
              <span className="text-zinc-secondary">Heizlast</span>
            </nav>
            <p className="section-label text-ocker">Ingenieurleistungen</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
              Heizlastberechnung
              <span className="block font-medium text-zinc-secondary">DIN EN 12831</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed text-balance mb-8">
              Normkonforme Heizlastberechnung als Basis für die richtige Dimensionierung von
              Wärmepumpen, Flächenheizungen und Heizkörpern. Der Datensatz für den
              hydraulischen Abgleich ist inklusive.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt?anliegen=heizlast" className="btn-primary">Heizlast anfragen</Link>
              <span className="self-center text-xs text-zinc-hint font-mono">ab 499 € für EFH</span>
            </div>
          </div>
          <img
            src="/images/waermepumpe.webp"
            alt="Luft-Wasser-Wärmepumpe neben einem sanierten Wohnhaus"
            className="w-full aspect-[4/3] object-cover rounded-2xl border border-zinc-border shadow-lg shadow-black/5"
            width={1600}
            height={1200}
          />
          </div>
        </div>
      </section>

      {/* Warum */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-4xl">
          <p className="section-label text-center text-ocker">Wofür wird sie benötigt</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-10">
            Anwendungsfälle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "thermometer", title: "Wärmepumpen-Auslegung", desc: "Wärmepumpen müssen exakt auf die Gebäudeheizlast dimensioniert werden. Zu groß taktet zu oft, zu klein deckt den Bedarf nicht." },
              { icon: "droplet", title: "Hydraulischer Abgleich", desc: "Pflicht bei Heizungsförderung und KfW-Kredit. Den Datensatz nach Verfahren B liefere ich mit der Heizlast gleich mit, ohne Aufpreis." },
              { icon: "flame", title: "Fußbodenheizung", desc: "Vorlauftemperatur-Auslegung und Heizkreisberechnung für Flächenheizungen erfordern die raumweise Heizlast." },
              { icon: "document", title: "GEG / BEG Nachweise", desc: "Energetische Nachweise für Sanierungsförderung und Effizienzhaus-Bilanzierung basieren auf der normierten Heizlast." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 card-base p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ocker/10 text-ocker ring-1 ring-ocker/20"><Icon name={item.icon as IconName} className="h-5 w-5" /></span>
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
          <p className="section-label text-center text-ocker">Leistung & Preis</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-8">Was Sie erhalten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { value: "ab 499 €", label: "EFH (1 WE), inkl. hydraulischem Abgleich", sub: "Endpreis, keine USt. (§19 UStG)" },
              { value: "auf Anfrage", label: "MFH / Gewerbe", sub: "nach Aufwand" },
            ].map((s) => (
              <div key={s.label} className="card-base p-5 text-center">
                <div className="text-xl font-bold font-mono text-ocker mb-1">{s.value}</div>
                <div className="text-sm text-zinc-primary">{s.label}</div>
                <div className="text-xs text-zinc-hint">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[
              "Raumweise Heizlastberechnung nach DIN EN 12831",
              "Gebäude- und Systemheizlast",
              "Datensatz für den hydraulischen Abgleich nach Verfahren B inklusive: Ventilvoreinstellungen, Volumenströme, Pumpeneinstellung",
              "Auslegungsgrundlage für Heizkörper und Flächenheizung",
              "Heizlastbericht als PDF (druckfertig)",
              "Geeignet für Vorlage bei Heizungsbauer, Planer, BAFA/KfW",
              "Lieferzeit 3–5 Werktage (Express auf Anfrage)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-zinc-muted">
                <svg className="w-4 h-4 text-ocker shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        anliegen="heizlast"
        title="Heizlast beauftragen"
        description="Senden Sie mir Grundrisse und Gebäudedaten. Ich erstelle die normgerechte Heizlastberechnung kurzfristig."
        primaryLabel="Heizlast anfragen"
        secondaryLabel="Alle Ingenieurleistungen"
        secondaryHref="/ingenieurleistungen"
      />
    </>
  );
}
