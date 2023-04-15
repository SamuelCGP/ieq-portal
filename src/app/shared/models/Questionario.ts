export class QuestionarioSignature{
    aulaId!:number;
}

export class QuestionarioDto{
    titulo!:string;
    descricao:string = "";
    tamanho!:number;
    questionario!:QuestionarioResult[];
}

export class QuestionarioResult{
    aulaId!:number;
    pergunta!:string;
    numero!:number;
}