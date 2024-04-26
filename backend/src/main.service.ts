import { INestApplication, Logger } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';

export const setUp = async (app: INestApplication): Promise<void> => {
  const configService = app.get(ConfigService);
  const logger = new Logger(MainService.name);
  const PORT = configService.get('PORT');

  // swaggerInit(app);

  app.enableCors();
  app.setGlobalPrefix(<string>configService.get('GLOBAL_API_PREFIX'));

  logger.log(`Servidor iniciado en el puerto: ${PORT || 4000}`);

  await app.listen(PORT || 4000);
};

export default class MainService {}
