import { Injectable } from '@nestjs/common';
import { http } from 'src/common/http';
import { Autor } from '../models/autor.model';

@Injectable()
export class AutoresService {
  async buscarTodos() {
    const response = await http.get<Autor[]>('/autores');
    return response.data;
  }
  async buscarPorId(id: number) {
    const response = await http.get<Autor>(`/autores/${id}`);
    return response.data;
  }
}
