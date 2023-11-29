import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.model';

@ObjectType()
export class Auth {
  @Field((type) => User)
  user: User;

  @Field()
  jwt: string;
}
