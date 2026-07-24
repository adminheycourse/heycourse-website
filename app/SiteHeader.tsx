"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  localeFromPathname,
  localeOptions,
  localizedPath,
  type Locale,
} from "./locales";

type HeaderLink = readonly [href: string, label: string, text: string];

const languageSelectorLabels: Record<Locale, string> = {
  es: "Selector de idioma",
  en: "Language selector",
  pt: "Seletor de idioma",
  fr: "Sélecteur de langue",
};

const navigation = {
  es: {
    platform: "Plataforma",
    how: "Cómo funciona",
    solutions: "Soluciones",
    signIn: "Iniciar sesión",
    createAccount: "Crear cuenta",
    experience: "Ver experiencia",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    navigationLabel: "Navegación principal",
    homeLabel: "HeyCourse, inicio",
    platformLinks: [
      ["/producto", "Vista general", "La plataforma completa"],
      ["/crear", "Crear", "De prompts a experiencias"],
      ["/tutores", "Tutores + simuladores", "Bot vs Agent vs Learning Tutor"],
      ["/analitica", "Medir", "Trazabilidad e intervención"],
    ] as HeaderLink[],
    solutionLinks: [
      ["/casos-de-uso", "Casos de uso", "Aprendizaje conectado al trabajo"],
      ["/marca-blanca", "Marca blanca", "Tu identidad, dominio y experiencia"],
    ] as HeaderLink[],
  },
  en: {
    platform: "Platform",
    how: "How it works",
    solutions: "Solutions",
    signIn: "Sign in",
    createAccount: "Create account",
    experience: "View experience",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navigationLabel: "Main navigation",
    homeLabel: "HeyCourse, home",
    platformLinks: [
      ["/producto", "Overview", "The complete platform"],
      ["/crear", "Create", "From prompts to experiences"],
      ["/tutores", "Tutors + simulations", "Bot vs Agent vs Learning Tutor"],
      ["/analitica", "Measure", "Traceability and intervention"],
    ] as HeaderLink[],
    solutionLinks: [
      ["/casos-de-uso", "Use cases", "Learning connected to work"],
      ["/marca-blanca", "White label", "Your identity, domain and experience"],
    ] as HeaderLink[],
  },
  pt: {
    platform: "Plataforma",
    how: "Como funciona",
    solutions: "Soluções",
    signIn: "Entrar",
    createAccount: "Criar conta",
    experience: "Ver experiência",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    navigationLabel: "Navegação principal",
    homeLabel: "HeyCourse, início",
    platformLinks: [
      ["/producto", "Visão geral", "A plataforma completa"],
      ["/crear", "Criar", "De prompts a experiências"],
      ["/tutores", "Tutores + simulações", "Bot vs Agent vs Learning Tutor"],
      ["/analitica", "Medir", "Rastreabilidade e intervenção"],
    ] as HeaderLink[],
    solutionLinks: [
      ["/casos-de-uso", "Casos de uso", "Aprendizagem conectada ao trabalho"],
      ["/marca-blanca", "Marca branca", "Sua identidade, domínio e experiência"],
    ] as HeaderLink[],
  },
  fr: {
    platform: "Plateforme",
    how: "Comment ça marche",
    solutions: "Solutions",
    signIn: "Se connecter",
    createAccount: "Créer un compte",
    experience: "Voir l’expérience",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    navigationLabel: "Navigation principale",
    homeLabel: "HeyCourse, accueil",
    platformLinks: [
      ["/producto", "Vue d’ensemble", "La plateforme complète"],
      ["/crear", "Créer", "Des prompts aux expériences"],
      ["/tutores", "Tuteurs + simulations", "Bot vs Agent vs Learning Tutor"],
      ["/analitica", "Mesurer", "Traçabilité et intervention"],
    ] as HeaderLink[],
    solutionLinks: [
      ["/casos-de-uso", "Cas d’usage", "Un apprentissage connecté au travail"],
      ["/marca-blanca", "Marque blanche", "Votre identité, domaine et expérience"],
    ] as HeaderLink[],
  },
};

function HeaderLogo({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <Link
      className="brand"
      href={localizedPath("/", locale)}
      aria-label={label}
    >
      <Image
        className="brand-logo"
        src="/heycourse-logo.png"
        alt=""
        width={760}
        height={160}
      />
    </Link>
  );
}

