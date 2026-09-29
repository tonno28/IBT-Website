import { energieberatungLeistungen, ingenieurLeistungen } from "@/lib/leistungskarten";
import { faqs } from "@/lib/faq";

/**
 * Strukturierte Daten nach schema.org (JSON-LD). Google liest daraus
 * Unternehmensangaben und FAQ, KI-Suchen übernehmen die Fakten direkt.
 *
 * Regel: Hier steht nichts, was nicht auch sichtbar auf der Seite steht.
 * Stammdaten wie im Impressum, Region wie im Text, Leistungen und Preise
 * kommen aus leistungskarten.ts, die Fragen aus faq.ts.
 */

const BASIS = "https://ib-tonn.de";
const BUERO_ID = `${BASIS}/#buero`;
const PERSON_ID = `${BASIS}/#jonas-tonn`;

/** "ab 650 € (EFH)" → 650. "auf Anfrage" → undefined. */
function mindestpreis(preis: string): number | undefined {
  const m = preis.match(/ab\s+([\d.]+)\s*€/);
  return m ? Number(m[1].replace(/\./g, "")) : undefined;
}

function angebot(l: { href: string; title: string; desc: string; price: string }) {
  const preis = mindestpreis(l.price);
  return {
    "@type": "Offer",
    url: BASIS + l.href + "/",
    itemOffered: {
      "@type": "Service",
      name: l.title,
      description: l.desc,
      provider: { "@id": BUERO_ID },
      areaServed: ["Köln", "Aachen", "Düren"],
    },
    ...(preis !== undefined && {
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: preis,
        priceCurrency: "EUR",
        description: `${l.price}. Endpreis, Kleinunternehmer nach § 19 UStG.`,
      },
    }),
  };
}

export const unternehmenSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": BUERO_ID,
      name: "IBT Ingenieurbüro Tonn",
      description:
        "Unabhängige Energieberatung und technische Ingenieurleistungen für Wohngebäude: iSFP, Förderberatung BEG (BAFA/KfW), Energieausweis, Baubegleitung, Heizlastberechnung, U-Wert, Taupunkt, Lüftungskonzept. Für die Region Köln, Aachen und Düren.",
      url: BASIS + "/",
      logo: BASIS + "/icon-512.png",
      image: BASIS + "/opengraph-image",
      email: "info@ib-tonn.de",
      telephone: "+49 152 31060247",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Friedhofstr. 15",
        postalCode: "52399",
        addressLocality: "Merzenich",
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
      areaServed: [
        { "@type": "City", name: "Köln" },
        { "@type": "City", name: "Aachen" },
        { "@type": "City", name: "Düren" },
        { "@type": "City", name: "Merzenich" },
      ],
      founder: { "@id": PERSON_ID },
      knowsAbout: [
        "Energieberatung",
        "Individueller Sanierungsfahrplan (iSFP)",
        "Bundesförderung für effiziente Gebäude (BEG)",
        "BAFA-Förderung",
        "KfW-Förderung",
        "Heizungsförderung",
        "Energieausweis",
        "Heizlastberechnung nach DIN EN 12831",
        "Hydraulischer Abgleich",
        "U-Wert-Berechnung nach DIN EN ISO 6946",
        "Taupunktnachweis nach DIN 4108-3",
        "Lüftungskonzept nach DIN 1946-6",
        "Wärmebrückenberechnung nach DIN EN ISO 10211",
        "Gebäudeenergiegesetz (GEG)",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Leistungen",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Energieberatung",
            itemListElement: energieberatungLeistungen.map(angebot),
          },
          {
            "@type": "OfferCatalog",
            name: "Ingenieurleistungen",
            itemListElement: ingenieurLeistungen.map(angebot),
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Jonas Tonn",
      jobTitle: "Energieberater und Ingenieur (B. Eng.)",
      worksFor: { "@id": BUERO_ID },
      alumniOf: { "@type": "CollegeOrUniversity", name: "FH Aachen" },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "B. Eng. Smart Building Engineering",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Qualifikationsnachweis",
          name: "Energieberater nach § 88 GEG",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Listung",
          name: "Energieeffizienz-Expertenliste der dena (BAFA/KfW)",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASIS}/#website`,
      url: BASIS + "/",
      name: "IBT Ingenieurbüro Tonn",
      inLanguage: "de-DE",
      publisher: { "@id": BUERO_ID },
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};
