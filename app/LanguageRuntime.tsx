"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import type { ReactNode } from "react";
import { ENGLISH_COPY } from "./english-copy";
import { FRENCH_COPY } from "./french-copy";
import { ITALIAN_COPY } from "./italian-copy";
import {
  localeFromPathname,
  localizedPath,
  type Locale,
} from "./locales";
import { PORTUGUESE_COPY } from "./portuguese-copy";

const TRANSLATABLE_ATTRIBUTES = [
  "aria-label",
  "alt",
  "placeholder",
  "title",
] as const;

function normalized(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function copyForLocale(locale: Locale): Record<string, string> | null {
  if (locale === "en") return ENGLISH_COPY;
  if (locale === "pt") return PORTUGUESE_COPY;
  if (locale === "fr") return FRENCH_COPY;
  if (locale === "it") return ITALIAN_COPY;
  return null;
}

function translateTextNode(node: Text, copy: Record<string, string>) {
  const current = node.nodeValue ?? "";
  const key = normalized(current);
  const translation = copy[key];

  if (!translation || translation === key) return;

  const leading = current.match(/^\s*/)?.[0] ?? "";
  const trailing = current.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leading}${translation}${trailing}`;
}

function translateElement(
  element: Element,
  copy: Record<string, string>,
) {
  for (const attribute of TRANSLATABLE_ATTRIBUTES) {
    const current = element.getAttribute(attribute);
    if (!current) continue;
    const translation = copy[normalized(current)];
    if (translation && translation !== current) {
      element.setAttribute(attribute, translation);
    }
  }
}

function localizeAnchor(anchor: HTMLAnchorElement, locale: Locale) {
  if (anchor.closest(".language-switcher")) return;

  const rawHref = anchor.getAttribute("href");
  if (!rawHref || rawHref.startsWith("#")) return;

  try {
    const url = new URL(rawHref, window.location.origin);
    if (url.origin !== window.location.origin) return;
    url.pathname = localizedPath(url.pathname, locale);
    anchor.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
  } catch {
    // Ignore malformed or protocol-specific links.
  }
}

function translateTree(
  root: ParentNode,
  copy: Record<string, string>,
  locale: Locale,
) {
  if (root instanceof Element) {
    translateElement(root, copy);
    if (root instanceof HTMLAnchorElement) localizeAnchor(root, locale);
  }

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
  );

  let current = walker.nextNode();
  while (current) {
    if (current instanceof Text) {
      const parent = current.parentElement;
      if (
        parent &&
        !["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)
      ) {
        translateTextNode(current, copy);
      }
    } else if (current instanceof Element) {
      translateElement(current, copy);
      if (current instanceof HTMLAnchorElement) localizeAnchor(current, locale);
    }
    current = walker.nextNode();
  }
}

export function LanguageRuntime({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    const copy = copyForLocale(locale);
    if (!copy) return;

    translateTree(document.body, copy, locale);

    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        translateTree(document.body, copy, locale);
        scheduled = false;
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [...TRANSLATABLE_ATTRIBUTES, "href"],
      characterData: true,
      childList: true,
      subtree: true,
    });

    const keepLocalizedNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.closest(".language-switcher")) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#")) return;

      const url = new URL(rawHref, window.location.origin);
      if (url.origin !== window.location.origin) return;

      const destination = `${localizedPath(url.pathname, locale)}${url.search}${url.hash}`;
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(destination);
    };

    document.addEventListener("click", keepLocalizedNavigation, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", keepLocalizedNavigation, true);
    };
  }, [locale, pathname]);

  return children;
}
