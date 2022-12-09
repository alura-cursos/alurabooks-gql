import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { http } from 'src/common/http';
import { Destaques } from '../models/destaques.mode';
import { Livro } from '../models/livro.model';
import { Tag } from '../models/tag.model';

@Injectable()
export class LivrosService {
  async buscarDestaques(): Promise<Destaques> {
    const lancamentos = await http.get('/public/lancamentos');
    const maisVendidos = await http.get('/public/mais-vendidos');
    return {
      lancamentos: lancamentos.data,
      maisVendidos: maisVendidos.data,
    };
  }
  async buscarTodos(titulo?: string, categoriaId?: number) {
    const config: AxiosRequestConfig = {};
    if (categoriaId > 0) {
      config.params = {
        categoriaId,
      };
    }
    const { data: livros } = await http.get<Livro[]>('/livros', config);
    if (titulo) {
      return livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(titulo.toLowerCase()),
      );
    }
    return livros;
  }
  async buscarPorId(id: number) {
    const response = await http.get<Livro>(`/livros/${id}`);
    return response.data;
  }
  async buscarPorSlug(slug: string) {
    const response = await http.get<Livro[]>(`/livros`, {
      params: {
        slug,
      },
    });
    if (response.data.length) {
      return response.data[0];
    }
    return null;
  }
  async buscarTagsDo(livro: Livro): Promise<Tag[]> {
    const { data: todasAsTags } = await http.get<Tag[]>('tags');
    return todasAsTags.filter((tag) => livro.tagIds.includes(tag.id));
  }
}
