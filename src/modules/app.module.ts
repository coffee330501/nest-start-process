import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { WorldModule } from './world/world.module';
import { HelloController } from './hello/hello.controller';
import { Middleware1 } from '../middleware/middleware1';
import { Middleware2 } from 'src/middleware/middleware2';

@Module({
  imports: [HelloModule, WorldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Middleware1, Middleware2).forRoutes(HelloController);
  }
}
