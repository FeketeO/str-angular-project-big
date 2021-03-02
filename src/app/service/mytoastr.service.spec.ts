import { TestBed } from '@angular/core/testing';

import { MytoastrService } from './mytoastr.service';

describe('MytoastrService', () => {
  let service: MytoastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytoastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
