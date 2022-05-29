import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ExecTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('拦截器', '方法执行前');
    const now = Date.now();
    return next
      .handle()
      .pipe(
        map(() =>
          console.log('拦截器', `方法执行后，花费时间 ${Date.now() - now}ms`),
        ),
      );
  }
}
