import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkConfirmComponent } from './tk-confirm.component';

describe('TkConfirmComponent', () => {
  let component: TkConfirmComponent;
  let fixture: ComponentFixture<TkConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
