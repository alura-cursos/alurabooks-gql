import { Field, Int, ObjectType } from '@nestjs/graphql';
import { OpcaoCompra } from './opcao-compra.model';
import { Tag } from './tag.model';
@ObjectType()
export class Livro {
  @Field((type) => Int)
  id: number;
  @Field((type) => Int)
  autorId: number;
  @Field((type) => Int)
  categoriaId: number;
  @Field((type) => String)
  titulo: string;
  @Field((type) => String)
  slug: string;
  @Field((type) => String)
  descricao: string;
  @Field((type) => String)
  isbn: string;
  @Field((type) => Number)
  numeroPaginas: number;
  @Field((type) => String)
  publicacao: string;
  @Field((type) => String)
  imagemCapa: string;
  @Field((type) => String)
  sobre: string;
  @Field((type) => [OpcaoCompra])
  opcoesCompra: OpcaoCompra[];
  tagIds: number[];
  @Field((type) => [Tag])
  tags: Tag[];
}
