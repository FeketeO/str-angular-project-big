import { TestBed } from '@angular/core/testing';

import { CustomersortingService } from './customersorting.service';

describe('CustomersortingService', () => {
  let service: CustomersortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
