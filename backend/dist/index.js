"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Liberação de CORS
app.use((0, cors_1.default)({
    origin: "https://controle-ponto-frontend.vercel.app", // futuro domínio do front
    credentials: true,
}));
app.use(express_1.default.json());
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
