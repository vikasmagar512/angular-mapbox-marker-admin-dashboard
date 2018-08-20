import { TestBed, inject } from '@angular/core/testing';

import { CanActivateRoutesService } from './can-activate-routes.service';

describe('CanActivateRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateRoutesService]
    });
  });

  it('should be created', inject([CanActivateRoutesService], (service: CanActivateRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
