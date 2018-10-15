import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWindowComponent } from './product-window.component';

describe('ProductWindowComponent', () => {
  let component: ProductWindowComponent;
  let fixture: ComponentFixture<ProductWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
