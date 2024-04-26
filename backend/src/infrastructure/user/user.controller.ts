import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { User } from "@prisma/client";
import { CreateUserImplement } from "backend/src/application/user/commands/implementations/createUser.implement";

@Controller('user')
export class UserController {

  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ){}

  @Post()
  async create(@Body("user") user: User): Promise<User> {
    return this.commandBus.execute(new CreateUserImplement(user));
  }
}
