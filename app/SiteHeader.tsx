"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type HeaderLink = readonly [href: string, label: string, text: string];

const platformLinks: HeaderLink[] = [
  ["/producto", "Vista general", "La plataforma completa"],
  ["/crear", "Crear", "De prompts a experiencias"],
  ["/tutores", "Tutores + simuladores", "Bot vs Agent vs Learning Tutor"],
  ["/analitica", "Medir", "Trazabilidad e intervención"],
];

const solutionLinks: HeaderLink[] = [
  ["/casos-de-uso", "Casos de uso", "Aprendizaje conectado al trabajo"],
  ["/marca-blanca", "Marca blanca", "Tu identidad, dominio y experiencia"],
];

function HeaderLogo() {
  return (
    <Link className="brand" href="/" aria-label="HeyCourse, inicio">
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
}: {
  id: string;
  label: string;
  links: HeaderLink[];
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
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            <strong>{linkLabel}</strong>
            <small>{text}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
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
        <HeaderLogo />
        <nav className="desktop-nav" aria-label="Navegación principal">
          <DesktopDropdown
            id="platform-navigation"
            label="Plataforma"
            links={platformLinks}
          />
          <Link href="/como-funciona">Cómo funciona</Link>
          <Link href="/lxp-lms">LXP + LMS</Link>
          <DesktopDropdown
            id="solutions-navigation"
            label="Soluciones"
            links={solutionLinks}
          />
          <Link href="/pricing">Pricing</Link>
        </nav>
        <div className="nav-actions">
          <a className="nav-text-link" href="https://www.heycourse.ai/login">
            Iniciar sesión
          </a>
          <a className="button button-small" href="https://www.heycourse.ai/register">
            Crear cuenta
          </a>
        </div>
        <div className="mobile-menu" ref={mobileMenuRef}>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
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
            <span className="mobile-label">Plataforma</span>
            {platformLinks.map(([href, label]) => (
              <Link href={href} key={href} onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/como-funciona" onClick={() => setMobileOpen(false)}>
              Cómo funciona
            </Link>
            <Link href="/lxp-lms" onClick={() => setMobileOpen(false)}>
              LXP + LMS
            </Link>
            <Link href="/casos-de-uso" onClick={() => setMobileOpen(false)}>
              Casos de uso
            </Link>
            <Link href="/marca-blanca" onClick={() => setMobileOpen(false)}>
              Marca blanca
            </Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Link href="/demo" onClick={() => setMobileOpen(false)}>
              Ver experiencia
            </Link>
            <div className="mobile-account-actions">
              <a className="button button-secondary" href="https://www.heycourse.ai/login">
                Iniciar sesión
              </a>
              <a className="button" href="https://www.heycourse.ai/register">
                Crear cuenta
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
