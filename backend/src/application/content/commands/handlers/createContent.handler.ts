import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { BadRequestException } from "@nestjs/common";
import ContentRepository from "backend/src/infrastructure/shared/repositories/content.repository";
import { CreateContentImplement } from "../implements/createContent.implement";

@CommandHandler(CreateContentImplement)
export class CreateContentHandler implements ICommandHandler<CreateContentImplement> {
  constructor(private repository: ContentRepository) {}

  async execute({content}: CreateContentImplement) {
    try{
      const createTheme = await this.repository.createContent(content);
      return createTheme;
    }catch (error){
      throw new BadRequestException({...error, message: "Error creating a new content"});
    }
  }
}
