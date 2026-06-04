import { Router } from "express";
import QRCode from "qrcode";
import { Purchase } from "../models/Purchase.js";
import { buildPixPayload } from "../pix.js";

const router = Router();

router.post("/", async (request, response) => {
  const { name, contact } = request.body;

  if (!name || !contact) {
    return response.status(400).json({
      message: "Nome e e-mail ou telefone sao obrigatorios."
    });
  }

  try {
    const pixPayload = buildPixPayload({
      pixKey: process.env.PIX_KEY || "contato@meupatocup.com",
      receiverName: process.env.PIX_RECEIVER || "Meu Pato Cup",
      city: process.env.PIX_CITY || "SAO PAULO",
      description: `Ingresso ${name}`.slice(0, 40),
      amount: 99.9
    });

    const purchase = await Purchase.create({
      name,
      contact,
      paymentStatus: "pending",
      pixPayload
    });

    const qrCodeDataUrl = await QRCode.toDataURL(pixPayload, {
      margin: 1,
      width: 320
    });

    return response.status(201).json({
      purchaseId: purchase._id,
      paymentStatus: purchase.paymentStatus,
      pixKey: process.env.PIX_KEY || "contato@meupatocup.com",
      qrCodeDataUrl
    });
  } catch (error) {
    return response.status(500).json({
      message: "Erro ao registrar compra e gerar Pix."
    });
  }
});

router.patch("/:id/payment-status", async (request, response) => {
  const { id } = request.params;
  const { paymentStatus } = request.body;

  if (!["pending", "paid", "failed"].includes(paymentStatus)) {
    return response.status(400).json({
      message: "Status de pagamento invalido."
    });
  }

  try {
    const purchase = await Purchase.findByIdAndUpdate(
      id,
      { paymentStatus },
      { new: true }
    );

    if (!purchase) {
      return response.status(404).json({
        message: "Compra nao encontrada."
      });
    }

    return response.json({
      purchaseId: purchase._id,
      paymentStatus: purchase.paymentStatus
    });
  } catch (error) {
    return response.status(500).json({
      message: "Erro ao atualizar status do pagamento."
    });
  }
});

export default router;
