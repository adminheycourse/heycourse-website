import Link from "next/link";
import { HeroLearningForm } from "./HeroLearningForm";
import { LocalizedVisionImage } from "./LocalizedVisionImage";
import {
  AnalyticsVisual,
  Arrow,
  ButtonLink,
  Check,
  Eyebrow,
  FlowVisual,
  SectionIntro,
  TutorVisual,
} from "./components";

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>La plataforma de inteligencia de aprendizaje</Eyebrow>
            <h1>
              <span className="hero-title-line">Convierte</span>
              <span className="hero-title-line hero-title-nowrap">
                conocimiento en
              </span>
              <span className="hero-title-line gradient-text">capacidades</span>
              <span className="hero-title-line gradient-text">
                demostrables.
              </span>
            </h1>
            <div className="hero-answers" aria-label="Qué es, para quién sirve y qué hace HeyCourse">
              <div>
                <span>Qué es</span>
                <strong>LXP + LMS con inteligencia de aprendizaje</strong>
              </div>
              <div>
                <span>Para quién</span>
                <strong>Empresas, instituciones y proveedores de formación</strong>
              </div>
              <div>
                <span>Qué hace</span>
                <strong>Crea experiencias, guía personas y mide resultados</strong>
              </div>
            </div>
          </div>
          <div className="hero-learning-stage">
            <div className="learning-stage-orbit learning-stage-orbit-one" />
            <div className="learning-stage-orbit learning-stage-orbit-two" />
            <div className="learning-stage-topline">
              <span>Diseña una experiencia</span>
              <span className="learning-stage-live">
                <i className="pulse-dot" /> IA en contexto
              </span>
            </div>
            <HeroLearningForm />
            <div className="learning-stage-outcomes" aria-hidden="true">
              <span>Contenido</span>
              <span>Simulaciones</span>
              <span>Tutor</span>
              <span>Analítica</span>
            </div>
            <button
              className="learning-stage-submit"
              type="submit"
              form="hero-learning-form"
            >
              Generar contenido <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="hero-support">
            <p className="lead">
              Transforma prompts y conocimiento propio en contenido, rutas,
              quizzes, simulaciones y evaluaciones. Luego acompaña a cada
              persona y convierte su progreso en señales para actuar.
            </p>
            <div className="button-row">
              <ButtonLink href="/demo" variant="secondary">Recorrer una experiencia</ButtonLink>
              <ButtonLink href="/como-funciona" variant="secondary">
                Cómo funciona <Arrow />
              </ButtonLink>
            </div>
            <Link className="hero-note hero-note-link" href="/tutores">
              <span className="pulse-dot" />
              No es un bot: entiende el contexto, guía y evalúa.
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="capability-rail" aria-label="Capacidades principales">
        <div className="rail-track">
          {[
            "Creación desde prompts",
            "Quizzes y simulaciones",
            "Tutor · Socrático · Evaluador",
            "Voz y avatar",
            "Trazabilidad personal",
            "Riesgo de deserción",
            "Marca blanca",
          ].map((item) => (
            <span key={item}>
              <span className="rail-orb" /> {item}
            </span>
          ))}
        </div>
      </section>

      <section className="vision-art-section">
        <div className="container">
          <div className="vision-art-caption">
            <Eyebrow>Learning intelligence</Eyebrow>
            <p>
              Una sola inteligencia conecta la intención, la práctica, el tutor
              y las señales personales.
            </p>
          </div>
          <figure className="vision-art">
            <LocalizedVisionImage />
          </figure>
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
                Bot vs Agent vs Tutor <Arrow />
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
              <Link className="text-link" href="/tutores#simuladores">
                Explorar simuladores <Arrow />
              </Link>
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

      <section className="section home-intelligence-section">
        <div className="container home-intelligence-grid">
          <div className="home-intelligence-copy">
            <Eyebrow>Bot vs Agent vs Tutor</Eyebrow>
            <h2>
              Tres tecnologías.
              <br />
              <span className="gradient-text">Tres resultados distintos.</span>
            </h2>
            <p>
              Un bot resuelve una duda. Un Agent ejecuta una tarea. HeyCourse
              desarrolla una capacidad y deja evidencia de que fue aprendida.
            </p>
            <ButtonLink href="/tutores" variant="secondary">
              Ver la comparación completa <Arrow />
            </ButtonLink>
          </div>
          <div className="home-role-cards">
            <article>
              <span>01 · BOT</span>
              <h3>Responde.</h3>
              <p>Optimiza la respuesta inmediata dentro de una conversación.</p>
            </article>
            <article>
              <span>02 · AGENT</span>
              <h3>Ejecuta.</h3>
              <p>Planifica y actúa para completar una tarea por la persona.</p>
            </article>
            <article className="home-role-featured">
              <span>03 · HEYCOURSE</span>
              <h3>Desarrolla.</h3>
              <p>Hace pensar, practicar y demostrar una capacidad con trazabilidad.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Intención pedagógica"
            title="No hay un tutor. Hay un modo para cada objetivo."
            text="La inteligencia puede explicar de forma directa, guiar con preguntas o diagnosticar qué domina una persona. Y puede hacerlo por chat, voz o avatar."
          />
          <div className="home-tutor-modes">
            <article>
              <span>01</span>
              <small>RESUELVE</small>
              <h3>Tutor</h3>
              <p>Explica y responde directamente cuando avanzar es la prioridad.</p>
            </article>
            <article>
              <span>02</span>
              <small>HACE PENSAR</small>
              <h3>Socrático</h3>
              <p>Guía con una pregunta por vez y ofrece pistas antes de revelar la respuesta.</p>
            </article>
            <article>
              <span>03</span>
              <small>DIAGNOSTICA</small>
              <h3>Evaluador</h3>
              <p>Comprueba dominio, clasifica respuestas y recomienda qué conviene repasar.</p>
            </article>
          </div>
          <div className="mode-footer">
            <span><i className="pulse-dot" /> Disponibles por chat y voz</span>
            <span>Sesiones con avatar y role-play en Business</span>
            <ButtonLink href="/tutores" variant="secondary">Explorar tutores <Arrow /></ButtonLink>
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

      <section className="section brand-pricing-section">
        <div className="container brand-pricing-grid">
          <article className="home-brand-card">
            <span className="card-index">MARCA BLANCA</span>
            <div className="home-brand-sample">
              <span className="sample-logo">norte+</span>
              <small>aprender.norte.com</small>
            </div>
            <h2>Tu marca por fuera. La inteligencia de HeyCourse por dentro.</h2>
            <p>Logo, colores, subdominio o dominio propio, emails y certificados dentro de una operación multiempresa.</p>
            <ButtonLink href="/marca-blanca" variant="white">Explorar marca blanca <Arrow /></ButtonLink>
          </article>
          <article className="home-pricing-card">
            <span className="card-index">PRICING POR ORGANIZACIÓN</span>
            <div className="pricing-signal">
              <strong>∞</strong>
              <span>estudiantes desde Starter</span>
            </div>
            <h2>Pagás por capacidad y por la IA que realmente usás.</h2>
            <p>Planes desde USD 99/mes. Pro suma voz y marca blanca; Business incorpora avatar, simulaciones y dominio propio.</p>
            <ButtonLink href="/pricing">Comparar planes <Arrow /></ButtonLink>
          </article>
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
