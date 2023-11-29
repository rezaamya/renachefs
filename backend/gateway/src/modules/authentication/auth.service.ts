import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async authenticate(
    username: string,
    password: string,
  ): Promise<{ jwt: string; user: User }> {
    const user = await this.usersService.findUserByUserName(username);

    if (user.password === password) {
      return { jwt: 'jwtjwtjwt', user };
    }
  }
}
