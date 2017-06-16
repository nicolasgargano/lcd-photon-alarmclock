import { TestBed, inject } from '@angular/core/testing';

import { ParticleService } from './partice-service';

describe('ParticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticleService]
    });
  });

  it('should ...', inject([ParticleService], (service: ParticleService) => {
    expect(service).toBeTruthy();
  }));
});
