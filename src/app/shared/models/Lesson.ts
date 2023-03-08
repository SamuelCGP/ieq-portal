import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

export class Lesson {
  id!: number;
  name!: string;
  description?: string;
  watched!: boolean;
  imagem!: string;
  video!: string;
  titulo!:string;
  embeded!:string;
  urlSafe!:SafeResourceUrl
}

export class Aulas {
  id!: number
  cursoId!: number
  titulo?: string
  descricao?: string
  url: string = "";
  numero?: number;
  urlSafe!:SafeResourceUrl;
}

export class AulaSignature{
  cursoId!:number;
}
