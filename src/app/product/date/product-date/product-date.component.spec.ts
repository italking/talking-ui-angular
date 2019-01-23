import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDateComponent } from './product-date.component';

describe('ProductDateComponent', () => {
  let component: ProductDateComponent;
  let fixture: ComponentFixture<ProductDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
