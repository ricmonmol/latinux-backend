import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user.service';

@Injectable()
export class UserCreator {
  constructor(private readonly userService: UserService) {}

  async execute(createUserDto: CreateUserDto): Promise<void> {
    const hash = await bcrypt.hash(createUserDto.password, 10);

    // Crear un objeto con las propiedades del DTO
    const user: CreateUserDto = {
      name: createUserDto.name,
      mail: createUserDto.mail,
      password: hash,
    };

    await this.userService.create(user);
  }
}
