"use client";

import { useEffect, useState, type CSSProperties } from "react";

/**
 * Sanierung im Zeitraffer — animierter Schnitt durch ein Bestandsgebäude.
 *
 * Erzählt den Ablauf, den wir tatsächlich am häufigsten haben:
 * Objekt gekauft → entkernt → Bauschutt raus → neue Hülle → Technik und
 * Boden → Dach → fertig → Blick ins Haus.
 *
 * variant="backdrop"  großflächig und ausgeblichen hinter der Headline
 * variant="feature"   volle Größe mit Beschriftung und Phasenauswahl
 */

export type SanierungsVariant = "backdrop" | "feature";

interface Phase {
  key: string;
  kurz: string;
  titel: string;
  text: string;
  dauer: number;
}

export const PHASEN: Phase[] = [
  {
    key: "bestand",
    kurz: "Bestand",
    titel: "Objekt gekauft",
    text: "Baujahr 1968. Ungedämmt, einfach verglast, Ölkessel im Keller. Energieklasse H.",
    dauer: 4600,
  },
  {
    key: "entkernung",
    kurz: "Entkernung",
    titel: "Alles raus",
    text: "Fenster, Estrich, Altheizung und Dachdeckung werden zurückgebaut — zurück auf den Rohbau.",
    dauer: 4800,
  },
  {
    key: "entsorgung",
    kurz: "Entsorgung",
    titel: "Container kommt",
    text: "Bauschutt getrennt, verladen, abgefahren. Erst danach beginnt der Wiederaufbau.",
    dauer: 5600,
  },
  {
    key: "huelle",
    kurz: "Hülle",
    titel: "Neue Gebäudehülle",
    text: "Dämmung auf Fassade, Dach und Kellerdecke, dazu Fenster mit Dreifachverglasung.",
    dauer: 5000,
  },
  {
    key: "technik",
    kurz: "Technik & Boden",
    titel: "Technik und Boden",
    text: "Wärmepumpe, Flächenheizung, Lüftung mit Wärmerückgewinnung — dann Schicht für Schicht der neue Boden.",
    dauer: 5400,
  },
  {
    key: "dach",
    kurz: "Dach",
    titel: "Das Dach kommt zuletzt",
    text: "Sparren, Aufsparrendämmung, Ziegel — und Photovoltaik auf der Südseite.",
    dauer: 5000,
  },
  {
    key: "fertig",
    kurz: "Fertig",
    titel: "Fertiggestellt",
    text: "Aus Energieklasse H wird ein Effizienzhaus. Von außen sieht man davon am wenigsten.",
    dauer: 4200,
  },
  {
    key: "einblick",
    kurz: "Einblick",
    titel: "Blick ins Haus",
    text: "Deshalb schauen wir hinein: Was zählt, steckt in der Konstruktion — und in der Förderakte.",
    dauer: 6000,
  },
];

/* ------------------------------------------------------------------ *
 * Geometrie
 * ------------------------------------------------------------------ */

const VB = { w: 1440, h: 760 };
const GROUND = 620;
const WALL_L = 520;
const WALL_R = 980;
const WALL_T = 252;
const IN_L = 540;
const IN_R = 960;
const DECK_T = 428; // Oberkante Rohdecke zwischen EG und OG

type P = [number, number];
const RIDGE: P = [750, 120];
const EAVE_L: P = [486, 252];
const EAVE_R: P = [1014, 252];

