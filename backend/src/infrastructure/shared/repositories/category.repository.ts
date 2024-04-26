import { Injectable } from "@nestjs/common";
import { PrismaConfig } from "../configs/prisma.config";
import { Category } from "@prisma/client";

@Injectable()
export default class CategoryRepository {
  constructor(private readonly prismaConfig: PrismaConfig){}

  public async getCategories(): Promise<Category[]> {
    return await this.prismaConfig.category.findMany({orderBy: {name: "asc"}});
  }

  public async createCategory(category: Category): Promise<Category> {
    return await this.prismaConfig.category.create({
      data: category,
    });
  }
}
