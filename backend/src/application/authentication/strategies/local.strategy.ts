import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import  { QueryBus } from '@nestjs/cqrs';
import { AuthenticationImplement } from '../queries/implementations/authentication.implement';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private queryBus: QueryBus) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.queryBus.execute(new AuthenticationImplement(email, password))
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
