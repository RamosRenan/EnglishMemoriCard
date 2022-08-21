import { TestBed } from '@angular/core/testing';

import { RegistryWordJserverService } from './registry-word-jserver.service';

describe('RegistryWordJserverService', () => {
  let service: RegistryWordJserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistryWordJserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
