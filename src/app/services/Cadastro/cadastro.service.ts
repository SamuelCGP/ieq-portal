import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from 'src/app/shared/models/Cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient : HttpClient) { }

  postCadastro(cadastro : Cadastro):Observable<Cadastro>{
    return this.httpClient.post<Cadastro>('http://localhost:5087/api/Cadastro/Inserir',cadastro);
  }
}
