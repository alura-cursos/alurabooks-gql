import { Injectable } from '@nestjs/common';
import { http } from 'src/common/http';
import { LivrosService } from '../../livros/services/livros.service';
import { Carrinho } from '../models/carrinho.model';
import { ItemCarrinhoInput } from '../resolvers/carrinho.resolver';

@Injectable()
export class CarrinhoService {
  constructor(private livrosService: LivrosService) {}

  async obterCarrinho() {
    const { data: carrinho } = await http.get<Carrinho>('/carrinhos/1');
    if (!carrinho.itens) {
      carrinho.itens = [];
    }
    return carrinho;
  }

  async buscar() {
    const carrinho = await this.obterCarrinho();
    await Promise.all(
      carrinho.itens.map(async (item) => {
        item.livro = await this.livrosService.buscarPorId(item.livroId);
        const opcao = item.livro.opcoesCompra.find(
          (op) => op.id == item.opcaoCompraId,
        );
        item.opcaoCompra = opcao;
      }),
    );
    carrinho.total = 0;
    if (carrinho.itens) {
      carrinho.total = carrinho.itens.reduce((acumulado, item) => {
        return acumulado + item.quantidade * item.opcaoCompra.preco;
      }, 0);
    }
    return carrinho;
  }
  async adicionar(item: ItemCarrinhoInput) {
    const carrinho = await this.obterCarrinho();

    if (!Number.isInteger(item.quantidade)) {
      item.quantidade = 1;
    }

    const itemNoCarrinho = carrinho.itens.find(
      (it) =>
        it.livroId == item.livroId && it.opcaoCompraId == item.opcaoCompraId,
    );
    if (itemNoCarrinho) {
      itemNoCarrinho.quantidade = item.quantidade;
    } else {
      carrinho.itens.push({
        ...item,
        quantidade: item.quantidade,
      });
    }
    await http.put('carrinhos/1', carrinho);
  }
  async remover(item: ItemCarrinhoInput) {
    const carrinho = await this.buscar();
    const idx = carrinho.itens.findIndex(
      (it) =>
        it.livroId == item.livroId && it.opcaoCompraId == item.opcaoCompraId,
    );
    if (idx >= 0) {
      carrinho.itens.splice(idx, 1);
      await http.put('carrinhos/1', carrinho);
    }
  }
}
