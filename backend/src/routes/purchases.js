import { Router } from "express";
import { Purchase } from "../models/Purchase.js";

const router = Router();

router.post("/", async (request, response) => {
  const { name, whatsapp, email, instagram, notifications = [] } = request.body;

  if (!name || !whatsapp || !email || !instagram) {
    return response.status(400).json({
      message: "Nome, WhatsApp, email e Instagram sao obrigatorios."
    });
  }

  try {
    const purchase = await Purchase.create({
      name,
      whatsapp,
      email,
      instagram,
      notifications,
      paymentStatus: "saved"
    });

    return response.status(201).json({
      purchaseId: purchase._id,
      paymentStatus: purchase.paymentStatus,
      notifications: purchase.notifications
    });
  } catch (error) {
    return response.status(500).json({
      message: "Erro ao salvar cadastro."
    });
  }
});

router.patch("/:id/payment-status", async (request, response) => {
  const { id } = request.params;
  const { paymentStatus } = request.body;

  if (!["pending", "saved", "failed"].includes(paymentStatus)) {
    return response.status(400).json({
      message: "Status invalido."
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
        message: "Cadastro nao encontrado."
      });
    }

    return response.json({
      purchaseId: purchase._id,
      paymentStatus: purchase.paymentStatus
    });
  } catch (error) {
    return response.status(500).json({
      message: "Erro ao atualizar cadastro."
    });
  }
});

export default router;
