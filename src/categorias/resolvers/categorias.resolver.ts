import {
  Resolver,
  ResolveField,
  Parent,
  Query,
  Args,
  Int,
} from '@nestjs/graphql';
import { Autor } from '../../autores/models/autor.model';
import { AutoresService } from 'src/autores/services/autor.service';
import { Categoria } from '../models/categoria.model';
import { CategoriasService } from '../services/categorias.service';

@Resolver((of) => Categoria)
export class CategoriasResolver {
  constructor(private categoriasService: CategoriasService) {}

  @Query((returns) => [Categoria])
  async categorias(): Promise<Categoria[]> {
    return this.categoriasService.buscarTodos();
  }
}
