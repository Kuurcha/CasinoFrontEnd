import { TestBed } from '@angular/core/testing';

import { CasinoBuildingService } from './casino-building.service';

describe('CasinoBuildingService', () => {
  let service: CasinoBuildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasinoBuildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
