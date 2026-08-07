/**
 * BEG — Bundesförderung für effiziente Gebäude
 *
 * Rechtsstand: Förderrichtlinien BEG EM / BEG WG / BEG NWG vom 17.07.2026,
 * in Kraft seit dem 21.07.2026 (Gebäudemodernisierungsgesetz GModG,
 * Eckpunktebeschluss Haushaltsausschuss vom 08.07.2026).
 *
 * Was sich gegenüber der Fassung von Dezember 2023 geändert hat:
 *  - Heizung: max. förderfähige Kosten 1. WE von 30.000 € auf 28.000 € gesenkt
 *  - Klimageschwindigkeitsbonus von 20 % auf 16 %, danach halbjährliche Degression
 *  - Einkommensbonus dreistufig (40 / 30 / 10 %) statt pauschal 30 %
 *  - neuer Familienzuschlag: 10.000 € Abschlag auf das maßgebliche Einkommen
 *  - Effizienzbonus (5 %) und Emissionsminderungszuschlag (2.500 €) entfallen
 *  - iSFP-Bonus nur noch auf den Ausgabenanteil oberhalb der Basis-Höchstgrenze
 *  - Förderdeckel 70 %, ausnahmsweise 80 % bei Einkommensbonus 40 %
 *
 * Alle Sätze bewusst als Konstanten am Kopf der Datei — bei der nächsten
 * Novelle müssen nur diese Werte angefasst werden, nicht die Rechenlogik.
 */

import type { IconName } from "@/components/Icon";

export const STAND = {
  kurz: "Stand 21.07.2026",
  lang: "BEG-Richtlinien vom 17.07.2026, gültig seit 21.07.2026",
  gueltigBis: "Die Richtlinien gelten bis Ende 2030.",
};

/* ------------------------------------------------------------------ *
 * Fördersätze & Höchstgrenzen
 * ------------------------------------------------------------------ */

/** Heizungstausch (KfW 458) */
export const HEIZUNG = {
  grundfoerderung: 30,
  /** Klimageschwindigkeitsbonus: 16 % bis 31.01.2027, danach −4 %-Punkte je Halbjahr */
  klimaBonus: 16,
  klimaBonusDegression: [
    { ab: "21.07.2026", wert: 16 },
    { ab: "01.02.2027", wert: 12 },
    { ab: "01.08.2027", wert: 8 },
    { ab: "01.02.2028", wert: 4 },
    { ab: "01.08.2028", wert: 0 },
  ],
  /** Regeldeckel */
  deckel: 70,
  /** Nur wenn der Einkommensbonus in der höchsten Stufe (40 %) greift */
  deckelEinkommen: 80,
  /** max. förderfähige Ausgaben, 1. Wohneinheit (sinkt ab 01.02.2027 halbjährlich um 750 €) */
  capErsteWE: 28000,
} as const;

/** Einzelmaßnahmen beim BAFA: Gebäudehülle, Anlagentechnik, Heizungsoptimierung */
export const BAFA = {
  grundfoerderung: 15,
  /** iSFP-Bonus: +5 %-Punkte, aber erst auf den Anteil oberhalb der Basis-Höchstgrenze */
  isfpBonus: 5,
  /** max. förderfähige Ausgaben, 1. Wohneinheit (mit iSFP verdoppelt sich die Grenze) */
  capErsteWE: 30000,
  /** Mindestinvestition je Antrag */
  mindestinvestition: 300,
} as const;

/** Staffelung der Höchstgrenzen über die Wohneinheiten — identisch bei KfW und BAFA */
export const STAFFEL = {
  weiterePro2bis6: 15000,
  weiterePro7plus: 8000,
} as const;

/** Energetische Fachplanung & Baubegleitung durch einen Energieeffizienz-Experten */
export const BAUBEGLEITUNG = {
  satz: 50,
  capBis2WE: 5000,
  capProWEab3: 2000,
  capGesamtAb3WE: 20000,
} as const;

/** Steuerbonus nach § 35c EStG — Alternative zum Zuschuss, nicht kombinierbar */
export const STEUERBONUS = {
  satz: 20,
  maxBemessung: 200000,
  maxBonus: 40000,
  verteilung: "7 % / 7 % / 6 % über drei Jahre",
} as const;

/* ------------------------------------------------------------------ *
 * Maßnahmenkatalog
 * ------------------------------------------------------------------ */

