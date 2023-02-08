import { Injectable } from '@angular/core';
import { Lesson } from 'src/app/shared/models/Lesson';

@Injectable({
  providedIn: 'root',
})
export class LessonImageService {
  constructor() {}

  getAll(): Lesson[] {
    // TODO: Make the images come from the server

    return [
      {
        id: 1,
        name: 'A Espada e o Louvor',
        watched: false,
        imageUrl: '/assets/images/lessons/a_espada_e_o_louvor.jpg',
      },
      {
        id: 2,
        name: 'O Apóstolo Invisível',
        watched: false,
        imageUrl: '/assets/images/lessons/o_apostolo_invisivel.jpg',
      },
      {
        id: 3,
        name: 'Vendo, mas não enxergando',
        watched: false,
        imageUrl: '/assets/images/lessons/vendo_mas_nao_enxergando.jpg',
      },
    ];
  }
}
