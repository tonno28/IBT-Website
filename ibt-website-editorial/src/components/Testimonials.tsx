import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

/**
 * Wortgetreu aus den Google-Rezensionen von IBT übernommen (Stand 17.09.2026).
 * Neue Rezensionen hier anhängen. Nichts umformulieren, nur kürzen mit „…“,
 * wenn es sein muss. Ort und Rolle nur eintragen, wenn sie bekannt sind.
 */
interface Testimonial {
  text: string;
  author: string;
  category: "energie" | "technik";
  measure: string;
  location?: string;
  role?: string;
  foerderung?: string;
}

const testimonials: Testimonial[] = [
  {
    text: "In der Vergangenheit haben wir Heizlast und Datensatz für den hydraulischen Abgleich immer selber gemacht. Es kostet uns im Tagesgeschäft aber einfach zu viel Zeit. Deswegen geben wir den Auftrag für Heizlast und Datensatz für hydraulischen Abgleich, seit einiger Zeit ans Ingenieurbüro Jonas Tonn. Die gewünschten Berechnungen erhalten wir meist schon am nächsten oder übernächsten Tag zu einem fairen Preis. Auch Bestandsaufnahmen vor Ort erfolgen sehr zeitnah. Ingenieurbüro Tonn ist für uns ein sehr guter und zuverlässiger Netzwerkpartner.",
    author: "Darius Dolfen",
    role: "Heizungsbau",
    measure: "Heizlast + hydraulischer Abgleich",
    category: "technik",
  },
  {
    text: "Für den Austausch unserer alten Haustür hat uns Vinlux das Ingenieurbüro Tonn empfohlen. Herr Tonn hat uns umfassend und fundiert zu den verschiedenen Fördermöglichkeiten beraten sowie die Beantragung der BEG-Förderung fachkundig betreut. Dank seiner professionellen Unterstützung lief die administrative Abwicklung reibungslos und wir konnten erfolgreich eine Rückerstattung von 15 % der Gesamtkosten realisieren. Wir sind mit der Zusammenarbeit außerordentlich zufrieden und empfehlen das Ingenieurbüro Tonn sehr gerne weiter.",
    author: "Melanie Marquardt",
    measure: "Haustür-Austausch",
    foerderung: "15 %",
    category: "energie",
  },
];

interface TestimonialsProps {
  /** Which subset to show, pillar pages show only their own category. */
  filter?: "all" | "energie" | "technik";
  title?: string;
}

export default function Testimonials({ filter = "all", title = "Was Kunden sagen" }: TestimonialsProps) {
  const items = filter === "all" ? testimonials : testimonials.filter((t) => t.category === filter);

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max">
        <Reveal className="text-center mb-14">
          <p className="section-label">Kundenstimmen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary mb-4">
            {title}
          </h2>
          <p className="max-w-xl mx-auto text-zinc-muted">
            Echte Ergebnisse, keine Hochglanz-Versprechen.
          </p>
        </Reveal>

        <div className={`grid grid-cols-1 gap-6 ${items.length >= 3 ? "md:grid-cols-3" : items.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "max-w-xl mx-auto"}`}>
          {items.map((t, i) => (
            <Reveal key={i} variant="up" delay={i * 90}>
            <TiltCard max={5} className="h-full">
            <div className="card-base tilt-layer p-6 flex flex-col gap-4 h-full">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-zinc-secondary leading-relaxed flex-1">
                „{t.text}“
              </blockquote>

              {/* Footer */}
              <div className="pt-3 border-t border-zinc-border">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-semibold text-zinc-primary">{t.author}</div>
                    {(t.location || t.role) && (
                      <div className="text-xs text-zinc-muted">
                        {[t.location, t.role].filter(Boolean).join(" · ")}
                      </div>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-zinc-hint">{t.measure}</div>
                    {t.foerderung && (
                      <div className="stat-num text-sm font-semibold text-teal-dark">
                        {t.foerderung} Förderung
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Google rating note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-hint">
            Bewertungen auf Google · IBT Ingenieurbüro Tonn
          </p>
        </div>
      </div>
    </section>
  );
}
