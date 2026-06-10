import { useEffect, useState } from "react";
import TicketForm from "./components/TicketForm";

const editionGallery = [
  {
    image: "/assets/edition-1-a.png",
    title: "Meu Pato Cup",
    description: "Entre para ver as edicoes, patrocinadores, fotos e blocos do campeonato.",
    target: "cup"
  },
  {
    image: "/assets/edition-1-b.png",
    title: "Loja",
    description: "Espaco reservado para a loja oficial do Meu Pato. Por enquanto fica em breve.",
    target: "store"
  },
  {
    image: "/assets/edition-1-c.png",
    title: "Pro Club",
    description: "Nova frente do projeto com area propria dentro do site. Em breve.",
    target: "proclub"
  }
];

const featureItems = [
  { key: "prize", label: "Premiacoes", value: "Preencher depois" },
  { key: "date", label: "Sorteios", value: "Preencher depois" },
  { key: "place", label: "Fotos", value: "Preencher depois" },
  { key: "versus", label: "Tabela", value: "Extra para depois" }
];

const secondEditionItems = [
  { key: "prize", label: "Premiacoes", value: "Em branco" },
  { key: "date", label: "Sorteios", value: "Em branco" },
  { key: "place", label: "Fotos", value: "Em branco" },
  { key: "versus", label: "Tabela", value: "Em branco" }
];

function HeaderLogo() {
  return <img className="brand-logo" src="/assets/logo-crop.png" alt="Meu Pato Cup" />;
}

function HeroLogo() {
  return <img className="hero-logo-image" src="/assets/logo-crop.png" alt="Logo Meu Pato Cup" />;
}

