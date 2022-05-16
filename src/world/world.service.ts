import { Injectable } from '@nestjs/common';
import { HelloService } from '../hello/hello.service';

@Injectable()
export class WorldService {
  constructor(private helloService: HelloService) {}
  public getMsg(): string {
    return 'World ~';
  }

  public helloWorld(): string {
    return `${this.helloService.getMsg()} ${this.getMsg()}`;
  }
}
