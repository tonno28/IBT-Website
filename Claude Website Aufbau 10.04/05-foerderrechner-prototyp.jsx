import { useState } from "react";

const MASSNAHMEN = {
  heizung: {
    label: "Heizungsförderung",
    icon: "🔥",
    desc: "Wärmepumpe, Biomasse, Solarthermie, Brennstoffzelle",
    basis: 30,
    maxKosten: 30000,
    maxKostenMFH: 15000,
    boni: [
      { id: "klima", label: "Klima-Geschwindigkeitsbonus", desc: "Austausch einer funktionsfähigen Öl-, Kohle-, Gas-Etagen-, Nachtspeicherheizung oder einer mind. 20 Jahre alten Gas-/Biomasseheizung", value: 20 },
      { id: "effizienz", label: "Effizienz-Bonus", desc: "Wärmepumpe mit Wasser, Erdreich oder Abwasser als Wärmequelle oder natürliches Kältemittel", value: 5 },
      { id: "einkommen", label: "Einkommens-Bonus", desc: "Selbstnutzende Eigentümer mit ≤ 40.000 € zu versteuerndem Haushaltseinkommen", value: 30 },
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
      { id: "isfp", label: "iSFP-Bonus", desc: "Maßnahme ist in einem individuellen Sanierungsfahrplan (iSFP) empfohlen", value: 5 },
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
      { id: "isfp", label: "iSFP-Bonus", desc: "Maßnahme ist in einem individuellen Sanierungsfahrplan (iSFP) empfohlen", value: 5 },
    ],
    maxFoerder: 20,
  },
  fassade: {
    label: "Fassadendämmung",
    icon: "🧱",
    desc: "Dämmung der Außenwände (WDVS, Kerndämmung, Innendämmung etc.)",
    basis: 15,
    maxKosten: 30000,
    maxKostenISFP: 60000,
    maxKostenMFH: 30000,
    maxKostenMFH_ISFP: 60000,
    boni: [
      { id: "isfp", label: "iSFP-Bonus", desc: "Maßnahme ist in einem individuellen Sanierungsfahrplan (iSFP) empfohlen", value: 5 },
    ],
    maxFoerder: 20,
  },
};

function fmt(n) {
  return n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}

