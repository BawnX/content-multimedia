import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { LoginImplement } from "backend/src/application/authentication/commands/implementations/login.implement";
import { JwtAuthGuard } from "backend/src/application/authentication/guard/jwtAuth.guard";
import { LocalAuthGuard } from "backend/src/application/authentication/guard/localAuth.guard";

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly commandBus: CommandBus){}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    const {user: {email, id, role}} = req;
    return this.commandBus.execute(new LoginImplement(email, id, role));
  }

  @UseGuards(JwtAuthGuard)
  @Get('validate')
  async validate() {
    return 'valid';
  }
}
