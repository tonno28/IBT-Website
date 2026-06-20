"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const nav = [
  {
    label: "Energieberatung",
    href: "/energieberatung",
    sub: [
      { label: "iSFP Sanierungsfahrplan", href: "/energieberatung/isfp" },
      { label: "Förderberatung BEG", href: "/energieberatung/foerderberatung" },
      { label: "Energieausweis", href: "/energieberatung/energieausweis" },
      { label: "Baubegleitung", href: "/energieberatung/baubegleitung" },
      { label: "Effizienzhaus", href: "/energieberatung/effizienzhaus" },
    ],
  },
  {
    label: "Ingenieurleistungen",
    href: "/ingenieurleistungen",
    sub: [
      { label: "Heizlastberechnung", href: "/ingenieurleistungen/heizlast" },
      { label: "Bauteilberechnung", href: "/ingenieurleistungen/bauteil" },
      { label: "Taupunktnachweis", href: "/ingenieurleistungen/taupunkt" },
      { label: "Lüftungskonzept", href: "/ingenieurleistungen/lueftung" },
      { label: "Wärmebrücken", href: "/ingenieurleistungen/waermebruecken" },
    ],
  },
  { label: "Förderrechner", href: "/foerderrechner" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-zinc-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group rounded-lg transition-opacity hover:opacity-90"
            aria-label="IBT Ingenieurbüro Tonn — Startseite"
          >
            <Logo size="sm" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) =>
              item.sub ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`btn-ghost text-sm ${
                      pathname.startsWith(item.href)
                        ? "text-zinc-primary"
                        : ""
                    }`}
                  >
                    {item.label}
                    <svg
                      className="w-3 h-3 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  {activeDropdown === item.href && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className="bg-bg-card border border-zinc-border rounded-xl shadow-xl overflow-hidden">
                        {item.sub.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-2.5 text-sm text-zinc-secondary hover:text-zinc-primary hover:bg-bg-hover transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`btn-ghost text-sm ${
                    pathname === item.href ? "text-zinc-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/kontakt" className="btn-primary ml-2 text-sm py-2">
              Beratung anfragen
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-zinc-secondary hover:text-zinc-primary hover:bg-bg-card transition-colors"
            aria-label="Menü öffnen"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-bg-card border-t border-zinc-border">
          <div className="px-4 py-4 space-y-1">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname.startsWith(item.href)
                      ? "text-amber bg-amber/10"
                      : "text-zinc-secondary hover:text-zinc-primary hover:bg-bg-hover"
                  }`}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-3 py-1.5 rounded-md text-xs text-zinc-muted hover:text-zinc-secondary hover:bg-bg-hover transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-zinc-border">
              <Link href="/kontakt" className="btn-primary w-full justify-center">
                Kostenlose Erstberatung
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
