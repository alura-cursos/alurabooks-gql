import { Module } from '@nestjs/common';
import { CategoriasResolver } from './resolvers/categorias.resolver';
import { CategoriasService } from './services/categorias.service';

@Module({
  providers: [CategoriasService, CategoriasResolver],
})
export class CategoriasModule {}
