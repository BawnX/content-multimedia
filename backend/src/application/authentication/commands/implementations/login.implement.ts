import { ICommand } from "@nestjs/cqrs";
import { Role } from "@prisma/client";

export class LoginImplement implements ICommand{
  constructor(
    public readonly email: string,
    public readonly userId: string,
    public readonly role: Role
  ) {}
}
