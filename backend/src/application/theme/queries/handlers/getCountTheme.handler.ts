import { QueryHandler, IQueryHandler } from "@nestjs/cqrs"
import ThemeRepository from "backend/src/infrastructure/shared/repositories/theme.repository";
import { GetCountThemeImplement } from "../implements/getCountTheme.implement";

@QueryHandler(GetCountThemeImplement)
export class GetCountThemeHandler implements IQueryHandler<GetCountThemeImplement> {
  constructor(private repository: ThemeRepository) {}

  async execute(_: GetCountThemeImplement) {
    const res = await this.repository.getCountsCategory();
    return res.map(({Content, ...theme}) => {
      const category: Array<{id: string, name: string, count: number}> = Content.map(({Category}) => {
        return {
          id: Category?.id || '',
          name: Category?.name || '',
          count: Category?._count.Content || 0
        }
      })

      return {
        ...theme,
        category: category.filter((elem, index, self) => index === self.findIndex(s => s.id === elem.id))
      }
    });
  }
}



