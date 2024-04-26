import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { CreateContentHandler } from "backend/src/application/content/commands/handlers/createContent.handler";
import { ContentController } from "./content.controller";
import { GetByTagHandler } from "backend/src/application/content/queries/handlers/getByTag.handler";

const commands = [
  CreateContentHandler
]
const queries = [
  GetByTagHandler
]

@Module({
  controllers: [ContentController],
  imports: [
    CqrsModule.forRoot()
  ],
  providers:[...commands, ...queries]
})
export default class ContentModule{}
