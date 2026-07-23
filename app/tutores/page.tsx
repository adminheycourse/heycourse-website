import type { Metadata } from "next";
import {
  Arrow,
  ButtonLink,
  Check,
  PageHero,
  SectionIntro,
  TutorVisual,
} from "../components";

export const metadata: Metadata = {
  title: "Tutores contextuales",
  description:
    "No es un bot. Es una inteligencia que comprende el contenido, el momento y el progreso.",
};

const comparisons = [
  ["Espera una pregunta", "Puede aparecer cuando detecta una fricción relevante"],
  ["Responde desde una conversación aislada", "Usa el contenido, la actividad y el progreso como contexto"],
  ["Optimiza la respuesta inmediata", "Orienta hacia comprensión, práctica y autonomía"],
  ["Olvida el recorrido", "Mantiene memoria del progreso relevante"],
];

export default function TutoresPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tutores contextuales"
        title={<>No es un bot. Es una inteligencia que sabe <span className="gradient-text">dónde estás aprendiendo.</span></>}
        text="Un tutor HeyCourse no vive en una burbuja de chat. Conoce el contenido, la actividad, el progreso y el objetivo para guiar a cada persona en el momento adecuado."
        action={<ButtonLink href="/demo">Conversar con un tutor</ButtonLink>}
      >
        <TutorVisual />
      </PageHero>

      <section className="quote-band">
        <div className="container">
          <blockquote>
            “Los bots fueron el comienzo. El aprendizaje inteligente es{" "}
            <span>lo que sigue.</span>”
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="La diferencia"
            title="Responder no es lo mismo que enseñar."
            text="El cambio no está en que la conversación suene humana. Está en que la orientación entienda el aprendizaje."
          />
          <div className="comparison-table">
            <div className="comparison-row">
              <div className="bot-side"><strong>Bot tradicional</strong><p>Interacción aislada</p></div>
              <div className="tutor-side"><strong>Tutor contextual</strong><p>Orientación conectada al recorrido</p></div>
            </div>
            {comparisons.map(([bot, tutor]) => (
              <div className="comparison-row" key={bot}>
                <div className="bot-side"><p>− {bot}</p></div>
                <div className="tutor-side"><p>+ {tutor}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section lilac-section">
        <div className="container split-section">
          <div className="split-copy">
            <span className="eyebrow">Contexto pedagógico</span>
            <h2>Sabe cuándo preguntar, explicar o devolver el desafío.</h2>
            <p>
              El tutor puede orientar con una pregunta, recuperar una idea del
              contenido, proponer una práctica o ayudar a interpretar feedback.
              La meta no es sustituir el pensamiento: es sostenerlo.
            </p>
            <ul className="check-list">
              <li><Check /> Contexto del contenido actual</li>
              <li><Check /> Historial y progreso relevante</li>
              <li><Check /> Objetivo y estilo de acompañamiento</li>
              <li><Check /> Chat, voz o avatar</li>
            </ul>
          </div>
          <div className="product-surface">
            <div className="surface-top">
              <strong>Memoria de contexto</strong>
              <span>Aprendiz · Valeria</span>
            </div>
            <div className="surface-body">
              {[
                ["01", "Contenido actual", "Conversaciones difíciles", "Activo"],
                ["02", "Fortaleza", "Escucha y diagnóstico", "Alta"],
                ["03", "Fricción", "Cerrar próximos pasos", "Revisar"],
                ["04", "Próxima acción", "Simulación guiada", "Sugerida"],
              ].map(([number, title, type, status]) => (
                <div className="route-item" key={number}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><small>{type}</small></div>
                  <span>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Una presencia, no un pop-up"
            title="El acompañamiento forma parte del diseño."
            text="Configura propósito, tono, límites y momento de intervención para que cada tutor cumpla un rol claro."
          />
          <div className="feature-grid">
            {[
              ["◌", "Acompañar", "Ayuda a comprender, ordenar ideas y sostener el avance."],
              ["◇", "Practicar", "Asume un rol dentro de una simulación y devuelve feedback."],
              ["↗", "Reorientar", "Detecta una fricción y propone el siguiente paso más útil."],
            ].map(([icon, title, text]) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="centered-action">
            <ButtonLink href="/demo">Ver al tutor en acción <Arrow /></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
