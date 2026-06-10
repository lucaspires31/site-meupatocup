import { useState } from "react";
import TicketForm from "./components/TicketForm";

const pages = [
  { id: "home", label: "Home" },
  { id: "cup", label: "Meu Pato Cup" },
  { id: "store", label: "Loja" },
  { id: "proclub", label: "Meu Pato Cup Pro Club" }
];

const homeCards = [
  {
    id: "cup",
    page: "cup",
    kicker: "Competicao",
    title: "Meu Pato Cup",
    description: "Entre nas edicoes, fotos, premiacoes e espacos para parceiros.",
    tone: "gold"
  },
  {
    id: "store",
    page: "store",
    kicker: "Colecao",
    title: "Loja em breve",
    description: "Pagina reservada para produtos, estilo e futuras novidades da marca.",
    tone: "carbon"
  },
  {
    id: "proclub",
    page: "proclub",
    kicker: "Modo clube",
    title: "Pro Club em breve",
    description: "Nova frente do Meu Pato com espaco proprio dentro do site.",
    tone: "field"
  },
  {
    id: "about",
    page: "home",
    kicker: "Comunidade",
    title: "Sobre o Meu Pato",
    description: "Conheca a ideia por tras do projeto e acompanhe essa evolucao.",
    tone: "flare",
    target: "about"
  }
];

const firstEditionBlocks = [
  { label: "Premiacoes", value: "Preencher com os premios da 1a edicao" },
  { label: "Sorteios", value: "Espaco pronto para divulgar os sorteios" },
  { label: "Fotos", value: "Galeria principal da edicao" },
  { label: "Tabela", value: "Fica como extra para a proxima etapa" }
];

const secondEditionBlocks = [
  { label: "Premiacoes", value: "Em branco por enquanto" },
  { label: "Sorteios", value: "Em branco por enquanto" },
  { label: "Fotos", value: "Em branco por enquanto" },
  { label: "Tabela", value: "Fica para depois" }
];

const firstEditionSponsors = [
  { name: "Patrocinador 01", handle: "@patrocinador01" },
  { name: "Patrocinador 02", handle: "@patrocinador02" },
  { name: "Patrocinador 03", handle: "@patrocinador03" },
  { name: "Patrocinador 04", handle: "@patrocinador04" }
];

const secondEditionSponsors = [
  { name: "Espaco reservado", handle: "Link depois" },
  { name: "Espaco reservado", handle: "Link depois" },
  { name: "Espaco reservado", handle: "Link depois" }
];

function LogoMark() {
  return (
    <div className="brand-mark">
      <span className="brand-pill">MPC</span>
      <span className="brand-name">Meu Pato</span>
    </div>
  );
}

function HeroButton({ children, onClick, outline = false }) {
  return (
    <button className={outline ? "primary-button outline" : "primary-button"} onClick={onClick}>
      {children}
    </button>
  );
}

