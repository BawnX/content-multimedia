import { ICommand } from "@nestjs/cqrs";
import { Category } from "@prisma/client";

export class CreateCategoryImplement implements ICommand{
  constructor(
    public readonly category: Category,
  ) {}
}
