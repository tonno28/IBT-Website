"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import {
  BAFA,
  HEIZUNG,
  HONORAR,
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
  const [details, setDetails] = useState(false);

  const eingabe: Eingabe = useMemo(
    () => ({
      wohneinheiten,
      selbstnutzend,
      kosten: Object.fromEntries(gewaehlt.map((id) => [id, kosten[id] ?? 0])) as Partial<
        Record<MassnahmeId, number>
      >,
      isfp,
      klimaBonus,
      zvE,
      kindImHaushalt,
    }),
    [wohneinheiten, selbstnutzend, gewaehlt, kosten, isfp, klimaBonus, zvE, kindImHaushalt]
  );

  const r = useMemo(() => berechne(eingabe), [eingabe]);

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
    setDetails(false);
  }

  // Nur die zwei wichtigsten Hinweise stehen im Ergebnis, der Rest in den Details.
  const rang = { warnung: 0, chance: 1, info: 2 } as const;
  const hinweise = [...r.hinweise].sort((a, b) => rang[a.art] - rang[b.art]);
  const hinweiseOben = hinweise.slice(0, 2);
  const hinweiseDetails = hinweise.slice(2);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Fortschritt */}
      <div className="flex items-center gap-2 mb-8">
        {SCHRITTE.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => i < step && setStep(i)}
            disabled={i > step}
            className="flex-1 text-left"
          >
            <div
              className={`h-1.5 rounded-full transition-colors duration-300 ${
                i === step ? "bg-amber" : i < step ? "bg-teal-light" : "bg-zinc-border"
              }`}
            />
            <span
              className={`mt-2 block text-[11px] font-semibold uppercase tracking-wide ${
                i === step ? "text-amber" : i < step ? "text-teal-light" : "text-zinc-hint"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* ---------------- 0: Gebäude ---------------- */}
      {step === 0 && (
        <div>
          <h2 className="text-lg font-semibold text-zinc-primary mb-5">
            Um welches Gebäude geht es?
          </h2>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              { wert: true, label: "Selbst genutzt" },
              { wert: false, label: "Vermietet" },
            ].map((opt) => (
              <button
                key={String(opt.wert)}
                type="button"
                onClick={() => setSelbstnutzend(opt.wert)}
                className={`p-3 rounded-xl border text-sm font-semibold transition-colors duration-150 ${
                  selbstnutzend === opt.wert
                    ? "border-amber bg-bg-accent text-zinc-primary"
                    : "border-zinc-border bg-bg-card text-zinc-secondary hover:border-zinc-borderHover"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-zinc-hint mb-7 -mt-4">
            Klima- und Einkommensbonus gibt es nur für selbst genutzte Wohneinheiten.
          </p>

          <label htmlFor="we" className="block text-sm font-medium text-zinc-secondary mb-3">
            Wohneinheiten: <span className="text-amber font-bold">{wohneinheiten}</span>
          </label>
          <input
            id="we"
            type="range"
            min="1"
            max="20"
            value={wohneinheiten}
            onChange={(ev) => setWohneinheiten(parseInt(ev.target.value, 10))}
          />
          <div className="flex justify-between text-xs text-zinc-hint mt-1.5 mb-8">
            <span>1 (EFH)</span>
            <span>20 (MFH)</span>
          </div>

          <div className="flex justify-end">
            <button type="button" className="btn-primary" onClick={() => setStep(1)}>
              Weiter →
            </button>
          </div>
        </div>
      )}

      {/* ---------------- 1: Maßnahmen ---------------- */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold text-zinc-primary mb-1">Was ist geplant?</h2>
          <p className="text-sm text-zinc-muted mb-5">
            Mehrfachauswahl. Kosten sind mit Richtwerten vorbelegt.
          </p>

          <div className="space-y-1.5 mb-6">
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
                    aria-pressed={aktiv}
                    className="w-full text-left flex items-center gap-3 px-4 py-3"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ${
                        aktiv
                          ? "bg-amber/15 text-amber ring-amber/25"
                          : "bg-bg-accent text-zinc-secondary ring-zinc-border"
                      }`}
                    >
                      <Icon name={m.icon} className="w-4 h-4" />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-zinc-primary">
                      {m.label}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-hint">
                      {m.traeger}
                    </span>
                  </button>

                  {aktiv && (
                    <div className="px-4 pb-3 pl-15">
                      <div className="relative max-w-[200px] ml-11">
                        <input
                          type="number"
                          min={0}
                          step={500}
                          aria-label={`Kosten ${m.label}`}
                          value={kosten[m.id] ?? ""}
                          onChange={(ev) =>
                            setKosten((k) => ({
                              ...k,
                              [m.id]:
                                ev.target.value === "" ? 0 : Math.max(0, Number(ev.target.value)),
                            }))
                          }
                          className="w-full px-3 py-1.5 pr-7 bg-bg-card border border-zinc-border rounded-lg text-zinc-primary text-sm focus:outline-none focus:border-amber transition-colors"
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

          {gewaehlt.length > 0 && (
            <div className="flex items-center justify-between rounded-xl border border-zinc-border bg-bg-card px-4 py-3 mb-6 text-sm">
              <span className="text-zinc-muted">Baukosten gesamt</span>
              <span className="font-semibold text-zinc-primary">{fmtEuro(summeKosten)}</span>
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

      {/* ---------------- 2: Boni ---------------- */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-semibold text-zinc-primary mb-1">Was trifft zu?</h2>
          <p className="text-sm text-zinc-muted mb-5">Jede Angabe erhöht den Fördersatz.</p>

          {bafaGewaehlt && (
            <Schalter
              an={isfp}
              onClick={() => setIsfp((v) => !v)}
              titel="Individueller Sanierungsfahrplan (iSFP) liegt vor"
              zusatz={`+ ${BAFA.isfpBonus} %`}
              text="Verdoppelt die förderfähigen Kosten. Der Bonus gilt für den Anteil über 30.000 €."
            />
          )}

          {heizungGewaehlt && selbstnutzend && (
            <Schalter
              an={klimaBonus}
              onClick={() => setKlimaBonus((v) => !v)}
              titel="Alte fossile Heizung wird ersetzt"
              zusatz={`+ ${HEIZUNG.klimaBonus} %`}
              text="Öl, Kohle, Gas-Etagenheizung, Nachtspeicher oder Gasheizung ab 20 Jahren."
            />
          )}

          {heizungGewaehlt && selbstnutzend && (
            <div className="rounded-xl border border-zinc-border bg-bg-card p-4 mb-2">
              <span className="block text-sm font-semibold text-zinc-primary mb-1">
                Zu versteuerndes Haushaltseinkommen
              </span>
              <p className="text-xs text-zinc-muted mb-3">
                Entscheidet über den Einkommensbonus von 10 bis 40 %.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {EINKOMMEN_PRESETS.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setZvE(zvE === p.wert ? null : p.wert)}
                    className={`rounded-lg border px-2 py-2 text-center transition-colors duration-150 ${
                      zvE === p.wert
                        ? "border-amber bg-bg-accent"
                        : "border-zinc-border hover:border-zinc-borderHover"
                    }`}
                  >
                    <span className="block text-[11px] text-zinc-muted">{p.label}</span>
                    <span className="block text-sm font-bold text-amber">
                      +{einkommensbonus(p.wert, kindImHaushalt)} %
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setKindImHaushalt((v) => !v)}
                className="flex items-start gap-2.5 text-left"
              >
                <Haken an={kindImHaushalt} />
                <span className="text-sm text-zinc-secondary">
                  Mindestens ein minderjähriges Kind im Haushalt
                  <span className="block text-xs text-zinc-hint">
                    Familienzuschlag: 10.000 € Abschlag auf das Einkommen
                  </span>
                </span>
              </button>
            </div>
          )}

          {heizungGewaehlt && !selbstnutzend && (
            <p className="text-sm text-zinc-muted mb-2 rounded-xl border border-zinc-border bg-bg-card p-4">
              Für vermietete Wohneinheiten bleibt es bei der Grundförderung von{" "}
              {HEIZUNG.grundfoerderung} %.
            </p>
          )}

          <div className="flex justify-between gap-3 mt-6">
            <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
              ← Zurück
            </button>
            <button type="button" className="btn-primary" onClick={() => setStep(3)}>
              Berechnen →
            </button>
          </div>
        </div>
      )}

      {/* ---------------- 3: Ergebnis ---------------- */}
      {step === 3 && (
        <div>
          <div className="text-center mb-6">
            <div className="text-xs text-zinc-muted mb-1">Ihre geschätzte Förderung</div>
            <div className="text-5xl sm:text-6xl font-bold text-teal-light">
              {fmtEuro(r.gesamtZuschuss)}
            </div>
            <div className="text-sm text-zinc-secondary mt-2">
              {Math.round(r.gesamtSatz)} % von {fmtEuro(r.gesamtKosten)}
            </div>
          </div>

          <div className="flex h-3 rounded-full overflow-hidden bg-zinc-border mb-7">
            <div
              className="h-full transition-[width] duration-700"
              style={{
                width: `${Math.min(100, r.gesamtSatz)}%`,
                background: "linear-gradient(90deg, #16a34a, #4ade80)",
              }}
            />
          </div>

          {/* Kosten */}
          <div className="card-base p-5 mb-3 space-y-2">
            <Zeile label="Baukosten" wert={fmtEuro(r.baukosten)} />
            <Zeile
              label={`Mein Honorar (${HONORAR.satz} %, mind. ${fmtEuro(HONORAR.mindest)})`}
              wert={fmtEuro(r.honorar.betrag)}
            />
            <div className="border-t border-zinc-border pt-2">
              <Zeile label="Gesamt" wert={fmtEuro(r.gesamtKosten)} fett />
            </div>
          </div>

          {/* Förderung */}
          <div className="card-base p-5 mb-3 space-y-2">
            {r.heizung.aktiv && (
              <Zeile
                label={`Heizung (KfW) · ${r.heizung.satz} %`}
                wert={`− ${fmtEuro(r.heizung.zuschuss)}`}
                gruen
              />
            )}
            {r.bafa.aktiv && (
              <Zeile
                label={`Hülle & Technik (BAFA) · ${r.bafa.satzBasis}${
                  r.bafa.isfpAnteil > 0 ? `–${r.bafa.satzIsfp}` : ""
                } %`}
                wert={`− ${fmtEuro(r.bafa.zuschuss)}`}
                gruen
              />
            )}
            {r.honorar.zuschuss > 0 && (
              <Zeile
                label={`Baubegleitung · ${r.honorar.foerdersatz} % vom Honorar`}
                wert={`− ${fmtEuro(r.honorar.zuschuss)}`}
                gruen
              />
            )}
          </div>

          {/* Eigenanteil */}
          <div className="rounded-xl border border-zinc-border bg-bg-accent p-5 mb-5">
            <div className="flex items-end justify-between gap-4">
              <span className="text-sm text-zinc-secondary">Ihr Eigenanteil</span>
              <span className="text-3xl font-bold text-zinc-primary">
                {fmtEuro(r.eigenanteil)}
              </span>
            </div>
            <p className="text-xs text-zinc-hint mt-2">
              Davon Honorar {fmtEuro(r.honorar.eigenanteil)} nach Abzug der Förderung.
            </p>
          </div>

          {/* Die zwei wichtigsten Hinweise */}
          <div className="space-y-2 mb-4">
            {hinweiseOben.map((h, i) => (
              <div
                key={i}
                className={`flex items-start gap-2.5 rounded-lg border p-3 text-xs leading-relaxed ${
                  h.art === "warnung"
                    ? "border-amber/30 bg-amber/5 text-zinc-secondary"
                    : "border-teal-light/30 bg-teal-light/5 text-zinc-secondary"
                }`}
              >
                <Icon
                  name={h.art === "chance" ? "bulb" : "target"}
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    h.art === "chance" ? "text-teal-light" : "text-amber"
                  }`}
                />
                <span>{h.text}</span>
              </div>
            ))}
          </div>

          {/* Alles Weitere eingeklappt */}
          <button
            type="button"
            onClick={() => setDetails((v) => !v)}
            className="w-full text-left text-sm font-semibold text-zinc-secondary hover:text-zinc-primary border-t border-zinc-border pt-4 mb-4 transition-colors"
          >
            {details ? "Rechenweg ausblenden ▴" : "Rechenweg und Details ▾"}
          </button>

          {details && (
            <div className="space-y-3 mb-5">
              {r.heizung.aktiv && (
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-sm font-semibold text-zinc-primary mb-2">Heizung</h3>
                  <Zeile label="Ihre Kosten" wert={fmtEuro(r.heizung.kosten)} />
                  <Zeile label="Höchstgrenze" wert={fmtEuro(r.heizung.cap)} />
                  <Zeile label="Anrechenbar" wert={fmtEuro(r.heizung.anrechenbar)} />
                  <Zeile label="Grundförderung" wert={`${r.heizung.grundfoerderung} %`} />
                  {r.heizung.klimaBonus > 0 && (
                    <Zeile label="Klimageschwindigkeitsbonus" wert={`+ ${r.heizung.klimaBonus} %`} />
                  )}
                  {r.heizung.einkommensbonus > 0 && (
                    <Zeile label="Einkommensbonus" wert={`+ ${r.heizung.einkommensbonus} %`} />
                  )}
                  <Zeile
                    label={`Fördersatz (Deckel ${r.heizung.deckel} %)`}
                    wert={`${r.heizung.satz} %`}
                    fett
                  />
                </div>
              )}

              {r.bafa.aktiv && (
                <div className="card-base p-5 space-y-2">
                  <h3 className="text-sm font-semibold text-zinc-primary mb-2">
                    Hülle & Technik
                  </h3>
                  <Zeile label="Ihre Kosten" wert={fmtEuro(r.bafa.kosten)} />
                  <Zeile
                    label="Höchstgrenze"
                    wert={fmtEuro(isfp ? r.bafa.capMitIsfp : r.bafa.cap)}
                  />
                  <Zeile
                    label={`Bis Höchstgrenze × ${r.bafa.satzBasis} %`}
                    wert={fmtEuro(r.bafa.basisAnteil)}
                  />
                  {r.bafa.isfpAnteil > 0 && (
                    <Zeile
                      label={`Darüber × ${r.bafa.satzIsfp} % (iSFP)`}
                      wert={fmtEuro(r.bafa.isfpAnteil)}
                    />
                  )}
                </div>
              )}

              {r.steuerbonus.moeglich && (
                <div className="card-base p-5">
                  <h3 className="text-sm font-semibold text-zinc-primary mb-1">
                    Alternative: Steuerbonus § 35c EStG
                  </h3>
                  <p className="text-xs text-zinc-muted leading-relaxed">
                    {STEUERBONUS.satz} % der Kosten ({fmtEuro(r.steuerbonus.betrag)}), verteilt{" "}
                    {STEUERBONUS.verteilung}. Für dieselbe Maßnahme nicht mit dem Zuschuss
                    kombinierbar.
                  </p>
                </div>
              )}

              {r.nichtAnrechenbar > 0 && (
                <p className="text-xs text-zinc-hint px-1">
                  {fmtEuro(r.nichtAnrechenbar)} liegen oberhalb der förderfähigen Höchstgrenzen
                  und bleiben ungefördert.
                </p>
              )}

              {hinweiseDetails.map((h, i) => (
                <p key={i} className="text-xs text-zinc-muted leading-relaxed px-1">
                  {h.text}
                </p>
              ))}
            </div>
          )}

          <p className="text-xs text-zinc-hint mb-5 leading-relaxed">
            Unverbindliche Schätzung nach den {STAND.lang}. Auch das Honorar ist ein Richtwert —
            verbindlich wird es erst nach einem Blick auf Ihr Objekt.
          </p>

          <div className="rounded-xl bg-bg-accent border border-amber/20 p-6 text-center mb-4">
            <h3 className="font-bold text-zinc-primary mb-2">Konkret werden?</h3>
            <p className="text-sm text-zinc-muted mb-4 leading-relaxed">
              Ich prüfe Ihre Zahlen, stelle die Anträge bei BAFA und KfW und begleite bis zum
              Verwendungsnachweis.
            </p>
            <Link href="/kontakt" className="btn-primary w-full justify-center text-base py-3.5">
              Kostenlose Erstberatung anfragen
            </Link>
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

