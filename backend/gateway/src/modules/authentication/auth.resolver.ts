import { Args, Query, Resolver } from '@nestjs/graphql';
import { Auth } from './auth.model';
import { AuthService } from './auth.service';

@Resolver((of) => Auth)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query((returns) => Auth, { name: 'login' })
  async authentication(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return this.authService.authenticate(username, password);
  }
}
