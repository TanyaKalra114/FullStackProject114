import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLifeComponent } from './products-life.component';

describe('ProductsLifeComponent', () => {
  let component: ProductsLifeComponent;
  let fixture: ComponentFixture<ProductsLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