/* ---------------- Bausteine ---------------- */

function Haken({ an }: { an: boolean }) {
  return (
    <span
      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-150 ${
        an ? "bg-amber border-amber text-onAccent" : "border-zinc-borderHover"
      }`}
    >
      {an && (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </span>
  );
}

function Schalter({
  an,
  onClick,
  titel,
  zusatz,
  text,
}: {
  an: boolean;
  onClick: () => void;
  titel: string;
  zusatz: string;
  text: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border mb-2 transition-colors duration-150 ${
        an ? "border-amber/50 bg-bg-accent" : "border-zinc-border bg-bg-card hover:border-zinc-borderHover"
      }`}
    >
      <Haken an={an} />
      <span className="flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-zinc-primary">{titel}</span>
          <span className="text-sm font-bold text-amber shrink-0">{zusatz}</span>
        </span>
        <span className="block text-xs text-zinc-muted mt-0.5 leading-relaxed">{text}</span>
      </span>
    </button>
  );
}

function Zeile({
  label,
  wert,
  fett,
  gruen,
}: {
  label: string;
  wert: string;
  fett?: boolean;
  gruen?: boolean;
}) {
  return (
    <div className={`flex justify-between gap-3 text-sm ${fett ? "font-semibold" : ""}`}>
      <span className="text-zinc-muted">{label}</span>
      <span
        className={`shrink-0 ${
          gruen ? "text-teal-light font-semibold" : fett ? "text-zinc-primary" : "text-zinc-secondary"
        }`}
      >
        {wert}
      </span>
    </div>
  );
}
