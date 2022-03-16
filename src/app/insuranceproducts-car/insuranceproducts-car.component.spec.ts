import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceproductsCarComponent } from './insuranceproducts-car.component';

describe('InsuranceproductsCarComponent', () => {
  let component: InsuranceproductsCarComponent;
  let fixture: ComponentFixture<InsuranceproductsCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceproductsCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceproductsCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
