import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Kostenlose Erstberatung",
    description:
      "Telefonisch oder vor Ort. Ich verschaffe mir ein Bild von Ihrem Gebäude und Ihren Zielen — ohne Verpflichtung.",
    duration: "ca. 30 Min.",
  },
  {
    number: "02",
    title: "Vor-Ort-Begehung",
    description:
      "Aufnahme des Ist-Zustands: Gebäudehülle, Heizung, Lüftung. Grundlage für alle weiteren Berechnungen und den iSFP.",
    duration: "ca. 2–3 Std.",
  },
  {
    number: "03",
    title: "Berechnung & Konzept",
    description:
      "Energiebilanzierung, U-Werte, Heizlast, Sanierungsfahrplan. Klare Handlungsempfehlung mit konkreten Maßnahmen und Förderbeträgen.",
    duration: "1–2 Wochen",
  },
  {
    number: "04",
    title: "Förderantragstellung",
    description:
      "Ich stelle alle Anträge bei BAFA und KfW für Sie. Energieeffizienz-Experten-Bestätigung, Technische Projektbeschreibung — alles inklusive.",
    duration: "sofort nach Beauftragung",
  },
  {
    number: "05",
    title: "Baubegleitung & Abschluss",
    description:
      "Kontrolle der ausgeführten Maßnahmen, Verwendungsnachweis, Abschlussdokumentation. Damit Ihre Förderung sicher ausgezahlt wird.",
    duration: "nach Fertigstellung",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="section-padding bg-bg-card border-y border-zinc-border">
      <div className="container-max">
        <Reveal className="text-center mb-14">
          <p className="section-label">Ablauf</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary mb-4">
            So läuft&apos;s ab
          </h2>
          <p className="max-w-xl mx-auto text-zinc-muted">
            Transparent, planbar, ohne Überraschungen — von der ersten Anfrage bis zur
            ausgezahlten Förderung.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[28px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-zinc-border hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                variant={i % 2 === 0 ? "left" : "right"}
                className={`relative flex flex-col sm:flex-row gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Content side */}
                <div
                  className={`sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                  }`}
                >
                  <div
                    className={`card-base p-5 ${
                      i % 2 === 0
                        ? "sm:ml-auto"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2 sm:hidden">
                      <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center text-bg-primary font-bold text-xs font-mono shrink-0">
                        {step.number}
                      </div>
                      <span className="text-xs text-zinc-hint">{step.duration}</span>
                    </div>
                    <h3 className="font-semibold text-zinc-primary mb-1.5">{step.title}</h3>
                    <p className="text-sm text-zinc-muted leading-relaxed">{step.description}</p>
                    <span className="hidden sm:block text-xs text-zinc-hint mt-3">{step.duration}</span>
                  </div>
                </div>

                {/* Center dot (desktop) */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-bg-primary border-2 border-amber flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-amber font-mono">{step.number}</span>
                  </div>
                </div>

                {/* Empty side (desktop) */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
