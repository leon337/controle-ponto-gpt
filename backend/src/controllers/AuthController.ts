import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  /**
   * Gera um token de acesso para o usuário (simulação inicial)
   */
  static login(req: Request, res: Response) {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ erro: 'ID do usuário é obrigatório.' });
    }

    const token = AuthService.gerarToken(userId);
    return res.json({ token });
  }
}
