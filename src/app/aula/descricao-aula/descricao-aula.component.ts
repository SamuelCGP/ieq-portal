import { Component } from '@angular/core';
import { InformacoesAulaService } from '../service/informacoes-aula.service';
import { AulaDto } from '../model/aulaDto';

@Component({
  selector: 'app-descricao-aula',
  templateUrl: './descricao-aula.component.html',
  styleUrls: ['./descricao-aula.component.scss']
})
export class DescricaoAulaComponent {

  aulaDto = new AulaDto();

  constructor(private comunicacao: InformacoesAulaService) {
    this.comunicacao.mensagem.subscribe((mensagem: AulaDto) => {
      this.aulaDto = mensagem;
      console.log('descricao aula',mensagem.Descricao);
    });
  }

}
