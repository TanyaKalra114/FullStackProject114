import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceproductsHomeComponent } from './insuranceproducts-home.component';

describe('InsuranceproductsHomeComponent', () => {
  let component: InsuranceproductsHomeComponent;
  let fixture: ComponentFixture<InsuranceproductsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceproductsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceproductsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
