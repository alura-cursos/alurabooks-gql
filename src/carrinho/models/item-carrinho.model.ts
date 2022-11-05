import { Field, ObjectType } from '@nestjs/graphql';
import { OpcaoCompra } from 'src/livros/models/opcao-compra.model';
import { Livro } from '../../livros/models/livro.model';
@ObjectType()
export class ItemCarrinho {
  @Field((type) => Number)
  quantidade: number;
  @Field((type) => Number)
  livroId: number;
  @Field((type) => Number)
  opcaoCompraId: number;
  @Field((type) => OpcaoCompra)
  opcaoCompra?: OpcaoCompra;
  @Field((type) => Livro)
  livro?: Livro;
}
