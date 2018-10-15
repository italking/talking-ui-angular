import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkWindow3Component } from './tk-window3.component';

describe('TkWindow3Component', () => {
  let component: TkWindow3Component;
  let fixture: ComponentFixture<TkWindow3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkWindow3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkWindow3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