export type MassnahmeId =
  | "heizung"
  | "fassade"
  | "dach"
  | "keller"
  | "fenster"
  | "sonnenschutz"
  | "lueftung"
  | "optimierung";

export type Gruppe = "heizung" | "huelle" | "technik" | "optimierung";

export interface MassnahmeDef {
  id: MassnahmeId;
  label: string;
  desc: string;
  icon: IconName;
  gruppe: Gruppe;
  traeger: "KfW" | "BAFA";
  /** grober Richtwert brutto für ein freistehendes EFH — nur als Startwert im Eingabefeld */
  richtwert: number;
}

export const MASSNAHMEN: MassnahmeDef[] = [
  {
    id: "heizung",
    label: "Heizungstausch",
    desc: "Wärmepumpe, Biomasse, Solarthermie, Brennstoffzelle oder Anschluss an ein Wärmenetz",
    icon: "flame",
    gruppe: "heizung",
    traeger: "KfW",
    richtwert: 32000,
  },
  {
    id: "fassade",
    label: "Fassadendämmung",
    desc: "WDVS, Kerndämmung oder Innendämmung der Außenwände",
    icon: "brick",
    gruppe: "huelle",
    traeger: "BAFA",
    richtwert: 32000,
  },
  {
    id: "dach",
    label: "Dach & oberste Geschossdecke",
    desc: "Aufsparren-, Zwischensparren- oder Geschossdeckendämmung",
    icon: "house",
    gruppe: "huelle",
    traeger: "BAFA",
    richtwert: 24000,
  },
  {
    id: "keller",
    label: "Kellerdecke & Bodenplatte",
    desc: "Dämmung erdberührter Bauteile und der Decke zum unbeheizten Keller",
    icon: "building",
    gruppe: "huelle",
    traeger: "BAFA",
    richtwert: 9000,
  },
  {
    id: "fenster",
    label: "Fenster & Außentüren",
    desc: "Austausch von Fenstern, Balkon-/Terrassentüren und Haustüren",
    icon: "window",
    gruppe: "huelle",
    traeger: "BAFA",
    richtwert: 22000,
  },
  {
    id: "sonnenschutz",
    label: "Sommerlicher Wärmeschutz",
    desc: "Außenliegende Verschattung, Raffstores, Rollläden mit Steuerung",
    icon: "spark",
    gruppe: "huelle",
    traeger: "BAFA",
    richtwert: 8000,
  },
  {
    id: "lueftung",
    label: "Lüftung mit Wärmerückgewinnung",
    desc: "Zentrale oder dezentrale Anlage, Wärmebereitstellungsgrad ≥ 80 %",
    icon: "wind",
    gruppe: "technik",
    traeger: "BAFA",
    richtwert: 14000,
  },
  {
    id: "optimierung",
    label: "Heizungsoptimierung",
    desc: "Hydraulischer Abgleich, Pumpentausch, Einzelraumregler, Rohrdämmung",
    icon: "gear",
    gruppe: "optimierung",
    traeger: "BAFA",
    richtwert: 3500,
  },
];

export const MASSNAHME_BY_ID: Record<MassnahmeId, MassnahmeDef> = Object.fromEntries(
  MASSNAHMEN.map((m) => [m.id, m])
) as Record<MassnahmeId, MassnahmeDef>;

/* ------------------------------------------------------------------ *
 * Rechenkern
 * ------------------------------------------------------------------ */

/** Höchstgrenze der förderfähigen Ausgaben über alle Wohneinheiten */
export function staffelCap(wohneinheiten: number, capErsteWE: number): number {
  const n = Math.max(1, Math.round(wohneinheiten));
  const zweiteBisSechste = Math.min(Math.max(n - 1, 0), 5);
  const abSiebter = Math.max(n - 6, 0);
  return (
    capErsteWE +
    zweiteBisSechste * STAFFEL.weiterePro2bis6 +
    abSiebter * STAFFEL.weiterePro7plus
  );
}

/**
 * Dreistufiger Einkommensbonus. Maßgeblich ist das zu versteuernde
 * Haushaltseinkommen (Durchschnitt aus dem 2. und 3. Jahr vor Antragstellung).
 * Mit mindestens einem minderjährigen Kind im Haushalt wird das maßgebliche
 * Einkommen einmalig um 10.000 € reduziert (Familienzuschlag).
 */
