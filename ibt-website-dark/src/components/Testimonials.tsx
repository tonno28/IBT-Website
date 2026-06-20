const testimonials = [
  {
    text: "Jonas Tonn hat uns den gesamten iSFP erstellt und sämtliche Förderanträge übernommen. Wir haben am Ende 65 % Förderung auf unsere Wärmepumpe bekommen — mehr als wir erwartet hätten. Sehr kompetent und immer erreichbar.",
    author: "Familie M.",
    location: "Rheinbach",
    measure: "Wärmepumpe + iSFP",
    foerderung: "65 %",
  },
  {
    text: "Ich bin Heizungsbauer und nutze IBT regelmäßig für Heizlastberechnungen und hydraulische Abgleiche. Schnelle Lieferzeit, normgerechte Unterlagen — das Handwerk, das ich brauche.",
    author: "T. Bergmann",
    location: "Köln",
    measure: "Heizlastberechnung",
    role: "Heizungsbauer",
  },
  {
    text: "Die Förderberatung war ausgezeichnet. Herr Tonn hat klar erklärt, welche Boni wir nutzen können und warum. Die Kombination aus Klima-Geschwindigkeitsbonus und iSFP-Bonus hat unsere Förderquote deutlich erhöht.",
    author: "R. & K. Schulze",
    location: "Bonn",
    measure: "Dachdämmung + Fenster",
    foerderung: "20 %",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-void">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Kundenstimmen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-bright mb-4">
            Was Kunden sagen
          </h2>
          <p className="max-w-xl mx-auto text-ink-muted">
            Echte Ergebnisse, keine Hochglanz-Versprechen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-warm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-ink-body leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Footer */}
              <div className="pt-3 border-t border-line-dim">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-semibold text-ink-bright">{t.author}</div>
                    <div className="text-xs text-ink-muted">
                      {t.location}
                      {t.role && <> · {t.role}</>}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-ink-ghost">{t.measure}</div>
                    {t.foerderung && (
                      <div className="text-sm font-bold text-electric font-mono">
                        {t.foerderung} Förderung
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-ink-ghost">
            Bewertungen auf Google · IBT Ingenieurbüro Tonn
          </p>
        </div>
      </div>
    </section>
  );
}
