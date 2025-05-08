import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Liberação de CORS
app.use(cors({
  origin: "https://controle-ponto-frontend.vercel.app", // futuro domínio do front
  credentials: true,
}));

app.use(express.json());

// Rota de teste (para verificar deploy)
app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/", (req, res) => {
    res.send("API Controle de Ponto GPT rodando!");
  });

// Suas rotas reais (ex: app.use("/ponto", pontoRoutes); ...)

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
