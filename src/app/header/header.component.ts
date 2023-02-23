import { Component, OnInit } from '@angular/core';
import { UsuarioGuard } from '../autentication/autentication.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private guard:UsuarioGuard){}

  admin:boolean=false;
  usuarioLogado:string = "";

  ngOnInit(): void {    
    this.VerificarUsuario();
    this.ehAdmin();
  }

  VerificarUsuario(){
   let usuarioLogado = localStorage.getItem('nome');

   if(usuarioLogado == null){
    this.usuarioLogado = "Não foi possível identificar o usuário"
   }else{
    this.usuarioLogado = usuarioLogado;
   }
  }

  ehAdmin(){
    this.admin = this.guard.VerificarAdministrador();
  }

  logoff(){
    localStorage.clear();
  }
}
