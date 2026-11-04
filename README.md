# Alethemora

Statische Website (Next.js, `output: "export"`). Veröffentlichung über Cloudflare Pages. Die Phase in `lib/site-config.ts` bleibt `"aufbau"`.

## Nächster Schritt: Umzug zu Cloudflare

Die Phase bleibt `"aufbau"`. Der Wechsel auf `"live"` (Preise, Cal.com, AGB) folgt erst viel später.

1. Bei Cloudflare anmelden und **Workers & Pages → Create → Pages → Connect to Git** wählen. Das GitHub-Repository dieser Website verbinden.
2. Build-Befehl: `npm run build`
3. Ausgabeverzeichnis: `out`
4. Node-Version: **20**. Im Pages-Projekt die Umgebungsvariable `NODE_VERSION` auf `20` setzen. Im Repository liegt außerdem `.node-version` mit `20`.
5. Domain **alethemora.com** verbinden. Die Domain ist bei Vercel registriert: in Cloudflare die Domain hinzufügen und die Nameserver, die Cloudflare anzeigt, beim Registrar auf Vercel eintragen. Warten, bis die Nameserver umgestellt sind, und die Domain danach dem Pages-Projekt zuweisen. Die Nameserver-Umstellung gehört zu diesem Umzug.
6. Wenn die Website über Cloudflare ausgeliefert wird, das Vercel-Projekt löschen, damit nicht zwei Hosts dieselbe Domain beanspruchen.

Es gibt kein Vercel-Analytics, kein Middleware und keine Server-Funktionen. Schriften bleiben lokal über `next/font` im Build.

## Später: Phase von „aufbau“ auf „live“

Für den Verkauf änderst du irgendwann `phase` in `lib/site-config.ts` von `"aufbau"` auf `"live"` und trägst die Cal.com-Adressen ein (`calErstgespraech`, `calKlarheitsgespraech`, bei Bedarf `youtube`). Danach baust du die Seite neu und veröffentlichst sie erneut auf Cloudflare Pages – erst dann sind Preise, Cal.com-Links und die AGB-Seite in Footer und Sitemap sichtbar; die Datei `app/agb/page.tsx` liegt immer im Projekt, wird im Aufbau aber nicht verlinkt, nicht in die Sitemap aufgenommen und nur mit einem kurzen Hinweis ohne Angebot ausgeliefert. Den AGB-Text schreibst du erst zu diesem Zeitpunkt.

`kitFormId` ist `1234567`. `/start` zeigt deshalb das Kit-Formular. Direkte Buch-Downloads und die Wartelisten-E-Mail erscheinen nur, wenn die ID leer oder `TODO` wäre. `startTermin` ist gesetzt und sprachabhängig: Deutsch „Anfang 2028“, Englisch „early 2028“. Cal.com-Felder werden verlinkt, sobald der Wert mit `http` beginnt.

Der Ablauf von Anmeldung, Kit und Cal.com steht in `docs/funnel.md`.

## Noch offen

Als Nächstes der Umzug zu Cloudflare (oben). Die Phase bleibt dabei `"aufbau"`.

- Porträtfoto für `/start` (auf der Seite steht „TODO: Porträtfoto“)
- Open-Graph-Bild für `/start` (Vermerk in `app/start/page.tsx`, keine Datei im Projekt)
- Datenschutzerklärung mit einem Generator neu erstellen (Hinweis in `lib/legal-copy.ts`)
- Englische Texte prüfen (Vermerke „TODO: EN prüfen“)
- Nameserver beim Registrar umstellen, als Teil des Cloudflare-Umzugs

Erst viel später, mit der Phase `"live"`: Cal.com einrichten und verlinken, Preise sichtbar machen, AGB und Widerrufsbelehrung schreiben und veröffentlichen.
