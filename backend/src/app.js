import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import purchasesRouter from "./routes/purchases.js";

dotenv.config();

export const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
  })
);
app.use(express.json());

app.get("/api/health", (request, response) => {
  response.json({ status: "ok" });
});

app.use("/api/purchases", purchasesRouter);
