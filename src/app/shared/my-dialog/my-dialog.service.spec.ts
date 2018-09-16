import { TestBed, inject } from '@angular/core/testing';

import { MyDialogService } from './my-dialog.service';

describe('MyDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyDialogService]
    });
  });

  it('should be created', inject([MyDialogService], (service: MyDialogService) => {
    expect(service).toBeTruthy();
  }));
});
