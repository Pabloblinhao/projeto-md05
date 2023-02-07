import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { GameDTO } from './game.dto';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}
  async create(data: GameDTO) {
    const gameExists = await this.prisma.game.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (gameExists) {
      throw new Error('Game already exists');
    }

    const game = await this.prisma.game.create({
      data,
    });

    return game;
  }

  async findAll() {
    return this.prisma.game.findMany();
  }

  async update(id: string, data: GameDTO) {
    const gameExists = await this.prisma.game.findUnique({
      where: {
        id,
      },
    });

    if(!gameExists) {
      throw new Error('Game does not exists!');
    }

    await  await this.prisma.game.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const gameExists = await this.prisma.game.findUnique({
      where: {
        id,
      },
    });

    if (!gameExists) {
      throw new Error('Game does not exists!')
    }

    return await this.prisma.game.delete({
      where: {
        id,
      },
    });
  }
}
