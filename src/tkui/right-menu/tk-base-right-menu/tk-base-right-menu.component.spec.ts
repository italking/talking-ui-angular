import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkBaseRightMenuComponent } from './tk-base-right-menu.component';

describe('TkBaseRightMenuComponent', () => {
  let component: TkBaseRightMenuComponent;
  let fixture: ComponentFixture<TkBaseRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkBaseRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkBaseRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
