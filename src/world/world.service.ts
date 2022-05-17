import { Inject, Injectable } from '@nestjs/common';
import { SymbolService } from 'src/hello/symbol.service';
import { HelloService } from '../hello/hello.service';

@Injectable()
export class WorldService {
  @Inject()
  public symbolService: SymbolService;

  constructor(private helloService: HelloService) {}
  public getMsg(): string {
    return 'World';
  }

  public helloWorld(): string {
    return `${this.helloService.getMsg()} ${this.getMsg()}${this.symbolService.getMsg()}`;
  }
}
