# Meu Pato Cup

Projeto fullstack para venda de ingressos com:

- frontend em React + Vite
- backend em Node.js + Express
- persistencia com MongoDB
- geracao de QR Code Pix

## Estrutura

- `frontend`: site e formulario de compra
- `backend`: API, persistencia e QR Code

## Como rodar

1. Instale as dependencias:

```bash
npm install
npm --prefix frontend install
npm --prefix backend install
```

2. Crie o arquivo `backend/.env`:

```env
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/meupatocup
PIX_KEY=contato@meupatocup.com
PIX_CITY=SAO PAULO
PIX_RECEIVER=Meu Pato Cup
FRONTEND_URL=http://localhost:5173
```

3. Inicie o projeto:

```bash
npm run dev
```

4. Acesse:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:4000`

## Pagamento Pix

Ao enviar o formulario, a API:

- registra o comprador com status `pending`
- gera o payload Pix usando a chave configurada
- cria um QR Code com a biblioteca `qrcode`
- devolve a chave Pix e a imagem em base64 para o frontend

## Validacao de pagamento

Foi deixada uma base para evolucao do status da compra. Para validacao real, basta integrar um provedor Pix e atualizar o campo `paymentStatus`.
