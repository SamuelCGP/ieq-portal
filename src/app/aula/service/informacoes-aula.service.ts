import { EventEmitter, Injectable } from '@angular/core';
import { AulaDto } from '../model/aulaDto';

@Injectable({
  providedIn: 'root'
})
export class InformacoesAulaService {
  mensagem = new EventEmitter<AulaDto>();

  enviarMensagem(aulaDto: AulaDto) {
    this.mensagem.emit(aulaDto);
  }
}
