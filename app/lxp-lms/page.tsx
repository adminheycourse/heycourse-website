import type { Metadata } from "next";
import {
  Arrow,
  ButtonLink,
  Check,
  PageHero,
  SectionIntro,
} from "../components";

export const metadata: Metadata = {
  title: "LXP + LMS",
  description:
    "La experiencia personal de una LXP y el control operativo de un LMS, conectados por inteligencia contextual.",
};

export default function LxpLmsPage() {
  return (
    <main>
      <PageHero
        eyebrow="LXP + LMS"
        title={<>La experiencia que las personas quieren. El control que la organización <span className="gradient-text">necesita.</span></>}
        text="Durante años el mercado obligó a elegir: experiencia o gestión. HeyCourse combina ambas y agrega inteligencia contextual para que cada capa mejore a la otra."
        action={<ButtonLink href="/demo">Verlos trabajando juntos</ButtonLink>}
      >
        <div className="worlds-grid" style={{ gridTemplateColumns: "1fr 86px 1fr" }}>
          <article className="world-card" style={{ minHeight: 330, padding: 28 }}>
            <span className="world-label">LXP</span>
            <h3>Relevancia personal.</h3>
            <p className="lead" style={{ fontSize: 13 }}>
              Descubrimiento, autonomía, recomendaciones y recorridos que se
              adaptan.
            </p>
          </article>
          <div className="plus-core"><span>+</span><small>contexto</small></div>
          <article className="world-card" style={{ minHeight: 330, padding: 28 }}>
            <span className="world-label">LMS</span>
            <h3>Visibilidad operativa.</h3>
            <p className="lead" style={{ fontSize: 13 }}>
              Roles, asignaciones, progreso, certificación y gobierno.
            </p>
          </article>
        </div>
      </PageHero>

      <section className="section lilac-section">
        <div className="container">
          <SectionIntro
            eyebrow="La combinación"
            title="La inteligencia vive en el espacio entre ambos."
            text="La personalización usa datos de progreso. La gestión entiende la experiencia real. El contenido se mejora con señales."
          />
          <div className="worlds-grid">
            <article className="world-card">
              <span className="world-label">LXP</span>
              <h3>Una experiencia que invita a avanzar.</h3>
              <ul className="check-list">
                <li><Check /> Rutas relevantes y exploración</li>
                <li><Check /> Tutores contextuales</li>
                <li><Check /> Práctica dentro del recorrido</li>
                <li><Check /> Progreso personal visible</li>
              </ul>
            </article>
            <div className="plus-core"><span>+</span><small>IA contextual</small></div>
            <article className="world-card">
              <span className="world-label">LMS</span>
              <h3>Una operación que puede gobernar y mejorar.</h3>
              <ul className="check-list">
                <li><Check /> Roles, cohortes y asignaciones</li>
                <li><Check /> Certificados y trazabilidad</li>
                <li><Check /> Analítica por persona y grupo</li>
                <li><Check /> Gestión multiempresa y marca</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Un solo sistema"
            title="Cuando la experiencia y la operación comparten contexto."
            text="El valor aparece en las conexiones, no en una lista más larga de funciones."
          />
          <div className="feature-grid">
            {[
              ["↔", "Diseño conectado a datos", "Las señales del recorrido ayudan a refinar contenido, práctica y acompañamiento."],
              ["◎", "Personalización gobernable", "Cada persona recibe contexto sin perder estructura, roles ni visibilidad."],
              ["↗", "Escala con identidad", "Una operación central puede habilitar experiencias distintas por organización o audiencia."],
            ].map(([icon, title, text]) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="centered-action">
            <ButtonLink href="/producto">Conocer la plataforma <Arrow /></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
