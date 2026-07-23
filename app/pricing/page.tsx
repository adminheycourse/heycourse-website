import type { Metadata } from "next";
import {
  Arrow,
  ButtonLink,
  Check,
  PageHero,
  SectionIntro,
} from "../components";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Planes por organización con estudiantes ilimitados y créditos de IA para creación, tutores, voz, avatar y simulaciones.",
};

const plans = [
  {
    name: "Prueba Gratis",
    price: "$0",
    period: "14 días",
    credits: "500 créditos únicos",
    description: "Para vivir el recorrido completo.",
    features: [
      "2 cursos activos",
      "1 administrador",
      "Hasta 10 estudiantes",
      "Generación de cursos con IA",
      "Tutor IA de chat y voz",
      "Subdominio y sello HeyCourse",
    ],
    cta: "Solicitar prueba",
  },
  {
    name: "Starter",
    price: "$99",
    period: "/mes",
    credits: "2.500 créditos de IA/mes",
    description: "Para empezar una academia.",
    features: [
      "10 cursos activos",
      "2 administradores",
      "Estudiantes ilimitados",
      "Cursos e ilustraciones con IA",
      "Tutor IA de chat",
      "Videos curados sugeridos",
    ],
    cta: "Comenzar",
  },
  {
    name: "Pro",
    price: "$299",
    period: "/mes",
    credits: "7.500 créditos de IA/mes",
    description: "Para equipos que escalan experiencias.",
    highlight: true,
    features: [
      "50 cursos activos",
      "10 administradores",
      "Estudiantes ilimitados",
      "Todo lo de Starter",
      "Tutor IA de voz en tiempo real",
      "Tu marca en un subdominio HeyCourse",
    ],
    cta: "Elegir Pro",
  },
  {
    name: "Business",
    price: "$799",
    period: "/mes",
    credits: "20.000 créditos de IA/mes",
    description: "Para operaciones con marca y práctica avanzada.",
    features: [
      "200 cursos · 30 administradores",
      "Estudiantes ilimitados",
      "Simulaciones de rol con IA",
      "Sesiones de tutor con avatar",
      "Dominio y emails propios",
      "Catálogo compartido · soporte prioritario",
    ],
    cta: "Elegir Business",
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "",
    credits: "Créditos a medida o BYOK",
    description: "Para escala, gobierno y condiciones propias.",
    features: [
      "Cursos ilimitados",
      "Administradores y límites a medida",
      "Estudiantes ilimitados",
      "Todo lo de Business",
      "Tus propias API keys de IA",
      "Contrato, DPA y onboarding dedicado",
    ],
    cta: "Hablemos",
  },
];

