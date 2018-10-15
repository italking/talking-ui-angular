import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkMultiselectInfoComponent } from './tk-multiselect-info.component';

describe('TkMultiselectInfoComponent', () => {
  let component: TkMultiselectInfoComponent;
  let fixture: ComponentFixture<TkMultiselectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkMultiselectInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkMultiselectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
