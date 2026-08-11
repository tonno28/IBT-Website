"use client";

import { TRACKING_AKTIV, oeffneCookieEinstellungen } from "@/lib/consent";

/** Widerruf muss so einfach sein wie die Einwilligung, daher im Footer. */
export default function CookieEinstellungen() {
  if (!TRACKING_AKTIV) return null;

  return (
    <button
      type="button"
      onClick={oeffneCookieEinstellungen}
      className="text-sm text-zinc-muted hover:text-zinc-primary transition-colors text-left"
    >
      Cookie-Einstellungen
    </button>
  );
}
