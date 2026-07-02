"use client";

import { useState } from "react";
import Reveal from "./Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Warum brauche ich eine Energieberatung?",
    answer:
      "Eine Energieberatung zeigt Ihnen, welche Maßnahmen an Ihrem Gebäude tatsächlich sinnvoll sind, in welcher Reihenfolge sie am meisten bringen und welche Förderung Sie dafür bekommen. Ohne diese Grundlage verschenken Sie häufig Fördergeld oder investieren an der falschen Stelle.",
  },
  {
    question: "Was kostet eine Energieberatung?",
    answer:
      "Das hängt vom Umfang ab, zum Beispiel Energieausweis, iSFP oder vollständige Baubegleitung. In einem kurzen Erstgespräch nenne ich Ihnen einen konkreten Preis für Ihr Vorhaben, unverbindlich und kostenlos.",
  },
  {
    question: "Wie hoch ist die aktuelle Förderung?",
    answer:
      "Die Förderhöhe hängt von Maßnahme, Einkommen und Kombination der Boni ab und ändert sich mit den Förderprogrammen. Nutzen Sie gerne den Förderrechner für eine erste Schätzung, die individuelle Prüfung übernehme ich im Erstgespräch.",
  },
  {
    question: "Wie läuft eine Förderung ab?",
    answer:
      "Grob in vier Schritten: Bestandsaufnahme und Beratung, Erstellung der Unterlagen (zum Beispiel iSFP oder Energieausweis), Antragstellung bei BAFA oder KfW, und Umsetzungsbegleitung bis zum Verwendungsnachweis. Ich übernehme die Antragstellung für Sie.",
  },
  {
    question: "Arbeiten Sie unabhängig von Herstellern?",
    answer:
      "Ja. Ich bin an keinen Hersteller, Handwerksbetrieb oder Anbieter gebunden und erhalte keine Provisionen. Meine Empfehlungen richten sich ausschließlich nach dem, was für Ihr Gebäude technisch und wirtschaftlich sinnvoll ist.",
  },
  {
    question: "In welcher Region sind Sie tätig?",
    answer:
      "Ich berate Sie in der Region Düren, Aachen, Köln und Umgebung, bei Bedarf auch darüber hinaus. Sprechen Sie mich einfach an.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-bg-card border-y border-zinc-border">
      <div className="container-max max-w-3xl">
        <Reveal className="text-center mb-12">
          <p className="section-label">Häufige Fragen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary">
            Gut zu wissen
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} variant="up" delay={i * 60}>
                <div className="card-base overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-zinc-primary">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-4 h-4 shrink-0 text-amber transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4">
                      <p className="text-sm text-zinc-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
