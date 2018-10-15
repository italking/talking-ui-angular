import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkChartInfoComponent } from './tk-chart-info.component';

describe('TkChartInfoComponent', () => {
  let component: TkChartInfoComponent;
  let fixture: ComponentFixture<TkChartInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkChartInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkChartInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
