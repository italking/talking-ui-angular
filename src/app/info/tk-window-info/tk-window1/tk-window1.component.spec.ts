import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkWindow1Component } from './tk-window1.component';

describe('TkWindow1Component', () => {
  let component: TkWindow1Component;
  let fixture: ComponentFixture<TkWindow1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkWindow1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkWindow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
