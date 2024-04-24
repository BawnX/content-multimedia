import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

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
  ],
  providers: [],
})
export class MainModule {}
