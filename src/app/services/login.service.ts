import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../shared/models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  Login(login : Login):Observable<Login>{
    return this.httpClient.post<Login>('http://localhost:5087/api/Login/Logar',login)
  }
}