const creditRows = [
  ["Curso completo generado", "Lecciones, quizzes e imágenes", "~350"],
  ["Ilustración profesional", "Generación visual", "10"],
  ["Mensaje de tutor IA", "Chat contextual", "1"],
  ["Tutor de voz", "Por minuto", "5"],
  ["Tutor con avatar", "Por minuto", "15"],
  ["Video de avatar estándar", "Por minuto", "110"],
  ["Video de avatar premium", "Catálogo de 1.200+ · por minuto", "130"],
  ["Simulación de rol", "Sesión con IA", "25"],
];

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing por organización"
        title={<>Estudiantes ilimitados. Pagás por la plataforma y por la IA que <span className="gradient-text">realmente usás.</span></>}
        text="Cada plan incluye una capacidad operativa y créditos mensuales para generación de cursos, ilustraciones, tutores, voz, avatar y simulaciones."
        action={<ButtonLink href="#planes">Comparar planes</ButtonLink>}
      >
        <div className="pricing-hero-card">
          <span>Modelo HeyCourse</span>
          <h3>Plataforma por organización</h3>
          <div className="pricing-equation">
            <div><strong>∞</strong><small>estudiantes</small></div>
            <i>+</i>
            <div><strong>IA</strong><small>por créditos</small></div>
          </div>
          <p>Leer y completar cursos nunca consume créditos.</p>
        </div>
      </PageHero>

      <section className="pricing-note">
        <div className="container">
          <span>Precios de lanzamiento</span>
          <p>Facturación por organización. En el plan anual recibís todos los créditos del año por adelantado y 2 meses gratis.</p>
        </div>
      </section>

      <section className="section" id="planes">
        <div className="container pricing-container">
          <SectionIntro
            eyebrow="Planes"
            title="Una estructura simple para crecer."
            text="Todos los valores están expresados en USD. Pro es el punto de entrada a marca blanca y voz; Business suma avatar, dominio propio y simulaciones."
          />
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`pricing-card ${plan.highlight ? "pricing-highlight" : ""}`} key={plan.name}>
                {plan.highlight && <span className="popular-pill">Más popular</span>}
                <div className="pricing-card-head">
                  <span className="plan-name">{plan.name}</span>
                  <div className="plan-price">
                    <strong>{plan.price}</strong>
                    <small>{plan.period}</small>
                  </div>
                  <p>{plan.description}</p>
                  <span className="credits-pill">{plan.credits}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}><Check /> {feature}</li>
                  ))}
                </ul>
                <ButtonLink href="/demo" variant={plan.highlight ? "primary" : "secondary"}>
                  {plan.cta}
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section lilac-section">
        <div className="container">
          <SectionIntro
            eyebrow="Créditos de IA"
            title="Usar inteligencia debe ser fácil de entender."
            text="Los créditos se consumen solamente con acciones generativas. El acceso al contenido publicado sigue activo incluso cuando los créditos se agotan."
          />
          <div className="credits-table">
            <div className="credits-row credits-header">
              <span>Acción</span><span>Unidad</span><span>Créditos</span>
            </div>
            {creditRows.map(([action, unit, credits]) => (
              <div className="credits-row" key={action}>
                <strong>{action}</strong><span>{unit}</span><b>{credits}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-copy">
            <span className="eyebrow">Cómo funciona</span>
            <h2>La experiencia nunca queda bloqueada.</h2>
            <p>
              Cuando una organización agota sus créditos, los estudiantes
              siguen accediendo a todos los cursos publicados. Solamente se
              pausa la generación nueva de IA hasta el siguiente ciclo o la
              compra de un pack adicional.
            </p>
            <ul className="check-list">
              <li><Check /> Estudiantes ilimitados desde Starter</li>
              <li><Check /> Lectura y progreso sin consumo</li>
              <li><Check /> Créditos anuales disponibles por adelantado</li>
              <li><Check /> Opción BYOK en Enterprise</li>
            </ul>
          </div>
          <div className="faq-stack">
            <details open>
              <summary>¿Los créditos se acumulan?</summary>
              <p>Los créditos mensuales se renuevan en cada ciclo. En planes anuales recibís todo el año por adelantado para usarlo a tu ritmo.</p>
            </details>
            <details>
              <summary>¿Cobran por estudiante?</summary>
              <p>No. Los estudiantes son ilimitados desde Starter. La prueba permite hasta 10 personas.</p>
            </details>
            <details>
              <summary>¿Cómo se paga?</summary>
              <p>Actualmente la activación se factura directamente a la organización. El pago con tarjeta se incorporará más adelante.</p>
            </details>
            <details>
              <summary>¿Qué plan incluye avatar?</summary>
              <p>Business incluye sesiones de tutor con avatar y simulaciones de rol con IA.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <span className="eyebrow">Elegí el punto de partida</span>
          <h2>Probá la experiencia antes de decidir el plan.</h2>
          <p>La prueba gratuita incluye creación con IA y tutoría de chat y voz.</p>
          <div className="button-row centered-buttons">
            <ButtonLink href="/demo" variant="white">Solicitar prueba gratis</ButtonLink>
            <ButtonLink href="/marca-blanca" variant="ghost-light">Explorar marca blanca <Arrow /></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