export default function Foerderrechner() {
  const [step, setStep] = useState(0);
  const [typ, setTyp] = useState(null);
  const [wohneinheiten, setWohneinheiten] = useState(1);
  const [investition, setInvestition] = useState("");
  const [aktiveBoni, setAktiveBoni] = useState({});
  const [showResult, setShowResult] = useState(false);

  const m = typ ? MASSNAHMEN[typ] : null;

  function toggleBonus(id) {
    setAktiveBoni(prev => ({ ...prev, [id]: !prev[id] }));
  }

  function berechne() {
    if (!m) return null;
    const inv = parseFloat(investition) || 0;

    let bonusProzent = 0;
    m.boni.forEach(b => { if (aktiveBoni[b.id]) bonusProzent += b.value; });
    let foerderSatz = Math.min(m.basis + bonusProzent, m.maxFoerder);

    const hatISFP = aktiveBoni["isfp"];
    let maxFoerderfaehig;
    if (typ === "heizung") {
      maxFoerderfaehig = wohneinheiten === 1 ? m.maxKosten : m.maxKosten + (wohneinheiten - 1) * m.maxKostenMFH;
    } else {
      const proWE = hatISFP ? (m.maxKostenISFP || 60000) : m.maxKosten;
      const proWEweitere = hatISFP ? (m.maxKostenMFH_ISFP || 60000) : (m.maxKostenMFH || 30000);
      maxFoerderfaehig = wohneinheiten === 1 ? proWE : proWE + (wohneinheiten - 1) * proWEweitere;
    }

    const anrechenbareKosten = Math.min(inv, maxFoerderfaehig);
    const foerderBetrag = Math.round(anrechenbareKosten * foerderSatz / 100);

    // Baubegleitung
    const bbMax = wohneinheiten <= 1 ? 5000 : 5000 + (wohneinheiten - 1) * 2000;
    const bbFoerder = Math.round(bbMax * 0.5);

    return { foerderSatz, anrechenbareKosten, foerderBetrag, maxFoerderfaehig, bonusProzent, bbFoerder };
  }

  const result = showResult ? berechne() : null;

  const cardStyle = (active) => ({
    background: active ? "#1a2a2e" : "#12161a",
    border: `1.5px solid ${active ? "#D4942A" : "#2a2d33"}`,
    borderRadius: 10,
    padding: "14px 16px",
    cursor: "pointer",
    transition: "all .2s",
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  });

  return (
    <div style={{
      fontFamily: "'Instrument Sans', 'DM Sans', system-ui, sans-serif",
      background: "#0e1117",
      color: "#d4d4d8",
      minHeight: "100vh",
      padding: "24px 16px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input[type=range] { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 3px; background: #26282f; outline: none; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #D4942A; cursor: pointer; }
        .bonus-toggle { display: flex; align-items: center; gap: 10px; padding: 10px 14px; background: #16181f; border: 1px solid #26282f; border-radius: 8px; cursor: pointer; transition: all .15s; }
        .bonus-toggle:hover { border-color: #3a3d44; }
        .bonus-toggle.active { border-color: #D4942A44; background: #1a2228; }
        .check { width: 20px; height: 20px; border-radius: 5px; border: 2px solid #3a3d44; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; transition: all .15s; }
        .check.on { background: #D4942A; border-color: #D4942A; color: #0e1117; }
        .step-dot { width: 8px; height: 8px; border-radius: 50%; background: #26282f; transition: all .2s; }
        .step-dot.active { background: #D4942A; width: 24px; border-radius: 4px; }
        .step-dot.done { background: #0F6E56; }
        .btn { padding: 10px 24px; border-radius: 8px; border: none; font-family: inherit; font-weight: 600; font-size: 14px; cursor: pointer; transition: all .15s; }
        .btn-primary { background: #D4942A; color: #0e1117; }
        .btn-primary:hover { background: #e0a43a; }
        .btn-secondary { background: #16181f; color: #d4d4d8; border: 1px solid #26282f; }
        .btn-secondary:hover { border-color: #D4942A; }
        .result-bar { height: 8px; border-radius: 4px; transition: width .8s cubic-bezier(.4,0,.2,1); }
      `}</style>

      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 24, textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "#D4942A", textTransform: "uppercase", marginBottom: 6 }}>
            IBT Ingenieurbüro Tonn
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#f4f4f5", marginBottom: 6 }}>
            BEG-Förderrechner
          </h1>
          <p style={{ fontSize: 13, color: "#71717a" }}>
            Unverbindliche Schätzung Ihrer möglichen Bundesförderung
          </p>
        </div>

        {/* Progress */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 28 }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`step-dot ${i === step ? "active" : i < step ? "done" : ""}`} />
          ))}
        </div>

        {/* Step 0: Maßnahmenart */}
        {step === 0 && (
          <div>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5", marginBottom: 14 }}>
              Welche Maßnahme planen Sie?
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {Object.entries(MASSNAHMEN).map(([key, val]) => (
                <div key={key} style={cardStyle(typ === key)} onClick={() => setTyp(key)}>
                  <span style={{ fontSize: 24, lineHeight: 1 }}>{val.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: typ === key ? "#f4f4f5" : "#a1a1aa" }}>{val.label}</div>
                    <div style={{ fontSize: 12, color: "#71717a", marginTop: 2 }}>{val.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end" }}>
              <button className="btn btn-primary" disabled={!typ} style={{ opacity: typ ? 1 : 0.4 }} onClick={() => { setStep(1); setAktiveBoni({}); setShowResult(false); }}>
                Weiter →
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Gebäudedetails */}
        {step === 1 && m && (
          <div>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5", marginBottom: 14 }}>
              Gebäudedetails
            </h2>

            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 13, color: "#a1a1aa", display: "block", marginBottom: 8 }}>
                Anzahl Wohneinheiten: <span style={{ color: "#D4942A", fontWeight: 600 }}>{wohneinheiten}</span>
              </label>
              <input type="range" min="1" max="20" value={wohneinheiten} onChange={e => setWohneinheiten(parseInt(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#52525b", marginTop: 4 }}>
                <span>1 WE (EFH)</span><span>20 WE (MFH)</span>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 13, color: "#a1a1aa", display: "block", marginBottom: 8 }}>
                Geschätzte Investitionskosten (brutto)
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="number"
                  value={investition}
                  onChange={e => setInvestition(e.target.value)}
                  placeholder="z.B. 35000"
                  style={{
                    width: "100%",
                    padding: "10px 40px 10px 14px",
                    background: "#16181f",
                    border: "1px solid #26282f",
                    borderRadius: 8,
                    color: "#f4f4f5",
                    fontSize: 16,
                    fontFamily: "'DM Mono', monospace",
                    outline: "none",
                  }}
                />
                <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#52525b", fontSize: 14 }}>€</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, justifyContent: "space-between" }}>
              <button className="btn btn-secondary" onClick={() => setStep(0)}>← Zurück</button>
              <button className="btn btn-primary" disabled={!investition} style={{ opacity: investition ? 1 : 0.4 }} onClick={() => setStep(2)}>
                Weiter →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Boni */}
        {step === 2 && m && (
          <div>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5", marginBottom: 6 }}>
              Förderboni prüfen
            </h2>
            <p style={{ fontSize: 13, color: "#71717a", marginBottom: 16 }}>
              Wählen Sie alle zutreffenden Boni aus, um Ihren Fördersatz zu erhöhen.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {m.boni.map(b => (
                <div key={b.id} className={`bonus-toggle ${aktiveBoni[b.id] ? "active" : ""}`} onClick={() => toggleBonus(b.id)}>
                  <div className={`check ${aktiveBoni[b.id] ? "on" : ""}`}>{aktiveBoni[b.id] ? "✓" : ""}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5" }}>
                      {b.label} <span style={{ color: "#D4942A", fontWeight: 700 }}>+{b.value} %</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#71717a", marginTop: 2 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#16181f", border: "1px solid #26282f", borderRadius: 8, padding: 14, marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: "#71717a", marginBottom: 4 }}>Aktueller Fördersatz</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#D4942A", fontFamily: "'DM Mono', monospace" }}>
                {Math.min(m.basis + m.boni.reduce((s, b) => s + (aktiveBoni[b.id] ? b.value : 0), 0), m.maxFoerder)} %
              </div>
              <div style={{ fontSize: 11, color: "#52525b" }}>Basis {m.basis} % + Boni (max. {m.maxFoerder} %)</div>
            </div>

            <div style={{ display: "flex", gap: 10, justifyContent: "space-between" }}>
              <button className="btn btn-secondary" onClick={() => setStep(1)}>← Zurück</button>
              <button className="btn btn-primary" onClick={() => { setShowResult(true); setStep(3); }}>
                Berechnen →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Ergebnis */}
        {step === 3 && result && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: "#71717a", marginBottom: 4 }}>Ihre geschätzte Förderung</div>
              <div style={{ fontSize: 40, fontWeight: 700, color: "#34d399", fontFamily: "'DM Mono', monospace" }}>
                {fmt(result.foerderBetrag)}
              </div>
              <div style={{ fontSize: 14, color: "#a1a1aa" }}>
                bei {result.foerderSatz} % Fördersatz
              </div>
            </div>

            {/* Breakdown */}
            <div style={{ background: "#16181f", border: "1px solid #26282f", borderRadius: 10, padding: 16, marginBottom: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#71717a" }}>Ihre Investition</span>
                  <span style={{ color: "#f4f4f5", fontFamily: "'DM Mono', monospace" }}>{fmt(parseFloat(investition) || 0)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#71717a" }}>Max. förderfähige Kosten ({wohneinheiten} WE)</span>
                  <span style={{ color: "#f4f4f5", fontFamily: "'DM Mono', monospace" }}>{fmt(result.maxFoerderfaehig)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#71717a" }}>Anrechenbare Kosten</span>
                  <span style={{ color: "#f4f4f5", fontFamily: "'DM Mono', monospace" }}>{fmt(result.anrechenbareKosten)}</span>
                </div>
                <div style={{ height: 1, background: "#26282f" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#71717a" }}>Basis-Fördersatz</span>
                  <span style={{ color: "#f4f4f5" }}>{m.basis} %</span>
                </div>
                {result.bonusProzent > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: "#71717a" }}>Boni</span>
                    <span style={{ color: "#D4942A" }}>+{result.bonusProzent} %</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#71717a" }}>Gesamt-Fördersatz</span>
                  <span style={{ color: "#D4942A", fontWeight: 700 }}>{result.foerderSatz} %</span>
                </div>

                {/* Visual bar */}
                <div style={{ background: "#26282f", borderRadius: 4, height: 8, overflow: "hidden" }}>
                  <div className="result-bar" style={{ width: `${(result.foerderBetrag / (parseFloat(investition) || 1)) * 100}%`, background: "linear-gradient(90deg, #0F6E56, #34d399)" }} />
                </div>

                <div style={{ height: 1, background: "#26282f" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#71717a" }}>+ Fachplanung & Baubegleitung (50 %)</span>
                  <span style={{ color: "#34d399", fontFamily: "'DM Mono', monospace" }}>bis {fmt(result.bbFoerder)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 700 }}>
                  <span style={{ color: "#f4f4f5" }}>Maximale Gesamtförderung</span>
                  <span style={{ color: "#34d399", fontFamily: "'DM Mono', monospace" }}>{fmt(result.foerderBetrag + result.bbFoerder)}</span>
                </div>
              </div>
            </div>

            {/* Eigenanteil */}
            <div style={{ background: "#16181f", border: "1px solid #26282f", borderRadius: 10, padding: 16, marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 12, color: "#71717a" }}>Ihr geschätzter Eigenanteil</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#f4f4f5", fontFamily: "'DM Mono', monospace" }}>
                    {fmt(Math.max(0, (parseFloat(investition) || 0) - result.foerderBetrag))}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#71717a", textAlign: "right" }}>
                  statt {fmt(parseFloat(investition) || 0)}<br />
                  <span style={{ color: "#34d399", fontWeight: 600 }}>Sie sparen {result.foerderSatz} %</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div style={{ fontSize: 11, color: "#52525b", marginBottom: 20, lineHeight: 1.6 }}>
              * Unverbindliche Schätzung auf Basis der BEG-Richtlinie (Stand 2025). Verbindlich ist ausschließlich der Zuwendungsbescheid von BAFA/KfW. Fördervoraussetzungen können sich jederzeit ändern.
            </div>

            {/* CTA */}
            <div style={{ background: "linear-gradient(135deg, #1a2a2e 0%, #1e2124 100%)", border: "1px solid #D4942A44", borderRadius: 12, padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#f4f4f5", marginBottom: 6 }}>
                Förderung sichern?
              </div>
              <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 14 }}>
                Als zertifizierter Energieeffizienz-Experte (dena) übernehme ich die komplette Antragstellung und Baubegleitung für Sie.
              </p>
              <button className="btn btn-primary" style={{ width: "100%", padding: "12px 24px", fontSize: 15 }}>
                Kostenlose Erstberatung anfragen
              </button>
              <div style={{ fontSize: 12, color: "#71717a", marginTop: 8 }}>
                Jonas Tonn · IBT Ingenieurbüro · Energieberater (BAFA/KfW)
              </div>
            </div>

            {/* Restart */}
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button className="btn btn-secondary" onClick={() => { setStep(0); setShowResult(false); setTyp(null); setInvestition(""); setAktiveBoni({}); }}>
                Neue Berechnung starten
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
