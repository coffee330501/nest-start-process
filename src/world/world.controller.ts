import { Controller, Get } from '@nestjs/common';
import { WorldService } from './world.service';

@Controller('/world')
export class WorldController {
  constructor(private readonly service: WorldService) {}

  @Get()
  public getWorld(): string {
    return this.service.getMsg();
  }

  @Get('/helloWorld')
  public helloWorld(): string {
    return this.service.helloWorld();
  }
}
