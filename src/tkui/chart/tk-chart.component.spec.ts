import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkChartComponent } from './tk-chart.component';

describe('TkChartComponent', () => {
  let component: TkChartComponent;
  let fixture: ComponentFixture<TkChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