/** Punkt auf der Geraden durch a und b; t < 0 verlängert über a hinaus */
function entlang(a: P, b: P, t: number): P {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

// Beide Dachflächen laufen ein Stück über den First hinaus, sonst klafft dort eine Kerbe.
const FIRST_L: P = entlang(RIDGE, EAVE_L, -0.055);
const FIRST_R: P = entlang(RIDGE, EAVE_R, -0.055);

/** Nach außen (nach oben) zeigende Normale einer Dachfläche */
function normale(ux: number, uy: number): P {
  const n: P = [-uy, ux];
  return n[1] <= 0 ? n : [uy, -ux];
}

/** Polygon eines Dachbandes zwischen zwei senkrechten Abständen zur Dachfläche */
function band(from: P, to: P, a: number, b: number): string {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const len = Math.hypot(dx, dy);
  const nOut = normale(dx / len, dy / len);
  const pt = (p: P, d: number): P => [p[0] + nOut[0] * d, p[1] + nOut[1] * d];
  const pts = [pt(from, a), pt(to, a), pt(to, b), pt(from, b)];
  return pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
}

/** Ziegelreihen: kurze Striche quer über das Deckungsband */
function courses(from: P, to: P, a: number, b: number, n: number) {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const len = Math.hypot(dx, dy);
  const nOut = normale(dx / len, dy / len);
  return Array.from({ length: n }, (_, i) => {
    const t = (i + 0.5) / n;
    const bx = from[0] + dx * t;
    const by = from[1] + dy * t;
    return {
      x1: bx + nOut[0] * a,
      y1: by + nOut[1] * a,
      x2: bx + nOut[0] * b,
      y2: by + nOut[1] * b,
    };
  });
}

/** Bodenaufbau: Segmente, die von links nach rechts eingebaut werden */
function floorSegments(topY: number, n = 8) {
  const w = (IN_R - IN_L) / n;
  return Array.from({ length: n }, (_, i) => ({ x: IN_L + i * w, w, topY }));
}

const FENSTER_OG = [567, 697, 827];
const FENSTER_EG = [567, 827];
const TUER_X = 697;

/** Bauschutt im Rohbau — feste Positionen, damit das Bild ruhig bleibt */
const SCHUTT: { x: number; y: number; w: number; h: number; r: number }[] = [
  { x: 566, y: 578, w: 46, h: 24, r: -8 },
  { x: 624, y: 588, w: 34, h: 16, r: 6 },
  { x: 672, y: 574, w: 52, h: 28, r: 4 },
  { x: 742, y: 586, w: 30, h: 18, r: -12 },
  { x: 786, y: 576, w: 44, h: 26, r: 9 },
  { x: 852, y: 586, w: 38, h: 18, r: -5 },
  { x: 900, y: 580, w: 30, h: 22, r: 11 },
  { x: 580, y: 400, w: 40, h: 22, r: 7 },
  { x: 662, y: 404, w: 32, h: 18, r: -9 },
  { x: 806, y: 398, w: 46, h: 24, r: 5 },
  { x: 880, y: 406, w: 28, h: 16, r: -6 },
];

// Passend zur Seitenpalette (weiß + kräftiges Grün, siehe tailwind.config.ts)
const FARBEN = {
  ink: "#0f1d15",
  muted: "#5f7166",
  hint: "#8b9c91",
  line: "#cbdad0",
  card: "#ffffff",
  /** Füllung der Innenräume — knapp abgesetzt vom weißen Hintergrund */
  flaeche: "#f6f9f6",
  alt: "#a9b5ad",
  altDunkel: "#7b8a82",
  gruen: "#16a34a",
  teal: "#0b6b3a",
  tealHell: "#22c55e",
  glas: "#a9cfe0",
};

/* ------------------------------------------------------------------ *
 * Animations-Helfer
 * ------------------------------------------------------------------ */

const EASE = "cubic-bezier(.16,1,.3,1)";

function anim(
  show: boolean,
  opts: { delay?: number; dur?: number; from?: string; opacity?: number } = {}
): CSSProperties {
  const { delay = 0, dur = 800, from, opacity = 1 } = opts;
  return {
    opacity: show ? opacity : 0,
    transform: show ? undefined : from,
    transition: `opacity ${dur}ms ${EASE} ${delay}ms, transform ${dur}ms ${EASE} ${delay}ms`,
  };
}

function move(transform: string | undefined, dur = 1400, delay = 0): CSSProperties {
  return {
    transform,
    transition: `transform ${dur}ms ${EASE} ${delay}ms, opacity ${dur}ms ${EASE} ${delay}ms`,
  };
}

/* ------------------------------------------------------------------ *
 * Szene
 * ------------------------------------------------------------------ */

function Szene({ phase, schilder = true }: { phase: number; schilder?: boolean }) {
  const p = phase;

  // Fassadendeckkraft je Phase: geschlossen → aufgeschnitten → geschlossen → Einblick
  const fassade = [1, 0.12, 0.12, 0.34, 0.34, 0.46, 1, 0.18][p] ?? 1;

  const rohbau = p >= 1; // Rohbau/Schnitt sichtbar
  const altesDach = p <= 1;
  const schuttDa = p === 1 || p === 2;
  const lkwX = p <= 1 ? -780 : p === 2 ? 0 : 1560;
  const daemmung = p >= 3;
  const neueFenster = p >= 3;
  const technik = p >= 4;
  const boden = p >= 4;
  const dach = p >= 5;
  const pv = p >= 5;
  const fertig = p >= 6;
  const einblick = p === 7;

  return (
    <svg
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
      role="img"
      aria-label="Animierter Bauablauf einer energetischen Sanierung: Bestandsgebäude, Entkernung, Entsorgung, neue Gebäudehülle, Technik und Boden, Dach, fertiges Effizienzhaus im Schnitt"
    >
      {/* Kamera: nah am Haus — nur für den Container fährt sie zurück */}
      <g
        style={{
          transform: p === 2 ? "scale(1)" : "scale(1.26)",
          transformOrigin: "750px 380px",
          transformBox: "view-box",
          transition: `transform 1600ms ${EASE}`,
        }}
      >
      <defs>
        <linearGradient id="ibt-glas" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={FARBEN.glas} stopOpacity="0.55" />
          <stop offset="100%" stopColor={FARBEN.tealHell} stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="ibt-warm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c07a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e8c07a" stopOpacity="0" />
        </linearGradient>
        <pattern id="ibt-daemm" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 10 L10 0 M-2 2 L2 -2 M8 12 L12 8" stroke={FARBEN.gruen} strokeWidth="1.4" opacity="0.55" />
        </pattern>
      </defs>

      {/* ---------- Gelände ---------- */}
      <line x1="60" y1={GROUND} x2={VB.w - 60} y2={GROUND} stroke={FARBEN.line} strokeWidth="2.5" />
      {Array.from({ length: 34 }, (_, i) => (
        <line
          key={`erde-${i}`}
          x1={70 + i * 40}
          y1={GROUND}
          x2={54 + i * 40}
          y2={GROUND + 16}
          stroke={FARBEN.line}
          strokeWidth="1.4"
          opacity="0.7"
        />
      ))}

      {/* ---------- Rohbau / Schnitt ---------- */}
      <g>
        {/* Außenwände im Schnitt */}
        <rect x={WALL_L} y={WALL_T} width={IN_L - WALL_L} height={GROUND - WALL_T} fill={FARBEN.alt} opacity="0.9" />
        <rect x={IN_R} y={WALL_T} width={WALL_R - IN_R} height={GROUND - WALL_T} fill={FARBEN.alt} opacity="0.9" />
        {/* Rohdecke und Bodenplatte */}
        <rect x={IN_L} y={DECK_T} width={IN_R - IN_L} height={16} fill={FARBEN.alt} opacity="0.9" />
        <rect x={IN_L} y={GROUND - 16} width={IN_R - IN_L} height={16} fill={FARBEN.alt} opacity="0.9" />
        {/* Innenraum */}
        <rect x={IN_L} y={WALL_T} width={IN_R - IN_L} height={DECK_T - WALL_T} fill={FARBEN.flaeche} style={{ opacity: rohbau ? 1 : 0.55, transition: `opacity 900ms ${EASE}` }} />
        <rect x={IN_L} y={DECK_T + 16} width={IN_R - IN_L} height={GROUND - 16 - DECK_T - 16} fill={FARBEN.flaeche} style={{ opacity: rohbau ? 1 : 0.55, transition: `opacity 900ms ${EASE}` }} />
      </g>

      {/* ---------- Neuer Bodenaufbau, Schicht für Schicht ---------- */}
      {[DECK_T - 16, GROUND - 32].map((topY, ebene) =>
        floorSegments(topY).map((s, i) => {
          const delay = ebene * 420 + i * 130;
          return (
            <g key={`boden-${ebene}-${i}`} style={anim(boden, { delay, dur: 620, from: "translateY(-14px)" })}>
              {/* Dämmung */}
              <rect x={s.x} y={s.topY + 8} width={s.w - 1} height={8} fill="url(#ibt-daemm)" />
              <rect x={s.x} y={s.topY + 8} width={s.w - 1} height={8} fill="none" stroke={FARBEN.gruen} strokeWidth="0.8" opacity="0.5" />
              {/* Flächenheizung */}
              <line x1={s.x + 2} y1={s.topY + 5} x2={s.x + s.w - 3} y2={s.topY + 5} stroke={FARBEN.tealHell} strokeWidth="2.4" strokeLinecap="round" />
              {/* Estrich und Belag */}
              <rect x={s.x} y={s.topY} width={s.w - 1} height={3.5} fill={FARBEN.teal} opacity="0.85" />
            </g>
          );
        })
      )}

      {/* ---------- Innenwände ---------- */}
      {[{ x: 800, y: 300, h: 112 }].map((w, i) => (
        <rect
          key={`iw-${i}`}
          x={w.x}
          y={w.y}
          width="10"
          height={w.h}
          fill={FARBEN.line}
          style={anim(technik, { delay: 900 + i * 180, from: "translateY(20px)" })}
        />
      ))}

      {/* ---------- Bauschutt ---------- */}
      {SCHUTT.map((s, i) => {
        // Im Entsorgungs-Schritt fliegt jedes Teil in den Container
        const ziel = `translate(${240 - s.x}px, ${532 - s.y}px)`;
        return (
          <g
            key={`schutt-${i}`}
            style={{
              opacity: schuttDa ? 1 : 0,
              transform: p === 2 ? ziel : undefined,
              transition: `opacity 500ms ${EASE} ${p === 1 ? 300 + i * 70 : i * 60}ms, transform 900ms ${EASE} ${900 + i * 150}ms`,
            }}
          >
            <rect
              x={s.x}
              y={s.y}
              width={s.w}
              height={s.h}
              rx="3"
              fill={FARBEN.altDunkel}
              opacity="0.8"
              transform={`rotate(${s.r} ${s.x + s.w / 2} ${s.y + s.h / 2})`}
            />
          </g>
        );
      })}

      {/* Staub */}
      {[
        { x: 600, y: 520, r: 9 },
        { x: 700, y: 470, r: 6 },
        { x: 820, y: 540, r: 11 },
        { x: 880, y: 470, r: 7 },
        { x: 660, y: 350, r: 8 },
        { x: 860, y: 360, r: 6 },
      ].map((d, i) => (
        <circle
          key={`staub-${i}`}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={FARBEN.hint}
          className="animate-float"
          style={{ ...anim(schuttDa, { delay: i * 120, dur: 900, opacity: 0.28 }), animationDelay: `${i * 0.5}s` }}
        />
      ))}

      {/* ---------- Lüftungsgerät mit Wärmerückgewinnung im OG ---------- */}
      <g style={anim(technik, { delay: 700, dur: 700, from: "translateY(-18px)" })}>
        <rect x="655" y="300" width="40" height="46" rx="5" fill={FARBEN.card} stroke={FARBEN.tealHell} strokeWidth="2.5" />
        <path d="M661 306 L689 340 M689 306 L661 340" stroke={FARBEN.tealHell} strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
        <circle cx="675" cy="323" r="6.5" fill={FARBEN.card} stroke={FARBEN.tealHell} strokeWidth="2.2" />
      </g>

      {/* ---------- Warmes Licht beim Einblick ---------- */}
      <g style={anim(einblick, { delay: 400, dur: 1200 })}>
        <rect x={IN_L} y={WALL_T} width={IN_R - IN_L} height={DECK_T - WALL_T} fill="url(#ibt-warm)" />
        <rect x={IN_L} y={DECK_T + 16} width={IN_R - IN_L} height={GROUND - 32 - DECK_T} fill="url(#ibt-warm)" />
      </g>

      {/* ---------- Einrichtung beim Einblick ---------- */}
      <g stroke={FARBEN.teal} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g style={anim(einblick, { delay: 500, from: "translateY(16px)" })}>
          {/* Sofa und Tisch im EG */}
          <path d="M572 588 v-30 a8 8 0 0 1 8-8 h56 a8 8 0 0 1 8 8 v30" />
          <path d="M572 570 h72" />
          <path d="M676 588 v-18 h48 v18 M690 570 v-6 h20 v6" />
        </g>
        <g style={anim(einblick, { delay: 640, from: "translateY(16px)" })}>
          {/* Küchenzeile */}
          <path d="M790 588 v-34 h96 v34 M790 566 h96 M830 566 v22" />
        </g>
        <g style={anim(einblick, { delay: 780, from: "translateY(16px)" })}>
          {/* Bett und Schrank im OG */}
          <path d="M566 412 v-26 h84 v26 M566 396 h84 M578 386 v-10 h24 v10" />
          <path d="M840 412 v-58 h56 v58 M868 354 v58" />
        </g>
        <g style={anim(einblick, { delay: 900, from: "translateY(16px)" })}>
          {/* Treppe */}
          <path d="M706 588 v-22 h22 v-22 h22 v-22 h22 v-22" />
        </g>
      </g>

      {/* ---------- Fassade (Vorderseite) ---------- */}
      <g style={{ opacity: fassade, transition: `opacity 1100ms ${EASE}` }}>
        <rect x={IN_L} y={WALL_T} width={IN_R - IN_L} height={GROUND - WALL_T} fill={FARBEN.card} />
        <rect
          x={IN_L}
          y={WALL_T}
          width={IN_R - IN_L}
          height={GROUND - WALL_T}
          fill="none"
          stroke={FARBEN.line}
          strokeWidth="2"
        />

        {/* Risse im Altputz */}
        <g style={anim(p === 0, { dur: 500 })}>
          <path d="M600 300 l14 34 l-9 22 l16 30" fill="none" stroke={FARBEN.altDunkel} strokeWidth="1.6" opacity="0.5" />
          <path d="M886 500 l-12 28 l8 26" fill="none" stroke={FARBEN.altDunkel} strokeWidth="1.6" opacity="0.5" />
        </g>

        {/* Alte Fenster */}
        <g style={anim(p === 0, { dur: 500, from: "translateY(26px)" })}>
          {FENSTER_OG.map((x) => (
            <g key={`af-og-${x}`}>
              <rect x={x + 8} y={300} width="70" height="82" fill={FARBEN.altDunkel} opacity="0.35" stroke={FARBEN.altDunkel} strokeWidth="2" />
              <line x1={x + 43} y1={300} x2={x + 43} y2={382} stroke={FARBEN.altDunkel} strokeWidth="2" />
              <line x1={x + 8} y1={341} x2={x + 78} y2={341} stroke={FARBEN.altDunkel} strokeWidth="2" />
            </g>
          ))}
          {FENSTER_EG.map((x) => (
            <g key={`af-eg-${x}`}>
              <rect x={x + 8} y={480} width="70" height="90" fill={FARBEN.altDunkel} opacity="0.35" stroke={FARBEN.altDunkel} strokeWidth="2" />
              <line x1={x + 43} y1={480} x2={x + 43} y2={570} stroke={FARBEN.altDunkel} strokeWidth="2" />
            </g>
          ))}
          <rect x={TUER_X + 6} y={476} width="80" height={GROUND - 476} fill={FARBEN.altDunkel} opacity="0.45" stroke={FARBEN.altDunkel} strokeWidth="2" />
        </g>

        {/* Neue Fenster */}
        <g>
          {FENSTER_OG.map((x, i) => (
            <g key={`nf-og-${x}`} style={anim(neueFenster, { delay: 260 + i * 170, from: "translateY(-40px)" })}>
              <rect x={x} y={288} width="86" height="104" rx="2" fill="url(#ibt-glas)" stroke={FARBEN.teal} strokeWidth="3" />
              <line x1={x + 43} y1={288} x2={x + 43} y2={392} stroke={FARBEN.teal} strokeWidth="2" />
            </g>
          ))}
          {FENSTER_EG.map((x, i) => (
            <g key={`nf-eg-${x}`} style={anim(neueFenster, { delay: 700 + i * 170, from: "translateY(-40px)" })}>
              <rect x={x} y={468} width="86" height="118" rx="2" fill="url(#ibt-glas)" stroke={FARBEN.teal} strokeWidth="3" />
              <line x1={x + 43} y1={468} x2={x + 43} y2={586} stroke={FARBEN.teal} strokeWidth="2" />
            </g>
          ))}
          <g style={anim(neueFenster, { delay: 1040, from: "translateY(-40px)" })}>
            <rect x={TUER_X} y={468} width="92" height={GROUND - 468} rx="2" fill={FARBEN.teal} opacity="0.9" />
            <circle cx={TUER_X + 76} cy={548} r="4" fill={FARBEN.card} />
          </g>
        </g>

        {/* Neuer Putz auf Dämmung */}
        <rect
          x={IN_L}
          y={WALL_T}
          width={IN_R - IN_L}
          height={GROUND - WALL_T}
          fill="none"
          stroke={FARBEN.gruen}
          strokeWidth="2.5"
          style={anim(daemmung, { delay: 200, dur: 900, opacity: 0.5 })}
        />
      </g>

      {/* ---------- Dämmung auf den Außenwänden ---------- */}
      {[
        { x: WALL_L - 18, key: "links" },
        { x: WALL_R, key: "rechts" },
      ].map((seite, si) =>
        Array.from({ length: 6 }, (_, i) => {
          const h = (GROUND - WALL_T) / 6;
          const from = si === 0 ? "translateX(-90px)" : "translateX(90px)";
          return (
            <g key={`d-${seite.key}-${i}`} style={anim(daemmung, { delay: i * 120 + si * 90, dur: 700, from })}>
              <rect x={seite.x} y={WALL_T + i * h} width="18" height={h - 1.5} fill="url(#ibt-daemm)" />
              <rect
                x={seite.x}
                y={WALL_T + i * h}
                width="18"
                height={h - 1.5}
                fill="none"
                stroke={FARBEN.gruen}
                strokeWidth="1.2"
                opacity="0.6"
              />
            </g>
          );
        })
      )}

      {/* ---------- Altes Dach: erst fliegt die Deckung, dann der Rest ---------- */}
      <g>
        {/* Alte Sparren — bleiben bis zur Entsorgung stehen */}
        <g style={anim(altesDach, { dur: 700, from: "translateY(-30px)" })}>
          <polygon points={band(FIRST_L, EAVE_L, 2, 15)} fill={FARBEN.alt} opacity="0.95" />
          <polygon points={band(FIRST_R, EAVE_R, 2, 15)} fill={FARBEN.alt} opacity="0.95" />
        </g>
        {/* Alte Dachdeckung — verschwindet mit der Entkernung */}
        <g style={anim(p === 0, { dur: 600, from: "translateY(-26px)" })}>
          <polygon points={band(FIRST_L, EAVE_L, 15, 30)} fill={FARBEN.altDunkel} opacity="0.85" />
          <polygon points={band(FIRST_R, EAVE_R, 15, 30)} fill={FARBEN.altDunkel} opacity="0.85" />
          {/* fehlende Ziegel */}
          <polygon points={band([640, 174], [612, 188], 16, 29)} fill={FARBEN.card} opacity="0.9" />
          <polygon points={band([880, 185], [908, 199], 16, 29)} fill={FARBEN.card} opacity="0.9" />
        </g>
      </g>

      {/* ---------- Neues Dach: Sparren, Aufsparrendämmung, Ziegel ---------- */}
      <g>
        {/* Sparren */}
        <g style={anim(dach, { delay: 0, dur: 700, from: "translateY(-24px)" })}>
          <polygon points={band(FIRST_L, EAVE_L, 0, 12)} fill={FARBEN.line} />
          <polygon points={band(FIRST_R, EAVE_R, 0, 12)} fill={FARBEN.line} />
        </g>
        {/* Aufsparrendämmung */}
        <g style={anim(dach, { delay: 500, dur: 700, from: "translateY(-24px)" })}>
          <polygon points={band(FIRST_L, EAVE_L, 12, 30)} fill="url(#ibt-daemm)" stroke={FARBEN.gruen} strokeWidth="1.2" opacity="0.9" />
          <polygon points={band(FIRST_R, EAVE_R, 12, 30)} fill="url(#ibt-daemm)" stroke={FARBEN.gruen} strokeWidth="1.2" opacity="0.9" />
        </g>
        {/* Ziegel, Reihe für Reihe vom First nach unten */}
        {([[FIRST_L, EAVE_L] as [P, P], [FIRST_R, EAVE_R] as [P, P]]).map(([a, b], si) => {
          const n = 10;
          const breite = Math.hypot(b[0] - a[0], b[1] - a[1]) / n + 1.5;
          return (
            <g key={`ziegel-${si}`}>
              {courses(a, b, 30, 43, n).map((c, i) => (
                <line
                  key={`z-${i}`}
                  x1={c.x1}
                  y1={c.y1}
                  x2={c.x2}
                  y2={c.y2}
                  stroke={FARBEN.teal}
                  strokeWidth={breite}
                  strokeLinecap="butt"
                  style={anim(dach, { delay: 1000 + i * 100, dur: 460, from: "translateY(-14px)", opacity: 0.92 })}
                />
              ))}
              {/* Fugen zwischen den Reihen */}
              {courses(a, b, 30, 43, n).map((c, i) => (
                <line
                  key={`f-${i}`}
                  x1={c.x1 + (c.x1 - c.x2) * 0.02}
                  y1={c.y1}
                  x2={c.x2}
                  y2={c.y2}
                  stroke={FARBEN.card}
                  strokeWidth="1.5"
                  style={anim(dach, { delay: 1100 + i * 100, dur: 460, opacity: 0.35 })}
                />
              ))}
            </g>
          );
        })}
      </g>

      {/* ---------- Photovoltaik, flach auf der Dachfläche ---------- */}
      <g transform="translate(816 151) rotate(26.565)">
        {Array.from({ length: 3 }, (_, i) => (
          <rect
            key={`pv-${i}`}
            x={4 + i * 58}
            y={-56}
            width="54"
            height="13"
            rx="1.5"
            fill={FARBEN.teal}
            stroke={FARBEN.card}
            strokeWidth="1.5"
            style={anim(pv, { delay: 2100 + i * 160, dur: 600, from: "translateY(-20px)", opacity: 0.95 })}
          />
        ))}
      </g>

      {/* ---------- Wärmepumpe ---------- */}
      <g style={anim(technik, { delay: 300, dur: 800, from: "translateX(70px)" })}>
        <rect x="1046" y="540" width="112" height="72" rx="6" fill={FARBEN.card} stroke={FARBEN.teal} strokeWidth="3" />
        <circle cx="1078" cy="576" r="20" fill="none" stroke={FARBEN.teal} strokeWidth="3" />
        <path d="M1078 560 a16 16 0 0 1 12 26 M1078 592 a16 16 0 0 1 -12 -26" fill="none" stroke={FARBEN.tealHell} strokeWidth="3" strokeLinecap="round" />
        <path d="M1114 556 h30 M1114 570 h30 M1114 584 h30 M1114 598 h30" stroke={FARBEN.line} strokeWidth="3" strokeLinecap="round" />
        {/* Luftstrom */}
        {[0, 1, 2].map((i) => (
          <path
            key={`luft-${i}`}
            d={`M${1170 + i * 26} 550 q14 26 0 52`}
            fill="none"
            stroke={FARBEN.tealHell}
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-float"
            style={{ ...anim(technik, { delay: 900 + i * 160, opacity: 0.55 }), animationDelay: `${i * 0.6}s` }}
          />
        ))}
        {/* Leitung ins Haus */}
        <path d="M1046 596 H1002" stroke={FARBEN.tealHell} strokeWidth="4" strokeLinecap="round" style={anim(technik, { delay: 1100 })} />
      </g>

      {/* ---------- Absetzkipper mit Container ---------- */}
      <g style={move(`translateX(${lkwX}px)`, 1800)}>
        {/* Container */}
        <g>
          <polygon points="120,470 372,470 356,596 136,596" fill={FARBEN.card} stroke={FARBEN.muted} strokeWidth="3.5" />
          <line x1="128" y1="506" x2="364" y2="506" stroke={FARBEN.muted} strokeWidth="2" opacity="0.6" />
          <line x1="132" y1="548" x2="360" y2="548" stroke={FARBEN.muted} strokeWidth="2" opacity="0.6" />
          {/* gefüllter Schutt */}
          <path
            d="M150 512 q40 -22 80 -6 q46 -20 86 4 q22 -8 30 6 v6 H146 Z"
            fill={FARBEN.altDunkel}
            style={anim(p === 2, { delay: 2100, dur: 900, from: "translateY(28px)", opacity: 0.85 })}
          />
        </g>
        {/* Fahrgestell und Kabine */}
        <rect x="118" y="596" width="352" height="12" rx="4" fill={FARBEN.muted} />
        <path d="M382 596 v-84 a8 8 0 0 1 8 -8 h44 l30 46 v46 Z" fill={FARBEN.teal} />
        <path d="M396 520 h34 l20 30 h-54 Z" fill={FARBEN.card} opacity="0.85" />
        {[168, 250, 430].map((cx) => (
          <g key={`rad-${cx}`}>
            <circle cx={cx} cy="608" r="24" fill={FARBEN.ink} opacity="0.85" />
            <circle cx={cx} cy="608" r="9" fill={FARBEN.card} />
          </g>
        ))}
        <text x="150" y="580" fontSize="20" fontWeight="700" fill={FARBEN.muted} letterSpacing="2">
          ENTSORGUNG
        </text>
      </g>

      {/* ---------- Beschriftungen in der Szene ---------- */}
      {/* Vorher: Bestand, Baujahr, Energieklasse */}
      <g style={anim(schilder && p <= 1, { dur: 600, from: "translateY(12px)" })}>
        <rect x="196" y="404" width="196" height="104" rx="10" fill={FARBEN.card} stroke={FARBEN.line} strokeWidth="2" />
        <text x="294" y="434" textAnchor="middle" fontSize="15" fill={FARBEN.hint} letterSpacing="2">
          BESTAND 1968
        </text>
        <text x="294" y="472" textAnchor="middle" fontSize="34" fontWeight="700" fill={FARBEN.muted}>
          Klasse H
        </text>
        <text x="294" y="494" textAnchor="middle" fontSize="15" fill={FARBEN.hint}>
          ungedämmt · Ölheizung
        </text>
      </g>

      {/* Nachher: Effizienzhaus */}
      <g style={anim(schilder && fertig, { delay: 600, dur: 700, from: "translateY(14px)" })}>
        <rect x="1046" y="404" width="212" height="104" rx="10" fill={FARBEN.card} stroke={FARBEN.gruen} strokeWidth="2.5" />
        <text x="1152" y="434" textAnchor="middle" fontSize="15" fill={FARBEN.muted} letterSpacing="2">
          NACH SANIERUNG
        </text>
        <text x="1152" y="472" textAnchor="middle" fontSize="30" fontWeight="700" fill={FARBEN.gruen}>
          Effizienzhaus
        </text>
        <text x="1152" y="494" textAnchor="middle" fontSize="15" fill={FARBEN.muted}>
          gedämmt · Wärmepumpe · PV
        </text>
      </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * Wrapper
 * ------------------------------------------------------------------ */

/**
 * Läuft die Phasen im Kreis durch. Wer die Beschriftung außerhalb der
 * Animation rendern will (z. B. der Hero), nutzt den Hook direkt und
 * reicht die Phase per Prop wieder herein.
 */
export function useSanierungsPhase(aktiv = true): [number, (p: number) => void, boolean] {
  const [phase, setPhase] = useState(0);
  const [reduziert, setReduziert] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduziert(mq.matches);
      if (mq.matches) setPhase(PHASEN.length - 1);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduziert || !aktiv) return;
    const id = window.setTimeout(
      () => setPhase((prev) => (prev + 1) % PHASEN.length),
      PHASEN[phase].dauer
    );
    return () => window.clearTimeout(id);
  }, [phase, reduziert, aktiv]);

  return [phase, setPhase, reduziert];
}

