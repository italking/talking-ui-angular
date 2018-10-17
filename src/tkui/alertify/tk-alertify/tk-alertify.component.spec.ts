import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkAlertifyComponent } from './tk-alertify.component';

describe('TkAlertifyComponent', () => {
  let component: TkAlertifyComponent;
  let fixture: ComponentFixture<TkAlertifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkAlertifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkAlertifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
