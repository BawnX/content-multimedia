import { Injectable } from "@nestjs/common";
import { PrismaConfig } from "../configs/prisma.config";
import { Theme } from "@prisma/client";

@Injectable()
export default class ThemeRepository {
  constructor(private readonly prismaConfig: PrismaConfig){}

  async getAllThemes(): Promise<Theme[]> {
    return await this.prismaConfig.theme.findMany({orderBy: {name: "asc"}});
  }

  async createTheme(theme: Theme): Promise<Theme> {
    return await this.prismaConfig.theme.create({
      data: theme
    });
  }

  public async getCountsCategory(): Promise<any[]> {
    return await this.prismaConfig.theme.findMany({
      select: {
        name: true,
        id: true,
        imageUrl: true,
        tag: true,
        Content: {
          select: {
            Category: {
              select: {id: true, name: true, _count: true,}
            },
          }
        }
      }
    });
  }
}
