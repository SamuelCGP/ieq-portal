import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/Course';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient : HttpClient) { }

  email:any = localStorage.getItem('email');

  ObterCursos():Observable<Course[]>{
    return this.httpClient.post<Course[]>(`http://localhost:5087/api/Curso/ObterCursosDashboard?email=${this.email}`,"");
  }

}