export function einkommensbonus(zvE: number | null, kindImHaushalt: boolean): number {
  if (zvE === null || Number.isNaN(zvE)) return 0;
  const massgeblich = Math.max(0, zvE - (kindImHaushalt ? 10000 : 0));
  if (massgeblich <= 30000) return 40;
  if (massgeblich <= 40000) return 30;
  if (massgeblich <= 50000) return 10;
  return 0;
}

export interface Eingabe {
  wohneinheiten: number;
  selbstnutzend: boolean;
  /** Bruttokosten je Maßnahme; nicht gewählte Maßnahmen fehlen oder sind 0 */
  kosten: Partial<Record<MassnahmeId, number>>;
  isfp: boolean;
  /** Voraussetzungen des Klimageschwindigkeitsbonus erfüllt */
  klimaBonus: boolean;
  zvE: number | null;
  kindImHaushalt: boolean;
  /** Fachplanung & Baubegleitung durch einen Energieeffizienz-Experten mitbeantragen */
  baubegleitung: boolean;
}

export interface Hinweis {
  art: "info" | "warnung" | "chance";
  text: string;
}

export interface Ergebnis {
  heizung: {
    aktiv: boolean;
    kosten: number;
    cap: number;
    anrechenbar: number;
    grundfoerderung: number;
    klimaBonus: number;
    einkommensbonus: number;
    satz: number;
    deckel: number;
    /** bei MFH: Anteil, auf den die Selbstnutzer-Boni angewendet werden */
    anteilSelbstgenutzt: number;
    zuschuss: number;
  };
  bafa: {
    aktiv: boolean;
    kosten: number;
    cap: number;
    capMitIsfp: number;
    basisAnteil: number;
    isfpAnteil: number;
    anrechenbar: number;
    satzBasis: number;
    satzIsfp: number;
    zuschuss: number;
  };
  baubegleitung: {
    aktiv: boolean;
    foerderfaehig: number;
    satz: number;
    zuschuss: number;
  };
  gesamtKosten: number;
  gesamtZuschuss: number;
  gesamtSatz: number;
  eigenanteil: number;
  nichtAnrechenbar: number;
  steuerbonus: {
    moeglich: boolean;
    betrag: number;
    besser: boolean;
  };
  hinweise: Hinweis[];
}

const leer = (): Ergebnis["heizung"] => ({
  aktiv: false,
  kosten: 0,
  cap: 0,
  anrechenbar: 0,
  grundfoerderung: 0,
  klimaBonus: 0,
  einkommensbonus: 0,
  satz: 0,
  deckel: HEIZUNG.deckel,
  anteilSelbstgenutzt: 0,
  zuschuss: 0,
});

