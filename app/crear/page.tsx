import type { Metadata } from "next";
import {
  Arrow,
  ButtonLink,
  Check,
  PageHero,
  PromptVisual,
  SectionIntro,
} from "../components";

export const metadata: Metadata = {
  title: "Creación con IA",
  description:
    "Convierte prompts y documentos en contenido, quizzes y simulaciones.",
};

const features = [
  ["✦", "Prompt-first", "Describe la experiencia que necesitas, la audiencia y el resultado esperado."],
  ["▤", "Documentos como contexto", "Usa PDFs y materiales internos como punto de partida para preservar conocimiento relevante."],
  ["?", "Quizzes", "Genera preguntas alineadas al contenido y convierte comprensión en evidencia."],
  ["◇", "Simulaciones", "Crea escenarios, roles y decisiones con feedback basado en una rúbrica."],
  ["⌘", "Bloques flexibles", "Combina texto, medios, preguntas, práctica y reflexión dentro del mismo recorrido."],
  ["↺", "Iteración continua", "Ajusta estructura, tono, profundidad y práctica sin reconstruir todo desde cero."],
];

export default function CrearPage() {
  return (
    <main>
      <PageHero
        eyebrow="Crear con IA"
        title={<>De un prompt a una experiencia que se puede <span className="gradient-text">vivir.</span></>}
        text="La IA no rellena una plantilla. Ayuda a transformar una intención y tus fuentes en un recorrido con contenido, preguntas, práctica y evaluación."
        action={<ButtonLink href="/demo">Probar el recorrido</ButtonLink>}
      >
        <PromptVisual />
      </PageHero>

      <section className="section lilac-section">
        <div className="container">
          <SectionIntro
            eyebrow="Menos fricción. Más diseño."
            title="La creación empieza con lo que ya sabes."
            text="HeyCourse organiza el punto de partida y te devuelve una propuesta editable. La decisión pedagógica sigue en tus manos."
          />
          <div className="feature-grid">
            {features.map(([icon, title, text]) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-copy">
            <span className="eyebrow">Práctica incrustada</span>
            <h2>El aprendizaje no se valida con “siguiente”.</h2>
            <p>
              Inserta decisiones dentro del recorrido. Las simulaciones permiten
              practicar conversaciones, resolver escenarios y recibir feedback
              alineado a criterios claros.
            </p>
            <ul className="check-list">
              <li><Check /> Roles y contexto realista</li>
              <li><Check /> Decisiones con consecuencias</li>
              <li><Check /> Feedback basado en rúbricas</li>
              <li><Check /> Registro de desempeño personal</li>
            </ul>
          </div>
          <div className="product-surface">
            <div className="surface-top">
              <strong>Simulación · Objeción comercial</strong>
              <span>Modo práctica</span>
            </div>
            <div className="surface-body">
              <div className="demo-scenario">
                <strong>El cliente duda del retorno</strong>
                <p>Tu objetivo es descubrir el costo de mantener la situación actual antes de presentar una alternativa.</p>
              </div>
              {[
                ["A", "Explorar el impacto actual", "Alineado con la rúbrica", "✓"],
                ["B", "Defender todas las funciones", "Demasiado pronto", "—"],
                ["C", "Ofrecer un descuento", "No explora el problema", "—"],
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

      <section className="quote-band">
        <div className="container">
          <blockquote>
            “Crear rápido no significa publicar ruido. Significa tener más tiempo
            para <span>diseñar una mejor experiencia.</span>”
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta">
          <span className="eyebrow">De intención a experiencia</span>
          <h2>Empieza con una idea. Termina con aprendizaje observable.</h2>
          <p>Combina creación, práctica, tutoría y trazabilidad dentro del mismo recorrido.</p>
          <div className="button-row centered-buttons">
            <ButtonLink href="/demo" variant="white">Ver experiencia</ButtonLink>
            <ButtonLink href="/como-funciona" variant="ghost-light">Cómo funciona <Arrow /></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
