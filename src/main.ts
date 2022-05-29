import { NestFactory, Reflector } from '@nestjs/core';
import { HttpExceptionFilter } from './exception-filter/http-exception-filter';
import { AuthGuard } from './guard/auth.guard';
import { ExecTimeInterceptor } from './interceptors/redis-cache.interceptor';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .useGlobalFilters(new HttpExceptionFilter())
    .useGlobalGuards(new AuthGuard())
    .useGlobalInterceptors(new ExecTimeInterceptor());
  await app.listen(3000);
}
bootstrap();
