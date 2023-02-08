import { Component } from '@angular/core';
import { LessonImageService } from '../services/lessons/lesson-image.service';
import { Lesson } from '../shared/models/Lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  lessons: Lesson[] = [];

  constructor(private imageProvider: LessonImageService) {}

  ngOnInit(): void {
    this.lessons = this.imageProvider.getAll();
  }
}
