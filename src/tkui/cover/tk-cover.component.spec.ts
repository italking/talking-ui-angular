import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkCoverComponent } from './tk-cover.component';

describe('TkCoverComponent', () => {
  let component: TkCoverComponent;
  let fixture: ComponentFixture<TkCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
