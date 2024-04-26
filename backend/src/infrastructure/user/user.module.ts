import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CqrsModule } from "@nestjs/cqrs";
import { CreateUserHandler } from "backend/src/application/user/commands/handlers/createUser.handler";

const controllers = [UserController]
const commands = [CreateUserHandler]

@Module({
  controllers,
  imports: [
    CqrsModule.forRoot(),
  ],
  providers: [...commands]
})
export default class UserModule {}
