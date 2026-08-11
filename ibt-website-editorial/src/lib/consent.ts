/**
 * Cookie-Einwilligung und Google Tag.
 *
 * Ablauf bewusst streng: Vor einer aktiven Einwilligung wird gar kein
 * Google-Skript geladen, nicht nur der Consent Mode auf "denied" gesetzt.
 * Das ist die Auslegung, die in Deutschland nach § 25 TDDDG und der
 * DSGVO gefordert ist.
 *
 * Die Tag-ID kommt aus NEXT_PUBLIC_GOOGLE_TAG_ID (in den Vercel-Projekt-
 * einstellungen zu setzen, z. B. G-XXXXXXXXXX oder GTM-XXXXXXX). Ist sie
 * nicht gesetzt, wird nichts geladen und der Banner erscheint auch nicht ,
 * ohne Tracking braucht es keine Einwilligung.
 */

export const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "";

/** Nur wenn ein Tag hinterlegt ist, gibt es überhaupt etwas einzuwilligen. */
export const TRACKING_AKTIV = GOOGLE_TAG_ID.length > 0;

const SPEICHER_KEY = "ibt-consent";
/** Hochzählen, wenn sich der Umfang der Einwilligung ändert, fragt dann neu. */
const VERSION = 1;

export interface Einwilligung {
  v: number;
  analytics: boolean;
  ts: number;
}

export function ladeEinwilligung(): Einwilligung | null {
  if (typeof window === "undefined") return null;
  try {
    const roh = window.localStorage.getItem(SPEICHER_KEY);
    if (!roh) return null;
    const e = JSON.parse(roh) as Einwilligung;
    if (e.v !== VERSION) return null;
    return e;
  } catch {
    return null;
  }
}

export function speichereEinwilligung(analytics: boolean): Einwilligung {
  const e: Einwilligung = { v: VERSION, analytics, ts: Date.now() };
  try {
    window.localStorage.setItem(SPEICHER_KEY, JSON.stringify(e));
  } catch {
    // Speicher gesperrt (privater Modus), dann gilt die Entscheidung
    // nur für diese Sitzung. Kein Grund, die Seite zu blockieren.
  }
  return e;
}

export function widerrufeEinwilligung(): void {
  try {
    window.localStorage.removeItem(SPEICHER_KEY);
  } catch {
    /* siehe oben */
  }
}

/* ------------------------------------------------------------------ *
 * Google Tag
 * ------------------------------------------------------------------ */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

let geladen = false;

/** Lädt gtag.js nach und schaltet den Consent Mode auf "granted". */
export function aktiviereGoogleTag(): void {
  if (!TRACKING_AKTIV || geladen || typeof window === "undefined") return;
  geladen = true;

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_TAG_ID)}`;
  document.head.appendChild(s);

  gtag("config", GOOGLE_TAG_ID, { anonymize_ip: true });
}

/**
 * Consent Mode auf "denied", läuft vor jedem Google-Skript und gilt
 * auch, wenn der Nutzer ablehnt oder noch nicht entschieden hat.
 */
export const CONSENT_DEFAULT_SNIPPET = `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
`.trim();

/** Footer-Link und Banner reden über dieses Event miteinander. */
export const EINSTELLUNGEN_EVENT = "ibt:cookie-einstellungen";

export function oeffneCookieEinstellungen(): void {
  window.dispatchEvent(new Event(EINSTELLUNGEN_EVENT));
}
