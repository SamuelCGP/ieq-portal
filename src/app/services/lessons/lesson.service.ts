import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Lesson } from 'src/app/shared/models/Lesson';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  constructor(private httpClient : HttpClient) {}

  getAllLesson() : Observable<Lesson[]>{
    return this.httpClient.get<Lesson[]>('http://localhost:5087/api/YouTube/ObterVideos');
  }
    
}
