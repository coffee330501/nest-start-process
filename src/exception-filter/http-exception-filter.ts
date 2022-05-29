import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('异常过滤器');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.json({
      message: '你好像不大聪明的样子',
    });
  }
}
