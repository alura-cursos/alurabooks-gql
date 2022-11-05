import { Module } from '@nestjs/common';
import { LivrosModule } from '../livros/livros.module';
import { CarrinhoResolver } from './resolvers/carrinho.resolver';
import { CarrinhoService } from './services/carrinho.service';

@Module({
  providers: [CarrinhoService, CarrinhoResolver],
  imports: [LivrosModule],
})
export class CarrinhoModule {}
