import { Controller, Post, UseGuards, Get, Body } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Category } from "@prisma/client";
import { AdminAuthGuard } from "backend/src/application/authentication/guard/adminAuth.guard";
import { CreateCategoryImplement } from "backend/src/application/category/commands/implements/createCategory.implement";
import { GetCategoriesImplement } from "backend/src/application/category/queries/implements/getCategories.implent";

@Controller('category')
export class CategoryController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ){}

  @UseGuards(AdminAuthGuard)
  @Post()
  async create(@Body("category") category: Category) {
    return this.commandBus.execute(new CreateCategoryImplement(category));
  }

  @Get()
  async getAll(){
    const data = await this.queryBus.execute(new GetCategoriesImplement());
    return {
      data
    }
  }
}
