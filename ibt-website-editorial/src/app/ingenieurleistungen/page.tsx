import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import { ingenieurLeistungen } from "@/lib/leistungskarten";
import Testimonials from "@/components/Testimonials";
import StatsBanner from "@/components/StatsBanner";

export const metadata: Metadata = {
  title: "Ingenieurleistungen in Köln, Aachen und Düren",
  description:
    "Technische Ingenieurleistungen für Handwerk und Planer: Heizlastberechnung DIN 12831, Bauteilberechnung U-Wert, Taupunktnachweis, Lüftungskonzept DIN 1946-6. Region Köln / Aachen / Düren.",
};

/**
 * Aus den Projektunterlagen ausgezählt (Stand 26.09.2026): 13 Objekte mit
 * 26 Heizlast-, Abgleichs- und Heizflächenberichten, Summe der
 * Norm-Heizlasten 113,9 kW. Objekte: Brunner 11,9 · Emons 10,6 · Fitzau 6,4 ·
 * Heinrichs 9,3 · Steffens 8,5 · Kneier 11,2 · Mürkens 7,9 · Kroll 14,0 ·
 * Kroll/Waagmühle 28 5,6 · Dolfen 5,5 · Wolf 12 7,0 · Wolf 12a 10,2 ·
 * Klassen 5,8 kW.
 * Grundlage ist jeweils der Wert "Norm-Heizlast" für die
 * Wärmeerzeugerauslegung, nicht der Orientierungswert aus dem
 * Verbrauchsverfahren.
 *
 * Bei jedem abgeschlossenen Projekt fortschreiben.
 */
const technikStats: [
  { value: string; label: string },
  { value: string; label: string },
  { value: string; label: string }
] = [
  { value: "13", label: "Realisierte Projekte" },
  { value: "113,9 kW", label: "Ermittelte Heizlast" },
  { value: "26", label: "Erstellte Berechnungen" },
];

export default function IngenieurleistungenPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-blueprint opacity-30 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-ocker/8 blur-[100px] pointer-events-none animate-float-slow" />
        <div className="container-max relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-ocker" />
              <p className="section-label mb-0 text-ocker">Ingenieurleistungen</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-primary leading-tight mb-6">
              Technische Berechnungen
              <span className="block font-medium text-zinc-secondary">normgerecht & schnell</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed text-balance mb-8">
              Heizlast, U-Werte, Taupunkt und Lüftung: präzise Berechnungen nach DIN/EN-Normen
              für Handwerksbetriebe, Architekten und Planer. Kurzfristig lieferbar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt?anliegen=ingenieurleistungen" className="btn-primary">Berechnung anfragen</Link>
              <p className="text-sm text-zinc-muted self-center">
                Für Handwerk & Planung
              </p>
            </div>
          </Reveal>
          <Reveal variant="right">
            <img
              src="/images/uwert-zeichnung.webp"
              alt="Technische Schnittzeichnung eines Wandaufbaus mit U-Wert-Berechnungen und Messwerkzeug"
              width={1600}
              height={1073}
              className="w-full rounded-2xl border border-zinc-border shadow-lg shadow-black/5"
            />
          </Reveal>
          </div>
        </div>
      </section>

      {/* Zahlen */}
      <StatsBanner
        stats={technikStats}
        note="Stand: September 2026 · alle Berechnungen nach DIN/TS 12831-1, jedes Projekt raumweise und mit hydraulischem Abgleich"
      />

      {/* Leistungen */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ingenieurLeistungen.map((l, i) => (
              <Reveal key={l.href} delay={i * 70}>
                <Link
                  href={l.href}
                  className="card-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 p-6 flex flex-col gap-4 group border-ocker/10 hover:border-ocker/30 h-full"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ocker/10 text-ocker ring-1 ring-ocker/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Icon name={l.icon} className="w-6 h-6" />
                    </div>
                    <span className="badge-ocker text-xs">{l.norm}</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-zinc-primary mb-2 group-hover:text-accent transition-colors">
                      {l.title}
                    </h2>
                    <p className="text-sm text-zinc-muted leading-relaxed">{l.desc}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-zinc-border flex items-center justify-between">
                    <span className="text-sm text-zinc-secondary stat-num">{l.price}</span>
                    <span className="text-xs font-medium text-accent">Details →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="text-xs text-zinc-hint mt-6">
            Alle Preise sind Endpreise, als Kleinunternehmer nach §19 UStG ohne
            Umsatzsteuer. Die Angebote richten sich an Handwerksbetriebe, Planungsbüros
            und Hausverwaltungen.
          </p>
        </div>
      </section>

      {/* Für wen */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max">
          <Reveal className="text-center mb-10">
            <p className="section-label text-ocker">Zielgruppe</p>
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ocker/10 text-ocker ring-1 ring-ocker/20">
                  <Icon name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-zinc-primary mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-muted">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kundenstimmen: vorerst ausgeblendet, kommen später zurück.
          Wieder einblenden = die nächste Zeile entkommentieren. */}
      {/* filter="all", solange es nur zwei Rezensionen gibt; ab zwei je Säule wieder filtern */}
      <Testimonials filter="all" title="Was Kunden sagen" />

      <CTABanner
        anliegen="ingenieurleistungen"
        title="Berechnung beauftragen"
        description="Kurzfristige Lieferzeiten. Normgerechte Unterlagen. Direkter Kontakt, kein Callcenter."
        primaryLabel="Jetzt anfragen"
        secondaryLabel="Heizlastberechnung ansehen"
        secondaryHref="/ingenieurleistungen/heizlast"
      />
    </>
  );
}
