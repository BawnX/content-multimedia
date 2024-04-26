import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import SharedModule from './infrastructure/shared/shared.module';
import AuthenticationModule from './infrastructure/authentication/authentication.module';
import MainService from './main.service';
import UserModule from './infrastructure/user/user.module';
import CategoryModule from './infrastructure/category/category.module';
import ThemeModule from './infrastructure/theme/theme.module';
import ContentModule from './infrastructure/content/content.module';

const ENV = process.env.NODE_ENV;
const options = [
  {
    envFilePath: '.env.local',
    isGlobal: true,
  },
  {
    ignoreEnvFile: true,
    isGlobal: true,
  },
];

@Module({
  imports: [
    ConfigModule.forRoot(ENV === 'local' ? options[0] : options[1]),
    SharedModule,
    AuthenticationModule,
    UserModule,
    ThemeModule,
    CategoryModule,
    ContentModule
  ],
  providers: [MainService],
})
export class MainModule {}
