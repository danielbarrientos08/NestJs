import { NestFactory } from '@nestjs/core';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //ignora los datos sobrantes
      forbidNonWhitelisted: true, //alerta de los datos sobrantes
    }),
  );
  await app.listen(3000);
}
bootstrap();
