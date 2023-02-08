import { Component } from '@angular/core';
import { LessonService } from '../services/lessons/lesson.service';
import { Lesson } from '../shared/models/Lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  lessons: Lesson[] = [];

  constructor(private imageProvider: LessonService) {}

  ngOnInit(): void {
    this.lessons = this.imageProvider.getAll();
  }
}
