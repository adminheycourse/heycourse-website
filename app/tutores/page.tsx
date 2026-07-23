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
  title: "Tutores inteligentes",
  description:
    "Tutor, Socrático y Evaluador por chat o voz, más experiencias con avatar y memoria de contexto.",
};

const comparisons = [
  ["Espera una pregunta", "Puede aparecer cuando detecta una fricción relevante"],
  ["Responde desde una conversación aislada", "Usa el contenido, la actividad y el progreso como contexto"],
  ["Optimiza la respuesta inmediata", "Cambia su comportamiento según el objetivo pedagógico"],
  ["Olvida el recorrido", "Mantiene memoria del progreso relevante"],
];

const tutorModes = [
  {
    number: "01",
    label: "Tutor",
    tag: "Explica y responde directo",
    title: "La respuesta útil, cuando la persona la necesita.",
    text: "Ideal para onboarding, consulta y apoyo en contexto. Explica conceptos, recupera información del curso y ayuda a avanzar sin salir de la experiencia.",
    conversation: [
      "¿Cómo se calcula el CAC?",
      "Se divide la inversión total por la cantidad de clientes conseguidos. Si invertiste $2.000 y obtuviste 40 clientes, el CAC es $50.",
    ],
  },
  {
    number: "02",
    label: "Socrático",
    tag: "Guía con preguntas",
    title: "No regala la respuesta: ayuda a construirla.",
    text: "Hace una pregunta guía por turno y aumenta la concreción de las pistas si la persona se traba. Si insiste o declara el bloqueo, activa una salida clara sin sermones.",
    conversation: [
      "No sé cómo calcular el CAC.",
      "Si repartieras esos $2.000 en partes iguales entre cada cliente nuevo, ¿qué operación harías?",
    ],
  },
  {
    number: "03",
    label: "Evaluador",
    tag: "Diagnostica, no enseña",
    title: "Descubre qué está sólido y qué conviene repasar.",
    text: "Hace preguntas de chequeo, clasifica las respuestas y entrega un diagnóstico. Funciona especialmente bien antes de una evaluación o como punto de entrada a una ruta.",
    conversation: [
      "Quiero saber si estoy listo para el examen.",
      "Empecemos: explicá con tus palabras la diferencia entre CAC y LTV. Después avanzamos al siguiente criterio.",
    ],
  },
];

