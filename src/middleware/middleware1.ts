import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class Middleware1 implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('中间件1', 'Request...');
    console.log('中间件1', 'Response...');
    next();
  }
}
