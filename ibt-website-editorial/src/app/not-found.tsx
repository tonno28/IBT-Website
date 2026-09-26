import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

/**
 * Fehlerseite für unbekannte Adressen. Next legt sie beim statischen Export
 * als 404.html ab, die .htaccess leitet Apache per ErrorDocument darauf.
 */

const ziele = [
  { href: "/energieberatung", title: "Energieberatung", desc: "iSFP, Förderberatung, Energieausweis, Baubegleitung" },
  { href: "/ingenieurleistungen", title: "Ingenieurleistungen", desc: "Heizlast, U-Wert, Taupunkt, Wärmebrücken, Lüftung" },
  { href: "/foerderrechner", title: "Förderrechner 2026", desc: "Förderhöhe für Ihr Vorhaben selbst ausrechnen" },
];

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container-max max-w-2xl">
        <p className="section-label">Fehler 404</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
          Diese Seite gibt es nicht
        </h1>
        <p className="text-lg text-zinc-muted leading-relaxed mb-10">
          Die Adresse ist falsch geschrieben oder die Seite wurde verschoben. Hier geht es
          weiter:
        </p>

        <div className="divide-y divide-zinc-border border-y border-zinc-border mb-10">
          {ziele.map((z) => (
            <Link
              key={z.href}
              href={z.href}
              className="group flex items-center justify-between gap-6 py-5 transition-colors"
            >
              <div>
                <div className="font-semibold text-zinc-primary group-hover:text-accent transition-colors">
                  {z.title}
                </div>
                <div className="text-sm text-zinc-muted mt-0.5">{z.desc}</div>
              </div>
              <span className="text-accent transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">Zur Startseite</Link>
          <Link href="/kontakt" className="btn-secondary">Kontakt aufnehmen</Link>
        </div>
      </div>
    </section>
  );
}