export default function TutoresPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tutores inteligentes"
        title={<>Un propósito distinto para cada <span className="gradient-text">conversación.</span></>}
        text="HeyCourse puede explicar, guiar con preguntas o diagnosticar dominio. La misma inteligencia contextual cambia de modo según lo que la persona necesita aprender."
        action={<ButtonLink href="#modos">Conocer los tres modos</ButtonLink>}
      >
        <TutorVisual />
      </PageHero>

      <section className="tutor-mode-rail" aria-label="Modos de tutor">
        <div className="container">
          <span><i>01</i> Tutor · explica</span>
          <span><i>02</i> Socrático · pregunta</span>
          <span><i>03</i> Evaluador · diagnostica</span>
          <span><i>04</i> Voz · conversa</span>
          <span><i>05</i> Avatar · presencia</span>
        </div>
      </section>

      <section className="section" id="modos">
        <div className="container">
          <SectionIntro
            eyebrow="Tres modos pedagógicos"
            title="La inteligencia no siempre debe comportarse igual."
            text="El objetivo define el modo: resolver una duda, sostener el razonamiento o comprobar qué domina la persona."
          />
          <div className="tutor-modes">
            {tutorModes.map((mode) => (
              <article className="tutor-mode-card" key={mode.label}>
                <div className="mode-card-top">
                  <span className="mode-number">{mode.number}</span>
                  <span className="mode-tag">{mode.tag}</span>
                </div>
                <h3>{mode.label}</h3>
                <h4>{mode.title}</h4>
                <p>{mode.text}</p>
                <div className="mode-conversation">
                  <div className="student-line"><span>Persona</span>{mode.conversation[0]}</div>
                  <div className="tutor-line"><span>{mode.label}</span>{mode.conversation[1]}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="container">
          <blockquote>
            “Un bot tiene un formato. Un tutor inteligente tiene{" "}
            <span>intención pedagógica.</span>”
          </blockquote>
        </div>
      </section>

      <section className="section lilac-section">
        <div className="container">
          <SectionIntro
            eyebrow="Más allá del chat"
            title="La misma inteligencia también tiene voz y presencia."
            text="La conversación puede ocurrir por texto, en tiempo real por voz o mediante un avatar, sin perder el contexto del curso."
          />
          <div className="modality-grid">
            <article className="modality-card voice-card">
              <div className="modality-head">
                <span className="modality-icon">◉</span>
                <div><strong>Tutor de voz</strong><small>Conversación en tiempo real</small></div>
                <span className="live-pill">En vivo</span>
              </div>
              <div className="voice-wave" aria-label="Representación de una conversación por voz">
                {[18, 34, 54, 27, 70, 45, 82, 48, 63, 31, 51, 24].map((height, index) => (
                  <i style={{ height }} key={index} />
                ))}
              </div>
              <h3>Hablar es parte de aprender.</h3>
              <p>
                La persona conversa con una voz que conoce el curso, responde
                en tiempo real y adopta el modo pedagógico configurado.
              </p>
              <ul className="check-list">
                <li><Check /> Tutor, Socrático o Evaluador</li>
                <li><Check /> Personalidad de voz configurable</li>
                <li><Check /> Contexto del recorrido activo</li>
              </ul>
            </article>

            <article className="modality-card avatar-card">
              <div className="avatar-stage">
                <div className="avatar-halo" />
                <span className="avatar-person">A</span>
                <div className="avatar-caption">
                  <i className="pulse-dot" />
                  <span>Sesión activa · Liderazgo</span>
                </div>
              </div>
              <h3>Una presencia para conversaciones que importan.</h3>
              <p>
                El avatar incorpora una capa visual a sesiones de tutoría,
                role-play y práctica guiada sin transformarse en una animación
                desconectada del aprendizaje.
              </p>
              <ul className="check-list">
                <li><Check /> Sesiones de tutor con avatar</li>
                <li><Check /> Escenarios y simulaciones de rol</li>
                <li><Check /> Feedback por competencia</li>
              </ul>
            </article>
          </div>
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
              <div className="tutor-side"><strong>Tutor HeyCourse</strong><p>Intención pedagógica y contexto</p></div>
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
            <span className="eyebrow">Gobierno pedagógico</span>
            <h2>Un comportamiento por organización o por curso.</h2>
            <p>
              Define un modo general para la organización y ajústalo cuando un
              curso necesita otra intención. El cambio aplica tanto al tutor de
              chat como al de voz.
            </p>
            <ul className="check-list">
              <li><Check /> Modo predeterminado de la organización</li>
              <li><Check /> Excepción configurada por curso</li>
              <li><Check /> Personalidad específica para la voz</li>
              <li><Check /> Señales pedagógicas registradas</li>
            </ul>
          </div>
          <div className="product-surface">
            <div className="surface-top">
              <strong>Configuración de tutoría</strong>
              <span>Academia comercial</span>
            </div>
            <div className="surface-body">
              {[
                ["01", "Onboarding de producto", "Tutor · respuesta directa", "Activo"],
                ["02", "Venta consultiva", "Socrático · guía con preguntas", "Activo"],
                ["03", "Certificación comercial", "Evaluador · diagnóstico", "Activo"],
                ["04", "Práctica de objeciones", "Avatar · role-play", "Activo"],
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

      <section className="section final-cta-section">
        <div className="container final-cta">
          <span className="eyebrow">Tutoría inteligente</span>
          <h2>Elegí cómo debe enseñar. La inteligencia conserva el contexto.</h2>
          <p>Texto, voz o avatar. Explicación, preguntas o diagnóstico.</p>
          <div className="button-row centered-buttons">
            <ButtonLink href="/demo" variant="white">Ver una experiencia</ButtonLink>
            <ButtonLink href="/pricing" variant="ghost-light">Comparar planes <Arrow /></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
