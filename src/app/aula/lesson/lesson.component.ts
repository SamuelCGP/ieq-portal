import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AulaSignature, Aulas } from '../../shared/models/Lesson';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '../service/lessons/lesson.service';
import { QuestionarioService } from '../service/Questionario/questionario.service';
import { InformacoesAulaService } from '../service/informacoes-aula.service';
import { AulaDto } from '../model/aulaDto';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  constructor(
    private comunicacao : InformacoesAulaService,
    private sanitizer:DomSanitizer,
              private activatedRouter:ActivatedRoute,
              private lessonService : LessonService,
              private questionarioService : QuestionarioService,
              private router : Router
              ){}

  aulaDto = new AulaDto();

  exibirConteudo:boolean = false;
  aulaSelecionada = new Aulas();
  aulaSignature = new AulaSignature();
  aulas : Aulas[]=[]

  cursoId:any;
  aulaId:any;
  
  urlSafe : SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/");

  ngOnInit(): void {  
  //parametros da rota para consultar as aulas
  this.cursoId = this.activatedRouter.snapshot.paramMap.get("cursoId")
  this.aulaId = this.activatedRouter.snapshot.paramMap.get("id");

   //assinatura do serviço de aulas
  this.aulaSignature.cursoId = this.cursoId;
  this.lessonService.getAulas(this.aulaSignature).subscribe(response => {
  if(response.length == 0){
    this.exibirConteudo = false;
    this.router.navigate(["/construcao"]);
  }
  this.exibirConteudo = true;
  this.aulas = response;            
  response.filter(aula => aula.numero == this.aulaId).map(x =>{
    this.aulaSelecionada.id = x.id;
    this.aulaSelecionada.cursoId = x.cursoId;
    this.aulaSelecionada.descricao = x.descricao;
    this.aulaSelecionada.titulo = x.titulo;
    this.aulaSelecionada.url = x.url;
    this.aulaDto.Descricao = x.descricao;
    this.aulaDto.Titulo = x.titulo;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${x.url}`);
    this.comunicacao.mensagem.emit(this.aulaDto);
  });
  })
}
  Aula(id:any){
    let aulaSelecionada = this.aulas.filter(x => x.numero == id);
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${aulaSelecionada[0].url}`)
    this.aulaSelecionada.titulo , this.aulaDto.Titulo = aulaSelecionada[0].titulo;
    this.aulaSelecionada.descricao , this.aulaDto.Descricao = aulaSelecionada[0].descricao;    
    this.comunicacao.mensagem.emit(this.aulaDto);
  }
}
