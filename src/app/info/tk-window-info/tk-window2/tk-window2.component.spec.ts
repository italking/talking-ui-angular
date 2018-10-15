import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkWindow2Component } from './tk-window2.component';

describe('TkWindow2Component', () => {
  let component: TkWindow2Component;
  let fixture: ComponentFixture<TkWindow2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkWindow2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkWindow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
