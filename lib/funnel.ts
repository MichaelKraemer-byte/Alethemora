import type { Language } from "@/lib/i18n";
import {
  email,
  kitFormId,
  pilotPlaetzeFrei,
  preisKlarheitsgespraech,
  preisWandlung,
  preisWandlungPilot,
  preisWandlungRate,
  startTermin,
  vortragAnteilOrtProzent,
  vortragEintritt,
  vortragHonorarAb
} from "@/lib/site-config";

export const books = {
  de: {
    pdf: "/downloads/alethemora-lebensphilosophie-de.pdf",
    epub: "/downloads/alethemora-lebensphilosophie-de.epub",
    pdfName: "alethemora-lebensphilosophie-de.pdf",
    epubName: "alethemora-lebensphilosophie-de.epub"
  },
  en: {
    pdf: "/downloads/alethemora-philosophy-of-life-en.pdf",
    epub: "/downloads/alethemora-philosophy-of-life-en.epub",
    pdfName: "alethemora-philosophy-of-life-en.pdf",
    epubName: "alethemora-philosophy-of-life-en.epub"
  }
} as const;

/** Platzhalter für die aktuelle Sprache. `{startTermin}` wird nie sprachübergreifend eingesetzt. */
export function copyValuesFor(language: Language): Record<string, string | number> {
  return {
    startTermin: startTermin[language],
    preisKlarheitsgespraech,
    preisWandlung,
    preisWandlungRate,
    preisWandlungPilot,
    pilotPlaetzeFrei,
    vortragHonorarAb,
    vortragEintritt,
    vortragAnteilOrtProzent
  };
}

const focusPaths = new Set(["/start", "/danke", "/willkommen"]);

export function isFocusPath(pathname: string): boolean {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return focusPaths.has(path);
}

export function isKitReady(id: string): boolean {
  const value = id.trim();
  return value.length > 0 && value !== "TODO" && !value.startsWith("TODO:");
}

export function kitFormAction(): string | null {
  if (!isKitReady(kitFormId)) return null;
  return `https://app.kit.com/forms/${kitFormId.trim()}/subscriptions`;
}

/** Returns a URL only when the value is a real http(s) address. TODO and empty stay unlinked. */
export function externalUrl(value: string): string | null {
  const trimmed = value.trim();
  if (trimmed.startsWith("https://") || trimmed.startsWith("http://")) return trimmed;
  return null;
}

export function mailtoHref(subject: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export function waitlistHref(): string {
  if (kitFormAction()) return "/start#anmelden";
  return mailtoHref("Warteliste Mentoring");
}

export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match
  );
}
