import type { Language } from "@/lib/i18n";

export const legalNav = {
  en: { impressum: "Legal notice", privacy: "Privacy", home: "Home" },
  de: { impressum: "Impressum", privacy: "Datenschutz", home: "Startseite" }
} as const;

export const impressumCopy = {
  en: {
    title: "Legal notice (Impressum)",
    intro:
      "Operator of this website is Michael Krämer. Contact is possible at the e-mail address below. No postal address is published here. Whether a full legal notice including a service-of-process postal address is required in your case depends on factors such as whether the site is operated commercially (TMG); have that clarified if in doubt.",
    sections: [
      {
        heading: "Information pursuant to § 5 TMG (Germany), where applicable",
        body:
          "Service provider: Michael Krämer\nContact: info.m.kraemer@gmail.com"
      },
      {
        heading: "Responsible for content",
        body: "Pursuant to § 55(2) RStV: Michael Krämer."
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
      "Betreiber dieser Website ist Michael Krämer. Erreichbarkeit über die unten genannte E-Mail-Adresse. Es wird keine Postanschrift veröffentlicht. Ob in Ihrem Einzelfall eine Impressumspflicht nach § 5 TMG besteht und ob dafür zusätzlich eine ladungsfähige Anschrift erforderlich ist (z. B. bei geschäftsmäßigem Onlineangebot), hängt von der konkreten Nutzung ab — im Zweifel kurz juristisch klären.",
    sections: [
      {
        heading: "Angaben gemäß § 5 TMG, soweit anwendbar",
        body: "Diensteanbieter: Michael Krämer\nKontakt: info.m.kraemer@gmail.com"
      },
      {
        heading: "Verantwortlich für den Inhalt",
        body: "Verantwortlich im Sinne von § 55 Abs. 2 RStV: Michael Krämer."
      },
      {
        heading: "EU-Streitschlichtung",
        body:
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr/ — Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern nicht gesetzlich anders vorgeschrieben."
      }
    ]
  }
} as const;

/**
 * Datenschutzerklärung (DE/EN): ausführliche Informationspflicht nach Art. 13 DSGVO,
 * angepasst an Hosting (Vercel), next/font/google, LocalStorage Sprache, keine Analytics.
 * Ersetzt keine individuelle Rechtsberatung und begründet keine Garantie für die Rechtslage.
 */
export const privacyCopy = {
  de: {
    title: "Datenschutzerklärung",
    intro:
      "Mit der folgenden Datenschutzerklärung informieren wir Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten im Zusammenhang mit dem Onlineangebot unter der Domain bzw. den Adressen, unter denen diese Website erreichbar ist (nachfolgend „Website“). Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Michael Krämer. Diese Erklärung ersetzt keine individuelle Rechtsberatung und beinhaltet keine rechtsverbindliche Zusicherung gegenüber Aufsichtsbehörden oder Dritten; bei konkreten Risiken (z. B. Erweiterung um Formulare, Shops, Newsletter, eingebettete Drittinhalte) sollte der Text mandatsbezogen geprüft und angepasst werden.",
    sections: [
      {
        heading: "1. Begriffe und Geltungsbereich",
        body:
          "„Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (Art. 4 Nr. 1 DSGVO). „Verarbeitung“ ist jeder mit personenbezogenen Daten ausgeführter Vorgang (Art. 4 Nr. 2 DSGVO). Diese Erklärung gilt für die Website in dem hier beschriebenen technischen und funktionalen Umfang. Sie gilt nicht für externe Websites, auf die verlinkt wird."
      },
      {
        heading: "2. Verantwortlicher und Kontakt",
        body:
          "Verantwortlicher: Michael Krämer\nE-Mail: info.m.kraemer@gmail.com\nEs ist kein Datenschutzbeauftragter bestellt, soweit keine gesetzliche Bestellpflicht besteht. Für Anfragen zu dieser Datenschutzerklärung und zu Betroffenenrechten nutzen Sie bitte die genannte E-Mail-Adresse."
      },
      {
        heading: "3. Hosting, Bereitstellung der Website und Server-Logdaten",
        body:
          "Die Website wird über die Plattform Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA („Vercel“), gehostet und ausgeliefert. Beim Aufruf von Seiteninhalten werden durch Vercel bzw. technisch vorgelagerte Systeme insbesondere folgende Daten verarbeitet: IP-Adresse des anfragenden Endgeräts, Datum und Uhrzeit der Anfrage, angeforderte Ressource (URL), übertragene Datenmenge, HTTP-Status, Referrer-URL soweit übermittelt, Browsertyp und -version soweit übermittelt. Die Verarbeitung dient der technischen Auslieferung, der Stabilität und Sicherheit des Angebots sowie der Missbrauchserkennung.\nRechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und effizientem Betrieb einer Website). Soweit Vercel im Verhältnis zu uns als Auftragsverarbeiter tätig wird, wurde ein Vertrag zur Auftragsverarbeitung gem. Art. 28 DSGVO abgeschlossen (Standard der Plattform). Informationen des Anbieters: https://vercel.com/legal/privacy-policy\nDie Verarbeitung kann eine Übermittlung in ein Drittland (USA) beinhalten. Soweit kein Angemessenheitsbeschluss der EU-Kommission vorliegt, stützen wir uns auf geeignete Garantien im Sinne von Art. 46 DSGVO (insbesondere die von der EU-Kommission veröffentlichten Standardvertragsklauseln) und/oder auf die Voraussetzungen des EU-US Data Privacy Framework, soweit der Empfänger zertifiziert ist — Details entnehmen Sie bitte der aktuellen Datenschutzerklärung von Vercel."
      },
      {
        heading: "4. Speicherdauer (Hosting und Logdaten)",
        body:
          "Die Speicherdauer bei Vercel für technische Logdaten richtet sich nach den dort dokumentierten Lösch- und Aufbewahrungsfristen. Wir speichern auf unseren eigenen Systemen keine zusätzlichen Besucher-Logfiles über das Hosting hinaus, soweit uns keine gesonderten Aufbewahrungspflichten treffen."
      },
      {
        heading: "5. Schriftarten (Next.js next/font, Quelle Google Fonts)",
        body:
          "Für die Darstellung der Website werden die Schriftfamilien „Inter“ und „Playfair Display“ über die Funktion next/font/google des Frameworks Next.js eingebunden. Die Schriftdateien werden beim Erstellen der Website (Build) aus dem Angebot von Google Fonts bezogen und in das Deployment der Website integriert. Im Regelbetrieb (Produktion) werden die Schriften vom Browser des Besuchers von derselben Herkunft wie die Website geladen (selbst gehostet im Rahmen des Deployments), ohne dass der Endnutzer beim Seitenaufruf eine separate Schriftanfrage an die Server von Google Fonts stellen muss. Es werden hierdurch keine Cookies von Google zur Schriftauslieferung im Browser gesetzt.\nRechtsgrundlage für die technisch notwendige Bereitstellung der lesbaren Website ist Art. 6 Abs. 1 lit. f DSGVO. Datenverarbeitungen durch Google im Zusammenhang mit dem Build können zusätzlich auftreten; nähere Informationen finden Sie in der Datenschutzerklärung von Google LLC.\nHinweis: Wenn Sie künftig auf eine klassische Einbindung per Remote-Stylesheet-Link zu Google Fonts umstellen würden, wäre die rechtliche Bewertung (einschließlich Einwilligung/TTDSG) anders zu prüfen — diese Erklärung wäre dann anzupassen."
      },
      {
        heading: "6. Spracheinstellung (Local Storage)",
        body:
          "Wenn Sie über die Benutzeroberfläche eine Sprache wählen (Deutsch oder Englisch), wird Ihre Auswahl lokal im Browser unter dem Schlüssel „alethemora-language“ gespeichert. Es handelt sich nicht um ein HTTP-Cookie, sondern um einen Eintrag im Local Storage Ihres Browsers. Zweck ist allein die Wiederherstellung Ihrer Sprachwahl bei einem späteren Besuch.\nRechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer nutzerfreundlichen, konsistenten Darstellung). Soweit eine Einwilligung erforderlich oder gewählt wird, kann zusätzlich Art. 6 Abs. 1 lit. a DSGVO herangezogen werden. Sie können die gespeicherte Einstellung jederzeit löschen, indem Sie die Website-Daten bzw. den Local Storage in Ihren Browsereinstellungen entfernen.\nHinweis: Wenn Ihr Browser Speicherdaten mit Cloud-Diensten des Browserherstellers synchronisiert, kann die Speicherung außerhalb Ihres lokalen Geräts erfolgen; darauf haben wir keinen Einfluss."
      },
      {
        heading: "7. Cookies und ähnliche Technologien",
        body:
          "Wir setzen keine Werbe-Cookies, keine Social-Media-Plugins mit Tracking und keine eingebundenen Analyse-Tools (z. B. Google Analytics, Meta Pixel) in dem hier beschriebenen Stand der Website ein. Technisch notwendige Prozesse im Rahmen des Hostings (siehe Ziffer 3) bleiben unberührt.\nSoweit der Einsatz nicht notwendiger Cookies oder ähnlicher Technologien künftig erfolgen sollte, werden wir die Vorgaben des Telekommunikation-Telemedien-Datenschutz-Gesetzes (TTDSG) und der DSGVO einhalten (insbesondere Einwilligung, wo erforderlich) und diese Erklärung aktualisieren."
      },
      {
        heading: "8. Keine Kontaktformulare, keine Nutzerkonten, kein Newsletter",
        body:
          "In dieser Website sind kein Kontaktformular, keine Registrierung, keine Nutzerprofile und kein Newsletter-System implementiert. Entsprechend finden hierzu keine eigenständigen Datenverarbeitungen durch uns statt."
      },
      {
        heading: "9. Empfänger und Kategorien von Empfängern",
        body:
          "Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur, soweit dies zur Vertragserfüllung mit dem Hosting-Anbieter erforderlich ist, gesetzliche Pflichten bestehen oder Sie eingewilligt haben. Empfänger im beschriebenen Umfang ist insbesondere Vercel als Hosting-Plattform."
      },
      {
        heading: "10. Keine automatisierte Entscheidungsfindung",
        body:
          "Wir führen keine ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhende Entscheidung durch, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt (Art. 22 DSGVO)."
      },
      {
        heading: "11. Ihre Rechte (Art. 15–21 DSGVO)",
        body:
          "Ihnen stehen — soweit die gesetzlichen Voraussetzungen erfüllt sind — insbesondere folgende Rechte zu:\nAuskunft (Art. 15 DSGVO) über die Sie betreffenden gespeicherten Daten,\nBerichtigung (Art. 16 DSGVO),\nLöschung (Art. 17 DSGVO),\nEinschränkung der Verarbeitung (Art. 18 DSGVO),\nDatenübertragbarkeit (Art. 20 DSGVO),\nWiderspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 Abs. 1 DSGVO): Wir verarbeiten personenbezogene Daten nach einem Widerspruch nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.\nZur Ausübung Ihrer Rechte kontaktieren Sie uns unter der in Ziffer 2 genannten E-Mail-Adresse."
      },
      {
        heading: "12. Widerruf von Einwilligungen",
        body:
          "Soweit Verarbeitungen auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO beruhen, haben Sie das Recht, die Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt."
      },
      {
        heading: "13. Beschwerderecht bei einer Aufsichtsbehörde",
        body:
          "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung personenbezogener Daten durch uns zu beschweren (Art. 77 DSGVO). Zuständig ist in der Regel die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes."
      },
      {
        heading: "14. Pflicht zur Bereitstellung von Daten",
        body:
          "Die Verarbeitung technischer Verbindungsdaten beim Aufruf der Website ist technisch erforderlich, um die Website auszuliefern und zu sichern. Eine Nutzung der Website ohne diese Verarbeitung ist nicht möglich."
      },
      {
        heading: "15. Änderung dieser Datenschutzerklärung",
        body:
          "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Es gilt die jeweils veröffentlichte Fassung."
      },
      {
        heading: "16. Stand",
        body: "Stand dieser Datenschutzerklärung: Mai 2026"
      }
    ]
  },
  en: {
    title: "Privacy policy",
    intro:
      "This privacy policy explains the nature, scope and purposes of processing personal data in connection with this online offering (the “Website”) at the domain(s) or URLs where it is reachable. The controller within the meaning of the General Data Protection Regulation (GDPR) is Michael Krämer. This text is provided for transparency under Articles 13 and 14 GDPR where applicable. It does not replace individual legal advice and does not constitute a binding legal assurance to supervisory authorities or third parties. If you extend the site (e.g. contact forms, shop, newsletter, embedded third-party content), the policy should be reviewed and updated accordingly.",
    sections: [
      {
        heading: "1. Definitions and scope",
        body:
          "“Personal data” means any information relating to an identified or identifiable natural person (Article 4(1) GDPR). “Processing” means any operation performed on personal data (Article 4(2) GDPR). This policy applies to the Website as described here. It does not apply to external websites linked from the Website."
      },
      {
        heading: "2. Controller and contact",
        body:
          "Controller: Michael Krämer\nE-mail: info.m.kraemer@gmail.com\nNo data protection officer has been appointed unless a legal obligation to appoint one exists. For questions about this privacy policy and for requests concerning data subject rights, please use the e-mail address above."
      },
      {
        heading: "3. Hosting, provision of the Website and server logs",
        body:
          "The Website is hosted and delivered via Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA (“Vercel”). When you retrieve pages, Vercel and technically upstream systems process in particular: IP address of the requesting device, date and time of the request, requested resource (URL), amount of data transferred, HTTP status, referrer URL if transmitted, browser type and version if transmitted. Processing serves technical delivery, stability and security of the service and abuse detection.\nThe legal basis is Article 6(1)(f) GDPR (legitimate interests in secure and efficient operation of a website). Where Vercel processes data on our behalf as a processor, a data processing agreement pursuant to Article 28 GDPR is in place under the platform’s standard terms. Further information: https://vercel.com/legal/privacy-policy\nProcessing may involve transfers to a third country (the United States). Where no adequacy decision exists, we rely on appropriate safeguards under Article 46 GDPR (in particular the EU Commission’s Standard Contractual Clauses) and/or on the EU–US Data Privacy Framework where the recipient is certified — please refer to Vercel’s current privacy policy for details."
      },
      {
        heading: "4. Retention (hosting and logs)",
        body:
          "Retention periods for technical logs at Vercel follow Vercel’s documented deletion and retention practices. We do not maintain additional visitor log files on our own systems beyond hosting, unless statutory retention duties apply."
      },
      {
        heading: "5. Fonts (Next.js next/font, Google Fonts source)",
        body:
          "The Website uses the typefaces “Inter” and “Playfair Display” via Next.js next/font/google. Font files are obtained from the Google Fonts catalogue during the application build and bundled into the deployment. In normal production operation, visitors’ browsers load font files from the same origin as the Website (self-hosted within the deployment) without a separate live font request from the visitor’s browser to Google Fonts servers for displaying text. Google does not set cookies for font delivery in this setup.\nThe legal basis for technically necessary provision of a readable site is Article 6(1)(f) GDPR. Processing by Google in connection with builds may additionally occur; see Google LLC’s privacy information.\nNote: If you later switched to a classic remote stylesheet link to Google Fonts, the legal assessment (including consent / ePrivacy rules) would change — this policy would need updating."
      },
      {
        heading: "6. Language preference (local storage)",
        body:
          "When you select a language (German or English) in the interface, your choice is stored locally in the browser under the key “alethemora-language”. This is not an HTTP cookie but an entry in the browser’s local storage. The sole purpose is to restore your language choice on a later visit.\nThe legal basis is Article 6(1)(f) GDPR (legitimate interests in user-friendly, consistent presentation). Where consent is required or given, Article 6(1)(a) GDPR may additionally apply. You may delete the stored value at any time via your browser settings (site data / local storage).\nNote: If your browser synchronises storage with the vendor’s cloud, data may be stored outside your local device; we have no control over that."
      },
      {
        heading: "7. Cookies and similar technologies",
        body:
          "We do not use advertising cookies, social plug-ins with tracking, or embedded analytics tools (such as Google Analytics or Meta Pixel) in the configuration described here. Technically necessary processes within hosting (see section 3) remain unaffected.\nIf non-essential cookies or similar technologies are introduced in the future, we will comply with the German Telecommunications Telemedia Data Protection Act (TTDSG) and the GDPR (including consent where required) and will update this policy."
      },
      {
        heading: "8. No contact forms, user accounts or newsletter",
        body:
          "This Website does not implement a contact form, registration, user profiles or a newsletter system. Accordingly, we do not operate separate processing for those features."
      },
      {
        heading: "9. Recipients and categories of recipients",
        body:
          "Personal data are disclosed to third parties only where necessary to perform the contract with the hosting provider, where a legal obligation applies or where you have consented. In the scope described here, Vercel is in particular a recipient as hosting platform."
      },
      {
        heading: "10. No solely automated decision-making",
        body:
          "We do not make decisions based solely on automated processing, including profiling, which produce legal effects concerning you or similarly significantly affect you (Article 22 GDPR)."
      },
      {
        heading: "11. Your rights (Articles 15–21 GDPR)",
        body:
          "Subject to applicable law, you have in particular the following rights:\nAccess (Article 15 GDPR) to stored data concerning you,\nRectification (Article 16 GDPR),\nErasure (Article 17 GDPR),\nRestriction of processing (Article 18 GDPR),\nData portability (Article 20 GDPR),\nObjection to processing based on Article 6(1)(f) GDPR (Article 21(1) GDPR): we no longer process personal data after an objection unless we demonstrate compelling legitimate grounds which override your interests, rights and freedoms, or processing is necessary for the establishment, exercise or defence of legal claims.\nTo exercise your rights, please contact us at the e-mail address in section 2."
      },
      {
        heading: "12. Withdrawal of consent",
        body:
          "Where processing is based on consent pursuant to Article 6(1)(a) GDPR, you may withdraw consent at any time with effect for the future. Withdrawal does not affect the lawfulness of processing carried out before withdrawal."
      },
      {
        heading: "13. Right to lodge a complaint",
        body:
          "You have the right to lodge a complaint with a supervisory authority about our processing of personal data (Article 77 GDPR). The authority competent for you is typically that of your habitual residence, your place of work or the place of the alleged infringement."
      },
      {
        heading: "14. Obligation to provide data",
        body:
          "Processing technical connection data when you access the Website is technically necessary to deliver and secure the Website. Use of the Website without such processing is not possible."
      },
      {
        heading: "15. Changes to this privacy policy",
        body:
          "We may update this privacy policy to reflect legal changes or changes to our services. The version published on the Website at the relevant time applies."
      },
      {
        heading: "16. Version",
        body: "Version of this privacy policy: May 2026"
      }
    ]
  }
} as const;

export function formatLegalBody(text: string): string[] {
  return text.split("\n").filter(Boolean);
}
