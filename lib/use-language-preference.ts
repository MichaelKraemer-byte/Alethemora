"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import type { Language } from "@/lib/i18n";

const STORAGE_KEY = "alethemora-language";
const CHANGE_EVENT = "alethemora-language-change";

function resolveLanguage(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "de") return stored;
  return window.navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
}

export function useLanguagePreference() {
  // First render matches the static HTML ("en") so hydration does not mismatch.
  // A blocking script hides the page when the resolved language is not English,
  // until this layout effect applies the browser or saved choice.
  const [language, setLanguageState] = useState<Language>("en");
  const [settled, setSettled] = useState(false);

  useLayoutEffect(() => {
    setLanguageState(resolveLanguage());
    setSettled(true);
  }, []);

  useLayoutEffect(() => {
    if (!settled) return;
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-lang", language);
    document.documentElement.removeAttribute("data-pending-lang");
  }, [settled, language]);

  useEffect(() => {
    const onChange = () => setLanguageState(resolveLanguage());
    window.addEventListener(CHANGE_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(CHANGE_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
    document.documentElement.setAttribute("data-lang", nextLanguage);
    document.documentElement.removeAttribute("data-pending-lang");
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return { language, setLanguage };
}
