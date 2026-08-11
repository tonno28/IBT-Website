"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { ANFRAGE_EMPFAENGER, sendeAnfrage, type Versandstatus } from "@/lib/anfrage";
import {
  LEISTUNGEN,
  antwortenBlock,
  fragenFuer,
  leistungBySlug,
} from "@/lib/leistungen";

// Note: metadata can't be in client components — move to separate file if needed
// For now, we keep contact form logic here

export default function KontaktPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefon: "",
    anliegen: "",
    nachricht: "",
    datenschutz: false,
  });
  /** Antworten auf die Qualifizierungsfragen, nach Frage-ID. */
  const [antworten, setAntworten] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Versandstatus>("bereit");
  const [fehler, setFehler] = useState("");

  // Das Anliegen kommt als ?anliegen=<slug> von der jeweiligen Leistungsseite.
  // Bewusst über window statt useSearchParams: die Seite wird statisch
  // exportiert, und useSearchParams zwingt sonst zu einer Suspense-Grenze.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("anliegen");
    const treffer = leistungBySlug(slug);
    if (treffer) setForm((prev) => ({ ...prev, anliegen: treffer.slug }));
  }, []);

  const leistung = leistungBySlug(form.anliegen);
  const fragen = fragenFuer(leistung);

  function setzeAntwort(id: string, wert: string) {
    setAntworten((prev) => ({ ...prev, [id]: prev[id] === wert ? "" : wert }));
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sendet");
    setFehler("");
    try {
      const angaben = antwortenBlock(leistung, antworten);
      await sendeAnfrage({
        subject: `Anfrage: ${leistung?.label ?? "Erstberatung"}`,
        from_name: form.name,
        name: form.name,
        email: form.email,
        telefon: form.telefon || "—",
        anliegen: leistung?.label ?? "—",
        angaben: angaben || "— keine Angaben gemacht —",
        nachricht: form.nachricht || "—",
      });
      setStatus("ok");
      setSubmitted(true);
    } catch (err) {
      setStatus("fehler");
      setFehler(err instanceof Error ? err.message : "Unbekannter Fehler");
    }
  }

  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-2xl">
            <p className="section-label">Kontakt</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-4">
              Kostenlose Erstberatung
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed">
              Beschreiben Sie kurz Ihr Vorhaben — ich melde mich innerhalb eines Werktags
              mit einer ersten Einschätzung. Keine Verpflichtung.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Kontaktdaten */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-zinc-primary mb-4">
                  Jonas Tonn<br />
                  <span className="text-zinc-secondary font-normal text-base">IBT Ingenieurbüro Tonn</span>
                </h2>
                <div className="space-y-3">
                  <a href="mailto:info@ib-tonn.de" className="flex items-center gap-3 text-sm text-zinc-muted hover:text-amber transition-colors">
                    <svg className="w-4 h-4 text-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@ib-tonn.de
                  </a>
                  <a href="tel:+4915231060247" className="flex items-center gap-3 text-sm text-zinc-muted hover:text-amber transition-colors">
                    <svg className="w-4 h-4 text-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0152 31060247
                  </a>
                  <div className="flex items-start gap-3 text-sm text-zinc-muted">
                    <svg className="w-4 h-4 text-amber shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Köln · Aachen · Düren<br />und Umgebung</span>
                  </div>
                </div>
              </div>

              <div className="card-base p-5">
                <h3 className="font-semibold text-zinc-primary mb-2">Antwortzeit</h3>
                <p className="text-sm text-zinc-muted">
                  Ich antworte auf Anfragen in der Regel <strong className="text-zinc-secondary">innerhalb eines Werktags</strong>.
                  Bei dringenden Anfragen gerne telefonisch.
                </p>
              </div>

              <div className="card-base p-5">
                <h3 className="font-semibold text-zinc-primary mb-3">Qualifikationen</h3>
                <div className="flex flex-wrap gap-2">
                  {["§88 GEG", "dena-gelistet", "BAFA/KfW"].map((b) => (
                    <span key={b} className="badge-teal">{b}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Formular */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card-base p-10 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-teal-dark/15 text-teal-light ring-1 ring-teal-dark/30">
                    <Icon name="check" className="w-7 h-7" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-primary mb-3">
                    Nachricht erhalten!
                  </h2>
                  <p className="text-zinc-muted">
                    Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb eines Werktags bei
                    Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-base p-6 sm:p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-zinc-secondary mb-1.5" htmlFor="name">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Max Mustermann"
                        className="w-full px-4 py-2.5 bg-bg-hover border border-zinc-border rounded-lg text-zinc-primary text-sm focus:outline-none focus:border-amber transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-secondary mb-1.5" htmlFor="email">
                        E-Mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="max@beispiel.de"
                        className="w-full px-4 py-2.5 bg-bg-hover border border-zinc-border rounded-lg text-zinc-primary text-sm focus:outline-none focus:border-amber transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-zinc-secondary mb-1.5" htmlFor="telefon">
                        Telefon (optional)
                      </label>
                      <input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        value={form.telefon}
                        onChange={handleChange}
                        placeholder="+49 …"
                        className="w-full px-4 py-2.5 bg-bg-hover border border-zinc-border rounded-lg text-zinc-primary text-sm focus:outline-none focus:border-amber transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-secondary mb-1.5" htmlFor="anliegen">
                        Anliegen *
                      </label>
                      <select
                        id="anliegen"
                        name="anliegen"
                        required
                        value={form.anliegen}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-bg-hover border border-zinc-border rounded-lg text-zinc-primary text-sm focus:outline-none focus:border-amber transition-colors appearance-none"
                      >
                        <option value="">Bitte wählen…</option>
                        {LEISTUNGEN.map((l) => (
                          <option key={l.slug} value={l.slug}>{l.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Qualifizierung — erscheint erst, wenn das Anliegen feststeht.
                      Alles freiwillig; die Angaben ersparen eine Rückfragerunde. */}
                  {leistung && fragen.length > 0 && (
                    <fieldset className="rounded-xl border border-zinc-border bg-bg-hover/50 p-5">
                      <legend className="px-2 text-sm font-semibold text-zinc-primary">
                        Damit ich Ihnen gleich etwas Konkretes sagen kann
                      </legend>
                      <p className="text-xs text-zinc-muted mb-4 leading-relaxed">
                        Alles freiwillig — je mehr Sie ausfüllen, desto präziser fällt
                        meine erste Einschätzung aus.
                      </p>

                      <div className="space-y-4">
                        {fragen.map((f) => (
                          <div key={f.id}>
                            <span className="block text-sm text-zinc-secondary mb-2">
                              {f.label}
                            </span>
                            {f.typ === "auswahl" ? (
                              <div className="flex flex-wrap gap-2">
                                {f.optionen?.map((o) => {
                                  const aktiv = antworten[f.id] === o;
                                  return (
                                    <button
                                      key={o}
                                      type="button"
                                      onClick={() => setzeAntwort(f.id, o)}
                                      aria-pressed={aktiv}
                                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                                        aktiv
                                          ? "border-amber bg-amber text-onAccent"
                                          : "border-zinc-border bg-bg-primary text-zinc-secondary hover:border-zinc-borderHover"
                                      }`}
                                    >
                                      {o}
                                    </button>
                                  );
                                })}
                              </div>
                            ) : (
                              <input
                                type="text"
                                value={antworten[f.id] ?? ""}
                                onChange={(e) =>
                                  setAntworten((prev) => ({
                                    ...prev,
                                    [f.id]: e.target.value,
                                  }))
                                }
                                placeholder={f.platzhalter}
                                className="w-full max-w-[240px] px-4 py-2.5 bg-bg-primary border border-zinc-border rounded-lg text-zinc-primary text-sm focus:outline-none focus:border-amber transition-colors"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  )}

                  <div>
                    <label className="block text-sm text-zinc-secondary mb-1.5" htmlFor="nachricht">
                      Ihre Nachricht (optional)
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={4}
                      value={form.nachricht}
                      onChange={handleChange}
                      placeholder="Alles, was oben nicht gepasst hat …"
                      className="w-full px-4 py-2.5 bg-bg-hover border border-zinc-border rounded-lg text-zinc-primary text-sm focus:outline-none focus:border-amber transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="datenschutz"
                      name="datenschutz"
                      type="checkbox"
                      required
                      checked={form.datenschutz}
                      onChange={handleChange}
                      className="mt-1 shrink-0 accent-amber"
                    />
                    <label htmlFor="datenschutz" className="text-xs text-zinc-muted leading-relaxed">
                      Ich habe die{" "}
                      <a href="/datenschutz" className="text-amber hover:underline">Datenschutzerklärung</a>{" "}
                      gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
                      einverstanden. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sendet"}
                    style={{ opacity: status === "sendet" ? 0.6 : 1 }}
                    className="btn-primary w-full justify-center py-3.5 text-base"
                  >
                    {status === "sendet" ? "Wird gesendet …" : "Anfrage absenden"}
                  </button>

                  {status === "fehler" && (
                    <p className="text-xs text-zinc-secondary leading-relaxed rounded-lg border border-amber/30 bg-amber/5 p-3">
                      Das Senden hat nicht geklappt ({fehler}). Bitte versuchen Sie es noch einmal
                      oder schreiben Sie mir direkt an{" "}
                      <a
                        href={`mailto:${ANFRAGE_EMPFAENGER}`}
                        className="text-amber hover:underline"
                      >
                        {ANFRAGE_EMPFAENGER}
                      </a>
                      .
                    </p>
                  )}

                  <p className="text-xs text-zinc-hint">
                    * Pflichtfelder. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
                    verwendet und nicht an Dritte weitergegeben.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
