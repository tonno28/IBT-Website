import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LeistungenOverview from "@/components/LeistungenOverview";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

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

      {/* 2. Zwei Säulen (Teaser, Details auf /energieberatung und /ingenieurleistungen) */}
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
                B. Eng. Smart Building Engineering und unabhängiger Energieberater.
                Was das bedeutet: keine Abhängigkeit von Herstellern, keine
                Verkaufsziele, keine Provisionen.
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
