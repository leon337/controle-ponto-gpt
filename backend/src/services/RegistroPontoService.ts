import prisma from '../config/prisma';
import { TipoRegistro } from '@prisma/client';

export class RegistroPontoService {
  /**
   * Registra um novo ponto (entrada ou saída) para o usuário
   */
  static async registrar(userId: string, tipo: TipoRegistro) {
    // Buscar último registro do usuário
    const ultimo = await prisma.registroPonto.findFirst({
      where: { userId },
      orderBy: { horario: 'desc' }
    });

    // Regras:
    // 1. Alternância de ENTRADA/SAÍDA
    if (ultimo && ultimo.tipo === tipo) {
      throw new Error(`Você já registrou uma ${tipo.toLowerCase()} anteriormente.`);
    }

    // 2. Marcação em horário real do servidor
    const novoRegistro = await prisma.registroPonto.create({
      data: {
        userId,
        tipo,
        horario: new Date()
      }
    });

    return novoRegistro;
  }
}
