"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroPontoService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class RegistroPontoService {
    /**
     * Registra um novo ponto (entrada ou saída) para o usuário
     */
    static async registrar(userId, tipo) {
        // Buscar último registro do usuário
        const ultimo = await prisma_1.default.registroPonto.findFirst({
            where: { userId },
            orderBy: { horario: 'desc' }
        });
        // Regras:
        // 1. Alternância de ENTRADA/SAÍDA
        if (ultimo && ultimo.tipo === tipo) {
            throw new Error(`Você já registrou uma ${tipo.toLowerCase()} anteriormente.`);
        }
        // 2. Marcação em horário real do servidor
        const novoRegistro = await prisma_1.default.registroPonto.create({
            data: {
                userId,
                tipo,
                horario: new Date()
            }
        });
        return novoRegistro;
    }
}
exports.RegistroPontoService = RegistroPontoService;
