import { Controller, Post, UseGuards, Get, Body, Param } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Content } from "@prisma/client";
import { AdminOrCreatorAuthGuard } from "backend/src/application/authentication/guard/adminOrCreator.guard";
import { CreateContentImplement } from "backend/src/application/content/commands/implements/createContent.implement";
import { GetByTagImplement } from "backend/src/application/content/queries/implements/getByTag.implement";

@Controller('content')
export class ContentController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ){}

  @UseGuards(AdminOrCreatorAuthGuard)
  @Post()
  async create(@Body("content") content: Content) {
    return this.commandBus.execute(new CreateContentImplement(content));
  }

  @Get("by-tag")
  async getByTag(@Param("tag") tag: string) {
    return this.queryBus.execute(new GetByTagImplement(tag));
  }
}
