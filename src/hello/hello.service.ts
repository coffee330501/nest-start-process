import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  public getMsg(): string {
    return 'Hello';
  }
}
