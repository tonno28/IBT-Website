import LeistungCard from "./LeistungCard";

const energieberatung = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "iSFP Sanierungsfahrplan",
    description: "Individueller Sanierungsfahrplan nach BEG: maßgeschneiderte Maßnahmen, 5 % Extra-Förderbonus auf alle Folgemaßnahmen.",
    href: "/energieberatung/isfp",
    price: "ab 650 € netto (EFH)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Förderberatung BEG",
    description: "Antragsstellung bei BAFA und KfW, Förderoptimierung, Baubegleitung — bis 70 % Zuschuss auf Ihre Investition.",
    href: "/energieberatung/foerderberatung",
    price: "auf Anfrage",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Energieausweis",
    description: "Verbrauchs- und Bedarfsausweis für Wohn- und Nichtwohngebäude. Pflicht bei Verkauf, Vermietung und Neubau.",
    href: "/energieberatung/energieausweis",
    price: "ab 95 € (Verbrauch)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Fachplanung & Baubegleitung",
    description: "Energetische Fachplanung und Baubegleitung (iSFP/BEG). Pflicht für viele Fördermaßnahmen — vollständig übernommen.",
    href: "/energieberatung/baubegleitung",
    price: "ab 1.000 € (EFH)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Effizienzhaus-Bilanzierung",
    description: "Nachweis Effizienzhaus 40/55/70/85 nach GEG für KfW-Förderung und Neubau. DIN V 18599 / DIN V 4108-6.",
    href: "/energieberatung/effizienzhaus",
    price: "auf Anfrage",
  },
];

const ingenieurleistungen = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
    title: "Heizlastberechnung",
    description: "Normheizlast nach DIN EN 12831 für Heizungsauslegung, Wärmepumpenplanung und Hydraulischen Abgleich.",
    href: "/ingenieurleistungen/heizlast",
    price: "ab 250 € (EFH)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Bauteilberechnung",
    description: "U-Wert-Berechnung von Wand, Dach, Boden und Fenster nach DIN EN 6946. Grundlage für Förderanträge und Nachweise.",
    href: "/ingenieurleistungen/bauteil",
    price: "ab 80 € / Bauteil",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Taupunktnachweis",
    description: "Feuchteschutznachweis nach Glaser-Verfahren (DIN 4108-3). Vorbeugung von Schimmel und Kondensatschäden.",
    href: "/ingenieurleistungen/taupunkt",
    price: "ab 120 € / Bauteil",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.249 2.249 0 0017.5 15.687v-.543c0-.794-.409-1.538-1.086-1.964l-.405-.253a2.25 2.25 0 01-.921-2.952l.2-.398c.341-.682.188-1.506-.36-2.022l-.928-.873a2.25 2.25 0 00-2.833-.199l-.16.108a2.25 2.25 0 01-2.473 0l-.16-.108" />
      </svg>
    ),
    title: "Lüftungskonzept",
    description: "Lüftungskonzept nach DIN 1946-6 für Einfamilien- und Mehrfamilienhäuser. Pflicht bei luftdichter Gebäudehülle.",
    href: "/ingenieurleistungen/lueftung",
    price: "ab 180 € (EFH)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Wärmebrückenberechnung",
    description: "Wärmebrücken-Nachweis (Ψ-Werte) nach DIN EN ISO 10211 für detaillierte Gebäudebilanzierung.",
    href: "/ingenieurleistungen/waermebruecken",
    price: "auf Anfrage",
  },
];

export default function LeistungenOverview() {
  return (
    <section className="section-pad bg-void relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-max relative">
        {/* Header */}
        <div className="mb-16">
          <span className="section-eyebrow">Leistungen</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink-bright mt-3 mb-4">
            Zwei Säulen.<br />
            <span className="text-electric-grad">Ein Ansprechpartner.</span>
          </h2>
          <p className="text-ink-body max-w-xl leading-relaxed">
            Energieberater und Ingenieur in einer Person — die Schnittstelle
            zwischen Förderung, Bauphysik und ausführendem Handwerk.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Energieberatung */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="badge-electric">Energieberatung</div>
              <div className="h-px flex-1 bg-electric/20" />
            </div>
            <div className="space-y-3">
              {energieberatung.map((item) => (
                <LeistungCard key={item.href} {...item} variant="electric" />
              ))}
            </div>
          </div>

          {/* Ingenieurleistungen */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="badge-warm">Ingenieurleistungen</div>
              <div className="h-px flex-1 bg-warm/20" />
            </div>
            <div className="space-y-3">
              {ingenieurleistungen.map((item) => (
                <LeistungCard key={item.href} {...item} variant="warm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
