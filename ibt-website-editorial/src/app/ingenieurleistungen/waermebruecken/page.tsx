import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Wärmebrückenberechnung Ψ-Werte DIN EN ISO 10211",
  description:
    "Wärmebrückenberechnung nach DIN EN ISO 10211: Ψ-Werte (psi) für detaillierte Gebäudebilanzierung und Tauwassernachweis. Region Köln / Bonn / Rheinbach.",
};

export default function WaermebrueckenPage() {
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
              <span className="text-zinc-secondary">Wärmebrücken</span>
            </nav>
            <p className="section-label text-amber">Ingenieurleistungen</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
              Wärmebrücken-<br />
              <span className="text-amber">berechnung</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-8">
              Ψ-Werte (psi) nach DIN EN ISO 10211 für präzise Gebäudebilanzierung,
              Schimmelpilznachweis und optimierte Energieeffizienz-Hausplanung.
            </p>
            <Link href="/kontakt" className="btn-primary">Wärmebrücken anfragen</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center text-amber">Erklärung</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-8">Was sind Wärmebrücken?</h2>
          <div className="space-y-4 text-zinc-muted text-sm leading-relaxed mb-8">
            <p>
              Wärmebrücken sind Stellen in der Gebäudehülle, an denen die Wärmedämmung
              unterbrochen ist — z.B. Balkonplatten, Fensteranschlüsse, Attiken oder Stürze.
              An diesen Stellen fließt mehr Wärme ab als an der gedämmten Fläche.
            </p>
            <p>
              In der Energiebilanzierung werden Wärmebrücken entweder pauschal mit einem
              Zuschlag von 0,10 W/(m²K) berücksichtigt — oder mit genau berechneten
              Ψ-Werten (Linienwärmedurchgangskoeffizienten), was eine bessere Bilanz ergibt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Pauschaler Ansatz", value: "+ 0,10 W/(m²K)", desc: "Standard ohne genaue Berechnung — konservativ, schlechtere Bilanz" },
              { title: "Detaillierter Ansatz", value: "< 0,05 W/(m²K)", desc: "Mit WTB-Katalog oder eigener Berechnung — bessere Effizienzhaus-Stufe möglich" },
            ].map((item) => (
              <div key={item.title} className="card-base p-5">
                <div className="text-lg font-bold font-mono text-amber mb-1">{item.value}</div>
                <div className="font-semibold text-zinc-primary text-sm mb-1">{item.title}</div>
                <div className="text-xs text-zinc-muted">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center text-amber">Einsatzbereiche</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-8">Wann sind Ψ-Werte wichtig?</h2>
          <div className="space-y-3">
            {[
              { title: "KfW Effizienzhaus 40", desc: "Für sehr hohe Effizienzstufen ist die genaue Wärmebrückenberechnung oft der entscheidende Faktor." },
              { title: "Schimmelpilznachweis (DIN 4108-2)", desc: "Der Nachweis der Schimmelpilzfreiheit basiert auf der minimalen Oberflächentemperatur, die durch Wärmebrücken beeinflusst wird." },
              { title: "Baugenehmigung Neubau EH 40", desc: "Viele Städte fordern bei KfW EH 40-Planung den Nachweis eines günstigen Wärmebrücken-Zuschlags." },
              { title: "Qualitätssicherung Planung", desc: "Frühe Berechnung kritischer Anschlüsse verhindert teure Fehler auf der Baustelle." },
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
        title="Wärmebrücken berechnen"
        description="Senden Sie mir Zeichnungen der kritischen Anschlusspunkte — ich ermittle die Ψ-Werte normgerecht nach DIN EN ISO 10211."
        primaryLabel="Wärmebrücken anfragen"
        secondaryLabel="Alle Ingenieurleistungen"
        secondaryHref="/ingenieurleistungen"
      />
    </>
  );
}
