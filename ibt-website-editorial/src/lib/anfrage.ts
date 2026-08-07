/**
 * Anfrage aus dem Förderrechner.
 *
 * Die Seite wird statisch exportiert (output: 'export'), es gibt also keinen
 * Server und keine API-Route, die eine Mail verschicken könnte. Deshalb wird
 * eine fertig ausgefüllte Mail im Mailprogramm des Interessenten geöffnet.
 * Vorteil nebenbei: Die Anfrage kommt von seiner echten Adresse, man kann
 * direkt antworten.
 */

import {
  MASSNAHME_BY_ID,
  STAND,
  fmtEuro,
  type Eingabe,
  type Ergebnis,
  type MassnahmeId,
} from "./foerderung";

/** Zieladresse für alle Anfragen — auch im Impressum und im Footer hinterlegt. */
export const ANFRAGE_EMPFAENGER = "info@ib-tonn.de";

const NL = "\n";

// Bewusst reines ASCII und keine Einrück-Leerzeichen: mailto-Links werden
// prozentkodiert, Sonderzeichen und Padding blähen sie stark auf, und manche
// Mailprogramme kappen ab etwa 2000 Zeichen.
const TRENNER = "---";

export function anfrageBetreff(e: Eingabe, r: Ergebnis): string {
  const gebaeude = e.wohneinheiten === 1 ? "Einfamilienhaus" : `${e.wohneinheiten} Wohneinheiten`;
  return `Förderanfrage ${gebaeude} — Förderung ca. ${fmtEuro(r.gesamtZuschuss)}`;
}

export function anfrageText(e: Eingabe, r: Ergebnis): string {
  const gewaehlt = (Object.keys(e.kosten) as MassnahmeId[]).filter(
    (id) => (e.kosten[id] ?? 0) > 0
  );

  const boni: string[] = [];
  if (e.isfp) boni.push("iSFP liegt vor");
  if (e.klimaBonus && e.selbstnutzend) boni.push("Alte fossile Heizung wird ersetzt");
  if (e.selbstnutzend && e.zvE !== null) {
    boni.push(`Zu versteuerndes Haushaltseinkommen bis ${fmtEuro(e.zvE)}`);
  }
  if (e.kindImHaushalt) boni.push("Mindestens ein minderjähriges Kind im Haushalt");

  const t: string[] = [];

  t.push("Guten Tag Herr Tonn,");
  t.push("");
  t.push("ich habe Ihren Foerderrechner genutzt. Meine Angaben:");
  t.push("");
  t.push(
    `Gebaeude: ${e.wohneinheiten} Wohneinheit${e.wohneinheiten > 1 ? "en" : ""}, ${
      e.selbstnutzend ? "selbst genutzt" : "vermietet"
    }`
  );
  t.push("");
  t.push("MASSNAHMEN");
  for (const id of gewaehlt) {
    t.push(`- ${MASSNAHME_BY_ID[id].label}: ${fmtEuro(e.kosten[id] ?? 0)}`);
  }
  t.push(`Baukosten gesamt: ${fmtEuro(r.baukosten)}`);

  if (boni.length > 0) {
    t.push("");
    t.push("BONI");
    for (const b of boni) t.push(`- ${b}`);
  }

  t.push("");
  t.push("SCHAETZUNG");
  if (r.heizung.aktiv) t.push(`Heizung (KfW), ${r.heizung.satz}%: ${fmtEuro(r.heizung.zuschuss)}`);
  if (r.bafa.aktiv) t.push(`Huelle + Technik (BAFA): ${fmtEuro(r.bafa.zuschuss)}`);
  if (r.honorar.zuschuss > 0) t.push(`Baubegleitung: ${fmtEuro(r.honorar.zuschuss)}`);
  t.push(`Foerderung gesamt: ${fmtEuro(r.gesamtZuschuss)}`);
  t.push(`Honorar: ${fmtEuro(r.honorar.betrag)}`);
  t.push(`Eigenanteil: ${fmtEuro(r.eigenanteil)}`);
  t.push(`(unverbindlich, ${STAND.kurz})`);
  t.push("");
  t.push(TRENNER);
  t.push("Name:");
  t.push("Telefon:");
  t.push("Objekt (Adresse, Baujahr):");
  t.push("Anmerkung:");
  t.push("");
  t.push("Viele Gruesse");

  return t.join(NL);
}

/** Fertiger mailto-Link mit Betreff und ausgefülltem Text */
export function anfrageMailto(e: Eingabe, r: Ergebnis): string {
  const betreff = encodeURIComponent(anfrageBetreff(e, r));
  const text = encodeURIComponent(anfrageText(e, r));
  return `mailto:${ANFRAGE_EMPFAENGER}?subject=${betreff}&body=${text}`;
}
