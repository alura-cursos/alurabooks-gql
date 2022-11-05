import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
} from '@nestjs/graphql';
import { Carrinho } from '../models/carrinho.model';
import { CarrinhoService } from '../services/carrinho.service';

@InputType()
export class ItemCarrinhoInput {
  @Field()
  livroId: number;
  @Field()
  opcaoCompraId: number;
  @Field({ nullable: true })
  quantidade?: number;
}

@Resolver((of) => Carrinho)
export class CarrinhoResolver {
  constructor(private carrinhoService: CarrinhoService) {}

  @Query((returns) => Carrinho)
  async carrinho(): Promise<Carrinho> {
    return this.carrinhoService.buscar();
  }

  @Mutation((returns) => Boolean)
  async adicionarItem(@Args('item') item: ItemCarrinhoInput) {
    await this.carrinhoService.adicionar(item);
    return true;
  }

  @Mutation((returns) => Boolean)
  async removerItem(@Args('item') item: ItemCarrinhoInput) {
    await this.carrinhoService.remover(item);
    return true;
  }
}
