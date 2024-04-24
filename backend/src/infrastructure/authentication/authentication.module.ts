import { Module } from "@nestjs/common";
import {CqrsModule} from "@nestjs/cqrs";
import { PassportModule } from "@nestjs/passport";
import { AuthenticationHandler } from "backend/src/application/authentication/queries/handlers/authentication.handler";
import { LocalStrategy } from "backend/src/application/authentication/strategies/local.strategy";
import { AuthenticationController } from "./authentication.controller";

const queries = [AuthenticationHandler]
const strategies = [LocalStrategy]
const controllers = [AuthenticationController]

@Module({
  controllers,
  imports: [
    CqrsModule.forRoot(),
    PassportModule
  ],
  providers: [...queries, ...strategies]
})
export default class AuthenticationModule{}
