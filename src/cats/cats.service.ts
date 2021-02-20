import { Injectable, Logger } from '@nestjs/common';

import { CreateCatDto } from './dto';
import { ICat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly _logger: Logger;
  private _data: ICat[];

  constructor() {
    this._logger = new Logger('CatsService');
    this._data = [];
  }

  public create(input: CreateCatDto | ICat) {
    this._data.push(input);
  }

  public findAll() {
    return [...this._data];
  }
}
