import type { Metadata } from "next";
import {
  Arrow,
  ButtonLink,
  PageHero,
  SectionIntro,
} from "../components";

export const metadata: Metadata = {
  title: "Experiencia guiada",
  description:
    "Explora cómo se siente una experiencia HeyCourse desde dentro.",
};

export default function DemoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Experiencia guiada"
        title={<>Mira HeyCourse desde el lugar de quien <span className="gradient-text">aprende.</span></>}
        text="Este recorrido conceptual muestra cómo conviven contenido, práctica, tutoría y trazabilidad dentro de una misma experiencia."
        action={<ButtonLink href="#experiencia">Entrar al recorrido <Arrow /></ButtonLink>}
      >
        <div className="product-surface">
          <div className="surface-top"><strong>Tu recorrido</strong><span>62% completo</span></div>
          <div className="surface-body">
            {[
              ["01", "Comprender", "Marco y contexto", "✓"],
              ["02", "Decidir", "Escenario práctico", "✓"],
              ["03", "Conversar", "Tutor contextual", "Ahora"],
              ["04", "Aplicar", "Plan de acción", "—"],
            ].map(([number, title, type, status]) => (
              <div className="route-item" key={number}>
                <span>{number}</span><div><strong>{title}</strong><small>{type}</small></div><span>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="section lilac-section" id="experiencia">
        <div className="container">
          <SectionIntro
            eyebrow="Vista de aprendiz"
            title="Aprender, practicar y pedir ayuda sin cambiar de contexto."
            text="Una sola interfaz mantiene visible el objetivo, el progreso y la próxima acción útil."
          />
          <div className="demo-shell">
            <aside className="demo-sidebar">
              <span className="window-logo"><i /><i /><i /></span>
              <h3>Liderar conversaciones difíciles</h3>
              <p>Ruta guiada · 35 minutos</p>
              <nav className="demo-nav" aria-label="Módulos de la experiencia">
                <a href="#experiencia">1. Preparar</a>
                <a href="#experiencia">2. Explorar</a>
                <a href="#experiencia">3. Practicar</a>
                <a href="#experiencia">4. Aplicar</a>
              </nav>
            </aside>
            <div className="demo-main">
              <div className="demo-main-top">
                <strong>Momento 3 de 4</strong>
                <span>Guardado automáticamente</span>
              </div>
              <div className="demo-progress" aria-label="Progreso: tres de cuatro momentos">
                <i className="done" /><i className="done" /><i className="done" /><i />
              </div>
              <article className="demo-lesson">
                <span className="eyebrow">Simulación guiada</span>
                <h2>La conversación se desvía hacia la culpa.</h2>
                <p>
                  Tu colaborador rechaza el feedback y comienza a justificar el
                  resultado señalando al resto del equipo. Elige cómo
                  reencuadrarías la conversación.
                </p>
                <div className="demo-scenario">
                  <strong>Tu decisión</strong>
                  <p>
                    “Quiero separar dos cosas: el contexto que influyó y aquello
                    sobre lo que sí tienes capacidad de acción. Empecemos por lo
                    segundo.”
                  </p>
                </div>
                <div className="demo-tutor-bar">
                  <span className="tutor-avatar">A</span>
                  <div><strong>Alma puede ayudarte a profundizar</strong><small>Conoce el escenario y tu progreso</small></div>
                  <span>Conversar →</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Lo que ocurre detrás"
            title="La experiencia también produce contexto para decidir."
            text="Mientras la persona aprende, HeyCourse registra progreso, práctica y fricción para alimentar acompañamiento y analítica."
          />
          <div className="feature-grid">
            {[
              ["◎", "Contexto personal", "El tutor entiende contenido, actividad e historial relevante."],
              ["◇", "Evidencia de práctica", "Las decisiones y el feedback muestran cómo se aplica el conocimiento."],
              ["↗", "Señales accionables", "Los equipos pueden priorizar dónde acompañar o mejorar."],
            ].map(([icon, title, text]) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <span className="eyebrow">Siguiente paso</span>
          <h2>Imagina esta experiencia con tu conocimiento.</h2>
          <p>La propuesta ya está lista para evaluar. El sitio actual permanece intacto.</p>
          <div className="button-row centered-buttons">
            <ButtonLink href="/crear" variant="white">Ver cómo se crea</ButtonLink>
            <ButtonLink href="/producto" variant="ghost-light">Explorar plataforma <Arrow /></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