export default function SanierungsAnimation({
  variant = "feature",
  className = "",
  phase: gesteuert,
}: {
  variant?: SanierungsVariant;
  className?: string;
  /** Von außen gesteuerte Phase — dann läuft der interne Timer nicht */
  phase?: number;
}) {
  const [pausiert, setPausiert] = useState(false);
  const [intern, setPhase, reduziert] = useSanierungsPhase(gesteuert === undefined && !pausiert);
  const phase = gesteuert ?? intern;

  if (variant === "backdrop") {
    return (
      <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
        <Szene phase={phase} schilder={false} />
      </div>
    );
  }

  const aktuell = PHASEN[phase];

  return (
    <div className={className}>
      <div className="rounded-2xl border border-zinc-border bg-bg-card overflow-hidden">
        <div className="relative aspect-[1440/760] bg-bg-primary">
          <Szene phase={phase} />
        </div>

        {/* Zeitstrahl */}
        <div className="border-t border-zinc-border px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center gap-1.5 mb-4">
            {PHASEN.map((ph, i) => (
              <button
                key={ph.key}
                type="button"
                onClick={() => {
                  setPausiert(true);
                  setPhase(i);
                }}
                aria-current={i === phase}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                  i === phase
                    ? "bg-amber text-onAccent"
                    : i < phase
                    ? "bg-bg-accent text-teal-light hover:text-zinc-primary"
                    : "text-zinc-hint hover:text-zinc-secondary"
                }`}
              >
                <span className="font-mono mr-1.5 opacity-60">{String(i + 1).padStart(2, "0")}</span>
                {ph.kurz}
              </button>
            ))}

            {!reduziert && (
              <button
                type="button"
                onClick={() => setPausiert((v) => !v)}
                className="ml-auto rounded-full border border-zinc-border px-3 py-1.5 text-xs font-semibold text-zinc-secondary hover:border-amber hover:text-amber transition-colors duration-150"
              >
                {pausiert ? "▶ Abspielen" : "❚❚ Pause"}
              </button>
            )}
          </div>

          <div className="min-h-[76px] sm:min-h-[64px]">
            <h3 className="text-lg font-bold text-zinc-primary mb-1">{aktuell.titel}</h3>
            <p className="text-sm text-zinc-muted leading-relaxed">{aktuell.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
