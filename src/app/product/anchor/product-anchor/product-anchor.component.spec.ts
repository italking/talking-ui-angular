import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAnchorComponent } from './product-anchor.component';

describe('ProductAnchorComponent', () => {
  let component: ProductAnchorComponent;
  let fixture: ComponentFixture<ProductAnchorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAnchorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
