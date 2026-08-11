"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  EINSTELLUNGEN_EVENT,
  TRACKING_AKTIV,
  aktiviereGoogleTag,
  ladeEinwilligung,
  speichereEinwilligung,
  widerrufeEinwilligung,
} from "@/lib/consent";

export default function CookieBanner() {
  const [sichtbar, setSichtbar] = useState(false);

  // Erst nach dem Mount entscheiden, localStorage gibt es beim Prerender nicht.
  useEffect(() => {
    if (!TRACKING_AKTIV) return;
    const e = ladeEinwilligung();
    if (e === null) {
      setSichtbar(true);
    } else if (e.analytics) {
      aktiviereGoogleTag();
    }
  }, []);

  // Über den Footer-Link lässt sich die Entscheidung jederzeit ändern.
  useEffect(() => {
    if (!TRACKING_AKTIV) return;
    const oeffne = () => {
      widerrufeEinwilligung();
      setSichtbar(true);
    };
    window.addEventListener(EINSTELLUNGEN_EVENT, oeffne);
    return () => window.removeEventListener(EINSTELLUNGEN_EVENT, oeffne);
  }, []);

  const entscheiden = useCallback((analytics: boolean) => {
    speichereEinwilligung(analytics);
    if (analytics) aktiviereGoogleTag();
    setSichtbar(false);
  }, []);

  if (!TRACKING_AKTIV || !sichtbar) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-titel"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 animate-fade-in"
    >
      <div className="container-max">
        <div className="rounded-2xl border border-zinc-border bg-bg-card shadow-lg p-5 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            <div className="flex-1">
              <h2 id="cookie-titel" className="font-bold text-zinc-primary mb-1.5">
                Cookies und Reichweitenmessung
              </h2>
              <p className="text-sm text-zinc-muted leading-relaxed">
                Technisch notwendige Cookies setze ich immer, ohne sie funktioniert die Seite
                nicht. Zusätzlich würde ich gern mit <strong>Google Tag</strong> messen, wie die
                Seite genutzt wird, um sie zu verbessern. Dabei werden Daten an Google übertragen.
                Sie können das ablehnen und Ihre Entscheidung jederzeit ändern. Mehr dazu in der{" "}
                <Link href="/datenschutz" className="text-amber hover:underline">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                type="button"
                onClick={() => entscheiden(false)}
                className="btn-secondary justify-center text-sm px-6"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={() => entscheiden(true)}
                className="btn-primary justify-center text-sm px-6"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
