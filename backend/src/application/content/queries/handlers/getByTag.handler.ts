import { QueryHandler, IQueryHandler } from "@nestjs/cqrs"
import { GetByTagImplement } from "../implements/getByTag.implement";
import ContentRepository from "backend/src/infrastructure/shared/repositories/content.repository";


@QueryHandler(GetByTagImplement)
export class GetByTagHandler implements IQueryHandler<GetByTagImplement> {
  constructor(private repository: ContentRepository) {}

  async execute({tag}: GetByTagImplement) {
    const themes = await this.repository.getByTag(tag);

    const themesByCategory = themes.map(({Content, ...theme}) => {
      const content = Content.map(({Category, ...content}) => {
        return {
          ...content,
          category: Category.name
        }
      })

      const groupBy = (array, property) => array.reduce((grouped, element) => ({
        ...grouped,
        [element[property]]: [...(grouped[element[property]] || []), element]
      }), {})

      return{
        ...theme,
        category: groupBy(content, "category")
      }
    })

    return themesByCategory;
  }
}
