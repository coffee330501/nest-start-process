import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { WorldModule } from './world/world.module';

@Module({
  imports: [HelloModule, WorldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
