import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Bauteilberechnung U-Wert — DIN EN ISO 6946 Köln Bonn",
  description:
    "U-Wert-Berechnung nach DIN EN ISO 6946 für Wand, Dach, Boden und Fenster. Nachweis für Förderanträge, BEG, Baugenehmigung. Ab 80 € pro Bauteil. Region Köln / Bonn / Rheinbach.",
};

export default function BauteilPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-zinc-muted mb-6">
              <Link href="/" className="hover:text-zinc-secondary">Startseite</Link>
              <span>/</span>
              <Link href="/ingenieurleistungen" className="hover:text-zinc-secondary">Ingenieurleistungen</Link>
              <span>/</span>
              <span className="text-zinc-secondary">Bauteilberechnung</span>
            </nav>
            <p className="section-label text-amber">Ingenieurleistungen</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
              Bauteilberechnung<br />
              <span className="text-amber">U-Wert nach DIN EN ISO 6946</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-8">
              Der U-Wert ist der zentrale Kennwert für die Wärmedämmeigenschaft eines Bauteils.
              Ich berechne ihn normgerecht für Nachweis, Förderantrag und Energiebilanzierung.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-primary">U-Wert anfragen</Link>
              <span className="self-center text-xs text-zinc-hint font-mono">ab 80 € / Bauteil</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-4xl">
          <p className="section-label text-center text-amber">Bauteile</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-10">Für welche Bauteile?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🧱", title: "Außenwand", norms: "BEG: U ≤ 0,20 W/m²K" },
              { icon: "🏠", title: "Dach / OGD", norms: "BEG: U ≤ 0,14 W/m²K" },
              { icon: "⬜", title: "Bodenplatte", norms: "BEG: U ≤ 0,25 W/m²K" },
              { icon: "🪟", title: "Fenster / Türen", norms: "BEG: Uw ≤ 0,95 W/m²K" },
            ].map((item) => (
              <div key={item.title} className="card-base p-5 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-zinc-primary text-sm mb-1">{item.title}</div>
                <div className="text-xs text-zinc-hint">{item.norms}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center text-amber">Wofür benötigt</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-8">Einsatzbereiche</h2>
          <div className="space-y-3">
            {[
              { title: "BEG Fördernachweis", desc: "Für Einzelmaßnahmen (Fassade, Dach, Fenster) muss der erreichte U-Wert den BEG-Mindestanforderungen entsprechen und nachgewiesen werden." },
              { title: "Energiebilanzierung (GEG)", desc: "Grundlage für den Bedarfsausweis und die Effizienzhaus-Bilanzierung nach DIN V 18599 / DIN V 4108-6." },
              { title: "Baugenehmigung", desc: "Bei Neubau und wesentlicher Änderung sind U-Werte nach GEG nachzuweisen." },
              { title: "Taupunktnachweis", desc: "Voraussetzung für den Glaser-Nachweis (DIN 4108-3) — ohne U-Wert kein Taupunktnachweis." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 card-base p-5">
                <div className="w-2 h-2 rounded-full bg-amber shrink-0 mt-2" />
                <div>
                  <h3 className="font-semibold text-zinc-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="U-Wert berechnen lassen"
        description="Senden Sie mir den Bauteilaufbau (Schichten, Materialien, Dicken) — ich liefere den normierten U-Wert-Nachweis."
        primaryLabel="Bauteilberechnung anfragen"
        secondaryLabel="Alle Ingenieurleistungen"
        secondaryHref="/ingenieurleistungen"
      />
    </>
  );
}
