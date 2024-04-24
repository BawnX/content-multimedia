import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as project from 'package.json';

export const swaggerInit = (app: INestApplication): void => {
  const config = new DocumentBuilder()
    .setTitle(project.title)
    .setDescription(project.description)
    .setVersion(project.version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('', app, document);
};
