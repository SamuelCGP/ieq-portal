import { Component } from '@angular/core';
import { InformacoesAulaService } from './service/informacoes-aula.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.scss']
})
export class AulaComponent {

  constructor(private comunicacao: InformacoesAulaService) {
    this.comunicacao.mensagem.subscribe((mensagem: string) => {
  
      console.log('aula component',mensagem);
    });
  }

}
