import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  async findUserByUserName(username: string): Promise<User> {
    return {
      id: 2,
      username: 'rezaamya2@gmail.com',
      password: '$2b$10$PbDqogAB3ZMxdDLqepD0..KhGjr2fa.VBmsWCMex29LO0MVNnZOWW',
    };
  }
}
