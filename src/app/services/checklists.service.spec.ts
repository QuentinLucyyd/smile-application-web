import { TestBed } from '@angular/core/testing';

import { ChecklistsService } from './checklists.service';

describe('ChecklistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChecklistsService = TestBed.get(ChecklistsService);
    expect(service).toBeTruthy();
  });
});
