import { IQuery } from '@nestjs/cqrs';

export class GetByTagImplement implements IQuery {
  constructor(public tag: string) {}
}
