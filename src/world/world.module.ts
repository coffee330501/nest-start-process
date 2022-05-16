import { Module } from '@nestjs/common';
import { WorldController } from './world.controller';
import { WorldService } from './world.service';
import { HelloModule } from '../hello/hello.module';

@Module({
  imports: [HelloModule],
  controllers: [WorldController],
  providers: [WorldService],
})
export class WorldModule {}
