"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { zhCN, zhTW, en, Locale, localeNames } from "../i18n/translations";

const translations = {
  zhCN,
  zhTW,
  en,
};

interface I18nContextType {
  locale: Locale;
  t: typeof zhCN;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zhCN");

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-2">
      {(Object.keys(localeNames) as Locale[]).map((key) => (
        <button
          key={key}
          onClick={() => setLocale(key)}
          className={`px-2 py-1 text-xs rounded transition-colors ${
            locale === key
              ? "bg-[var(--qing)] text-white"
              : "text-[var(--hei)]/60 hover:text-[var(--qing)]"
          }`}
        >
          {localeNames[key]}
        </button>
      ))}
    </div>
  );
}
