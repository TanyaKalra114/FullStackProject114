import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceproductsLifeComponent } from './insuranceproducts-life.component';

describe('InsuranceproductsLifeComponent', () => {
  let component: InsuranceproductsLifeComponent;
  let fixture: ComponentFixture<InsuranceproductsLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceproductsLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceproductsLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
