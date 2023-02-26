import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/models/Lesson';
import { Course } from '../shared/models/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

  cursos:Course[] =[]


  ngOnInit(): void {
    this.ObterCursos();
  }

  ObterCursos(){
    this.cursos.push(
      {
        Id:1,
        Titulo:"Escola Bíblica",
        Imagem:"../assets/images/courses/escola-biblica.png"
      }
      ,
      {
        Id:2,
        Titulo:"Escola de Música",
        Imagem:"../assets/images/courses/escola-musica.png"
      }
      ,
      {
        Id:3,
        Titulo:"Devocional",
        Imagem:"../assets/images/courses/devocional.png"
      }
      ,
      {
        Id:4,
        Titulo:"Curso com nome muito grande",
        Imagem:"../assets/images/courses/escola-biblica.png"
      }
    )
  }
}
