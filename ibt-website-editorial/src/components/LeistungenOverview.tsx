import Link from "next/link";
import Reveal from "./Reveal";
import Icon, { type IconName } from "./Icon";

const pillars: {
  href: string;
  variant: "teal" | "amber";
  icon: IconName;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  cta: string;
}[] = [
  {
    href: "/energieberatung",
    variant: "teal",
    icon: "house",
    eyebrow: "Energieberatung",
    title: "Für Eigentümer & Wohngebäude",
    description:
      "iSFP, Förderberatung BEG, Energieausweis und Baubegleitung. Von der Erstberatung bis zur ausgezahlten Förderung.",
    points: ["Bis 80 % Förderung", "dena-gelistet, BAFA/KfW-akkreditiert"],
    cta: "Zur Energieberatung",
  },
  {
    href: "/ingenieurleistungen",
    variant: "amber",
    icon: "ruler",
    eyebrow: "Ingenieurleistungen",
    title: "Für Handwerk & Planung",
    description:
      "Heizlast, U-Werte, Taupunkt und Lüftungskonzepte nach DIN/EN-Normen. Kurzfristig lieferbar für Ihren Auftrag.",
    points: ["Normgerechte Unterlagen", "Für Heizungsbauer, Architekten, Hausverwaltungen"],
    cta: "Zu den Ingenieurleistungen",
  },
];

export default function LeistungenOverview() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max">
        <Reveal className="text-center mb-14">
          <p className="section-label">Leistungen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary mb-4">
            Zwei Säulen. Ein Ansprechpartner.
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-muted">
            Energieberater und Ingenieur in einer Person: die Schnittstelle zwischen
            Förderung, Bauphysik und ausführendem Handwerk.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.href} variant={i === 0 ? "left" : "right"}>
              <Link
                href={p.href}
                className={`card-hover group flex h-full flex-col gap-5 p-8 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 ${
                  p.variant === "teal" ? "hover:border-teal-dark/40" : "hover:border-amber/40"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${
                    p.variant === "teal"
                      ? "bg-teal-dark/15 text-teal-light ring-teal-dark/20"
                      : "bg-amber/10 text-amber ring-amber/20"
                  }`}
                >
                  <Icon name={p.icon} className="w-6 h-6" />
                </div>

                <div>
                  <p
                    className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
                      p.variant === "teal" ? "text-teal-light" : "text-amber"
                    }`}
                  >
                    {p.eyebrow}
                  </p>
                  <h3 className="text-xl font-semibold text-zinc-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-zinc-muted leading-relaxed">{p.description}</p>
                </div>

                <ul className="space-y-1.5">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-zinc-secondary">
                      <span
                        className={`h-1 w-1 rounded-full shrink-0 ${
                          p.variant === "teal" ? "bg-teal-light" : "bg-amber"
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <span
                  className={`mt-auto pt-4 border-t border-zinc-border text-sm font-medium ${
                    p.variant === "teal" ? "text-teal-light" : "text-amber"
                  }`}
                >
                  {p.cta} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
