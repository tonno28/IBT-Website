/**
 * Leistungen und ihre Qualifizierungsfragen.
 *
 * Jede Leistungsseite verlinkt das Kontaktformular mit ihrem Slug
 * (/kontakt?anliegen=energieausweis). Das Formular wählt das Anliegen dann
 * vor und blendet genau die Rückfragen ein, die für diese Leistung zählen —
 * also die, die sonst im ersten Telefonat gestellt werden müssten.
 *
 * Leitlinie beim Erweitern: Pflicht bleiben nur Name, E-Mail und
 * Einwilligung. Alles hier ist freiwillig. Jede zusätzliche Frage kostet
 * Abschlüsse, also nur aufnehmen, was die Antwort wirklich verändert —
 * nicht, was nett zu wissen wäre.
 */

export interface Frage {
  id: string;
  label: string;
  /** "auswahl" rendert Chips, "text" ein Eingabefeld. */
  typ: "auswahl" | "text";
  optionen?: string[];
  platzhalter?: string;
}

export interface Leistung {
  slug: string;
  /** Erscheint im Auswahlfeld und im Betreff der Mail. */
  label: string;
  /** Fragen zusätzlich zu den allgemeinen. */
  fragen: Frage[];
}

/** Für jede Anfrage sinnvoll — unabhängig von der Leistung. */
export const ALLGEMEINE_FRAGEN: Frage[] = [
  {
    id: "gebaeudetyp",
    label: "Gebäude",
    typ: "auswahl",
    optionen: [
      "Einfamilienhaus",
      "Zweifamilienhaus",
      "Mehrfamilienhaus",
      "Nichtwohngebäude",
    ],
  },
  {
    id: "baujahr",
    label: "Baujahr (ca.)",
    typ: "text",
    platzhalter: "z. B. 1968",
  },
  {
    id: "flaeche",
    label: "Wohnfläche (ca. m²)",
    typ: "text",
    platzhalter: "z. B. 140",
  },
  {
    id: "zeitrahmen",
    label: "Zeitrahmen",
    typ: "auswahl",
    optionen: [
      "So schnell wie möglich",
      "In den nächsten 3 Monaten",
      "Dieses Jahr",
      "Noch in der Orientierung",
    ],
  },
];

const AUSWEIS_FRAGEN: Frage[] = [
  {
    id: "ausweisart",
    label: "Art des Ausweises",
    typ: "auswahl",
    optionen: ["Verbrauchsausweis", "Bedarfsausweis", "Weiß ich nicht"],
  },
  {
    id: "anlass",
    label: "Anlass",
    typ: "auswahl",
    optionen: ["Verkauf", "Vermietung", "Sanierung", "Sonstiges"],
  },
];

const BERATUNG_FRAGEN: Frage[] = [
  {
    id: "heizung",
    label: "Aktuelle Heizung",
    typ: "auswahl",
    optionen: ["Gas", "Öl", "Fernwärme", "Wärmepumpe", "Nachtspeicher", "Sonstige"],
  },
  {
    id: "vorhaben",
    label: "Geplante Maßnahmen",
    typ: "text",
    platzhalter: "z. B. Heizung, Fenster, Dachdämmung",
  },
];

const NACHWEIS_FRAGEN: Frage[] = [
  {
    id: "auftraggeber",
    label: "Sie sind",
    typ: "auswahl",
    optionen: ["Eigentümer", "Heizungsbauer / SHK", "Architekt / Planer", "Hausverwaltung"],
  },
  {
    id: "unterlagen",
    label: "Vorhandene Unterlagen",
    typ: "auswahl",
    optionen: ["Grundrisse vorhanden", "Nur Baubeschreibung", "Keine Unterlagen"],
  },
  {
    id: "termin",
    label: "Wann brauchen Sie das Ergebnis?",
    typ: "text",
    platzhalter: "z. B. bis Ende des Monats",
  },
];

export const LEISTUNGEN: Leistung[] = [
  {
    slug: "energieberatung",
    label: "Energieberatung / iSFP",
    fragen: BERATUNG_FRAGEN,
  },
  {
    slug: "isfp",
    label: "iSFP Sanierungsfahrplan",
    fragen: BERATUNG_FRAGEN,
  },
  {
    slug: "foerderberatung",
    label: "Förderberatung BEG (BAFA/KfW)",
    fragen: [
      ...BERATUNG_FRAGEN,
      {
        id: "antragstand",
        label: "Stand des Vorhabens",
        typ: "auswahl",
        optionen: [
          "Noch nichts beauftragt",
          "Angebote liegen vor",
          "Handwerker schon beauftragt",
        ],
      },
    ],
  },
  {
    slug: "energieausweis",
    label: "Energieausweis",
    fragen: AUSWEIS_FRAGEN,
  },
  {
    slug: "baubegleitung",
    label: "Fachplanung & Baubegleitung",
    fragen: [
      ...BERATUNG_FRAGEN,
      {
        id: "antragstand",
        label: "Förderantrag",
        typ: "auswahl",
        optionen: ["Noch nicht gestellt", "Gestellt", "Bereits bewilligt"],
      },
    ],
  },
  {
    slug: "effizienzhaus",
    label: "Effizienzhaus-Bilanzierung",
    fragen: BERATUNG_FRAGEN,
  },
  {
    slug: "heizlast",
    label: "Heizlastberechnung",
    fragen: [
      ...NACHWEIS_FRAGEN,
      {
        id: "raumweise",
        label: "Umfang",
        typ: "auswahl",
        optionen: ["Raumweise (für Heizkörperauslegung)", "Nur Gebäudeheizlast", "Weiß ich nicht"],
      },
    ],
  },
  { slug: "bauteil", label: "Bauteilberechnung (U-Wert)", fragen: NACHWEIS_FRAGEN },
  { slug: "taupunkt", label: "Taupunktnachweis", fragen: NACHWEIS_FRAGEN },
  { slug: "lueftung", label: "Lüftungskonzept", fragen: NACHWEIS_FRAGEN },
  { slug: "waermebruecken", label: "Wärmebrückenberechnung", fragen: NACHWEIS_FRAGEN },
  { slug: "sonstiges", label: "Sonstiges", fragen: [] },
];

export function leistungBySlug(slug: string | null): Leistung | undefined {
  if (!slug) return undefined;
  return LEISTUNGEN.find((l) => l.slug === slug);
}

/** Alle Fragen für ein Anliegen — allgemeine zuerst, dann die spezifischen. */
export function fragenFuer(leistung: Leistung | undefined): Frage[] {
  return [...ALLGEMEINE_FRAGEN, ...(leistung?.fragen ?? [])];
}

/**
 * Die beantworteten Fragen als lesbarer Block für die Mail. Leere Antworten
 * fallen raus, damit in der Mail nicht halb leere Zeilen stehen.
 */
export function antwortenBlock(
  leistung: Leistung | undefined,
  antworten: Record<string, string>
): string {
  const zeilen = fragenFuer(leistung)
    .filter((f) => antworten[f.id]?.trim())
    .map((f) => `• ${f.label}: ${antworten[f.id].trim()}`);
  return zeilen.length ? `ANGABEN ZUM OBJEKT\n${zeilen.join("\n")}` : "";
}
