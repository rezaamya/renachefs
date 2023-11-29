import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ jwt: string; user: User }> {
    const user = await this.usersService.findUserByUserName(username);

    if (await bcrypt.compare(password, user.password)) {
      const payload = { sub: user.id, username: user.username };
      const jwt = await this.jwtService.signAsync(payload);
      return { jwt, user };
    }

    throw new HttpException('Unauthorized', 401);
  }
}
