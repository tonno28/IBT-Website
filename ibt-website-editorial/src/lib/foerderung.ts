/**
 * BEG, Bundesförderung für effiziente Gebäude
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
 * Alle Sätze bewusst als Konstanten am Kopf der Datei, bei der nächsten
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

/** Staffelung der Höchstgrenzen über die Wohneinheiten, identisch bei KfW und BAFA */
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

/** Honorar IBT, Richtwert für die Erstschätzung */
export const HONORAR = {
  satz: 4.5,
  mindest: 500,
} as const;

/**
 * Individueller Sanierungsfahrplan, falls noch keiner vorliegt.
 * Gefördert über die Bundesförderung für Energieberatung für Wohngebäude:
 * 50 % des Honorars, gedeckelt auf 650 € (1–2 WE) bzw. 850 € (ab 3 WE).
 */
export const ISFP = {
  honorarBis2WE: 1300,
  honorarAb3WE: 1700,
  satz: 50,
  maxZuschussBis2WE: 650,
  maxZuschussAb3WE: 850,
} as const;

/** Honorarschätzung: 4,5 % der Baukosten, mindestens 500 € */
export function honorarSchaetzung(baukosten: number): number {
  return Math.max(HONORAR.mindest, Math.round((baukosten * HONORAR.satz) / 100));
}

/**
 * Steuerbonus nach § 35c EStG, Alternative zum Zuschuss, nicht kombinierbar.
 *
 * Zwei Sätze, nicht einer: 20 % auf die Baumaßnahme (Abs. 1 Satz 1, verteilt
 * über drei Jahre) und daneben 50 % auf das Honorar des Energieberaters,
 * wenn er mit planerischer Begleitung oder Beaufsichtigung beauftragt ist
 * (Abs. 1 Satz 4). Der zweite Teil wird gern übersehen und macht den
 * Steuerweg für kleine Hüllenmaßnahmen noch deutlicher attraktiver.
 */
