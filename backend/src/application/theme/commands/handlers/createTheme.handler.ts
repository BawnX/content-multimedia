import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { BadRequestException } from "@nestjs/common";
import { CreateThemeImplement } from "../implements/createTheme.implement";
import ThemeRepository from "backend/src/infrastructure/shared/repositories/theme.repository";

@CommandHandler(CreateThemeImplement)
export class CreateThemeHandler implements ICommandHandler<CreateThemeImplement> {
  constructor(private repository: ThemeRepository) {}

  async execute({theme}: CreateThemeImplement) {
    try{
      const createTheme = await this.repository.createTheme(theme);
      return createTheme;
    }catch (error){
      throw new BadRequestException({...error, message: "Error creating a new theme"});
    }
  }
}