export function berechne(e: Eingabe): Ergebnis {
  const we = Math.max(1, Math.round(e.wohneinheiten));
  const hinweise: Hinweis[] = [];

  const kosten = (id: MassnahmeId) => Math.max(0, e.kosten[id] ?? 0);

  /* ---------------- Heizung (KfW) ---------------- */
  const heizKosten = kosten("heizung");
  const heizung = leer();

  if (heizKosten > 0) {
    const cap = staffelCap(we, HEIZUNG.capErsteWE);
    const anrechenbar = Math.min(heizKosten, cap);

    const kgb = e.selbstnutzend && e.klimaBonus ? HEIZUNG.klimaBonus : 0;
    const eb = e.selbstnutzend ? einkommensbonus(e.zvE, e.kindImHaushalt) : 0;
    const deckel = eb === 40 ? HEIZUNG.deckelEinkommen : HEIZUNG.deckel;
    const satz = Math.min(HEIZUNG.grundfoerderung + kgb + eb, deckel);

    // Klimageschwindigkeits- und Einkommensbonus gelten nur für selbstgenutzte
    // Wohneinheiten. Im MFH wird deshalb nur der Anteil der ersten Wohneinheit
    // mit den Boni gefördert, der Rest mit der Grundförderung.
    let zuschuss: number;
    let anteilSelbst = anrechenbar;
    if (e.selbstnutzend && we > 1 && satz > HEIZUNG.grundfoerderung) {
      anteilSelbst = Math.min(anrechenbar, HEIZUNG.capErsteWE);
      const rest = anrechenbar - anteilSelbst;
      zuschuss = (anteilSelbst * satz) / 100 + (rest * HEIZUNG.grundfoerderung) / 100;
      hinweise.push({
        art: "info",
        text:
          "Klimageschwindigkeits- und Einkommensbonus gelten nur für selbstgenutzte Wohneinheiten. " +
          "Für die übrigen Wohneinheiten ist die Grundförderung von 30 % angesetzt.",
      });
    } else {
      zuschuss = (anrechenbar * satz) / 100;
    }

    Object.assign(heizung, {
      aktiv: true,
      kosten: heizKosten,
      cap,
      anrechenbar,
      grundfoerderung: HEIZUNG.grundfoerderung,
      klimaBonus: kgb,
      einkommensbonus: eb,
      satz,
      deckel,
      anteilSelbstgenutzt: anteilSelbst,
      zuschuss: Math.round(zuschuss),
    });

    if (heizKosten > cap) {
      hinweise.push({
        art: "warnung",
        text: `Die Heizungskosten liegen über der Höchstgrenze von ${fmtEuro(cap)}. Der übersteigende Betrag ist nicht förderfähig.`,
      });
    }
    if (!e.selbstnutzend) {
      hinweise.push({
        art: "info",
        text:
          "Als Vermieter erhalten Sie die Grundförderung von 30 %. Klimageschwindigkeits- und Einkommensbonus sind Selbstnutzern vorbehalten.",
      });
    }
    hinweise.push({
      art: "warnung",
      text:
        "Der Klimageschwindigkeitsbonus sinkt ab 01.02.2027 halbjährlich um 4 %-Punkte (16 → 12 → 8 → 4 → 0 %), die förderfähigen Höchstkosten ab dann halbjährlich um 750 €. Maßgeblich ist der Zeitpunkt der Förderzusage.",
    });
  }

  /* ---------------- Einzelmaßnahmen (BAFA) ---------------- */
  const bafaIds = MASSNAHMEN.filter((m) => m.traeger === "BAFA").map((m) => m.id);
  const bafaKosten = bafaIds.reduce((s, id) => s + kosten(id), 0);

  const bafaCap = staffelCap(we, BAFA.capErsteWE);
  const bafaCapMitIsfp = bafaCap * 2;
  const basisAnteil = Math.min(bafaKosten, bafaCap);
  const isfpAnteil = e.isfp ? Math.min(Math.max(bafaKosten - bafaCap, 0), bafaCap) : 0;
  const bafaZuschuss =
    (basisAnteil * BAFA.grundfoerderung) / 100 +
    (isfpAnteil * (BAFA.grundfoerderung + BAFA.isfpBonus)) / 100;

  const bafa = {
    aktiv: bafaKosten > 0,
    kosten: bafaKosten,
    cap: bafaCap,
    capMitIsfp: bafaCapMitIsfp,
    basisAnteil,
    isfpAnteil,
    anrechenbar: basisAnteil + isfpAnteil,
    satzBasis: BAFA.grundfoerderung,
    satzIsfp: BAFA.grundfoerderung + BAFA.isfpBonus,
    zuschuss: Math.round(bafaZuschuss),
  };

  if (bafaKosten > 0) {
    if (e.isfp && bafaKosten <= bafaCap) {
      hinweise.push({
        art: "chance",
        text: `Neu seit 21.07.2026: Der iSFP-Bonus greift erst oberhalb von ${fmtEuro(bafaCap)} förderfähiger Ausgaben — und nur für den übersteigenden Anteil. Bei diesem Investitionsvolumen bringt der iSFP noch keinen Bonus. Ein Maßnahmenpaket über ${fmtEuro(bafaCap)} hebt den Satz auf ${BAFA.grundfoerderung + BAFA.isfpBonus} % für den darüber liegenden Teil.`,
      });
    }
    if (!e.isfp && bafaKosten > bafaCap) {
      hinweise.push({
        art: "chance",
        text: `Mit einem individuellen Sanierungsfahrplan (iSFP) verdoppelt sich die Höchstgrenze auf ${fmtEuro(bafaCapMitIsfp)} — der Anteil oberhalb von ${fmtEuro(bafaCap)} wird dann mit ${BAFA.grundfoerderung + BAFA.isfpBonus} % gefördert. Möglicher Mehrzuschuss: bis ${fmtEuro(Math.round((Math.min(bafaKosten - bafaCap, bafaCap) * (BAFA.grundfoerderung + BAFA.isfpBonus)) / 100))}.`,
      });
    }
    if (bafaKosten > (e.isfp ? bafaCapMitIsfp : bafaCap)) {
      hinweise.push({
        art: "warnung",
        text: `Die Höchstgrenze der förderfähigen Ausgaben (${fmtEuro(e.isfp ? bafaCapMitIsfp : bafaCap)}) ist ausgeschöpft. Sie gilt pro Gebäude und Kalenderjahr — eine Aufteilung über zwei Kalenderjahre kann sinnvoll sein.`,
      });
    }
    if (bafaKosten < BAFA.mindestinvestition) {
      hinweise.push({
        art: "warnung",
        text: `Die Mindestinvestition von ${fmtEuro(BAFA.mindestinvestition)} brutto je Antrag ist nicht erreicht.`,
      });
    }
    if (kosten("optimierung") > 0 && we > 5) {
      hinweise.push({
        art: "info",
        text: "Die Heizungsoptimierung ist auf Gebäude mit höchstens fünf Wohneinheiten begrenzt — bitte im Einzelfall prüfen.",
      });
    }
  }

  /* ---------------- Fachplanung & Baubegleitung ---------------- */
  const bbMoeglich = bafaKosten > 0;
  const bbFoerderfaehig =
    we <= 2
      ? BAUBEGLEITUNG.capBis2WE
      : Math.min(BAUBEGLEITUNG.capProWEab3 * we, BAUBEGLEITUNG.capGesamtAb3WE);
  const bbAktiv = e.baubegleitung && bbMoeglich;
  const baubegleitung = {
    aktiv: bbAktiv,
    foerderfaehig: bbFoerderfaehig,
    satz: BAUBEGLEITUNG.satz,
    zuschuss: bbAktiv ? Math.round((bbFoerderfaehig * BAUBEGLEITUNG.satz) / 100) : 0,
  };

  if (e.baubegleitung && !bbMoeglich && heizKosten > 0) {
    hinweise.push({
      art: "info",
      text:
        "Beim reinen Heizungstausch ist die Baubegleitung kein eigener Fördertatbestand — die Kosten werden als Umfeldmaßnahme mit dem Fördersatz des Heizungstauschs berücksichtigt.",
    });
  }
  if (bafaKosten > 0) {
    hinweise.push({
      art: "info",
      text:
        "Bei Einzelmaßnahmen an Gebäudehülle und Anlagentechnik ist die Einbindung eines Energieeffizienz-Experten (dena-Liste) verpflichtend.",
    });
  }

  /* ---------------- Summen ---------------- */
  const gesamtKosten = heizKosten + bafaKosten;
  const gesamtZuschuss = heizung.zuschuss + bafa.zuschuss + baubegleitung.zuschuss;
  const gesamtSatz = gesamtKosten > 0 ? (gesamtZuschuss / gesamtKosten) * 100 : 0;
  const nichtAnrechenbar = Math.max(0, gesamtKosten - (heizung.anrechenbar + bafa.anrechenbar));

  /* ---------------- Steuerbonus § 35c EStG ---------------- */
  const steuerBetrag = Math.round(
    (Math.min(gesamtKosten, STEUERBONUS.maxBemessung) * STEUERBONUS.satz) / 100
  );
  const steuerbonus = {
    moeglich: e.selbstnutzend && gesamtKosten > 0,
    betrag: Math.min(steuerBetrag, STEUERBONUS.maxBonus),
    besser: e.selbstnutzend && steuerBetrag > gesamtZuschuss,
  };

  if (steuerbonus.moeglich && steuerbonus.besser) {
    hinweise.push({
      art: "chance",
      text: `In dieser Konstellation liegt der Steuerbonus nach § 35c EStG (${fmtEuro(steuerbonus.betrag)}, verteilt ${STEUERBONUS.verteilung}) über dem Zuschuss. Beides zusammen geht für dieselbe Maßnahme nicht — eine Aufteilung nach Maßnahmen aber schon.`,
    });
  }

  hinweise.push({
    art: "warnung",
    text: "Der Antrag muss vor der Auftragserteilung an das ausführende Unternehmen gestellt sein. Ein zu früh unterschriebener Handwerkervertrag ist der häufigste Ablehnungsgrund.",
  });

  return {
    heizung,
    bafa,
    baubegleitung,
    gesamtKosten,
    gesamtZuschuss,
    gesamtSatz,
    eigenanteil: Math.max(0, gesamtKosten - gesamtZuschuss),
    nichtAnrechenbar,
    steuerbonus,
    hinweise,
  };
}

/* ------------------------------------------------------------------ *
 * Formatierung
 * ------------------------------------------------------------------ */

export function fmtEuro(n: number): string {
  return n.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

export function fmtProzent(n: number): string {
  return `${n.toLocaleString("de-DE", { maximumFractionDigits: 1 })} %`;
}
