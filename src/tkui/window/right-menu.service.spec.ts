import { TestBed, inject } from '@angular/core/testing';

import { RightMenuService } from './right-menu.service';

describe('RightMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightMenuService]
    });
  });

  it('should be created', inject([RightMenuService], (service: RightMenuService) => {
    expect(service).toBeTruthy();
  }));
});