function DesktopDropdown({
  id,
  label,
  links,
  locale,
}: {
  id: string;
  label: string;
  links: HeaderLink[];
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelScheduledClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimerRef.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(
    () => () => {
      cancelScheduledClose();
    },
    [],
  );

  useEffect(() => {
    if (!open) return;

    const closeFromOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !dropdownRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeFromOutside);
    return () => document.removeEventListener("pointerdown", closeFromOutside);
  }, [open]);

  return (
    <div
      className={`nav-dropdown${open ? " is-open" : ""}`}
      ref={dropdownRef}
      onMouseEnter={() => {
        cancelScheduledClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        cancelScheduledClose();
        setOpen(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        className="nav-dropdown-trigger"
        type="button"
        ref={triggerRef}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(true)}
      >
        {label} <span aria-hidden="true">⌄</span>
      </button>
      <div className="dropdown-panel" id={id} hidden={!open}>
        {links.map(([href, linkLabel, text]) => (
          <Link
            href={localizedPath(href, locale)}
            key={href}
            onClick={() => setOpen(false)}
          >
            <strong>{linkLabel}</strong>
            <small>{text}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}

function LanguageSelector({ pathname }: { pathname: string }) {
  const locale = localeFromPathname(pathname);

  return (
    <div
      className="language-switcher"
      aria-label={languageSelectorLabels[locale]}
    >
      {localeOptions.map((option, index) => (
        <span className="language-choice" key={option.code}>
          {index > 0 && <i aria-hidden="true">/</i>}
          <a
            href={localizedPath(pathname, option.code)}
            lang={option.code}
            hrefLang={option.code}
            title={option.name}
            aria-label={option.name}
            aria-current={locale === option.code ? "page" : undefined}
            className={locale === option.code ? "is-active" : undefined}
          >
            {option.shortLabel}
          </a>
        </span>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = navigation[locale];
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeFromOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !mobileMenuRef.current?.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    };
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <HeaderLogo locale={locale} label={copy.homeLabel} />
        <nav className="desktop-nav" aria-label={copy.navigationLabel}>
          <DesktopDropdown
            id="platform-navigation"
            label={copy.platform}
            links={copy.platformLinks}
            locale={locale}
          />
          <Link href={localizedPath("/como-funciona", locale)}>{copy.how}</Link>
          <Link href={localizedPath("/lxp-lms", locale)}>LXP + LMS</Link>
          <DesktopDropdown
            id="solutions-navigation"
            label={copy.solutions}
            links={copy.solutionLinks}
            locale={locale}
          />
          <Link href={localizedPath("/pricing", locale)}>Pricing</Link>
        </nav>
        <div className="nav-actions">
          <LanguageSelector pathname={pathname} />
          <a className="nav-text-link" href="https://www.heycourse.ai/login">
            {copy.signIn}
          </a>
          <a className="button button-small" href="https://www.heycourse.ai/register">
            {copy.createAccount}
          </a>
        </div>
        <div className="mobile-menu" ref={mobileMenuRef}>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileOpen ? copy.closeMenu : copy.openMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
          <div
            className="mobile-panel"
            id="mobile-navigation"
            hidden={!mobileOpen}
          >
            <LanguageSelector pathname={pathname} />
            <span className="mobile-label">{copy.platform}</span>
            {copy.platformLinks.map(([href, label]) => (
              <Link
                href={localizedPath(href, locale)}
                key={href}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href={localizedPath("/como-funciona", locale)}
              onClick={() => setMobileOpen(false)}
            >
              {copy.how}
            </Link>
            <Link
              href={localizedPath("/lxp-lms", locale)}
              onClick={() => setMobileOpen(false)}
            >
              LXP + LMS
            </Link>
            <Link
              href={localizedPath("/casos-de-uso", locale)}
              onClick={() => setMobileOpen(false)}
            >
              {copy.solutionLinks[0][1]}
            </Link>
            <Link
              href={localizedPath("/marca-blanca", locale)}
              onClick={() => setMobileOpen(false)}
            >
              {copy.solutionLinks[1][1]}
            </Link>
            <Link
              href={localizedPath("/pricing", locale)}
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href={localizedPath("/demo", locale)}
              onClick={() => setMobileOpen(false)}
            >
              {copy.experience}
            </Link>
            <div className="mobile-account-actions">
              <a className="button button-secondary" href="https://www.heycourse.ai/login">
                {copy.signIn}
              </a>
              <a className="button" href="https://www.heycourse.ai/register">
                {copy.createAccount}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
