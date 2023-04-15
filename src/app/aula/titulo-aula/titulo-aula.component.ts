import { Component } from '@angular/core';
import { InformacoesAulaService } from '../service/informacoes-aula.service';
import { AulaDto } from '../model/aulaDto';

@Component({
  selector: 'app-titulo-aula',
  templateUrl: './titulo-aula.component.html',
  styleUrls: ['./titulo-aula.component.scss']
})
export class TituloAulaComponent {

  aulaDto = new AulaDto();

  constructor(private comunicacao: InformacoesAulaService) {
    this.comunicacao.mensagem.subscribe((mensagem: AulaDto) => {
      this.aulaDto = mensagem;
    });
  }
  
}
