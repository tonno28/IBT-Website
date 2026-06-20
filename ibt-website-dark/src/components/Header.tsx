"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Energieberatung",
    href: "/energieberatung",
    sub: [
      { label: "iSFP Sanierungsfahrplan",  href: "/energieberatung/isfp" },
      { label: "Förderberatung BEG",        href: "/energieberatung/foerderberatung" },
      { label: "Energieausweis",            href: "/energieberatung/energieausweis" },
      { label: "Baubegleitung",             href: "/energieberatung/baubegleitung" },
      { label: "Effizienzhaus",             href: "/energieberatung/effizienzhaus" },
    ],
  },
  {
    label: "Ingenieurleistungen",
    href: "/ingenieurleistungen",
    sub: [
      { label: "Heizlastberechnung",        href: "/ingenieurleistungen/heizlast" },
      { label: "Bauteilberechnung",         href: "/ingenieurleistungen/bauteil" },
      { label: "Taupunktnachweis",          href: "/ingenieurleistungen/taupunkt" },
      { label: "Lüftungskonzept",           href: "/ingenieurleistungen/lueftung" },
      { label: "Wärmebrücken",              href: "/ingenieurleistungen/waermebruecken" },
    ],
  },
  { label: "Förderrechner", href: "/foerderrechner" },
  { label: "Über mich",    href: "/ueber-mich" },
];

export default function Header() {
  const [open, setOpen]                   = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setActiveDropdown(null); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void/90 backdrop-blur-2xl border-b border-line-dim"
          : "bg-transparent"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo: pure type mark ── */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Geometric mark */}
            <div className="relative w-8 h-8 shrink-0">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <polygon points="16,2 30,28 2,28" stroke="#06d6a0" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                <line x1="16" y1="14" x2="16" y2="22" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="11" r="1.5" fill="#f59e0b"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg tracking-[0.15em] text-ink-bright group-hover:text-electric transition-colors">
                IBT
              </span>
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-muted">
                Ingenieurbüro Tonn
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) =>
              item.sub ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`btn-ghost px-4 py-2 rounded-lg flex items-center gap-1.5 ${
                      pathname.startsWith(item.href) ? "text-ink-bright" : ""
                    }`}
                  >
                    {item.label}
                    <svg className="w-3 h-3 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {activeDropdown === item.href && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                      <div className="bg-card/98 backdrop-blur-2xl border border-line-mid rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
                        <div className="p-1.5">
                          {item.sub.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm text-ink-body hover:text-ink-bright hover:bg-raised transition-all"
                            >
                              <span className="w-1 h-1 rounded-full bg-electric/60 shrink-0" />
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`btn-ghost px-4 py-2 rounded-lg ${
                    pathname === item.href ? "text-ink-bright" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/kontakt" className="btn-electric text-sm py-2.5 px-6">
              Beratung anfragen
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-xl border border-line-mid text-ink-muted hover:text-ink-bright hover:border-line-bright transition-colors"
            aria-label="Menü"
          >
            {open
              ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-2xl border-t border-line-dim">
          <div className="px-4 py-4 space-y-0.5">
            {navLinks.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname.startsWith(item.href)
                      ? "text-electric bg-electric/8 border border-electric/15"
                      : "text-ink-body hover:text-ink-bright hover:bg-raised"
                  }`}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <div className="ml-5 mt-0.5 mb-2 space-y-0.5">
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-ink-muted hover:text-ink-body transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-electric/40" />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-line-dim">
              <Link href="/kontakt" className="btn-electric w-full justify-center">
                Kostenlose Erstberatung
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
