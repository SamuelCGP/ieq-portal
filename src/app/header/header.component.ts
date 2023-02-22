import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  usuarioLogado:string = "";

  ngOnInit(): void {    
    this.VerificarUsuario();
  }

  VerificarUsuario(){
   let usuarioLogado = localStorage.getItem('email');

   if(usuarioLogado == null){
    this.usuarioLogado = "Não foi possível identificar o usuário"
   }else{
    this.usuarioLogado = usuarioLogado;
   }
  }

  logoff(){
    localStorage.clear();
  }
}
