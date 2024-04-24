import { Global, Module } from "@nestjs/common";
import { PrismaConfig } from "./configs/prisma.config";
import UserRepository from "./repositories/user.repository";

const repositories = [UserRepository]

@Global()
@Module({
  providers: [PrismaConfig, ...repositories],
  exports: [PrismaConfig, ...repositories]
})
export default class SharedModule {}