function Header({ currentPage, onNavigate, mobileOpen, onToggleMobile }) {
  return (
    <header className="site-header">
      <div className="topbar">
        <button className="brand-button" onClick={() => onNavigate("home")}>
          <LogoMark />
        </button>

        <nav className="nav-links">
          {pages.map((page) => (
            <button
              key={page.id}
              className={currentPage === page.id ? "nav-link active" : "nav-link"}
              onClick={() => onNavigate(page.id)}
            >
              {page.label}
            </button>
          ))}
        </nav>

        <div className="top-actions">
          <HeroButton onClick={() => onNavigate("cup")}>Ver Cup</HeroButton>
          <button
            className={mobileOpen ? "menu-button is-open" : "menu-button"}
            onClick={onToggleMobile}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mobile-nav">
          {pages.map((page) => (
            <button
              key={page.id}
              className={currentPage === page.id ? "mobile-link active" : "mobile-link"}
              onClick={() => onNavigate(page.id)}
            >
              {page.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function HomePage({ onNavigate, onScrollToAbout }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy-block">
            <span className="section-kicker">Site oficial</span>
            <h1>Meu Pato, Cup, loja e Pro Club no mesmo lugar.</h1>
            <p className="hero-copy">
              Mantive a energia do layout atual e transformei o projeto em uma base
              principal da marca, com paginas internas, carrossel arrastavel e um
              cadastro para quem quiser acompanhar as novidades.
            </p>
            <div className="hero-cta-row">
              <HeroButton onClick={() => onNavigate("cup")}>Entrar no Meu Pato Cup</HeroButton>
              <HeroButton outline onClick={onScrollToAbout}>
                Sobre o Meu Pato
              </HeroButton>
            </div>
          </div>

          <div className="hero-card hero-shield-card">
            <span className="hero-badge">Base principal</span>
            <h2>Visual forte, navegacao simples e foco no responsivo</h2>
            <p>
              O site agora funciona como porta de entrada para tudo do Meu Pato,
              sem perder o estilo escuro com destaque dourado.
            </p>
            <div className="hero-meta">
              <span>Home</span>
              <span>Meu Pato Cup</span>
              <span>Loja</span>
              <span>Pro Club</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading wide">
          <div>
            <span className="section-kicker">Pagina inicial</span>
            <h2>Cards arrastaveis para entrar em cada area</h2>
          </div>
          <p>
            Os blocos abaixo ja funcionam como vitrine principal do site. Depois a
            gente so troca os links e as imagens reais quando voce mandar.
          </p>
        </div>

        <div className="card-rail" role="list">
          {homeCards.map((card) => (
            <button
              key={card.id}
              className={`home-card ${card.tone}`}
              role="listitem"
              onClick={() => {
                if (card.target === "about") {
                  onScrollToAbout();
                  return;
                }

                onNavigate(card.page);
              }}
            >
              <span className="card-kicker">{card.kicker}</span>
              <strong>{card.title}</strong>
              <p>{card.description}</p>
              <span className="card-link">Abrir pagina</span>
            </button>
          ))}
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="edition-grid about-grid">
          <article className="story-card about-main">
            <span className="section-kicker">Sobre o Meu Pato</span>
            <h2>Uma marca feita para juntar estilo, resenha e competicao</h2>
            <p>
              O Meu Pato nasceu como uma identidade propria dentro da comunidade,
              criando um espaco com personalidade para eventos, conexoes, fotos,
              futuras colecoes e novas frentes do projeto.
            </p>
            <p>
              Esse site vira a base central para acompanhar tudo: as edicoes da
              cup, a futura loja, o Pro Club e as novidades que ainda vao entrar.
            </p>
          </article>

          <div className="about-stack">
            <article className="detail-card">
              <h3>Comunidade</h3>
              <p>Um lugar para reunir publico, parceiros e quem acompanha a marca.</p>
            </article>
            <article className="detail-card">
              <h3>Expansao</h3>
              <p>Estrutura pronta para receber mais secoes sem perder o layout.</p>
            </article>
          </div>
        </div>
      </section>

      <TicketForm />
    </>
  );
}

function SectionTabs({ onJump }) {
  return (
    <div className="section-tabs">
      <button onClick={() => onJump("edition-one")}>1a edicao</button>
      <button onClick={() => onJump("edition-two")}>2a edicao</button>
    </div>
  );
}

function SponsorCard({ sponsor }) {
  return (
    <a className="sponsor-card" href="/" onClick={(event) => event.preventDefault()}>
      <div className="sponsor-mark">{sponsor.name.slice(0, 2).toUpperCase()}</div>
      <div>
        <span>{sponsor.name}</span>
        <strong>{sponsor.handle}</strong>
      </div>
    </a>
  );
}

function EditionSection({ id, kicker, title, description, blocks, sponsors, placeholder = false }) {
  return (
    <section className="content-section edition-section" id={id}>
      <div className="section-heading">
        <span className="section-kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="cup-layout">
        <div className="details-grid edition-block-grid">
          {blocks.map((block) => (
            <article key={`${id}-${block.label}`} className="detail-card">
              <h3>{block.label}</h3>
              <p>{block.value}</p>
            </article>
          ))}
        </div>

        <aside className="sponsor-panel">
          <div className="sponsor-head">
            <span className="section-kicker">Patrocinadores</span>
            <h3>{placeholder ? "Espacos reservados" : "Area pronta para links do Instagram"}</h3>
          </div>

          <div className="sponsor-list">
            {sponsors.map((sponsor) => (
              <SponsorCard key={`${id}-${sponsor.name}-${sponsor.handle}`} sponsor={sponsor} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function CupPage() {
  function jumpTo(id) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <section className="hero compact-hero">
        <div className="hero-content">
          <div className="hero-copy-block">
            <span className="section-kicker">Meu Pato Cup</span>
            <h1>As duas edicoes ficam na mesma pagina.</h1>
            <p className="hero-copy">
              A pessoa pode rolar normalmente ou usar os botoes para chegar na 1a
              ou 2a edicao. A estrutura ja fica pronta para premios, sorteios,
              fotos, patrocinadores e a tabela futura.
            </p>
          </div>

          <div className="hero-card">
            <SectionTabs onJump={jumpTo} />
          </div>
        </div>
      </section>

      <EditionSection
        id="edition-one"
        kicker="1a edicao"
        title="Como foi a primeira edicao"
        description="Bloco principal da 1a edicao com espaco para voce preencher os detalhes reais depois."
        blocks={firstEditionBlocks}
        sponsors={firstEditionSponsors}
      />

      <EditionSection
        id="edition-two"
        kicker="2a edicao"
        title="O que ja existe da segunda edicao"
        description="A 2a edicao entra com a estrutura pronta, mas com campos reservados para completar depois."
        blocks={secondEditionBlocks}
        sponsors={secondEditionSponsors}
        placeholder
      />
    </>
  );
}

function ComingSoonPage({ kicker, title, description }) {
  return (
    <section className="hero compact-hero">
      <div className="hero-content">
        <div className="hero-copy-block">
          <span className="section-kicker">{kicker}</span>
          <h1>Pagina em breve.</h1>
          <p className="hero-copy">{description}</p>
        </div>

        <div className="hero-card">
          <span className="hero-badge">Em breve</span>
          <h2>{title}</h2>
          <p>Espaco reservado dentro da mesma identidade visual do site.</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  function navigate(pageId) {
    setCurrentPage(pageId);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToAbout() {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setMobileOpen(false);
      requestAnimationFrame(() => {
        const target = document.getElementById("about");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return;
    }

    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="page-shell">
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((current) => !current)}
      />

      <main>
        {currentPage === "home" ? (
          <HomePage onNavigate={navigate} onScrollToAbout={scrollToAbout} />
        ) : null}

        {currentPage === "cup" ? <CupPage /> : null}

        {currentPage === "store" ? (
          <ComingSoonPage
            kicker="Loja"
            title="Colecao Meu Pato"
            description="A pagina da loja fica pronta dentro da navegação do site, mas por enquanto entra apenas como em breve."
          />
        ) : null}

        {currentPage === "proclub" ? (
          <ComingSoonPage
            kicker="Meu Pato Cup Pro Club"
            title="Pro Club"
            description="A pagina do Pro Club tambem ja entra na estrutura para receber conteudo depois."
          />
        ) : null}
      </main>
    </div>
  );
}
