import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkDatePickerComponent } from './tk-date-picker.component';

describe('TkDatePickerComponent', () => {
  let component: TkDatePickerComponent;
  let fixture: ComponentFixture<TkDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
