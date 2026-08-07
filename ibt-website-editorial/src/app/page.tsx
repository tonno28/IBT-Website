import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LeistungenOverview from "@/components/LeistungenOverview";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import SanierungsAnimation from "@/components/SanierungsAnimation";

export const metadata: Metadata = {
  title: "IBT Ingenieurbüro Tonn — Energieberatung & Ingenieurleistungen Köln Aachen Düren",
  description:
    "Professionelle Energieberatung (iSFP, BAFA/KfW, Förderberatung) und Ingenieurleistungen (Heizlast, U-Wert, Taupunkt) aus einer Hand. Jonas Tonn, qualifiziert nach §88 GEG, dena-gelistet. Region Köln / Aachen / Düren.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Sanierung im Zeitraffer */}
      <section className="section-padding bg-bg-primary">
        <div className="container-max">
          <Reveal className="max-w-2xl mb-10">
            <p className="section-label">Sanierung im Zeitraffer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary mb-4">
              Vom alten Objekt zum Effizienzhaus
            </h2>
            <p className="text-zinc-muted leading-relaxed">
              Der weitaus größte Teil unserer Projekte sind Sanierungen im Bestand. Der Ablauf
              ist fast immer derselbe — und genau an dieser Reihenfolge entscheidet sich, wie
              viel Förderung am Ende ankommt. Klicken Sie sich durch die Schritte.
            </p>
          </Reveal>

          <Reveal variant="scale">
            <SanierungsAnimation variant="feature" />
          </Reveal>

          <Reveal className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/energieberatung" className="btn-primary">
              Sanierung begleiten lassen
            </Link>
            <Link href="/foerderrechner" className="btn-secondary">
              Förderung berechnen
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. Zwei Säulen (Teaser, Details auf /energieberatung und /ingenieurleistungen) */}
      <LeistungenOverview />

      {/* 3. Über mich (Preview) */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="left">
              <p className="section-label">Über mich</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary mb-4">
                Jonas Tonn
              </h2>
              <p className="text-zinc-muted leading-relaxed mb-4">
                Dipl.-Ing. und unabhängiger Energieberater. Was das bedeutet: keine
                Abhängigkeit von Herstellern, keine Verkaufsziele, keine Provisionen.
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
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "§88 GEG", label: "Qualifikationsnachweis" },
                { value: "BAFA", label: "& KfW akkreditiert" },
                { value: "dena", label: "Energieeffizienz-Experte" },
                { value: "100 %", label: "unabhängig" },
              ].map((stat, i) => (
                <Reveal key={stat.label} variant="scale" delay={i * 80}>
                  <TiltCard>
                    <div className="card-base tilt-layer p-5 text-center h-full">
                      <div className="stat-num text-2xl text-amber mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-zinc-muted">{stat.label}</div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <CTABanner />
    </>
  );
}
