import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Lesson } from 'src/app/shared/models/Lesson';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root',
})

export class LessonService {

  apiUrl : string  = environment.apiUrl;

  constructor(private httpCliente : HttpClient) {}

  //TODO: Instalar o Json-Server para Consumir o Json
  //Comando para executar o Json-Server
  //json-server --watch db.json
  getAllVideo() : Observable<Lesson[]>
  {
   return this.httpCliente.get<Lesson[]>(this.apiUrl)  
  }

  getAll(): Lesson[] {
    // TODO: Make the info come from the server

    return [
      {
        id: 1,
        name: 'A Espada e o Louvor',
        description: 'Devocional - Pra. Talita Jardini',
        watched: false,
        imageUrl: '/assets/images/lessons/a_espada_e_o_louvor.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=2GEzZKHWhIU',
      },
      {
        id: 2,
        name: 'O Apóstolo Invisível',
        description: 'Devocional - Pr. José Cândido',
        watched: false,
        imageUrl: '/assets/images/lessons/o_apostolo_invisivel.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=Xyhm8CtNqJU',
      },
      {
        id: 3,
        name: 'Vendo, mas não enxergando',
        description: 'Devocional - Pra. Marisa Ghizellini',
        watched: false,
        imageUrl: '/assets/images/lessons/vendo_mas_nao_enxergando.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=P-fd9Qw6KUY',
      },
    ];
  }
}
