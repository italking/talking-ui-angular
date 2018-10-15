import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkTabInfoComponent } from './tk-tab-info.component';

describe('TkTabInfoComponent', () => {
  let component: TkTabInfoComponent;
  let fixture: ComponentFixture<TkTabInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkTabInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkTabInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
