import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEvaluacionesRegisterGradeComponent } from './table-evaluaciones-register-grade.component';

describe('TableEvaluacionesRegisterGradeComponent', () => {
  let component: TableEvaluacionesRegisterGradeComponent;
  let fixture: ComponentFixture<TableEvaluacionesRegisterGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEvaluacionesRegisterGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEvaluacionesRegisterGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
