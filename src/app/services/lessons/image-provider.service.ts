import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageProviderService {
  constructor() {}

  getAll(): String[] {
    return [
      '/assets/images/lessons/a_espada_e_o_louvor.jpg',
      '/assets/images/lessons/o_apostolo_invisivel.jpg',
      '/assets/images/lessons/vendo_mas_nao_enxergando.jpg',
    ];
  }
}
