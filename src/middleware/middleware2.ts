import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class Middleware2 implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('中间件2', 'Request...');
    console.log('中间件2', 'Response...');
    next();
  }
}
