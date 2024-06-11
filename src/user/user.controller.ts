import { Controller, Get } from '@nestjs/common';
import { UserCreator } from './application/create-user';
import { CreateUserDto } from './application/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userCreator: UserCreator) {}

  @Get()
  create(createUserDto: CreateUserDto): Promise<void> {
    return this.userCreator.execute(createUserDto);
  }
}
