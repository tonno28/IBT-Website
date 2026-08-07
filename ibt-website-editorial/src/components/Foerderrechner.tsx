"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import {
  BAFA,
  BAUBEGLEITUNG,
  HEIZUNG,
  MASSNAHMEN,
  STAND,
  STEUERBONUS,
  berechne,
  einkommensbonus,
  fmtEuro,
  type Eingabe,
  type MassnahmeId,
} from "@/lib/foerderung";

const SCHRITTE = ["Gebäude", "Maßnahmen", "Boni", "Ergebnis"];

const EINKOMMEN_PRESETS = [
  { label: "über 50.000 €", wert: 60000 },
  { label: "bis 50.000 €", wert: 50000 },
  { label: "bis 40.000 €", wert: 40000 },
  { label: "bis 30.000 €", wert: 30000 },
];

export default function Foerderrechner() {
  const [step, setStep] = useState(0);
  const [wohneinheiten, setWohneinheiten] = useState(1);
  const [selbstnutzend, setSelbstnutzend] = useState(true);
  const [gewaehlt, setGewaehlt] = useState<MassnahmeId[]>([]);
  const [kosten, setKosten] = useState<Partial<Record<MassnahmeId, number>>>({});
  const [isfp, setIsfp] = useState(false);
  const [klimaBonus, setKlimaBonus] = useState(false);
  const [zvE, setZvE] = useState<number | null>(null);
  const [kindImHaushalt, setKindImHaushalt] = useState(false);
  const [baubegleitung, setBaubegleitung] = useState(true);

  const eingabe: Eingabe = useMemo(
    () => ({
      wohneinheiten,
      selbstnutzend,
      kosten: Object.fromEntries(
        gewaehlt.map((id) => [id, kosten[id] ?? 0])
      ) as Partial<Record<MassnahmeId, number>>,
      isfp,
      klimaBonus,
      zvE,
      kindImHaushalt,
      baubegleitung,
    }),
    [wohneinheiten, selbstnutzend, gewaehlt, kosten, isfp, klimaBonus, zvE, kindImHaushalt, baubegleitung]
  );

  const ergebnis = useMemo(() => berechne(eingabe), [eingabe]);

  const heizungGewaehlt = gewaehlt.includes("heizung");
  const bafaGewaehlt = gewaehlt.some((id) => id !== "heizung");
  const summeKosten = gewaehlt.reduce((s, id) => s + (kosten[id] ?? 0), 0);
  const kannWeiter = gewaehlt.length > 0 && summeKosten > 0;

  function toggle(id: MassnahmeId) {
    setGewaehlt((prev) => {
      if (prev.includes(id)) {
        setKosten((k) => {
          const next = { ...k };
          delete next[id];
          return next;
        });
        return prev.filter((x) => x !== id);
      }
      const def = MASSNAHMEN.find((m) => m.id === id)!;
      setKosten((k) => ({ ...k, [id]: k[id] ?? def.richtwert }));
      return [...prev, id];
    });
  }

  function reset() {
    setStep(0);
    setWohneinheiten(1);
    setSelbstnutzend(true);
    setGewaehlt([]);
    setKosten({});
    setIsfp(false);
    setKlimaBonus(false);
    setZvE(null);
    setKindImHaushalt(false);
    setBaubegleitung(true);
  }

  const eb = selbstnutzend ? einkommensbonus(zvE, kindImHaushalt) : 0;
  const kgb = selbstnutzend && klimaBonus ? HEIZUNG.klimaBonus : 0;
  const heizSatzLive = Math.min(
    HEIZUNG.grundfoerderung + kgb + eb,
    eb === 40 ? HEIZUNG.deckelEinkommen : HEIZUNG.deckel
  );

  return (
    <div className="max-w-2xl mx-auto">
      {/* Fortschritt */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          {SCHRITTE.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => i < step && setStep(i)}
              disabled={i > step}
              className={`flex-1 text-left transition-opacity duration-200 ${
                i > step ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <div
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  i === step ? "bg-amber" : i < step ? "bg-teal-light" : "bg-zinc-border"
                }`}
              />
              <span
                className={`mt-2 block text-[11px] font-semibold tracking-wide uppercase ${
                  i === step ? "text-amber" : i < step ? "text-teal-light" : "text-zinc-hint"
                }`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ---------------- Schritt 0: Gebäude ---------------- */}
      {step === 0 && (
        <div>
          <h2 className="text-lg font-semibold text-zinc-primary mb-1">
            Um welches Gebäude geht es?
          </h2>
          <p className="text-sm text-zinc-muted mb-6">
            Die Höchstgrenzen der Förderung hängen an der Zahl der Wohneinheiten, die Boni an
            der Nutzung.
          </p>

          <div className="mb-7">
            <span className="block text-sm font-medium text-zinc-secondary mb-3">Nutzung</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                {
                  wert: true,
                  label: "Selbst genutzt",
                  desc: "Sie wohnen selbst im Gebäude — Klima- und Einkommensbonus möglich",
                },
                {
                  wert: false,
                  label: "Vermietet",
                  desc: "Vermietung oder gewerbliche Nutzung — Grundförderung 30 %",
                },
              ].map((opt) => (
                <button
                  key={String(opt.wert)}
                  type="button"
                  onClick={() => setSelbstnutzend(opt.wert)}
                  className={`text-left p-4 rounded-xl border transition-colors duration-150 ${
                    selbstnutzend === opt.wert
                      ? "border-amber bg-bg-accent"
                      : "border-zinc-border bg-bg-card hover:border-zinc-borderHover"
                  }`}
                >
                  <span className="block text-sm font-semibold text-zinc-primary">
                    {opt.label}
                  </span>
                  <span className="block text-xs text-zinc-muted mt-1 leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <label htmlFor="we" className="block text-sm font-medium text-zinc-secondary mb-3">
              Wohneinheiten im Gebäude:{" "}
              <span className="text-amber font-bold font-mono">{wohneinheiten}</span>
            </label>
            <input
              id="we"
              type="range"
              min="1"
              max="20"
              value={wohneinheiten}
              onChange={(ev) => setWohneinheiten(parseInt(ev.target.value, 10))}
            />
            <div className="flex justify-between text-xs text-zinc-hint mt-1.5">
              <span>1 WE (EFH)</span>
              <span>20 WE (MFH)</span>
            </div>
            <p className="text-xs text-zinc-hint mt-3 leading-relaxed">
              Staffelung der förderfähigen Höchstkosten: 1. Wohneinheit voll, 2.–6. je
              15.000 €, ab der 7. je 8.000 €.
            </p>
          </div>

          <div className="flex justify-end">
            <button type="button" className="btn-primary" onClick={() => setStep(1)}>
              Weiter →
            </button>
          </div>
        </div>
      )}

      {/* ---------------- Schritt 1: Maßnahmen ---------------- */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold text-zinc-primary mb-1">
            Welche Maßnahmen planen Sie?
          </h2>
          <p className="text-sm text-zinc-muted mb-6">
            Mehrfachauswahl möglich. Die Kosten sind mit Richtwerten vorbelegt — tragen Sie
            Ihre eigenen Angebotssummen ein, wenn Sie sie haben.
          </p>

          <div className="space-y-2 mb-6">
            {MASSNAHMEN.map((m) => {
              const aktiv = gewaehlt.includes(m.id);
              return (
                <div
                  key={m.id}
                  className={`rounded-xl border transition-colors duration-150 ${
                    aktiv
                      ? "border-amber bg-bg-accent"
                      : "border-zinc-border bg-bg-card hover:border-zinc-borderHover"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(m.id)}
                    className="w-full text-left flex items-start gap-3 p-4"
                    aria-pressed={aktiv}
                  >
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 transition-colors ${
                        aktiv
                          ? "bg-amber/15 text-amber ring-amber/25"
                          : "bg-bg-accent text-zinc-secondary ring-zinc-border"
                      }`}
                    >
                      <Icon name={m.icon} className="w-5 h-5" />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm text-zinc-primary">
                          {m.label}
                        </span>
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-zinc-hint border border-zinc-border rounded px-1.5 py-0.5">
                          {m.traeger}
                        </span>
                      </span>
                      <span className="block text-xs text-zinc-muted mt-0.5 leading-relaxed">
                        {m.desc}
                      </span>
                    </span>
                  </button>

                  {aktiv && (
                    <div className="px-4 pb-4 pl-16">
                      <label
                        htmlFor={`kosten-${m.id}`}
                        className="block text-xs text-zinc-muted mb-1.5"
                      >
                        Geschätzte Kosten brutto
                      </label>
                      <div className="relative max-w-[220px]">
                        <input
                          id={`kosten-${m.id}`}
                          type="number"
                          min={0}
                          step={500}
                          value={kosten[m.id] ?? ""}
                          onChange={(ev) =>
                            setKosten((k) => ({
                              ...k,
                              [m.id]: ev.target.value === "" ? 0 : Math.max(0, Number(ev.target.value)),
                            }))
                          }
                          className="w-full px-3 py-2 pr-8 bg-bg-card border border-zinc-border rounded-lg text-zinc-primary font-mono text-sm focus:outline-none focus:border-amber transition-colors"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-hint text-sm">
                          €
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {bafaGewaehlt && (
            <button
              type="button"
              onClick={() => setBaubegleitung((v) => !v)}
              className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border mb-6 transition-colors duration-150 ${
                baubegleitung
                  ? "border-teal-light/50 bg-bg-accent"
                  : "border-zinc-border bg-bg-card hover:border-zinc-borderHover"
              }`}
            >
              <Checkbox checked={baubegleitung} />
              <span className="flex-1">
                <span className="block text-sm font-semibold text-zinc-primary">
                  Fachplanung & Baubegleitung mitbeantragen
                </span>
                <span className="block text-xs text-zinc-muted mt-0.5 leading-relaxed">
                  {BAUBEGLEITUNG.satz} % Zuschuss auf das Honorar des Energieeffizienz-Experten
                  — förderfähig bis {fmtEuro(BAUBEGLEITUNG.capBis2WE)} (bis 2 WE) bzw.{" "}
                  {fmtEuro(BAUBEGLEITUNG.capProWEab3)} je WE (max.{" "}
                  {fmtEuro(BAUBEGLEITUNG.capGesamtAb3WE)}).
                </span>
              </span>
            </button>
          )}

          {gewaehlt.length > 0 && (
            <div className="flex items-center justify-between rounded-xl border border-zinc-border bg-bg-card px-4 py-3 mb-6">
              <span className="text-sm text-zinc-muted">
                {gewaehlt.length} Maßnahme{gewaehlt.length > 1 ? "n" : ""} gewählt
              </span>
              <span className="font-mono font-semibold text-zinc-primary">
                {fmtEuro(summeKosten)}
              </span>
            </div>
          )}

          <div className="flex justify-between gap-3">
            <button type="button" className="btn-secondary" onClick={() => setStep(0)}>
              ← Zurück
            </button>
            <button
              type="button"
              className="btn-primary"
              disabled={!kannWeiter}
              style={{ opacity: kannWeiter ? 1 : 0.4 }}
              onClick={() => setStep(2)}
            >
              Weiter →
            </button>
          </div>
        </div>
      )}

      {/* ---------------- Schritt 2: Boni ---------------- */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-semibold text-zinc-primary mb-1">Boni prüfen</h2>
          <p className="text-sm text-zinc-muted mb-6">
            Jede zutreffende Angabe erhöht den Fördersatz. {STAND.lang}.
          </p>

          {bafaGewaehlt && (
            <button
              type="button"
              onClick={() => setIsfp((v) => !v)}
              className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border mb-3 transition-colors duration-150 ${
                isfp
                  ? "border-amber/50 bg-bg-accent"
                  : "border-zinc-border bg-bg-card hover:border-zinc-borderHover"
              }`}
            >
              <Checkbox checked={isfp} />
              <span className="flex-1">
                <span className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-zinc-primary">
                    Individueller Sanierungsfahrplan (iSFP) liegt vor
                  </span>
                  <span className="text-sm font-bold text-amber font-mono shrink-0">
                    + {BAFA.isfpBonus} %
                  </span>
                </span>
                <span className="block text-xs text-zinc-muted mt-1 leading-relaxed">
                  Seit 21.07.2026 gilt der Bonus nur für den Ausgabenanteil oberhalb der
                  Basis-Höchstgrenze — dafür verdoppelt der iSFP die förderfähigen Kosten.
                </span>
              </span>
            </button>
          )}

          {heizungGewaehlt && selbstnutzend && (
            <button
              type="button"
              onClick={() => setKlimaBonus((v) => !v)}
              className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border mb-3 transition-colors duration-150 ${
                klimaBonus
                  ? "border-amber/50 bg-bg-accent"
                  : "border-zinc-border bg-bg-card hover:border-zinc-borderHover"
              }`}
            >
              <Checkbox checked={klimaBonus} />
              <span className="flex-1">
                <span className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-zinc-primary">
                    Klimageschwindigkeitsbonus
                  </span>
                  <span className="text-sm font-bold text-amber font-mono shrink-0">
                    + {HEIZUNG.klimaBonus} %
                  </span>
                </span>
                <span className="block text-xs text-zinc-muted mt-1 leading-relaxed">
                  Ersetzt wird eine noch funktionsfähige fossile Heizung: Öl, Kohle,
                  Gas-Etagenheizung, Nachtspeicher oder eine mindestens 20 Jahre alte
                  Gasheizung. Abgesenkt von 20 auf 16 % — ab 01.02.2027 sinkt er weiter.
                </span>
              </span>
            </button>
          )}

          {heizungGewaehlt && selbstnutzend && (
            <div className="rounded-xl border border-zinc-border bg-bg-card p-4 mb-3">
              <span className="block text-sm font-semibold text-zinc-primary mb-1">
                Einkommensbonus
              </span>
              <p className="text-xs text-zinc-muted mb-4 leading-relaxed">
                Maßgeblich ist das zu versteuernde Haushaltseinkommen (Durchschnitt aus dem
                zweiten und dritten Jahr vor Antragstellung). Neu: dreistufig statt pauschal
                30 %.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {EINKOMMEN_PRESETS.map((p) => {
                  const aktiv = zvE === p.wert;
                  return (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => setZvE(aktiv ? null : p.wert)}
                      className={`rounded-lg border px-2 py-2 text-center transition-colors duration-150 ${
                        aktiv
                          ? "border-amber bg-bg-accent"
                          : "border-zinc-border hover:border-zinc-borderHover"
                      }`}
                    >
                      <span className="block text-[11px] text-zinc-muted">{p.label}</span>
                      <span className="block text-sm font-bold font-mono text-amber">
                        +{einkommensbonus(p.wert, kindImHaushalt)} %
                      </span>
                    </button>
                  );
                })}
              </div>

              <label htmlFor="zve" className="block text-xs text-zinc-muted mb-1.5">
                Oder exakt eintragen (zu versteuerndes Haushaltseinkommen)
              </label>
              <div className="relative max-w-[220px] mb-4">
                <input
                  id="zve"
                  type="number"
                  min={0}
                  step={1000}
                  value={zvE ?? ""}
                  placeholder="z. B. 46000"
                  onChange={(ev) =>
                    setZvE(ev.target.value === "" ? null : Math.max(0, Number(ev.target.value)))
                  }
                  className="w-full px-3 py-2 pr-8 bg-bg-primary border border-zinc-border rounded-lg text-zinc-primary font-mono text-sm focus:outline-none focus:border-amber transition-colors"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-hint text-sm">
                  €
                </span>
              </div>

              <button
                type="button"
                onClick={() => setKindImHaushalt((v) => !v)}
                className="w-full text-left flex items-start gap-3"
              >
                <Checkbox checked={kindImHaushalt} />
                <span className="flex-1">
                  <span className="block text-sm font-medium text-zinc-primary">
                    Mindestens ein minderjähriges Kind im Haushalt
                  </span>
                  <span className="block text-xs text-zinc-muted mt-0.5 leading-relaxed">
                    Familienzuschlag: Das maßgebliche Einkommen wird einmalig um 10.000 €
                    reduziert.
                  </span>
                </span>
              </button>
            </div>
          )}

          {heizungGewaehlt && !selbstnutzend && (
            <div className="rounded-xl border border-zinc-border bg-bg-card p-4 mb-3">
              <p className="text-sm text-zinc-muted leading-relaxed">
                Klimageschwindigkeits- und Einkommensbonus sind selbstnutzenden Eigentümern
                vorbehalten. Für vermietete Wohneinheiten bleibt es bei der Grundförderung von{" "}
                {HEIZUNG.grundfoerderung} %.
              </p>
            </div>
          )}

          {!heizungGewaehlt && !bafaGewaehlt && (
            <p className="text-sm text-zinc-muted mb-3">
              Bitte wählen Sie im vorherigen Schritt mindestens eine Maßnahme.
            </p>
          )}

          {/* Live-Satz */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            {heizungGewaehlt && (
              <div className="rounded-xl border border-zinc-border bg-bg-card p-4">
                <div className="text-xs text-zinc-muted mb-1">Fördersatz Heizung</div>
                <div className="text-3xl font-bold font-mono text-amber">{heizSatzLive} %</div>
                <div className="text-xs text-zinc-hint mt-1">
                  {HEIZUNG.grundfoerderung} % Grund
                  {kgb > 0 ? ` + ${kgb} % Klima` : ""}
                  {eb > 0 ? ` + ${eb} % Einkommen` : ""} · Deckel{" "}
                  {eb === 40 ? HEIZUNG.deckelEinkommen : HEIZUNG.deckel} %
                </div>
              </div>
            )}
            {bafaGewaehlt && (
              <div className="rounded-xl border border-zinc-border bg-bg-card p-4">
                <div className="text-xs text-zinc-muted mb-1">Fördersatz Einzelmaßnahmen</div>
                <div className="text-3xl font-bold font-mono text-amber">
                  {BAFA.grundfoerderung}
                  {isfp ? `–${BAFA.grundfoerderung + BAFA.isfpBonus}` : ""} %
                </div>
                <div className="text-xs text-zinc-hint mt-1">
                  {isfp
                    ? `${BAFA.grundfoerderung} % bis zur Höchstgrenze, ${BAFA.grundfoerderung + BAFA.isfpBonus} % darüber`
                    : `Basissatz ohne iSFP`}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between gap-3">
            <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
              ← Zurück
            </button>
            <button type="button" className="btn-primary" onClick={() => setStep(3)}>
              Förderung berechnen →
            </button>
          </div>
        </div>
      )}

      {/* ---------------- Schritt 3: Ergebnis ---------------- */}
      {step === 3 && (
        <div>
          <div className="text-center mb-7">
            <div className="text-xs text-zinc-muted mb-1">Ihre geschätzte Förderung</div>
            <div className="text-5xl sm:text-6xl font-bold font-mono text-teal-light">
              {fmtEuro(ergebnis.gesamtZuschuss)}
            </div>
            <div className="text-sm text-zinc-secondary mt-2">
              das sind {Math.round(ergebnis.gesamtSatz)} % Ihrer Investition von{" "}
              {fmtEuro(ergebnis.gesamtKosten)}
            </div>
          </div>

          {/* Balken */}
          <div className="mb-7">
            <div className="flex h-3 rounded-full overflow-hidden bg-zinc-border">
              <div
                className="h-full transition-[width] duration-700"
                style={{
                  width: `${Math.min(100, ergebnis.gesamtSatz)}%`,
                  background: "linear-gradient(90deg, #16a34a, #4ade80)",
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-zinc-hint mt-2">
              <span>Förderung {fmtEuro(ergebnis.gesamtZuschuss)}</span>
              <span>Eigenanteil {fmtEuro(ergebnis.eigenanteil)}</span>
            </div>
          </div>

          {/* Aufschlüsselung Heizung */}
          {ergebnis.heizung.aktiv && (
            <div className="card-base p-5 mb-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-zinc-primary text-sm">
                  Heizungstausch (KfW)
                </h3>
                <span className="font-mono font-bold text-teal-light">
                  {fmtEuro(ergebnis.heizung.zuschuss)}
                </span>
              </div>
              <div className="space-y-2">
                <Zeile label="Ihre Kosten" wert={fmtEuro(ergebnis.heizung.kosten)} />
                <Zeile
                  label={`Höchstgrenze (${wohneinheiten} WE)`}
                  wert={fmtEuro(ergebnis.heizung.cap)}
                />
                <Zeile
                  label="Anrechenbare Kosten"
                  wert={fmtEuro(ergebnis.heizung.anrechenbar)}
                />
                <div className="border-t border-zinc-border pt-2 space-y-2">
                  <Zeile
                    label="Grundförderung"
                    wert={`${ergebnis.heizung.grundfoerderung} %`}
                  />
                  {ergebnis.heizung.klimaBonus > 0 && (
                    <Zeile
                      label="Klimageschwindigkeitsbonus"
                      wert={`+ ${ergebnis.heizung.klimaBonus} %`}
                      akzent
                    />
                  )}
                  {ergebnis.heizung.einkommensbonus > 0 && (
                    <Zeile
                      label="Einkommensbonus"
                      wert={`+ ${ergebnis.heizung.einkommensbonus} %`}
                      akzent
                    />
                  )}
                  <Zeile
                    label={`Fördersatz (Deckel ${ergebnis.heizung.deckel} %)`}
                    wert={`${ergebnis.heizung.satz} %`}
                    fett
                  />
                </div>
              </div>
            </div>
          )}

          {/* Aufschlüsselung BAFA */}
          {ergebnis.bafa.aktiv && (
            <div className="card-base p-5 mb-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-zinc-primary text-sm">
                  Einzelmaßnahmen an Hülle & Technik (BAFA)
                </h3>
                <span className="font-mono font-bold text-teal-light">
                  {fmtEuro(ergebnis.bafa.zuschuss)}
                </span>
              </div>
              <div className="space-y-2">
                {gewaehlt
                  .filter((id) => id !== "heizung")
                  .map((id) => {
                    const m = MASSNAHMEN.find((x) => x.id === id)!;
                    return (
                      <Zeile key={id} label={m.label} wert={fmtEuro(kosten[id] ?? 0)} />
                    );
                  })}
                <div className="border-t border-zinc-border pt-2 space-y-2">
                  <Zeile
                    label={`Höchstgrenze (${wohneinheiten} WE)`}
                    wert={fmtEuro(isfp ? ergebnis.bafa.capMitIsfp : ergebnis.bafa.cap)}
                  />
                  <Zeile
                    label={`Anteil bis Höchstgrenze × ${ergebnis.bafa.satzBasis} %`}
                    wert={fmtEuro(ergebnis.bafa.basisAnteil)}
                  />
                  {ergebnis.bafa.isfpAnteil > 0 && (
                    <Zeile
                      label={`Anteil darüber × ${ergebnis.bafa.satzIsfp} % (iSFP)`}
                      wert={fmtEuro(ergebnis.bafa.isfpAnteil)}
                      akzent
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Baubegleitung */}
          {ergebnis.baubegleitung.aktiv && (
            <div className="card-base p-5 mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-zinc-primary text-sm">
                    Fachplanung & Baubegleitung
                  </h3>
                  <p className="text-xs text-zinc-muted mt-1">
                    {ergebnis.baubegleitung.satz} % von bis zu{" "}
                    {fmtEuro(ergebnis.baubegleitung.foerderfaehig)} Honorar
                  </p>
                </div>
                <span className="font-mono font-bold text-teal-light">
                  bis {fmtEuro(ergebnis.baubegleitung.zuschuss)}
                </span>
              </div>
            </div>
          )}

          {/* Eigenanteil */}
          <div className="rounded-xl border border-zinc-border bg-bg-accent p-5 mb-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs text-zinc-muted">Ihr Eigenanteil</div>
                <div className="text-3xl font-bold font-mono text-zinc-primary">
                  {fmtEuro(ergebnis.eigenanteil)}
                </div>
              </div>
              <div className="text-right text-sm">
                <div className="text-zinc-hint line-through">
                  {fmtEuro(ergebnis.gesamtKosten)}
                </div>
                <div className="text-teal-light font-semibold">
                  − {fmtEuro(ergebnis.gesamtZuschuss)}
                </div>
              </div>
            </div>
            {ergebnis.nichtAnrechenbar > 0 && (
              <p className="text-xs text-zinc-hint mt-3 leading-relaxed">
                Davon {fmtEuro(ergebnis.nichtAnrechenbar)} oberhalb der förderfähigen
                Höchstgrenzen — dieser Teil bleibt ungefördert.
              </p>
            )}
          </div>

          {/* Steuerbonus */}
          {ergebnis.steuerbonus.moeglich && (
            <div className="card-base p-5 mb-5">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-zinc-primary text-sm">
                  Alternative: Steuerbonus § 35c EStG
                </h3>
                <span
                  className={`font-mono font-bold ${
                    ergebnis.steuerbonus.besser ? "text-amber" : "text-zinc-secondary"
                  }`}
                >
                  {fmtEuro(ergebnis.steuerbonus.betrag)}
                </span>
              </div>
              <p className="text-xs text-zinc-muted leading-relaxed">
                {STEUERBONUS.satz} % der Kosten bei selbst genutztem Wohneigentum, maximal{" "}
                {fmtEuro(STEUERBONUS.maxBonus)}, verteilt {STEUERBONUS.verteilung}. Für
                dieselbe Maßnahme nicht mit Zuschuss kombinierbar — eine Aufteilung nach
                Maßnahmen ist aber zulässig.
              </p>
            </div>
          )}

          {/* Hinweise */}
          {ergebnis.hinweise.length > 0 && (
            <div className="space-y-2 mb-5">
              {ergebnis.hinweise.map((h, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 rounded-lg border p-3 text-xs leading-relaxed ${
                    h.art === "warnung"
                      ? "border-amber/30 bg-amber/5 text-zinc-secondary"
                      : h.art === "chance"
                      ? "border-teal-light/30 bg-teal-light/5 text-zinc-secondary"
                      : "border-zinc-border bg-bg-card text-zinc-muted"
                  }`}
                >
                  <Icon
                    name={h.art === "chance" ? "bulb" : h.art === "warnung" ? "target" : "check"}
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      h.art === "chance"
                        ? "text-teal-light"
                        : h.art === "warnung"
                        ? "text-amber"
                        : "text-zinc-hint"
                    }`}
                  />
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          )}

          <p className="text-xs text-zinc-hint mb-5 leading-relaxed">
            Unverbindliche Schätzung nach den {STAND.lang}. Verbindlich ist ausschließlich der
            Zuwendungsbescheid von BAFA bzw. KfW. Fördersätze, Höchstgrenzen und technische
            Mindestanforderungen können sich ändern.
          </p>

          {/* CTA */}
          <div className="rounded-xl bg-bg-accent border border-amber/20 p-6 text-center mb-4">
            <h3 className="font-bold text-zinc-primary mb-2">Förderung sichern?</h3>
            <p className="text-sm text-zinc-muted mb-4 leading-relaxed">
              Als dena-gelisteter Energieeffizienz-Experte übernehme ich die technische
              Projektbeschreibung, die Antragstellung bei BAFA und KfW und die Baubegleitung
              bis zum Verwendungsnachweis.
            </p>
            <Link href="/kontakt" className="btn-primary w-full justify-center text-base py-3.5">
              Kostenlose Erstberatung anfragen
            </Link>
            <p className="text-xs text-zinc-hint mt-3">
              Jonas Tonn · IBT Ingenieurbüro · Energieberater (BAFA/KfW)
            </p>
          </div>

          <div className="flex justify-between gap-3">
            <button type="button" className="btn-secondary text-sm" onClick={() => setStep(2)}>
              ← Angaben ändern
            </button>
            <button type="button" className="btn-ghost text-sm" onClick={reset}>
              Neue Berechnung
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- kleine Bausteine ---------------- */

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <span
      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-150 ${
        checked ? "bg-amber border-amber text-onAccent" : "border-zinc-borderHover"
      }`}
    >
      {checked && (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </span>
  );
}

function Zeile({
  label,
  wert,
  akzent,
  fett,
}: {
  label: string;
  wert: string;
  akzent?: boolean;
  fett?: boolean;
}) {
  return (
    <div className={`flex justify-between gap-3 text-sm ${fett ? "font-semibold" : ""}`}>
      <span className="text-zinc-muted">{label}</span>
      <span
        className={`font-mono shrink-0 ${
          akzent ? "text-amber font-semibold" : fett ? "text-amber" : "text-zinc-secondary"
        }`}
      >
        {wert}
      </span>
    </div>
  );
}
