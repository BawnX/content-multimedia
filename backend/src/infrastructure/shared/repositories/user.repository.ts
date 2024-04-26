import { Injectable } from "@nestjs/common";
import { PrismaConfig } from "../configs/prisma.config";
import { User } from "@prisma/client";

@Injectable()
export default class UserRepository {
  constructor(private readonly prismaConfig: PrismaConfig){}

  async findOne(email: string): Promise<User | null> {
    return await this.prismaConfig.user.findFirst({
      where: {
        email,
      }
    })
  }

  async create(user: User): Promise<User> {
    return await this.prismaConfig.user.create({
      data: user
    })
  }
}
