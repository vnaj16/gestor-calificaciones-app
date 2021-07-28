import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateEvaluationComponent } from './form-create-evaluation.component';

describe('FormCreateEvaluationComponent', () => {
  let component: FormCreateEvaluationComponent;
  let fixture: ComponentFixture<FormCreateEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
