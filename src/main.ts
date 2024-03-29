import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,// Limpia la data que mandan en el endpoint  si no esta definida en DTO
    forbidNonWhitelisted: true,// Arroja el error si hay datos que no estan definidos en DTO
    })
   );
  await app.listen(3000);
}
bootstrap();
