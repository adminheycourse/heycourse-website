import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Logo() {
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

export function BrandMark() {
  return (
    <span className="window-logo" aria-hidden="true">
      <Image src="/heycourse-mark.png" alt="" width={150} height={150} />
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Learning intelligence para convertir conocimiento en progreso
            observable.
          </p>
        </div>
        <div>
          <h4>Plataforma</h4>
          <Link href="/producto">Producto</Link>
          <Link href="/crear">Creación</Link>
          <Link href="/tutores">Tutores y simuladores</Link>
          <Link href="/analitica">Analítica</Link>
        </div>
        <div>
          <h4>Descubrir</h4>
          <Link href="/como-funciona">Cómo funciona</Link>
          <Link href="/lxp-lms">LXP + LMS</Link>
          <Link href="/casos-de-uso">Casos de uso</Link>
          <Link href="/marca-blanca">Marca blanca</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/demo">Experiencia guiada</Link>
        </div>
        <div className="footer-cta">
          <h4>Entrar a HeyCourse</h4>
          <p>Continúa en tu cuenta o crea una organización para empezar.</p>
          <div className="footer-account-links">
            <a href="https://www.heycourse.ai/login">Iniciar sesión</a>
            <a href="https://www.heycourse.ai/register">Crear cuenta <Arrow /></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 HeyCourse</span>
        <span>Propuesta de experiencia digital</span>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function Check() {
  return <span className="check" aria-hidden="true">✓</span>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "white" | "ghost-light";
}) {
  return (
    <Link className={`button button-${variant}`} href={href}>
      {children}
    </Link>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-intro ${align === "left" ? "intro-left" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section className="page-hero section">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p className="lead">{text}</p>
          {action && <div className="button-row">{action}</div>}
        </div>
        {children && <div className="page-hero-visual">{children}</div>}
      </div>
    </section>
  );
}

export function PromptVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`prompt-visual ${compact ? "prompt-compact" : ""}`}>
      <div className="visual-glow" />
      <div className="prompt-window">
        <div className="window-top">
          <BrandMark />
          <span>Studio</span>
          <span className="window-status">Borrador inteligente</span>
        </div>
        <div className="prompt-content">
          <span className="micro-label">¿Qué quieres crear?</span>
          <p>
            Diseña una ruta para que nuevos líderes practiquen conversaciones
            de feedback.
          </p>
          <div className="prompt-tags">
            <span>Documento: cultura.pdf</span>
            <span>Duración: 30 min</span>
          </div>
          <div className="generate-row">
            <span className="ai-spark">✦</span>
            <div>
              <strong>Experiencia generada</strong>
              <small>4 momentos · 2 prácticas · 1 tutor</small>
            </div>
            <span className="completion">100%</span>
          </div>
        </div>
      </div>
      {!compact && (
        <>
          <div className="floating-card float-quiz">
            <span className="float-icon">?</span>
            <div><strong>Quiz adaptativo</strong><small>6 preguntas</small></div>
          </div>
          <div className="floating-card float-simulation">
            <span className="float-icon purple-icon">◇</span>
            <div><strong>Simulación</strong><small>Feedback por rúbrica</small></div>
          </div>
          <div className="signal-orbit orbit-a" />
          <div className="signal-orbit orbit-b" />
        </>
      )}
    </div>
  );
}

export function TutorVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`tutor-visual ${compact ? "tutor-compact" : ""}`}>
      <div className="tutor-head">
        <span className="tutor-avatar">A</span>
        <div><strong>Alma</strong><small>Tutora de liderazgo</small></div>
        <span className="live-pill">En contexto</span>
      </div>
      <div className="tutor-message">
        Antes de avanzar: ¿qué parte de esa conversación te resultaría más
        difícil sostener?
      </div>
      <div className="context-row">
        <span>Progreso 62%</span>
        <span>Unidad 3</span>
        <span>Reto: feedback</span>
      </div>
    </div>
  );
}

export function AnalyticsVisual({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`analytics-visual ${dark ? "analytics-dark" : ""}`}>
      <div className="analytics-top">
        <div><small>Engagement</small><strong>78%</strong></div>
        <span className="trend">↗ 12%</span>
      </div>
      <div className="chart-bars" aria-hidden="true">
        {[38, 51, 45, 67, 61, 80, 74, 92].map((height, index) => (
          <i style={{ height: `${height}%` }} key={index} />
        ))}
      </div>
      <div className="risk-row">
        <span className="risk-dot" />
        <div><strong>3 señales para revisar</strong><small>Priorizadas por contexto</small></div>
        <span>Ver →</span>
      </div>
    </div>
  );
}

export function FlowVisual() {
  const items = [
    ["01", "Intención", "Prompt o documentos"],
    ["02", "Experiencia", "Contenido y práctica"],
    ["03", "Acompañamiento", "Tutor contextual"],
    ["04", "Señales", "Progreso y fricción"],
    ["05", "Intervención", "Acción a tiempo"],
  ];
  return (
    <div className="flow-visual">
      {items.map(([number, title, text], index) => (
        <div className="flow-step" key={number}>
          <span className="flow-number">{number}</span>
          <div><strong>{title}</strong><small>{text}</small></div>
          {index < items.length - 1 && <span className="flow-arrow">→</span>}
        </div>
      ))}
    </div>
  );
}

export function MetricCard({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className={`metric-card ${accent ? "metric-accent" : ""}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