function HomePage({ onNavigate, onScrollToAbout }) {
  return (
    <>
      <section className="hero-panel reveal-section is-visible" id="inicio">
        <div className="hero-watermark">FIFA</div>
        <div className="hero-panel__fx hero-panel__fx--left" aria-hidden="true" />
        <div className="hero-panel__fx hero-panel__fx--right" aria-hidden="true" />
        <div className="hero-panel__spark hero-panel__spark--one" aria-hidden="true" />
        <div className="hero-panel__spark hero-panel__spark--two" aria-hidden="true" />
        <div className="hero-panel__mesh" aria-hidden="true" />
        <div className="hero-panel__grain" aria-hidden="true" />

        <div className="hero-copy">
          <span className="section-tag">Meu Pato</span>
          <h1 className="hero-heading">
            <span>O site</span>
            <strong>oficial</strong>
          </h1>
          <p>
            Mantive a base visual do site original e agora a home vira a entrada
            principal do Meu Pato, com acesso para Cup, Loja, Pro Club e cadastro
            de novidades.
          </p>

          <div className="hero-buttons">
            <button className="primary-button" onClick={() => onNavigate("cup")}>
              Meu Pato Cup
            </button>
            <button className="secondary-button" onClick={onScrollToAbout}>
              Sobre nos
            </button>
          </div>
        </div>

        <div className="hero-logo">
          <HeroLogo />
        </div>
      </section>

      <section className="content-block first-block reveal-section" data-reveal id="home-cards">
        <div className="block-copy">
          <span className="section-tag">Pagina inicial</span>
          <h2>Arraste para o lado</h2>
          <p>
            Aqui ficam as imagens clicaveis da home. Mantive as imagens da base
            antiga e adaptei esse bloco para servir como carrossel horizontal.
          </p>
          <button className="outline-button" onClick={onScrollToAbout}>
            Ver sobre o Meu Pato
          </button>
        </div>

        <div className="gallery-slider">
          {editionGallery.map((item) => (
            <button
              key={item.title}
              className="gallery-slide"
              onClick={() => onNavigate(item.target)}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-slide__overlay">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="content-block about-block reveal-section" data-reveal id="about">
        <div className="block-copy">
          <span className="section-tag">Sobre nos</span>
          <h2>O Meu Pato e mais do que um evento</h2>
          <p>
            O Meu Pato nasceu para juntar competicao, identidade visual, resenha e
            comunidade em um projeto com cara propria. Esse site agora vira a base
            central para acompanhar tudo o que a marca for lancando.
          </p>
          <p>
            Aqui vai dar para acompanhar as edicoes da cup, os patrocinadores, a
            futura loja, o Pro Club e se cadastrar para receber novidades do site.
          </p>
        </div>

        <div className="about-cards">
          <article className="about-card">
            <span className="section-tag">Comunidade</span>
            <p>Espaco para aproximar publico, parceiros e quem acompanha a marca.</p>
          </article>
          <article className="about-card">
            <span className="section-tag">Expansao</span>
            <p>Estrutura pronta para crescer sem perder o visual original do site.</p>
          </article>
        </div>
      </section>

      <TicketForm />
    </>
  );
}

function CupPage() {
  return (
    <>
      <section className="hero-panel reveal-section is-visible cup-hero" id="meu-pato-cup">
        <div className="hero-panel__fx hero-panel__fx--left" aria-hidden="true" />
        <div className="hero-panel__fx hero-panel__fx--right" aria-hidden="true" />
        <div className="hero-panel__mesh" aria-hidden="true" />

        <div className="hero-copy">
          <span className="section-tag">Meu Pato Cup</span>
          <h1 className="hero-heading">
            <span>As duas</span>
            <strong>edicoes</strong>
          </h1>
          <p>
            A navegacao aqui fica na mesma pagina: a pessoa pode descer ou usar os
            links para ver a 1a e a 2a edicao.
          </p>

          <div className="hero-buttons">
            <a className="primary-button" href="#primeira-edicao">
              1a edicao
            </a>
            <a className="secondary-button" href="#segunda-edicao">
              2a edicao
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
            A primeira edicao da Meu Pato Cup foi inesquecivel. Mantive a galeria
            original com imagens e deixei os blocos prontos para voce completar as
            informacoes reais depois.
          </p>
          <a className="outline-button" href="#patrocinadores">
            Ver patrocinadores
          </a>
        </div>

        <div className="gallery-block">
          <figure className="gallery-large">
            <img src="/assets/edition-1-a.png" alt="Celebracao da primeira edicao" />
          </figure>
          <figure className="gallery-small">
            <img src="/assets/edition-1-b.png" alt="Arena da Meu Pato Cup" />
          </figure>
          <figure className="gallery-small">
            <img src="/assets/edition-1-c.png" alt="Publico no evento" />
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
          <span className="section-tag">1a edicao</span>
          <h2>Blocos principais da primeira edicao</h2>
          <p>
            Aqui entram premiacoes, sorteios, fotos e tabela da 1a edicao, mas sem
            mexer na linguagem visual original do site.
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

      <section className="content-block second-block reveal-section" data-reveal>
        <div className="second-block__media second-edition-placeholder" aria-hidden="true" />
        <div className="second-block__overlay" />

        <div className="second-block__copy">
          <span className="section-tag">2a edicao</span>
          <h2>Estrutura pronta, conteudo em branco</h2>
          <p>
            A 2a edicao entra preparada para receber informacoes depois, com areas
            reservadas do jeito que voce pediu.
          </p>

          <div className="feature-row">
            {secondEditionItems.map((item) => (
              <article key={`second-${item.key}`} className="feature-card">
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

      <TicketForm cupMode />
    </>
  );
}

function ComingSoonPage({ kicker, title, description }) {
  return (
    <section className="hero-panel reveal-section is-visible cup-hero">
      <div className="hero-panel__fx hero-panel__fx--left" aria-hidden="true" />
      <div className="hero-panel__fx hero-panel__fx--right" aria-hidden="true" />
      <div className="hero-panel__mesh" aria-hidden="true" />

      <div className="hero-copy">
        <span className="section-tag">{kicker}</span>
        <h1 className="hero-heading">
          <span>Pagina</span>
          <strong>em breve</strong>
        </h1>
        <p>{description}</p>
      </div>

      <div className="hero-logo">
        <HeroLogo />
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

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
  }, [currentPage]);

  function navigate(page) {
    setCurrentPage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToAbout() {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return;
    }

    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="site-page">
      <header className="top-header">
        <div className="top-header__inner">
          <button className="brand-anchor brand-button" onClick={() => navigate("home")} aria-label="Meu Pato Cup">
            <HeaderLogo />
          </button>

          <nav className="main-nav" aria-label="Menu principal">
            <button className={currentPage === "home" ? "nav-button active" : "nav-button"} onClick={() => navigate("home")}>
              Home
            </button>
            <button className={currentPage === "cup" ? "nav-button active" : "nav-button"} onClick={() => navigate("cup")}>
              Meu Pato Cup
            </button>
            <button className={currentPage === "store" ? "nav-button active" : "nav-button"} onClick={() => navigate("store")}>
              Loja
            </button>
            <button className={currentPage === "proclub" ? "nav-button active" : "nav-button"} onClick={() => navigate("proclub")}>
              Meu Pato Cup Pro Club
            </button>
          </nav>

          <div className="top-header__actions">
            <button className="ticket-cta" onClick={() => navigate("cup")}>
              Ver Cup
            </button>
            <button className="hamburger" type="button" aria-label="Abrir menu" onClick={() => setMobileOpen((value) => !value)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="mobile-menu">
            <button className="mobile-menu__link" onClick={() => navigate("home")}>
              Home
            </button>
            <button className="mobile-menu__link" onClick={() => navigate("cup")}>
              Meu Pato Cup
            </button>
            <button className="mobile-menu__link" onClick={() => navigate("store")}>
              Loja
            </button>
            <button className="mobile-menu__link" onClick={() => navigate("proclub")}>
              Meu Pato Cup Pro Club
            </button>
          </div>
        ) : null}
      </header>

      <main className="page-sections">
        {currentPage === "home" ? <HomePage onNavigate={navigate} onScrollToAbout={scrollToAbout} /> : null}
        {currentPage === "cup" ? <CupPage /> : null}
        {currentPage === "store" ? (
          <ComingSoonPage
            kicker="Loja"
            title="Loja"
            description="A loja vai abrir dentro do mesmo estilo do site. Por enquanto deixei apenas a pagina em breve."
          />
        ) : null}
        {currentPage === "proclub" ? (
          <ComingSoonPage
            kicker="Meu Pato Cup Pro Club"
            title="Pro Club"
            description="A area do Pro Club tambem fica reservada sem mexer no layout principal do site."
          />
        ) : null}
      </main>

      <footer className="page-footer reveal-section is-visible" id="contato">
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
            <button className="footer-link-button" onClick={() => navigate("home")}>
              Home
            </button>
            <button className="footer-link-button" onClick={() => navigate("cup")}>
              Meu Pato Cup
            </button>
            <button className="footer-link-button" onClick={() => navigate("store")}>
              Loja
            </button>
            <button className="footer-link-button" onClick={() => navigate("proclub")}>
              Pro Club
            </button>
          </div>

          <div className="page-footer__meta">
            <span>Meu Pato</span>
            <span>Base visual preservada e adaptada</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
