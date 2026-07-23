import type { Metadata } from "next";
import {
  Arrow,
  ButtonLink,
  Check,
  PageHero,
  SectionIntro,
} from "../components";

export const metadata: Metadata = {
  title: "Marca blanca",
  description:
    "Tu marca, tu dominio y tu experiencia de aprendizaje, impulsados por HeyCourse.",
};

export default function MarcaBlancaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Marca blanca"
        title={<>La inteligencia es HeyCourse. La experiencia visible es <span className="gradient-text">completamente tuya.</span></>}
        text="Lleva tu identidad desde el acceso hasta el certificado. Configura marca, colores, dominio y comunicaciones para que cada organización viva una plataforma coherente con su ecosistema."
        action={<ButtonLink href="#identidad">Explorar marca blanca</ButtonLink>}
      >
        <div className="brand-studio">
          <div className="brand-studio-top">
            <span className="custom-logo">norte<span>+</span></span>
            <span className="custom-domain">aprender.norte.com</span>
          </div>
          <div className="brand-studio-body">
            <div className="brand-sidebar">
              <i className="active" />
              <i />
              <i />
              <i />
            </div>
            <div className="brand-canvas">
              <span className="micro-label">Tu academia</span>
              <h3>Aprender para avanzar.</h3>
              <div className="brand-course-row">
                <div><span>Ruta</span><strong>Liderazgo en acción</strong></div>
                <small>62%</small>
              </div>
              <div className="brand-course-row">
                <div><span>Práctica</span><strong>Feedback efectivo</strong></div>
                <small>Ahora</small>
              </div>
            </div>
          </div>
          <div className="palette-control">
            <span>Identidad</span>
            <i style={{ background: "#193B5A" }} />
            <i style={{ background: "#E97A52" }} />
            <i style={{ background: "#F1C85B" }} />
          </div>
        </div>
      </PageHero>

      <section className="brand-principle">
        <div className="container">
          <strong>HeyCourse inside.</strong>
          <span>Tu organización everywhere.</span>
        </div>
      </section>

      <section className="section" id="identidad">
        <div className="container">
          <SectionIntro
            eyebrow="Una experiencia de punta a punta"
            title="La marca no termina en el logo."
            text="Cada punto de contacto puede reflejar la identidad de la organización, desde el acceso hasta la comunicación y el reconocimiento."
          />
          <div className="brand-feature-grid">
            {[
              ["01", "Identidad visual", "Logo, favicon y una paleta configurable que se aplica a toda la interfaz.", "Marca"],
              ["02", "Dominio propio", "Publica la academia en una dirección de la organización, con una experiencia coherente.", "URL"],
              ["03", "Emails con marca", "Usa remitente, identidad y plantillas propias para las comunicaciones del recorrido.", "SMTP"],
              ["04", "Certificados propios", "Entrega reconocimientos con logo, firmas e identidad de la organización.", "Logro"],
              ["05", "Subdominios por organización", "Opera experiencias diferenciadas sin fragmentar la gestión central.", "Escala"],
              ["06", "Catálogo compartido", "Distribuye una base común de cursos entre organizaciones cuando la operación lo requiere.", "Red"],
            ].map(([number, title, text, tag]) => (
              <article className="brand-feature-card" key={number}>
                <div><span>{number}</span><small>{tag}</small></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section lilac-section">
        <div className="container split-section">
          <div className="split-copy">
            <span className="eyebrow">Multiempresa</span>
            <h2>Una sola operación. Muchas experiencias de marca.</h2>
            <p>
              Gestiona organizaciones, catálogos y recorridos desde una
              arquitectura central, con visibilidad y personalidad propias para
              cada audiencia.
            </p>
            <ul className="check-list">
              <li><Check /> Identidad y acceso por organización</li>
              <li><Check /> Roles y administradores diferenciados</li>
              <li><Check /> Catálogo compartido cuando corresponde</li>
              <li><Check /> Analítica por organización y recorrido</li>
            </ul>
          </div>
          <div className="org-stack">
            {[
              ["N", "Norte Academy", "aprender.norte.com", "#193B5A"],
              ["V", "Viva Partners", "academy.viva.co", "#E75C77"],
              ["K", "Kinetic Campus", "learn.kinetic.io", "#4D8E76"],
            ].map(([letter, name, domain, color], index) => (
              <div className="org-card" style={{ transform: `translateY(${index * -6}px)` }} key={name}>
                <span style={{ background: color }}>{letter}</span>
                <div><strong>{name}</strong><small>{domain}</small></div>
                <i>Activo</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Escala por etapas"
            title="El nivel de marca crece con la operación."
            text="Comienza con tu identidad en un subdominio HeyCourse y avanza hacia dominio, comunicaciones y ecosistema completamente propios."
          />
          <div className="white-label-tiers">
            <article>
              <span>PRO</span>
              <h3>Tu marca en HeyCourse</h3>
              <p>Identidad white-label sobre tu subdominio de HeyCourse.</p>
            </article>
            <article>
              <span>BUSINESS</span>
              <h3>Tu ecosistema propio</h3>
              <p>Dominio propio, emails con tu marca y catálogo compartido entre organizaciones.</p>
            </article>
            <article>
              <span>ENTERPRISE</span>
              <h3>Gobierno a medida</h3>
              <p>Límites, créditos, onboarding y operación contractual adaptados.</p>
            </article>
          </div>
          <div className="centered-action">
            <ButtonLink href="/pricing">Comparar planes <Arrow /></ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
