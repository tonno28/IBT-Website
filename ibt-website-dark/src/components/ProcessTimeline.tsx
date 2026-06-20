const steps = [
  {
    number: "01",
    title: "Kostenlose Erstberatung",
    description: "Telefonisch oder vor Ort. Ich verschaffe mir ein Bild von Ihrem Gebäude und Ihren Zielen — ohne Verpflichtung.",
    duration: "ca. 30 Min.",
  },
  {
    number: "02",
    title: "Vor-Ort-Begehung",
    description: "Aufnahme des Ist-Zustands: Gebäudehülle, Heizung, Lüftung. Grundlage für alle weiteren Berechnungen und den iSFP.",
    duration: "ca. 2–3 Std.",
  },
  {
    number: "03",
    title: "Berechnung & Konzept",
    description: "Energiebilanzierung, U-Werte, Heizlast, Sanierungsfahrplan. Klare Handlungsempfehlung mit Maßnahmen und Förderbeträgen.",
    duration: "1–2 Wochen",
  },
  {
    number: "04",
    title: "Förderantragstellung",
    description: "Alle Anträge bei BAFA und KfW. Energieeffizienz-Experten-Bestätigung, Technische Projektbeschreibung — alles inklusive.",
    duration: "sofort nach Beauftragung",
  },
  {
    number: "05",
    title: "Baubegleitung & Abschluss",
    description: "Kontrolle der ausgeführten Maßnahmen, Verwendungsnachweis, Abschlussdokumentation für die sichere Auszahlung.",
    duration: "nach Fertigstellung",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      {/* top / bottom rule lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-bright to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-bright to-transparent" />

      <div className="container-max">
        <div className="mb-16">
          <span className="section-eyebrow">Ablauf</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink-bright mt-3">
            So läuft&apos;s ab
          </h2>
          <p className="text-ink-body mt-4 max-w-md leading-relaxed">
            Transparent, planbar, ohne Überraschungen —
            von der ersten Anfrage bis zur ausgezahlten Förderung.
          </p>
        </div>

        {/* Horizontal scrollable steps on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex md:flex-col gap-4 md:gap-3 group">

              {/* Connector line (horizontal on md) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-1/2 w-full h-px bg-line-dim" />
              )}
              {/* Connector line (vertical on mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-4 top-10 bottom-0 w-px bg-line-dim" />
              )}

              {/* Number dot */}
              <div className="relative z-10 shrink-0 flex md:justify-center">
                <div className="w-9 h-9 rounded-full bg-card border-2 border-electric/30 flex items-center justify-center group-hover:border-electric/70 group-hover:shadow-[0_0_20px_rgba(6,214,160,0.3)] transition-all duration-300">
                  <span className="font-mono text-xs font-bold text-electric">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pb-8 md:pb-0 md:pt-5 md:px-2">
                <h3 className="font-display font-semibold text-sm text-ink-bright mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed mb-2">
                  {step.description}
                </p>
                <span className="font-mono text-[10px] text-ink-ghost tracking-wide">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
