/**
 * Fragen und Antworten der Energieberatung-Seite. Die FAQ-Komponente zeigt
 * sie an, die strukturierten Daten (src/lib/schema.ts) geben dieselben Texte
 * als FAQPage an Google und KI-Suchen weiter.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Warum brauche ich eine Energieberatung?",
    answer:
      "Eine Energieberatung zeigt Ihnen, welche Maßnahmen an Ihrem Gebäude tatsächlich sinnvoll sind, in welcher Reihenfolge sie am meisten bringen und welche Förderung Sie dafür bekommen. Ohne diese Grundlage verschenken Sie häufig Fördergeld oder investieren an der falschen Stelle.",
  },
  {
    question: "Was kostet eine Energieberatung?",
    answer:
      "Das hängt vom Umfang ab, zum Beispiel Energieausweis, iSFP oder vollständige Baubegleitung. In einem kurzen Erstgespräch nenne ich Ihnen einen konkreten Preis für Ihr Vorhaben, unverbindlich und kostenlos.",
  },
  {
    question: "Wie hoch ist die aktuelle Förderung?",
    answer:
      "Die Förderhöhe hängt von Maßnahme, Einkommen und Kombination der Boni ab und ändert sich mit den Förderprogrammen. Nutzen Sie gerne den Förderrechner für eine erste Schätzung, die individuelle Prüfung übernehme ich im Erstgespräch.",
  },
  {
    question: "Wie läuft eine Förderung ab?",
    answer:
      "Grob in vier Schritten: Bestandsaufnahme und Beratung, Erstellung der Unterlagen (zum Beispiel iSFP oder Energieausweis), Antragstellung bei BAFA oder KfW, und Umsetzungsbegleitung bis zum Verwendungsnachweis. Ich übernehme die Antragstellung für Sie.",
  },
  {
    question: "Arbeiten Sie unabhängig von Herstellern?",
    answer:
      "Ja. Ich bin an keinen Hersteller, Handwerksbetrieb oder Anbieter gebunden und erhalte keine Provisionen. Meine Empfehlungen richten sich ausschließlich nach dem, was für Ihr Gebäude technisch und wirtschaftlich sinnvoll ist.",
  },
  {
    question: "In welcher Region sind Sie tätig?",
    answer:
      "Ich berate Sie in der Region Köln, Aachen, Düren und Umgebung, bei Bedarf auch darüber hinaus. Sprechen Sie mich einfach an.",
  },
];
