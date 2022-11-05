import { Module } from '@nestjs/common';
import { AutoresService } from './services/autor.service';

@Module({
  providers: [AutoresService],
  exports: [AutoresService],
})
export class AutoresModule {}
