import { TestBed, inject } from '@angular/core/testing';

import { TkDownloadService } from './tk-download.service';

describe('TkDownloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TkDownloadService]
    });
  });

  it('should be created', inject([TkDownloadService], (service: TkDownloadService) => {
    expect(service).toBeTruthy();
  }));
});
