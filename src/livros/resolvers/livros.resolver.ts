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
import { Livro } from '../models/livro.model';
import { LivrosService } from '../services/livros.service';
import { Tag } from '../models/tag.model';
import { Destaques } from '../models/destaques.mode';

@Resolver((of) => Livro)
export class LivrosResolver {
  constructor(
    private autoresService: AutoresService,
    private livrosService: LivrosService,
  ) {}

  @Query((returns) => [Livro])
  async livros(
    @Args('titulo', { type: () => String, nullable: true }) titulo: string,
    @Args('categoriaId', { type: () => Int, nullable: true })
    categoriaId: number,
  ): Promise<Livro[]> {
    return this.livrosService.buscarTodos(titulo, categoriaId);
  }

  @Query((returns) => Livro)
  async livro(
    @Args('slug', { type: () => String, nullable: false }) slug: string,
  ): Promise<Livro> {
    return this.livrosService.buscarPorSlug(slug);
  }

  @Query((returns) => Destaques)
  async destaques(): Promise<Destaques> {
    return this.livrosService.buscarDestaques();
  }

  @ResolveField('autor', (returns) => Autor)
  async autor(@Parent() livro: Livro): Promise<Autor> {
    const { autorId } = livro;
    return this.autoresService.buscarPorId(autorId);
  }

  @ResolveField('tags', (returns) => [Tag])
  async tags(@Parent() livro: Livro): Promise<Tag[]> {
    return this.livrosService.buscarTagsDo(livro);
  }
}
