import { InternalServerErrorException } from "@nestjs/common";

export function throwError(error: Error): never {
  throw new InternalServerErrorException(error);
}
