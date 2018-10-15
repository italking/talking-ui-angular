import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkWindowComponent } from './tk-window.component';

describe('TkWindowComponent', () => {
  let component: TkWindowComponent;
  let fixture: ComponentFixture<TkWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
