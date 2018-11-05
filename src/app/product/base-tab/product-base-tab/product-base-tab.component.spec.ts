import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBaseTabComponent } from './product-base-tab.component';

describe('ProductBaseTabComponent', () => {
  let component: ProductBaseTabComponent;
  let fixture: ComponentFixture<ProductBaseTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBaseTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBaseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
