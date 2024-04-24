import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { setUp } from './main.service';
import { throwError } from './infrastructure/common/configs/error.config';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule, { cors: false });
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));
  setUp(app).catch(throwError);
}

bootstrap();
