import Link from "next/link";
import Reveal from "./Reveal";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Bereit für Ihre Sanierung?",
  description = "Kostenlose Erstberatung: Ich schaue mir Ihre Situation an und zeige Ihnen, welche Förderung realistisch ist. Ohne Verpflichtung.",
  primaryLabel = "Jetzt Erstberatung anfragen",
  primaryHref = "/kontakt",
  secondaryLabel = "Anrufen: 0152 31060247",
  secondaryHref = "tel:+4915231060247",
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="container-max">
        <Reveal variant="scale" className="relative overflow-hidden rounded-2xl bg-bg-accent border border-teal-dark/30 p-8 sm:p-12">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-dark/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-amber/5 blur-[60px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text */}
            <div className="text-center lg:text-left">
              <p className="section-label mb-2">Kostenloser Einstieg</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-primary mb-3">
                {title}
              </h2>
              <p className="text-zinc-muted max-w-lg">{description}</p>

              {/* Trust markers */}
              <div className="flex flex-wrap gap-3 mt-5 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5 text-xs text-zinc-muted">
                  <svg className="w-4 h-4 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kostenlos & unverbindlich
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-muted">
                  <svg className="w-4 h-4 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Antwort innerhalb 24h
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-muted">
                  <svg className="w-4 h-4 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  dena-zertifiziert
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link href={primaryHref} className="btn-primary text-base px-8 py-3.5 whitespace-nowrap">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="btn-secondary text-sm py-3 whitespace-nowrap">
                {secondaryLabel}
              </Link>
              <a
                href="https://wa.me/4915231060247"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm py-3 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2m0 1.67c2.22 0 4.31.87 5.88 2.44a8.26 8.26 0 0 1 2.43 5.8c0 4.55-3.71 8.25-8.28 8.25a8.3 8.3 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.27-4.4c0-4.56 3.72-8.23 8.23-8.23m-3.79 4.72c-.16 0-.42.06-.65.31s-.87.85-.87 2.08.89 2.41 1.02 2.58 1.75 2.8 4.31 3.82c2.13.85 2.57.68 3.03.64.47-.05 1.5-.61 1.71-1.2s.21-1.1.15-1.2-.24-.16-.5-.28-1.5-.74-1.74-.82-.4-.13-.58.13-.68.82-.83 1-.31.19-.57.06a7.23 7.23 0 0 1-2.13-1.31 7.98 7.98 0 0 1-1.47-1.83c-.15-.26-.02-.4.12-.53.12-.12.26-.31.4-.47.13-.15.17-.26.26-.44.09-.18.04-.34-.02-.47-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.44Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
