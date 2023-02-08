import { Component } from '@angular/core';
import { ImageProviderService } from '../services/lessons/image-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  lessons: String[] = [];

  constructor(private imageProviderService: ImageProviderService) {}

  ngOnInit(): void {
    this.lessons = this.imageProviderService.getAll();
  }
}
