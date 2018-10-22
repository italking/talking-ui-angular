import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBaseTableComponent } from './product-base-table.component';

describe('ProductBaseTableComponent', () => {
  let component: ProductBaseTableComponent;
  let fixture: ComponentFixture<ProductBaseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBaseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
