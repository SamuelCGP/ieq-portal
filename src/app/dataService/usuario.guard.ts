import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

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
