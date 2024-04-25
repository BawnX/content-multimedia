import { Global, Module } from "@nestjs/common";
import {CqrsModule} from "@nestjs/cqrs";
import { PassportModule } from "@nestjs/passport";
import { AuthenticationHandler } from "backend/src/application/authentication/queries/handlers/authentication.handler";
import { LocalStrategy } from "backend/src/application/authentication/strategies/local.strategy";
import { AuthenticationController } from "./authentication.controller";
import { LocalAuthGuard } from "backend/src/application/authentication/guard/localAuth.guard";
import { LoginHandler } from "backend/src/application/authentication/commands/handlers/login.handler";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "backend/src/application/authentication/strategies/jwt.strategy";
import { JwtAuthGuard } from "backend/src/application/authentication/guard/jwtAuth.guard";
import { ReaderAuthGuard } from "backend/src/application/authentication/guard/readerAuth.guard";
import { CreatorAuthGuard } from "backend/src/application/authentication/guard/creatorAuth.guard";
import { AdminAuthGuard } from "backend/src/application/authentication/guard/adminAuth.guard";

const queries = [AuthenticationHandler]
const strategies = [LocalStrategy, JwtStrategy]
const controllers = [AuthenticationController]
const guards = [LocalAuthGuard, JwtAuthGuard, ReaderAuthGuard, CreatorAuthGuard, AdminAuthGuard]
const commands = [LoginHandler]

@Global()
@Module({
  controllers,
  imports: [
    CqrsModule.forRoot(),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  providers: [...queries, ...strategies, ...guards, ...commands]
})
export default class AuthenticationModule{}
