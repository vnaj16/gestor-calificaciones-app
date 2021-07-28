import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCursoRegisterCycleComponent } from './select-curso-register-cycle.component';

describe('SelectCursoRegisterCycleComponent', () => {
  let component: SelectCursoRegisterCycleComponent;
  let fixture: ComponentFixture<SelectCursoRegisterCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCursoRegisterCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCursoRegisterCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
