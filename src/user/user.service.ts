import { Injectable } from '@nestjs/common';
import { UserDto } from './schemas/dto/user.dto';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private mail: string,
  ) {}
  async create(userDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(userDto);
    return await createdUser.save();
  }
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
  async find(mail: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { mail: mail } });
    return user;
  }
}
