"use client";

import { useState } from "react";
import Link from "next/link";

interface Bonus {
  id: string;
  label: string;
  desc: string;
  value: number;
}

interface Massnahme {
  label: string;
  icon: string;
  desc: string;
  basis: number;
  maxKosten: number;
  maxKostenMFH?: number;
  maxKostenISFP?: number;
  maxKostenMFH_ISFP?: number;
  boni: Bonus[];
  maxFoerder: number;
}

const MASSNAHMEN: Record<string, Massnahme> = {
  heizung: {
    label: "Heizungsförderung",
    icon: "🔥",
    desc: "Wärmepumpe, Biomasse, Solarthermie, Brennstoffzelle",
    basis: 30,
    maxKosten: 30000,
    maxKostenMFH: 15000,
    boni: [
      {
        id: "klima",
        label: "Klima-Geschwindigkeitsbonus",
        desc: "Austausch einer Öl-, Kohle-, Gas-Etagen- oder Nachtspeicherheizung, oder mind. 20 Jahre alte Gas-/Biomasseheizung",
        value: 20,
      },
      {
        id: "effizienz",
        label: "Effizienz-Bonus",
        desc: "Wärmepumpe mit Wasser, Erdreich oder Abwasser als Wärmequelle, oder natürlichem Kältemittel",
        value: 5,
      },
      {
        id: "einkommen",
        label: "Einkommens-Bonus",
        desc: "Selbstnutzende Eigentümer mit ≤ 40.000 € zu versteuerndem Haushaltseinkommen",
        value: 30,
      },
    ],
    maxFoerder: 70,
  },
  fenster: {
    label: "Fenster & Haustür",
    icon: "🪟",
    desc: "Austausch von Fenstern, Balkon-/Terrassentüren, Haustüren",
    basis: 15,
    maxKosten: 30000,
    maxKostenISFP: 60000,
    maxKostenMFH: 30000,
    maxKostenMFH_ISFP: 60000,
    boni: [
      {
        id: "isfp",
        label: "iSFP-Bonus",
        desc: "Maßnahme ist in einem individuellen Sanierungsfahrplan (iSFP) empfohlen",
        value: 5,
      },
    ],
    maxFoerder: 20,
  },
  dach: {
    label: "Dachdämmung",
    icon: "🏠",
    desc: "Dämmung der obersten Geschossdecke oder des Daches",
    basis: 15,
    maxKosten: 30000,
    maxKostenISFP: 60000,
    maxKostenMFH: 30000,
    maxKostenMFH_ISFP: 60000,
    boni: [
      {
        id: "isfp",
        label: "iSFP-Bonus",
        desc: "Maßnahme ist in einem individuellen Sanierungsfahrplan (iSFP) empfohlen",
        value: 5,
      },
    ],
    maxFoerder: 20,
  },
  fassade: {
    label: "Fassadendämmung",
    icon: "🧱",
    desc: "Dämmung der Außenwände (WDVS, Kerndämmung, Innendämmung)",
    basis: 15,
    maxKosten: 30000,
    maxKostenISFP: 60000,
    maxKostenMFH: 30000,
    maxKostenMFH_ISFP: 60000,
    boni: [
      {
        id: "isfp",
        label: "iSFP-Bonus",
        desc: "Maßnahme ist in einem individuellen Sanierungsfahrplan (iSFP) empfohlen",
        value: 5,
      },
    ],
    maxFoerder: 20,
  },
};

