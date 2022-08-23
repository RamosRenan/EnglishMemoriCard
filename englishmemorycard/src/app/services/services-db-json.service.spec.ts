import { TestBed } from '@angular/core/testing';

import { ServicesDbJsonService } from './services-db-json.service';

describe('ServicesDbJsonService', () => {
  let service: ServicesDbJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesDbJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
