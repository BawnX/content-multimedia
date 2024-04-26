import { Controller, Post, UseGuards, Get, Body } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Theme } from "@prisma/client";
import { AdminAuthGuard } from "backend/src/application/authentication/guard/adminAuth.guard";
import { CreateThemeImplement } from "backend/src/application/theme/commands/implements/createTheme.implement";
import { GetCountThemeImplement } from "backend/src/application/theme/queries/implements/getCountTheme.implement";
import { GetThemeImplement } from "backend/src/application/theme/queries/implements/getTheme.implent";

@Controller('theme')
export class ThemeController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ){}

  @UseGuards(AdminAuthGuard)
  @Post()
  async create(@Body("theme") theme: Theme) {
    return this.commandBus.execute(new CreateThemeImplement(theme));
  }

  @Get()
  async getAll(){
    const data = await this.queryBus.execute(new GetThemeImplement());
    return {
      data
    }
  }

  @Get('count')
  async getCount(){
    const data = await this.queryBus.execute(new GetCountThemeImplement());
    return {
      data
    }
  }
}
