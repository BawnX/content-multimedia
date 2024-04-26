import UserRepository from "backend/src/infrastructure/shared/repositories/user.repository";
import { AuthenticationImplement } from "../implementations/authentication.implement";
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs"

@QueryHandler(AuthenticationImplement)
export class AuthenticationHandler implements IQueryHandler<AuthenticationImplement> {
  constructor(private repository: UserRepository) {}

  async execute({email, password}: AuthenticationImplement) {
    const user = await this.repository.findOne(email);
    if (user && user.password === password.toString()) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
