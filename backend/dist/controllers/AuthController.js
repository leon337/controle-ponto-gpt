"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../services/AuthService");
class AuthController {
    /**
     * Gera um token de acesso para o usuário (simulação inicial)
     */
    static login(req, res) {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ erro: 'ID do usuário é obrigatório.' });
        }
        const token = AuthService_1.AuthService.gerarToken(userId);
        return res.json({ token });
    }
}
exports.AuthController = AuthController;
