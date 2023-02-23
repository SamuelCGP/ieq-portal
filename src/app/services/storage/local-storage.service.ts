import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/login';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  setEmail(email :string){
    localStorage.setItem('email',email)
  }

  setNome(nome : string){
    localStorage.setItem('nome',nome);
  }
  
  get(key:string){
    localStorage.getItem(key)
  }

  getToken():any{
   let token = localStorage.getItem('token');
   return token;
  }

  clear(){
    localStorage.clear();
  }

}
