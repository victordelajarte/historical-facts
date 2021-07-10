import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  LoggingInterceptor,
  ErrorHandlingInterceptor,
} from './common/interceptors';
import * as cookieParser from 'cookie-parser';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new ErrorHandlingInterceptor(),
  );

  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
