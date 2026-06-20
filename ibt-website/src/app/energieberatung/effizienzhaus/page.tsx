import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Effizienzhaus-Bilanzierung — KfW Effizienzhaus 40 55 70 85",
  description:
    "Effizienzhaus-Nachweis nach GEG: Bilanzierung Effizienzhaus 40/55/70/85 nach DIN V 18599 — Voraussetzung für KfW-Wohngebäudekredit und Tilgungszuschüsse. Region Köln / Bonn / Rheinbach.",
};

export default function EffizienzhausPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-zinc-muted mb-6">
              <Link href="/" className="hover:text-zinc-secondary">Startseite</Link>
              <span>/</span>
              <Link href="/energieberatung" className="hover:text-zinc-secondary">Energieberatung</Link>
              <span>/</span>
              <span className="text-zinc-secondary">Effizienzhaus</span>
            </nav>
            <p className="section-label">Energieberatung</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
              Effizienzhaus-<br />
              <span className="text-gradient-teal">Bilanzierung</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-8">
              Der KfW-Wohngebäudekredit setzt einen Effizienzhaus-Nachweis voraus.
              Ich erstelle die vollständige Gebäudebilanzierung nach DIN V 18599
              für KfW Effizienzhaus 40, 55, 70 und 85.
            </p>
            <Link href="/kontakt" className="btn-primary">Bilanzierung anfragen</Link>
          </div>
        </div>
      </section>

      {/* Stufen */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-4xl">
          <p className="section-label text-center">Effizienzstufen</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-10">
            KfW Effizienzhausstufen im Überblick
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stufe: "40", desc: "40 % des Referenzgebäudes (GEG)", kfw: "höchste Förderung" },
              { stufe: "55", desc: "55 % des Referenzgebäudes (GEG)", kfw: "hohe Förderung" },
              { stufe: "70", desc: "70 % des Referenzgebäudes (GEG)", kfw: "mittlere Förderung" },
              { stufe: "85", desc: "85 % des Referenzgebäudes (GEG)", kfw: "Basisförderung" },
            ].map((item) => (
              <div key={item.stufe} className="card-base p-5 text-center">
                <div className="text-3xl font-bold font-mono text-teal-light mb-1">
                  EH {item.stufe}
                </div>
                <div className="text-xs text-zinc-muted mb-2">{item.desc}</div>
                <span className="badge-teal text-xs">{item.kfw}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-hint text-center mt-6">
            Je niedriger die Zahl, desto effizienter das Gebäude — und desto höher die KfW-Förderung.
          </p>
        </div>
      </section>

      {/* Was ich erstelle */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center">Leistungsumfang</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-8">
            Was die Bilanzierung beinhaltet
          </h2>
          <div className="space-y-4">
            {[
              { title: "Gebäudebilanzierung", desc: "Vollständige Berechnung nach DIN V 18599 (Neubau) oder DIN V 4108-6 (Bestand) — Primärenergiebedarf und Transmissionswärmeverlust." },
              { title: "U-Wert-Berechnungen", desc: "Berechnung aller Bauteile der Gebäudehülle (Wand, Dach, Boden, Fenster) als Grundlage der Bilanzierung." },
              { title: "Nachweisdokumentation", desc: "Vollständiger KfW-konformer Nachweis inkl. Bestätigung zum Kreditantrag (BzKA) und Bestätigung nach Durchführung (BnD)." },
              { title: "Effizienzhaus-Optimierung", desc: "Falls nötig: Analyse, welche Maßnahmen das Gebäude auf die gewünschte Effizienzstufe bringen — mit Kosten-Nutzen-Abwägung." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 card-base p-5">
                <div className="w-2 h-2 rounded-full bg-teal-mid shrink-0 mt-2" />
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
        title="Effizienzhaus-Nachweis anfragen"
        description="Neubau oder Kernsanierung? Ich erstelle den vollständigen KfW-Nachweis — normgerecht und fördersicher."
        primaryLabel="Bilanzierung anfragen"
      />
    </>
  );
}
