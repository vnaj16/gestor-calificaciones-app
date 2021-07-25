import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEvaluacionesHomeComponent } from './table-evaluaciones-home.component';

describe('TableEvaluacionesHomeComponent', () => {
  let component: TableEvaluacionesHomeComponent;
  let fixture: ComponentFixture<TableEvaluacionesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEvaluacionesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEvaluacionesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
