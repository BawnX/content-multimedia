import { Global, Module } from "@nestjs/common";
import { PrismaConfig } from "./configs/prisma.config";
import UserRepository from "./repositories/user.repository";
import ThemeRepository from "./repositories/theme.repository";
import ContentRepository from "./repositories/content.repository";
import CategoryRepository from "./repositories/category.repository";

const repositories = [
  UserRepository,
  ThemeRepository,
  ContentRepository,
  CategoryRepository
]

@Global()
@Module({
  providers: [PrismaConfig, ...repositories],
  exports: [PrismaConfig, ...repositories]
})
export default class SharedModule {}
