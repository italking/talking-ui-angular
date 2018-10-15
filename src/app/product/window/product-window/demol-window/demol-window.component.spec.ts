import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemolWindowComponent } from './demol-window.component';

describe('DemolWindowComponent', () => {
  let component: DemolWindowComponent;
  let fixture: ComponentFixture<DemolWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemolWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemolWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
