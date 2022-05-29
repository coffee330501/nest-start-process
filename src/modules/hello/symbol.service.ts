import { Injectable } from '@nestjs/common';

@Injectable()
export class SymbolService {
  public getMsg(): string {
    return '!';
  }
}
