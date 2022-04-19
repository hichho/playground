import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //过滤无效的post参数
      whitelist: true,
      //在有无效的参数传递时，直接报错(http_code:400)
      forbidNonWhitelisted: true,
      //由网络请求传递的参数不是dto类的实例，所以进行转换,包括string,number类型
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
