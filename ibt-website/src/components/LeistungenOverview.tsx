import LeistungCard from "./LeistungCard";

const energieberatung = [
  {
    icon: "📋",
    title: "iSFP Sanierungsfahrplan",
    description: "Individueller Sanierungsfahrplan nach BEG: maßgeschneiderte Maßnahmen, 5 % Extra-Förderbonus auf alle Folgemaßnahmen.",
    href: "/energieberatung/isfp",
    price: "ab 650 € netto (EFH)",
  },
  {
    icon: "💶",
    title: "Förderberatung BEG",
    description: "Antragsstellung bei BAFA und KfW, Förderoptimierung, Baubegleitung — bis 70 % Zuschuss auf Ihre Investition.",
    href: "/energieberatung/foerderberatung",
    price: "auf Anfrage",
  },
  {
    icon: "📄",
    title: "Energieausweis",
    description: "Verbrauchs- und Bedarfsausweis für Wohn- und Nichtwohngebäude. Pflicht bei Verkauf, Vermietung und Neubau.",
    href: "/energieberatung/energieausweis",
    price: "ab 95 € (Verbrauch)",
  },
  {
    icon: "🏗️",
    title: "Fachplanung & Baubegleitung",
    description: "Energetische Fachplanung und Baubegleitung (iSFP/BEG). Pflicht für viele Fördermaßnahmen — ich übernehme das vollständig.",
    href: "/energieberatung/baubegleitung",
    price: "ab 1.000 € (EFH)",
  },
  {
    icon: "🏠",
    title: "Effizienzhaus-Bilanzierung",
    description: "Nachweis Effizienzhaus 40/55/70/85 nach GEG für KfW-Förderung und Neubau. DIN V 18599 / DIN V 4108-6.",
    href: "/energieberatung/effizienzhaus",
    price: "auf Anfrage",
  },
];

const ingenieurleistungen = [
  {
    icon: "🌡️",
    title: "Heizlastberechnung",
    description: "Normheizlast nach DIN EN 12831 für Heizungsauslegung, Wärmepumpenplanung und Hydraulischen Abgleich.",
    href: "/ingenieurleistungen/heizlast",
    price: "ab 250 € (EFH)",
  },
  {
    icon: "📐",
    title: "Bauteilberechnung",
    description: "U-Wert-Berechnung von Wand, Dach, Boden und Fenster nach DIN EN 6946. Grundlage für Förderanträge und Nachweise.",
    href: "/ingenieurleistungen/bauteil",
    price: "ab 80 € / Bauteil",
  },
  {
    icon: "💧",
    title: "Taupunktnachweis",
    description: "Feuchteschutznachweis nach Glaser-Verfahren (DIN 4108-3). Vorbeugung von Schimmel und Kondensatschäden.",
    href: "/ingenieurleistungen/taupunkt",
    price: "ab 120 € / Bauteil",
  },
  {
    icon: "💨",
    title: "Lüftungskonzept",
    description: "Lüftungskonzept nach DIN 1946-6 für Einfamilien- und Mehrfamilienhäuser. Pflicht bei luftdichter Gebäudehülle.",
    href: "/ingenieurleistungen/lueftung",
    price: "ab 180 € (EFH)",
  },
  {
    icon: "🔍",
    title: "Wärmebrückenberechnung",
    description: "Wärmebrücken-Nachweis (Ψ-Werte) nach DIN EN ISO 10211 für detaillierte Gebäudebilanzierung.",
    href: "/ingenieurleistungen/waermebruecken",
    price: "auf Anfrage",
  },
];

export default function LeistungenOverview() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Leistungen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary mb-4">
            Zwei Säulen. Ein Ansprechpartner.
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-muted">
            Energieberater und Ingenieur in einer Person — die Schnittstelle zwischen
            Förderung, Bauphysik und ausführendem Handwerk.
          </p>
        </div>

        {/* Two column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Energieberatung column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-teal-dark/30" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-dark/10 border border-teal-dark/20">
                <span className="w-2 h-2 rounded-full bg-teal-light" />
                <span className="text-xs font-semibold text-teal-light tracking-wider uppercase">
                  Energieberatung
                </span>
              </div>
              <div className="h-px flex-1 bg-teal-dark/30" />
            </div>
            <div className="space-y-3">
              {energieberatung.map((item) => (
                <LeistungCard key={item.href} {...item} variant="teal" />
              ))}
            </div>
          </div>

          {/* Ingenieurleistungen column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-amber/20" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber/10 border border-amber/20">
                <span className="w-2 h-2 rounded-full bg-amber" />
                <span className="text-xs font-semibold text-amber tracking-wider uppercase">
                  Ingenieurleistungen
                </span>
              </div>
              <div className="h-px flex-1 bg-amber/20" />
            </div>
            <div className="space-y-3">
              {ingenieurleistungen.map((item) => (
                <LeistungCard key={item.href} {...item} variant="amber" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
