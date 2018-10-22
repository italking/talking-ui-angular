import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkSortHeaderComponent } from './tk-sort-header.component';

describe('TkSortHeaderComponent', () => {
  let component: TkSortHeaderComponent;
  let fixture: ComponentFixture<TkSortHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkSortHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkSortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
