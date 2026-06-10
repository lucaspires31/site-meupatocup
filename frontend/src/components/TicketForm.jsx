import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

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

export default function TicketForm() {
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
    <section className="ticket-section" id="cadastro">
      <div className="section-heading">
        <span className="section-kicker">Cadastro</span>
        <h2>Receba novidades do site</h2>
        <p>
          O formulario agora serve para salvar interessados no banco com nome,
          WhatsApp, email, Instagram e preferencia de notificacoes.
        </p>
      </div>

      <div className="ticket-layout">
        <form className="ticket-form" onSubmit={handleSubmit}>
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

          <div className="notification-box">
            <strong>Notificacoes</strong>
            <div className="notification-options">
              {notificationOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={
                    formData.notifications.includes(option)
                      ? "notification-chip active"
                      : "notification-chip"
                  }
                  onClick={() => toggleNotification(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button className="primary-button" type="submit" disabled={loading}>
            {loading ? "Salvando cadastro..." : "Salvar cadastro"}
          </button>

          {error ? <p className="form-feedback error">{error}</p> : null}
        </form>

        <aside className="payment-card">
          {signup ? (
            <>
              <span className="payment-status">Cadastro salvo</span>
              <h3>Seu interesse foi registrado</h3>
              <p>
                Assim que o site ganhar novas atualizacoes, esta estrutura ja fica
                pronta para disparar comunicacoes conforme as opcoes escolhidas.
              </p>
              <div className="pix-key-box">
                <strong>ID do cadastro</strong>
                <span>{signup.purchaseId}</span>
              </div>
              <ul className="payment-highlights">
                <li>WhatsApp salvo</li>
                <li>Email salvo</li>
                <li>Preferencias registradas</li>
              </ul>
            </>
          ) : (
            <>
              <span className="payment-status neutral">Novidades do projeto</span>
              <h3>Formulario pronto para crescer junto com o site</h3>
              <p>
                Nesta etapa, o foco e estruturar o cadastro real. Depois a gente
                pode ligar isso a automacoes, painel admin e envio de mensagens.
              </p>
              <ul className="payment-highlights">
                <li>Salva no banco de dados</li>
                <li>Campos pensados para comunidade e eventos</li>
                <li>Facil de expandir depois</li>
              </ul>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
