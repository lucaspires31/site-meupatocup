const sponsors = [
  {
    name: "Garagem Puro Oleo",
    image: "/assets/sponsor-garagem.jpg",
    description: "Parceiro oficial da arena e da experiencia da 2a edicao."
  },
  {
    name: "Hooakah Express",
    image: "/assets/sponsor-hooakah.jpg",
    description: "Marca parceira fortalecendo a atmosfera do evento."
  },
  {
    name: "La Catedral Estudio",
    image: "/assets/sponsor-catedral.jpg",
    description: "Patrocinador que apoia a comunidade e a identidade do torneio."
  }
];

function SideLogo() {
  return <img className="ticket-side-logo" src="/assets/logo-crop.png" alt="Logo Meu Pato Cup" />;
}

export default function TicketForm() {
  return (
    <section className="content-block sponsors-block reveal-section" data-reveal id="ingressos">
      <div className="ticket-copy">
        <div className="ticket-copy__top">
          <div>
            <span className="section-tag">Parceiros oficiais</span>
            <h2>Patrocinadores</h2>
          </div>
          <SideLogo />
        </div>

        <p>
          Marcas que fortalecem a Meu Pato Cup 2 e ajudam a elevar a experiencia
          da comunidade dentro e fora da arena.
        </p>
      </div>

      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <article
            key={sponsor.name}
            className="sponsor-card reveal-section reveal-section--card"
            data-reveal
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <div className="sponsor-card__image">
              <img src={sponsor.image} alt={`Logo ${sponsor.name}`} />
            </div>
            <div className="sponsor-card__body">
              <h3>{sponsor.name}</h3>
              <p>{sponsor.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
