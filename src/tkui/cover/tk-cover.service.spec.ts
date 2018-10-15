import { TestBed, inject } from '@angular/core/testing';

import { TkCoverService } from './tk-cover.service';

describe('TkCoverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TkCoverService]
    });
  });

  it('should be created', inject([TkCoverService], (service: TkCoverService) => {
    expect(service).toBeTruthy();
  }));
});
