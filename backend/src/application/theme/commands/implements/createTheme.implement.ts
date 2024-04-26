import { ICommand } from "@nestjs/cqrs";
import { Theme } from "@prisma/client";

export class CreateThemeImplement implements ICommand{
  constructor(
    public readonly theme: Theme,
  ) {}
}
