import { Injectable } from "@nestjs/common";
import { PrismaConfig } from "../configs/prisma.config";
import { Content, Theme } from "@prisma/client";

@Injectable()
export default class ContentRepository {
  constructor(private readonly prismaConfig: PrismaConfig){}

  public async createContent(content: Content): Promise<Content> {
    return await this.prismaConfig.content.create({ data: content });
  }

  public async getByTag(tag: string): Promise<any[]> {
    return await this.prismaConfig.theme.findMany({
      select: {description: true, name: true, Content: {select: {name: true, value: true, Category: {select: {name: true}}}}},
      where: {
        tag: {equals: tag}
      }
    });
  }
}
