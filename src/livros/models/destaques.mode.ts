import { Field, ObjectType } from '@nestjs/graphql';
import { Livro } from './livro.model';

@ObjectType()
export class Destaques {
  @Field((type) => [Livro])
  lancamentos: Livro[];
  @Field((type) => [Livro])
  maisVendidos: Livro[];
}
