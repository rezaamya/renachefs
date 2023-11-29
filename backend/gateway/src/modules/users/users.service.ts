import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  async findUser(id: number): Promise<User> {
    return { id: 1, username: 'rezaamya@gmail.com', password: '12345' };
  }

  async findUserByUserName(username: string): Promise<User> {
    return { id: 2, username: 'rezaamya2@gmail.com', password: '12345' };
  }
}
