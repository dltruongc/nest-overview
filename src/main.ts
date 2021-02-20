import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // hint: attach global middlware here
  // app.use(middleware);
  await app.listen(3000);
}
bootstrap();
