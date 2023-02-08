import { TestBed } from '@angular/core/testing';

import { LessonImageService } from './lesson-image.service';

describe('ImageProviderService', () => {
  let service: LessonImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
