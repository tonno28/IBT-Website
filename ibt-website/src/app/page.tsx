import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LeistungenOverview from "@/components/LeistungenOverview";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import Foerderrechner from "@/components/Foerderrechner";

export const metadata: Metadata = {
  title: "IBT Ingenieurbüro Tonn — Energieberatung & Ingenieurleistungen Köln Bonn Rheinbach",
  description:
    "Professionelle Energieberatung (iSFP, BAFA/KfW, Förderberatung) und Ingenieurleistungen (Heizlast, U-Wert, Taupunkt) aus einer Hand. Jonas Tonn, qualifiziert nach §88 GEG, dena-gelistet. Region Köln / Bonn / Rheinbach.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Leistungsübersicht */}
      <LeistungenOverview />

      {/* 3. Prozess-Timeline */}
      <ProcessTimeline />

      {/* 4. Förderrechner Teaser */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div className="lg:sticky lg:top-24">
              <p className="section-label">BEG-Förderrechner</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary mb-4">
                Wie viel Förderung ist drin?
              </h2>
              <p className="text-zinc-muted leading-relaxed mb-6">
                Berechnen Sie in 4 Schritten, wie viel Bundesförderung für effiziente Gebäude
                (BEG) Sie für Ihre geplante Sanierungsmaßnahme erhalten können —
                ohne persönliche Daten, sofort und kostenlos.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "🔥", text: "Heizungsförderung bis 70 % (Klima- + Effizienz- + Einkommensbonus)" },
                  { icon: "🏠", text: "Gebäudehülle bis 20 % (+ 5 % mit iSFP)" },
                  { icon: "🏗️", text: "Baubegleitung 50 % bis 5.000 €" },
                  { icon: "💡", text: "Alle Boni transparent erklärt" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-zinc-secondary">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/foerderrechner" className="btn-secondary text-sm">
                Vollständiger Förderrechner →
              </Link>

              <p className="text-xs text-zinc-hint mt-4">
                Unverbindliche Schätzung. Stand: BEG 2025.
              </p>
            </div>

            {/* Right: calculator */}
            <div className="bg-bg-card border border-zinc-border rounded-2xl p-6 sm:p-8">
              <Foerderrechner />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <Testimonials />

      {/* 6. Über mich (Preview) */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Über mich</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary mb-4">
                Jonas Tonn
              </h2>
              <p className="text-zinc-muted leading-relaxed mb-4">
                Dipl.-Ing. und Teamleiter bei der Siemens AG in Köln — nebenberuflich seit Jahren
                als unabhängiger Energieberater tätig. Was das bedeutet: keine Abhängigkeit von
                Herstellern, keine Verkaufsziele, keine Provisionen.
              </p>
              <p className="text-zinc-muted leading-relaxed mb-6">
                Ich kenne beide Seiten: die technischen Anforderungen an der Schnittstelle zu
                Handwerk und Planung, und die bürokratischen Anforderungen der Förderprogramme.
                Das macht den Unterschied.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "§88 GEG qualifiziert",
                  "dena Expertenliste",
                  "BAFA/KfW akkreditiert",
                  "BEG-Fachplaner",
                ].map((badge) => (
                  <span key={badge} className="badge-teal">{badge}</span>
                ))}
              </div>

              <Link href="/ueber-mich" className="btn-secondary">
                Mehr über mich →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "§88 GEG", label: "Qualifikationsnachweis" },
                { value: "BAFA", label: "& KfW akkreditiert" },
                { value: "dena", label: "Energieeffizienz-Experte" },
                { value: "100 %", label: "unabhängig" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-base p-5 text-center"
                >
                  <div className="text-2xl font-bold font-mono text-amber mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <CTABanner />
    </>
  );
}
