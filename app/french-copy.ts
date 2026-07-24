import generatedCopy from "./french-copy.generated.json";

const brandCopy: Record<string, string> = {
  A: "A",
  "01 · BOT": "01 · BOT",
  "02 · AGENT": "02 · AGENT",
  "03 · HEYCOURSE": "03 · HEYCOURSE",
  "La plataforma de inteligencia de aprendizaje":
    "La plateforme d’intelligence d’apprentissage",
  Convierte: "Transformez",
  "conocimiento en": "les connaissances en",
  capacidades: "compétences",
  "demostrables.": "démontrables.",
  "Qué es": "Ce que c’est",
  "Para quién": "À qui s’adresse-t-elle",
  "Qué hace": "Ce qu’elle fait",
  "Qué es, para quién sirve y qué hace HeyCourse":
    "Ce qu’est HeyCourse, à qui elle s’adresse et ce qu’elle fait",
  "LXP + LMS con inteligencia de aprendizaje":
    "LXP + LMS avec intelligence d’apprentissage",
  "Empresas, instituciones y proveedores de formación":
    "Entreprises, institutions et organismes de formation",
  "Crea experiencias, guía personas y mide resultados":
    "Crée des expériences, guide les personnes et mesure les résultats",
  "Diseña una experiencia": "Concevez une expérience",
  "IA en contexto": "IA contextuelle",
  "Generar contenido": "Générer du contenu",
  "¿Qué quieres aprender?": "Que souhaitez-vous apprendre ?",
  "Escribe una idea": "Écrivez une idée",
  "La IA diseña el primer recorrido": "L’IA conçoit le premier parcours",
  "Prueba gratuita · sin tarjeta": "Essai gratuit · sans carte",
  "Transforma prompts y conocimiento propio en contenido, rutas, quizzes, simulaciones y evaluaciones. Luego acompaña a cada persona y convierte su progreso en señales para actuar.":
    "Transformez vos prompts et vos connaissances en contenus, parcours, quiz, simulations et évaluations. Accompagnez ensuite chaque personne et convertissez sa progression en signaux exploitables.",
  "Recorrer una experiencia": "Découvrir une expérience",
  "Cómo funciona": "Comment ça marche",
  "No es un bot: entiende el contexto, guía y evalúa.":
    "Ce n’est pas un bot : il comprend le contexte, guide et évalue.",
  "Capacidades principales": "Fonctionnalités principales",
  "Creación desde prompts": "Création à partir de prompts",
  "Quizzes y simulaciones": "Quiz et simulations",
  "Tutor · Socrático · Evaluador": "Tuteur · Socratique · Évaluateur",
  "Voz y avatar": "Voix et avatar",
  "Trazabilidad personal": "Traçabilité individuelle",
  "Riesgo de deserción": "Risque de décrochage",
  "Marca blanca": "Marque blanche",
  "Una sola inteligencia conecta la intención, la práctica, el tutor y las señales personales.":
    "Une seule intelligence relie l’intention, la pratique, le tuteur et les signaux individuels.",
  "Una nueva categoría": "Une nouvelle catégorie",
  "No administra cursos. Orquesta aprendizaje.":
    "Elle ne se contente pas de gérer des cours. Elle orchestre l’apprentissage.",
  "HeyCourse une la experiencia personal de una LXP con el control operativo de un LMS y suma una capa de inteligencia que crea, guía, mide y aprende de cada interacción.":
    "HeyCourse réunit l’expérience personnalisée d’une LXP et le contrôle opérationnel d’un LMS, puis ajoute une couche d’intelligence qui crée, guide, mesure et apprend de chaque interaction.",
  "Del conocimiento disperso a una experiencia lista.":
    "Des connaissances dispersées à une expérience prête à l’emploi.",
  "Un tutor que conoce el recorrido.": "Un tuteur qui connaît le parcours.",
  "Decidir, practicar, recibir feedback.":
    "Décider, pratiquer et recevoir du feedback.",
  "Señales que permiten intervenir antes.":
    "Des signaux qui permettent d’intervenir plus tôt.",
  "Tres tecnologías.": "Trois technologies.",
  "Tres resultados distintos.": "Trois résultats différents.",
  "Un bot resuelve una duda. Un Agent ejecuta una tarea. HeyCourse desarrolla una capacidad y deja evidencia de que fue aprendida.":
    "Un Bot répond à une question. Un Agent exécute une tâche. HeyCourse développe une compétence et laisse la preuve de son acquisition.",
  "Planifica y actúa para completar una tarea por la persona.":
    "Planifie et agit pour accomplir une tâche à la place de la personne.",
  "Hace pensar, practicar y demostrar una capacidad con trazabilidad.":
    "Fait réfléchir, pratiquer et démontrer une compétence avec traçabilité.",
  "No hay un tutor. Hay un modo para cada objetivo.":
    "Il n’existe pas un seul mode de tutorat. Il existe un mode pour chaque objectif.",
  "La inteligencia puede explicar de forma directa, guiar con preguntas o diagnosticar qué domina una persona. Y puede hacerlo por chat, voz o avatar.":
    "L’intelligence peut expliquer directement, guider par des questions ou diagnostiquer ce qu’une personne maîtrise — par chat, voix ou avatar.",
  "Explica y responde directamente cuando avanzar es la prioridad.":
    "Explique et répond directement lorsque progresser est la priorité.",
  "Guía con una pregunta por vez y ofrece pistas antes de revelar la respuesta.":
    "Guide avec une question à la fois et propose des indices avant de révéler la réponse.",
  "Comprueba dominio, clasifica respuestas y recomienda qué conviene repasar.":
    "Vérifie la maîtrise, classe les réponses et recommande les notions à revoir.",
  "Disponibles por chat y voz": "Disponibles par chat et par voix",
  "Sesiones con avatar y role-play en Business":
    "Sessions avec avatar et jeux de rôle dans Business",
  "La experiencia de una LXP. El control de un LMS.":
    "L’expérience d’une LXP. Le contrôle d’un LMS.",
  "Descubrimiento y personalización para quien aprende. Estructura, trazabilidad y gobierno para quien gestiona. Sin elegir entre engagement y control.":
    "Découverte et personnalisation pour les apprenants. Structure, traçabilité et gouvernance pour les équipes. Sans compromis entre engagement et contrôle.",
  "Experiencias que se sienten personales.":
    "Des expériences véritablement personnalisées.",
  "Operación que entrega visibilidad.": "Des opérations qui offrent de la visibilité.",
  "Cada interacción mejora la siguiente.":
    "Chaque interaction améliore la suivante.",
  "Diseñado para el trabajo real": "Conçu pour le travail réel",
  "Aprendizaje conectado al desempeño.":
    "Un apprentissage connecté à la performance.",
  "Tu marca por fuera. La inteligencia de HeyCourse por dentro.":
    "Votre marque à l’extérieur. L’intelligence HeyCourse à l’intérieur.",
  "Pagas por capacidad y por la IA que realmente usas.":
    "Vous payez pour la capacité et l’IA réellement utilisée.",
  "Haz que el aprendizaje se mueva con tu organización.":
    "Faites progresser l’apprentissage avec votre organisation.",
  "No conversa para parecer inteligente.":
    "Il ne converse pas pour paraître intelligent.",
  "Enseña para desarrollar capacidades.":
    "Il enseigne pour développer des compétences.",
  "No conversa para parecer inteligente. Enseña para desarrollar capacidades.":
    "Il ne converse pas pour paraître intelligent. Il enseigne pour développer des compétences.",
  "Tutores + simuladores con inteligencia de aprendizaje":
    "Tuteurs + simulations avec intelligence d’apprentissage",
  "Descubre la diferencia entre un Bot, un Agent y los tutores y simuladores de HeyCourse.":
    "Découvrez la différence entre un Bot traditionnel, un Agent et les tuteurs et simulations HeyCourse.",
  "Un Bot responde. Un Agent ejecuta. HeyCourse conoce el contenido, el objetivo, el rol y el progreso para guiar, hacer practicar, evaluar y dejar evidencia.":
    "Un Bot répond. Un Agent exécute. HeyCourse connaît le contenu, l’objectif, le rôle et la progression afin de guider, faire pratiquer, évaluer et laisser des preuves.",
  "La diferencia esencial": "La différence essentielle",
  "Responder, ejecutar y enseñar no son lo mismo.":
    "Répondre, exécuter et enseigner ne sont pas la même chose.",
  "Bot tradicional": "Bot traditionnel",
  "Agent tradicional": "Agent traditionnel",
  "Tutor HeyCourse": "Tuteur HeyCourse",
  "Guía, hace practicar y comprueba que existe una capacidad.":
    "Guide, fait pratiquer et vérifie qu’une compétence a été développée.",
  "Lograr dominio y transferencia": "Développer la maîtrise et le transfert",
  "Pregunta, adapta, simula y evalúa": "Questionne, adapte, simule et évalue",
  "Práctica, feedback y trazabilidad": "Pratique, feedback et traçabilité",
  "Capacidad demostrada": "Compétence démontrée",
  "Desarrolla capacidades": "Développe des compétences",
  "Tres modos pedagógicos": "Trois modes pédagogiques",
  "La inteligencia no siempre debe comportarse igual.":
    "L’intelligence d’apprentissage ne doit pas toujours se comporter de la même façon.",
  "Explica y responde directo": "Explique et répond directement",
  "Guía con preguntas": "Guide par des questions",
  "Diagnostica, no enseña": "Évalue plutôt qu’il n’enseigne",
  Evaluador: "Évaluateur",
  "No regala la respuesta: ayuda a construirla.":
    "Il ne donne pas la réponse : il aide à la construire.",
  "Más allá del chat": "Au-delà du chat",
  "La misma inteligencia también tiene voz y presencia.":
    "La même intelligence peut aussi avoir une voix et une présence.",
  "Hablar es parte de aprender.": "Parler fait partie de l’apprentissage.",
  "Una presencia para conversaciones que importan.":
    "Une présence pour les conversations qui comptent.",
  "Feedback por competencia": "Feedback par compétence",
  "Escenarios y simulaciones de rol": "Scénarios et simulations de rôle",
  "Simuladores inteligentes": "Simulations intelligentes",
  "El bot explica qué harías. El Agent lo hace por ti.":
    "Un Bot explique ce que vous pourriez faire. Un Agent le fait pour vous.",
  "HeyCourse te hace practicar.": "HeyCourse vous fait pratiquer.",
  "Te dice qué podrías hacer.": "Vous indique ce que vous pourriez faire.",
  "Puede hacerlo por ti.": "Peut le faire pour vous.",
  "Te entrena hasta que puedas hacerlo.": "Vous entraîne jusqu’à ce que vous sachiez le faire.",
  "Inteligencia de aprendizaje": "Intelligence d’apprentissage",
  "Trazabilidad e intervención": "Traçabilité et intervention",
  "Prueba Gratis": "Essai gratuit",
  "Solicitar prueba gratis": "Commencer l’essai gratuit",
  "Ver experiencia": "Voir l’expérience",
  "Crear cuenta": "Créer un compte",
  "Iniciar sesión": "Se connecter",
  "Elegir Business": "Choisir Business",
  "Elegir Pro": "Choisir Pro",
  "Comparar planes": "Comparer les offres",
  "Vista de aprendiz": "Vue de l’apprenant",
  "El recorrido completo": "Le parcours complet",
  "El ciclo de inteligencia": "Le cycle d’intelligence",
  "La guía aparece dentro del aprendizaje.":
    "L’accompagnement apparaît au cœur de l’apprentissage.",
  "Escala por etapas": "Évoluez par étapes",
  "Gobierno a medida": "Gouvernance sur mesure",
  "La IA no rellena una plantilla. Ayuda a transformar una intención y tus fuentes en un recorrido con contenido, preguntas, práctica y evaluación.":
    "L’IA ne remplit pas un modèle. Elle aide à transformer une intention et vos sources en un parcours avec du contenu, des questions, de la pratique et de l’évaluation.",
  "Empieza con una idea. Termina con aprendizaje observable.":
    "Commencez par une idée. Terminez par un apprentissage observable.",
  "Elige cómo debe enseñar. La inteligencia conserva el contexto.":
    "Choisissez comment le tuteur doit enseigner. L’intelligence conserve le contexte.",
  "No “¿qué curso necesitamos?”, sino “¿qué cambio queremos observar?”":
    "Pas « de quel cours avons-nous besoin ? », mais « quel changement voulons-nous observer ? »",
  "Cada recorrido deja señales con contexto.":
    "Chaque parcours laisse des signaux contextualisés.",
  "No alcanza con saber quién terminó. HeyCourse ayuda a entender cómo avanzó, dónde practicó, qué dominó y cuándo cambió su ritmo.":
    "Il ne suffit pas de savoir qui a terminé. HeyCourse aide à comprendre comment chaque personne a progressé, où elle s’est exercée, ce qu’elle maîtrise et quand son rythme a changé.",
  "La analítica completa un ciclo, no una presentación.":
    "L’analyse complète un cycle, pas une présentation.",
  "La personalización usa datos de progreso. La gestión entiende la experiencia real. El contenido se mejora con señales.":
    "La personnalisation utilise les données de progression. La gestion comprend l’expérience réelle. Le contenu s’améliore grâce aux signaux.",
  "Prueba la experiencia antes de decidir el plan.":
    "Essayez l’expérience avant de choisir votre offre.",
};

export const FRENCH_COPY: Record<string, string> = {
  ...(generatedCopy as Record<string, string>),
  ...brandCopy,
};
