import { defaultLang } from "./ui";
import es from "./languages/es.json";
import en from "./languages/en.json";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (["en", "es"].includes(lang)) return lang;
  return defaultLang;
}

export function useTranslations(lang: "en" | "es") {
  const translations = lang === "es" ? es : en;

  return function t(key: string) {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key;
    }

    return value as string;
  };
}

export function getRelativeUrl(url: URL, lang: "en" | "es") {
  const pathname = url.pathname;
  const currentLang = getLangFromUrl(url);
  const otherLang = currentLang === "en" ? "es" : "en";

  if (pathname === "/") {
    return lang === "en" ? "/en" : "/es";
  }

  if (pathname.startsWith(`/${currentLang}`)) {
    return pathname.replace(`/${currentLang}`, `/${lang}`);
  }

  return pathname;
}
