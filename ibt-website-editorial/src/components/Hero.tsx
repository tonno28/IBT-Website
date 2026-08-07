"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// Hero visual — custom 3D render + exploded-view animation, generated with
// Higgsfield (Nano Banana Pro / MiniMax H3). Hotlinked from the Higgsfield CDN
// for the preview; download and move to /public/hero/ before go-live.
const HERO_POSTER =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3H3LMlSrmsgrEZPXbtNJId4ElQH/hf_20260807_094634_27521eb3-be84-4f82-b2f5-cd52b1916219.png";
const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3H3LMlSrmsgrEZPXbtNJId4ElQH/hf_20260807_095154_1497b83f-13ac-4fbd-8d6e-18b0773ccca8.mp4";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  // Respect reduced motion: stop the hero animation, keep the poster frame.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Blueprint grid backdrop */}
      <div className="absolute inset-0 grid-blueprint opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Parallax accent glow */}
      <div
        ref={glowRef}
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full bg-teal-dark/10 blur-[130px] pointer-events-none transition-transform duration-300 ease-out"
      />
      <div className="absolute bottom-1/4 right-1/5 w-[320px] h-[320px] rounded-full bg-amber/10 blur-[90px] pointer-events-none animate-float-slow" />

      <div className="relative container-max w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card/80 backdrop-blur-sm border border-zinc-border text-xs font-medium text-zinc-secondary mb-8 animate-fade-in">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-light opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-light" />
              </span>
              dena-gelistet · BAFA/KfW-akkreditiert · §88 GEG
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-[1.05] tracking-tight mb-6">
              Ihre Sanierung.
              <br />
              <span className="text-gradient-teal">Bis zu 80 % gefördert.</span>
              <br />
              <span className="text-zinc-secondary">Geplant vom Ingenieur.</span>
            </h1>

            {/* Subline */}
            <p className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-zinc-muted leading-relaxed mb-10">
              Von der Förderantragstellung bis zur technischen Berechnung —
              Jonas Tonn begleitet Ihr Sanierungsprojekt vollständig. Region
              Köln / Aachen / Düren.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/energieberatung" className="btn-primary text-base px-8 py-3.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Energieberatung
              </Link>
              <Link href="/foerderrechner" className="btn-secondary text-base px-8 py-3.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Förderrechner 2026
              </Link>
            </div>

            {/* Stats bar */}
            <div className="mx-auto lg:mx-0 max-w-2xl rounded-2xl border border-zinc-border bg-bg-card/50 backdrop-blur-sm px-6 py-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 divide-zinc-border">
                {[
                  { value: "80 %", label: "max. Heizungsförderung" },
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

          {/* Hero visual: house dissolving into its energy components */}
          <div className="relative order-first lg:order-none">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover select-none pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={HERO_POSTER}
              aria-label="3D-Animation: Ein Einfamilienhaus zerlegt sich in seine energetischen Komponenten — Dach mit Photovoltaik, Dämmung, Fenster und Wärmepumpe"
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
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
