import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean
    {
    return this.CapturarEmail();
  }

  CapturarEmail():boolean{
    const usuario = localStorage.getItem('email');
    if(usuario !== null){
      return true;
    }
    return false;
  }
  
}
