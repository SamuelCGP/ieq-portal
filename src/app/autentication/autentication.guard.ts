import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/storage/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  
  constructor(private jwtHelper:JwtHelperService, 
              private storage:LocalStorageService, 
              private router:Router){}

  canActivate(): boolean
    {
      const token:any = this.storage.getToken(); 
         
      if(token && !this.jwtHelper.isTokenExpired(token))
      {
       return true; 
      }
      this.router.navigate(['/login']);
      return false;
    }

    VerificarAdministrador():boolean{
      const token:any = this.storage.getToken();
      const perfil:any = this.jwtHelper.decodeToken(token);

      if(perfil.role == "admin"){
        return true;
      }else{
        return false;
      }
    }

}
