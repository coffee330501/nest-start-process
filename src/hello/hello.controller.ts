import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('/hello')
export class HelloController {
  constructor(private readonly service: HelloService) {}

  @Get()
  public getHello(): string {
    return this.service.getMsg();
  }
}
