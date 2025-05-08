"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroPontoController = void 0;
const RegistroPontoService_1 = require("../services/RegistroPontoService");
class RegistroPontoController {
    /**
     * Registra um ponto para o usuário
     */
    static async registrar(req, res) {
        const { userId, tipo } = req.body;
        if (!userId || !tipo) {
            return res.status(400).json({ erro: 'Campos obrigatórios: userId, tipo.' });
        }
        try {
            const registro = await RegistroPontoService_1.RegistroPontoService.registrar(userId, tipo);
            return res.status(201).json(registro);
        }
        catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}
exports.RegistroPontoController = RegistroPontoController;
