import { Body, Controller, Post } from '@nestjs/common';
import { Delete, Get, Param, Put } from '@nestjs/common/decorators';
import { GameDTO } from './game.dto';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  async create(@Body() data: GameDTO) {
    return this.gameService.create(data);
  }

  @Get()
  async findAll() {
    return this.gameService.findAll();
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: GameDTO) {
    return this.gameService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param('id') id: string) {
    return this.gameService.delete(id);
  }
}
