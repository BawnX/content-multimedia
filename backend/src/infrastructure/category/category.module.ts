import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { CreateCategoryHandler } from "backend/src/application/category/commands/handlers/createCategory.handler";
import { CategoryController } from "./category.controller";
import { GetCategoriesHandler } from "backend/src/application/category/queries/handlers/getCategories.handler";

const commands = [
  CreateCategoryHandler
]
const queries = [GetCategoriesHandler]

@Module({
  controllers: [CategoryController],
  imports: [
    CqrsModule.forRoot()
  ],
  providers:[...commands, ...queries]
})
export default class CategoryModule{}
