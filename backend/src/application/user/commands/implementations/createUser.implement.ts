import { ICommand } from "@nestjs/cqrs";
import { User } from "@prisma/client";

export class CreateUserImplement implements ICommand{
  constructor(
    public readonly newUser: User,
  ) {}
}
