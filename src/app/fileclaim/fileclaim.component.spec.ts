import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileclaimComponent } from './fileclaim.component';

describe('FileclaimComponent', () => {
  let component: FileclaimComponent;
  let fixture: ComponentFixture<FileclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
