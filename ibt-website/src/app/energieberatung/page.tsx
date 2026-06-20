import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Energieberatung — iSFP, Förderung, Energieausweis",
  description:
    "Professionelle Energieberatung für Wohngebäude: iSFP Sanierungsfahrplan, Förderberatung BEG (BAFA/KfW), Energieausweis, Baubegleitung und Effizienzhaus-Nachweis. Region Köln / Bonn / Rheinbach.",
};

const leistungen: {
  href: string;
  icon: IconName;
  title: string;
  desc: string;
  highlight: string;
  price: string;
}[] = [
  {
    href: "/energieberatung/isfp",
    icon: "roadmap",
    title: "iSFP Sanierungsfahrplan",
    desc: "Der individuelle Sanierungsfahrplan (iSFP) ist Ihr persönlicher Masterplan für die Gebäudesanierung — mit 5 % Extra-Bonus auf alle Folgemaßnahmen.",
    highlight: "5 % iSFP-Bonus",
    price: "ab 650 € netto (EFH)",
  },
  {
    href: "/energieberatung/foerderberatung",
    icon: "euro",
    title: "Förderberatung BEG",
    desc: "Vollständige Antragsbearbeitung bei BAFA und KfW: Technische Projektbeschreibung, Energieeffizienz-Experten-Bestätigung, Verwendungsnachweis.",
    highlight: "bis 70 % Förderung",
    price: "auf Anfrage",
  },
  {
    href: "/energieberatung/energieausweis",
    icon: "document",
    title: "Energieausweis",
    desc: "Verbrauchs- und Bedarfsausweis für Wohngebäude. Pflichtdokument bei Verkauf, Vermietung und Neubau — schnell und rechtssicher.",
    highlight: "ab 95 €",
    price: "ab 95 € (Verbrauch) / ab 250 € (Bedarf EFH)",
  },
  {
    href: "/energieberatung/baubegleitung",
    icon: "crane",
    title: "Fachplanung & Baubegleitung",
    desc: "Energetische Fachplanung und Baubegleitung nach BEG. Pflicht für Einzelmaßnahmen mit Förderantrag — ich übernehme Planung, Kontrolle und Dokumentation.",
    highlight: "50 % BEG-Förderung auf Baubegleitung",
    price: "ab 1.000 € (EFH)",
  },
  {
    href: "/energieberatung/effizienzhaus",
    icon: "house",
    title: "Effizienzhaus-Bilanzierung",
    desc: "Nachweis Effizienzhaus 40/55/70/85 nach GEG — Voraussetzung für KfW-Wohngebäudekredit und höhere Tilgungszuschüsse.",
    highlight: "KfW-Voraussetzung",
    price: "auf Anfrage",
  },
];

export default function EnergieberatungPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-blueprint opacity-30 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal-dark/10 blur-[100px] pointer-events-none animate-float-slow" />
        <div className="container-max relative">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-teal-mid" />
              <p className="section-label mb-0">Energieberatung</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-primary leading-tight mb-6">
              Energieberatung für{" "}
              <span className="text-gradient-teal">Wohngebäude</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-8">
              Von der Erstberatung bis zur ausgezahlten Förderung. Als dena-gelisteter
              Energieeffizienz-Experte und akkreditierter Energieberater (BAFA/KfW) begleite
              ich Sie durch den gesamten Prozess.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-primary">
                Jetzt anfragen
              </Link>
              <Link href="/foerderrechner" className="btn-secondary">
                Förderrechner starten
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leistungen.map((l, i) => (
              <Reveal key={l.href} delay={i * 70}>
                <Link
                  href={l.href}
                  className="card-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 p-6 flex flex-col gap-4 group h-full"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-dark/15 text-teal-light ring-1 ring-teal-dark/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Icon name={l.icon} className="w-6 h-6" />
                    </div>
                    <span className="badge-teal text-xs">{l.highlight}</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-zinc-primary mb-2 group-hover:text-teal-light transition-colors">
                      {l.title}
                    </h2>
                    <p className="text-sm text-zinc-muted leading-relaxed">{l.desc}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-zinc-border flex items-center justify-between">
                    <span className="text-xs text-zinc-hint stat-num">{l.price}</span>
                    <span className="text-xs font-medium text-teal-light">Details →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why IBT */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max">
          <Reveal className="text-center mb-10">
            <p className="section-label">Warum IBT</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-primary">
              Energieberatung mit technischer Tiefe
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {([
              {
                icon: "gear",
                title: "Ingenieur-Know-how",
                desc: "Ich berechne Heizlasten, U-Werte und Wärmebrücken selbst — kein Outsourcing, keine Verzögerungen.",
              },
              {
                icon: "target",
                title: "Förder-Optimierung",
                desc: "Ich kenne alle Boni der BEG und nutze sie konsequent: iSFP-Bonus, Klima-Geschwindigkeitsbonus, Effizienz-Bonus.",
              },
              {
                icon: "handshake",
                title: "Ein Ansprechpartner",
                desc: "Von der ersten Beratung bis zum Verwendungsnachweis: Sie haben immer denselben Ansprechpartner.",
              },
            ] as { icon: IconName; title: string; desc: string }[]).map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 90} className="text-center p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-dark/15 text-teal-light ring-1 ring-teal-dark/20">
                  <Icon name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-zinc-primary mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-muted">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
