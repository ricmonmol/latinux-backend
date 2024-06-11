import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user.service';

@Injectable()
export class UserCreator {
  constructor(private readonly userService: UserService) {}
  async execute(createUserDto: CreateUserDto): Promise<void> {
    const hash = await bcrypt.hash(createUserDto.password, 10);
    const user = new CreateUserDto(
      createUserDto.name,
      createUserDto.mail,
      hash,
    );
    await this.userService.create(user);
  }
}
