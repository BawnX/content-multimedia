import { QueryHandler, IQueryHandler } from "@nestjs/cqrs"
import ThemeRepository from "backend/src/infrastructure/shared/repositories/theme.repository";
import { GetThemeImplement } from "../implements/getTheme.implent";

@QueryHandler(GetThemeImplement)
export class GetThemeHandler implements IQueryHandler<GetThemeImplement> {
  constructor(private repository: ThemeRepository) {}

  async execute(_: GetThemeImplement) {
    return this.repository.getAllThemes();
  }
}



