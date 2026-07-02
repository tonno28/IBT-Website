import Link from "next/link";
import Logo from "./Logo";

const leistungen = [
  { label: "iSFP Sanierungsfahrplan", href: "/energieberatung/isfp" },
  { label: "Förderberatung BEG", href: "/energieberatung/foerderberatung" },
  { label: "Energieausweis", href: "/energieberatung/energieausweis" },
  { label: "Baubegleitung", href: "/energieberatung/baubegleitung" },
  { label: "Heizlastberechnung", href: "/ingenieurleistungen/heizlast" },
  { label: "Bauteilberechnung", href: "/ingenieurleistungen/bauteil" },
  { label: "Taupunktnachweis", href: "/ingenieurleistungen/taupunkt" },
  { label: "Lüftungskonzept", href: "/ingenieurleistungen/lueftung" },
];

const regions = [
  { label: "Energieberater Köln", href: "/region/koeln" },
  { label: "Energieberater Aachen", href: "/region/aachen" },
  { label: "Energieberater Düren", href: "/region/duren" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-border bg-bg-card mt-20">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="IBT Ingenieurbüro Tonn — Startseite">
              <Logo size="sm" />
            </Link>
            <p className="text-sm text-zinc-muted leading-relaxed mb-4">
              Energieberatung und Ingenieurleistungen aus einer Hand. Qualifiziert nach §88 GEG,
              dena-gelistet, BAFA/KfW-akkreditiert.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge-teal">dena-gelistet</span>
              <span className="badge-amber">BAFA/KfW</span>
              <span className="badge-teal">§88 GEG</span>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-primary mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {leistungen.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-muted hover:text-zinc-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Region */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-primary mb-4">Region</h3>
            <ul className="space-y-2">
              {regions.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-zinc-muted hover:text-zinc-primary transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-zinc-primary mb-4">Mehr</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-zinc-muted hover:text-zinc-primary transition-colors"
                  >
                    Blog &amp; Ratgeber
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-primary mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm text-zinc-muted">
              <div>
                <div className="text-zinc-secondary font-medium">Jonas Tonn</div>
                <div>IBT Ingenieurbüro Tonn</div>
              </div>
              <div>
                <a
                  href="mailto:info@ib-tonn.de"
                  className="hover:text-amber transition-colors"
                >
                  info@ib-tonn.de
                </a>
              </div>
              <div>
                <a
                  href="tel:+4915231060247"
                  className="hover:text-amber transition-colors"
                >
                  0152 31060247
                </a>
              </div>
              <div className="text-zinc-hint text-xs">
                Köln / Aachen / Düren
              </div>
            </div>
            <div className="flex flex-col gap-2.5 mt-5">
              <Link href="/kontakt" className="btn-primary text-sm py-2.5">
                Beratung anfragen
              </Link>
              <a
                href="https://wa.me/4915231060247"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-2.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2m0 1.67c2.22 0 4.31.87 5.88 2.44a8.26 8.26 0 0 1 2.43 5.8c0 4.55-3.71 8.25-8.28 8.25a8.3 8.3 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.27-4.4c0-4.56 3.72-8.23 8.23-8.23m-3.79 4.72c-.16 0-.42.06-.65.31s-.87.85-.87 2.08.89 2.41 1.02 2.58 1.75 2.8 4.31 3.82c2.13.85 2.57.68 3.03.64.47-.05 1.5-.61 1.71-1.2s.21-1.1.15-1.2-.24-.16-.5-.28-1.5-.74-1.74-.82-.4-.13-.58.13-.68.82-.83 1-.31.19-.57.06a7.23 7.23 0 0 1-2.13-1.31 7.98 7.98 0 0 1-1.47-1.83c-.15-.26-.02-.4.12-.53.12-.12.26-.31.4-.47.13-.15.17-.26.26-.44.09-.18.04-.34-.02-.47-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.44Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-hint">
          <div>
            © {new Date().getFullYear()} IBT Ingenieurbüro Tonn · Jonas Tonn · Alle Rechte vorbehalten
          </div>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-zinc-muted transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-zinc-muted transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
