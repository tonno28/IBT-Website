"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  // Pointer parallax on the accent glow (fine pointers only).
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Blueprint grid backdrop */}
      <div className="absolute inset-0 grid-blueprint opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Parallax accent glow */}
      <div
        ref={glowRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full bg-teal-dark/15 blur-[130px] pointer-events-none transition-transform duration-300 ease-out"
      />
      <div className="absolute bottom-1/4 right-1/5 w-[320px] h-[320px] rounded-full bg-amber/10 blur-[90px] pointer-events-none animate-float-slow" />

      {/* Slow rotating technical ring for depth */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full border border-zinc-border/40 animate-spin-slow pointer-events-none hidden md:block" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-zinc-border/30 pointer-events-none hidden md:block" />

      <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card/80 backdrop-blur-sm border border-zinc-border text-xs font-medium text-zinc-secondary mb-8 animate-fade-in">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-teal-light opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-light" />
          </span>
          dena-gelistet · BAFA/KfW-akkreditiert · §88 GEG
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-zinc-primary leading-[1.05] tracking-tight mb-6">
          Energieberatung
          <br />
          <span className="text-gradient-teal">und Ingenieur&shy;leistungen</span>
          <br />
          <span className="text-zinc-secondary">aus einer Hand.</span>
        </h1>

        {/* Subline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-muted leading-relaxed mb-10">
          Von der Förderantragstellung bis zur technischen Berechnung —
          Jonas Tonn begleitet Ihr Sanierungsprojekt vollständig. Region Köln / Bonn / Rheinbach.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/energieberatung" className="btn-primary text-base px-8 py-3.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Energieberatung
          </Link>
          <Link href="/ingenieurleistungen" className="btn-secondary text-base px-8 py-3.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Ingenieurleistungen
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-border bg-bg-card/50 backdrop-blur-sm px-6 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 divide-zinc-border">
            {[
              { value: "70 %", label: "max. BEG-Förderung" },
              { value: "§88", label: "GEG-qualifiziert" },
              { value: "BAFA", label: "& KfW akkreditiert" },
              { value: "dena", label: "Expertenliste" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="stat-num text-2xl text-amber">{s.value}</span>
                <span className="text-xs text-zinc-muted mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-hint">
        <span className="text-[10px] tracking-[0.25em] uppercase">Mehr erfahren</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
