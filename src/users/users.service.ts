import { Injectable, Logger } from '@nestjs/common';
import { UserInput } from './dto/user.input.dto';

interface IUser {
  email: string;
  password: string;
  name?: string;
}

@Injectable()
export class UsersService {
  private readonly _logger: Logger = new Logger('UsersService');
  private _users: IUser[] ;
  
  create(input: UserInput) {
    this._users.push(input);
  }
}
