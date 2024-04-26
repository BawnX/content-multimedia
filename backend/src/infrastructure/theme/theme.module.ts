import { Module } from "@nestjs/common";
import { CreateThemeHandler } from "backend/src/application/theme/commands/handlers/createTheme.handler";
import { ThemeController } from "./theme.controller";
import { CqrsModule } from "@nestjs/cqrs";
import { GetThemeHandler } from "backend/src/application/theme/queries/handlers/getTheme.handler";
import { GetCountThemeHandler } from "backend/src/application/theme/queries/handlers/getCountTheme.handler";

const commands = [
  CreateThemeHandler
]
const queries = [
  GetThemeHandler,
  GetCountThemeHandler
]

@Module({
  controllers: [ThemeController],
  imports: [
    CqrsModule.forRoot()
  ],
  providers:[...commands, ...queries]
})
export default class ThemeModule{}
