"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    /**
     * Gera um token JWT com base no ID do usuário
     */
    static gerarToken(userId) {
        const secret = process.env.JWT_SECRET || 'fallback_secret';
        return jsonwebtoken_1.default.sign({ userId }, secret, { expiresIn: '1h' });
    }
    /**
     * Valida um token JWT e retorna os dados decodificados
     */
    static verificarToken(token) {
        try {
            const secret = process.env.JWT_SECRET || 'fallback_secret';
            return jsonwebtoken_1.default.verify(token, secret);
        }
        catch {
            return null;
        }
    }
}
exports.AuthService = AuthService;
