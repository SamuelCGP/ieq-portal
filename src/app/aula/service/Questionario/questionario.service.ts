import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionarioResult, QuestionarioSignature } from 'src/app/shared/models/Questionario';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor(private httpClient : HttpClient) { }

  ObterQuestionario(questionario:QuestionarioSignature):Observable<QuestionarioResult[]>{
    return this.httpClient.post<QuestionarioResult[]>("http://localhost:5087/api/Questionario/ObterQuestionarioPorAula",questionario);
  }
}
