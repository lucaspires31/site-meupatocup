import { useEffect } from "react";
import TicketForm from "./components/TicketForm";

const editionGallery = [
  "/assets/edition-1-a.png",
  "/assets/edition-1-b.png",
  "/assets/edition-1-c.png"
];

const featureItems = [
  { key: "prize", label: "Premiacao", value: "R$ 300" },
  { key: "date", label: "Data", value: "21 de junho" },
  { key: "place", label: "Local", value: "Rua Dr João Gualberto de Oliveira 200" },
  { key: "versus", label: "Competicao", value: "+ emocao" }
];

function HeaderLogo() {
  return <img className="brand-logo" src="/assets/logo-crop.png" alt="Meu Pato Cup" />;
}

function HeroLogo() {
  return <img className="hero-logo-image" src="/assets/logo-crop.png" alt="Logo Meu Pato Cup" />;
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const hero = document.querySelector(".hero-panel");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));

    function handlePointerMove(event) {
      if (!hero) {
        return;
      }

      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      hero.style.setProperty("--hero-mouse-x", `${x}`);
      hero.style.setProperty("--hero-mouse-y", `${y}`);
      hero.style.setProperty("--hero-tilt-x", `${(x - 0.5) * 18}px`);
      hero.style.setProperty("--hero-tilt-y", `${(y - 0.5) * 14}px`);
    }

    function resetPointer() {
      if (!hero) {
        return;
      }

      hero.style.setProperty("--hero-mouse-x", "0.5");
      hero.style.setProperty("--hero-mouse-y", "0.5");
      hero.style.setProperty("--hero-tilt-x", "0px");
      hero.style.setProperty("--hero-tilt-y", "0px");
    }

    hero?.addEventListener("pointermove", handlePointerMove);
    hero?.addEventListener("pointerleave", resetPointer);

    return () => {
      observer.disconnect();
      hero?.removeEventListener("pointermove", handlePointerMove);
      hero?.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <div className="site-page">
      <header className="top-header">
        <div className="top-header__inner">
          <a className="brand-anchor" href="#inicio" aria-label="Meu Pato Cup">
            <HeaderLogo />
          </a>

          <nav className="main-nav" aria-label="Menu principal">
            <a href="#inicio">Inicio</a>
            <a href="#primeira-edicao">1 edicao</a>
            <a href="#segunda-edicao">2 edicao</a>
            <a href="#ingressos">Patrocinadores</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="top-header__actions">
            <a className="ticket-cta" href="#ingressos">
              Ver Patrocinadores
            </a>
            <button className="hamburger" type="button" aria-label="Abrir menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main className="page-sections">
        <section className="hero-panel reveal-section is-visible" id="inicio">
          <div className="hero-watermark">FIFA</div>
          <div className="hero-panel__fx hero-panel__fx--left" aria-hidden="true" />
          <div className="hero-panel__fx hero-panel__fx--right" aria-hidden="true" />
          <div className="hero-panel__spark hero-panel__spark--one" aria-hidden="true" />
          <div className="hero-panel__spark hero-panel__spark--two" aria-hidden="true" />
          <div className="hero-panel__mesh" aria-hidden="true" />
          <div className="hero-panel__grain" aria-hidden="true" />

          <div className="hero-copy">
            <span className="section-tag">Vem ai</span>
            <h1 className="hero-heading">
              <span>Meu Pato</span>
              <strong>Cup 2</strong>
            </h1>
            <p>
              O maior evento de FIFA da regiao esta de volta! Mais estrutura, mais
              disputa e mais emocao.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="#primeira-edicao">
                Saiba mais
              </a>
              <a className="secondary-button" href="#ingressos">
                     Ver Patrocinadores
              </a>
            </div>
          </div>

          <div className="hero-logo">
            <HeroLogo />
          </div>
        </section>

        <section className="content-block first-block reveal-section" data-reveal id="primeira-edicao">
          <div className="block-copy">
            <span className="section-tag">1a edicao</span>
            <h2>Como foi a primeira edicao</h2>
            <p>
              A primeira edicao da Meu Pato Cup foi inesquecivel! Jogos intensos,
              grandes talentos e uma torcida que fez a diferenca.
            </p>
            <a className="outline-button" href="#contato">
              Ver fotos
            </a>
          </div>

          <div className="gallery-block">
            <figure className="gallery-large">
              <img src={editionGallery[0]} alt="Celebracao da primeira edicao" />
            </figure>
            <figure className="gallery-small">
              <img src={editionGallery[1]} alt="Arena da Meu Pato Cup" />
            </figure>
            <figure className="gallery-small">
              <img src={editionGallery[2]} alt="Publico no evento" />
            </figure>
          </div>
        </section>

        <section className="content-block second-block reveal-section" data-reveal id="segunda-edicao">
          <div className="second-block__media" aria-hidden="true">
            <div
              className="second-block__media-item second-block__media-item--a"
              style={{ backgroundImage: "url('/assets/second-2-a.png')" }}
            />
            <div
              className="second-block__media-item second-block__media-item--b"
              style={{ backgroundImage: "url('/assets/second-2-b.png')" }}
            />
            <div
              className="second-block__media-item second-block__media-item--c"
              style={{ backgroundImage: "url('/assets/second-2-c.png')" }}
            />
          </div>
          <div className="second-block__overlay" />

          <div className="second-block__copy">
            <span className="section-tag">2a edicao</span>
            <h2>O que te espera na 2a edicao</h2>
            <p>
              A segunda edicao chega ainda maior! Nova estrutura, mais inscricoes,
              premiacao melhor e muita competitividade. Prepare-se para o proximo
              nivel.
            </p>

            <div className="feature-row">
              {featureItems.map((item) => (
                <article key={item.key} className="feature-card">
                  <span className={`feature-icon feature-icon--${item.key}`} />
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rules-banner reveal-section" data-reveal aria-label="Regras oficiais da segunda edicao">
          <img
            src="/assets/second-edition-rules.jpeg"
            alt="Regras oficiais da segunda edicao do Meu Pato Cup"
          />
        </section>

        <TicketForm />
      </main>

      <footer className="page-footer reveal-section" data-reveal id="contato">
        <div className="page-footer__inner">
          <div className="page-footer__socials" aria-label="Redes sociais">
            <a
              className="page-footer__icon"
              href="https://www.instagram.com/meupatocup/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Meu Pato Cup"
            >
              <img src="/assets/icon-instagram.jfif" alt="" />
            </a>
            <a
              className="page-footer__icon"
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/assets/icon-linkedin.png" alt="" />
            </a>
            <a
              className="page-footer__icon"
              href="https://wa.me/5511943944222"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <img src="/assets/icon-whatsapp.png" alt="" />
            </a>
          </div>

          <div className="page-footer__links">
            <a href="#inicio">Inicio</a>
            <a href="#primeira-edicao">1a edicao</a>
            <a href="#segunda-edicao">2a edicao</a>
            <a href="#ingressos">Patrocinadores</a>
          </div>

          <div className="page-footer__meta">
            <span>Meu Pato Cup 2</span>
            <span>Developer Lucas A Pires</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
