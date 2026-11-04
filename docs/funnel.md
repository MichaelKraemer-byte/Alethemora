# Mentoring-Funnel

## 1. Ablauf

Ein Beitrag führt auf https://alethemora.com/start. Dort trägt sich jemand im Formular ein und landet auf /danke. Die Bestätigungs-E-Mail führt nach dem Klick auf /willkommen, dort liegt das Buch. Danach kommen ab und zu Impuls-E-Mails. In der Phase live folgt das Erstgespräch, in der Phase aufbau die Warteliste. Das Angebot wird im Gespräch gemacht.

## 2. Kit einrichten (kostenloser Plan)

Ein englisches Formular für beide Sprachen. Ein zweites Formular gibt es nicht.

a) Grow → Landing Pages & Forms → Create new → Form. Die Vorlage ist egal, das Design der Kit-Seite wird nicht verwendet.

b) In den Formular-Einstellungen nach dem Abonnieren: Redirect to an external page → https://alethemora.com/danke

c) Incentive: „Send incentive email“ einschalten. Nach der Bestätigung weiterleiten auf https://alethemora.com/willkommen. E-Mail-Text, unverändert:

Subject: Please confirm – then your book is on its way

Hi,

so good to have you here. Click the button to confirm your sign-up. Right after, you can download your book.

[Button: Yes, send me the book]

With love,

Michael

d) `kitFormId` in `lib/site-config.ts` ist `1234567` (die Zahl aus app.kit.com/forms/1234567/...). `/start` zeigt das Kit-Formular. Redirect nach dem Abonnieren und die Incentive-E-Mail richtest du in Kit ein (Schritte b und c). Direkte PDF- und EPUB-Downloads der aktuellen Sprache und eine E-Mail an info.m.kraemer@gmail.com mit dem Betreff „Warteliste Mentoring“ erscheinen nur, wenn `kitFormId` leer oder `TODO` wäre.

f) Test: Mit einer zweiten E-Mail-Adresse anmelden und den Weg durchgehen. Wenn Kit nicht auf /danke weiterleitet, zeigt Kit die eigene Bestätigungsseite. Das ist in Ordnung.

## 3. Impuls-E-Mails

Im kostenlosen Plan als Broadcast von Hand schicken, zum Beispiel alle zwei Wochen. In der Phase aufbau den Mentoring-Start in der Sprache der E-Mail nennen (deutsch „Anfang 2028“, englisch „early 2028“), in der Phase live zum Erstgespräch einladen.

## 4. Cal.com (nur in der Phase live)

Die Termin-Links in `lib/site-config.ts` eintragen. Ein Wert wird nur verlinkt, wenn er mit `http` beginnt. `TODO` erzeugt keinen kaputten Link; der Button bleibt dann sichtbar, aber ohne Ziel.

- Erstgespräch: 30 Minuten, kostenlos, Google Meet. Drei Fragen bei der Buchung: „Was beschäftigt dich gerade am meisten?“, „Was soll in drei Monaten anders sein?“, „Wie hast du von mir erfahren?“
- Klarheitsgespräch: 90 Minuten, 90 €, Stripe.
- Zeiten am Abend für Deutschland, Österreich und die Schweiz.

## 5. Nach dem Erstgespräch

Das Angebot per E-Mail schicken. Die Zahlung läuft über Rechnung oder einen Stripe-Zahlungslink.

## 6. Instagram

Link in der Bio: https://alethemora.com/start

## 7. YouTube-Beschreibung (später)

Vorlage. `startTermin` in `lib/site-config.ts` ist je Sprache gesetzt: Deutsch „Anfang 2028“, Englisch „early 2028“. Diese Beschreibung ist deutsch und nennt den deutschen Termin. Eine englische Beschreibung nennt „early 2028“. In der Phase live den Erstgespräch-Satz verwenden, in der Phase aufbau den Mentoring-Satz.

```
[1–2 Sätze, worum es in diesem Video geht.]

Kostenlos für dich: mein Buch „Alethemora“ → https://alethemora.com/start

Ich bin Michael Krämer, Sozialpädagoge und Autor von „Alethemora – Eine Lebensphilosophie für eine höhere Zivilisation“. Ich begleite Menschen an Wendepunkten.

(live) Kostenloses Erstgespräch → https://alethemora.com/erstgespraech
(aufbau) Mentoring ab Anfang 2028 → https://alethemora.com/mentoring
Instagram → https://www.instagram.com/alethemora
Impressum → https://alethemora.com/impressum
```

Im Kanal, unter den Kanalinfos, einen Link zum Impressum hinterlegen. Wenn `youtube` in `lib/site-config.ts` eine http-Adresse ist, erscheint der Kanal im Footer. Solange das Feld leer ist, erscheint dort nichts.

## 8. Noch offen

Die Phase bleibt `"aufbau"`. Als Nächstes steht der Umzug zu Cloudflare an (README, inklusive Nameserver beim Registrar). Der Wechsel auf `"live"` — Preise, Cal.com, AGB — folgt viel später.

`kitFormId` ist `1234567`. `startTermin` ist gesetzt: Deutsch „Anfang 2028“, Englisch „early 2028“.

Weiterhin offen:

- Porträtfoto für /start (`public/images/michael.jpg`; solange die Datei fehlt, kein Bild)
- Open-Graph-Bild für /start (in `app/start/page.tsx` als TODO vermerkt, es liegt keine Datei im Projekt)
- Datenschutzerklärung mit einem Generator neu erstellen (Hinweis in `lib/legal-copy.ts`)
- Englische Texte prüfen (Vermerke „TODO: EN prüfen“, unter anderem in `lib/funnel-copy.ts`)
- Nameserver-Umstellung beim Registrar, als Teil des Cloudflare-Umzugs
- AGB und Widerrufsbelehrung: erst mit der Phase live (Platzhalter in `lib/funnel-copy.ts`)
- Cal.com: erst in der Phase live (Abschnitt 4)

In Kit bleiben die Schritte aus Abschnitt 2 von Hand zu erledigen: Redirect nach dem Abonnieren, Incentive-E-Mail, Test mit einer zweiten Adresse. Die Formular-ID ist bereits eingetragen.
