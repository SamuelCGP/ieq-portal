import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Lesson } from '../shared/models/Lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer){}
  ngOnInit(): void {
    this.getIframe();
  }


  urlIFrame1: string = "https://www.youtube.com/embed/2sMczd9fpUE";
  urlIFrame2: string ="https://www.youtube.com/embed/5HeQJ28Bdv8"
  urlSafe1!:SafeResourceUrl;
  urlSafe2!:SafeResourceUrl;



  getIframe(){    
    this.urlSafe1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlIFrame1);
    this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlIFrame2);
  }
}
