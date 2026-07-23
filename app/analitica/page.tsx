import type { Metadata } from "next";
import {
  AnalyticsVisual,
  Arrow,
  ButtonLink,
  MetricCard,
  PageHero,
  SectionIntro,
} from "../components";

export const metadata: Metadata = {
  title: "Analítica de aprendizaje",
  description:
    "Trazabilidad personal y señales que ayudan a sostener engagement y anticipar riesgo de deserción.",
};

export default function AnaliticaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Analítica de aprendizaje"
        title={<>Ver el progreso. Entender la fricción. <span className="gradient-text">Intervenir antes.</span></>}
        text="HeyCourse convierte actividad, ritmo, dominio y práctica en trazabilidad personal. Así los equipos pueden priorizar acompañamiento y reducir el tiempo entre una señal y una acción."
        action={<ButtonLink href="/demo">Explorar las señales</ButtonLink>}
      >
        <AnalyticsVisual />
      </PageHero>

      <section className="principle-strip">
        <div className="container">
          <div><strong>Persona, no promedio</strong><span>El detalle individual evita esconder fricción detrás del total.</span></div>
          <div><strong>Señales, no sentencias</strong><span>El riesgo orienta la atención; no reemplaza el criterio humano.</span></div>
          <div><strong>Acción, no tablero</strong><span>La métrica importa cuando acorta el camino hacia una intervención.</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Trazabilidad personal"
            title="Cada recorrido deja señales con contexto."
            text="No alcanza con saber quién terminó. HeyCourse ayuda a entender cómo avanzó, dónde practicó, qué dominó y cuándo cambió su ritmo."
          />
          <div className="metric-grid">
            <MetricCard value="62%" label="Progreso del recorrido" />
            <MetricCard value="4/6" label="Prácticas completadas" />
            <MetricCard value="81%" label="Dominio observado" accent />
            <MetricCard value="2" label="Señales para revisar" />
          </div>
        </div>
      </section>

      <section className="section lilac-section">
        <div className="container split-section">
          <div className="split-copy">
            <span className="eyebrow">Riesgo de deserción</span>
            <h2>Detectar antes de que el silencio se convierta en abandono.</h2>
            <p>
              Cambios de ritmo, pausas prolongadas, baja interacción o
              dificultad sostenida pueden indicar que una persona necesita
              apoyo. HeyCourse organiza esas señales para facilitar una
              intervención oportuna.
            </p>
            <p>
              No es una promesa de predicción infalible. Es una forma más
              responsable de decidir dónde mirar y qué hacer después.
            </p>
          </div>
          <div className="signal-list">
            <div className="signal-card high">
              <i /><div><strong>Ritmo interrumpido</strong><small>Sin actividad durante 8 días</small></div><span>Prioridad alta</span>
            </div>
            <div className="signal-card warning">
              <i /><div><strong>Práctica con fricción</strong><small>3 intentos con el mismo criterio</small></div><span>Revisar</span>
            </div>
            <div className="signal-card">
              <i /><div><strong>Recuperación de engagement</strong><small>Volvió a la ruta después de una intervención</small></div><span>Positiva</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="De la señal a la decisión"
            title="La analítica completa un ciclo, no una presentación."
            text="El objetivo es que equipos de aprendizaje y líderes puedan decidir con mejor contexto."
          />
          <div className="step-list">
            {[
              ["01", "Observar", "Reunir señales de progreso, práctica, dominio e interacción."],
              ["02", "Priorizar", "Distinguir cambios normales de patrones que merecen atención."],
              ["03", "Intervenir", "Acompañar, reorientar, adaptar o conectar con una persona."],
              ["04", "Aprender", "Medir el resultado y mejorar la experiencia para el siguiente recorrido."],
            ].map(([number, title, text]) => (
              <article className="step-row" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="centered-action">
            <ButtonLink href="/producto">Ver la plataforma completa <Arrow /></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
