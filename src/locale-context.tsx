import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type SiteCopy } from "./content";
import {
  applyLocale,
  applyMeta,
  getStoredLocale,
  persistLocale,
  type Locale,
} from "./locale";

type LocaleContextValue = {
  locale: Locale;
  copy: SiteCopy;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readDomLocale(): Locale {
  const lang = document.documentElement.lang;
  return lang === "en" || lang === "uk" ? lang : getStoredLocale();
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readDomLocale);

  useEffect(() => {
    applyMeta(content[locale].metaTitle, content[locale].metaDescription);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    applyLocale(next);
    persistLocale(next);
    setLocaleState(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      copy: content[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
