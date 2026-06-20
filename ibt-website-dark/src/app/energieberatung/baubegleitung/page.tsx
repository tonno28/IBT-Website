import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Fachplanung & Baubegleitung BEG — Energetische Baubegleitung",
  description:
    "Energetische Fachplanung und Baubegleitung nach BEG: Pflicht für geförderte Einzelmaßnahmen, 50 % BEG-Förderung auf Baubegleitung (max. 5.000 €). Region Köln / Bonn / Rheinbach.",
};

export default function BaubegleitungPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-void relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6">
              <Link href="/" className="hover:text-ink-body">Startseite</Link>
              <span>/</span>
              <Link href="/energieberatung" className="hover:text-ink-body">Energieberatung</Link>
              <span>/</span>
              <span className="text-ink-body">Baubegleitung</span>
            </nav>
            <p className="section-eyebrow">Energieberatung</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-ink-bright leading-tight mb-6">
              Fachplanung &<br />
              <span className="text-electric-grad">Baubegleitung</span>
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Energetische Fachplanung und Baubegleitung (iSFP/BEG) ist für viele
              Fördermaßnahmen Pflicht. Und selbst zu 50 % gefördert — bis 5.000 € für EFH.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-electric">Baubegleitung anfragen</Link>
              <span className="badge-electric self-center">50 % BEG-gefördert</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="section-pad bg-surface border-y border-line-dim">
        <div className="container-max max-w-4xl">
          <p className="section-eyebrow text-center">Was ist enthalten</p>
          <h2 className="text-2xl font-bold text-ink-bright text-center mb-10">
            Meine Leistungen als Baubegleiter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "📋", title: "Technische Projektbeschreibung", desc: "Normgerechte Dokumentation aller geplanten Maßnahmen für den Förderantrag." },
              { icon: "🔍", title: "Ausführungskontrolle", desc: "Begehung der Baustelle zur Kontrolle der fachgerechten Ausführung laut Planung." },
              { icon: "📸", title: "Baudokumentation", desc: "Fotodokumentation der Bauausführung als Nachweis für BAFA/KfW." },
              { icon: "✅", title: "Verwendungsnachweis", desc: "Vollständiger Abschlussbericht und Verwendungsnachweis für die Förderauszahlung." },
              { icon: "🔧", title: "Qualitätssicherung", desc: "Prüfung der Materialqualität und Ausführung auf Normkonformität (U-Werte, Anschlüsse)." },
              { icon: "📞", title: "Kommunikation Handwerk", desc: "Direkter Austausch mit ausführenden Handwerksbetrieben — klar, schnell, technisch präzise." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 card p-5">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-ink-bright text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-ink-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Förderung */}
      <section className="section-pad bg-void">
        <div className="container-max max-w-3xl">
          <p className="section-eyebrow text-center">BEG-Förderung</p>
          <h2 className="text-2xl font-bold text-ink-bright text-center mb-8">
            Baubegleitung ist selbst förderbar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { value: "50 %", label: "Zuschuss auf Kosten der Baubegleitung" },
              { value: "5.000 €", label: "Maximum für EFH (1 Wohneinheit)" },
              { value: "+2.000 €", label: "je weitere Wohneinheit (MFH)" },
            ].map((stat) => (
              <div key={stat.label} className="card p-5 text-center">
                <div className="text-2xl font-bold font-mono text-electric mb-1">{stat.value}</div>
                <div className="text-xs text-ink-muted">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink-muted text-center leading-relaxed">
            Die Kosten für Fachplanung und Baubegleitung werden separat von BAFA gefördert
            und zählen nicht zu den förderfähigen Investitionskosten. D.h. die Baubegleitung
            kostet Sie effektiv die Hälfte.
          </p>
        </div>
      </section>

      <CTABanner
        title="Baubegleitung beauftragen"
        description="Planen Sie eine energetische Sanierung? Ich begleite Sie von der Planung bis zum Verwendungsnachweis — technisch kompetent und fördersicher."
        primaryLabel="Baubegleitung anfragen"
      />
    </>
  );
}
