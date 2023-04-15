import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionarioResult, QuestionarioSignature } from '../shared/models/Questionario';
import { QuestionarioService } from '../services/Questionario/questionario.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit{

  constructor(private questionarioService : QuestionarioService) {
      
  }

  questionarioSignature = new QuestionarioSignature();
  questionarioResult : QuestionarioResult[]=[]

  formulario1:any;
  formulario2:any;
  formulario3:any;
  formulario4:any;

  exibirFormulario1:boolean =false;
  exibirFormulario2:boolean =false;
  exibirFormulario3:boolean =false;
  exibirFormulario4:boolean =false;

  ngOnInit(): void {  
    this.questionarioSignature.aulaId = 1;
    this.questionarioService.ObterQuestionario(this.questionarioSignature).subscribe(x =>{
      this.questionarioResult = x;      
      this.ObterFormulario(this.questionarioResult.length);
    })
  }

  ObterFormulario(size:number){
    if(size == 1){
      this.ExibirFormulario1();
      this.formulario1 = new FormGroup({
        respostaUm : new FormControl('')
      });

    }
    if(size == 2){
      this.ExibirFormulario2();
      this.formulario2 = new FormGroup({
        respostaUm : new FormControl(''),
        respostaDois: new FormControl('')
      });
    }
    if(size == 3){
      this.ExibirFormulario3();
      this.formulario3 = new FormGroup({
        respostaUm : new FormControl(''),
        respostaDois: new FormControl(''),
        respostaTres: new FormControl('')
      });
    }
    if(size == 4){
      this.ExibirFormulario4();
      this.formulario4 = new FormGroup({
        respostaUm : new FormControl(''),
        respostaDois: new FormControl(''),
        respostaTres: new FormControl(''),
        respostaQuatro:new FormControl('')
      });      
    }

  }

  ExibirFormulario1(){
    this.exibirFormulario1 = true;
    this.exibirFormulario2 = false;
    this.exibirFormulario3 = false;
    this.exibirFormulario4 = false;
  }
  ExibirFormulario2(){
    this.exibirFormulario1 = false;
    this.exibirFormulario2 = true;
    this.exibirFormulario3 = false;
    this.exibirFormulario4 = false;
  }
  ExibirFormulario3(){
    this.exibirFormulario1 = false;
    this.exibirFormulario2 = false;
    this.exibirFormulario3 = true;
    this.exibirFormulario4 = false;
  }
  ExibirFormulario4(){
    this.exibirFormulario1 = false;
    this.exibirFormulario2 = false;
    this.exibirFormulario3 = false;
    this.exibirFormulario4 = true;
  }


}
