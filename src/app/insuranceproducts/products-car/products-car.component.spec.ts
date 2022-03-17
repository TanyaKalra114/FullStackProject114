import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCarComponent } from './products-car.component';

describe('ProductsCarComponent', () => {
  let component: ProductsCarComponent;
  let fixture: ComponentFixture<ProductsCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
