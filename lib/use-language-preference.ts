"use client";

import { useCallback, useEffect, useState } from "react";
import type { Language } from "@/lib/i18n";

export function useLanguagePreference() {
  // Keep first client render identical to SSR output to avoid hydration mismatch.
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("alethemora-language");
    if (stored === "en" || stored === "de") {
      setLanguageState(stored);
      return;
    }
    const browserLanguage = window.navigator.language.toLowerCase();
    setLanguageState(browserLanguage.startsWith("de") ? "de" : "en");
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("alethemora-language", nextLanguage);
  }, []);

  return { language, setLanguage };
}
