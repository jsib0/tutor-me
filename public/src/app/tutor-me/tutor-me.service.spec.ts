import { TestBed, inject } from '@angular/core/testing';

import { TutorMeService } from './tutor-me.service';

describe('TutorMeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorMeService]
    });
  });

  it('should be created', inject([TutorMeService], (service: TutorMeService) => {
    expect(service).toBeTruthy();
  }));
});
