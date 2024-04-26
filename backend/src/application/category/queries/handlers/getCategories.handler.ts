import { QueryHandler, IQueryHandler } from "@nestjs/cqrs"
import { GetCategoriesImplement } from "../implements/getCategories.implent";
import CategoryRepository from "backend/src/infrastructure/shared/repositories/category.repository";


@QueryHandler(GetCategoriesImplement)
export class GetCategoriesHandler implements IQueryHandler<GetCategoriesImplement> {
  constructor(private repository: CategoryRepository) {}

  async execute(_: GetCategoriesImplement) {
    return this.repository.getCategories();
  }
}



