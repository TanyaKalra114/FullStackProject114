import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimNowComponent } from './claim-now.component';

describe('ClaimNowComponent', () => {
  let component: ClaimNowComponent;
  let fixture: ComponentFixture<ClaimNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
