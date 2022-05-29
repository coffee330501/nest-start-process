import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { SymbolService } from './symbol.service';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService, SymbolService],
  exports: [HelloService,SymbolService],
})
export class HelloModule {}
