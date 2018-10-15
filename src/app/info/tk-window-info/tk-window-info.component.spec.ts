import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkWindowInfoComponent } from './tk-window-info.component';

describe('TkWindowInfoComponent', () => {
  let component: TkWindowInfoComponent;
  let fixture: ComponentFixture<TkWindowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkWindowInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkWindowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
