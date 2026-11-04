import type { Language } from "@/lib/i18n";

/**
 * Schalter und Werte für den Mentoring-Funnel.
 * phase "aufbau": keine Preise, keine Cal.com-Links, kein AGB-Link und keine AGB in der Sitemap.
 * phase "live": Verkauf. Danach neu bauen und veröffentlichen.
 * TODO erst ersetzen, wenn der echte Wert da ist (Cal.com, YouTube).
 * Cal- und YouTube-Adressen werden nur verlinkt, wenn sie mit http beginnen.
 * kitFormId ist gesetzt: ein englisches Kit-Formular für beide Sprachen.
 * startTermin ist je Sprache gesetzt (de / en).
 */
export const phase: "aufbau" | "live" = "aufbau";
export const startTermin: Record<Language, string> = {
  de: "Anfang 2028",
  en: "early 2028"
};
export const youtube = "";
export const kitFormId = "1234567";
export const calErstgespraech = "TODO";
export const calKlarheitsgespraech = "TODO";
export const preisKlarheitsgespraech = 90;
export const preisWandlung = 890;
export const preisWandlungRate = 445;
export const preisWandlungPilot = 490;
export const pilotPlaetzeFrei = 3;
export const vortragHonorarAb = 250;
export const vortragEintritt = 15;
export const vortragAnteilOrtProzent = 30;
export const domain = "alethemora.com";
export const email = "info.m.kraemer@gmail.com";
export const instagram = "https://www.instagram.com/alethemora";
