import { Component } from '@angular/core';
import { LessonService } from '../services/lessons/lesson.service';
import { Lesson } from '../shared/models/Lesson';
import { pipe } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  lessons: Lesson[] = [];

  constructor(private imageProvider: LessonService,private domSanitizer:DomSanitizer) {}

  ngOnInit(): void {
//    this.lessons = this.imageProvider.getAll();
    this.imageProvider.getAllLesson().subscribe(
      res =>{
        this.lessons = res;
        this.lessons.forEach(video =>{
          video.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl(video.embeded);
        });
        console.log(this.lessons);
      }
    );
  }
}
