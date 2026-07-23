import type { Metadata } from "next";
import {
  Arrow,
  ButtonLink,
  FlowVisual,
  PageHero,
  PromptVisual,
  SectionIntro,
} from "../components";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Del prompt a una experiencia medible: crea, publica, acompaña, observa e interviene.",
};

const steps = [
  ["01", "Describe la intención", "Comienza con un prompt, documentos o una base de conocimiento. Define audiencia, objetivo, tono y profundidad."],
  ["02", "Diseña la experiencia", "La IA propone una estructura que combina explicación, preguntas, quizzes, decisiones y simulaciones."],
  ["03", "Activa el acompañamiento", "Configura tutores contextuales que conocen el contenido, el momento y el progreso de cada persona."],
  ["04", "Publica y orquesta", "Asigna rutas a equipos, cohortes u organizaciones y adapta identidad, acceso y certificación."],
  ["05", "Lee las señales", "Observa avance, dominio, ritmo y fricción para entender dónde acompañar o mejorar la experiencia."],
  ["06", "Interviene y aprende", "Actúa sobre los casos prioritarios y usa los datos para refinar contenido, práctica y acompañamiento."],
];

export default function ComoFuncionaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Cómo funciona"
        title={<>De una intención a un sistema de aprendizaje <span className="gradient-text">vivo.</span></>}
        text="HeyCourse no termina al publicar contenido. Crea un ciclo continuo entre diseño, experiencia, acompañamiento, señal e intervención."
        action={<ButtonLink href="#recorrido">Ver el recorrido <Arrow /></ButtonLink>}
      >
        <PromptVisual compact />
      </PageHero>

      <section className="principle-strip">
        <div className="container">
          <div><strong>Empieza simple</strong><span>Un prompt puede ser el primer bloque de una experiencia completa.</span></div>
          <div><strong>Crece con contexto</strong><span>Cada interacción ayuda a entender mejor el recorrido.</span></div>
          <div><strong>Termina en acción</strong><span>La trazabilidad sirve cuando permite decidir e intervenir.</span></div>
        </div>
      </section>

      <section className="section" id="recorrido">
        <div className="container">
          <SectionIntro
            eyebrow="El recorrido completo"
            title="Seis momentos. Ningún salto de contexto."
            text="Desde la primera idea hasta la intervención, todo ocurre dentro de una arquitectura conectada."
          />
          <div className="step-list">
            {steps.map(([number, title, text]) => (
              <article className="step-row" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="container">
          <blockquote>
            “El contenido deja de ser un destino y se convierte en{" "}
            <span>una conversación continua con el progreso.</span>”
          </blockquote>
        </div>
      </section>

      <section className="section lilac-section">
        <div className="container">
          <SectionIntro
            eyebrow="El ciclo de inteligencia"
            title="Cada paso prepara el siguiente."
            text="La fuerza no está en una función aislada, sino en la continuidad entre ellas."
          />
          <FlowVisual />
          <div className="centered-action">
            <ButtonLink href="/demo">Vivir la experiencia</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
