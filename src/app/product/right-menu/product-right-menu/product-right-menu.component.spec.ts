import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRightMenuComponent } from './product-right-menu.component';

describe('ProductRightMenuComponent', () => {
  let component: ProductRightMenuComponent;
  let fixture: ComponentFixture<ProductRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
