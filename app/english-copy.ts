import generatedCopy from "./english-copy.generated.json";

const brandCopy: Record<string, string> = {
  A: "A",
  Activo: "Active",
  "01 · BOT": "01 · BOT",
  "03 · HEYCOURSE": "03 · HEYCOURSE",
  "04 / ANTICIPA": "04 / ANTICIPATE",
  "Acompañamiento": "Guidance",
  "Acción a tiempo": "Timely action",
  "Acción, no tablero": "Action, not another dashboard",
  "Analítica de aprendizaje": "Learning analytics",
  "Aprender para avanzar.": "Learn to move forward.",
  "Aprendizaje conectado al desempeño.": "Learning connected to performance.",
  "Aprendizaje conectado al trabajo": "Learning connected to work",
  "Bot tradicional": "Traditional bot",
  "Bot vs Agent vs Tutor": "Bot vs Agent vs Tutor",
  "Capacidad demostrada": "Demonstrated capability",
  "Capacidades principales": "Core capabilities",
  "Convierte": "Turn",
  "conocimiento en": "knowledge into",
  capacidades: "demonstrable",
  "demostrables.": "capabilities.",
  "Crea experiencias, guía personas y mide resultados":
    "Creates experiences, guides people and measures outcomes",
  "Crea experiencias, guía personas y mide resultados con inteligencia de aprendizaje.":
    "Create experiences, guide people and measure outcomes with learning intelligence.",
  "Creación desde prompts": "Prompt-based creation",
  "Diseña una experiencia": "Design a learning experience",
  "Empresas, instituciones y proveedores de formación":
    "Companies, institutions and training providers",
  "Generar contenido": "Generate content",
  "IA en contexto": "Context-aware AI",
  "La plataforma de inteligencia de aprendizaje":
    "The learning intelligence platform",
  "LXP + LMS con inteligencia de aprendizaje":
    "LXP + LMS powered by learning intelligence",
  "No es un bot: entiende el contexto, guía y evalúa.":
    "Not a bot: it understands context, guides and assesses.",
  "Para quién": "Who it is for",
  "Qué es": "What it is",
  "Qué hace": "What it does",
  "Qué es, para quién sirve y qué hace HeyCourse":
    "What HeyCourse is, who it is for and what it does",
  "Recorrer una experiencia": "Explore an experience",
  "Riesgo de deserción": "Dropout risk",
  "Trazabilidad personal": "Individual traceability",
  "Tutor · Socrático · Evaluador": "Tutor · Socratic · Assessor",
  "Una sola inteligencia conecta la intención, la práctica, el tutor y las señales personales.":
    "One intelligence connects intent, practice, tutors and individual signals.",
  "Una nueva categoría": "A new category",
  "No administra cursos. Orquesta aprendizaje.":
    "It does not just manage courses. It orchestrates learning.",
  "HeyCourse une la experiencia personal de una LXP con el control operativo de un LMS y suma una capa de inteligencia que crea, guía, mide y aprende de cada interacción.":
    "HeyCourse brings together the personal experience of an LXP and the operational control of an LMS, then adds an intelligence layer that creates, guides, measures and learns from every interaction.",
  "Del conocimiento disperso a una experiencia lista.":
    "From scattered knowledge to a ready-to-use experience.",
  "Un tutor que conoce el recorrido.": "A tutor that knows the learning journey.",
  "Decidir, practicar, recibir feedback.": "Decide, practice and receive feedback.",
  "Señales que permiten intervenir antes.": "Signals that enable earlier intervention.",
  "Tres tecnologías.": "Three technologies.",
  "Tres resultados distintos.": "Three different outcomes.",
  "Un bot resuelve una duda. Un Agent ejecuta una tarea. HeyCourse desarrolla una capacidad y deja evidencia de que fue aprendida.":
    "A bot answers a question. An Agent completes a task. HeyCourse develops a capability and leaves evidence that it was learned.",
  "Planifica y actúa para completar una tarea por la persona.":
    "Plans and acts to complete a task for the person.",
  "Hace pensar, practicar y demostrar una capacidad con trazabilidad.":
    "Prompts people to think, practice and demonstrate a capability—with traceability.",
  "No hay un tutor. Hay un modo para cada objetivo.":
    "There is no single tutor mode. There is a mode for every objective.",
  "La inteligencia puede explicar de forma directa, guiar con preguntas o diagnosticar qué domina una persona. Y puede hacerlo por chat, voz o avatar.":
    "The intelligence can explain directly, guide through questions or diagnose what a person has mastered—through chat, voice or avatar.",
  "Explica y responde directamente cuando avanzar es la prioridad.":
    "Explains and answers directly when moving forward is the priority.",
  "Guía con una pregunta por vez y ofrece pistas antes de revelar la respuesta.":
    "Guides with one question at a time and offers hints before revealing the answer.",
  "Comprueba dominio, clasifica respuestas y recomienda qué conviene repasar.":
    "Checks mastery, classifies answers and recommends what to review.",
  "Disponibles por chat y voz": "Available through chat and voice",
  "Sesiones con avatar y role-play en Business":
    "Avatar sessions and role-play in Business",
  "La experiencia de una LXP. El control de un LMS.":
    "The experience of an LXP. The control of an LMS.",
  "Descubrimiento y personalización para quien aprende. Estructura, trazabilidad y gobierno para quien gestiona. Sin elegir entre engagement y control.":
    "Discovery and personalization for learners. Structure, traceability and governance for teams. No trade-off between engagement and control.",
  "Experiencias que se sienten personales.": "Experiences that feel personal.",
  "Operación que entrega visibilidad.": "Operations that provide visibility.",
  "Cada interacción mejora la siguiente.":
    "Every interaction improves the next one.",
  "El contenido no termina cuando se publica. El sistema observa, guía y devuelve información para mejorar la experiencia y la operación.":
    "Content does not stop working when it is published. The system observes, guides and feeds insight back into the experience and the operation.",
  "Diseñado para el trabajo real": "Designed for real work",
  "Convierte normas en decisiones aplicadas.": "Turns policies into applied decisions.",
  "Practica conversaciones antes de tenerlas.": "Practice conversations before they happen.",
  "Escala adopción sin perder contexto.": "Scale adoption without losing context.",
  "Tu marca por fuera. La inteligencia de HeyCourse por dentro.":
    "Your brand on the outside. HeyCourse intelligence on the inside.",
  "Pagás por capacidad y por la IA que realmente usás.":
    "Pay for capacity and the AI you actually use.",
  "Haz que el aprendizaje se mueva con tu organización.":
    "Make learning move with your organization.",
  "Crea experiencias, acompaña a cada persona y convierte el progreso en decisiones.":
    "Create experiences, guide every person and turn progress into decisions.",
  "No conversa para parecer inteligente.":
    "It does not talk just to sound intelligent.",
  "Enseña para desarrollar capacidades.":
    "It teaches to develop capabilities.",
  "Un Bot responde. Un Agent ejecuta. HeyCourse conoce el contenido, el objetivo, el rol y el progreso para guiar, hacer practicar, evaluar y dejar evidencia.":
    "A Bot responds. An Agent executes. HeyCourse understands the content, objective, role and progress to guide, enable practice, assess and leave evidence.",
  "Una presencia para conversaciones que importan.":
    "A human presence for conversations that matter.",
  "El avatar incorpora una capa visual a sesiones de tutoría, role-play y práctica guiada sin transformarse en una animación desconectada del aprendizaje.":
    "The avatar adds a visual presence to tutoring, role-play and guided practice without becoming an animation disconnected from learning.",
  "Sesión activa · Liderazgo": "Active session · Leadership",
  "Escuchar a Sophia": "Listen to Sophia",
  Silenciar: "Mute",
  "Tutores + simuladores con inteligencia de aprendizaje":
    "Tutors + simulations powered by learning intelligence",
  "Descubre la diferencia entre un Bot, un Agent y los tutores y simuladores de HeyCourse.":
    "Discover the difference between a traditional Bot, an Agent and HeyCourse tutors and simulations.",
  "No conversa para parecer inteligente. Enseña para desarrollar capacidades.":
    "It does not talk just to sound intelligent. It teaches to develop capabilities.",
  "La tecnología puede usar la misma IA y perseguir objetivos completamente distintos. La diferencia está en el contexto que comprende, el comportamiento que adopta y el resultado que produce.":
    "The same AI technology can pursue completely different goals. The difference lies in the context it understands, the behavior it adopts and the outcome it produces.",
  "Guía, hace practicar y comprueba que existe una capacidad.":
    "Guides, enables practice and verifies that a capability has been developed.",
  "Lograr dominio y transferencia": "Build mastery and transfer",
  "Pregunta, adapta, simula y evalúa": "Questions, adapts, simulates and assesses",
  "Práctica, feedback y trazabilidad": "Practice, feedback and traceability",
  "Resolver una duda": "Answer a question",
  "Conseguir un resultado operativo": "Achieve an operational outcome",
  "Trabajo automatizado": "Automated work",
  "Desarrolla capacidades": "Develops capabilities",
  "Tres modos pedagógicos": "Three teaching modes",
  "La inteligencia no siempre debe comportarse igual.":
    "Learning intelligence should not always behave the same way.",
  "El objetivo define el modo: resolver una duda, sostener el razonamiento o comprobar qué domina la persona.":
    "The objective determines the mode: answer a question, sustain reasoning or assess what a person has mastered.",
  "Explica y responde directo": "Explains and answers directly",
  "Guía con preguntas": "Guides through questions",
  "Diagnostica, no enseña": "Assesses, rather than teaches",
  "No regala la respuesta: ayuda a construirla.":
    "It does not give away the answer; it helps learners build it.",
  "Descubre qué está sólido y qué conviene repasar.":
    "Reveals what is solid and what needs review.",
  "Más allá del chat": "Beyond chat",
  "La misma inteligencia también tiene voz y presencia.":
    "The same intelligence can also have a voice and a presence.",
  "La conversación puede ocurrir por texto, en tiempo real por voz o mediante un avatar, sin perder el contexto del curso.":
    "The conversation can happen through text, real-time voice or an avatar—without losing the learning context.",
  "Hablar es parte de aprender.": "Speaking is part of learning.",
  "Feedback por competencia": "Competency-based feedback",
  "Escenarios y simulaciones de rol": "Role-play scenarios and simulations",
  "Simuladores inteligentes": "Intelligent simulations",
  "El bot explica qué harías. El Agent lo hace por ti.":
    "A Bot explains what you could do. An Agent does it for you.",
  "HeyCourse te hace practicar.": "HeyCourse helps you practice.",
  "Cada simulación coloca a la persona frente a una decisión real, interpreta su respuesta y devuelve feedback por criterio. Puede repetir hasta convertir conocimiento en desempeño observable.":
    "Every simulation places the learner in a real decision, interprets the response and provides criterion-based feedback. Learners can repeat until knowledge becomes observable performance.",
  "Te dice qué podrías hacer.": "Tells you what you could do.",
  "Puede hacerlo por ti.": "Can do it for you.",
  "Te entrena hasta que puedas hacerlo.": "Trains you until you can do it.",
  "La experiencia personal de una LXP y el control operativo de un LMS, conectados por inteligencia contextual.":
    "The personal experience of an LXP and the operational control of an LMS, connected by contextual intelligence.",
  "Convierte prompts y documentos en contenido, quizzes y simulaciones.":
    "Turn prompts and documents into content, quizzes and simulations.",
  "Configura tutores contextuales que conocen el contenido, el momento y el progreso de cada persona.":
    "Configure contextual tutors that understand the content, the moment and each person’s progress.",
  "Observa avance, dominio, ritmo y fricción para entender dónde acompañar o mejorar la experiencia.":
    "Observe progress, mastery, pace and friction to understand where to guide or improve the experience.",
  "Inteligencia de aprendizaje": "Learning intelligence",
  "Trazabilidad e intervención": "Traceability and intervention",
  "Marca blanca": "White label",
  "Prueba Gratis": "Free trial",
  "Prueba gratuita · sin tarjeta": "Free trial · no card required",
  "Solicitar prueba gratis": "Start free trial",
  "Ver experiencia": "View experience",
  "Crear cuenta": "Create account",
  "Iniciar sesión": "Sign in",
};

export const ENGLISH_COPY: Record<string, string> = {
  ...(generatedCopy as Record<string, string>),
  ...brandCopy,
};
