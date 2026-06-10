import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const sponsors = [
  {
    name: "Patrocinador 01",
    image: "/assets/sponsor-garagem.jpg",
    description: "Espaco pronto para trocar pelo patrocinador real e link do Instagram."
  },
  {
    name: "Patrocinador 02",
    image: "/assets/sponsor-hooakah.jpg",
    description: "Mantive imagens na tela e deixei a troca final para quando voce mandar os links."
  },
  {
    name: "Patrocinador 03",
    image: "/assets/sponsor-catedral.jpg",
    description: "Area preparada para patrocinadores clicaveis por edicao."
  }
];

const initialState = {
  name: "",
  whatsapp: "",
  email: "",
  instagram: "",
  notifications: ["Novidades gerais", "Novas edicoes"]
};

const notificationOptions = [
  "Novidades gerais",
  "Novas edicoes",
  "Sorteios e premios",
  "Loja"
];

function SideLogo() {
  return <img className="ticket-side-logo" src="/assets/logo-crop.png" alt="Logo Meu Pato Cup" />;
}

export default function TicketForm({ cupMode = false }) {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [signup, setSignup] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  }

  function toggleNotification(option) {
    setFormData((current) => ({
      ...current,
      notifications: current.notifications.includes(option)
        ? current.notifications.filter((item) => item !== option)
        : [...current.notifications, option]
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/purchases`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Nao foi possivel salvar seu cadastro.");
      }

      setSignup(data);
      setFormData(initialState);
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {cupMode ? (
        <section className="content-block sponsors-block reveal-section" data-reveal id="patrocinadores">
          <div className="ticket-copy">
            <div className="ticket-copy__top">
              <div>
                <span className="section-tag">Parceiros oficiais</span>
                <h2>Patrocinadores</h2>
              </div>
              <SideLogo />
            </div>

            <p>
              Mantive o bloco visual com imagens no mesmo estilo do site antigo.
              Depois a gente troca pelos patrocinadores reais e pelos links certos
              do Instagram.
            </p>
          </div>

          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <a
                key={sponsor.name}
                className="sponsor-card reveal-section reveal-section--card"
                data-reveal
                href="/"
                onClick={(event) => event.preventDefault()}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="sponsor-card__image">
                  <img src={sponsor.image} alt={`Logo ${sponsor.name}`} />
                </div>
                <div className="sponsor-card__body">
                  <h3>{sponsor.name}</h3>
                  <p>{sponsor.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="content-block ticket-block reveal-section" data-reveal id="cadastro">
        <div className="ticket-copy">
          <div className="ticket-copy__top">
            <div>
              <span className="section-tag">Novidades</span>
              <h2>Cadastre-se no site</h2>
            </div>
            <SideLogo />
          </div>

          <p>
            Formulario para salvar nome, WhatsApp, email, Instagram e preferencia
            de notificacoes diretamente no banco de dados do projeto.
          </p>
        </div>

        <div className="ticket-layout">
          <form className="ticket-form" onSubmit={handleSubmit}>
            <div className="ticket-field">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="ticket-field">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="text"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </div>

            <div className="ticket-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="voce@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="ticket-field">
              <label htmlFor="instagram">Instagram</label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                placeholder="@seuinstagram"
                value={formData.instagram}
                onChange={handleChange}
                required
              />
            </div>

            <div className="ticket-field">
              <label>Notificacoes</label>
              <div className="notification-chips">
                {notificationOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      formData.notifications.includes(option)
                        ? "notification-chip is-active"
                        : "notification-chip"
                    }
                    onClick={() => toggleNotification(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <button className="payment-submit" type="submit" disabled={loading}>
              {loading ? "Salvando cadastro..." : "Salvar cadastro"}
            </button>

            {error ? <p className="ticket-error">{error}</p> : null}
            <p className="ticket-safe">Seus dados ficam salvos para futuras novidades do site.</p>
          </form>

          <aside className={`ticket-payment ${signup ? "is-visible" : "is-visible"}`}>
            {signup ? (
              <>
                <span className="payment-status">Cadastro salvo</span>
                <h3>Seu interesse foi registrado</h3>
                <p>
                  Agora a estrutura ja esta pronta para salvar os dados e servir de
                  base para avisos e novidades depois.
                </p>

                <div className="payment-box">
                  <div className="payment-box__qr">
                    <span>MPC</span>
                  </div>
                  <div className="payment-box__copy">
                    <span>ID do cadastro</span>
                    <div className="payment-pix-key">{signup.purchaseId}</div>
                    <p>As preferencias escolhidas tambem foram registradas.</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <span className="payment-status neutral">Cadastro real</span>
                <h3>Estrutura pronta para crescer</h3>
                <p>
                  O visual segue a base do site antigo, mas o formulario agora
                  salva dados de verdade para novidades do projeto.
                </p>

                <div className="payment-box">
                  <div className="payment-box__qr">
                    <span>MPC</span>
                  </div>
                  <div className="payment-box__copy">
                    <span>O que ja salva</span>
                    <div className="payment-pix-key">Nome, WhatsApp, email e Instagram</div>
                    <p>As opcoes de notificacao tambem entram no cadastro.</p>
                  </div>
                </div>
              </>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
