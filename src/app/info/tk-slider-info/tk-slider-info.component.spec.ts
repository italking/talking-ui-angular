import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkSliderInfoComponent } from './tk-slider-info.component';

describe('TkSliderInfoComponent', () => {
  let component: TkSliderInfoComponent;
  let fixture: ComponentFixture<TkSliderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkSliderInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkSliderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
