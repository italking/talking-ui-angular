import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkWindow4Component } from './tk-window4.component';

describe('TkWindow4Component', () => {
  let component: TkWindow4Component;
  let fixture: ComponentFixture<TkWindow4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkWindow4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkWindow4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
