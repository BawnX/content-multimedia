import { ICommand } from "@nestjs/cqrs";
import { Content } from "@prisma/client";

export class CreateContentImplement implements ICommand{
  constructor(
    public readonly content: Content,
  ) {}
}
