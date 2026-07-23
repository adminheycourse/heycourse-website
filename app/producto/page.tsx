import type { Metadata } from "next";
import {
  AnalyticsVisual,
  Arrow,
  ButtonLink,
  Check,
  PageHero,
  SectionIntro,
  TutorVisual,
} from "../components";

export const metadata: Metadata = {
  title: "Producto",
  description:
    "Una plataforma que crea, orquesta, guía, mide y mejora experiencias de aprendizaje.",
};

const modules = [
  ["✦", "Crear", "Genera estructuras, contenido, quizzes y simulaciones desde un prompt o tus documentos."],
  ["⌘", "Orquestar", "Diseña rutas y opera múltiples organizaciones con identidad, dominio y catálogo propios."],
  ["◎", "Guiar", "Elige Tutor, Socrático o Evaluador por chat o voz; suma avatar cuando la experiencia lo requiere."],
  ["◇", "Practicar", "Escenarios y rúbricas convierten conocimiento en decisiones observables."],
  ["⌁", "Medir", "Visualiza avance, dominio, interacción y señales de fricción a nivel personal."],
  ["↗", "Intervenir", "Prioriza dónde actuar para sostener engagement y anticipar riesgo de abandono."],
];

export default function ProductoPage() {
  return (
    <main>
      <PageHero
        eyebrow="La plataforma"
        title={<>Una plataforma que convierte conocimiento en <span className="gradient-text">progreso observable.</span></>}
        text="HeyCourse conecta creación, experiencia, acompañamiento y analítica en un solo sistema. Cada capa comparte contexto para que el aprendizaje no se pierda entre herramientas."
        action={<ButtonLink href="/demo">Ver la plataforma</ButtonLink>}
      >
        <div className="product-surface">
          <div className="surface-top">
            <strong>Ruta · Nuevos líderes</strong>
            <span>Vista de diseño</span>
          </div>
          <div className="surface-body">
            {[
              ["01", "El rol del líder", "Contenido", "✓"],
              ["02", "Conversaciones difíciles", "Simulación", "✓"],
              ["03", "Feedback que mueve", "Práctica guiada", "62%"],
              ["04", "Plan de acción", "Reflexión", "—"],
            ].map(([number, title, type, status]) => (
              <div className="route-item" key={number}>
                <span>{number}</span>
                <div><strong>{title}</strong><small>{type}</small></div>
                <span>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <nav className="subnav" aria-label="Secciones de producto">
        <div className="container">
          <a href="#arquitectura">Arquitectura</a>
          <a href="#acompanamiento">Acompañamiento</a>
          <a href="#operacion">Operación</a>
          <a href="#inteligencia">Inteligencia</a>
        </div>
      </nav>

      <section className="section" id="arquitectura">
        <div className="container">
          <SectionIntro
            eyebrow="Una arquitectura continua"
            title="Seis capacidades. Un solo contexto."
            text="Lo que se crea alimenta lo que se guía. Lo que se practica alimenta lo que se mide. Lo que se mide permite actuar."
          />
          <div className="feature-grid">
            {modules.map(([icon, title, text]) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section lilac-section" id="acompanamiento">
        <div className="container split-section">
          <div className="split-copy">
            <span className="eyebrow">Acompañamiento</span>
            <h2>La guía aparece dentro del aprendizaje.</h2>
            <p>
              No es una ventana aislada ni una capa decorativa. El tutor conoce
              la experiencia, la actividad actual y el historial relevante de
              cada persona.
            </p>
            <ul className="check-list">
              <li><Check /> Chat, voz o avatar según la experiencia</li>
              <li><Check /> Preguntas que ayudan a razonar</li>
              <li><Check /> Seguimiento conectado al recorrido</li>
            </ul>
            <ButtonLink href="/tutores" variant="secondary">
              Explorar tutores <Arrow />
            </ButtonLink>
          </div>
          <TutorVisual />
        </div>
      </section>

      <section className="section" id="operacion">
        <div className="container split-section reverse">
          <div className="product-surface">
            <div className="surface-top">
              <strong>Organización · Norte</strong>
              <span>Vista de operación</span>
            </div>
            <div className="surface-body">
              {[
                ["A", "Academia comercial", "124 personas", "Activa"],
                ["B", "Onboarding líderes", "47 personas", "Activa"],
                ["C", "Partners LATAM", "83 personas", "En diseño"],
              ].map(([number, title, type, status]) => (
                <div className="route-item" key={title}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><small>{type}</small></div>
                  <span>{status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="split-copy">
            <span className="eyebrow">Operación</span>
            <h2>Control sin rigidizar la experiencia.</h2>
            <p>
              Administra roles, cohortes, asignaciones, certificados y
              organizaciones con identidad propia. La operación se mantiene
              ordenada mientras cada persona vive un recorrido relevante.
            </p>
            <ul className="check-list">
              <li><Check /> Gestión multiempresa y white-label</li>
              <li><Check /> Rutas, cohortes y certificados</li>
              <li><Check /> Visibilidad para cada rol</li>
            </ul>
            <ButtonLink href="/marca-blanca" variant="secondary">
              Explorar marca blanca <Arrow />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section lilac-section" id="inteligencia">
        <div className="container split-section">
          <div className="split-copy">
            <span className="eyebrow">Learning intelligence</span>
            <h2>De actividad acumulada a decisiones útiles.</h2>
            <p>
              HeyCourse conecta ritmo, progreso, práctica e interacción para
              mostrar dónde hay avance y dónde conviene mirar. No promete
              adivinar el futuro: entrega señales para intervenir mejor.
            </p>
            <ButtonLink href="/analitica">
              Ver analítica <Arrow />
            </ButtonLink>
          </div>
          <AnalyticsVisual />
        </div>
      </section>
    </main>
  );
}
