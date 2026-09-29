"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/faq";

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
              <div key={faq.question} className="card-base overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-antwort-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-zinc-primary">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-4 h-4 shrink-0 text-accent transition-transform duration-200 ${
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
                {/* Antwort steht immer im HTML (Suchmaschinen, Screenreader), nur die
                    Sichtbarkeit wird geschaltet. */}
                <div
                  id={`faq-antwort-${i}`}
                  hidden={!isOpen}
                  className="px-5 pb-4 animate-fade-in"
                >
                  <p className="text-sm text-zinc-muted leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
