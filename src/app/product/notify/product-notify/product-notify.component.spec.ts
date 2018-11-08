import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotifyComponent } from './product-notify.component';

describe('ProductNotifyComponent', () => {
  let component: ProductNotifyComponent;
  let fixture: ComponentFixture<ProductNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
