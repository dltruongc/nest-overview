import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto';
import { ICat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<ICat[]> {
    return this.catsService.findAll();
  }

  @Get('errors')
  getErrors() {
    throw new HttpException('Sample error', 500);
  }
}