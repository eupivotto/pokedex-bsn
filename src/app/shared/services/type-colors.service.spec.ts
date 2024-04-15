import { TestBed } from '@angular/core/testing';

import { TypeColorsService } from './type-colors.service';

describe('TypeColorsService', () => {
  let service: TypeColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
