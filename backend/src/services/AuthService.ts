import jwt from 'jsonwebtoken';

export class AuthService {
  /**
   * Gera um token JWT com base no ID do usuário
   */
  static gerarToken(userId: string): string {
    const secret = process.env.JWT_SECRET || 'fallback_secret';
    return jwt.sign({ userId }, secret, { expiresIn: '1h' });
  }

  /**
   * Valida um token JWT e retorna os dados decodificados
   */
  static verificarToken(token: string): { userId: string } | null {
    try {
      const secret = process.env.JWT_SECRET || 'fallback_secret';
      return jwt.verify(token, secret) as { userId: string };
    } catch {
      return null;
    }
  }
}
