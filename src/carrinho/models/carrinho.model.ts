import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemCarrinho } from './item-carrinho.model';
@ObjectType()
export class Carrinho {
  @Field((type) => Number)
  total: number;
  @Field((type) => [ItemCarrinho])
  itens: ItemCarrinho[];
}
