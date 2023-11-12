import { TestBed } from '@angular/core/testing';

import { StationNamesService } from './station-names.service';

describe('StationNamesService', () => {
  let service: StationNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
