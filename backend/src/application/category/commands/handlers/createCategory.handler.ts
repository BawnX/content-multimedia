import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { BadRequestException } from "@nestjs/common";
import { CreateCategoryImplement } from "../implements/createCategory.implement";
import CategoryRepository from "backend/src/infrastructure/shared/repositories/category.repository";

@CommandHandler(CreateCategoryImplement)
export class CreateCategoryHandler implements ICommandHandler<CreateCategoryImplement> {
  constructor(private repository: CategoryRepository) {}

  async execute({category}: CreateCategoryImplement) {
    try{
      const createTheme = await this.repository.createCategory(category);
      return createTheme;
    }catch (error){
      throw new BadRequestException({...error, message: "Error creating a new category"});
    }
  }
}
