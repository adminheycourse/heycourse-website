import type { Metadata } from "next";
import {
  Arrow,
  ButtonLink,
  PageHero,
  SectionIntro,
} from "../components";

export const metadata: Metadata = {
  title: "Casos de uso",
  description:
    "Onboarding, ventas, compliance, clientes y partners con experiencias que conectan aprendizaje y desempeño.",
};

const cases = [
  {
    number: "01",
    title: "Onboarding",
    text: "Convierte información dispersa en un recorrido que combina cultura, rol, práctica y acompañamiento. Observa fricción antes de que una persona se desconecte.",
    points: ["Rutas por rol", "Tutor contextual", "Time-to-autonomy"],
  },
  {
    number: "02",
    title: "Enablement comercial",
    text: "Transforma producto, metodología y casos en escenarios de conversación. Los equipos practican objeciones y reciben feedback antes de hablar con un cliente.",
    points: ["Simulaciones", "Rúbricas", "Coaching escalable"],
  },
  {
    number: "03",
    title: "Compliance aplicado",
    text: "Lleva políticas y normas a decisiones concretas. Evalúa comprensión, registra trazabilidad y permite intervenir en los puntos de mayor riesgo.",
    points: ["Decisiones", "Evidencia", "Certificación"],
  },
  {
    number: "04",
    title: "Educación de clientes",
    text: "Escala adopción con rutas por caso de uso, tutores que conocen el producto y señales para detectar dónde la experiencia necesita apoyo.",
    points: ["Adopción", "Self-service guiado", "Analítica"],
  },
  {
    number: "05",
    title: "Liderazgo",
    text: "Convierte marcos de liderazgo en conversaciones y decisiones practicables. El tutor ayuda a reflexionar y sostener compromisos.",
    points: ["Role play", "Reflexión", "Seguimiento"],
  },
  {
    number: "06",
    title: "Partners y franquicias",
    text: "Opera múltiples academias con identidad propia, una base común de conocimiento y visibilidad central sobre el progreso.",
    points: ["Multiempresa", "White-label", "Gobierno"],
  },
];

export default function CasosDeUsoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casos de uso"
        title={<>Cuando aprender mejor cambia lo que pasa <span className="gradient-text">después.</span></>}
        text="HeyCourse conecta conocimiento con desempeño: rutas más relevantes, práctica más cercana al trabajo y señales para acompañar donde importa."
        action={<ButtonLink href="#casos">Explorar casos <Arrow /></ButtonLink>}
      >
        <div className="product-surface">
          <div className="surface-top"><strong>Mapa de impacto</strong><span>Experiencias activas</span></div>
          <div className="surface-body">
            {[
              ["01", "Onboarding", "Tiempo hasta autonomía", "↗"],
              ["02", "Ventas", "Práctica antes de campo", "↗"],
              ["03", "Compliance", "Decisiones aplicadas", "↗"],
              ["04", "Clientes", "Adopción sostenida", "↗"],
            ].map(([number, title, type, status]) => (
              <div className="route-item" key={number}>
                <span>{number}</span><div><strong>{title}</strong><small>{type}</small></div><span>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="section lilac-section" id="casos">
        <div className="container">
          <SectionIntro
            eyebrow="Diseñado para el trabajo real"
            title="Una arquitectura. Distintos momentos de impacto."
            text="La misma inteligencia puede adaptarse al conocimiento, las decisiones y la operación de cada caso."
          />
          <div className="usecase-grid">
            {cases.map((item) => (
              <article className="case-card" key={item.number}>
                <span className="case-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="case-points">
                  {item.points.map((point) => <span key={point}>{point}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Una pregunta mejor"
            title="No “¿qué curso necesitamos?”, sino “¿qué cambio queremos observar?”"
            text="A partir del resultado, HeyCourse ayuda a diseñar el recorrido, la práctica, el acompañamiento y las señales."
          />
          <div className="centered-action">
            <ButtonLink href="/demo">Diseñar una experiencia <Arrow /></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
