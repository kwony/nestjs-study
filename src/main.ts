import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './filter/CustomException.filter';
import { HttpExceptionFilter } from './filter/HttpExceptionFilter.filter';
import { TransformInterceptor } from './transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new CustomExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // number 타입은 자동으로 number로 convert해준다
    }),
  );

  app.useGlobalInterceptors(new TransformInterceptor()); // 전체에다가 적용하는 방법
  await app.listen(3000);
}
bootstrap();
