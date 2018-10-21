import { TestBed, inject } from '@angular/core/testing';

import { TkRightMenuService } from './tk-right-menu.service';

describe('RightMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TkRightMenuService]
    });
  });

  it('should be created', inject([TkRightMenuService], (service: TkRightMenuService) => {
    expect(service).toBeTruthy();
  }));
});
