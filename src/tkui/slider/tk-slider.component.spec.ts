import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkSliderComponent } from './tk-slider.component';

describe('TkSliderComponent', () => {
  let component: TkSliderComponent;
  let fixture: ComponentFixture<TkSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
