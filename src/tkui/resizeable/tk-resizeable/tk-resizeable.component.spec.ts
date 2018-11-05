import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkResizeableComponent } from './tk-resizeable.component';

describe('TkResizeableComponent', () => {
  let component: TkResizeableComponent;
  let fixture: ComponentFixture<TkResizeableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkResizeableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkResizeableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
