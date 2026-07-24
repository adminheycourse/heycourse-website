"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import type { ReactNode } from "react";
import { ENGLISH_COPY } from "./english-copy";

const TRANSLATABLE_ATTRIBUTES = [
  "aria-label",
  "alt",
  "placeholder",
  "title",
] as const;

function normalized(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function translateTextNode(node: Text) {
  const current = node.nodeValue ?? "";
  const key = normalized(current);
  const translation = ENGLISH_COPY[key];

  if (!translation || translation === key) return;

  const leading = current.match(/^\s*/)?.[0] ?? "";
  const trailing = current.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leading}${translation}${trailing}`;
}

function translateElement(element: Element) {
  for (const attribute of TRANSLATABLE_ATTRIBUTES) {
    const current = element.getAttribute(attribute);
    if (!current) continue;
    const translation = ENGLISH_COPY[normalized(current)];
    if (translation && translation !== current) {
      element.setAttribute(attribute, translation);
    }
  }
}

function localizePath(pathname: string) {
  if (
    pathname === "/en" ||
    pathname.startsWith("/en/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/")
  ) {
    return pathname;
  }

  return `/en${pathname === "/" ? "" : pathname}`;
}

function localizeAnchor(anchor: HTMLAnchorElement) {
  if (anchor.closest(".language-switcher")) return;

  const rawHref = anchor.getAttribute("href");
  if (!rawHref || rawHref.startsWith("#")) return;

  try {
    const url = new URL(rawHref, window.location.origin);
    if (url.origin !== window.location.origin) return;
    url.pathname = localizePath(url.pathname);
    anchor.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
  } catch {
    // Ignore malformed or protocol-specific links.
  }
}

function translateTree(root: ParentNode) {
  if (root instanceof Element) {
    translateElement(root);
    if (root instanceof HTMLAnchorElement) localizeAnchor(root);
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
        translateTextNode(current);
      }
    } else if (current instanceof Element) {
      translateElement(current);
      if (current instanceof HTMLAnchorElement) localizeAnchor(current);
    }
    current = walker.nextNode();
  }
}

export function LanguageRuntime({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  useLayoutEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "es";
    if (!isEnglish) return;

    translateTree(document.body);

    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        translateTree(document.body);
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

    const keepEnglishNavigation = (event: MouseEvent) => {
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

      const destination = `${localizePath(url.pathname)}${url.search}${url.hash}`;
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(destination);
    };

    document.addEventListener("click", keepEnglishNavigation, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", keepEnglishNavigation, true);
    };
  }, [isEnglish, pathname]);

  return children;
}
