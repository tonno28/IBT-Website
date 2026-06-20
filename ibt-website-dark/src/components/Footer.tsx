import Link from "next/link";

const leistungen = [
  { label: "iSFP Sanierungsfahrplan",  href: "/energieberatung/isfp" },
  { label: "Förderberatung BEG",        href: "/energieberatung/foerderberatung" },
  { label: "Energieausweis",            href: "/energieberatung/energieausweis" },
  { label: "Baubegleitung",             href: "/energieberatung/baubegleitung" },
  { label: "Heizlastberechnung",        href: "/ingenieurleistungen/heizlast" },
  { label: "Bauteilberechnung",         href: "/ingenieurleistungen/bauteil" },
  { label: "Taupunktnachweis",          href: "/ingenieurleistungen/taupunkt" },
  { label: "Lüftungskonzept",           href: "/ingenieurleistungen/lueftung" },
];

const regions = [
  { label: "Energieberater Köln",      href: "/region/koeln" },
  { label: "Energieberater Bonn",      href: "/region/bonn" },
  { label: "Energieberater Rheinbach", href: "/region/rheinbach" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line-dim mt-0">
      {/* Top rule glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="container-max section-pad pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-8 h-8 shrink-0">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <polygon points="16,2 30,28 2,28" stroke="#06d6a0" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                  <line x1="16" y1="14" x2="16" y2="22" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="16" cy="11" r="1.5" fill="#f59e0b"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base tracking-[0.15em] text-ink-bright">IBT</span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink-muted">Ingenieurbüro Tonn</span>
              </div>
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed mb-5">
              Energieberatung und Ingenieurleistungen aus einer Hand.
              Qualifiziert nach §88 GEG, dena-gelistet, BAFA/KfW-akkreditiert.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge-electric">dena-gelistet</span>
              <span className="badge-warm">BAFA/KfW</span>
              <span className="badge-electric">§88 GEG</span>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-display font-semibold text-ink-bright text-sm tracking-wide mb-5">
              Leistungen
            </h3>
            <ul className="space-y-2.5">
              {leistungen.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink-muted hover:text-electric transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Region + Tools */}
          <div>
            <h3 className="font-display font-semibold text-ink-bright text-sm tracking-wide mb-5">Region</h3>
            <ul className="space-y-2.5 mb-8">
              {regions.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-sm text-ink-muted hover:text-electric transition-colors">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display font-semibold text-ink-bright text-sm tracking-wide mb-5">Tools</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/foerderrechner" className="text-sm text-ink-muted hover:text-electric transition-colors">
                  BEG-Förderrechner
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-ink-muted hover:text-electric transition-colors">
                  Blog &amp; Ratgeber
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-display font-semibold text-ink-bright text-sm tracking-wide mb-5">Kontakt</h3>
            <div className="space-y-3 text-sm text-ink-muted mb-6">
              <div>
                <div className="text-ink-body font-medium">Jonas Tonn</div>
                <div>IBT Ingenieurbüro Tonn</div>
              </div>
              <a href="mailto:info@ibt-tonn.de" className="block hover:text-electric transition-colors">
                info@ibt-tonn.de
              </a>
              <a href="tel:+4922514839" className="block hover:text-electric transition-colors">
                +49 (0) 2251 48 39
              </a>
              <div className="font-mono text-xs text-ink-ghost tracking-wide">
                Rheinbach / Köln / Bonn
              </div>
            </div>
            <Link href="/kontakt" className="btn-electric text-sm py-2.5 px-5">
              Beratung anfragen
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-line-dim mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-ink-ghost">
            © {new Date().getFullYear()} IBT Ingenieurbüro Tonn · Jonas Tonn
          </div>
          <div className="flex gap-6 font-mono text-xs text-ink-ghost">
            <Link href="/impressum" className="hover:text-ink-muted transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-ink-muted transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
