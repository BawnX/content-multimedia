import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserImplement } from "../implementations/createUser.implement";
import UserRepository from "backend/src/infrastructure/shared/repositories/user.repository";
import { BadRequestException } from "@nestjs/common";

@CommandHandler(CreateUserImplement)
export class CreateUserHandler implements ICommandHandler<CreateUserImplement> {
  constructor(private repository: UserRepository) {}

  async execute({newUser}: CreateUserImplement) {
    try{
      const user = await this.repository.create(newUser);
      return user;
    }catch (error){
      console.log(error);
      throw new BadRequestException('Error creating user');
    }
  }
}
