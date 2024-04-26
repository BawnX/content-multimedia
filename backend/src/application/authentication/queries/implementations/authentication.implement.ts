import { IQuery } from '@nestjs/cqrs';

export class AuthenticationImplement implements IQuery {
  constructor(
    public readonly email: string,
    public readonly password: string,
  ) {}
}
