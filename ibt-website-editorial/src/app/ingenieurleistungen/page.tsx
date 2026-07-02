import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Ingenieurleistungen — Heizlast, U-Wert, Taupunkt, Lüftung",
  description:
    "Technische Ingenieurleistungen für Handwerk und Planer: Heizlastberechnung DIN 12831, Bauteilberechnung U-Wert, Taupunktnachweis, Lüftungskonzept DIN 1946-6. Region Köln / Bonn / Rheinbach.",
};

const leistungen: {
  href: string;
  icon: IconName;
  title: string;
  desc: string;
  norm: string;
  price: string;
}[] = [
  {
    href: "/ingenieurleistungen/heizlast",
    icon: "thermometer",
    title: "Heizlastberechnung",
    desc: "Normheizlast nach DIN EN 12831 — Grundlage für die korrekte Auslegung von Wärmepumpen, Heizkörpern und den Hydraulischen Abgleich.",
    norm: "DIN EN 12831",
    price: "ab 250 € (EFH)",
  },
  {
    href: "/ingenieurleistungen/bauteil",
    icon: "ruler",
    title: "Bauteilberechnung",
    desc: "U-Wert-Berechnung für Wand, Dach, Boden und Fenster nach DIN EN ISO 6946 — als Nachweis für Förderanträge und Baugenehmigungen.",
    norm: "DIN EN ISO 6946",
    price: "ab 80 € / Bauteil",
  },
  {
    href: "/ingenieurleistungen/taupunkt",
    icon: "droplet",
    title: "Taupunktnachweis",
    desc: "Feuchteschutznachweis nach Glaser-Verfahren (DIN 4108-3) — verhindert Kondensatschäden und Schimmel in Bauteilen.",
    norm: "DIN 4108-3",
    price: "ab 120 € / Bauteil",
  },
  {
    href: "/ingenieurleistungen/lueftung",
    icon: "wind",
    title: "Lüftungskonzept",
    desc: "Lüftungskonzept nach DIN 1946-6 — Pflicht bei luftdichter Gebäudehülle und vielen BEG-geförderten Sanierungen.",
    norm: "DIN 1946-6",
    price: "ab 180 € (EFH)",
  },
  {
    href: "/ingenieurleistungen/waermebruecken",
    icon: "scan",
    title: "Wärmebrückenberechnung",
    desc: "Ψ-Werte (psi) für Wärmebrücken nach DIN EN ISO 10211 — für genaue Gebäudebilanzierung und Tauwassernachweis.",
    norm: "DIN EN ISO 10211",
    price: "auf Anfrage",
  },
];

export default function IngenieurleistungenPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-blueprint opacity-30 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-amber/8 blur-[100px] pointer-events-none animate-float-slow" />
        <div className="container-max relative">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-amber" />
              <p className="section-label mb-0 text-amber">Ingenieurleistungen</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-primary leading-tight mb-6">
              Technische Berechnungen<br />
              <span className="text-amber">normgerecht & schnell</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-8">
              Heizlast, U-Werte, Taupunkt, Lüftung — präzise Berechnungen nach DIN/EN-Normen
              für Handwerksbetriebe, Architekten und Planer. Kurzfristig lieferbar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-primary">Berechnung anfragen</Link>
              <p className="text-sm text-zinc-muted self-center">
                Für Handwerk & Planung
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leistungen */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {leistungen.map((l, i) => (
              <Reveal key={l.href} delay={i * 70}>
                <Link
                  href={l.href}
                  className="card-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 p-6 flex flex-col gap-4 group border-amber/10 hover:border-amber/30 h-full"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber/10 text-amber ring-1 ring-amber/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Icon name={l.icon} className="w-6 h-6" />
                    </div>
                    <span className="badge-amber text-xs">{l.norm}</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-zinc-primary mb-2 group-hover:text-amber transition-colors">
                      {l.title}
                    </h2>
                    <p className="text-sm text-zinc-muted leading-relaxed">{l.desc}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-zinc-border flex items-center justify-between">
                    <span className="text-xs text-zinc-hint stat-num">{l.price}</span>
                    <span className="text-xs font-medium text-amber">Details →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max">
          <Reveal className="text-center mb-10">
            <p className="section-label text-amber">Zielgruppe</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-primary">
              Für Handwerk & Planung
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {([
              {
                icon: "wrench",
                title: "Heizungsbauer",
                desc: "Heizlast für Wärmepumpenauslegung, Hydraulischer Abgleich, Lüftungskonzepte als Subauftrag.",
              },
              {
                icon: "institution",
                title: "Architekten",
                desc: "U-Werte, Taupunkt und Wärmebrücken für Baugenehmigung, GEG-Nachweis und Förderanträge.",
              },
              {
                icon: "building",
                title: "Hausverwaltungen",
                desc: "Energieausweise, iSFP für MFH, Heizlast für Gebäudesanierung und Heizungstausch.",
              },
            ] as { icon: IconName; title: string; desc: string }[]).map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 90} className="text-center p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10 text-amber ring-1 ring-amber/20">
                  <Icon name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-zinc-primary mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-muted">{item.desc}</p>
              </Reveal>
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
