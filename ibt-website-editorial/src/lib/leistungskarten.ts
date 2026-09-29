import type { IconName } from "@/components/Icon";

/**
 * Die Leistungskarten beider Säulen an einer Stelle. Die Übersichtsseiten zeigen
 * sie als Karten, die strukturierten Daten (src/lib/schema.ts) geben sie an
 * Google und KI-Suchen weiter. Preise also nur hier ändern.
 */

export const energieberatungLeistungen: {
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
    desc: "Der individuelle Sanierungsfahrplan (iSFP) ist Ihr persönlicher Masterplan für die Gebäudesanierung. Er verdoppelt die förderfähigen Kosten Ihrer Einzelmaßnahmen.",
    highlight: "bis 60.000 € förderfähig",
    price: "ab 650 € (EFH)",
  },
  {
    href: "/energieberatung/foerderberatung",
    icon: "euro",
    title: "Förderberatung BEG",
    desc: "Vollständige Antragsbearbeitung bei BAFA und KfW: Technische Projektbeschreibung, Energieeffizienz-Experten-Bestätigung, Verwendungsnachweis.",
    highlight: "bis 80 % (Heizungstausch)",
    price: "auf Anfrage",
  },
  {
    href: "/energieberatung/energieausweis",
    icon: "document",
    title: "Energieausweis",
    desc: "Verbrauchs- und Bedarfsausweis für Wohngebäude. Pflichtdokument bei Verkauf, Vermietung und Neubau, schnell und rechtssicher.",
    highlight: "Pflicht bei Verkauf & Vermietung",
    price: "ab 95 € (Verbrauch) / ab 250 € (Bedarf EFH)",
  },
  {
    href: "/energieberatung/baubegleitung",
    icon: "crane",
    title: "Fachplanung & Baubegleitung",
    desc: "Energetische Fachplanung und Baubegleitung nach BEG. Pflicht für Einzelmaßnahmen mit Förderantrag. Ich übernehme Planung, Kontrolle und Dokumentation.",
    highlight: "50 % BEG-Förderung auf Baubegleitung",
    price: "ab 250 € (EFH)",
  },
  {
    href: "/energieberatung/effizienzhaus",
    icon: "house",
    title: "Effizienzhaus-Bilanzierung",
    desc: "Nachweis Effizienzhaus 40/55/70/85 nach GEG, Voraussetzung für KfW-Wohngebäudekredit und höhere Tilgungszuschüsse.",
    highlight: "KfW-Voraussetzung",
    price: "auf Anfrage",
  },
];

export const ingenieurLeistungen: {
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
    desc: "Normheizlast nach DIN EN 12831 für die Auslegung von Wärmepumpen und Heizkörpern. Datensatz für den hydraulischen Abgleich inklusive.",
    norm: "DIN EN 12831",
    price: "ab 499 € (EFH), inkl. hydraulischem Abgleich",
  },
  {
    href: "/ingenieurleistungen/bauteil",
    icon: "ruler",
    title: "Bauteilberechnung",
    desc: "U-Wert-Berechnung für Wand, Dach, Boden und Fenster nach DIN EN ISO 6946, als Nachweis für Förderanträge und Baugenehmigungen.",
    norm: "DIN EN ISO 6946",
    price: "ab 80 € / Bauteil",
  },
  {
    href: "/ingenieurleistungen/taupunkt",
    icon: "droplet",
    title: "Taupunktnachweis",
    desc: "Feuchteschutznachweis nach Glaser-Verfahren (DIN 4108-3), verhindert Kondensatschäden und Schimmel in Bauteilen.",
    norm: "DIN 4108-3",
    price: "ab 120 € / Bauteil",
  },
  {
    href: "/ingenieurleistungen/lueftung",
    icon: "wind",
    title: "Lüftungskonzept",
    desc: "Lüftungskonzept nach DIN 1946-6, Pflicht bei luftdichter Gebäudehülle und vielen BEG-geförderten Sanierungen.",
    norm: "DIN 1946-6",
    price: "ab 180 € (EFH)",
  },
  {
    href: "/ingenieurleistungen/waermebruecken",
    icon: "scan",
    title: "Wärmebrückenberechnung",
    desc: "Ψ-Werte (psi) für Wärmebrücken nach DIN EN ISO 10211, für genaue Gebäudebilanzierung und Tauwassernachweis.",
    norm: "DIN EN ISO 10211",
    price: "auf Anfrage",
  },
];
