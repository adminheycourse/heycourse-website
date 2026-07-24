export type Locale = "es" | "en" | "pt" | "fr" | "it";

export const localeOptions: ReadonlyArray<{
  code: Locale;
  shortLabel: string;
  name: string;
}> = [
  { code: "es", shortLabel: "ES", name: "Español" },
  { code: "en", shortLabel: "EN", name: "English" },
  { code: "pt", shortLabel: "PT", name: "Português" },
  { code: "fr", shortLabel: "FR", name: "Français" },
  { code: "it", shortLabel: "IT", name: "Italiano" },
];

export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/pt" || pathname.startsWith("/pt/")) return "pt";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  if (pathname === "/it" || pathname.startsWith("/it/")) return "it";
  return "es";
}

export function stripLocalePrefix(pathname: string) {
  return pathname.replace(/^\/(?:en|pt|fr|it)(?=\/|$)/, "") || "/";
}

export function localizedPath(pathname: string, locale: Locale) {
  const basePath = stripLocalePrefix(pathname);
  if (locale === "es") return basePath;
  return `/${locale}${basePath === "/" ? "" : basePath}`;
}
