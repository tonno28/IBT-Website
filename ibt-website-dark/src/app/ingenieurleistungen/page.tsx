import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Ingenieurleistungen — Heizlast, U-Wert, Taupunkt, Lüftung",
  description:
    "Technische Ingenieurleistungen für Handwerk und Planer: Heizlastberechnung DIN 12831, Bauteilberechnung U-Wert, Taupunktnachweis, Lüftungskonzept DIN 1946-6. Region Köln / Bonn / Rheinbach.",
};

const leistungen = [
  {
    href: "/ingenieurleistungen/heizlast",
    icon: "🌡️",
    title: "Heizlastberechnung",
    desc: "Normheizlast nach DIN EN 12831 — Grundlage für die korrekte Auslegung von Wärmepumpen, Heizkörpern und den Hydraulischen Abgleich.",
    norm: "DIN EN 12831",
    price: "ab 250 € (EFH)",
  },
  {
    href: "/ingenieurleistungen/bauteil",
    icon: "📐",
    title: "Bauteilberechnung",
    desc: "U-Wert-Berechnung für Wand, Dach, Boden und Fenster nach DIN EN ISO 6946 — als Nachweis für Förderanträge und Baugenehmigungen.",
    norm: "DIN EN ISO 6946",
    price: "ab 80 € / Bauteil",
  },
  {
    href: "/ingenieurleistungen/taupunkt",
    icon: "💧",
    title: "Taupunktnachweis",
    desc: "Feuchteschutznachweis nach Glaser-Verfahren (DIN 4108-3) — verhindert Kondensatschäden und Schimmel in Bauteilen.",
    norm: "DIN 4108-3",
    price: "ab 120 € / Bauteil",
  },
  {
    href: "/ingenieurleistungen/lueftung",
    icon: "💨",
    title: "Lüftungskonzept",
    desc: "Lüftungskonzept nach DIN 1946-6 — Pflicht bei luftdichter Gebäudehülle und vielen BEG-geförderten Sanierungen.",
    norm: "DIN 1946-6",
    price: "ab 180 € (EFH)",
  },
  {
    href: "/ingenieurleistungen/waermebruecken",
    icon: "🔍",
    title: "Wärmebrückenberechnung",
    desc: "Ψ-Werte (psi) für Wärmebrücken nach DIN EN ISO 10211 — für genaue Gebäudebilanzierung und Tauwassernachweis.",
    norm: "DIN EN ISO 10211",
    price: "auf Anfrage",
  },
];

export default function IngenieurleistungenPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-void relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-amber/5 blur-[100px] pointer-events-none" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-amber" />
              <p className="section-eyebrow mb-0 text-warm">Ingenieurleistungen</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-bright leading-tight mb-6">
              Technische Berechnungen<br />
              <span className="text-warm">normgerecht & schnell</span>
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Heizlast, U-Werte, Taupunkt, Lüftung — präzise Berechnungen nach DIN/EN-Normen
              für Handwerksbetriebe, Architekten und Planer. Kurzfristig lieferbar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-electric">Berechnung anfragen</Link>
              <p className="text-sm text-ink-muted self-center">
                Für Handwerk & Planung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="section-pad bg-void">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {leistungen.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="card p-6 flex flex-col gap-4 group border-amber/10 hover:border-amber/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-warm/10 text-warm flex items-center justify-center text-2xl">
                    {l.icon}
                  </div>
                  <span className="badge-warm text-xs">{l.norm}</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-ink-bright mb-2 group-hover:text-warm transition-colors">
                    {l.title}
                  </h2>
                  <p className="text-sm text-ink-muted leading-relaxed">{l.desc}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-line-dim flex items-center justify-between">
                  <span className="text-xs text-ink-ghost font-mono">{l.price}</span>
                  <span className="text-xs font-medium text-warm">Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="section-pad bg-surface border-y border-line-dim">
        <div className="container-max">
          <div className="text-center mb-10">
            <p className="section-eyebrow text-warm">Zielgruppe</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-bright">
              Für Handwerk & Planung
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🔧",
                title: "Heizungsbauer",
                desc: "Heizlast für Wärmepumpenauslegung, Hydraulischer Abgleich, Lüftungskonzepte als Subauftrag.",
              },
              {
                icon: "🏛️",
                title: "Architekten",
                desc: "U-Werte, Taupunkt und Wärmebrücken für Baugenehmigung, GEG-Nachweis und Förderanträge.",
              },
              {
                icon: "🏢",
                title: "Hausverwaltungen",
                desc: "Energieausweise, iSFP für MFH, Heizlast für Gebäudesanierung und Heizungstausch.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-ink-bright mb-2">{item.title}</h3>
                <p className="text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Berechnung beauftragen"
        description="Kurzfristige Lieferzeiten. Normgerechte Unterlagen. Direkter Kontakt — kein Callcenter."
        primaryLabel="Jetzt anfragen"
        secondaryLabel="Alle Leistungen"
        secondaryHref="/ingenieurleistungen"
      />
    </>
  );
}
