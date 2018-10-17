import { TestBed, inject } from '@angular/core/testing';

import { TkAlertifyService } from './tk-alertify.service';

describe('TkAlertifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TkAlertifyService]
    });
  });

  it('should be created', inject([TkAlertifyService], (service: TkAlertifyService) => {
    expect(service).toBeTruthy();
  }));
});
