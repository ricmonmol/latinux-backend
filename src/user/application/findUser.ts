import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { User } from '../schemas/user.schema';

@Injectable()
export class FindUserMail {
  constructor(private readonly userService: UserService) {}

  async findByEmail(mail: string): Promise<User> {
    return this.userService.find(mail);
  }
}
