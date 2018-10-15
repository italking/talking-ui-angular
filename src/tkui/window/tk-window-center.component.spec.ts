import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkWindowCenterComponent } from './tk-window-center.component';

describe('TkWindowCenterComponent', () => {
  let component: TkWindowCenterComponent;
  let fixture: ComponentFixture<TkWindowCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkWindowCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkWindowCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
