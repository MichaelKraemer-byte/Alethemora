import type { Language } from "@/lib/i18n";

export const legalNav = {
  en: { impressum: "Legal notice", privacy: "Privacy", home: "Home" },
  de: { impressum: "Impressum", privacy: "Datenschutz", home: "Startseite" }
} as const;

export const impressumCopy = {
  en: {
    title: "Legal notice (Impressum)",
    // TODO: EN prüfen
    ddgHeading: "Information pursuant to § 5 DDG",
    address:
      "Michael Krämer\nLerschmehr 36\n48167 Münster\nDeutschland\nE-Mail: info.m.kraemer@gmail.com",
    // TODO: EN prüfen
    responsible:
      "Responsible for content pursuant to § 18 Abs. 2 MStV: Michael Krämer, address as above",
    arbitration:
      "We are not obliged and not willing to participate in dispute resolution before a consumer arbitration board unless legally required."
  },
  de: {
    title: "Impressum",
    ddgHeading: "Angaben gemäß § 5 DDG",
    address:
      "Michael Krämer\nLerschmehr 36\n48167 Münster\nDeutschland\nE-Mail: info.m.kraemer@gmail.com",
    responsible:
      "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Michael Krämer, Anschrift wie oben",
    arbitration:
      "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern nicht gesetzlich anders vorgeschrieben."
  }
} as const;

/**
 * Datenschutzerklärung (DE/EN) für den aktuellen Betrieb:
 * Hosting über Cloudflare, Schriften vom selben Host, localStorage für die Sprache,
 * ein Kit-Formular, Instagram nur als Link. Deutsch ist der maßgebliche Text.
 */
