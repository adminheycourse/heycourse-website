import Link from "next/link";
import {
  AnalyticsVisual,
  Arrow,
  ButtonLink,
  Check,
  Eyebrow,
  FlowVisual,
  PromptVisual,
  SectionIntro,
  TutorVisual,
} from "./components";

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>LXP + LMS, reinventados con IA</Eyebrow>
            <h1>
              El aprendizaje ahora tiene{" "}
              <span className="gradient-text">inteligencia propia.</span>
            </h1>
            <p className="lead">
              Convierte un prompt o tus documentos en una experiencia completa
              con contenido, quizzes y simulaciones. Tutores contextuales guían
              a cada persona y la trazabilidad te ayuda a intervenir antes.
            </p>
            <div className="button-row">
              <ButtonLink href="/demo">Ver la experiencia</ButtonLink>
              <ButtonLink href="/como-funciona" variant="secondary">
                Cómo funciona <Arrow />
              </ButtonLink>
            </div>
            <div className="hero-note">
              <span className="pulse-dot" />
              No es un bot. Es una inteligencia que entiende el contexto de
              aprendizaje.
            </div>
          </div>
          <PromptVisual />
        </div>
      </section>

      <section className="capability-rail" aria-label="Capacidades principales">
        <div className="rail-track">
          {[
            "Creación desde prompts",
            "Quizzes y simulaciones",
            "Tutores contextuales",
            "Trazabilidad personal",
            "Riesgo de deserción",
            "LXP + LMS",
          ].map((item) => (
            <span key={item}>
              <span className="rail-orb" /> {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <SectionIntro
            eyebrow="Una nueva categoría"
            title="No administra cursos. Orquesta aprendizaje."
            text="HeyCourse une la experiencia personal de una LXP con el control operativo de un LMS y suma una capa de inteligencia que crea, guía, mide y aprende de cada interacción."
          />
          <div className="bento-grid">
            <article className="bento-card bento-wide purple-card">
              <div>
                <span className="card-index">01 / CREA</span>
                <h3>Del conocimiento disperso a una experiencia lista.</h3>
                <p>
                  Parte de una intención, un documento o una base de
                  conocimiento. La IA propone estructura, contenido, práctica y
                  evaluación.
                </p>
                <Link className="text-link light-link" href="/crear">
                  Explorar creación <Arrow />
                </Link>
              </div>
              <div className="mini-builder" aria-hidden="true">
                <div className="builder-prompt">
                  Diseña una ruta de onboarding comercial
                </div>
                <div className="builder-line long" />
                <div className="builder-line" />
                <div className="builder-blocks">
                  <span>Lección</span>
                  <span>Quiz</span>
                  <span>Simulación</span>
                </div>
              </div>
            </article>

            <article className="bento-card">
              <span className="card-index">02 / GUÍA</span>
              <h3>Un tutor que conoce el recorrido.</h3>
              <p>
                Entiende el contenido, el progreso y los puntos de fricción de
                cada persona para orientar sin entregar respuestas vacías.
              </p>
              <TutorVisual compact />
              <Link className="text-link" href="/tutores">
                Conocer los tutores <Arrow />
              </Link>
            </article>

            <article className="bento-card">
              <span className="card-index">03 / PRACTICA</span>
              <h3>Decidir, practicar, recibir feedback.</h3>
              <p>
                Simulaciones con escenarios, roles y rúbricas convierten el
                contenido en desempeño observable.
              </p>
              <div className="decision-card" aria-hidden="true">
                <span>Escenario 03</span>
                <strong>El cliente objeta el precio.</strong>
                <div className="choice active-choice">Explorar el costo de no actuar</div>
                <div className="choice">Ofrecer un descuento inmediato</div>
              </div>
            </article>

            <article className="bento-card bento-wide dark-card">
              <div>
                <span className="card-index">04 / ANTICIPA</span>
                <h3>Señales que permiten intervenir antes.</h3>
                <p>
                  La trazabilidad transforma actividad, dominio y ritmo en
                  señales útiles para sostener el engagement y detectar riesgo
                  de abandono.
                </p>
                <Link className="text-link light-link" href="/analitica">
                  Ver inteligencia de aprendizaje <Arrow />
                </Link>
              </div>
              <AnalyticsVisual dark />
            </article>
          </div>
        </div>
      </section>

      <section className="section manifesto-section">
        <div className="container manifesto-grid">
          <div>
            <Eyebrow>El bot quedó atrás</Eyebrow>
            <h2>
              Un bot responde.
              <br />
              <span className="gradient-text">HeyCourse enseña.</span>
            </h2>
          </div>
          <div className="manifesto-copy">
            <p>
              Los bots esperan una pregunta y devuelven una respuesta.
              HeyCourse entiende qué está aprendiendo una persona, dónde se
              detuvo, qué ya domina y cuál es el próximo paso útil.
            </p>
            <div className="comparison-lines">
              <span>
                <i className="minus">−</i> Respuestas aisladas y genéricas
              </span>
              <span>
                <i className="plus">+</i> Orientación conectada al recorrido
              </span>
              <span>
                <i className="plus">+</i> Memoria de progreso y contexto
              </span>
              <span>
                <i className="plus">+</i> Intervenciones cuando importan
              </span>
            </div>
            <ButtonLink href="/tutores" variant="secondary">
              Ver la diferencia <Arrow />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section lilac-section">
        <div className="container">
          <SectionIntro
            eyebrow="Lo mejor de dos mundos"
            title="La experiencia de una LXP. El control de un LMS."
            text="Descubrimiento y personalización para quien aprende. Estructura, trazabilidad y gobierno para quien gestiona. Sin elegir entre engagement y control."
          />
          <div className="worlds-grid">
            <article className="world-card">
              <span className="world-label">LXP</span>
              <h3>Experiencias que se sienten personales.</h3>
              <ul className="check-list">
                <li><Check /> Recomendaciones y rutas</li>
                <li><Check /> Exploración y autonomía</li>
                <li><Check /> Ritmos y necesidades individuales</li>
              </ul>
            </article>
            <div className="plus-core" aria-label="Combinado con">
              <span>+</span>
              <small>IA contextual</small>
            </div>
            <article className="world-card">
              <span className="world-label">LMS</span>
              <h3>Operación que entrega visibilidad.</h3>
              <ul className="check-list">
                <li><Check /> Roles, cohortes y asignaciones</li>
                <li><Check /> Progreso y certificación</li>
                <li><Check /> Analítica y gestión multiempresa</li>
              </ul>
            </article>
          </div>
          <div className="centered-action">
            <ButtonLink href="/lxp-lms">Explorar LXP + LMS <Arrow /></ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Un sistema vivo"
            title="Cada interacción mejora la siguiente."
            text="El contenido no termina cuando se publica. El sistema observa, guía y devuelve información para mejorar la experiencia y la operación."
          />
          <FlowVisual />
        </div>
      </section>

      <section className="section usecase-section">
        <div className="container usecase-header">
          <div>
            <Eyebrow>Diseñado para el trabajo real</Eyebrow>
            <h2>Aprendizaje conectado al desempeño.</h2>
          </div>
          <ButtonLink href="/casos-de-uso" variant="secondary">
            Ver casos de uso <Arrow />
          </ButtonLink>
        </div>
        <div className="container usecase-row">
          {[
            ["Onboarding", "Acelera el tiempo hasta la autonomía."],
            ["Ventas", "Practica conversaciones antes de tenerlas."],
            ["Compliance", "Convierte normas en decisiones aplicadas."],
            ["Clientes", "Escala adopción sin perder contexto."],
          ].map(([title, text], index) => (
            <Link href="/casos-de-uso" className="usecase-tile" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <Arrow />
            </Link>
          ))}
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div className="cta-orbit orbit-one" />
          <div className="cta-orbit orbit-two" />
          <Eyebrow>La inteligencia empieza aquí</Eyebrow>
          <h2>Haz que el aprendizaje se mueva con tu organización.</h2>
          <p>
            Crea experiencias, acompaña a cada persona y convierte el progreso
            en decisiones.
          </p>
          <div className="button-row centered-buttons">
            <ButtonLink href="/demo" variant="white">Explorar HeyCourse</ButtonLink>
            <ButtonLink href="/producto" variant="ghost-light">
              Conocer la plataforma <Arrow />
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
