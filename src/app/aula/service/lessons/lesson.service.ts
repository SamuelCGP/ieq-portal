import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { AulaSignature, Aulas, Lesson } from '../../../shared/models/Lesson';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  constructor(private httpClient : HttpClient) {}

  getAllLesson(aulaSignature : AulaSignature) : Observable<Lesson[]>{
    return this.httpClient.get<Lesson[]>('http://localhost:5087/api/YouTube/ObterVideos');
  }
  
  getAulas(aulaSignature:AulaSignature):Observable<Aulas[]>
  {
    return this.httpClient.post<Aulas[]>('http://localhost:5087/api/Aula/ObterAulas',aulaSignature);
  }
}
