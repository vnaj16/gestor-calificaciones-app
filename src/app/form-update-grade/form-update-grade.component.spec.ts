import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateGradeComponent } from './form-update-grade.component';

describe('FormUpdateGradeComponent', () => {
  let component: FormUpdateGradeComponent;
  let fixture: ComponentFixture<FormUpdateGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdateGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
