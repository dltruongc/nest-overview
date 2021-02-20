import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { InternalServerErrorFilter } from 'src/shared/exception-filters/http/internal_server.filter';
import { EmailExisted } from 'src/shared/exceptions/email-exists.exception';

import { UserInput } from './dto/user.input.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseFilters(InternalServerErrorFilter)
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Post()
  createUser(@Body() input: UserInput) {
    return this._usersService.create(input);
  }

  @Get('filter')
  filterException() {
    throw new Error('Throw a error');
  }

  @Get(':email')
  validateEmail(@Param('email') email: string) {
    throw new EmailExisted();
  }
}
