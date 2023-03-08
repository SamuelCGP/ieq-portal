import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/models/Lesson';
import { Course } from '../shared/models/Course';
import { CursosService } from '../services/cursos/cursos.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

  constructor(private http:CursosService) {}

  cursos:Course[] =[]

  ngOnInit(): void {
    this.http.ObterCursos().subscribe(x =>{
      this.cursos=(x);
      console.log(x);
    })
  }

  
}
