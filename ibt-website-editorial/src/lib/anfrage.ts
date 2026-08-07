/**
 * Anfragen von der Website.
 *
 * Die Seite wird statisch exportiert (output: 'export'), es gibt also keinen
 * eigenen Server. Der Versand läuft deshalb über Web3Forms: ein POST aus dem
 * Browser, die Mail stellt Web3Forms zu.
 *
 * Der Access-Key ist bei Web3Forms bewusst öffentlich — er steht in deren
 * Beispielen direkt im HTML und erlaubt nur den Versand an die eine hinterlegte
 * Adresse. Über NEXT_PUBLIC_WEB3FORMS_KEY lässt er sich in den Vercel-Einstellungen
 * austauschen, ohne den Code anzufassen (z. B. wenn er wegen Spam rotiert werden muss).
 */

import {
  MASSNAHME_BY_ID,
  STAND,
  fmtEuro,
  type Eingabe,
  type Ergebnis,
  type MassnahmeId,
} from "./foerderung";

export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "136c096b-1cf8-4bfd-a26b-230e60d99f7c";

/** Zieladresse, auch im Impressum und im Footer hinterlegt — für Direktkontakt. */
export const ANFRAGE_EMPFAENGER = "info@ib-tonn.de";

export type Versandstatus = "bereit" | "sendet" | "ok" | "fehler";

/** Schickt die Felder an Web3Forms. Wirft, wenn der Dienst nicht bestätigt. */
export async function sendeAnfrage(felder: Record<string, string>): Promise<void> {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...felder }),
  });

  let data: { success?: boolean; message?: string } = {};
  try {
    data = await res.json();
  } catch {
    // Antwort war kein JSON — unten als Fehler behandelt
  }

  if (!res.ok || !data.success) {
    throw new Error(data.message || `Versand fehlgeschlagen (${res.status})`);
  }
}

/* ------------------------------------------------------------------ *
 * Anfrage aus dem Förderrechner
 * ------------------------------------------------------------------ */

export function anfrageBetreff(e: Eingabe, r: Ergebnis): string {
  const gebaeude = e.wohneinheiten === 1 ? "Einfamilienhaus" : `${e.wohneinheiten} Wohneinheiten`;
  return `Förderrechner-Anfrage: ${gebaeude}, Förderung ca. ${fmtEuro(r.gesamtZuschuss)}`;
}

/** Die Konfiguration als lesbarer Block für die Mail */
export function konfiguration(e: Eingabe, r: Ergebnis): string {
  const gewaehlt = (Object.keys(e.kosten) as MassnahmeId[]).filter(
    (id) => (e.kosten[id] ?? 0) > 0
  );

  const t: string[] = [];

  t.push(
    `GEBÄUDE: ${e.wohneinheiten} Wohneinheit${e.wohneinheiten > 1 ? "en" : ""}, ${
      e.selbstnutzend ? "selbst genutzt" : "vermietet"
    }`
  );
  t.push("");
  t.push("MASSNAHMEN");
  for (const id of gewaehlt) {
    t.push(`• ${MASSNAHME_BY_ID[id].label}: ${fmtEuro(e.kosten[id] ?? 0)}`);
  }
  t.push(`Baukosten gesamt: ${fmtEuro(r.baukosten)}`);

  const boni: string[] = [];
  if (e.isfpStatus === "vorhanden") boni.push("iSFP liegt vor");
  if (e.isfpStatus === "gewuenscht") {
    boni.push("*** SANIERUNGSFAHRPLAN GEWÜNSCHT — bitte mit anbieten ***");
  }
  if (e.isfpStatus === "keiner") boni.push("Kein iSFP gewünscht (ausdrücklich abgewählt)");
  if (e.klimaBonus && e.selbstnutzend) boni.push("Alte fossile Heizung wird ersetzt");
  if (e.selbstnutzend && e.zvE !== null) {
    boni.push(`Haushaltseinkommen bis ${fmtEuro(e.zvE)}`);
  }
  if (e.kindImHaushalt) boni.push("Mindestens ein minderjähriges Kind im Haushalt");
  if (boni.length > 0) {
    t.push("");
    t.push("BONI");
    for (const b of boni) t.push(`• ${b}`);
  }

  t.push("");
  t.push("SCHÄTZUNG");
  if (r.heizung.aktiv) {
    t.push(`Heizung (KfW), ${r.heizung.satz} %: ${fmtEuro(r.heizung.zuschuss)}`);
  }
  if (r.bafa.aktiv) t.push(`Hülle & Technik (BAFA): ${fmtEuro(r.bafa.zuschuss)}`);
  if (r.honorar.zuschuss > 0) t.push(`Baubegleitung: ${fmtEuro(r.honorar.zuschuss)}`);
  if (r.isfpPaket.aktiv) t.push(`Sanierungsfahrplan: ${fmtEuro(r.isfpPaket.zuschuss)}`);
  t.push(`Förderung gesamt: ${fmtEuro(r.gesamtZuschuss)}`);
  t.push(`Honorar (Schätzung): ${fmtEuro(r.honorar.betrag)}`);
  if (r.isfpPaket.aktiv) {
    t.push(
      `Sanierungsfahrplan: ${fmtEuro(r.isfpPaket.honorar)} (Eigenanteil ${fmtEuro(
        r.isfpPaket.eigenanteil
      )})`
    );
  }
  t.push(`Eigenanteil: ${fmtEuro(r.eigenanteil)}`);
  t.push(`(unverbindlich, ${STAND.kurz})`);

  return t.join("\n");
}

/** Fallback, falls Web3Forms nicht erreichbar ist */
export function anfrageMailto(e: Eingabe, r: Ergebnis): string {
  const betreff = encodeURIComponent(anfrageBetreff(e, r));
  const text = encodeURIComponent(
    `Guten Tag Herr Tonn,\n\nich habe Ihren Förderrechner genutzt.\n\n${konfiguration(e, r)}\n\n---\nName:\nTelefon:\nObjekt:\n`
  );
  return `mailto:${ANFRAGE_EMPFAENGER}?subject=${betreff}&body=${text}`;
}