export const privacyCopy = {
  de: {
    title: "Datenschutzerklärung",
    intro:
      "Diese Datenschutzerklärung gilt für alethemora.com. Sie beschreibt, welche personenbezogenen Daten anfallen und wozu sie verwendet werden. Verantwortlicher ist Michael Krämer. Der Text ist zur Durchsicht gedacht und keine anwaltliche Bescheinigung.",
    sections: [
      {
        heading: "1. Verantwortlicher",
        body:
          "Verantwortlicher ist Michael Krämer, Lerschmehr 36, 48167 Münster, Deutschland, E-Mail: info.m.kraemer@gmail.com. Das ist dieselbe Anschrift wie im Impressum. Ein Datenschutzbeauftragter ist nicht bestellt. Anfragen zu Ihren Daten richten Sie bitte an die genannte E-Mail-Adresse."
      },
      {
        heading: "2. Hosting",
        body:
          "Die Website wird über Cloudflare bereitgestellt (Cloudflare Pages, Anbieter: Cloudflare, Inc., USA). Beim Aufruf einer Seite verarbeitet der Hoster die Verbindungsdaten, die dafür technisch anfallen: IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse, übertragene Datenmenge, HTTP-Status sowie, soweit der Browser sie mitsendet, die zuvor besuchte Seite und Angaben zu Browsertyp und Browserversion.\nZweck ist die Auslieferung der Website, ihre Stabilität und ihre Sicherheit. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem erreichbaren und sicheren Angebot).\nCloudflare, Inc. sitzt in den USA. Verbindungsdaten können deshalb dort verarbeitet werden. Wie Cloudflare damit umgeht, steht in der Datenschutzerklärung von Cloudflare: https://www.cloudflare.com/privacypolicy/\nWir führen selbst keine zusätzlichen Besucherprotokolle."
      },
      {
        heading: "3. Schriften",
        body:
          "Die Schriften Inter und Playfair Display werden mit next/font eingebunden. Die Schriftdateien werden beim Erstellen der Website geholt und mit der Website ausgeliefert. Beim Laden der Seite kommen sie vom selben Host wie die Seite selbst. Dabei geht keine Schriftanfrage an Google. Für die Schriften werden keine Cookies gesetzt."
      },
      {
        heading: "4. Spracheinstellung",
        body:
          "Wenn Sie Deutsch oder Englisch wählen, speichert der Browser diese Wahl lokal unter dem Schlüssel „alethemora-language“. Das ist kein Cookie, sondern ein Eintrag im localStorage. Zweck ist, die gewählte Sprache beim nächsten Besuch wiederherzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Sie können den Eintrag in den Einstellungen Ihres Browsers löschen (Website-Daten bzw. localStorage)."
      },
      {
        heading: "5. Keine Cookies, keine Analyse",
        body:
          "Diese Website setzt keine Cookies. Es gibt keine Analyse- und keine Tracking-Skripte."
      },
      {
        heading: "6. E-Mail-Anmeldung über Kit",
        body:
          "Auf der Seite /start liegt ein Formular. Wenn Sie es absenden, geht ausschließlich Ihre E-Mail-Adresse per POST direkt an https://app.kit.com/forms/1234567/subscriptions (Formular-ID 1234567). Empfänger ist Kit Inc. in den USA. Die Website bindet kein Skript von Kit ein und setzt keine Cookies von Kit.\nDie Anmeldung läuft über Double-Opt-in: Sie erhalten eine E-Mail und bestätigen den Eintrag. Zweck ist, Ihnen das Buch zu schicken und gelegentlich kurze E-Mails (Impulse). Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.\nAbmelden können Sie sich jederzeit über den Link in den E-Mails. Die Einwilligung können Sie auch widerrufen, indem Sie an info.m.kraemer@gmail.com schreiben. Die Verarbeitung bis zum Widerruf bleibt davon unberührt.\nWeil Kit in den USA sitzt, wird die E-Mail-Adresse dorthin übermittelt. Wie Kit die Daten verarbeitet, steht unter https://kit.com/privacy"
      },
      {
        heading: "7. Externe Links",
        body:
          "Verlinkt ist Instagram: https://www.instagram.com/alethemora. Den Link öffnen Sie selbst. Wir übermitteln dabei keine Daten an Instagram. Öffnen Sie den Link, gilt die Datenschutzerklärung von Instagram.\nCal.com, Google Meet und Stripe sind derzeit nicht angebunden und erhalten über diese Website keine Daten. Bevor Buchungs- oder Zahlungsdienste genutzt werden, werden sie an dieser Stelle benannt."
      },
      {
        heading: "8. Empfänger",
        body:
          "Empfänger sind Cloudflare für das Hosting und, nur wenn Sie das Formular absenden, Kit Inc. für die E-Mail-Adresse. Eine weitere Weitergabe erfolgt, wenn wir gesetzlich dazu verpflichtet sind oder Sie eingewilligt haben."
      },
      {
        heading: "9. Keine automatisierte Entscheidung",
        body:
          "Es gibt keine ausschließlich automatisierte Entscheidung, die Ihnen gegenüber rechtliche Wirkung hat oder Sie ähnlich erheblich beeinträchtigt (Art. 22 DSGVO)."
      },
      {
        heading: "10. Ihre Rechte",
        body:
          "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit (Art. 15 bis 20 DSGVO). Verarbeitungen, die wir auf Art. 6 Abs. 1 lit. f DSGVO stützen, können Sie widersprechen (Art. 21 DSGVO). Eine Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Bitte schreiben Sie dafür an info.m.kraemer@gmail.com.\nSie können sich außerdem bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO). Für Münster ist das die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2-4, 40213 Düsseldorf, https://www.ldi.nrw.de"
      },
      {
        heading: "11. Ob Sie Daten angeben müssen",
        body:
          "Verbindungsdaten fallen an, sobald die Seite aufgerufen wird. Ohne sie kann die Seite nicht ausgeliefert werden. Die E-Mail-Adresse ist freiwillig. Ohne sie können wir das Buch und die Impulse nicht senden."
      },
      {
        heading: "12. Stand",
        body:
          "Stand: 4. November 2026. Wenn sich die Website ändert, wird dieser Text angepasst."
      }
    ]
  },
  // TODO: EN prüfen
  en: {
    title: "Privacy policy",
    intro:
      "This privacy notice applies to alethemora.com. It describes which personal data arise and what they are used for. The controller is Michael Krämer. The German text is the one to rely on. This English version is for review and is not a legal certificate.",
    sections: [
      {
        heading: "1. Controller",
        body:
          "The controller is Michael Krämer, Lerschmehr 36, 48167 Münster, Deutschland, email: info.m.kraemer@gmail.com. This is the same address as in the legal notice. No data protection officer has been appointed. Please send questions about your data to that email address."
      },
      {
        heading: "2. Hosting",
        body:
          "The website is provided via Cloudflare (Cloudflare Pages, provider: Cloudflare, Inc., USA). When a page is requested, the host processes the connection data that this technically requires: IP address, date and time, requested address, amount of data transferred, HTTP status and, where the browser sends them, the previously visited page and browser type and version.\nThe purpose is delivery of the website, its stability and its security. The legal basis is Article 6(1)(f) GDPR (legitimate interest in an available and secure site).\nCloudflare, Inc. is based in the USA. Connection data may therefore be processed there. How Cloudflare handles this is described in Cloudflare’s privacy policy: https://www.cloudflare.com/privacypolicy/\nWe do not keep additional visitor logs of our own."
      },
      {
        heading: "3. Fonts",
        body:
          "The typefaces Inter and Playfair Display are included with next/font. The font files are fetched when the website is built and are delivered with the website. When the page loads, they come from the same host as the page itself. There is no font request to Google at that moment. No cookies are set for the fonts."
      },
      {
        heading: "4. Language preference",
        body:
          "When you choose German or English, the browser stores that choice locally under the key “alethemora-language”. This is not a cookie. It is an entry in localStorage. The purpose is to restore the chosen language on a later visit. The legal basis is Article 6(1)(f) GDPR. You can delete the entry in your browser settings (site data or localStorage)."
      },
      {
        heading: "5. No cookies, no analytics",
        body:
          "This website does not set cookies. There are no analytics scripts and no tracking scripts."
      },
      {
        heading: "6. Email sign-up via Kit",
        body:
          "There is a form on the page /start. When you submit it, only your email address is sent by POST directly to https://app.kit.com/forms/1234567/subscriptions (form id 1234567). The recipient is Kit Inc. in the USA. The website does not embed a Kit script and does not set Kit cookies.\nSign-up uses double opt-in: you receive an email and confirm the entry. The purpose is to send you the book and occasional short emails (impulses). The legal basis is your consent under Article 6(1)(a) GDPR.\nYou can unsubscribe at any time via the link in the emails. You can also withdraw consent by writing to info.m.kraemer@gmail.com. Processing carried out before withdrawal remains lawful.\nBecause Kit is in the USA, the email address is transferred there. How Kit processes the data is described at https://kit.com/privacy"
      },
      {
        heading: "7. External links",
        body:
          "The site links to Instagram: https://www.instagram.com/alethemora. You open that link yourself. We do not transmit data to Instagram by placing the link. If you open it, Instagram’s privacy policy applies.\nCal.com, Google Meet and Stripe are not connected at present and do not receive data through this website. Booking and payment providers will be named here before they are used."
      },
      {
        heading: "8. Recipients",
        body:
          "Recipients are Cloudflare for hosting and, only if you submit the form, Kit Inc. for the email address. Further disclosure happens where we are legally obliged to do so or where you have consented."
      },
      {
        heading: "9. No automated decision-making",
        body:
          "There is no decision based solely on automated processing that produces legal effects concerning you or similarly significantly affects you (Article 22 GDPR)."
      },
      {
        heading: "10. Your rights",
        body:
          "You have the right of access, rectification, erasure, restriction of processing and data portability (Articles 15 to 20 GDPR). You may object to processing we base on Article 6(1)(f) GDPR (Article 21 GDPR). You may withdraw consent at any time with effect for the future. Please write to info.m.kraemer@gmail.com.\nYou may also lodge a complaint with a supervisory authority (Article 77 GDPR). For Münster that authority is the Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2-4, 40213 Düsseldorf, https://www.ldi.nrw.de"
      },
      {
        heading: "11. Whether you must provide data",
        body:
          "Connection data arise as soon as the page is requested. Without them the page cannot be delivered. The email address is voluntary. Without it we cannot send the book and the impulses."
      },
      {
        heading: "12. Version",
        body:
          "Version: 4 November 2026. If the website changes, this text will be updated."
      }
    ]
  }
} as const;

export function formatLegalBody(text: string): string[] {
  return text.split("\n").filter(Boolean);
}
