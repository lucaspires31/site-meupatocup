import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDatabase } from "./config/database.js";

dotenv.config();

const port = process.env.PORT || 4000;

async function startServer() {
  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log(`Servidor iniciado em http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Falha ao iniciar backend:", error.message);
    process.exit(1);
  }
}

startServer();
