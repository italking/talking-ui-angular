import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkHighlightComponent } from './tk-highlight.component';

describe('TkHighlightComponent', () => {
  let component: TkHighlightComponent;
  let fixture: ComponentFixture<TkHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
