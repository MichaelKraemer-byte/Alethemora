import type { Language } from "@/lib/i18n";

export const legalNav = {
  en: { impressum: "Legal notice", privacy: "Privacy", home: "Home" },
  de: { impressum: "Impressum", privacy: "Datenschutz", home: "Startseite" }
} as const;

export const impressumCopy = {
  en: {
    title: "Legal notice (Impressum)",
    intro:
      "The following information is a placeholder template. Replace all bracketed fields and have the final text reviewed for your specific situation.",
    sections: [
      {
        heading: "Information pursuant to § 5 TMG (Germany)",
        body:
          "Service provider: [Name or company]\nAddress: [Street, postcode, city, country]\nContact: [E-mail address]\nOptional: [Phone], [VAT ID if applicable]"
      },
      {
        heading: "Responsible for content",
        body: "Pursuant to § 55(2) RStV: [Name, address as above or editorial responsibility]."
      },
      {
        heading: "EU dispute resolution",
        body:
          "The European Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr/ — We are not obliged and not willing to participate in dispute resolution before a consumer arbitration board unless legally required."
      }
    ]
  },
  de: {
    title: "Impressum",
    intro:
      "Die folgenden Angaben sind eine Platzhalter-Vorlage. Ersetzen Sie alle eckigen Klammern und lassen Sie den endgültigen Text für Ihre konkrete Situation prüfen.",
    sections: [
      {
        heading: "Angaben gemäß § 5 TMG",
        body:
          "Diensteanbieter: [Name oder Firma]\nAnschrift: [Straße, PLZ, Ort, Land]\nKontakt: [E-Mail-Adresse]\nOptional: [Telefon], [USt-IdNr. falls zutreffend]"
      },
      {
        heading: "Verantwortlich für den Inhalt",
        body: "Verantwortlich im Sinne von § 55 Abs. 2 RStV: [Name, Anschrift wie oben oder verantwortliche Redaktion]."
      },
      {
        heading: "EU-Streitschlichtung",
        body:
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr/ — Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern nicht gesetzlich anders vorgeschrieben."
      }
    ]
  }
} as const;

export const privacyCopy = {
  en: {
    title: "Privacy",
    intro:
      "This privacy information is a concise overview. Adapt it to your hosting provider, tools, and legal advice.",
    sections: [
      {
        heading: "Controller",
        body: "[Name or company], [address] — Contact: [e-mail]"
      },
      {
        heading: "Purpose of this website",
        body: "Presentation of the Alethemora framework (informational content). No user accounts are offered on this template."
      },
      {
        heading: "Language preference (local storage)",
        body:
          "When you select a language, the setting is stored in your browser under the key \"alethemora-language\" (values: en or de). This serves only to restore your preference on the next visit. The data is not transmitted to us as a separate profile by this mechanism alone; it remains on your device unless your browser synchronises storage with a vendor cloud."
      },
      {
        heading: "Hosting and server logs",
        body:
          "The website is delivered via a hosting provider (e.g. Vercel or your server). The provider may process technical data such as IP address, timestamp, and requested URL in server logs for security and operation. Please name your actual provider and refer to their privacy policy."
      },
      {
        heading: "No marketing analytics in this template",
        body:
          "This project template does not integrate advertising or analytics cookies by default. If you add tools (e.g. Google Analytics, Matomo), document them here and obtain consent where required."
      },
      {
        heading: "Your rights (GDPR)",
        body:
          "Where applicable, you have rights including access, rectification, erasure, restriction of processing, data portability, and objection. You may also lodge a complaint with a supervisory authority."
      }
    ]
  },
  de: {
    title: "Datenschutz",
    intro:
      "Diese Datenschutzhinweise sind eine kompakte Übersicht. Passen Sie sie an Ihren Hoster, eingesetzte Tools und rechtliche Beratung an.",
    sections: [
      {
        heading: "Verantwortliche Stelle",
        body: "[Name oder Firma], [Anschrift] — Kontakt: [E-Mail]"
      },
      {
        heading: "Zweck dieser Website",
        body: "Darstellung des Alethemora-Rahmens (informative Inhalte). In dieser Vorlage werden keine Nutzerkonten angeboten."
      },
      {
        heading: "Spracheinstellung (lokaler Speicher)",
        body:
          "Wenn Sie eine Sprache wählen, wird die Einstellung in Ihrem Browser unter dem Schlüssel „alethemora-language“ gespeichert (Werte: en oder de). Das dient allein dazu, Ihre Wahl beim nächsten Besuch wiederherzustellen. Die Daten verbleiben auf Ihrem Endgerät, soweit Ihr Browser den Speicher nicht mit einer Anbieter-Cloud synchronisiert."
      },
      {
        heading: "Hosting und Server-Logdaten",
        body:
          "Die Website wird über einen Hosting-Anbieter ausgeliefert (z. B. Vercel oder eigener Server). Der Anbieter kann technische Daten wie IP-Adresse, Zeitstempel und angeforderte URL in Server-Logfiles zu Betrieb und Sicherheit verarbeiten. Bitte benennen Sie Ihren tatsächlichen Anbieter und verlinken Sie dessen Datenschutzerklärung."
      },
      {
        heading: "Keine Marketing-Analytics in dieser Vorlage",
        body:
          "Diese Projektvorlage bindet standardmäßig keine Werbe- oder Analyse-Cookies ein. Wenn Sie Tools ergänzen (z. B. Google Analytics, Matomo), dokumentieren Sie das hier und holen Sie Einwilligungen ein, wo erforderlich."
      },
      {
        heading: "Ihre Rechte (DSGVO)",
        body:
          "Soweit anwendbar, haben Sie unter anderem Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Sie können sich außerdem bei einer Aufsichtsbehörde beschweren."
      }
    ]
  }
} as const;

export function formatLegalBody(text: string): string[] {
  return text.split("\n").filter(Boolean);
}
