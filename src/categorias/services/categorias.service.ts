import { Injectable } from '@nestjs/common';
import { http } from 'src/common/http';

@Injectable()
export class CategoriasService {
  async buscarTodos() {
    const response = await http.get('/categorias');
    return response.data;
  }
  async buscarPorId(id: number) {
    const response = await http.get(`/categorias/${id}`);
    return response.data;
  }
}
