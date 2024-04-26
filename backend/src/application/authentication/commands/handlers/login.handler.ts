import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { LoginImplement } from "../implementations/login.implement";
import { JwtService } from '@nestjs/jwt';
import { BadRequestException } from "@nestjs/common";

@CommandHandler(LoginImplement)
export class LoginHandler implements ICommandHandler<LoginImplement> {
  constructor(private jwtService: JwtService) {}

  async execute({email, userId, role}: LoginImplement) {
    try{
      const payload = { email, sub: userId, role };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }catch (error){
      throw new BadRequestException('Error creating token');
    }
  }
}
