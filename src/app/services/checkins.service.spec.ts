import { TestBed } from '@angular/core/testing';

import { CheckinsService } from './checkins.service';

describe('CheckinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckinsService = TestBed.get(CheckinsService);
    expect(service).toBeTruthy();
  });
});