function fmt(n: number) {
  return n.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

interface CalcResult {
  foerderSatz: number;
  anrechenbareKosten: number;
  foerderBetrag: number;
  maxFoerderfaehig: number;
  bonusProzent: number;
  bbFoerder: number;
}

export default function Foerderrechner() {
  const [step, setStep] = useState(0);
  const [typ, setTyp] = useState<string | null>(null);
  const [wohneinheiten, setWohneinheiten] = useState(1);
  const [investition, setInvestition] = useState("");
  const [aktiveBoni, setAktiveBoni] = useState<Record<string, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const m = typ ? MASSNAHMEN[typ] : null;

  function toggleBonus(id: string) {
    setAktiveBoni((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function berechne(): CalcResult | null {
    if (!m) return null;
    const inv = parseFloat(investition) || 0;

    let bonusProzent = 0;
    m.boni.forEach((b) => {
      if (aktiveBoni[b.id]) bonusProzent += b.value;
    });
    const foerderSatz = Math.min(m.basis + bonusProzent, m.maxFoerder);

    const hatISFP = aktiveBoni["isfp"];
    let maxFoerderfaehig: number;
    if (typ === "heizung") {
      maxFoerderfaehig =
        wohneinheiten === 1
          ? m.maxKosten
          : m.maxKosten + (wohneinheiten - 1) * (m.maxKostenMFH ?? 15000);
    } else {
      const proWE = hatISFP ? (m.maxKostenISFP ?? 60000) : m.maxKosten;
      const proWEweitere = hatISFP
        ? (m.maxKostenMFH_ISFP ?? 60000)
        : (m.maxKostenMFH ?? 30000);
      maxFoerderfaehig =
        wohneinheiten === 1 ? proWE : proWE + (wohneinheiten - 1) * proWEweitere;
    }

    const anrechenbareKosten = Math.min(inv, maxFoerderfaehig);
    const foerderBetrag = Math.round((anrechenbareKosten * foerderSatz) / 100);

    const bbMax =
      wohneinheiten <= 1 ? 5000 : 5000 + (wohneinheiten - 1) * 2000;
    const bbFoerder = Math.round(bbMax * 0.5);

    return { foerderSatz, anrechenbareKosten, foerderBetrag, maxFoerderfaehig, bonusProzent, bbFoerder };
  }

  const result = showResult ? berechne() : null;

  const currentRate = m
    ? Math.min(
        m.basis + m.boni.reduce((s, b) => s + (aktiveBoni[b.id] ? b.value : 0), 0),
        m.maxFoerder
      )
    : 0;

  function reset() {
    setStep(0);
    setShowResult(false);
    setTyp(null);
    setInvestition("");
    setAktiveBoni({});
    setWohneinheiten(1);
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-8">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === step
                ? "w-8 bg-amber"
                : i < step
                ? "w-2 bg-teal-dark"
                : "w-2 bg-zinc-border"
            }`}
          />
        ))}
      </div>

      {/* Step 0: Maßnahmenart */}
      {step === 0 && (
        <div>
          <h2 className="text-base font-semibold text-ink-bright mb-4">
            Welche Maßnahme planen Sie?
          </h2>
          <div className="space-y-2">
            {Object.entries(MASSNAHMEN).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setTyp(key)}
                className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all duration-150 ${
                  typ === key
                    ? "border-amber bg-surface"
                    : "border-line-dim bg-surface hover:border-line-dimHover"
                }`}
              >
                <span className="text-2xl leading-none mt-0.5">{val.icon}</span>
                <div>
                  <div
                    className={`font-semibold text-sm ${
                      typ === key ? "text-ink-bright" : "text-ink-body"
                    }`}
                  >
                    {val.label}
                  </div>
                  <div className="text-xs text-ink-muted mt-0.5">{val.desc}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-5 flex justify-end">
            <button
              className="btn-electric"
              disabled={!typ}
              style={{ opacity: typ ? 1 : 0.4 }}
              onClick={() => {
                setStep(1);
                setAktiveBoni({});
                setShowResult(false);
              }}
            >
              Weiter →
            </button>
          </div>
        </div>
      )}

      {/* Step 1: Gebäudedetails */}
      {step === 1 && m && (
        <div>
          <h2 className="text-base font-semibold text-ink-bright mb-5">
            Gebäudedetails
          </h2>

          <div className="mb-6">
            <label className="block text-sm text-ink-body mb-3">
              Anzahl Wohneinheiten:{" "}
              <span className="text-warm font-bold font-mono">{wohneinheiten}</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={wohneinheiten}
              onChange={(e) => setWohneinheiten(parseInt(e.target.value))}
            />
            <div className="flex justify-between text-xs text-ink-ghost mt-1.5">
              <span>1 WE (EFH)</span>
              <span>20 WE (MFH)</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-ink-body mb-2">
              Geschätzte Investitionskosten (brutto)
            </label>
            <div className="relative">
              <input
                type="number"
                value={investition}
                onChange={(e) => setInvestition(e.target.value)}
                placeholder="z. B. 35000"
                className="w-full px-4 py-3 pr-10 bg-surface border border-line-dim rounded-xl text-ink-bright font-mono text-base focus:outline-none focus:border-amber transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-ghost text-sm">
                €
              </span>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <button className="btn-outline" onClick={() => setStep(0)}>
              ← Zurück
            </button>
            <button
              className="btn-electric"
              disabled={!investition}
              style={{ opacity: investition ? 1 : 0.4 }}
              onClick={() => setStep(2)}
            >
              Weiter →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Boni */}
      {step === 2 && m && (
        <div>
          <h2 className="text-base font-semibold text-ink-bright mb-1.5">
            Förderboni prüfen
          </h2>
          <p className="text-sm text-ink-muted mb-5">
            Wählen Sie alle zutreffenden Boni — jeder erhöht Ihren Fördersatz.
          </p>

          <div className="space-y-2 mb-5">
            {m.boni.map((b) => (
              <button
                key={b.id}
                onClick={() => toggleBonus(b.id)}
                className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all duration-150 ${
                  aktiveBoni[b.id]
                    ? "border-amber/50 bg-surface"
                    : "border-line-dim bg-surface hover:border-line-dimHover"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    aktiveBoni[b.id]
                      ? "bg-amber border-amber text-bg-primary"
                      : "border-line-dimHover"
                  }`}
                >
                  {aktiveBoni[b.id] && (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-ink-bright">
                      {b.label}
                    </span>
                    <span className="text-sm font-bold text-warm font-mono shrink-0">
                      +{b.value} %
                    </span>
                  </div>
                  <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">{b.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Live rate */}
          <div className="bg-surface border border-line-dim rounded-xl p-4 mb-5">
            <div className="text-xs text-ink-muted mb-1">Aktueller Fördersatz</div>
            <div className="text-3xl font-bold font-mono text-warm">{currentRate} %</div>
            <div className="text-xs text-ink-ghost mt-0.5">
              Basis {m.basis} % + Boni (max. {m.maxFoerder} %)
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <button className="btn-outline" onClick={() => setStep(1)}>
              ← Zurück
            </button>
            <button
              className="btn-electric"
              onClick={() => {
                setShowResult(true);
                setStep(3);
              }}
            >
              Berechnen →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Ergebnis */}
      {step === 3 && result && (
        <div>
          <div className="text-center mb-6">
            <div className="text-xs text-ink-muted mb-1">Ihre geschätzte Förderung</div>
            <div className="text-5xl font-bold font-mono text-electric">
              {fmt(result.foerderBetrag)}
            </div>
            <div className="text-sm text-ink-body mt-1">
              bei {result.foerderSatz} % Fördersatz
            </div>
          </div>

          {/* Breakdown */}
          <div className="card p-5 mb-4 space-y-3">
            {[
              {
                label: "Ihre Investition",
                value: fmt(parseFloat(investition) || 0),
                color: "text-ink-bright",
              },
              {
                label: `Max. förderfähige Kosten (${wohneinheiten} WE)`,
                value: fmt(result.maxFoerderfaehig),
                color: "text-ink-body",
              },
              {
                label: "Anrechenbare Kosten",
                value: fmt(result.anrechenbareKosten),
                color: "text-ink-body",
              },
            ].map((row) => (
              <div key={row.label} className="flex justify-between text-sm">
                <span className="text-ink-muted">{row.label}</span>
                <span className={`font-mono ${row.color}`}>{row.value}</span>
              </div>
            ))}
            <div className="border-t border-line-dim pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-ink-muted">Basis-Fördersatz</span>
                <span className="text-ink-body">{m?.basis} %</span>
              </div>
              {result.bonusProzent > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Boni</span>
                  <span className="text-warm font-semibold">+{result.bonusProzent} %</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-ink-muted">Gesamt-Fördersatz</span>
                <span className="text-warm">{result.foerderSatz} %</span>
              </div>
            </div>

            {/* Bar */}
            <div className="bg-zinc-border rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${Math.min(100, (result.foerderBetrag / (parseFloat(investition) || 1)) * 100)}%`,
                  background: "linear-gradient(90deg, #0F6E56, #34d399)",
                }}
              />
            </div>

            <div className="border-t border-line-dim pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-ink-muted">+ Baubegleitung (50 %)</span>
                <span className="text-electric font-mono">bis {fmt(result.bbFoerder)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-ink-bright">Maximale Gesamtförderung</span>
                <span className="text-electric font-mono">
                  {fmt(result.foerderBetrag + result.bbFoerder)}
                </span>
              </div>
            </div>
          </div>

          {/* Eigenanteil */}
          <div className="card p-5 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-ink-muted">Geschätzter Eigenanteil</div>
                <div className="text-2xl font-bold font-mono text-ink-bright">
                  {fmt(Math.max(0, (parseFloat(investition) || 0) - result.foerderBetrag))}
                </div>
              </div>
              <div className="text-right text-sm">
                <div className="text-ink-ghost">statt {fmt(parseFloat(investition) || 0)}</div>
                <div className="text-electric font-semibold">
                  Sie sparen {result.foerderSatz} %
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-ink-ghost mb-5 leading-relaxed">
            * Unverbindliche Schätzung auf Basis der BEG-Richtlinie (Stand 2025).
            Verbindlich ist ausschließlich der Zuwendungsbescheid von BAFA/KfW.
            Fördervoraussetzungen können sich jederzeit ändern.
          </p>

          {/* CTA */}
          <div className="rounded-xl bg-surface border border-amber/20 p-6 text-center mb-4">
            <h3 className="font-bold text-ink-bright mb-2">Förderung sichern?</h3>
            <p className="text-sm text-ink-muted mb-4">
              Als zertifizierter Energieeffizienz-Experte (dena) übernehme ich die komplette
              Antragstellung und Baubegleitung für Sie.
            </p>
            <Link href="/kontakt" className="btn-electric w-full justify-center text-base py-3.5">
              Kostenlose Erstberatung anfragen
            </Link>
            <p className="text-xs text-ink-ghost mt-3">
              Jonas Tonn · IBT Ingenieurbüro · Energieberater (BAFA/KfW)
            </p>
          </div>

          <div className="text-center">
            <button className="btn-outline text-sm" onClick={reset}>
              Neue Berechnung starten
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
