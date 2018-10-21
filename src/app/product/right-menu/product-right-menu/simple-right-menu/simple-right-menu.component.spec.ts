import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRightMenuComponent } from './simple-right-menu.component';

describe('SimpleRightMenuComponent', () => {
  let component: SimpleRightMenuComponent;
  let fixture: ComponentFixture<SimpleRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
