import { SafeResourceUrl } from "@angular/platform-browser";

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
