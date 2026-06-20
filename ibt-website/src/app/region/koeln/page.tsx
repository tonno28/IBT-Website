import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Energieberater Köln — IBT Ingenieurbüro Tonn",
  description:
    "Energieberater in Köln: iSFP Sanierungsfahrplan, Förderberatung BEG (BAFA/KfW), Heizlastberechnung und Energieausweis. Jonas Tonn, §88 GEG, dena-gelistet. Jetzt anfragen.",
};

export default function KoelnPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-teal-mid" />
            <p className="section-label mb-0">Region Köln</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
            Energieberater in Köln —<br />
            <span className="text-gradient-teal">IBT Ingenieurbüro Tonn</span>
          </h1>
          <p className="text-xl text-zinc-muted leading-relaxed mb-8">
            Professionelle Energieberatung und Ingenieurleistungen für Köln und Umgebung.
            Qualifiziert nach §88 GEG, dena-gelistet, BAFA/KfW-akkreditiert.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-primary">Anfrage Köln</Link>
            <Link href="/foerderrechner" className="btn-secondary">Förderrechner starten</Link>
          </div>
        </div>
      </section>

      {/* Leistungen in Köln */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max">
          <p className="section-label text-center">Leistungen in Köln</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-10">
            Was ich in Köln anbiete
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: "📋", title: "iSFP Köln", desc: "Individueller Sanierungsfahrplan für Kölner Altbauten, Gründerzeitviertel und Nachkriegsgebäude.", href: "/energieberatung/isfp" },
              { icon: "💶", title: "Förderberatung Köln", desc: "BAFA/KfW-Antragsstellung für Heizungstausch, Dämmmaßnahmen und Effizienzhaus.", href: "/energieberatung/foerderberatung" },
              { icon: "🌡️", title: "Heizlast Köln", desc: "Normgerechte Heizlastberechnung für Wärmepumpenauslegung in Kölner Wohngebäuden.", href: "/ingenieurleistungen/heizlast" },
              { icon: "📄", title: "Energieausweis Köln", desc: "Verbrauchs- und Bedarfsausweis für Kauf, Verkauf und Vermietung in Köln.", href: "/energieberatung/energieausweis" },
              { icon: "📐", title: "Bauteilberechnung Köln", desc: "U-Werte für Sanierungsmaßnahmen und BEG-Förderanträge.", href: "/ingenieurleistungen/bauteil" },
              { icon: "🏗️", title: "Baubegleitung Köln", desc: "Energetische Baubegleitung für BEG-geförderte Maßnahmen in Köln.", href: "/energieberatung/baubegleitung" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-hover p-5 group">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-zinc-primary text-sm mb-1 group-hover:text-teal-light transition-colors">{item.title}</h3>
                <p className="text-xs text-zinc-muted">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lokale Info */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-zinc-primary mb-6">
            Energieberatung in Köln — was relevant ist
          </h2>
          <div className="space-y-4 text-zinc-muted text-sm leading-relaxed">
            <p>
              Köln hat einen großen Bestand an Altbauten aus der Gründerzeit und der
              Nachkriegszeit. Viele dieser Gebäude haben noch ungedämmte Außenwände,
              veraltete Heizungsanlagen und einfach verglaste Fenster — hier liegt
              das größte Einsparungspotential.
            </p>
            <p>
              Mit einem iSFP können Kölner Eigentümer ihre Sanierung schrittweise planen
              und jede Maßnahme mit dem 5 %-Bonus fördern lassen. Die Beantragung bei
              BAFA und KfW übernehme ich vollständig.
            </p>
            <p>
              Ich fahre regelmäßig zu Vor-Ort-Begehungen in Köln und der gesamten Region
              Köln / Bonn / Rheinbach. Fahrkosten auf Anfrage.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Energieberater in Köln anfragen"
        description="Kostenloses Erstgespräch für Kölner Eigentümer und Handwerksbetriebe."
        primaryLabel="Anfrage für Köln"
      />
    </>
  );
}
