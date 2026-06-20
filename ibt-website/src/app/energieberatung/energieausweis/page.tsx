import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Energieausweis — Verbrauchs- & Bedarfsausweis Köln Bonn Rheinbach",
  description:
    "Energieausweis für Wohngebäude: Verbrauchsausweis ab 95 €, Bedarfsausweis (DIN V 18599) ab 250 €. Pflicht bei Verkauf, Vermietung und Neubau. Schnell und rechtssicher. Region Köln / Bonn / Rheinbach.",
};

export default function EnergieausweisPage() {
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
              <span className="text-zinc-secondary">Energieausweis</span>
            </nav>
            <p className="section-label">Energieberatung</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
              Energieausweis<br />
              <span className="text-gradient-teal">rechtssicher & schnell</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-8">
              Verbrauchs- und Bedarfsausweis für Wohngebäude. Pflicht bei Verkauf, Vermietung
              und Neubau — ich stelle ihn schnell, korrekt und GEG-konform aus.
            </p>
            <Link href="/kontakt" className="btn-primary">Energieausweis beauftragen</Link>
          </div>
        </div>
      </section>

      {/* Typen */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-4xl">
          <p className="section-label text-center">Ausweis-Typen</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-10">
            Verbrauch oder Bedarf?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Verbrauchsausweis",
                price: "ab 95 €",
                desc: "Basiert auf den tatsächlichen Verbrauchsdaten der letzten 3 Jahre. Schnell und günstig — geeignet für Bestandsgebäude mit mehr als 4 Wohneinheiten.",
                when: ["Verkauf / Vermietung MFH", "Schnelle Lieferung gewünscht", "Verbrauchsdaten vorhanden"],
                limit: "Nicht geeignet für Neubau oder Sanierungsnachweis",
              },
              {
                title: "Bedarfsausweis",
                price: "ab 250 € (EFH)",
                desc: "Basiert auf der berechneten Energiebilanz des Gebäudes (DIN V 18599 / DIN V 4108-6). Objektiv, unabhängig vom Nutzerverhalten — erforderlich für viele Förderprogramme.",
                when: ["Neubau / kernsanierte Gebäude", "EFH mit weniger als 4 WE (Pflicht)", "Förderantrag KfW / BAFA", "Genauere Aussage gewünscht"],
                highlight: true,
              },
            ].map((item) => (
              <div key={item.title} className={`card-base p-6 flex flex-col gap-4 ${item.highlight ? "border-teal-dark/40" : ""}`}>
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-zinc-primary">{item.title}</h3>
                  <span className="text-xl font-bold font-mono text-amber">{item.price}</span>
                </div>
                <p className="text-sm text-zinc-muted leading-relaxed">{item.desc}</p>
                <div>
                  <div className="text-xs font-semibold text-zinc-secondary mb-2">Geeignet für:</div>
                  <ul className="space-y-1.5">
                    {item.when.map((w) => (
                      <li key={w} className="flex items-center gap-2 text-sm text-zinc-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-mid shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                {item.limit && (
                  <div className="text-xs text-zinc-hint border-t border-zinc-border pt-3">
                    {item.limit}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pflicht */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center">Rechtliches</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-8">
            Wann ist ein Energieausweis Pflicht?
          </h2>
          <div className="space-y-4">
            {[
              { title: "Verkauf", desc: "Bei jedem Verkauf eines Gebäudes oder einer Wohneinheit muss der Energieausweis spätestens bei der Besichtigung vorliegen. Verstöße werden mit bis zu 15.000 € Bußgeld geahndet." },
              { title: "Vermietung", desc: "Bei jeder Neuvermietung gilt dieselbe Pflicht. Auch Inserate (ImmobilienScout, ImmoWelt etc.) müssen Energiekennwerte ausweisen." },
              { title: "Neubau", desc: "Für jeden Neubau ist ein Bedarfsausweis Pflicht — er muss der Baugenehmigungsbehörde vorgelegt werden." },
              { title: "Größere Sanierung", desc: "Bei umfanggreichen energetischen Sanierungen (mehr als 25 % der Gebäudehülle) ist ein neuer Energieausweis zu erstellen." },
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
        title="Energieausweis beauftragen"
        description="Schicken Sie mir eine kurze Nachricht mit Gebäudetyp und Baujahr — ich melde mich innerhalb eines Werktags mit einem konkreten Angebot."
        primaryLabel="Energieausweis anfragen"
      />
    </>
  );
}
