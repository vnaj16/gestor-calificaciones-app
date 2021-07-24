import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateCycleComponent } from './form-create-cycle.component';

describe('FormCreateCycleComponent', () => {
  let component: FormCreateCycleComponent;
  let fixture: ComponentFixture<FormCreateCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
