import Image from "next/image";
import type { Metadata } from "next";
import {
  Arrow,
  BrandMark,
  ButtonLink,
  Check,
  PageHero,
  SectionIntro,
  TutorVisual,
} from "../components";

export const metadata: Metadata = {
  title: "Tutores y simuladores inteligentes",
  description:
    "Descubre la diferencia entre un Bot, un Agent y los tutores y simuladores de HeyCourse.",
};

const intelligenceTypes = [
  {
    key: "bot",
    number: "01",
    label: "Bot tradicional",
    verb: "Responde",
    summary: "Optimiza una respuesta inmediata dentro de una conversación.",
    purpose: "Resolver una duda",
    context: "Chat, FAQ o base de conocimiento",
    behavior: "Espera una pregunta y responde",
    output: "Una respuesta",
    result: "Duda resuelta",
  },
  {
    key: "agent",
    number: "02",
    label: "Agent tradicional",
    verb: "Ejecuta",
    summary: "Planifica y usa herramientas para completar una tarea.",
    purpose: "Conseguir un resultado operativo",
    context: "Objetivo, sistemas y herramientas",
    behavior: "Planifica, decide y actúa",
    output: "Una acción realizada",
    result: "Trabajo automatizado",
  },
  {
    key: "heycourse",
    number: "03",
    label: "Tutor HeyCourse",
    verb: "Desarrolla",
    summary: "Guía, hace practicar y comprueba que existe una capacidad.",
    purpose: "Lograr dominio y transferencia",
    context: "Contenido, rol, objetivo, progreso y evidencia",
    behavior: "Pregunta, adapta, simula y evalúa",
    output: "Práctica, feedback y trazabilidad",
    result: "Capacidad demostrada",
  },
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
        eyebrow="Tutores + simuladores con inteligencia de aprendizaje"
        title={<>No conversa para parecer inteligente. <span className="gradient-text">Enseña para desarrollar capacidades.</span></>}
        text="Un Bot responde. Un Agent ejecuta. HeyCourse conoce el contenido, el objetivo, el rol y el progreso para guiar, hacer practicar, evaluar y dejar evidencia."
        action={<ButtonLink href="#comparativa">Ver la diferencia</ButtonLink>}
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
          <span><i>06</i> Simulador · practica</span>
        </div>
      </section>

      <section className="section role-comparison-section" id="comparativa">
        <div className="container">
          <SectionIntro
            eyebrow="La diferencia esencial"
            title="Responder, ejecutar y enseñar no son lo mismo."
            text="La tecnología puede usar la misma IA y perseguir objetivos completamente distintos. La diferencia está en el contexto que comprende, el comportamiento que adopta y el resultado que produce."
          />
          <div className="role-comparison-grid">
            {intelligenceTypes.map((type) => (
              <article
                className={`role-comparison-card role-${type.key}`}
                key={type.key}
              >
                <div className="role-card-heading">
                  <span>{type.number}</span>
                  {type.key === "heycourse" && <small>Inteligencia de aprendizaje</small>}
                </div>
                <p className="role-label">{type.label}</p>
                <h3>{type.verb}.</h3>
                <p className="role-summary">{type.summary}</p>
                <dl>
                  <div><dt>Objetivo</dt><dd>{type.purpose}</dd></div>
                  <div><dt>Contexto</dt><dd>{type.context}</dd></div>
                  <div><dt>Comportamiento</dt><dd>{type.behavior}</dd></div>
                  <div><dt>Entrega</dt><dd>{type.output}</dd></div>
                  <div><dt>Resultado</dt><dd>{type.result}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <div className="comparison-verdict" aria-label="Resumen de la comparación">
            <div><span>BOT</span><strong>Resuelve dudas</strong></div>
            <div><span>AGENT</span><strong>Realiza tareas</strong></div>
            <div><span>HEYCOURSE</span><strong>Desarrolla capacidades</strong></div>
          </div>
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
              <div
                className="avatar-stage"
                aria-label="Alma, avatar de tutoría, en una sesión activa de liderazgo"
              >
                <div className="avatar-halo" />
                <div className="avatar-video-frame">
                  <Image
                    className="avatar-person"
                    src="/heycourse-avatar-alma.jpg"
                    alt="Alma, avatar digital de tutoría"
                    fill
                    sizes="(max-width: 720px) 210px, 230px"
                  />
                  <span className="avatar-camera-light" aria-hidden="true" />
                </div>
                <div className="avatar-caption">
                  <i className="pulse-dot" />
                  <span>
                    <strong>Alma</strong>
                    Sesión activa · Liderazgo
                  </span>
                  <span className="avatar-audio-wave" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
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

      <section className="section simulator-section" id="simuladores">
        <div className="container simulator-grid">
          <div className="simulator-copy">
            <span className="eyebrow">Simuladores inteligentes</span>
            <h2>
              El bot explica qué harías. El Agent lo hace por ti.{" "}
              <span>HeyCourse te hace practicar.</span>
            </h2>
            <p>
              Cada simulación coloca a la persona frente a una decisión real,
              interpreta su respuesta y devuelve feedback por criterio. Puede
              repetir hasta convertir conocimiento en desempeño observable.
            </p>
            <ul className="check-list">
              <li><Check /> Escenarios, decisiones y conversaciones de rol</li>
              <li><Check /> Rúbricas por competencia y feedback inmediato</li>
              <li><Check /> Reintentos que muestran evolución</li>
              <li><Check /> Evidencia personal para el equipo de formación</li>
            </ul>
            <div className="button-row">
              <ButtonLink href="/demo">Recorrer una experiencia <Arrow /></ButtonLink>
            </div>
          </div>
          <div className="simulator-console" aria-label="Ejemplo de una simulación de venta consultiva">
            <div className="simulator-top">
              <div>
                <BrandMark />
                <strong>Simulación · Venta consultiva</strong>
              </div>
              <span className="live-pill">En contexto</span>
            </div>
            <div className="simulator-body">
              <span className="micro-label">Escenario 03 · Objeción de precio</span>
              <div className="simulator-message">
                “Su propuesta es interesante, pero el precio está por encima de
                lo que habíamos previsto. ¿Por qué no debería elegir la opción
                más económica?”
              </div>
              <div className="simulator-options">
                <span>Reducir el precio para cerrar hoy</span>
                <span className="selected">Explorar el costo de no resolver el problema</span>
                <span>Enumerar todas las funcionalidades</span>
              </div>
              <div className="simulator-feedback">
                <div>
                  <span className="ai-spark">✦</span>
                  <p><strong>Feedback por rúbrica</strong>Conectaste valor con impacto antes de negociar precio.</p>
                </div>
                <strong>86%</strong>
              </div>
              <div className="simulator-rubric">
                <span>Escucha <b>92</b></span>
                <span>Diagnóstico <b>88</b></span>
                <span>Valor <b>79</b></span>
              </div>
            </div>
          </div>
          <div className="simulation-difference">
            <div><span>BOT</span><p>Te dice qué podrías hacer.</p></div>
            <div><span>AGENT</span><p>Puede hacerlo por ti.</p></div>
            <div><span>HEYCOURSE</span><p>Te entrena hasta que puedas hacerlo.</p></div>
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
