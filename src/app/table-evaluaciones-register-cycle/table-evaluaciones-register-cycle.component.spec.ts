import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEvaluacionesRegisterCycleComponent } from './table-evaluaciones-register-cycle.component';

describe('TableEvaluacionesRegisterCycleComponent', () => {
  let component: TableEvaluacionesRegisterCycleComponent;
  let fixture: ComponentFixture<TableEvaluacionesRegisterCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEvaluacionesRegisterCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEvaluacionesRegisterCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