export const STEUERBONUS = {
  satz: 20,
  /** § 35c Abs. 1 Satz 4: Aufwendungen für den Energieberater zu 50 %. */
  satzHonorar: 50,
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
  /** grober Richtwert brutto für ein freistehendes EFH, nur als Startwert im Eingabefeld */
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

/**
 * Sanierungsfahrplan: liegt vor, soll mit beauftragt werden, oder
 * ausdrücklich nicht gewünscht. Die dritte Antwort ist bewusst eine
 * eigene Option und nicht bloß "nichts angeklickt", nur so weiß man
 * in der Anfrage, ob der Kunde die Frage überhaupt gesehen hat.
 */
export type IsfpStatus = "vorhanden" | "gewuenscht" | "keiner";

export interface Eingabe {
  wohneinheiten: number;
  selbstnutzend: boolean;
  /** Bruttokosten je Maßnahme; nicht gewählte Maßnahmen fehlen oder sind 0 */
  kosten: Partial<Record<MassnahmeId, number>>;
  isfpStatus: IsfpStatus;
  /** Voraussetzungen des Klimageschwindigkeitsbonus erfüllt */
  klimaBonus: boolean;
  zvE: number | null;
  kindImHaushalt: boolean;
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
  /** Honorar IBT inkl. der Förderung für Fachplanung & Baubegleitung */
  honorar: {
    betrag: number;
    satz: number;
    /** Anteil des Honorars, der unter die Baubegleitungsförderung fällt */
    foerderfaehig: number;
    foerdersatz: number;
    zuschuss: number;
    eigenanteil: number;
  };
  /** Sanierungsfahrplan, wenn er mit beauftragt werden soll */
  isfpPaket: {
    aktiv: boolean;
    honorar: number;
    satz: number;
    zuschuss: number;
    eigenanteil: number;
  };
  /** reine Baukosten ohne Honorare */
  baukosten: number;
  /** Baukosten + Honorar */
  gesamtKosten: number;
  gesamtZuschuss: number;
  gesamtSatz: number;
  eigenanteil: number;
  nichtAnrechenbar: number;
  steuerbonus: {
    moeglich: boolean;
    /** Bauteil + Honorarteil, gedeckelt auf den Höchstbetrag. */
    betrag: number;
    /** 20 % der Baukosten. */
    bauteil: number;
    /** 50 % des Honorars nach § 35c Abs. 1 Satz 4. */
    honorarteil: number;
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
        text: `Heizungskosten über der Höchstgrenze von ${fmtEuro(cap)}. Der Rest ist nicht förderfähig.`,
      });
    }
    hinweise.push({
      art: "warnung",
      text: "Der Klimageschwindigkeitsbonus sinkt ab 01.02.2027 halbjährlich. Wer 2026 beantragt, sichert sich den höheren Satz.",
    });
  }

  /* ---------------- Einzelmaßnahmen (BAFA) ---------------- */
  const bafaIds = MASSNAHMEN.filter((m) => m.traeger === "BAFA").map((m) => m.id);
  const bafaKosten = bafaIds.reduce((s, id) => s + kosten(id), 0);

  // Der Bonus zählt auch, wenn der iSFP erst noch erstellt wird, er muss nur
  // vor der Antragstellung vorliegen, nicht vor der Berechnung.
  const mitIsfp = e.isfpStatus === "vorhanden" || e.isfpStatus === "gewuenscht";

  const bafaCap = staffelCap(we, BAFA.capErsteWE);
  const bafaCapMitIsfp = bafaCap * 2;
  const basisAnteil = Math.min(bafaKosten, bafaCap);
  const isfpAnteil = mitIsfp ? Math.min(Math.max(bafaKosten - bafaCap, 0), bafaCap) : 0;
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
    if (mitIsfp && bafaKosten <= bafaCap) {
      hinweise.push({
        art: "chance",
        text: `Der iSFP-Bonus greift erst oberhalb von ${fmtEuro(bafaCap)}. Bei diesem Volumen bringt er noch nichts.`,
      });
    }
    if (!mitIsfp && bafaKosten > bafaCap) {
      hinweise.push({
        art: "chance",
        text: `Mit einem iSFP wären bis zu ${fmtEuro(Math.round((Math.min(bafaKosten - bafaCap, bafaCap) * (BAFA.grundfoerderung + BAFA.isfpBonus)) / 100))} mehr Förderung drin.`,
      });
    }
    if (bafaKosten > (mitIsfp ? bafaCapMitIsfp : bafaCap)) {
      hinweise.push({
        art: "warnung",
        text: `Höchstgrenze ${fmtEuro(mitIsfp ? bafaCapMitIsfp : bafaCap)} ausgeschöpft. Sie gilt pro Gebäude und Kalenderjahr, eine Aufteilung auf zwei Jahre kann sich lohnen.`,
      });
    }
    if (bafaKosten < BAFA.mindestinvestition) {
      hinweise.push({
        art: "warnung",
        text: `Die Mindestinvestition von ${fmtEuro(BAFA.mindestinvestition)} brutto je Antrag ist nicht erreicht.`,
      });
    }
  }

  /* ---------------- Honorar IBT + Förderung der Baubegleitung ---------------- */
  const baukosten = heizKosten + bafaKosten;
  const honorarBetrag = baukosten > 0 ? honorarSchaetzung(baukosten) : 0;

  // Fachplanung & Baubegleitung ist ein eigener Fördertatbestand nur bei
  // Einzelmaßnahmen an Hülle und Anlagentechnik, beim reinen Heizungstausch
  // laufen die Kosten als Umfeldmaßnahme mit dem Satz des Heizungstauschs.
  const bbCap =
    we <= 2
      ? BAUBEGLEITUNG.capBis2WE
      : Math.min(BAUBEGLEITUNG.capProWEab3 * we, BAUBEGLEITUNG.capGesamtAb3WE);
  const bbFoerderfaehig = bafaKosten > 0 ? Math.min(honorarBetrag, bbCap) : 0;
  const bbZuschuss = Math.round((bbFoerderfaehig * BAUBEGLEITUNG.satz) / 100);

  const honorar = {
    betrag: honorarBetrag,
    satz: HONORAR.satz,
    foerderfaehig: bbFoerderfaehig,
    foerdersatz: BAUBEGLEITUNG.satz,
    zuschuss: bbZuschuss,
    eigenanteil: honorarBetrag - bbZuschuss,
  };

  /* ---------------- Sanierungsfahrplan, falls mit beauftragt ---------------- */
  const isfpHonorar = we <= 2 ? ISFP.honorarBis2WE : ISFP.honorarAb3WE;
  const isfpMaxZuschuss = we <= 2 ? ISFP.maxZuschussBis2WE : ISFP.maxZuschussAb3WE;
  const isfpZuschuss = Math.min(Math.round((isfpHonorar * ISFP.satz) / 100), isfpMaxZuschuss);

  const isfpPaket = {
    aktiv: e.isfpStatus === "gewuenscht",
    honorar: isfpHonorar,
    satz: ISFP.satz,
    zuschuss: isfpZuschuss,
    eigenanteil: isfpHonorar - isfpZuschuss,
  };

  if (isfpPaket.aktiv) {
    hinweise.push({
      art: "info",
      text: "Der Sanierungsfahrplan muss vor dem Förderantrag fertig sein. Ich erstelle ihn und stelle beide Anträge in der richtigen Reihenfolge.",
    });
  }

  /* ---------------- Summen ---------------- */
  const gesamtKosten =
    baukosten + honorarBetrag + (isfpPaket.aktiv ? isfpPaket.honorar : 0);
  const gesamtZuschuss =
    heizung.zuschuss +
    bafa.zuschuss +
    honorar.zuschuss +
    (isfpPaket.aktiv ? isfpPaket.zuschuss : 0);
  const gesamtSatz = gesamtKosten > 0 ? (gesamtZuschuss / gesamtKosten) * 100 : 0;
  const nichtAnrechenbar = Math.max(0, baukosten - (heizung.anrechenbar + bafa.anrechenbar));

  /* ---------------- Steuerbonus § 35c EStG ---------------- */
  // 20 % auf die Baumaßnahme …
  const steuerBauteil = Math.round(
    (Math.min(baukosten, STEUERBONUS.maxBemessung) * STEUERBONUS.satz) / 100
  );
  // … und 50 % auf das Honorar, weil die Begleitung durch einen
  // BAFA-qualifizierten Energieberater erfolgt (§ 35c Abs. 1 Satz 4).
  const steuerHonorarteil = Math.round(
    (honorarBetrag * STEUERBONUS.satzHonorar) / 100
  );
  const steuerBetrag = Math.min(
    steuerBauteil + steuerHonorarteil,
    STEUERBONUS.maxBonus
  );
  const steuerbonus = {
    moeglich: e.selbstnutzend && baukosten > 0,
    betrag: steuerBetrag,
    bauteil: steuerBauteil,
    honorarteil: steuerHonorarteil,
    besser: e.selbstnutzend && steuerBetrag > gesamtZuschuss,
  };

  if (steuerbonus.moeglich && steuerbonus.besser) {
    hinweise.push({
      art: "chance",
      text: `Der Steuerbonus nach § 35c EStG läge hier mit ${fmtEuro(steuerbonus.betrag)} über dem Zuschuss. Beides zusammen geht für dieselbe Maßnahme aber nicht.`,
    });
  }

  hinweise.push({
    art: "warnung",
    text: "Der Antrag muss vor der Auftragserteilung gestellt sein. Ein zu früh unterschriebener Handwerkervertrag ist der häufigste Ablehnungsgrund.",
  });

  return {
    heizung,
    bafa,
    honorar,
    isfpPaket,
    baukosten,
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
