import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
  SetMetadata,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/pipe/validation.pipe';
import { HelloService } from './hello.service';

@Controller('/hello')
export class HelloController {
  constructor(private readonly service: HelloService) {}

  @Get()
  public getHello(): string {
    return this.service.getMsg();
  }

  @Get('/error')
  public error() {
    throw new HttpException('错误', HttpStatus.FORBIDDEN);
  }

  @Get('incr')
  public incr(@Query('num', new ParseIntPipe()) num: number) {
    console.log('路由处理方法');
    return num + 1;
  }
}
