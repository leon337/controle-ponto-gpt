import { Request, Response } from 'express';
import { RegistroPontoService } from '../services/RegistroPontoService';
import { TipoRegistro } from '@prisma/client';

export class RegistroPontoController {
  /**
   * Registra um ponto para o usuário
   */
  static async registrar(req: Request, res: Response) {
    const { userId, tipo } = req.body;

    if (!userId || !tipo) {
      return res.status(400).json({ erro: 'Campos obrigatórios: userId, tipo.' });
    }

    try {
      const registro = await RegistroPontoService.registrar(userId, tipo as TipoRegistro);
      return res.status(201).json(registro);
    } catch (error: any) {
      return res.status(400).json({ erro: error.message });
    }
  }
}
