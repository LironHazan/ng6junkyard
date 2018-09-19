import { TestBed, inject } from '@angular/core/testing';

import { UsersFiltersService } from './users-filters.service';

describe('UsersFiltersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersFiltersService]
    });
  });

  it('should be created', inject([UsersFiltersService], (service: UsersFiltersService) => {
    expect(service).toBeTruthy();
  }));
});
