import { Module } from '@nestjs/common';
import { AutoresModule } from 'src/autores/autores.module';
import { LivrosResolver } from './resolvers/livros.resolver';
import { LivrosService } from './services/livros.service';

@Module({
  providers: [LivrosService, LivrosResolver],
  exports: [LivrosService],
  imports: [AutoresModule],
})
export class LivrosModule {}
