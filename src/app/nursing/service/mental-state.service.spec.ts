import { TestBed } from '@angular/core/testing';

import { MentalStateService } from './mental-state.service';

describe('MentalStateService', () => {
  let service: MentalStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
